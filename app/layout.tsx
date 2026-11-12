import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import SiteScript from "@/components/SiteScript";
import { BASE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: { url: "https://auzbright.com.au/wp-content/uploads/2024/04/energy-icon1.svg", type: "image/svg+xml" } },
  openGraph: { type: "website", siteName: "Auzbright" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0E193F" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
        {/* Served as-is from public/ rather than imported: Next's CSS minifier reorders some
            declarations (e.g. a font shorthand after font-variant-numeric), which changes the design. */}
        <link rel="stylesheet" href={`${BASE}/assets/css/styles.css`} />
      </head>
      <body>
        {children}
        <SiteScript />
      </body>
    </html>
  );
}
