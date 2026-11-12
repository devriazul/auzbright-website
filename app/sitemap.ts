import type { MetadataRoute } from "next";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import { SITE_URL } from "@/lib/site";
import { getPosts } from "@/lib/blog";
import { getProducts, productHref } from "@/lib/products";

export const dynamic = "force-static";

/** Pages that exist but should stay out of search results. */
const HIDDEN = new Set(["/thank-you/", "/landing/"]);

/** Every page.tsx under app/ except the blog post template, as site paths. */
function pagePaths(dir = path.join(process.cwd(), "app"), base = "/"): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) return name.startsWith("[") ? [] : pagePaths(full, `${base}${name}/`);
    return name === "page.tsx" ? [base] : [];
  });
}

/** sitemap.xml: every page, product and blog post. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pagePaths()
      .filter((p) => !HIDDEN.has(p))
      .sort()
      .map((p) => ({ url: `${SITE_URL}${p}` })),
    ...getProducts().map((p) => ({ url: `${SITE_URL}${productHref(p)}` })),
    ...getPosts().map((p) => ({ url: `${SITE_URL}/${p.slug}/`, lastModified: p.modified })),
  ];
}
