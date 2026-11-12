import { BASE, link } from "@/lib/site";

/**
 * Footer link columns: [label, site path]. Products that have one page for both states sit under
 * Products; state-specific pages sit under their state.
 */
const COLUMNS: { title: string; links: [string, string][] }[] = [
  {
    title: "Products",
    links: [
      ["Solar & Battery", "/solar-battery-solutions/"],
      ["EV Charger", "/ev-charger/"],
      ["LED Lighting", "/#led-lighting"],
      ["Water Filter", "/#water-filter"],
      ["Emerald Energy Heat Pump", "/emerald-energy/"],
      ["All Products", "/products/"],
    ],
  },
  {
    title: "Victoria",
    links: [
      ["Victorian Energy Upgrades", "/victoria/victorian-energy-upgrades/"],
      ["Residential Heat Pump", "/victoria/energy-efficient-hot-water-solutions-for-homes/"],
      ["Air Conditioner", "/victoria/split-aircon-rebate-government-program/"],
      ["Commercial Heat Pump", "/victoria/free-hot-water-systems/"],
      ["Victoria FAQs", "/victoria/victoria-faqs/"],
    ],
  },
  {
    title: "New South Wales",
    links: [
      ["Energy Savings Scheme", "/nsw/energy-savings-scheme-ess/"],
      ["Residential Heat Pump", "/nsw/energy-efficient-hot-water-solutions-for-homes/"],
      ["Commercial Heat Pump", "/nsw/energy-efficient-hot-water-solutions-for-businesses/"],
      ["NSW FAQs", "/nsw/nsw-faqs/"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Our Team", "/about/"],
      ["Career", "/about/work-with-auzbright/"],
      ["Blogs", "/blogs/"],
      ["FAQs", "/#faqs"],
      ["Installation", "/about/#process"],
      ["Claim Warranty", "/contact/?enquiry=warranty#contact-form"],
      ["Contact Us", "/contact/"],
      ["Get a Quote", "/enquire-now/"],
    ],
  },
];

export default function SiteFooter({ current }: { current?: string }) {
  return (
    <footer id="contact" className="deep foot">
      <div
        className="wrap"
        style={{ paddingBlock: "80px 40px", display: "flex", flexDirection: "column", gap: "56px" }}
      >
        <div className="g-foot">
          <div className="foot-brand">
            <img
              className="logo"
              src={`${BASE}/assets/images/auzbright-logo-reversed.png`}
              alt="Auzbright"
              width="180"
              height="36"
              style={{ width: "180px", height: "36px" }}
            />
            <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#B9C0D2", maxWidth: "340px" }}>
              Auzbright works with households and businesses under state-based schemes to install high-quality,
              energy-saving technology.
            </p>
            <ul className="foot-contact">
              <li>
                <a href="tel:0386095195">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  03 8609 5195
                </a>
              </li>
              <li>
                <a href="mailto:admin@auzbright.com.au">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 6h16v12H4z M4 7l8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  admin@auzbright.com.au
                </a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Unit 18/45 Hunter Road, Derrimut VIC 3026</span>
              </li>
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
                <span>Mon–Fri, 9am–5pm</span>
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
                <span>Servicing Victoria &amp; New South Wales</span>
              </li>
            </ul>
            <div className="social-row" role="group" aria-label="Auzbright on social media">
              <a
                href="https://www.facebook.com/Auzbrightvic"
                aria-label="Auzbright on Facebook"
                target="_blank"
                rel="noopener"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/auzbright_/"
                aria-label="Auzbright on Instagram"
                target="_blank"
                rel="noopener"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21 8.3c-.1-1.4-.4-2.7-1.4-3.8S17.2 3.1 15.7 3c-1.5-.1-5.9-.1-7.4 0-1.4.1-2.7.4-3.8 1.4S3.1 6.8 3 8.3c-.1 1.5-.1 5.9 0 7.4.1 1.4.4 2.7 1.4 3.8s2.4 1.4 3.8 1.5c1.5.1 5.9.1 7.4 0 1.4-.1 2.7-.4 3.8-1.5 1-1 1.4-2.4 1.4-3.8.1-1.5.1-5.9 0-7.4Zm-1.9 9a3 3 0 0 1-1.7 1.7c-1.2.5-4 .4-5.4.4s-4.2.1-5.4-.4a3 3 0 0 1-1.7-1.7c-.5-1.2-.4-4-.4-5.3s-.1-4.2.4-5.4A3 3 0 0 1 6.6 5c1.2-.5 4-.4 5.4-.4s4.2-.1 5.4.4a3 3 0 0 1 1.7 1.7c.5 1.2.4 4 .4 5.3s.1 4.2-.4 5.3Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/auzbright"
                aria-label="Auzbright on LinkedIn"
                target="_blank"
                rel="noopener"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.9 20.5H3.4V9.2h3.5v11.3ZM5.1 7.6a2 2 0 1 1 0-4.1 2 2 0 0 1 0 4.1Zm15.4 12.9H17v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6H9.6V9.2H13v1.5c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.2 2.3 4.2 5.3v6.3Z" />
                </svg>
              </a>
            </div>
          </div>
          <nav className="foot-nav" aria-label="Footer">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map(([label, href]) => (
                    <li key={href}>
                      <a href={link(href)} aria-current={current === href ? "page" : undefined}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.14)",
            paddingTop: "28px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#B9C0D2" }}>
            Government incentives are subject to eligibility and program rules, which can change. Any discount is
            confirmed on your written quote before you commit.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
              fontSize: "13px",
              color: "#B9C0D2",
            }}
          >
            <span>© 2026 Auzbright Pty Ltd</span>
            <span className="legal-row" style={{ display: "flex", gap: "20px" }}>
              <a href={`${BASE}/privacy-policy/`}>Privacy Policy</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
