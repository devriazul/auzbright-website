"use client";

import { useEffect } from "react";
import { BASE } from "@/lib/site";

/**
 * Loads public/assets/js/main.js (sliders, menus, forms, reveal animations) once React has
 * hydrated the page, so the script's DOM changes never clash with hydration.
 * Pages link to each other with plain <a> tags (full page loads), so it runs once per page.
 */
export default function SiteScript() {
  useEffect(() => {
    if (document.querySelector("script[data-site-main]")) return;
    const s = document.createElement("script");
    s.src = `${BASE}/assets/js/main.js`;
    s.dataset.siteMain = "";
    document.body.appendChild(s);
  }, []);
  return null;
}
