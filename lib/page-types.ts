/**
 * Content model for the data-driven pages in content/pages/.
 * Each page is a PageData object rendered by components/ContentPage.tsx.
 *
 * Text fields accept light inline markup: **bold** and [label](href).
 * Hrefs starting with "/" are site paths (BASE is added when rendering).
 */

export type IconName =
  | "check" | "bolt" | "leaf" | "shield" | "wrench" | "dollar" | "sun" | "battery" | "wifi" | "thermo"
  | "snow" | "drop" | "star" | "users" | "clock" | "plug" | "home" | "chart" | "heart" | "globe"
  | "volume" | "doc" | "phone" | "mail" | "pin" | "award" | "bulb" | "car";

export interface Img {
  /** Site path, e.g. "/assets/images/pages/veu-img.webp" */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** "contain" for product cut-outs on a light panel; default crops to fill */
  fit?: "cover" | "contain";
}

export interface Cta {
  label: string;
  /** A site path, URL, tel: or mailto: link; or "quote:<product slug or name>" to open the quick quote pop-up */
  href: string;
}

interface SectionBase {
  /** Anchor id for in-page links */
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  /** Background: white (default) or pale "mist" */
  tone?: "white" | "mist";
}

/** Text beside an image */
export interface SplitSection extends SectionBase {
  type: "split";
  title: string;
  body?: string[];
  bullets?: string[];
  image?: Img;
  cta?: Cta;
  /** Put the image on the left */
  flip?: boolean;
}

/** Grid of icon cards */
export interface FeaturesSection extends SectionBase {
  type: "features";
  items: { icon?: IconName; title: string; text?: string }[];
  columns?: 2 | 3 | 4;
}

/** Numbered steps */
export interface StepsSection extends SectionBase {
  type: "steps";
  items: { title: string; text?: string }[];
}

/** Product cards: brand, model, features, warranty, brochure links */
export interface ProductsSection extends SectionBase {
  type: "products";
  items: {
    brand?: string;
    name: string;
    /** The product's detail page, e.g. "/products/sungrow-battery/" */
    href?: string;
    text?: string;
    features?: string[];
    /** e.g. "5 years warranty" */
    badge?: string;
    image?: Img;
    links?: Cta[];
  }[];
}

/** Key facts as label/value pairs */
export interface SpecsSection extends SectionBase {
  type: "specs";
  items: { label: string; value: string }[];
  image?: Img;
}

/** Big numbers */
export interface StatsSection extends SectionBase {
  type: "stats";
  items: { value: string; label: string }[];
}

export interface FaqSection extends SectionBase {
  type: "faq";
  items: { q: string; a: string[] }[];
}

/** Customer quotes */
export interface ReviewsSection extends SectionBase {
  type: "reviews";
  items?: { name: string; text: string }[];
}

/** Linked cards, e.g. a state hub linking to its product pages */
export interface CardsSection extends SectionBase {
  type: "cards";
  items: { title: string; text?: string; href: string; image?: Img; label?: string }[];
}

/** Long-form text (policies) */
export interface ProseSection extends SectionBase {
  type: "prose";
  blocks: { heading?: string; paragraphs?: string[]; bullets?: string[] }[];
}

/** The enquiry form (same form and handler as the Contact Us page) */
export interface FormSection extends SectionBase {
  type: "form";
}

export type Section =
  | SplitSection | FeaturesSection | StepsSection | ProductsSection | SpecsSection | StatsSection
  | FaqSection | ReviewsSection | CardsSection | ProseSection | FormSection;

export interface PageData {
  /** Site path with leading and trailing slash, e.g. "/victoria/victorian-energy-upgrades/" */
  path: string;
  /** <title> and meta description (kept from the live site where it had them) */
  seoTitle: string;
  description: string;
  /** Breadcrumb trail after Home; the last one is the current page */
  crumbs: { label: string; href?: string }[];
  hero: {
    eyebrow: string;
    /** Use {curly braces} around the words to show in lime, e.g. "Hot water that costs {less to run.}" */
    title: string;
    lead?: string;
    image?: Img;
    /** Short facts shown as chips under the lead */
    chips?: string[];
    primary?: Cta;
    secondary?: Cta;
  };
  sections: Section[];
  /** Closing eligibility call to action; on by default */
  cta?: boolean;
  /** Set true to keep the page out of search engines (thank-you, ad landing pages) */
  noindex?: boolean;
}
