import { BASE } from "@/lib/site";

/** Utility bar and sticky navigation. `current` marks the page's own nav links with aria-current. */
export default function SiteHeader({ current }: { current?: string }) {
  return (
    <>
      <div id="topbar" className="topbar" role="region" aria-label="Announcement" suppressHydrationWarning={true}>
        <div className="wrap topbar-in" style={{ paddingInline: "clamp(20px, 3.4cqi, 48px)" }}>
          <a className="tb-msg" href={`${BASE}/#check`}>
            <span className="tb-pill">
              <span className="tb-dot" aria-hidden="true" />
              <span className="tb-pill-txt">Incentives</span>
            </span>
            <span className="tb-long">Government incentives under VEU &amp; NSW ESS may lower your upfront cost</span>
            <span className="tb-short">Incentives may lower your cost</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14m0 0-5-5m5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <div className="tb-meta">
            <span className="tb-item tb-area">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              VIC · NSW
            </span>{" "}
            <span className="tb-item tb-hours">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Mon–Fri 9am–5pm
            </span>{" "}
            <a className="tb-item tb-phone" href="tel:0386095195" aria-label="Call 03 8609 5195">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="tb-phone-num">03 8609 5195</span>
            </a>{" "}
            <button type="button" className="tb-close" aria-label="Dismiss announcement" data-onclick="dismissTopbar">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "try{var tbd=+localStorage.getItem('auzbright-topbar-dismissed');if(tbd&&Date.now()-tbd<12096e5)document.getElementById('topbar').hidden=true}catch(e){}",
        }}
      />
      {/* 02 NAV + 03 HERO SLIDER + 04 TRUST BAR */}
      <header className="site-nav" id="site-nav">
        <div className="scroll-prog" aria-hidden="true">
          <span />
        </div>
        <div className="wrap" style={{ paddingInline: "clamp(20px, 3.4cqi, 48px)" }}>
          <nav className="nav" aria-label="Primary">
            <a href={`${BASE}/`} aria-label="Auzbright home">
              <img
                className="logo"
                src={`${BASE}/assets/images/auzbright-logo-reversed.png`}
                alt="Auzbright"
                width="170"
                height="34"
                style={{ width: "170px", height: "34px" }}
              />
            </a>
            <ul className="nav-links">
              <li className="dd-wrap dd-hover">
                <a className="nav-dd" href={`${BASE}/about/`} aria-current={current === "/about/" ? "page" : undefined}>
                  About
                </a>
                <button
                  type="button"
                  className="nav-dd nav-caret"
                  aria-label="Show About menu"
                  aria-expanded="false"
                  aria-controls="dd-about"
                  data-onclick="dd.about.toggle"
                >
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="m5 7.5 5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <ul id="dd-about" className="dd-menu" hidden>
                  <li>
                    <a href={`${BASE}/about/`} aria-current={current === "/about/" ? "page" : undefined}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1 M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z M21 19v-1a4 4 0 0 0-3-3.9 M15.5 3.1a3.5 3.5 0 0 1 0 6.8"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/about/work-with-auzbright/`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M3 8h18v12H3z M8 8V5h8v3 M3 13h18"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Career
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dd-wrap dd-hover">
                <a className="nav-dd" href={`${BASE}/victoria/`}>
                  Victoria
                </a>
                <button
                  type="button"
                  className="nav-dd nav-caret"
                  aria-label="Show Victoria menu"
                  aria-expanded="false"
                  aria-controls="dd-vic"
                  data-onclick="dd.vic.toggle"
                >
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="m5 7.5 5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <ul id="dd-vic" className="dd-menu wide" hidden>
                  <li className="dd-head">Victoria · VEU program</li>
                  <li>
                    <a href={`${BASE}/victoria/energy-efficient-hot-water-solutions-for-homes/`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M10 13.5V5a2 2 0 1 1 4 0v8.5a4 4 0 1 1-4 0Z M12 17v-6"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Residential Heat Pump
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/victoria/split-aircon-rebate-government-program/`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M3 6h18v7H3z M6 10h12 M7 16l-1 3 M12 16v3 M17 16l1 3"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Air Conditioner
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/solar-battery-solutions/`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M7 5h10v16H7z M10 3h4 M13 9l-2 4h3l-2 4"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Solar &amp; Battery
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/ev-charger/`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      EV Charger
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/#led-lighting`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9V16h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3Z"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      LED Lighting
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/#water-filter`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M12 3c3 4 6 7 6 10.5A6 6 0 0 1 6 13.5C6 10 9 7 12 3Z M9.5 14a2.5 2.5 0 0 0 2.5 2.5"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Water Filter
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dd-wrap dd-hover">
                <a className="nav-dd" href={`${BASE}/nsw/`}>
                  NSW
                </a>
                <button
                  type="button"
                  className="nav-dd nav-caret"
                  aria-label="Show NSW menu"
                  aria-expanded="false"
                  aria-controls="dd-nsw"
                  data-onclick="dd.nsw.toggle"
                >
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="m5 7.5 5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <ul id="dd-nsw" className="dd-menu wide" hidden>
                  <li className="dd-head">New South Wales · ESS</li>
                  <li>
                    <a href={`${BASE}/nsw/energy-efficient-hot-water-solutions-for-homes/`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M10 13.5V5a2 2 0 1 1 4 0v8.5a4 4 0 1 1-4 0Z M12 17v-6"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Residential Heat Pump
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/#air-conditioner`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M3 6h18v7H3z M6 10h12 M7 16l-1 3 M12 16v3 M17 16l1 3"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Air Conditioner
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/solar-battery-solutions/`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M7 5h10v16H7z M10 3h4 M13 9l-2 4h3l-2 4"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Solar &amp; Battery
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/ev-charger/`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      EV Charger
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/#led-lighting`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9V16h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3Z"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      LED Lighting
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/#water-filter`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M12 3c3 4 6 7 6 10.5A6 6 0 0 1 6 13.5C6 10 9 7 12 3Z M9.5 14a2.5 2.5 0 0 0 2.5 2.5"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Water Filter
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dd-wrap dd-hover">
                <a className="nav-dd" href={`${BASE}/products/`}>
                  Product and Services
                </a>
                <button
                  type="button"
                  className="nav-dd nav-caret"
                  aria-label="Show Product and Services menu"
                  aria-expanded="false"
                  aria-controls="dd-prod"
                  data-onclick="dd.prod.toggle"
                >
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="m5 7.5 5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <ul id="dd-prod" className="dd-menu wide" hidden>
                  <li className="dd-head">Product and Services</li>
                  <li>
                    <a href={`${BASE}/#heat-pump`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M10 13.5V5a2 2 0 1 1 4 0v8.5a4 4 0 1 1-4 0Z M12 17v-6"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Residential Heat Pump
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/#air-conditioner`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M3 6h18v7H3z M6 10h12 M7 16l-1 3 M12 16v3 M17 16l1 3"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Air Conditioner
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/solar-battery-solutions/`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M7 5h10v16H7z M10 3h4 M13 9l-2 4h3l-2 4"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Solar &amp; Battery
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/ev-charger/`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      EV Charger
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/#led-lighting`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9V16h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3Z"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      LED Lighting
                    </a>
                  </li>
                  <li>
                    <a href={`${BASE}/#water-filter`}>
                      <span className="dd-ico">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M12 3c3 4 6 7 6 10.5A6 6 0 0 1 6 13.5C6 10 9 7 12 3Z M9.5 14a2.5 2.5 0 0 0 2.5 2.5"
                            stroke="#0E193F"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Water Filter
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href={`${BASE}/blogs/`}>Blogs</a>
              </li>
              <li>
                <a href={`${BASE}/contact/`} aria-current={current === "/contact/" ? "page" : undefined}>
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="nav-right">
              <a
                className="btn btn-ghost-dark btn-sm nav-warranty"
                href={`${BASE}/contact/?enquiry=warranty#contact-form`}
              >
                Claim Warranty
              </a>{" "}
              <a className="btn btn-lime btn-sm nav-quote" href={`${BASE}/#check`}>
                Get a Free Quote
              </a>{" "}
              <button
                className="menu-btn"
                type="button"
                aria-expanded="false"
                aria-controls="mnav"
                data-onclick="toggleMenu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Menu
              </button>
            </div>
          </nav>
        </div>
        <div id="mnav" className="mobile-menu" hidden>
          <div className="mgroup">
            <button type="button" aria-expanded="false" data-onclick="mg.about.toggle">
              About
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="msub" data-mg="about" hidden>
              <a href={`${BASE}/about/`} aria-current={current === "/about/" ? "page" : undefined}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1 M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z M21 19v-1a4 4 0 0 0-3-3.9 M15.5 3.1a3.5 3.5 0 0 1 0 6.8"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Our Team
              </a>
              <a href={`${BASE}/about/work-with-auzbright/`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h18v12H3z M8 8V5h8v3 M3 13h18"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Career
              </a>
            </div>
          </div>
          <div className="mgroup">
            <button type="button" aria-expanded="false" data-onclick="mg.vic.toggle">
              Victoria
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="msub" data-mg="vic" hidden>
              <a href={`${BASE}/victoria/energy-efficient-hot-water-solutions-for-homes/`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M10 13.5V5a2 2 0 1 1 4 0v8.5a4 4 0 1 1-4 0Z M12 17v-6"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Residential Heat Pump
              </a>
              <a href={`${BASE}/victoria/split-aircon-rebate-government-program/`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M3 6h18v7H3z M6 10h12 M7 16l-1 3 M12 16v3 M17 16l1 3"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Air Conditioner
              </a>
              <a href={`${BASE}/solar-battery-solutions/`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M7 5h10v16H7z M10 3h4 M13 9l-2 4h3l-2 4"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Solar &amp; Battery
              </a>
              <a href={`${BASE}/ev-charger/`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                EV Charger
              </a>
              <a href={`${BASE}/#led-lighting`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9V16h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3Z"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                LED Lighting
              </a>
              <a href={`${BASE}/#water-filter`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3c3 4 6 7 6 10.5A6 6 0 0 1 6 13.5C6 10 9 7 12 3Z M9.5 14a2.5 2.5 0 0 0 2.5 2.5"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Water Filter
              </a>
            </div>
          </div>
          <div className="mgroup">
            <button type="button" aria-expanded="false" data-onclick="mg.nsw.toggle">
              NSW
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="msub" data-mg="nsw" hidden>
              <a href={`${BASE}/nsw/energy-efficient-hot-water-solutions-for-homes/`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M10 13.5V5a2 2 0 1 1 4 0v8.5a4 4 0 1 1-4 0Z M12 17v-6"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Residential Heat Pump
              </a>
              <a href={`${BASE}/#air-conditioner`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M3 6h18v7H3z M6 10h12 M7 16l-1 3 M12 16v3 M17 16l1 3"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Air Conditioner
              </a>
              <a href={`${BASE}/solar-battery-solutions/`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M7 5h10v16H7z M10 3h4 M13 9l-2 4h3l-2 4"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Solar &amp; Battery
              </a>
              <a href={`${BASE}/ev-charger/`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                EV Charger
              </a>
              <a href={`${BASE}/#led-lighting`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9V16h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3Z"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                LED Lighting
              </a>
              <a href={`${BASE}/#water-filter`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3c3 4 6 7 6 10.5A6 6 0 0 1 6 13.5C6 10 9 7 12 3Z M9.5 14a2.5 2.5 0 0 0 2.5 2.5"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Water Filter
              </a>
            </div>
          </div>
          <div className="mgroup">
            <button type="button" aria-expanded="false" data-onclick="mg.prod.toggle">
              Product and Services
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="msub" data-mg="prod" hidden>
              <a href={`${BASE}/#heat-pump`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M10 13.5V5a2 2 0 1 1 4 0v8.5a4 4 0 1 1-4 0Z M12 17v-6"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Residential Heat Pump
              </a>
              <a href={`${BASE}/#air-conditioner`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M3 6h18v7H3z M6 10h12 M7 16l-1 3 M12 16v3 M17 16l1 3"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Air Conditioner
              </a>
              <a href={`${BASE}/solar-battery-solutions/`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M7 5h10v16H7z M10 3h4 M13 9l-2 4h3l-2 4"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Solar &amp; Battery
              </a>
              <a href={`${BASE}/ev-charger/`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                EV Charger
              </a>
              <a href={`${BASE}/#led-lighting`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 18h6 M10 21h4 M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9V16h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3Z"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                LED Lighting
              </a>
              <a href={`${BASE}/#water-filter`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 3c3 4 6 7 6 10.5A6 6 0 0 1 6 13.5C6 10 9 7 12 3Z M9.5 14a2.5 2.5 0 0 0 2.5 2.5"
                    stroke="#A0E25F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Water Filter
              </a>
            </div>
          </div>
          <a href={`${BASE}/blogs/`}>Blogs</a>{" "}
          <a href={`${BASE}/contact/`} aria-current={current === "/contact/" ? "page" : undefined}>
            Contact Us
          </a>{" "}
          <a href="tel:0386095195">Call 03 8609 5195</a>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
            <a
              className="btn btn-lime"
              href={`${BASE}/#check`}
              style={{ border: "0", justifyContent: "center", color: "#0E193F", fontSize: "16px" }}
            >
              Get a Free Quote
            </a>
            <a
              className="btn btn-ghost-dark"
              href={`${BASE}/contact/?enquiry=warranty#contact-form`}
              style={{ justifyContent: "center", border: "1.5px solid rgba(255,255,255,.45)", fontSize: "16px" }}
            >
              Claim Warranty
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
