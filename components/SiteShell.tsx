import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import FloatingContact from "./FloatingContact";
import QuickQuote from "./QuickQuote";
import { CATEGORIES, getProducts } from "@/lib/products";

/**
 * Shared page frame: skip link, utility bar, navigation, footer and floating contact buttons.
 * `current` is the page's own path (e.g. "/about/"), used to mark its nav links with aria-current.
 */
export default function SiteShell({
  current,
  jsonLd,
  children,
}: {
  current?: string;
  jsonLd?: string;
  children: ReactNode;
}) {
  return (
    <>
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />}
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="ab">
        <SiteHeader current={current} />
        {children}
        <SiteFooter current={current} />
      </div>
      <FloatingContact />
      <QuickQuote
        products={getProducts().map((p) => ({
          value: p.slug,
          label: p.name.toLowerCase().startsWith(p.brand.toLowerCase()) ? p.name : `${p.brand} ${p.name}`,
          group: CATEGORIES[p.category].plural,
        }))}
      />
    </>
  );
}
