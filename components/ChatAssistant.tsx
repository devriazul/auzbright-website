"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { link } from "@/lib/site";

/**
 * Guided chat assistant shown in the floating chat panel. DEMO: it follows a fixed script
 * (product, full name, phone, customer check) rather than calling an AI model, and it keeps
 * leads in this browser only. See "Chat assistant" in the README for how to connect it.
 */

/** Set NEXT_PUBLIC_CHAT_LEAD_ENDPOINT to POST each finished lead as JSON. Empty: nothing is sent. */
const LEAD_ENDPOINT = process.env.NEXT_PUBLIC_CHAT_LEAD_ENDPOINT || "";
const STORE_KEY = "auzbright-chat-leads";

/** Sample records so the "existing customer" path can be shown. Replace with a real lookup. */
const DEMO_CUSTOMERS: Record<string, { name: string; lastProduct: string }> = {
  "0412345678": { name: "Sam Taylor", lastProduct: "Residential Heat Pump" },
  "0498765432": { name: "Priya Sharma", lastProduct: "Solar & Battery" },
};

const PRODUCTS = [
  { key: "heat-pump", label: "Residential Heat Pump", vic: "/victoria/energy-efficient-hot-water-solutions-for-homes/", nsw: "/nsw/energy-efficient-hot-water-solutions-for-homes/" },
  { key: "air-con", label: "Air Conditioner", vic: "/victoria/split-aircon-rebate-government-program/", nsw: "/#air-conditioner" },
  { key: "solar", label: "Solar & Battery", vic: "/solar-battery-solutions/", nsw: "/solar-battery-solutions/" },
  { key: "ev", label: "EV Charger", vic: "/ev-charger/", nsw: "/ev-charger/" },
  { key: "led", label: "LED Lighting", vic: "/#led-lighting", nsw: "/#led-lighting" },
  { key: "water", label: "Water Filter", vic: "/#water-filter", nsw: "/#water-filter" },
  { key: "unsure", label: "Not sure yet", vic: "/products/", nsw: "/products/" },
] as const;

type Product = (typeof PRODUCTS)[number];
type Step = "product" | "name" | "phone" | "checking" | "existing" | "postcode" | "done";

interface Msg {
  from: "bot" | "user";
  text: string;
  /** A status card instead of a plain bubble */
  status?: "existing" | "new";
  /** A link shown under the text */
  action?: { label: string; href: string };
}

interface Lead {
  product: string;
  name: string;
  phone: string;
  postcode?: string;
  state?: string;
  customerType: "existing" | "new";
  request?: string;
  createdAt: string;
  source: "Chat assistant";
}

const normalisePhone = (v: string) => v.replace(/[\s()+-]/g, "").replace(/^61/, "0");
const validPhone = (v: string) => /^0[2-478]\d{8}$/.test(normalisePhone(v));
const firstName = (name: string) => name.trim().split(/\s+/)[0];

function stateFor(postcode: string): { state: string; program: string } | null {
  const n = Number(postcode);
  if ((n >= 3000 && n <= 3999) || (n >= 8000 && n <= 8999)) return { state: "VIC", program: "Victorian Energy Upgrades (VEU) program" };
  if ((n >= 2600 && n <= 2618) || (n >= 2900 && n <= 2920)) return null; // ACT
  if ((n >= 1000 && n <= 2999)) return { state: "NSW", program: "NSW Energy Savings Scheme (ESS)" };
  return null;
}

function readLeads(): Lead[] {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || "[]") as Lead[];
  } catch {
    return [];
  }
}

function saveLead(lead: Lead) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify([...readLeads(), lead]));
  } catch {
    /* private mode or storage full: the demo still works */
  }
  if (LEAD_ENDPOINT) {
    fetch(LEAD_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) }).catch(() => {});
  }
}

/** DEMO lookup: the sample records above, plus anyone who finished this chat in this browser before. */
function lookupCustomer(phone: string): { name: string; lastProduct: string } | null {
  const key = normalisePhone(phone);
  if (DEMO_CUSTOMERS[key]) return DEMO_CUSTOMERS[key];
  const prior = readLeads().filter((l) => normalisePhone(l.phone) === key).pop();
  return prior ? { name: prior.name, lastProduct: prior.product } : null;
}

const GREETING: Msg = {
  from: "bot",
  text: "Hi, I’m the Auzbright assistant. I can check your details and get the right person to call you. Which upgrade are you interested in?",
};

export default function ChatAssistant() {
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [step, setStep] = useState<Step>("product");
  const [typing, setTyping] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const data = useRef<{ product?: Product; name: string; phone: string }>({ name: "", phone: "" });
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timers = useRef<number[]>([]);

  const say = (...m: Msg[]) => setMsgs((prev) => [...prev, ...m]);

  /** Bot replies after a short "typing" pause, then moves to the next step. */
  function reply(next: Step, delay: number, ...m: Msg[]) {
    setTyping(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = window.setTimeout(() => {
      setTyping(false);
      say(...m);
      setStep(next);
    }, reduce ? 0 : delay);
    timers.current.push(id);
  }

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // Keep the newest message in view.
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, typing]);

  // main.js shows and hides the panel by toggling `hidden`; focus the text box when it opens or a step needs typing.
  useEffect(() => {
    const panel = document.getElementById("chat-panel");
    if (!panel) return;
    const focus = () => {
      if (!panel.hidden) inputRef.current?.focus({ preventScroll: true });
    };
    focus();
    const mo = new MutationObserver(focus);
    mo.observe(panel, { attributes: true, attributeFilter: ["hidden"] });
    return () => mo.disconnect();
  }, [step]);

  function pickProduct(p: Product) {
    data.current.product = p;
    say({ from: "user", text: p.label });
    setStep("checking");
    reply("name", 600, {
      from: "bot",
      text: p.key === "unsure" ? "No problem, we can help you choose. What’s your full name?" : `${p.label}, good choice. What’s your full name?`,
    });
  }

  function submitText(e: FormEvent) {
    e.preventDefault();
    const v = value.trim();
    if (step === "name") {
      if (v.replace(/[^A-Za-z]/g, "").length < 2) return setError("Please enter your full name.");
      data.current.name = v;
      say({ from: "user", text: v });
      setValue("");
      setError("");
      setStep("checking");
      reply("phone", 600, { from: "bot", text: `Thanks, ${firstName(v)}. What’s the best phone number to reach you on?` });
    } else if (step === "phone") {
      if (!validPhone(v)) return setError("Please enter a valid Australian phone number, like 0412 345 678.");
      data.current.phone = v;
      say({ from: "user", text: v });
      setValue("");
      setError("");
      setStep("checking");
      checkCustomer();
    } else if (step === "postcode") {
      if (!/^\d{4}$/.test(v)) return setError("Please enter a 4-digit postcode.");
      say({ from: "user", text: v });
      setValue("");
      setError("");
      setStep("checking");
      finishNew(v);
    }
  }

  function checkCustomer() {
    const { name, phone, product } = data.current;
    setTyping(true);
    const id = window.setTimeout(() => {
      const found = lookupCustomer(phone);
      setTyping(false);
      if (found) {
        say(
          { from: "bot", status: "existing", text: `Existing customer · ${found.name}` },
          {
            from: "bot",
            text: `Welcome back, ${firstName(name)}. We already have your details on file (last enquiry: ${found.lastProduct}). How can we help today?`,
          },
        );
        setStep("existing");
      } else {
        say(
          { from: "bot", status: "new", text: "New customer" },
          {
            from: "bot",
            text: `Welcome to Auzbright, ${firstName(name)}. I couldn’t find that number, so I’ll set you up as a new customer. What’s your postcode? It tells us which government incentives may apply${product && product.key !== "unsure" ? ` to your ${product.label.toLowerCase()}` : ""}.`,
          },
        );
        setStep("postcode");
      }
    }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1100);
    timers.current.push(id);
  }

  function finishNew(postcode: string) {
    const { name, phone, product } = data.current;
    const area = stateFor(postcode);
    saveLead({
      product: product?.label ?? "", name, phone, postcode, state: area?.state ?? "Other",
      customerType: "new", createdAt: new Date().toISOString(), source: "Chat assistant",
    });
    const page = product ? (area?.state === "NSW" ? product.nsw : product.vic) : "/products/";
    reply(
      "done",
      800,
      area
        ? {
            from: "bot",
            text: `Thanks. ${postcode} is in ${area.state === "VIC" ? "Victoria" : "New South Wales"}, where the ${area.program} may lower the cost for eligible properties. A specialist will call you on ${phone} during business hours (Mon–Fri, 9am–5pm) to check eligibility and prepare a written quote.`,
            action: { label: product?.key === "unsure" ? "Browse our products" : `About ${product?.label}`, href: page },
          }
        : {
            from: "bot",
            text: `Thanks. We install in Victoria and New South Wales, and ${postcode} looks to be outside those areas. We’ve noted your details, and our team will call you on ${phone} to confirm what we can do.`,
            action: { label: "Browse our products", href: "/products/" },
          },
    );
  }

  function finishExisting(request: "quote" | "warranty" | "callback") {
    const { name, phone, product } = data.current;
    const label = { quote: `A quote for ${product?.key === "unsure" ? "a new upgrade" : product?.label}`, warranty: "Warranty or service", callback: "Ask for a call back" }[request];
    say({ from: "user", text: label });
    setStep("checking");
    saveLead({ product: product?.label ?? "", name, phone, customerType: "existing", request: label, createdAt: new Date().toISOString(), source: "Chat assistant" });
    const text = {
      quote: `Done. As an existing customer you won’t need to repeat your details. A specialist will call you on ${phone} during business hours (Mon–Fri, 9am–5pm) with a written quote.`,
      warranty: `Sorry to hear something needs attention. I’ve flagged this as a warranty or service request, and our team will call you on ${phone} during business hours. You can also send the details now.`,
      callback: `No problem. Our team will call you on ${phone} during business hours (Mon–Fri, 9am–5pm).`,
    }[request];
    reply("done", 800, {
      from: "bot",
      text,
      action:
        request === "warranty"
          ? { label: "Open the warranty form", href: "/contact/?enquiry=warranty#contact-form" }
          : { label: product?.key === "unsure" ? "Browse our products" : `About ${product?.label}`, href: product?.vic ?? "/products/" },
    });
  }

  function restart() {
    timers.current.forEach(clearTimeout);
    data.current = { name: "", phone: "" };
    setMsgs([GREETING]);
    setTyping(false);
    setValue("");
    setError("");
    setStep("product");
  }

  const asksText = step === "name" || step === "phone" || step === "postcode";
  const field = {
    name: { label: "Your full name", type: "text", auto: "name", mode: "text" as const },
    phone: { label: "Your phone number", type: "tel", auto: "tel", mode: "tel" as const },
    postcode: { label: "Your postcode", type: "text", auto: "postal-code", mode: "numeric" as const },
  }[asksText ? step : "name"];

  return (
    // main.js closes the panel on clicks outside #fab. A chip that React removes from the page mid-click
    // would look like an outside click, so stop the click before that handler sees it.
    <div className="ca" onClick={(e) => e.nativeEvent.stopImmediatePropagation()}>
      <div className="ca-log" ref={logRef} role="log" aria-live="polite" aria-label="Conversation" tabIndex={0}>
        {msgs.map((m, i) =>
          m.status ? (
            <p key={i} className={`ca-status is-${m.status}`}>
              <span aria-hidden="true" />
              {m.text}
            </p>
          ) : (
            <div key={i} className={`ca-msg is-${m.from}`}>
              <span className="sr-only">{m.from === "bot" ? "Assistant: " : "You: "}</span>
              {m.text}
              {m.action && (
                <a className="ca-link" href={link(m.action.href)}>
                  {m.action.label} →
                </a>
              )}
            </div>
          ),
        )}
        {typing && (
          <div className="ca-msg is-bot ca-typing" aria-label="Assistant is typing">
            <span />
            <span />
            <span />
          </div>
        )}
      </div>

      {step === "product" && (
        <div className="ca-chips" role="group" aria-label="Choose an upgrade">
          {PRODUCTS.map((p) => (
            <button key={p.key} type="button" onClick={() => pickProduct(p)}>
              {p.label}
            </button>
          ))}
        </div>
      )}

      {step === "existing" && (
        <div className="ca-chips" role="group" aria-label="Choose what you need">
          <button type="button" onClick={() => finishExisting("quote")}>
            A quote for {data.current.product?.key === "unsure" ? "a new upgrade" : data.current.product?.label}
          </button>
          <button type="button" onClick={() => finishExisting("warranty")}>
            Warranty or service
          </button>
          <button type="button" onClick={() => finishExisting("callback")}>
            Ask for a call back
          </button>
        </div>
      )}

      {asksText && (
        <form className="ca-form" onSubmit={submitText} noValidate>
          <label className="sr-only" htmlFor="ca-input">
            {field.label}
          </label>
          <input
            id="ca-input"
            ref={inputRef}
            type={field.type}
            inputMode={field.mode}
            autoComplete={field.auto}
            placeholder={field.label}
            value={value}
            maxLength={step === "postcode" ? 4 : 80}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? "ca-err" : undefined}
            onChange={(e) => {
              setValue(e.target.value);
              if (error) setError("");
            }}
          />
          <button type="submit" aria-label="Send">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {error && (
            <p id="ca-err" className="ca-err" role="alert">
              {error}
            </p>
          )}
        </form>
      )}

      {step === "done" && (
        <div className="ca-chips">
          <button type="button" onClick={restart}>
            Start again
          </button>
        </div>
      )}

      <p className="ca-foot">
        Prefer to talk? <a href="tel:0386095195">Call 03 8609 5195</a> or <a href="mailto:admin@auzbright.com.au">email us</a>. By
        continuing you agree to our <a href={link("/privacy-policy/")}>privacy policy</a>.
      </p>
    </div>
  );
}
