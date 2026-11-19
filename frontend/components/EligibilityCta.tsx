import { BASE } from "@/lib/site";

/** Closing call to action: free eligibility check, with the family photo. Used at the end of most pages. */
export default function EligibilityCta() {
  return (
    <section className="sec cta-sec" aria-labelledby="cta-h">
      <div className="wrap">
        <div className="cta-card dark">
          <div className="cta-copy">
            <span className="eyebrow">
              <span className="dot" />
              Free eligibility check
            </span>
            <h2 id="cta-h" className="h2">
              Find out what you’re <span style={{ color: "#A0E25F" }}>eligible for.</span>
            </h2>
            <p className="lead">
              Free, no-obligation check. We’ll tell you what suits your home, what incentives may apply, and what it
              will cost — in writing.
            </p>
            <ul className="cta-ticks">
              <li>
                <span className="tick-dot" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                    <path
                      d="m5 10.5 3.2 3L15 7"
                      stroke="#0E193F"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                No obligation
              </li>
              <li>
                <span className="tick-dot" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                    <path
                      d="m5 10.5 3.2 3L15 7"
                      stroke="#0E193F"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Written, itemised quote
              </li>
              <li>
                <span className="tick-dot" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                    <path
                      d="m5 10.5 3.2 3L15 7"
                      stroke="#0E193F"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                About 2 minutes
              </li>
            </ul>
            <div className="btn-row">
              <a className="btn btn-lime" href="#check">
                Check My Eligibility
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
              <a className="btn btn-ghost-dark" href="tel:0386095195">
                Call 03 8609 5195
              </a>
            </div>
          </div>
          <div className="cta-photo">
            <img
              loading="lazy"
              fetchPriority="low"
              decoding="async"
              src={`${BASE}/assets/images/hero-family-800.webp`}
              srcSet={`${BASE}/assets/images/hero-family-480.webp 480w, ${BASE}/assets/images/hero-family-800.webp 800w, ${BASE}/assets/images/hero-family.webp 1024w`}
              sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 640px"
              alt="A family at home in a comfortable, energy-efficient living room"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
