import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

/** A blog post, stored as content/blog/<slug>.json (scraped from the WordPress site). */
export interface Post {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  /** YYYY-MM-DD */
  date: string;
  modified: string;
  readingMinutes: number;
  image: { src: string; thumb: string; width: number; height: number } | null;
  /** Clean HTML: headings, paragraphs, lists, tables and <details> FAQs */
  html: string;
}

const DIR = path.join(process.cwd(), "content", "blog");

let cache: Post[] | undefined;

/** All posts, newest first. Read once at build time. */
export function getPosts(): Post[] {
  cache ??= readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(readFileSync(path.join(DIR, f), "utf8")) as Post)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return cache;
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/* ---------- Blog list pages ---------- */

/** Page 1 shows the newest post as a large card plus this many; later pages show this many. */
export const PER_PAGE = 9;

export function pageCount() {
  return Math.max(1, Math.ceil((getPosts().length - 1) / PER_PAGE));
}

/** Posts for list page `n` (1-based). Page 1 has one extra: the lead post. */
export function getPage(n: number): Post[] {
  const all = getPosts();
  return n === 1 ? all.slice(0, PER_PAGE + 1) : all.slice(1 + (n - 1) * PER_PAGE, 1 + n * PER_PAGE);
}

/** URL of list page `n`: /blogs/ then /blogs/page/2/ and so on (the WordPress pattern). */
export const pageHref = (n: number) => (n === 1 ? "/blogs/" : `/blogs/page/${n}/`);

/* ---------- Topics: used for the post sidebar ---------- */

export interface Topic {
  key: string;
  /** Matched against the post's slug */
  match: RegExp;
  /** The service page to suggest beside posts on this topic */
  service: { label: string; title: string; text: string; href: string };
}

export const TOPICS: Topic[] = [
  {
    key: "water-filter",
    match: /water-filt/,
    service: { label: "Water filters", title: "Whole-home and under-sink filtration", text: "Cleaner, better-tasting water at every tap, or just where you need it.", href: "/#water-filter" },
  },
  {
    key: "heat-pump",
    match: /heat-pump|hot-water/,
    service: { label: "Heat pump hot water", title: "Residential heat pumps", text: "Replace an old electric or gas system with an efficient heat pump.", href: "/victoria/energy-efficient-hot-water-solutions-for-homes/" },
  },
  {
    key: "air-con",
    match: /air-con|split-system|ducted|multi-head/,
    service: { label: "Air conditioning", title: "Split, multi-head and ducted systems", text: "Reverse-cycle heating and cooling, professionally installed.", href: "/victoria/split-aircon-rebate-government-program/" },
  },
  {
    key: "solar",
    match: /solar|battery/,
    service: { label: "Solar & battery", title: "Solar and battery solutions", text: "Rooftop solar with battery storage, sized to how you use energy.", href: "/solar-battery-solutions/" },
  },
  {
    key: "programs",
    match: /veu|victorian-energy|energy-saver|energy-savings|energy-upgrade|renovating/,
    service: { label: "Government programs", title: "Victorian Energy Upgrades", text: "How the VEU program works and who can take part.", href: "/victoria/victorian-energy-upgrades/" },
  },
];

export const topicsOf = (post: Post) => TOPICS.filter((t) => t.match.test(post.slug));

/** Other posts that share the most topics with `post`, newest first within a tie. */
export function relatedPosts(post: Post, count: number): Post[] {
  const mine = topicsOf(post).map((t) => t.key);
  return getPosts()
    .filter((p) => p.slug !== post.slug)
    .map((p, i) => ({ p, i, score: topicsOf(p).filter((t) => mine.includes(t.key)).length }))
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .slice(0, count)
    .map((x) => x.p);
}

/** Adds an id to every <h2> in a post body and returns the headings for a table of contents. */
export function withHeadingIds(html: string): { html: string; headings: { id: string; text: string }[] } {
  const headings: { id: string; text: string }[] = [];
  const used = new Set<string>();
  const out = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
    let id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "section";
    while (used.has(id)) id += "-2";
    used.add(id);
    headings.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html: out, headings };
}
