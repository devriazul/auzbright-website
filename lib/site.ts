/** Prefix for links and asset paths when the site is served from a sub-folder (see next.config.ts). */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const SITE_URL = "https://auzbright.com.au";

/** Site paths ("/about/") get the BASE prefix; anything else (https:, tel:, mailto:, #anchor) is returned as-is. */
export const link = (href: string) => (href.startsWith("/") ? BASE + href : href);
