import type { Metadata } from "next";
import { preload } from "react-dom";

export const metadata: Metadata = {
  title: "Energy Efficient Upgrades Australia | Heat Pumps, Air Con, Solar & Battery | Auzbright",
  description:
    "Heat pump hot water, air conditioning, solar and battery, EV chargers, LED lighting and water filters for Victorian and NSW homes and businesses. Free eligibility check for government incentives.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Auzbright",
    title: "Smarter Home Upgrades. Lower Energy Bills. | Auzbright",
    description:
      "Energy-efficient upgrades for VIC & NSW homes and businesses, with a free eligibility check for government incentives.",
    images: "/assets/images/hero-family.webp",
    url: "/",
  },
};
import { BASE } from "@/lib/site";
import SiteShell from "@/components/SiteShell";
import EligibilityCta from "@/components/EligibilityCta";

export default function Page() {
  preload(`${BASE}/assets/images/hero-family.webp`, {
    as: "image",
    fetchPriority: "high",
    imageSrcSet: `${BASE}/assets/images/hero-family-480.webp 480w, ${BASE}/assets/images/hero-family-800.webp 800w, ${BASE}/assets/images/hero-family.webp 1024w`,
    imageSizes: "(max-width: 620px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 620px",
  });
  return (
    <SiteShell
      jsonLd={
        '{"@context":"https://schema.org","@type":"LocalBusiness","name":"Auzbright","url":"https://auzbright.com.au/","telephone":"+61 3 8609 5195","email":"admin@auzbright.com.au","address":{"@type":"PostalAddress","streetAddress":"Unit 18/45 Hunter Road","addressLocality":"Derrimut","addressRegion":"VIC","postalCode":"3026","addressCountry":"AU"},"sameAs":["https://www.facebook.com/Auzbrightvic","https://www.instagram.com/auzbright_/","https://www.linkedin.com/company/auzbright"]}'
      }
    >
      <main id="main">
        <div className="dark" style={{ position: "relative" }}>
          <section className="slider" aria-roledescription="carousel" aria-label="Featured upgrades">
            <div className="wrap" style={{ paddingTop: "40px", paddingBottom: "72px" }}>
              <div aria-live="off">
                <div className="slide" data-slide="0" role="group" aria-roledescription="slide" aria-label="1 of 7">
                  <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                    <span className="eyebrow">
                      <span className="dot" />
                      Home energy upgrades · Since 2017
                    </span>
                    <h1 className="h1">
                      Smarter Home Upgrades. <span style={{ color: "#A0E25F" }}>Lower Energy Bills.</span>
                    </h1>
                    <p className="lead" style={{ maxWidth: "560px" }}>
                      Heat pump hot water, air conditioning, solar and batteries — professionally installed. We check
                      which government incentives you may be eligible for before you commit, so your quote is clear from
                      day one.
                    </p>
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
                      <a className="btn btn-ghost-dark" href="#services">
                        Explore Upgrades
                      </a>
                    </div>
                  </div>
                  <div className="slide-img">
                    <img
                      fetchPriority="high"
                      src={`${BASE}/assets/images/hero-family.webp`}
                      srcSet={`${BASE}/assets/images/hero-family-480.webp 480w, ${BASE}/assets/images/hero-family-800.webp 800w, ${BASE}/assets/images/hero-family.webp 1024w`}
                      sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 620px"
                      width="1024"
                      height="1280"
                      alt="A family relaxing in a bright Australian living room with a split system air conditioner on the wall"
                    />
                    <div className="slide-chip">
                      <span style={{ fontWeight: "700", fontSize: "16px" }}>Free eligibility check</span>
                      <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#4A5372" }}>
                        Postcode · Property type · Upgrade interest. No obligation, about 2 minutes.
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="slide"
                  data-slide="1"
                  hidden
                  role="group"
                  aria-roledescription="slide"
                  aria-label="2 of 7"
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                    <span className="eyebrow">
                      <span className="dot" />
                      Hot water heat pumps
                    </span>
                    <h2 className="h1">
                      Hot water that costs <span style={{ color: "#A0E25F" }}>less to run.</span>
                    </h2>
                    <p className="lead" style={{ maxWidth: "560px" }}>
                      Swap an old electric or gas tank for an efficient heat pump, installed by licensed plumbers and
                      electricians. Incentives under the VEU and NSW ESS may apply to eligible homes.
                    </p>
                    <div className="btn-row">
                      <a className="btn btn-lime" href="#check">
                        Check Heat Pump Eligibility
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
                      <a className="btn btn-ghost-dark" href="#heat-pump">
                        Heat Pump Options
                      </a>
                    </div>
                  </div>
                  <div className="slide-img">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      data-src={`${BASE}/assets/images/hero-heat-pump-installer-1200.webp`}
                      data-srcset={`${BASE}/assets/images/hero-heat-pump-installer-480.webp 480w, ${BASE}/assets/images/hero-heat-pump-installer-800.webp 800w, ${BASE}/assets/images/hero-heat-pump-installer-1200.webp 1200w`}
                      sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 620px"
                      width="1200"
                      height="900"
                      decoding="async"
                      alt="An installer fitting a heat pump hot water unit beside a home while the homeowner watches"
                    />
                    <div className="slide-chip">
                      <span style={{ fontWeight: "700", fontSize: "16px" }}>60–75% less energy</span>
                      <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#4A5372" }}>
                        than conventional gas or electric water heaters (NSW Climate and Energy Action).
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="slide"
                  data-slide="2"
                  hidden
                  role="group"
                  aria-roledescription="slide"
                  aria-label="3 of 7"
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                    <span className="eyebrow">
                      <span className="dot" />
                      Air conditioning
                    </span>
                    <h2 className="h1">
                      One system for <span style={{ color: "#A0E25F" }}>heating and cooling.</span>
                    </h2>
                    <p className="lead" style={{ maxWidth: "560px" }}>
                      Reverse-cycle split, multi-head and ducted heating and cooling, often replacing older heaters.
                      Incentives under the VEU and NSW ESS may apply to eligible homes.
                    </p>
                    <div className="btn-row">
                      <a className="btn btn-lime" href="#check">
                        Check Air Con Eligibility
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
                      <a className="btn btn-ghost-dark" href="#air-conditioner">
                        Air Con Options
                      </a>
                    </div>
                  </div>
                  <div className="slide-img">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      data-src={`${BASE}/assets/images/hero-aircon-600.webp`}
                      data-srcset={`${BASE}/assets/images/hero-aircon-480.webp 480w, ${BASE}/assets/images/hero-aircon-600.webp 600w`}
                      sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 620px"
                      width="600"
                      height="650"
                      decoding="async"
                      alt="A couple choosing between wall-mounted split system air conditioners"
                    />
                    <div className="slide-chip">
                      <span style={{ fontWeight: "700", fontSize: "16px" }}>About a third of the running cost</span>
                      <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#4A5372" }}>
                        of a portable electric heater in the same space (Solar Victoria, based on CHOICE).
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="slide"
                  data-slide="3"
                  hidden
                  role="group"
                  aria-roledescription="slide"
                  aria-label="4 of 7"
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                    <span className="eyebrow">
                      <span className="dot" />
                      Solar &amp; battery
                    </span>
                    <h2 className="h1">
                      Make your own power. <span style={{ color: "#A0E25F" }}>Keep it for tonight.</span>
                    </h2>
                    <p className="lead" style={{ maxWidth: "560px" }}>
                      Rooftop solar paired with battery storage, sized to how your household actually uses energy. The
                      federal Cheaper Home Batteries Program may reduce the upfront cost of an eligible battery.
                    </p>
                    <div className="btn-row">
                      <a className="btn btn-lime" href="#check">
                        Check Battery Eligibility
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
                      <a className="btn btn-ghost-dark" href="#solar-battery">
                        Solar &amp; Battery Options
                      </a>
                    </div>
                  </div>
                  <div className="slide-img">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      data-src={`${BASE}/assets/images/hero-solar-home-1200.webp`}
                      data-srcset={`${BASE}/assets/images/hero-solar-home-480.webp 480w, ${BASE}/assets/images/hero-solar-home-800.webp 800w, ${BASE}/assets/images/hero-solar-home-1200.webp 1200w`}
                      sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 620px"
                      width="1200"
                      height="675"
                      decoding="async"
                      alt="A single-storey Australian brick home with black solar panels on the roof under a clear blue sky"
                    />
                    <div className="slide-chip">
                      <span style={{ fontWeight: "700", fontSize: "16px" }}>Brands we install</span>
                      <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#4A5372" }}>
                        Including Sungrow, Fox ESS, Alpha ESS and more.
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="slide"
                  data-slide="4"
                  hidden
                  role="group"
                  aria-roledescription="slide"
                  aria-label="5 of 7"
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                    <span className="eyebrow">
                      <span className="dot" />
                      EV chargers
                    </span>
                    <h2 className="h1">
                      Charge at home <span style={{ color: "#A0E25F" }}>for less.</span>
                    </h2>
                    <p className="lead" style={{ maxWidth: "560px" }}>
                      Safe, fast home charging, professionally installed. Pair it with solar to charge your car from
                      your own power.
                    </p>
                    <div className="btn-row">
                      <a className="btn btn-lime" href="#check">
                        Get an EV Charger Quote
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
                      <a className="btn btn-ghost-dark" href="#ev-charger">
                        EV Charger Options
                      </a>
                    </div>
                  </div>
                  <div className="slide-img">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      data-src={`${BASE}/assets/images/hero-ev-800.webp`}
                      data-srcset={`${BASE}/assets/images/hero-ev-480.webp 480w, ${BASE}/assets/images/hero-ev-800.webp 800w`}
                      sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 620px"
                      width="800"
                      height="1200"
                      decoding="async"
                      alt="A wall-mounted EV charger plugged into an electric car on a home driveway"
                      style={{ objectPosition: "50% 38%" }}
                    />
                    <div className="slide-chip">
                      <span style={{ fontWeight: "700", fontSize: "16px" }}>Charge from your own solar</span>
                      <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#4A5372" }}>
                        A smart charger can top up your car from surplus daytime power.
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="slide"
                  data-slide="5"
                  hidden
                  role="group"
                  aria-roledescription="slide"
                  aria-label="6 of 7"
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                    <span className="eyebrow">
                      <span className="dot" />
                      LED lighting
                    </span>
                    <h2 className="h1">
                      Brighter spaces, <span style={{ color: "#A0E25F" }}>lower lighting costs.</span>
                    </h2>
                    <p className="lead" style={{ maxWidth: "560px" }}>
                      Efficient LED lighting upgrades for homes and businesses, installed by A-grade electricians.
                    </p>
                    <div className="btn-row">
                      <a className="btn btn-lime" href="#check">
                        Get an LED Lighting Quote
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
                      <a className="btn btn-ghost-dark" href="#led-lighting">
                        LED Lighting Options
                      </a>
                    </div>
                  </div>
                  <div className="slide-img">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      data-src={`${BASE}/assets/images/hero-led-475.webp`}
                      data-srcset={`${BASE}/assets/images/hero-led-475.webp 475w`}
                      sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 620px"
                      width="475"
                      height="590"
                      decoding="async"
                      alt="A modern room lit by energy-efficient lighting"
                    />
                    <div className="slide-chip">
                      <span style={{ fontWeight: "700", fontSize: "16px" }}>Installed by A-grade electricians</span>
                      <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#4A5372" }}>
                        For homes and businesses across Victoria and NSW.
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="slide"
                  data-slide="6"
                  hidden
                  role="group"
                  aria-roledescription="slide"
                  aria-label="7 of 7"
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                    <span className="eyebrow">
                      <span className="dot" />
                      Water filters
                    </span>
                    <h2 className="h1">
                      Filtered water <span style={{ color: "#A0E25F" }}>at every tap.</span>
                    </h2>
                    <p className="lead" style={{ maxWidth: "560px" }}>
                      Whole-home and under-sink filtration for cleaner, better-tasting water. We’ll help you choose the
                      right setup for your home.
                    </p>
                    <div className="btn-row">
                      <a className="btn btn-lime" href="#check">
                        Get a Water Filter Quote
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
                      <a className="btn btn-ghost-dark" href="#water-filter">
                        Water Filter Options
                      </a>
                    </div>
                  </div>
                  <div className="slide-img">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      data-src={`${BASE}/assets/images/hero-water-700.webp`}
                      data-srcset={`${BASE}/assets/images/hero-water-480.webp 480w, ${BASE}/assets/images/hero-water-700.webp 700w`}
                      sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 620px"
                      width="700"
                      height="467"
                      decoding="async"
                      alt="A whole-home water filtration system mounted on an outside wall"
                    />
                    <div className="slide-chip">
                      <span style={{ fontWeight: "700", fontSize: "16px" }}>Whole-home or under-sink</span>
                      <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#4A5372" }}>
                        Filtered water at every tap, or just where you need it.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="s-controls">
                <div className="dots">
                  <button
                    type="button"
                    className="dotbtn on"
                    aria-label="Show slide 1: Smarter home upgrades"
                    aria-current="true"
                    data-onclick="go0"
                  >
                    <span />
                  </button>{" "}
                  <button
                    type="button"
                    className="dotbtn "
                    aria-label="Show slide 2: Hot water heat pumps"
                    aria-current="false"
                    data-onclick="go1"
                  >
                    <span />
                  </button>{" "}
                  <button
                    type="button"
                    className="dotbtn "
                    aria-label="Show slide 3: Air conditioning"
                    aria-current="false"
                    data-onclick="go2"
                  >
                    <span />
                  </button>{" "}
                  <button
                    type="button"
                    className="dotbtn "
                    aria-label="Show slide 4: Solar and battery"
                    aria-current="false"
                    data-onclick="go3"
                  >
                    <span />
                  </button>{" "}
                  <button
                    type="button"
                    className="dotbtn "
                    aria-label="Show slide 5: EV chargers"
                    aria-current="false"
                    data-onclick="go4"
                  >
                    <span />
                  </button>{" "}
                  <button
                    type="button"
                    className="dotbtn "
                    aria-label="Show slide 6: LED lighting"
                    aria-current="false"
                    data-onclick="go5"
                  >
                    <span />
                  </button>{" "}
                  <button
                    type="button"
                    className="dotbtn "
                    aria-label="Show slide 7: Water filters"
                    aria-current="false"
                    data-onclick="go6"
                  >
                    <span />
                  </button>{" "}
                  <span className="s-count" aria-hidden="true">
                    <span id="slide-count">01 / 07</span>
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button type="button" className="icon-btn" aria-label="Pause slideshow" data-onclick="togglePause">
                    <svg
                      className="i-play"
                      hidden
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M6 4l10 6-10 6V4Z" />
                    </svg>
                    <svg
                      className="i-pause"
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5 4h3.5v12H5zM11.5 4H15v12h-3.5z" />
                    </svg>
                  </button>{" "}
                  <button type="button" className="icon-btn" aria-label="Previous slide" data-onclick="prev">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M16 10H4m0 0 5-5m-5 5 5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>{" "}
                  <button
                    type="button"
                    className="icon-btn"
                    aria-label="Next slide"
                    data-onclick="next"
                    style={{ background: "#A0E25F", borderColor: "#A0E25F", color: "#0E193F" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="M4 10h12m0 0-5-5m5 5-5 5"
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
          </section>
        </div>
        {/* 04 PARTNERS (under slider) */}
        <section id="partners" className="sec mist" aria-labelledby="par-h" style={{ paddingBottom: "112px" }}>
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            <div
              className="par-head"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "32px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "760px" }}>
                <span className="eyebrow">
                  <span className="dot" />
                  Our partners
                </span>
                <h2 id="par-h" className="h2">
                  Trusted brands, installed by our team
                </h2>
                <p className="lead">
                  We work with leading heating, cooling, solar and battery manufacturers, so you get proven products
                  backed by manufacturer warranties.
                </p>
              </div>
              <button
                type="button"
                className="icon-btn light"
                aria-label="Pause partner logos"
                data-onclick="toggleParPause"
              >
                <svg
                  className="i-play"
                  hidden
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6 4l10 6-10 6V4Z" />
                </svg>
                <svg
                  className="i-pause"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5 4h3.5v12H5zM11.5 4H15v12h-3.5z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="marquee" style={{ marginTop: "48px" }}>
            <ul
              className="marquee-inner paused"
              style={{ listStyle: "none", margin: "0", padding: "4px 0" }}
              aria-label="Partner brands"
            >
              <li className="partner">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/mitsubishi-electric.svg`}
                  alt="Mitsubishi Electric"
                  width="184"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/daikin.svg`}
                  alt="Daikin"
                  width="258"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/carrier.png`}
                  alt="Carrier"
                  width="140"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/panasonic.svg`}
                  alt="Panasonic"
                  width="353"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/istore.png`}
                  alt="iStore"
                  width="177"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/emerald-energy.png`}
                  alt="Emerald Energy"
                  width="221"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/tesla.svg`}
                  alt="Tesla"
                  width="430"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/hici.png`}
                  alt="HiCi"
                  width="136"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/evnex.png`}
                  alt="Evnex"
                  width="283"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/goodwe.svg`}
                  alt="GoodWe"
                  width="377"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/sigenergy.png`}
                  alt="Sigenergy"
                  width="288"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/jinko-solar.png`}
                  alt="Jinko Solar"
                  width="139"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner" aria-hidden="true">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/mitsubishi-electric.svg`}
                  alt=""
                  width="184"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner" aria-hidden="true">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/daikin.svg`}
                  alt=""
                  width="258"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner" aria-hidden="true">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/carrier.png`}
                  alt=""
                  width="140"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner" aria-hidden="true">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/panasonic.svg`}
                  alt=""
                  width="353"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner" aria-hidden="true">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/istore.png`}
                  alt=""
                  width="177"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner" aria-hidden="true">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/emerald-energy.png`}
                  alt=""
                  width="221"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner" aria-hidden="true">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/tesla.svg`}
                  alt=""
                  width="430"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner" aria-hidden="true">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/hici.png`}
                  alt=""
                  width="136"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner" aria-hidden="true">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/evnex.png`}
                  alt=""
                  width="283"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner" aria-hidden="true">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/goodwe.svg`}
                  alt=""
                  width="377"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner" aria-hidden="true">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/sigenergy.png`}
                  alt=""
                  width="288"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
              <li className="partner" aria-hidden="true">
                <img
                  className="plogo"
                  src={`${BASE}/assets/images/partners/jinko-solar.png`}
                  alt=""
                  width="139"
                  height="56"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </li>
            </ul>
          </div>
        </section>
        {/* 05 PRODUCTS SELECTOR */}
        <section id="services" className="sec" aria-labelledby="svc-h">
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
            <div
              className="sec-head"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "40px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "720px" }}>
                <span className="eyebrow">
                  <span className="dot" />
                  Our products
                </span>
                <h2 id="svc-h" className="h2">
                  What would you like to upgrade?
                </h2>
              </div>
              <p className="lead" style={{ maxWidth: "400px" }}>
                Choose one or more. We’ll tailor your eligibility check and quote to what you select.
              </p>
            </div>
            <div className="g-3" role="group" aria-label="Products">
              <button type="button" id="heat-pump" className="svc on" aria-pressed="true" data-onclick="svc.hw.toggle">
                <span className="pic contain-light">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    data-lazy-src={`${BASE}/assets/images/svc-heat-pump.webp`}
                    alt=""
                    width="406"
                    height="440"
                  />
                </span>{" "}
                <span className="tick" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="m5 10.5 3.2 3L15 7"
                      stroke="#0E193F"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                <span className="body">
                  <span style={{ fontSize: "21px", fontWeight: "700", letterSpacing: "-.01em", lineHeight: "1.2" }}>
                    Residential Heat Pump
                  </span>
                  <span className="desc">
                    Swap an old electric or gas tank for an efficient heat pump. VIC &amp; NSW.
                  </span>
                  <span className="state">✓ Selected</span>
                </span>
              </button>{" "}
              <button
                type="button"
                id="air-conditioner"
                className="svc "
                aria-pressed="false"
                data-onclick="svc.ac.toggle"
              >
                <span className="pic contain-light">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    data-lazy-src={`${BASE}/assets/images/svc-air-conditioner.webp`}
                    alt=""
                    width="364"
                    height="380"
                  />
                </span>{" "}
                <span className="tick" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="m5 10.5 3.2 3L15 7"
                      stroke="transparent"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                <span className="body">
                  <span style={{ fontSize: "21px", fontWeight: "700", letterSpacing: "-.01em", lineHeight: "1.2" }}>
                    Air Conditioner
                  </span>
                  <span className="desc">Reverse-cycle split, multi-head and ducted heating and cooling.</span>
                  <span className="state">Select this upgrade</span>
                </span>
              </button>{" "}
              <button
                type="button"
                id="water-filter"
                className="svc "
                aria-pressed="false"
                data-onclick="svc.wf.toggle"
              >
                <span className="pic">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    data-lazy-src={`${BASE}/assets/images/svc-water-filter.webp`}
                    alt=""
                    width="700"
                    height="467"
                  />
                </span>{" "}
                <span className="tick" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="m5 10.5 3.2 3L15 7"
                      stroke="transparent"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                <span className="body">
                  <span style={{ fontSize: "21px", fontWeight: "700", letterSpacing: "-.01em", lineHeight: "1.2" }}>
                    Water Filter
                  </span>
                  <span className="desc">Whole-home and under-sink filtration for cleaner, better-tasting water.</span>
                  <span className="state">Select this upgrade</span>
                </span>
              </button>{" "}
              <button
                type="button"
                id="solar-battery"
                className="svc "
                aria-pressed="false"
                data-onclick="svc.bat.toggle"
              >
                <span className="pic contain-light">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    data-lazy-src={`${BASE}/assets/images/svc-solar-battery.webp`}
                    alt=""
                    width="400"
                    height="380"
                  />
                </span>{" "}
                <span className="tick" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="m5 10.5 3.2 3L15 7"
                      stroke="transparent"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                <span className="body">
                  <span style={{ fontSize: "21px", fontWeight: "700", letterSpacing: "-.01em", lineHeight: "1.2" }}>
                    Solar &amp; Battery
                  </span>
                  <span className="desc">Store daytime solar to use in the evening and buy less from the grid.</span>
                  <span className="state">Select this upgrade</span>
                </span>
              </button>{" "}
              <button type="button" id="ev-charger" className="svc " aria-pressed="false" data-onclick="svc.ev.toggle">
                <span className="pic">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    data-lazy-src={`${BASE}/assets/images/svc-ev-charger.webp`}
                    alt=""
                    width="1400"
                    height="467"
                    style={{ objectPosition: "30% 50%" }}
                  />
                </span>{" "}
                <span className="tick" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="m5 10.5 3.2 3L15 7"
                      stroke="transparent"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                <span className="body">
                  <span style={{ fontSize: "21px", fontWeight: "700", letterSpacing: "-.01em", lineHeight: "1.2" }}>
                    EV Charger
                  </span>
                  <span className="desc">
                    Safe, fast home charging — pair it with solar to charge from your own power.
                  </span>
                  <span className="state">Select this upgrade</span>
                </span>
              </button>{" "}
              <button
                type="button"
                id="led-lighting"
                className="svc "
                aria-pressed="false"
                data-onclick="svc.led.toggle"
              >
                <span className="pic">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    data-lazy-src={`${BASE}/assets/images/svc-led-lighting.webp`}
                    alt=""
                    width="475"
                    height="590"
                  />
                </span>{" "}
                <span className="tick" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="m5 10.5 3.2 3L15 7"
                      stroke="transparent"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                <span className="body">
                  <span style={{ fontSize: "21px", fontWeight: "700", letterSpacing: "-.01em", lineHeight: "1.2" }}>
                    LED Lighting
                  </span>
                  <span className="desc">Efficient LED lighting upgrades for homes and businesses.</span>
                  <span className="state">Select this upgrade</span>
                </span>
              </button>
            </div>
            <div
              className="sel-bar"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap",
                padding: "24px 28px",
                borderRadius: "24px",
                background: "#F4F8FA",
                border: "1px solid #E6E9F0",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "18px", fontWeight: "700" }}>
                  <span id="sel-count">1 upgrade selected</span>
                </span>
                <span style={{ fontSize: "14px", color: "#4A5372" }}>
                  <span id="sel-names">Residential Heat Pump</span>
                </span>
              </div>
              <a className="btn btn-navy" href="#check">
                Continue to Eligibility Check
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
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div
                className="g-4 stats"
                aria-label="Why customers trust Auzbright"
                style={{ borderTop: "1px solid #D3D8E3", paddingTop: "40px" }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span className="stat-v">
                    <span className="sr-only">116</span>
                    <span className="count-up" data-count-to="116" aria-hidden="true">
                      116
                    </span>
                  </span>
                  <span style={{ fontSize: "14px", color: "#4A5372" }}>Google reviews, rated “Excellent”</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span className="stat-v">2017</span>
                  <span style={{ fontSize: "14px", color: "#4A5372" }}>Founded in Victoria</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span className="stat-v">VEU · ESS</span>
                  <span style={{ fontSize: "14px", color: "#4A5372" }}>Accredited Certificate Provider</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span className="stat-v">VIC · NSW</span>
                  <span style={{ fontSize: "14px", color: "#4A5372" }}>Homes &amp; businesses serviced</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 06 ELIGIBILITY EXPLAINER */}
        <section className="sec mist" aria-labelledby="elig-h">
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
            <div className="g-half">
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <span className="eyebrow">
                  <span className="dot" />
                  Rebates &amp; incentives
                </span>
                <h2 id="elig-h" className="h2">
                  Incentives are real. They also depend on you.
                </h2>
                <p className="lead">
                  Government programs such as the Victorian Energy Upgrades (VEU) program, the NSW Energy Savings Scheme
                  (ESS) and the federal Cheaper Home Batteries Program can reduce the upfront cost of eligible upgrades.
                  Whether you qualify — and for how much — comes down to four things.
                </p>
                <div
                  className="link-row"
                  style={{ display: "flex", gap: "24px", flexWrap: "wrap", font: "700 15px/1 'Inter', sans-serif" }}
                >
                  <a href={`${BASE}/victoria/victorian-energy-upgrades/`}>How the VEU program works →</a>
                  <a href={`${BASE}/nsw/energy-savings-scheme-ess/`}>How the NSW ESS works →</a>
                  <a href="https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries">
                    Federal battery discount →
                  </a>
                </div>
              </div>
              <div className="photo" style={{ height: "460px" }}>
                <img
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  src={`${BASE}/assets/images/heat-pump-plumbing-gauges.webp`}
                  alt="Heat pump plumbing with pressure gauges and valves"
                />{" "}
                <span className="lab">Approved products, installed to standard</span>
              </div>
            </div>
            <div className="g-4 steps">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  borderTop: "2px solid #0E193F",
                  paddingTop: "24px",
                }}
              >
                <span className="factor-n" aria-hidden="true">
                  01
                </span>
                <h3 style={{ fontSize: "22px", letterSpacing: "-.01em" }}>Location</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5372" }}>
                  Your state and postcode decide which schemes apply to you.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  borderTop: "2px solid #0E193F",
                  paddingTop: "24px",
                }}
              >
                <span className="factor-n" aria-hidden="true">
                  02
                </span>
                <h3 style={{ fontSize: "22px", letterSpacing: "-.01em" }}>Product</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5372" }}>
                  Only approved, listed models are eligible — we quote compliant products.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  borderTop: "2px solid #0E193F",
                  paddingTop: "24px",
                }}
              >
                <span className="factor-n" aria-hidden="true">
                  03
                </span>
                <h3 style={{ fontSize: "22px", letterSpacing: "-.01em" }}>Scheme rules</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5372" }}>
                  Programs change, and incentive values move with certificate prices.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  borderTop: "2px solid #0E193F",
                  paddingTop: "24px",
                }}
              >
                <span className="factor-n" aria-hidden="true">
                  04
                </span>
                <h3 style={{ fontSize: "22px", letterSpacing: "-.01em" }}>Your circumstances</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#4A5372" }}>
                  Your existing system, property type and ownership all matter.
                </p>
              </div>
            </div>
            <div
              className="dark"
              style={{
                borderRadius: "28px",
                padding: "32px 36px",
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  flex: "none",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#A0E25F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="m5 10.5 3.2 3L15 7"
                    stroke="#0E193F"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "20px", fontWeight: "700" }}>Our transparency promise</span>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#B9C0D2" }}>
                  We confirm your eligibility and show any discount as a separate line on your written quote before you
                  commit. If you don’t qualify, we’ll tell you — and you’re under no obligation.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 07 GUIDED SELECTOR */}
        <section id="check" className="sec" aria-labelledby="check-h">
          <div className="wrap">
            <div className="g-split" style={{ alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <span className="eyebrow">
                  <span className="dot" />
                  Free eligibility check
                </span>
                <h2 id="check-h" className="h2">
                  Find the right upgrade for your home
                </h2>
                <p className="lead">
                  Three quick questions. No hard sell — just a clear answer on what suits your home and which incentives
                  may apply.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    margin: "0",
                    padding: "0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    fontSize: "16px",
                    lineHeight: "1.5",
                  }}
                >
                  <li style={{ display: "flex", gap: "12px" }}>
                    <span
                      style={{
                        flex: "none",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "#A0E25F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path
                          d="m5 10.5 3.2 3L15 7"
                          stroke="#0E193F"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    We review your answers against current scheme rules
                  </li>
                  <li style={{ display: "flex", gap: "12px" }}>
                    <span
                      style={{
                        flex: "none",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "#A0E25F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path
                          d="m5 10.5 3.2 3L15 7"
                          stroke="#0E193F"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    A specialist calls to confirm a few details
                  </li>
                  <li style={{ display: "flex", gap: "12px" }}>
                    <span
                      style={{
                        flex: "none",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "#A0E25F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path
                          d="m5 10.5 3.2 3L15 7"
                          stroke="#0E193F"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    You receive a written, itemised quote — no obligation
                  </li>
                </ul>
                <a className="call-link" href="tel:0386095195" style={{ font: "700 16px/1 'Inter', sans-serif" }}>
                  Prefer to talk? Call 03 8609 5195
                </a>
              </div>
              <div
                className="card dark"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                  boxShadow: "0 40px 80px -32px rgba(14,25,63,.55)",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", font: "600 14px/1 'Inter', sans-serif" }}
                  >
                    <span>
                      <span id="step-label">Step 1 of 3</span>
                    </span>
                    <span style={{ color: "#B9C0D2" }}>
                      <span id="step-name">Property</span>
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "6px" }} aria-hidden="true">
                    <span className="bar on" data-bar="1" />
                    <span className="bar " data-bar="2" />
                    <span className="bar " data-bar="3" />
                  </div>
                </div>
                <div className="step" data-step="1" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  <fieldset
                    style={{
                      border: "0",
                      margin: "0",
                      padding: "0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <legend
                      style={{
                        fontSize: "26px",
                        fontWeight: "700",
                        letterSpacing: "-.02em",
                        marginBottom: "20px",
                        padding: "0",
                      }}
                    >
                      What type of property is it?
                    </legend>
                    <div className="g-2" style={{ gap: "12px" }}>
                      <label className="opt on">
                        <input type="radio" name="ptype" defaultChecked data-i="0" data-onchange="o.pick" />
                        House / townhouse
                      </label>{" "}
                      <label className="opt ">
                        <input type="radio" name="ptype" data-i="1" data-onchange="o.pick" />
                        Apartment / unit
                      </label>{" "}
                      <label className="opt ">
                        <input type="radio" name="ptype" data-i="2" data-onchange="o.pick" />
                        Rental I own or manage
                      </label>{" "}
                      <label className="opt ">
                        <input type="radio" name="ptype" data-i="3" data-onchange="o.pick" />
                        Business premises
                      </label>
                    </div>
                  </fieldset>
                  <button type="button" className="btn btn-lime" data-onclick="next1" style={{ width: "100%" }}>
                    Continue
                  </button>
                </div>
                <div
                  className="step"
                  data-step="2"
                  style={{ display: "flex", flexDirection: "column", gap: "28px" }}
                  hidden
                >
                  <h3 style={{ fontSize: "26px", letterSpacing: "-.02em" }}>Where is the property?</h3>
                  <div className="fld ">
                    <label htmlFor="pc">Postcode</label>{" "}
                    <input
                      id="pc"
                      type="text"
                      inputMode="numeric"
                      autoComplete="postal-code"
                      maxLength={4}
                      placeholder="e.g. 3026"
                      defaultValue=""
                      data-oninput="onPc"
                      aria-invalid="false"
                      aria-describedby="pc-help"
                    />
                    <p id="pc-err" hidden className="errmsg" role="alert">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path
                          d="M10 6v5m0 3.2v.1M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Enter a 4-digit Australian postcode
                    </p>
                    <p id="pc-help" className="help">
                      Used to check which state schemes may apply
                    </p>
                  </div>
                  <div className="btn-row">
                    <button type="button" className="btn btn-ghost-dark" data-onclick="back">
                      Back
                    </button>
                    <button type="button" className="btn btn-lime" data-onclick="next2" style={{ flex: "1" }}>
                      Continue
                    </button>
                  </div>
                </div>
                <div
                  className="step"
                  data-step="3"
                  style={{ display: "flex", flexDirection: "column", gap: "28px" }}
                  hidden
                >
                  <h3 style={{ fontSize: "26px", letterSpacing: "-.02em" }}>What would you like to upgrade?</h3>
                  <div className="fld">
                    <label htmlFor="up">Upgrade interest</label>{" "}
                    <select id="up" data-onchange="onUp" defaultValue="">
                      <option value="">Select an upgrade</option>
                      <option value="Residential heat pump">Residential heat pump</option>
                      <option value="Air conditioner">Air conditioner</option>
                      <option value="Solar &amp; battery">Solar &amp; battery</option>
                      <option value="EV charger">EV charger</option>
                      <option value="LED lighting">LED lighting</option>
                      <option value="Water filter">Water filter</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                  <div className="g-2" style={{ gap: "16px" }}>
                    <div className="fld">
                      <label htmlFor="fn">First name</label>
                      <input id="fn" type="text" autoComplete="given-name" defaultValue="" data-oninput="onName" />
                    </div>
                    <div className="fld">
                      <label htmlFor="mb">Mobile number</label>
                      <input
                        id="mb"
                        type="tel"
                        autoComplete="tel"
                        placeholder="04xx xxx xxx"
                        defaultValue=""
                        data-oninput="onMobile"
                      />
                      <p className="help">We’ll only call about your quote</p>
                    </div>
                  </div>
                  <div className="btn-row">
                    <button type="button" className="btn btn-ghost-dark" data-onclick="back">
                      Back
                    </button>
                    <button type="button" className="btn btn-lime" data-onclick="submit" style={{ flex: "1" }}>
                      See My Eligibility
                    </button>
                  </div>
                </div>
                <div
                  className="step"
                  data-step="4"
                  style={{ display: "flex", flexDirection: "column", gap: "28px" }}
                  hidden
                >
                  <div role="status" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <span
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        background: "#A0E25F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="26" height="26" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path
                          d="m5 10.5 3.2 3L15 7"
                          stroke="#0E193F"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <h3 style={{ fontSize: "28px", letterSpacing: "-.02em" }}>
                      Thanks
                      <span id="done-name" /> — we’re on it.
                    </h3>
                    <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#B9C0D2" }}>
                      A specialist will call to confirm your details and which incentives may apply to your{" "}
                      <span id="done-upgrade">upgrade</span>. Your written quote comes before any commitment.
                    </p>
                    <button
                      type="button"
                      className="btn btn-ghost-dark"
                      data-onclick="restart"
                      style={{ alignSelf: "flex-start" }}
                    >
                      Start again
                    </button>
                  </div>
                </div>
                <p style={{ display: "flex", gap: "8px", alignItems: "center", fontSize: "13px", color: "#B9C0D2" }}>
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M6 9V6.5a4 4 0 0 1 8 0V9M5 9h10v8H5V9Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                  No obligation · We never share your details
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 08 SAVINGS */}
        <section className="sec mist" aria-labelledby="sav-h">
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "820px" }}>
              <span className="eyebrow">
                <span className="dot" />
                Savings, explained
              </span>
              <h2 id="sav-h" className="h2">
                Where your savings come from
              </h2>
              <p className="lead">
                Every home is different, so we don’t promise a number. Here’s how each upgrade reduces the energy you
                pay for.
              </p>
            </div>
            <div className="g-sav">
              <div className="sav-panels">
                <div className="sav-panel" id="sav-p-hw" role="tabpanel" aria-labelledby="sav-t-hw" tabIndex={0}>
                  <div className="photo" style={{ height: "240px", borderRadius: "0" }}>
                    <img
                      loading="lazy"
                      fetchPriority="low"
                      decoding="async"
                      src={`${BASE}/assets/images/heat-pump-tank-install.webp`}
                      alt="A heat pump hot water tank and plumbing installed in a utility room"
                    />
                  </div>
                  <div
                    style={{
                      padding: "36px 40px 40px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                      flex: "1",
                    }}
                  >
                    <h3 style={{ fontSize: "26px", letterSpacing: "-.02em" }}>Energy used to heat water</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "12px",
                          font: "500 15px/1.3 'Inter', sans-serif",
                        }}
                      >
                        <span>Conventional electric or gas</span>
                        <span style={{ color: "#4A5372" }}>Baseline</span>
                      </div>
                      <div className="track">
                        <div style={{ width: "100%", height: "100%", background: "#B9C0D2", borderRadius: "999px" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "12px",
                          font: "500 15px/1.3 'Inter', sans-serif",
                        }}
                      >
                        <span>Heat pump water heater</span>
                        <span style={{ fontWeight: "600" }}>60–75% less energy</span>
                      </div>
                      <div className="track">
                        <div style={{ width: "32%", height: "100%", background: "#A0E25F", borderRadius: "999px" }} />
                      </div>
                    </div>
                    <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#4A5372" }}>
                      Source: NSW Climate and Energy Action — heat pump water heaters use 60–75% less energy than
                      conventional gas or electric units. Illustrative; your results will vary.
                    </p>
                    <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ font: "600 14px/1 'Inter', sans-serif", color: "#4A5372" }}>
                        Your savings depend on
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        <span className="chip">Household size</span>
                        <span className="chip">Current system</span>
                        <span className="chip">Energy tariff</span>
                        <span className="chip">How you use energy</span>
                      </div>
                      <p style={{ fontSize: "16px", fontWeight: "700", marginTop: "8px" }}>
                        We estimate savings from your own bills — not averages.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sav-panel" id="sav-p-ac" role="tabpanel" aria-labelledby="sav-t-ac" tabIndex={0} hidden>
                  <div className="photo" style={{ height: "240px", borderRadius: "0" }}>
                    <img
                      loading="lazy"
                      fetchPriority="low"
                      decoding="async"
                      src={`${BASE}/assets/images/ducted-air-conditioner.webp`}
                      alt="A ducted air conditioning outdoor unit against a grey wall"
                    />
                  </div>
                  <div
                    style={{
                      padding: "36px 40px 40px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                      flex: "1",
                    }}
                  >
                    <h3 style={{ fontSize: "26px", letterSpacing: "-.02em" }}>Cost to heat the same room</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "12px",
                          font: "500 15px/1.3 'Inter', sans-serif",
                        }}
                      >
                        <span>Portable electric heater</span>
                        <span style={{ color: "#4A5372" }}>Baseline</span>
                      </div>
                      <div className="track">
                        <div style={{ width: "100%", height: "100%", background: "#B9C0D2", borderRadius: "999px" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "12px",
                          font: "500 15px/1.3 'Inter', sans-serif",
                        }}
                      >
                        <span>Reverse-cycle air conditioner</span>
                        <span style={{ fontWeight: "600" }}>About a third of the cost</span>
                      </div>
                      <div className="track">
                        <div style={{ width: "33%", height: "100%", background: "#A0E25F", borderRadius: "999px" }} />
                      </div>
                    </div>
                    <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#4A5372" }}>
                      Source: Solar Victoria, based on CHOICE calculations — a reverse-cycle air conditioner costs about
                      a third as much to run as an electric heater in the same space. Illustrative; your results will
                      vary.
                    </p>
                    <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ font: "600 14px/1 'Inter', sans-serif", color: "#4A5372" }}>
                        Your savings depend on
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        <span className="chip">Home size &amp; insulation</span>
                        <span className="chip">Current heating</span>
                        <span className="chip">Unit size &amp; star rating</span>
                        <span className="chip">Energy tariff</span>
                      </div>
                      <p style={{ fontSize: "16px", fontWeight: "700", marginTop: "8px" }}>
                        We estimate savings from your own bills — not averages.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="sav-panel"
                  id="sav-p-bat"
                  role="tabpanel"
                  aria-labelledby="sav-t-bat"
                  tabIndex={0}
                  hidden
                >
                  <div className="photo" style={{ height: "240px", borderRadius: "0" }}>
                    <img
                      loading="lazy"
                      fetchPriority="low"
                      decoding="async"
                      src={`${BASE}/assets/images/hero-solar-home-800.webp`}
                      srcSet={`${BASE}/assets/images/hero-solar-home-480.webp 480w, ${BASE}/assets/images/hero-solar-home-800.webp 800w, ${BASE}/assets/images/hero-solar-home-1200.webp 1200w`}
                      sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 640px"
                      alt="A home with rooftop solar panels"
                    />
                  </div>
                  <div
                    style={{
                      padding: "36px 40px 40px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                      flex: "1",
                    }}
                  >
                    <h3 style={{ fontSize: "26px", letterSpacing: "-.02em" }}>How solar and a battery cut your bill</h3>
                    <ol className="sav-steps">
                      <li>
                        <span className="n" aria-hidden="true">
                          1
                        </span>
                        <span>By day, your panels power the home first.</span>
                      </li>
                      <li>
                        <span className="n" aria-hidden="true">
                          2
                        </span>
                        <span>Surplus solar charges the battery instead of being exported for a low feed-in rate.</span>
                      </li>
                      <li>
                        <span className="n" aria-hidden="true">
                          3
                        </span>
                        <span>
                          In the evening, the battery runs the home, so you buy less grid power at peak rates.
                        </span>
                      </li>
                    </ol>
                    <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#4A5372" }}>
                      How much you save depends on how much of your own solar you use. Illustrative; your results will
                      vary.
                    </p>
                    <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ font: "600 14px/1 'Inter', sans-serif", color: "#4A5372" }}>
                        Your savings depend on
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        <span className="chip">System size</span>
                        <span className="chip">Roof direction &amp; shade</span>
                        <span className="chip">When you use energy</span>
                        <span className="chip">Energy tariff</span>
                      </div>
                      <p style={{ fontSize: "16px", fontWeight: "700", marginTop: "8px" }}>
                        We estimate savings from your own bills — not averages.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sav-panel" id="sav-p-ev" role="tabpanel" aria-labelledby="sav-t-ev" tabIndex={0} hidden>
                  <div className="photo" style={{ height: "240px", borderRadius: "0" }}>
                    <img
                      loading="lazy"
                      fetchPriority="low"
                      decoding="async"
                      src={`${BASE}/assets/images/svc-ev-charger.webp`}
                      alt="A wall-mounted EV charger beside a driveway with an electric car"
                      style={{ objectPosition: "30% 50%" }}
                    />
                  </div>
                  <div
                    style={{
                      padding: "36px 40px 40px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                      flex: "1",
                    }}
                  >
                    <h3 style={{ fontSize: "26px", letterSpacing: "-.02em" }}>How home charging saves</h3>
                    <ol className="sav-steps">
                      <li>
                        <span className="n" aria-hidden="true">
                          1
                        </span>
                        <span>Charge overnight on an off-peak or EV tariff, where your retailer offers one.</span>
                      </li>
                      <li>
                        <span className="n" aria-hidden="true">
                          2
                        </span>
                        <span>With solar, a smart charger can top up the car from surplus daytime power.</span>
                      </li>
                      <li>
                        <span className="n" aria-hidden="true">
                          3
                        </span>
                        <span>Everyday charging happens at home, rather than at public fast chargers.</span>
                      </li>
                    </ol>
                    <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#4A5372" }}>
                      Running costs depend on your tariff, your car’s efficiency and how far you drive. Illustrative;
                      your results will vary.
                    </p>
                    <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ font: "600 14px/1 'Inter', sans-serif", color: "#4A5372" }}>
                        Your savings depend on
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        <span className="chip">How far you drive</span>
                        <span className="chip">Your electricity tariff</span>
                        <span className="chip">Solar on your roof</span>
                        <span className="chip">Charger type</span>
                      </div>
                      <p style={{ fontSize: "16px", fontWeight: "700", marginTop: "8px" }}>
                        We estimate savings from your own bills — not averages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sav-tabs" role="tablist" aria-label="Choose an upgrade" aria-orientation="vertical">
                <button
                  type="button"
                  className="sav-tab"
                  id="sav-t-hw"
                  role="tab"
                  data-sav="hw"
                  aria-selected="true"
                  aria-controls="sav-p-hw"
                  tabIndex={0}
                >
                  <span className="tk" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path
                        d="m5 10.5 3.2 3L15 7"
                        stroke="#0E193F"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="k">Hot water</span>
                  <span className="t">Heat pumps move heat, they don’t make it</span>
                  <span className="d">
                    Pulling warmth from the air means far less electricity to heat the same water.
                  </span>
                </button>{" "}
                <button
                  type="button"
                  className="sav-tab"
                  id="sav-t-ac"
                  role="tab"
                  data-sav="ac"
                  aria-selected="false"
                  aria-controls="sav-p-ac"
                  tabIndex={-1}
                >
                  <span className="tk" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path
                        d="m5 10.5 3.2 3L15 7"
                        stroke="#0E193F"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="k">Heating &amp; cooling</span>
                  <span className="t">Reverse-cycle air con</span>
                  <span className="d">
                    One efficient system for heating and cooling, often replacing older heaters.
                  </span>
                </button>{" "}
                <button
                  type="button"
                  className="sav-tab"
                  id="sav-t-bat"
                  role="tab"
                  data-sav="bat"
                  aria-selected="false"
                  aria-controls="sav-p-bat"
                  tabIndex={-1}
                >
                  <span className="tk" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path
                        d="m5 10.5 3.2 3L15 7"
                        stroke="#0E193F"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="k">Solar &amp; battery</span>
                  <span className="t">Make power by day, use it at night</span>
                  <span className="d">Store daytime solar for the evening and buy less from the grid.</span>
                </button>{" "}
                <button
                  type="button"
                  className="sav-tab"
                  id="sav-t-ev"
                  role="tab"
                  data-sav="ev"
                  aria-selected="false"
                  aria-controls="sav-p-ev"
                  tabIndex={-1}
                >
                  <span className="tk" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path
                        d="m5 10.5 3.2 3L15 7"
                        stroke="#0E193F"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="k">EV charging</span>
                  <span className="t">Charge at home for less</span>
                  <span className="d">Charge from solar or off-peak power for everyday driving.</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* 10 EVENTS */}
        <section id="events" className="sec" aria-labelledby="ev-h">
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div
              className="sec-head"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "760px" }}>
                <span className="eyebrow">
                  <span className="dot" />
                  Events
                </span>
                <h2 id="ev-h" className="h2">
                  Auzbright at the Sydney Home Show 2026
                </h2>
                <p className="lead">
                  From 9–11 October 2026 we showcased our electrification solutions to homeowners and industry
                  professionals at the Sydney Home Show, with thanks to our partners at Econova.
                </p>
              </div>
              <a
                className="btn btn-ghost btn-sm"
                href="https://www.linkedin.com/company/auzbright"
                target="_blank"
                rel="noopener"
              >
                More on LinkedIn
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 10h12m0 0-5-5m5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="ev-grid" role="list" aria-label="Sydney Home Show 2026 photos">
              <figure className="ev-ph ev-photo a" role="listitem" style={{ margin: "0" }}>
                <img
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  src={`${BASE}/assets/images/event-sydney-stand.webp`}
                  width="800"
                  height="600"
                  alt="Visitors talking with the Auzbright team at our stand at the Sydney Home Show 2026"
                />
                <span className="ev-lab">Sydney Home Show · October 2026</span>
              </figure>
              <figure className="ev-ph ev-photo b" role="listitem" style={{ margin: "0" }}>
                <img
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  src={`${BASE}/assets/images/event-sydney-heat-pumps.webp`}
                  width="800"
                  height="600"
                  alt="A screen at the Auzbright stand showing hot water heat pumps"
                />
              </figure>
              <figure className="ev-ph ev-photo" role="listitem" style={{ margin: "0" }}>
                <img
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  src={`${BASE}/assets/images/event-sydney-screen.webp`}
                  width="800"
                  height="600"
                  alt="The Auzbright logo on a screen at our Sydney Home Show stand"
                />
              </figure>
              <figure className="ev-ph ev-photo" role="listitem" style={{ margin: "0" }}>
                <img
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  src={`${BASE}/assets/images/event-sydney-solar-battery.webp`}
                  width="750"
                  height="1000"
                  alt="A screen at the Auzbright stand showing a solar and battery package"
                  style={{ objectPosition: "50% 30%" }}
                />
              </figure>
            </div>
          </div>
        </section>
        {/* 11 GOOGLE REVIEWS */}
        <section className="sec mist" aria-labelledby="rev-h">
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div className="g-split" style={{ alignItems: "end", gap: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <span className="eyebrow">
                  <span className="dot" />
                  Customer reviews
                </span>
                <h2 id="rev-h" className="h2">
                  What our customers say on Google
                </h2>
              </div>
              <div className="rv-summary">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span
                      style={{ font: "700 22px/1 'Inter',Arial,sans-serif", letterSpacing: ".02em", color: "#202124" }}
                    >
                      EXCELLENT
                    </span>{" "}
                    <span className="stars" role="img" aria-label="Rated 5 out of 5 stars">
                      <svg width="22" height="22" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                        <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                      </svg>
                      <svg width="22" height="22" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                        <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                      </svg>
                      <svg width="22" height="22" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                        <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                      </svg>
                      <svg width="22" height="22" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                        <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                      </svg>
                      <svg width="22" height="22" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                        <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                      </svg>
                    </span>{" "}
                    <span style={{ font: "400 14px/1.3 'Inter',Arial,sans-serif", color: "#5F6368" }}>
                      Based on <strong style={{ color: "#202124" }}>116 reviews</strong> on Google
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <a
                      className="btn btn-navy"
                      href="https://www.google.com/search?q=Auzbright+reviews"
                      style={{ minHeight: "48px", padding: "0 20px", fontSize: "14px" }}
                    >
                      Read all reviews
                    </a>{" "}
                    <a
                      className="btn btn-ghost"
                      href="https://www.google.com/search?q=Auzbright+reviews"
                      style={{ minHeight: "48px", padding: "0 20px", fontSize: "14px" }}
                    >
                      Write a review
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rv-track" tabIndex={0} aria-label="Google reviews, scroll sideways for more">
              <article className="rv">
                <div className="rv-head">
                  <span className="av" style={{ background: "#5E35B1" }} aria-hidden="true">
                    J
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                    <span className="rv-name">Jayne Robinson</span>
                    <span className="rv-meta">Google review</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="stars" role="img" aria-label="5 out of 5 stars">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                  </span>{" "}
                  <span className="verified rv-meta">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="8" fill="#1A73E8" />
                      <path
                        d="m6.5 10.2 2.3 2.2 4.7-4.8"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Verified
                  </span>
                </div>
                <p className="rv-text ">
                  I cannot recommend AuzBright highly enough. From the initial enquiry through to the completion of my
                  air conditioning and hot water system installations, the entire process was outstanding. Sahil was my
                  main point of contact and was professional, knowledgeable, honest and incredibly helpful throughout. …
                  The quotes provided were detailed and transparent, with no hidden surprises or unanswered questions
                  about pricing or what was included.
                </p>
                <button type="button" className="rv-more" aria-expanded="false" data-i="0" data-onclick="r.toggle">
                  Read more
                </button>
                <div className="rv-src">
                  <span>Posted on Google</span>
                  <span>Air conditioning &amp; hot water</span>
                </div>
              </article>
              <article className="rv">
                <div className="rv-head">
                  <span className="av" style={{ background: "#00897B" }} aria-hidden="true">
                    S
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                    <span className="rv-name">Suzana Knez</span>
                    <span className="rv-meta">Google review</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="stars" role="img" aria-label="5 out of 5 stars">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                  </span>{" "}
                  <span className="verified rv-meta">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="8" fill="#1A73E8" />
                      <path
                        d="m6.5 10.2 2.3 2.2 4.7-4.8"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Verified
                  </span>
                </div>
                <p className="rv-text ">
                  Auzbright is highly recommended. they helped with hotwater installation. Fayaz made the whole process
                  easy and seamless, from start to finish, including guiding us through the rebate process. We are truly
                  happy including the installation. Well done to the Auzbright team and thank you to Fayaz!
                </p>
                <button type="button" className="rv-more" aria-expanded="false" data-i="1" data-onclick="r.toggle">
                  Read more
                </button>
                <div className="rv-src">
                  <span>Posted on Google</span>
                  <span>Hot water installation</span>
                </div>
              </article>
              <article className="rv">
                <div className="rv-head">
                  <span className="av" style={{ background: "#E64A19" }} aria-hidden="true">
                    A
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                    <span className="rv-name">Ashwin Amin</span>
                    <span className="rv-meta">Google review</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="stars" role="img" aria-label="5 out of 5 stars">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                  </span>{" "}
                  <span className="verified rv-meta">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="8" fill="#1A73E8" />
                      <path
                        d="m6.5 10.2 2.3 2.2 4.7-4.8"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Verified
                  </span>
                </div>
                <p className="rv-text ">
                  Really happy with the service from AuzBright. They managed to fit in my multi-head split system
                  installation at short notice, which was a huge help. Sahil was great to deal with—easy to communicate
                  with, responsive, and very reasonable with the pricing. The whole process was smooth and hassle-free.
                  Would definitely recommend AuzBright.
                </p>
                <button type="button" className="rv-more" aria-expanded="false" data-i="2" data-onclick="r.toggle">
                  Read more
                </button>
                <div className="rv-src">
                  <span>Posted on Google</span>
                  <span>Multi-head split system</span>
                </div>
              </article>
              <article className="rv">
                <div className="rv-head">
                  <span className="av" style={{ background: "#C2185B" }} aria-hidden="true">
                    M
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                    <span className="rv-name">MANSI DHINGRA</span>
                    <span className="rv-meta">Google review</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="stars" role="img" aria-label="5 out of 5 stars">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                  </span>{" "}
                  <span className="verified rv-meta">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="8" fill="#1A73E8" />
                      <path
                        d="m6.5 10.2 2.3 2.2 4.7-4.8"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Verified
                  </span>
                </div>
                <p className="rv-text ">
                  Excellent service everyone was professional with did fox ess battery Recommended
                </p>
                <div className="rv-src">
                  <span>Posted on Google</span>
                  <span>Battery</span>
                </div>
              </article>
              <article className="rv">
                <div className="rv-head">
                  <span className="av" style={{ background: "#3949AB" }} aria-hidden="true">
                    S
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                    <span className="rv-name">shinoj Thomas</span>
                    <span className="rv-meta">Google review</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="stars" role="img" aria-label="5 out of 5 stars">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                  </span>{" "}
                  <span className="verified rv-meta">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="8" fill="#1A73E8" />
                      <path
                        d="m6.5 10.2 2.3 2.2 4.7-4.8"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Verified
                  </span>
                </div>
                <p className="rv-text ">
                  Reasonable price, explained well about the instillation process and very good follow up from
                  Auzbright. Overall good experience with Auzbright
                </p>
                <div className="rv-src">
                  <span>Posted on Google</span>
                  <span>Installation</span>
                </div>
              </article>
              <article className="rv">
                <div className="rv-head">
                  <span className="av" style={{ background: "#6D4C41" }} aria-hidden="true">
                    R
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                    <span className="rv-name">Rajat AV</span>
                    <span className="rv-meta">Google review</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="stars" role="img" aria-label="5 out of 5 stars">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
                      <path d="M10 1.8l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.6l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.8Z" />
                    </svg>
                  </span>{" "}
                  <span className="verified rv-meta">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="8" fill="#1A73E8" />
                      <path
                        d="m6.5 10.2 2.3 2.2 4.7-4.8"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Verified
                  </span>
                </div>
                <p className="rv-text ">
                  Customer service staff was super helpful. They were able to help us out even over the weekend. They
                  are the best in the business as their product speaks for themsleves.
                </p>
                <div className="rv-src">
                  <span>Posted on Google</span>
                  <span>Customer service</span>
                </div>
              </article>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <p style={{ fontSize: "13px", lineHeight: "1.5", color: "#4A5372", maxWidth: "640px" }}>
                Reviews shown word for word as published on Google. Longer reviews are shortened — select “Read more” to
                see the full text.
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <button type="button" className="icon-btn light" aria-label="Previous reviews" data-onclick="rvPrev">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M16 10H4m0 0 5-5m-5 5 5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>{" "}
                <button type="button" className="icon-btn light" aria-label="Next reviews" data-onclick="rvNext">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M4 10h12m0 0-5-5m5 5-5 5"
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
        </section>
        {/* 12 WHY AUZBRIGHT */}
        <section id="about" className="sec" aria-labelledby="why-h">
          <div className="wrap">
            <div className="why-top">
              <div className="why-head">
                <span className="eyebrow">
                  <span className="dot" />
                  Why Auzbright
                </span>
                <h2 id="why-h" className="h2">
                  Local, accredited and accountable.
                </h2>
                <p className="lead">
                  Since 2017 we’ve helped Victorian and NSW households and businesses take part in state
                  energy-efficiency programs — from first question to final paperwork.
                </p>
                <a className="btn btn-ghost" href={`${BASE}/about/`}>
                  More about us
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M4 10h12m0 0-5-5m5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="photo why-photo">
                <img
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  src={`${BASE}/assets/images/hero-heat-pump-installer-800.webp`}
                  srcSet={`${BASE}/assets/images/hero-heat-pump-installer-480.webp 480w, ${BASE}/assets/images/hero-heat-pump-installer-800.webp 800w, ${BASE}/assets/images/hero-heat-pump-installer-1200.webp 1200w`}
                  sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 640px"
                  alt="An installer fitting a heat pump hot water system at a customer’s home"
                />
                <span className="lab">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Derrimut, Melbourne · Servicing VIC &amp; NSW
                </span>
              </div>
            </div>
            <ul className="g-4 why-cards">
              <li className="why-card">
                <span className="why-ico">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="why-k">Since 2017</p>
                  <h3>Established in Victoria</h3>
                  <p className="why-d">Office and team based in Derrimut, Melbourne.</p>
                </div>
              </li>
              <li className="why-card is-feature">
                <span className="why-ico">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z M8.8 12.2l2.2 2.2 4.4-4.6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="why-k">VEU · ESS</p>
                  <h3>Accredited provider</h3>
                  <p className="why-d">Accredited Certificate Provider for the VEU and ESS programs.</p>
                </div>
              </li>
              <li className="why-card">
                <span className="why-ico">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="why-k">Licensed</p>
                  <h3>Qualified trades</h3>
                  <p className="why-d">Installs carried out by licensed electricians and plumbers.</p>
                </div>
              </li>
              <li className="why-card">
                <span className="why-ico">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1 M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z M21 19v-1a4 4 0 0 0-3-3.9 M15.5 3.1a3.5 3.5 0 0 1 0 6.8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="why-k">One team</p>
                  <h3>End to end</h3>
                  <p className="why-d">Quote, installation and scheme paperwork handled for you.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* 13 FAQS */}
        <section id="faqs" className="sec mist" aria-labelledby="faq-h">
          <div className="wrap g-split">
            <div className="faq-side">
              <span className="eyebrow">
                <span className="dot" />
                FAQs
              </span>
              <h2 id="faq-h" className="h2">
                Good questions, straight answers
              </h2>
              <p className="lead">The things customers ask us most about incentives, costs and installation.</p>
              <div className="faq-help">
                <p className="faq-help-k">Still have a question?</p>
                <p className="faq-help-t">Our team is available Mon–Fri, 9am–5pm.</p>
                <ul className="faq-help-list">
                  <li>
                    <a href="tel:0386095195">
                      <span className="cp-ico">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="cp-txt">
                        <strong>Call us</strong>
                        <small>03 8609 5195</small>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:admin@auzbright.com.au">
                      <span className="cp-ico">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M4 6h16v12H4z M4 7l8 6 8-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="cp-txt">
                        <strong>Email us</strong>
                        <small>admin@auzbright.com.au</small>
                      </span>
                    </a>
                  </li>
                </ul>
                <button type="button" className="btn btn-navy btn-sm faq-help-chat" data-onclick="chatToggle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M21 12a8.5 8.5 0 0 1-12.4 7.6L3 21l1.5-5.2A8.5 8.5 0 1 1 21 12Z M8.5 11h.01 M12 11h.01 M15.5 11h.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Chat with us
                </button>
              </div>
            </div>
            <div className="faq-list">
              <div className="faq-item">
                <h3 style={{ margin: "0" }}>
                  <button type="button" className="faq-q" aria-expanded="true" data-i="0" data-onclick="f.toggle">
                    Am I eligible for a government incentive?
                    <span className="faq-i on" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10h12" stroke="#0E193F" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <p className="faq-a">
                  It depends on your state and postcode, your property, the product you choose and the scheme rules at
                  the time of installation. Our free check looks at all of this before you commit.
                </p>
              </div>
              <div className="faq-item">
                <h3 style={{ margin: "0" }}>
                  <button type="button" className="faq-q" aria-expanded="false" data-i="1" data-onclick="f.toggle">
                    How much will my upgrade cost?
                    <span className="faq-i " aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4v12M4 10h12" stroke="#0E193F" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <p className="faq-a" hidden>
                  It depends on the product, your home and any incentive you qualify for. You’ll get a written, itemised
                  quote before any work starts — with no obligation.
                </p>
              </div>
              <div className="faq-item">
                <h3 style={{ margin: "0" }}>
                  <button type="button" className="faq-q" aria-expanded="false" data-i="2" data-onclick="f.toggle">
                    How do rebates and discounts work?
                    <span className="faq-i " aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4v12M4 10h12" stroke="#0E193F" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <p className="faq-a" hidden>
                  Most state scheme incentives are applied as a point-of-sale discount by an accredited provider, so you
                  don’t have to claim them yourself. We show any discount as its own line on your quote.
                </p>
              </div>
              <div className="faq-item">
                <h3 style={{ margin: "0" }}>
                  <button type="button" className="faq-q" aria-expanded="false" data-i="3" data-onclick="f.toggle">
                    How long does installation take?
                    <span className="faq-i " aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4v12M4 10h12" stroke="#0E193F" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <p className="faq-a" hidden>
                  Timing depends on the system and your site. We’ll confirm a date and expected timeframe when you book.
                </p>
              </div>
              <div className="faq-item">
                <h3 style={{ margin: "0" }}>
                  <button type="button" className="faq-q" aria-expanded="false" data-i="4" data-onclick="f.toggle">
                    Which areas do you service?
                    <span className="faq-i " aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4v12M4 10h12" stroke="#0E193F" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <p className="faq-a" hidden>
                  Our office is in Derrimut, Victoria. Enter your postcode in the eligibility check and we’ll confirm
                  availability for your area.
                </p>
              </div>
              <div className="faq-item">
                <h3 style={{ margin: "0" }}>
                  <button type="button" className="faq-q" aria-expanded="false" data-i="5" data-onclick="f.toggle">
                    Do you work with landlords, property managers and businesses?
                    <span className="faq-i " aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4v12M4 10h12" stroke="#0E193F" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <p className="faq-a" hidden>
                  Yes. Rental and commercial eligibility rules differ, so we check each property individually.
                </p>
              </div>
              <div className="faq-item">
                <h3 style={{ margin: "0" }}>
                  <button type="button" className="faq-q" aria-expanded="false" data-i="6" data-onclick="f.toggle">
                    Which upgrades do you offer?
                    <span className="faq-i " aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4v12M4 10h12" stroke="#0E193F" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <p className="faq-a" hidden>
                  Residential heat pumps, air conditioners, solar and battery, EV chargers, LED lighting and water
                  filters — in Victoria and NSW. Ask us about other eligible efficiency upgrades.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 14 FINAL CTA */}
        <EligibilityCta />
      </main>
    </SiteShell>
  );
}
