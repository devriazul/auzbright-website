"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

/**
 * Quick quote pop-up. One dialog per page, opened by any element with a `data-quote` attribute:
 *   <button data-quote="sungrow-battery" data-quote-label="Sungrow Battery">Get a quote</button>
 * `data-quote` is a product slug (or any text); the product is preselected in the form.
 *
 * Set NEXT_PUBLIC_QUOTE_ENDPOINT to POST each request as JSON. While it is empty the pop-up runs
 * as a DEMO: requests are kept in this browser only and the dialog shows a "Demo" tag.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_QUOTE_ENDPOINT || "";
const STORE_KEY = "auzbright-quote-requests";

export interface QuoteOption {
  value: string;
  label: string;
  group: string;
}

const GENERAL: QuoteOption[] = [
  { value: "Residential heat pump", label: "Residential heat pump", group: "Upgrade type" },
  { value: "Air conditioner", label: "Air conditioner", group: "Upgrade type" },
  { value: "Solar & battery", label: "Solar & battery", group: "Upgrade type" },
  { value: "EV charger", label: "EV charger", group: "Upgrade type" },
  { value: "LED lighting", label: "LED lighting", group: "Upgrade type" },
  { value: "Water filter", label: "Water filter", group: "Upgrade type" },
  { value: "Not sure yet", label: "Not sure yet", group: "Upgrade type" },
];

const validPhone = (v: string) => /^0[2-478]\d{8}$/.test(v.replace(/[\s()+-]/g, "").replace(/^61/, "0"));

type Status = "form" | "sending" | "done" | "failed";

export default function QuickQuote({ products }: { products: QuoteOption[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [extra, setExtra] = useState<QuoteOption | null>(null); // a product that is not in the list
  const [product, setProduct] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [errors, setErrors] = useState<{ product?: string; name?: string; phone?: string; postcode?: string }>({});
  const [status, setStatus] = useState<Status>("form");

  const options = [...products, ...(extra ? [extra] : []), ...GENERAL];
  const labelOf = (v: string) => options.find((o) => o.value === v)?.label ?? v;

  // Open from any [data-quote] element on the page.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement).closest?.("[data-quote]") as HTMLElement | null;
      if (!el) return;
      e.preventDefault();
      const value = el.dataset.quote || "";
      const known = [...products, ...GENERAL].some((o) => o.value === value);
      setExtra(value && !known ? { value, label: el.dataset.quoteLabel || value, group: "Selected product" } : null);
      setProduct(value);
      setErrors({});
      setStatus("form");
      opener.current = el;
      dialog.current?.showModal();
      // The product is already chosen, so start at the first empty field.
      document.getElementById(value ? "qq-name" : "qq-product")?.focus();
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [products]);

  /** Clear a field's error as soon as the visitor changes it. */
  const clear = (k: keyof typeof errors) => setErrors((prev) => (prev[k] ? { ...prev, [k]: undefined } : prev));

  function close() {
    dialog.current?.close();
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    const errs: typeof errors = {};
    if (!product) errs.product = "Choose a product.";
    if (name.replace(/[^A-Za-z]/g, "").length < 2) errs.name = "Enter your full name.";
    if (!validPhone(phone)) errs.phone = "Enter a valid Australian phone number.";
    if (postcode && !/^\d{4}$/.test(postcode)) errs.postcode = "Enter a 4-digit postcode, or leave it blank.";
    setErrors(errs);
    const first = (["product", "name", "phone", "postcode"] as const).find((k) => errs[k]);
    if (first) {
      document.getElementById(`qq-${first}`)?.focus();
      return;
    }
    const request = {
      product: labelOf(product),
      productId: product,
      name: name.trim(),
      phone: phone.trim(),
      postcode,
      page: window.location.pathname,
      createdAt: new Date().toISOString(),
      source: "Quick quote",
    };
    if (!ENDPOINT) {
      // Demo: nothing is sent. Keep a copy in this browser so the flow can be shown.
      try {
        const all = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
        localStorage.setItem(STORE_KEY, JSON.stringify([...all, request]));
      } catch {
        /* storage unavailable: still show the confirmation */
      }
      setStatus("done");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(request) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("done");
    } catch {
      setStatus("failed");
    }
  }

  const groups = [...new Set(options.map((o) => o.group))];
  const firstName = name.trim().split(/\s+/)[0];
  const describedBy = (k: keyof typeof errors) => (errors[k] ? { "aria-invalid": true as const, "aria-describedby": `qq-${k}-err` } : {});

  return (
    <dialog
      ref={dialog}
      className="qq"
      aria-labelledby="qq-h"
      onClose={() => opener.current?.focus()}
      onClick={(e) => {
        if (e.target === dialog.current) close(); // click on the backdrop
      }}
    >
      <div className="qq-box">
        <div className="qq-head">
          <div>
            <p className="cp-k">
              <span className="cp-dot" aria-hidden="true" />
              Free, no obligation
              {!ENDPOINT && <span className="ca-demo">Demo</span>}
            </p>
            <h2 id="qq-h">{status === "done" ? "Request received" : "Get a quick quote"}</h2>
          </div>
          <button type="button" className="cp-close" aria-label="Close" onClick={close}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {status === "done" ? (
          <div className="qq-done" role="status">
            <span className="qq-tick" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 20 20" fill="none">
                <path d="m5 10.5 3.2 3L15 7" stroke="#0E193F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p>
              Thanks, {firstName}. We have your request for a quote on <strong>{labelOf(product)}</strong>. A specialist will call you on{" "}
              <strong>{phone.trim()}</strong> during business hours (Mon–Fri, 9am–5pm).
            </p>
            <button type="button" className="btn btn-navy" onClick={close}>
              Done
            </button>
          </div>
        ) : (
          <form className="qq-form" onSubmit={submit} noValidate>
            <div className="ct-fld">
              <label htmlFor="qq-product">Product</label>
              <select id="qq-product" value={product} onChange={(e) => (setProduct(e.target.value), clear("product"))} {...describedBy("product")}>
                <option value="">Choose a product</option>
                {groups.map((g) => (
                  <optgroup key={g} label={g}>
                    {options
                      .filter((o) => o.group === g)
                      .map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </select>
              {errors.product && (
                <p className="ct-err" id="qq-product-err">
                  {errors.product}
                </p>
              )}
            </div>
            <div className="ct-fld">
              <label htmlFor="qq-name">Full name</label>
              <input id="qq-name" type="text" autoComplete="name" value={name} maxLength={80} onChange={(e) => (setName(e.target.value), clear("name"))} {...describedBy("name")} />
              {errors.name && (
                <p className="ct-err" id="qq-name-err">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="qq-row">
              <div className="ct-fld">
                <label htmlFor="qq-phone">Phone</label>
                <input id="qq-phone" type="tel" inputMode="tel" autoComplete="tel" value={phone} maxLength={20} onChange={(e) => (setPhone(e.target.value), clear("phone"))} {...describedBy("phone")} />
                {errors.phone && (
                  <p className="ct-err" id="qq-phone-err">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="ct-fld">
                <label htmlFor="qq-postcode">
                  Postcode <span className="qq-opt">(optional)</span>
                </label>
                <input
                  id="qq-postcode"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  value={postcode}
                  maxLength={4}
                  onChange={(e) => (setPostcode(e.target.value.replace(/\D/g, "")), clear("postcode"))}
                  {...describedBy("postcode")}
                />
                {errors.postcode && (
                  <p className="ct-err" id="qq-postcode-err">
                    {errors.postcode}
                  </p>
                )}
              </div>
            </div>
            {status === "failed" && (
              <p className="ct-status bad" role="alert">
                Sorry, your request couldn’t be sent. Please try again, or call <a href="tel:0386095195">03 8609 5195</a>.
              </p>
            )}
            <button type="submit" className="btn btn-lime qq-submit" disabled={status === "sending"} aria-busy={status === "sending"}>
              {status === "sending" ? "Sending…" : "Request my quote"}
            </button>
            <p className="qq-note">We’ll call to confirm your details and any incentives, then send a written quote. No obligation.</p>
          </form>
        )}
      </div>
    </dialog>
  );
}
