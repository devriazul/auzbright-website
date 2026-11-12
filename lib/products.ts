import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import type { IconName, Img, PageData } from "./page-types";

/**
 * A product, stored as content/products/<slug>.json.
 * The text is a short summary of the manufacturer's brochure (or, where there is no brochure,
 * of what the Auzbright site already said about the product).
 */
export interface Product {
  slug: string;
  category: CategoryKey;
  /** Position within its category on listing pages (lowest first) */
  order: number;
  brand: string;
  name: string;
  /** One short line under the name */
  tagline: string;
  /** One or two short paragraphs */
  summary: string[];
  image: Img;
  /** Three to six key features */
  highlights: { icon: IconName; title: string; text: string }[];
  /** Key specifications, as printed in the brochure */
  specs: { label: string; value: string }[];
  /** Warranty as offered by Auzbright, e.g. "5 years warranty" */
  warranty?: string;
  brochure?: { label: string; href: string };
}

export const CATEGORIES = {
  "heat-pump": {
    label: "Heat pump hot water",
    plural: "Heat pump hot water systems",
    intro: "Efficient hot water systems that draw heat from the air.",
    parent: { label: "Residential heat pump", href: "/victoria/energy-efficient-hot-water-solutions-for-homes/" },
  },
  "air-conditioner": {
    label: "Air conditioning",
    plural: "Air conditioning systems",
    intro: "Reverse-cycle split, multi-head and ducted heating and cooling.",
    parent: { label: "Air conditioner", href: "/victoria/split-aircon-rebate-government-program/" },
  },
  battery: {
    label: "Solar battery",
    plural: "Solar batteries",
    intro: "Store daytime solar to use in the evening.",
    parent: { label: "Solar & battery", href: "/solar-battery-solutions/" },
  },
  "solar-system": {
    label: "Solar system",
    plural: "Solar systems",
    intro: "Rooftop solar packages, with or without a battery.",
    parent: { label: "Solar & battery", href: "/solar-battery-solutions/" },
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

const DIR = path.join(process.cwd(), "content", "products");

let cache: Product[] | undefined;

/** All products, grouped by category order then `order`. Read once at build time. */
export function getProducts(): Product[] {
  if (cache) return cache;
  const keys = Object.keys(CATEGORIES);
  cache = readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const p = JSON.parse(readFileSync(path.join(DIR, f), "utf8")) as Product;
      if (p.slug !== f.replace(/\.json$/, "")) throw new Error(`content/products/${f}: slug "${p.slug}" must match the file name`);
      if (!(p.category in CATEGORIES)) throw new Error(`content/products/${f}: unknown category "${p.category}"`);
      for (const k of ["brand", "name", "tagline", "summary", "image", "highlights", "specs"] as const)
        if (p[k] == null) throw new Error(`content/products/${f}: missing "${k}"`);
      return p;
    })
    .sort((a, b) => keys.indexOf(a.category) - keys.indexOf(b.category) || a.order - b.order);
  return cache;
}

export const getProduct = (slug: string) => getProducts().find((p) => p.slug === slug);

export const productHref = (p: Product) => `/products/${p.slug}/`;

/** Lays a product out as a content page: hero, overview, features, specifications, related products. */
export function productPage(p: Product): PageData {
  const cat = CATEGORIES[p.category];
  const others = getProducts()
    .filter((o) => o.category === p.category && o.slug !== p.slug)
    .sort((a, b) => Number(b.brand === p.brand) - Number(a.brand === p.brand))
    .slice(0, 3);
  const full = p.name.toLowerCase().startsWith(p.brand.toLowerCase()) ? p.name : `${p.brand} ${p.name}`;
  return {
    path: productHref(p),
    seoTitle: `${full} | ${cat.label} | Auzbright`,
    description: `${p.tagline.replace(/\.$/, "")}. ${p.summary[0]}`.slice(0, 300).replace(/^(.{0,155})\s.*$/s, "$1").replace(/[,;:.\s]+$/, "") + ".",
    crumbs: [{ label: "Products", href: "/products/" }, { label: cat.parent.label, href: cat.parent.href }, { label: full }],
    hero: {
      eyebrow: `${p.brand} · ${cat.label}`,
      title: full,
      lead: p.tagline,
      image: { ...p.image, fit: "contain" },
      chips: [p.warranty, ...p.specs.slice(0, 2).map((s) => `${s.label}: ${s.value}`)].filter((c): c is string => !!c && c.length <= 44),
      primary: { label: "Get a quote", href: "/enquire-now/" },
      secondary: p.brochure ?? { label: "Call 03 8609 5195", href: "tel:0386095195" },
    },
    sections: [
      {
        type: "split",
        eyebrow: "Overview",
        title: `About the ${full}`,
        body: p.summary,
        cta: p.brochure,
      },
      ...(p.highlights.length
        ? [{ type: "features" as const, tone: "mist" as const, eyebrow: "Key features", title: "What it offers", columns: 3 as const, items: p.highlights }]
        : []),
      ...(p.specs.length
        ? [
            {
              type: "specs" as const,
              eyebrow: "Specifications",
              title: "Key specifications",
              intro: p.brochure
                ? "From the manufacturer’s brochure. Models and specifications can change, so we confirm the exact unit on your written quote."
                : "We confirm the exact unit and its specifications on your written quote.",
              items: p.specs,
            },
          ]
        : []),
      ...(others.length
        ? [
            {
              type: "cards" as const,
              tone: "mist" as const,
              eyebrow: "Compare",
              title: `More ${cat.plural.toLowerCase()}`,
              items: others.map((o) => ({ label: o.brand, title: o.name, text: o.tagline, href: productHref(o), image: { ...o.image, fit: "contain" as const } })),
            },
          ]
        : []),
    ],
  };
}

/** The /products/ page: every product, grouped by category. */
export function productsIndexPage(): PageData {
  const all = getProducts();
  return {
    path: "/products/",
    seoTitle: "Products We Install: Heat Pumps, Air Con, Solar & Batteries | Auzbright",
    description:
      "Browse the heat pump hot water systems, air conditioners, solar batteries and solar packages Auzbright supplies and installs in Victoria and NSW.",
    crumbs: [{ label: "Products" }],
    hero: {
      eyebrow: "Products",
      title: "The products we {supply and install.}",
      lead: "Proven brands, installed by licensed trades. Open a product for a short summary of its features and specifications, and its brochure.",
    },
    sections: (Object.keys(CATEGORIES) as CategoryKey[])
      .filter((k) => all.some((p) => p.category === k))
      .map((k, i) => ({
        type: "cards" as const,
        id: k,
        tone: i % 2 ? ("mist" as const) : ("white" as const),
        eyebrow: CATEGORIES[k].label,
        title: CATEGORIES[k].plural,
        intro: CATEGORIES[k].intro,
        items: all
          .filter((p) => p.category === k)
          .map((p) => ({ label: p.brand, title: p.name, text: p.tagline, href: productHref(p), image: { ...p.image, fit: "contain" as const } })),
      })),
  };
}
