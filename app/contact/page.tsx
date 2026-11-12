import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Auzbright | Call, Email or Visit Us in Derrimut, Melbourne",
  description:
    "Contact Auzbright about heat pumps, air conditioning, solar and battery, EV chargers and government incentives in Victoria and NSW. Call 03 8609 5195, email admin@auzbright.com.au or send us a message.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    type: "website",
    siteName: "Auzbright",
    title: "Contact Auzbright",
    description:
      "Call, email or message the Auzbright team about energy-efficient upgrades for VIC & NSW homes and businesses.",
    images: "/assets/images/hero-family.webp",
    url: "/contact/",
  },
};
import { BASE } from "@/lib/site";
import SiteShell from "@/components/SiteShell";
import EnquiryForm from "@/components/EnquiryForm";

export default function Page() {
  return (
    <SiteShell
      current="/contact/"
      jsonLd={
        '{"@context":"https://schema.org","@graph":[{"@type":"ContactPage","name":"Contact Auzbright","url":"https://auzbright.com.au/contact/","about":{"@id":"https://auzbright.com.au/#business"}},{"@type":"LocalBusiness","@id":"https://auzbright.com.au/#business","name":"Auzbright","url":"https://auzbright.com.au/","telephone":"+61 3 8609 5195","email":"admin@auzbright.com.au","address":{"@type":"PostalAddress","streetAddress":"Unit 18/45 Hunter Road","addressLocality":"Derrimut","addressRegion":"VIC","postalCode":"3026","addressCountry":"AU"},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"17:00"}],"areaServed":["Victoria","New South Wales"],"sameAs":["https://www.facebook.com/Auzbrightvic","https://www.instagram.com/auzbright_/","https://www.linkedin.com/company/auzbright"]},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://auzbright.com.au/"},{"@type":"ListItem","position":2,"name":"Contact us","item":"https://auzbright.com.au/contact/"}]}]}'
      }
    >
      <main id="main">
        <section className="dark ct-hero" aria-labelledby="ct-h">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <a href={`${BASE}/`}>Home</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Contact us</span>
            </nav>
            <span className="eyebrow">
              <span className="dot" />
              Contact us
            </span>
            <h1 id="ct-h" className="ct-h1">
              Talk to the <span style={{ color: "#A0E25F" }}>Auzbright team.</span>
            </h1>
            <p className="lead ct-lead">
              Questions about an upgrade, government incentives or an existing installation? Call, email or send us a
              message.
            </p>
            <ul className="ct-meta">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Mon–Fri, 9am–5pm
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z M9 4v14 M15 6v14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Servicing Victoria &amp; New South Wales
              </li>
            </ul>
          </div>
        </section>
        <section className="ct-ways-sec" aria-label="Ways to contact us">
          <div className="wrap">
            <ul className="g-4 ct-ways">
              <li>
                <a className="ct-way" href="tel:0386095195">
                  <span className="ct-ico">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="ct-k">Call us</span>
                  <strong>03 8609 5195</strong>
                  <span className="ct-s">Mon–Fri, 9am–5pm</span>
                </a>
              </li>
              <li>
                <a className="ct-way" href="mailto:admin@auzbright.com.au">
                  <span className="ct-ico">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M4 6h16v12H4z M4 7l8 6 8-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="ct-k">Email us</span>
                  <strong>admin@auzbright.com.au</strong>
                  <span className="ct-s">Send us the details of your home or project</span>
                </a>
              </li>
              <li>
                <a
                  className="ct-way"
                  href="https://www.google.com/maps/search/?api=1&amp;query=Unit%2018%2F45%20Hunter%20Road%2C%20Derrimut%20VIC%203026"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="ct-ico">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="ct-k">Visit our office</span>
                  <strong>Unit 18/45 Hunter Road, Derrimut VIC 3026</strong>
                  <span className="ct-s ct-go">
                    Get directions
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M4 10h12m0 0-5-5m5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <button type="button" className="ct-way ct-way-chat" data-onclick="chatToggle">
                  <span className="ct-ico">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.5-5.2A8.5 8.5 0 1 1 21 12Z M8.5 11h.01 M12 11h.01 M15.5 11h.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="ct-k">Chat with us</span>
                  <strong>Start a conversation</strong>
                  <span className="ct-s">Or message us on Facebook</span>
                </button>
              </li>
            </ul>
          </div>
        </section>
        <EnquiryForm />
      </main>
    </SiteShell>
  );
}
