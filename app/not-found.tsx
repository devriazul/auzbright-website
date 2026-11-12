import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | Auzbright", // Next adds <meta name="robots" content="noindex"> itself
};

import { BASE } from "@/lib/site";
import SiteShell from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <main id="main" tabIndex={-1}>
        <section className="dark ct-hero nf-hero" aria-labelledby="nf-h">
          <div className="wrap">
            <span className="eyebrow">
              <span className="dot" />
              Error 404
            </span>
            <h1 id="nf-h" className="ct-h1">
              This page has <span style={{ color: "#A0E25F" }}>moved or doesn’t exist.</span>
            </h1>
            <p className="lead ct-lead">
              The link may be out of date. Try one of these instead, or call us on{" "}
              <a href="tel:0386095195" style={{ color: "#FFFFFF" }}>
                03 8609 5195
              </a>
              .
            </p>
            <div className="btn-row">
              <a className="btn btn-lime" href={`${BASE}/`}>
                Back to the homepage
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 10h12m0 0-5-5m5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="btn btn-ghost-dark" href={`${BASE}/contact/`}>
                Contact us
              </a>
            </div>
          </div>
        </section>
        <section className="ct-ways-sec nf-links" aria-label="Popular pages">
          <div className="wrap">
            <ul className="g-4 ct-ways">
              <li>
                <a className="ct-way" href={`${BASE}/#check`}>
                  <span className="ct-ico">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M9 11l3 3 8-8 M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="ct-k">Free check</span>
                  <strong>Check your eligibility</strong>
                  <span className="ct-s">About 2 minutes, no obligation</span>
                </a>
              </li>
              <li>
                <a className="ct-way" href={`${BASE}/#services`}>
                  <span className="ct-ico">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="ct-k">Products</span>
                  <strong>Explore upgrades</strong>
                  <span className="ct-s">Heat pumps, air con, solar, EV and more</span>
                </a>
              </li>
              <li>
                <a className="ct-way" href={`${BASE}/about/`}>
                  <span className="ct-ico">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1 M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z M21 19v-1a4 4 0 0 0-3-3.9 M15.5 3.1a3.5 3.5 0 0 1 0 6.8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="ct-k">Company</span>
                  <strong>About Auzbright</strong>
                  <span className="ct-s">Local, accredited since 2017</span>
                </a>
              </li>
              <li>
                <a className="ct-way" href={`${BASE}/#faqs`}>
                  <span className="ct-ico">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14 M12 17.5v.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="ct-k">Help</span>
                  <strong>Read our FAQs</strong>
                  <span className="ct-s">Incentives, costs and installation</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="nf-space" aria-hidden="true" />
      </main>
    </SiteShell>
  );
}
