import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH when the site is served from a sub-folder,
// e.g. "/auzbright-website" for the GitHub Pages preview. Leave it empty for the live domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export", // static HTML in out/, no Node server needed
  trailingSlash: true, // keep /about/ style URLs (about/index.html)
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
