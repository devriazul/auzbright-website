import type { ReactNode } from "react";
import type { Metadata } from "next";
import { preload } from "react-dom";
import { link } from "@/lib/site";
import type { Cta, IconName, Img, PageData, Section } from "@/lib/page-types";
import SiteShell from "./SiteShell";
import EligibilityCta from "./EligibilityCta";
import EnquiryForm from "./EnquiryForm";

/* ---------- Small pieces ---------- */

const ICONS: Record<IconName, string> = {
  check: "M9 11l3 3 8-8 M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
  leaf: "M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 12-4 16-9 16Z M4 20c3-4 6-7 10-9",
  shield: "M12 3l8 3v6c0 4.5-3.2 8.3-8 9-4.8-.7-8-4.5-8-9V6l8-3Z M9 12l2 2 4-4",
  wrench: "M14.7 6.3a4 4 0 0 0 5 5L11 20a2.1 2.1 0 0 1-3-3l8.7-8.7a4 4 0 0 0-5-5l2.6 2.6-1.6 1.6Z",
  dollar: "M12 2v20 M17 6.5c0-1.9-2.2-3-5-3s-5 1.1-5 3 2.2 3 5 3.5 5 1.6 5 3.5-2.2 3-5 3-5-1.1-5-3",
  sun: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M12 2v2 M12 20v2 M4.9 4.9l1.4 1.4 M17.7 17.7l1.4 1.4 M2 12h2 M20 12h2 M4.9 19.1l1.4-1.4 M17.7 6.3l1.4-1.4",
  battery: "M7 5h10v16H7z M10 3h4 M13 9l-2 4h3l-2 4",
  wifi: "M5 12.5a10 10 0 0 1 14 0 M8.5 16a5 5 0 0 1 7 0 M2 9a15 15 0 0 1 20 0 M12 19.5h.01",
  thermo: "M10 13.5V5a2 2 0 1 1 4 0v8.5a4 4 0 1 1-4 0Z M12 17v-6",
  snow: "M12 2v20 M4 7l16 10 M20 7 4 17 M9 4l3 2 3-2 M9 20l3-2 3 2",
  drop: "M12 3c3 4 6 7 6 10.5A6 6 0 0 1 6 13.5C6 10 9 7 12 3Z M9.5 14a2.5 2.5 0 0 0 2.5 2.5",
  star: "M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z",
  users:
    "M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1 M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z M21 19v-1a4 4 0 0 0-3-3.9 M15.5 3.1a3.5 3.5 0 0 1 0 6.8",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3 2",
  plug: "M9 2v6 M15 2v6 M6 8h12v3a6 6 0 0 1-12 0V8Z M12 17v5",
  home: "M3 11l9-8 9 8 M5 10v10h14V10 M10 20v-6h4v6",
  chart: "M4 20V10 M10 20V4 M16 20v-8 M22 20H2",
  heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M3 12h18 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18",
  volume: "M11 5 6 9H3v6h3l5 4V5Z M22 9l-6 6 M16 9l6 6",
  doc: "M14 3H6v18h12V7l-4-4Z M14 3v4h4 M9 13h6 M9 17h6",
  phone: "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  mail: "M4 6h16v12H4z M4 7l8 6 8-6",
  pin: "M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  award: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z M8.5 14 7 22l5-3 5 3-1.5-8",
  bulb: "M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9V16h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3Z",
  car: "M5 16l1.5-5.5A2 2 0 0 1 8.4 9h7.2a2 2 0 0 1 1.9 1.5L19 16 M3 16h18v3H3z M7 19v2 M17 19v2",
};

export function Icon({ name = "check", size = 24 }: { name?: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={ICONS[name]} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Arrow({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 10h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Tick() {
  return (
    <span className="tick-dot" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
        <path d="m5 10.5 3.2 3L15 7" stroke="#0E193F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

/** Inline markup: **bold** and [label](href). */
export function Rich({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={m.index}>{m[1]}</strong>);
    else {
      const ext = /^https?:/.test(m[3]);
      out.push(
        <a key={m.index} href={link(m[3])} {...(ext ? { target: "_blank", rel: "noopener" } : {})}>
          {m[2]}
        </a>,
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/** "Plain words {lime words}" */
function Title({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\{[^}]+\})/).map((part, i) =>
        part.startsWith("{") ? (
          <span key={i} style={{ color: "#A0E25F" }}>
            {part.slice(1, -1)}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

function Photo({ img, className = "", priority = false }: { img: Img; className?: string; priority?: boolean }) {
  return (
    <div className={`photo pg-photo ${img.fit === "contain" ? "pg-contain" : ""} ${className}`}>
      <img
        src={link(img.src)}
        width={img.width}
        height={img.height}
        alt={img.alt}
        {...(priority ? { fetchPriority: "high" as const } : { loading: "lazy" as const, decoding: "async" as const })}
      />
    </div>
  );
}

function Button({ cta, kind }: { cta: Cta; kind: string }) {
  const ext = /^https?:/.test(cta.href);
  // "quote:<product slug or name>" opens the quick quote pop-up with that product selected
  if (cta.href.startsWith("quote:"))
    return (
      <button type="button" className={`btn ${kind}`} data-quote={cta.href.slice(6)}>
        {cta.label}
        <Arrow />
      </button>
    );
  return (
    <a className={`btn ${kind}`} href={link(cta.href)} {...(ext ? { target: "_blank", rel: "noopener" } : {})}>
      {cta.label}
      {kind.includes("btn-lime") || kind.includes("btn-navy") ? <Arrow /> : null}
    </a>
  );
}

/** "Emerald Energy® 270L" -> "Emerald Energy 270L"; no doubled brand. */
function quoteLabel(brand: string | undefined, name: string) {
  const b = (brand ?? "").replace(/[®™]/g, "").trim();
  return !b || name.toLowerCase().startsWith(b.toLowerCase()) ? name : `${b} ${name}`;
}

function Head({ s, id }: { s: Section; id: string }) {
  if (!s.eyebrow && !s.title && !s.intro) return null;
  return (
    <div className="pg-head">
      {s.eyebrow && (
        <span className="eyebrow">
          <span className="dot" />
          {s.eyebrow}
        </span>
      )}
      {s.title && (
        <h2 id={id} className="h2 pg-h2">
          {s.title}
        </h2>
      )}
      {s.intro && (
        <p className="lead">
          <Rich text={s.intro} />
        </p>
      )}
    </div>
  );
}

/* ---------- Sections ---------- */

const DEFAULT_REVIEWS = [
  {
    name: "Samuel Hafda",
    text: "Had a great experience dealing with Auzbright. Very experienced. I have dealt with them for my Sydney and Melbourne properties and they are amazing, and helped us reduce our carbon footprint. Highly recommended.",
  },
  {
    name: "Mansi Dhingra",
    text: "Had a great experience with Auzbright. They have been excellent and professional in terms of communication, installation and customer service. Their team is exceptional.",
  },
  { name: "Mridul Chadda", text: "Had a great experience, very friendly staff." },
];

function SectionBody({ s, id }: { s: Section; id: string }) {
  switch (s.type) {
    case "split":
      return (
        <div className={`wrap pg-split ${s.flip ? "is-flip" : ""} ${s.image ? "" : "is-solo"}`}>
          <div className="pg-copy">
            {s.eyebrow && (
              <span className="eyebrow">
                <span className="dot" />
                {s.eyebrow}
              </span>
            )}
            <h2 id={id} className="h2 pg-h2">
              {s.title}
            </h2>
            {s.intro && (
              <p className="lead">
                <Rich text={s.intro} />
              </p>
            )}
            {s.body?.map((p, i) => (
              <p key={i} className="ab-p">
                <Rich text={p} />
              </p>
            ))}
            {s.bullets && (
              <ul className="pg-ticks">
                {s.bullets.map((b, i) => (
                  <li key={i}>
                    <Tick />
                    <span>
                      <Rich text={b} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {s.cta && <Button cta={s.cta} kind="btn-navy" />}
          </div>
          {s.image && <Photo img={s.image} />}
        </div>
      );

    case "features":
      return (
        <div className="wrap pg-stack">
          <Head s={s} id={id} />
          <ul className={`g-${s.columns ?? 3} pg-list`}>
            {s.items.map((it, i) => (
              <li key={i} className="why-card">
                <span className="why-ico">
                  <Icon name={it.icon} />
                </span>
                <div>
                  <h3>{it.title}</h3>
                  {it.text && (
                    <p className="why-d">
                      <Rich text={it.text} />
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );

    case "steps":
      return (
        <div className="wrap pg-stack">
          <Head s={s} id={id} />
          <ol className={`g-${s.items.length === 3 ? 3 : 4} steps ab-steps`}>
            {s.items.map((it, i) => (
              <li key={i}>
                <span className="factor-n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{it.title}</h3>
                {it.text && (
                  <p>
                    <Rich text={it.text} />
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      );

    case "products":
      return (
        <div className="wrap pg-stack">
          <Head s={s} id={id} />
          <ul className="g-3 pg-list pg-prods">
            {s.items.map((it, i) => (
              <li key={i} className="pg-prod">
                {it.image && (
                  <div className="pg-prod-img">
                    <img
                      src={link(it.image.src)}
                      width={it.image.width}
                      height={it.image.height}
                      alt={it.image.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    {it.badge && (
                      <span className="pg-badge">
                        <Icon name="shield" size={16} />
                        {it.badge}
                      </span>
                    )}
                  </div>
                )}
                <div className="pg-prod-body">
                  {it.brand && <p className="why-k">{it.brand}</p>}
                  <h3>{it.href ? <a href={link(it.href)}>{it.name}</a> : it.name}</h3>
                  {it.badge && !it.image && (
                    <span className="pg-badge">
                      <Icon name="shield" size={16} />
                      {it.badge}
                    </span>
                  )}
                  {it.text && (
                    <p className="why-d">
                      <Rich text={it.text} />
                    </p>
                  )}
                  {it.features && (
                    <ul className="pg-feats">
                      {it.features.map((f, j) => (
                        <li key={j}>{f}</li>
                      ))}
                    </ul>
                  )}
                  <div className="pg-prod-foot">
                    {/* Two clear actions side by side: ask for a quote, or read more */}
                    <div className={`pg-prod-actions ${it.href ? "" : "is-single"}`}>
                      <button
                        type="button"
                        className="btn btn-lime btn-sm"
                        data-quote={it.href?.match(/^\/products\/([^/]+)\/$/)?.[1] ?? quoteLabel(it.brand, it.name)}
                        data-quote-label={quoteLabel(it.brand, it.name)}
                        aria-label={`Get a quote: ${quoteLabel(it.brand, it.name)}`}
                      >
                        Get a quote
                      </button>
                      {it.href && (
                        <a
                          className="btn btn-ghost btn-sm"
                          href={link(it.href)}
                          aria-label={`View details: ${quoteLabel(it.brand, it.name)}`}
                        >
                          View details
                        </a>
                      )}
                    </div>
                    {it.links?.map((l, j) => {
                      const file = /\.pdf$/.test(l.href);
                      return (
                        <a
                          key={j}
                          className="pg-prod-link"
                          href={link(l.href)}
                          {...(file ? { target: "_blank", rel: "noopener" } : {})}
                        >
                          <Icon name={file ? "doc" : "check"} size={16} />
                          {l.label}
                          {file && <span className="pg-prod-file">PDF</span>}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );

    case "specs":
      return (
        <div className={`wrap ${s.image ? "pg-split" : "pg-stack"}`}>
          <div className="pg-copy" style={{ alignItems: "stretch" }}>
            <Head s={s} id={id} />
            <dl className="pg-specs">
              {s.items.map((it, i) => (
                <div key={i}>
                  <dt>{it.label}</dt>
                  <dd>{it.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          {s.image && <Photo img={s.image} />}
        </div>
      );

    case "stats":
      return (
        <div className="wrap pg-stack">
          <Head s={s} id={id} />
          <ul className="g-4 ab-stats">
            {s.items.map((it, i) => (
              <li key={i}>
                <span className="ab-stat-v">{it.value}</span>
                <span className="ab-stat-l">{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "faq":
      return (
        <div className="wrap pg-stack pg-narrow">
          <Head s={s} id={id} />
          <div className="faq-list">
            {s.items.map((it, i) => (
              <div key={i} className="faq-item">
                <h3 style={{ margin: 0 }}>
                  <button type="button" className="faq-q" aria-expanded={i === 0} data-onclick="f.toggle">
                    {it.q}
                    <span className={`faq-i ${i === 0 ? "on" : ""}`} aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path
                          d={i === 0 ? "M4 10h12" : "M10 4v12M4 10h12"}
                          stroke="#0E193F"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div className="faq-a pg-faq-a" hidden={i !== 0}>
                  {it.a.map((p, j) => (
                    <p key={j}>
                      <Rich text={p} />
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "reviews":
      return (
        <div className="wrap pg-stack">
          <Head s={s} id={id} />
          <ul className="g-3 pg-list">
            {(s.items ?? DEFAULT_REVIEWS).map((r, i) => (
              <li key={i} className="pg-rv">
                <span className="pg-stars" role="img" aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
                <blockquote>“{r.text}”</blockquote>
                <p className="pg-rv-name">
                  <span className="pg-rv-av" aria-hidden="true">
                    {r.name[0]}
                  </span>
                  {r.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      );

    case "cards":
      return (
        <div className="wrap pg-stack">
          <Head s={s} id={id} />
          <div className={`g-${s.items.length === 2 || s.items.length === 4 ? 2 : 3} ab-states`}>
            {s.items.map((it, i) => (
              <a key={i} className="ab-state" href={link(it.href)}>
                {it.image && (
                  <span className={`photo ${it.image.fit === "contain" ? "pg-contain" : ""}`}>
                    <img
                      src={link(it.image.src)}
                      width={it.image.width}
                      height={it.image.height}
                      alt={it.image.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                )}
                <span className="ab-state-body">
                  {it.label && <span className="why-k">{it.label}</span>}
                  <strong>{it.title}</strong>
                  {it.text && <span className="why-d">{it.text}</span>}
                  <span className="ct-go">
                    Learn more
                    <Arrow size={16} />
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      );

    case "prose":
      return (
        <div className="wrap pg-narrow">
          <Head s={s} id={id} />
          <div className="post-body">
            {s.blocks.map((b, i) => (
              <div key={i}>
                {b.heading && <h2>{b.heading}</h2>}
                {b.paragraphs?.map((p, j) => (
                  <p key={j}>
                    <Rich text={p} />
                  </p>
                ))}
                {b.bullets && (
                  <ul>
                    {b.bullets.map((x, j) => (
                      <li key={j}>
                        <Rich text={x} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case "form":
      return null; // rendered as its own <section> below
  }
}

/* ---------- Page ---------- */

/** Next.js metadata for a content page. */
export function pageMetadata(data: PageData): Metadata {
  return {
    title: data.seoTitle,
    description: data.description,
    alternates: { canonical: data.path },
    robots: data.noindex ? { index: false } : undefined,
    openGraph: {
      type: "website",
      siteName: "Auzbright",
      title: data.seoTitle,
      description: data.description,
      url: data.path,
      images: data.hero.image?.src ?? "/assets/images/hero-family.webp",
    },
  };
}

/** `extraJsonLd` adds a second structured-data object (e.g. Product) beside the breadcrumbs. */
export default function ContentPage({ data, extraJsonLd }: { data: PageData; extraJsonLd?: object }) {
  const { hero } = data;
  if (hero.image) preload(link(hero.image.src), { as: "image" });
  const crumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...data.crumbs].map((c, i, all) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `https://auzbright.com.au${i === all.length - 1 ? data.path : (c.href ?? data.path)}`,
    })),
  };
  return (
    <SiteShell current={data.path} jsonLd={JSON.stringify(extraJsonLd ? [crumbsLd, extraJsonLd] : crumbsLd)}>
      <main id="main">
        <section className={`dark ab-hero pg-hero ${hero.image ? "" : "is-solo"}`} aria-labelledby="pg-h">
          <div className="wrap ab-hero-in">
            <div className="ab-hero-copy">
              <nav className="crumbs" aria-label="Breadcrumb">
                <a href={link("/")}>Home</a>
                {data.crumbs.map((c, i) => (
                  <span key={i} style={{ display: "contents" }}>
                    <span aria-hidden="true">/</span>
                    {c.href && i < data.crumbs.length - 1 ? (
                      <a href={link(c.href)}>{c.label}</a>
                    ) : (
                      <span aria-current="page">{c.label}</span>
                    )}
                  </span>
                ))}
              </nav>
              <span className="eyebrow">
                <span className="dot" />
                {hero.eyebrow}
              </span>
              <h1 id="pg-h" className="ct-h1 pg-h1">
                <Title text={hero.title} />
              </h1>
              {hero.lead && (
                <p className="lead">
                  <Rich text={hero.lead} />
                </p>
              )}
              {hero.chips && (
                <ul className="pg-chips">
                  {hero.chips.map((c, i) => (
                    <li key={i}>
                      <Tick />
                      {c}
                    </li>
                  ))}
                </ul>
              )}
              <div className="btn-row">
                <Button cta={hero.primary ?? { label: "Check My Eligibility", href: "/#check" }} kind="btn-lime" />
                <Button
                  cta={hero.secondary ?? { label: "Call 03 8609 5195", href: "tel:0386095195" }}
                  kind="btn-ghost-dark"
                />
              </div>
            </div>
            {hero.image && <Photo img={hero.image} className="ab-hero-photo" priority />}
          </div>
        </section>

        {data.sections.map((s, i) => {
          const id = `s${i + 1}-h`;
          if (s.type === "form") return <EnquiryForm key={i} />;
          return (
            <section
              key={i}
              id={s.id}
              className={`sec pg-sec ${s.tone === "mist" ? "mist" : ""}`}
              {...(s.title ? { "aria-labelledby": id } : {})}
            >
              <SectionBody s={s} id={id} />
            </section>
          );
        })}

        {data.cta !== false && <EligibilityCta />}
      </main>
    </SiteShell>
  );
}
