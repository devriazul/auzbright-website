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

/** Categories with their own page (see categoryPage below and app/products/<key>/). */
export const CATEGORY_HUBS: Partial<Record<CategoryKey, string>> = {
  "heat-pump": "/products/heat-pump/",
  "air-conditioner": "/products/air-conditioner/",
};

/** A compact product card (image, name, one line, warranty) with Get a quote and View details buttons. */
const productCard = (p: Product) => ({ brand: p.brand, name: p.name, text: p.tagline, badge: p.warranty, image: p.image, href: productHref(p) });

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
    crumbs: [
      { label: "Products", href: "/products/" },
      CATEGORY_HUBS[p.category]
        ? { label: cat.label, href: CATEGORY_HUBS[p.category] }
        : { label: cat.parent.label, href: cat.parent.href },
      { label: full },
    ],
    hero: {
      eyebrow: `${p.brand} · ${cat.label}`,
      title: full,
      lead: p.tagline,
      image: { ...p.image, fit: "contain" },
      chips: [p.warranty, ...p.specs.slice(0, 2).map((s) => `${s.label}: ${s.value}`)].filter((c): c is string => !!c && c.length <= 44),
      primary: { label: "Get a quote", href: `quote:${p.slug}` },
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
              type: "products" as const,
              tone: "mist" as const,
              eyebrow: "Compare",
              title: `More ${cat.plural.toLowerCase()}`,
              items: others.map(productCard),
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
        type: "products" as const,
        id: k,
        tone: i % 2 ? ("mist" as const) : ("white" as const),
        eyebrow: CATEGORIES[k].label,
        title: CATEGORIES[k].plural,
        intro: CATEGORIES[k].intro,
        items: all.filter((p) => p.category === k).map(productCard),
      })),
  };
}

const blogCard = (slug: string, label: string, title: string, text: string) => ({
  label,
  title,
  text,
  href: `/${slug}/`,
  image: { src: `/assets/images/blog/${slug}-600.webp`, alt: "", width: 600, height: 338 },
});

/** Extra sections for each category page, after the hero and the product list. */
const HUB_CONTENT: Record<"heat-pump" | "air-conditioner", Pick<PageData, "seoTitle" | "description" | "hero"> & { sections: PageData["sections"] }> = {
  "heat-pump": {
    seoTitle: "Heat Pump Hot Water Systems | Victoria & NSW | Auzbright",
    description:
      "Compare the heat pump hot water systems Auzbright supplies and installs, from Emerald, Midea, Neopower, Econova and Ecogenica, and check your VEU or ESS eligibility.",
    hero: {
      eyebrow: "Heat pump hot water",
      title: "Hot water that costs {less to run.}",
      lead: "Swap an old electric or gas tank for an efficient heat pump that draws heat from the air. Installed by licensed plumbers in Victoria and NSW.",
      image: { src: "/assets/images/svc-heat-pump.webp", alt: "Three heat pump hot water systems outside a modern brick home at dusk", width: 900, height: 450 },
      chips: ["Up to 70% lower running costs", "Licensed plumbers", "VEU & ESS eligible"],
      primary: { label: "Get a quote", href: "quote:Residential heat pump" },
      secondary: { label: "Check my eligibility", href: "/#check" },
    },
    sections: [
      {
        type: "features",
        tone: "mist",
        eyebrow: "Why a heat pump",
        title: "Why upgrade your hot water",
        columns: 3,
        items: [
          { icon: "thermo", title: "Heat from the air", text: "A heat pump moves heat from the surrounding air into your water, using far less electricity than an element." },
          { icon: "dollar", title: "Lower running costs", text: "Cut hot water running costs by up to 70% compared with an old electric or gas system." },
          { icon: "sun", title: "Works with solar", text: "Run your heat pump during the day to heat water with your own solar power." },
        ],
      },
      {
        type: "cards",
        eyebrow: "By state and property",
        title: "Heat pump programs in your state",
        intro: "Incentives and rules differ between states, and between homes and businesses.",
        items: [
          { label: "Victoria · Homes", title: "Residential heat pumps in Victoria", href: "/victoria/energy-efficient-hot-water-solutions-for-homes/" },
          { label: "Victoria · Businesses", title: "Commercial heat pumps in Victoria", href: "/victoria/free-hot-water-systems/" },
          { label: "NSW · Homes", title: "Residential heat pumps in NSW", href: "/nsw/energy-efficient-hot-water-solutions-for-homes/" },
          { label: "NSW · Businesses", title: "Commercial heat pumps in NSW", href: "/nsw/energy-efficient-hot-water-solutions-for-businesses/" },
        ],
      },
      {
        type: "cards",
        tone: "mist",
        eyebrow: "Guides",
        title: "Before you upgrade",
        items: [
          blogCard("heat-pump-hot-water-in-victoria", "Victoria", "Heat pump hot water in Victoria", "What to check before upgrading."),
          blogCard("heat-pump-hot-water-for-nsw-homes", "NSW", "Heat pump hot water for NSW homes", "Eligibility questions to ask first."),
          blogCard("replacing-electric-storage-hot-water-with-a-heat-pump-in-western-melbourne", "Guide", "Replacing electric storage hot water", "Moving from an electric tank to a heat pump."),
        ],
      },
    ],
  },
  "air-conditioner": {
    seoTitle: "Air Conditioning: Split, Multi-Head & Ducted Systems | Auzbright",
    description:
      "Compare the reverse-cycle split, multi-head and ducted air conditioning systems Auzbright supplies and installs in Victoria and NSW, from Daikin, Mitsubishi Electric, Panasonic, Rinnai and Midea.",
    hero: {
      eyebrow: "Air conditioning",
      title: "Heating and cooling, {done efficiently.}",
      lead: "Reverse-cycle split, multi-head and ducted systems from proven brands, installed by our team in Victoria and NSW.",
      image: { src: "/assets/images/svc-air-conditioner.webp", alt: "A Mitsubishi Electric split system indoor unit above its outdoor unit on a patio wall", width: 900, height: 450 },
      chips: ["Split, multi-head & ducted", "5–7 year warranties", "Victoria & NSW"],
      primary: { label: "Get a quote", href: "quote:Air conditioner" },
      secondary: { label: "Check my eligibility", href: "/#check" },
    },
    sections: [
      {
        type: "features",
        tone: "mist",
        eyebrow: "Choose your system",
        title: "Which type suits your home?",
        columns: 3,
        items: [
          { icon: "snow", title: "Split system", text: "One indoor unit and one outdoor unit, for heating and cooling a single room or living area." },
          { icon: "home", title: "Multi-head", text: "One outdoor unit powers heating or cooling for several rooms, each with its own temperature control." },
          { icon: "wifi", title: "Ducted", text: "Whole-home heating and cooling through ceiling vents, with zoning and Wi-Fi app control." },
        ],
      },
      {
        type: "cards",
        eyebrow: "Incentives",
        title: "Air conditioning programs",
        items: [
          { label: "Victoria", title: "Split system air conditioner government program", text: "How the Victorian program works and how to apply.", href: "/victoria/split-aircon-rebate-government-program/" },
          { label: "New South Wales", title: "Ask about NSW", text: "Tell us your postcode and we’ll check what’s available for your home.", href: "/#check" },
        ],
      },
      {
        type: "cards",
        tone: "mist",
        eyebrow: "Guides",
        title: "Before you choose",
        items: [
          blogCard("ducted-vs-split-system-air-conditioning", "Guide", "Ducted vs split system", "Which suits your home?"),
          blogCard("multi-head-split-system-air-conditioning", "Guide", "Multi-head split systems", "Several rooms, one outdoor unit."),
          blogCard("split-system-air-conditioning-upgrade-in-victoria", "Victoria", "Split system upgrades in Victoria", "What to know before you upgrade."),
        ],
      },
    ],
  },
};

/** A category page, e.g. /products/heat-pump/: hero, every product in the category, then HUB_CONTENT. */
export function categoryPage(k: "heat-pump" | "air-conditioner"): PageData {
  const c = HUB_CONTENT[k];
  return {
    path: CATEGORY_HUBS[k]!,
    seoTitle: c.seoTitle,
    description: c.description,
    crumbs: [{ label: "Products", href: "/products/" }, { label: CATEGORIES[k].label }],
    hero: c.hero,
    sections: [
      {
        type: "products",
        id: "range",
        eyebrow: "Our range",
        title: CATEGORIES[k].plural,
        intro: CATEGORIES[k].intro,
        items: getProducts().filter((p) => p.category === k).map(productCard),
      },
      ...c.sections,
    ],
  };
}
