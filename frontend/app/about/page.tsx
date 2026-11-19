import type { Metadata } from "next";
import { preload } from "react-dom";

export const metadata: Metadata = {
  title: "About Auzbright | Energy-Efficient Upgrades in Victoria & NSW Since 2017",
  description:
    "Auzbright has helped Victorian and NSW homes and businesses cut energy use since 2017 through the VEU program and NSW Energy Savings Scheme. Meet the company behind your upgrade.",
  alternates: { canonical: "/about/" },
  openGraph: {
    type: "website",
    siteName: "Auzbright",
    title: "About Auzbright",
    description: "Shaping a sustainable future: energy-efficient upgrades for Victorian and NSW homes and businesses since 2017.",
    images: "/assets/images/event-sydney-stand.webp",
    url: "/about/",
  },
};
import { BASE } from "@/lib/site";
import SiteShell from "@/components/SiteShell";

export default function Page() {
  preload(`${BASE}/assets/images/event-sydney-stand.webp`, { as: "image" });
  return (
    <SiteShell
      current="/about/"
      jsonLd={
        '{"@context":"https://schema.org","@graph":[{"@type":"AboutPage","name":"About Auzbright","url":"https://auzbright.com.au/about/","about":{"@id":"https://auzbright.com.au/#business"}},{"@type":"LocalBusiness","@id":"https://auzbright.com.au/#business","name":"Auzbright","url":"https://auzbright.com.au/","foundingDate":"2017","telephone":"+61 3 8609 5195","email":"admin@auzbright.com.au","address":{"@type":"PostalAddress","streetAddress":"Unit 18/45 Hunter Road","addressLocality":"Derrimut","addressRegion":"VIC","postalCode":"3026","addressCountry":"AU"},"areaServed":["Victoria","New South Wales"],"sameAs":["https://www.facebook.com/Auzbrightvic","https://www.instagram.com/auzbright_/","https://www.linkedin.com/company/auzbright"]},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://auzbright.com.au/"},{"@type":"ListItem","position":2,"name":"About us","item":"https://auzbright.com.au/about/"}]}]}'
      }
    >
      <main id="main">
        {/* Hero */}
        <section className="dark ab-hero" aria-labelledby="ab-h">
          <div className="wrap ab-hero-in">
            <div className="ab-hero-copy">
              <nav className="crumbs" aria-label="Breadcrumb">
                <a href={`${BASE}/`}>Home</a>
                <span aria-hidden="true">/</span>
                <span aria-current="page">About us</span>
              </nav>
              <span className="eyebrow">
                <span className="dot" />
                About us
              </span>
              <h1 id="ab-h" className="ct-h1">
                Shaping a sustainable future with <span style={{ color: "#A0E25F" }}>Auzbright.</span>
              </h1>
              <p className="lead">
                Empowering communities through renewable solutions. Since 2017 we’ve helped Victorian and NSW homes and
                businesses use less energy, from the first question to the final paperwork.
              </p>
              <div className="btn-row">
                <a className="btn btn-lime" href={`${BASE}/#check`}>
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
                <a className="btn btn-ghost-dark" href={`${BASE}/contact/`}>
                  Contact us
                </a>
              </div>
            </div>
            <div className="photo ab-hero-photo">
              <img
                src={`${BASE}/assets/images/event-sydney-stand.webp`}
                width="800"
                height="600"
                alt="The Auzbright team talking with visitors at our stand at the Sydney Home Show 2026"
                fetchPriority="high"
              />
              <span className="ev-lab">Our team at the Sydney Home Show</span>
            </div>
          </div>
        </section>
        {/* Key numbers */}
        <section className="ab-stats-sec" aria-label="Auzbright in numbers">
          <div className="wrap">
            <ul className="g-4 ab-stats">
              <li>
                <span className="ab-stat-v">2017</span>
                <span className="ab-stat-l">Established in Victoria</span>
              </li>
              <li>
                <span className="ab-stat-v">
                  <span className="sr-only">5,258</span>
                  <span className="count-up" data-count-to="5258" aria-hidden="true">
                    5,258
                  </span>
                </span>
                <span className="ab-stat-l">Projects completed</span>
              </li>
              <li>
                <span className="ab-stat-v">116</span>
                <span className="ab-stat-l">Google reviews, rated “Excellent”</span>
              </li>
              <li>
                <span className="ab-stat-v">80%</span>
                <span className="ab-stat-l">Saving on lighting costs with LED upgrades</span>
              </li>
            </ul>
          </div>
        </section>
        {/* Who we are */}
        <section className="sec" aria-labelledby="who-h">
          <div className="wrap g-split ab-who">
            <div className="ab-who-copy">
              <span className="eyebrow">
                <span className="dot" />
                Who we are
              </span>
              <h2 id="who-h" className="h2">
                Helping homes and businesses cut their energy use
              </h2>
              <p className="lead">
                Established in 2017, Auzbright is dedicated to reducing carbon emissions in residential and commercial
                buildings through the Victorian Energy Upgrades (VEU) program and the NSW Energy Savings Scheme (ESS).
              </p>
              <p className="ab-p">
                We’re an Accredited Certificate Provider for both programs, based in Derrimut, Melbourne. Our team looks
                after your quote, installation and scheme paperwork, so taking part is simple.
              </p>
            </div>
            <ul className="g-2 ab-values">
              <li className="why-card">
                <span className="why-ico">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="why-k">Our vision</p>
                  <h3>A sustainable global village</h3>
                  <p className="why-d">
                    We’re committed to a more sustainable future by offering cost-effective, energy-efficient
                    alternatives.
                  </p>
                </div>
              </li>
              <li className="why-card is-feature">
                <span className="why-ico">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="why-k">Our mission</p>
                  <h3>Innovation that improves lives</h3>
                  <p className="why-d">
                    We’re always working on products that are innovative, make the world a better place to live and keep
                    us at the forefront of technology.
                  </p>
                </div>
              </li>
              <li className="why-card">
                <span className="why-ico">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M21 12a9 9 0 1 1-3-6.7 M21 4v5h-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="why-k">Change management</p>
                  <h3>Sustainability as a principle</h3>
                  <p className="why-d">
                    Sustainability isn’t a gimmick for us. It’s one of our guiding principles, and we work towards it
                    consistently.
                  </p>
                </div>
              </li>
              <li className="why-card">
                <span className="why-ico">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 12-4 16-9 16Z M4 20c3-4 6-7 10-9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="why-k">Environment first</p>
                  <h3>Inspiring action</h3>
                  <p className="why-d">
                    The need is great, and everyone can act now for a brighter future. Our mission is to inspire action
                    and promote a greener world.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* Process */}
        <section id="process" className="sec mist" aria-labelledby="proc-h">
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
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
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "720px" }}>
                <span className="eyebrow">
                  <span className="dot" />
                  Our process
                </span>
                <h2 id="proc-h" className="h2">
                  Seamless solutions, effortless savings
                </h2>
              </div>
              <p className="lead" style={{ maxWidth: "440px" }}>
                Our process is simple, from your first enquiry to lower energy bills.
              </p>
            </div>
            <ol className="g-4 steps ab-steps">
              <li>
                <span className="factor-n" aria-hidden="true">
                  01
                </span>
                <h3>Get a free quote</h3>
                <p>Tell us about your home or business and what you’d like to upgrade.</p>
              </li>
              <li>
                <span className="factor-n" aria-hidden="true">
                  02
                </span>
                <h3>Schedule an appointment</h3>
                <p>Choose a time that suits you for the installation.</p>
              </li>
              <li>
                <span className="factor-n" aria-hidden="true">
                  03
                </span>
                <h3>Professional installation</h3>
                <p>Installation by A-grade electricians.</p>
              </li>
              <li>
                <span className="factor-n" aria-hidden="true">
                  04
                </span>
                <h3>Start saving</h3>
                <p>Start saving on your energy bills.</p>
              </li>
            </ol>
          </div>
        </section>
        {/* Why choose us */}
        <section className="sec" aria-labelledby="choose-h">
          <div className="wrap g-split ab-choose">
            <div className="ab-choose-copy">
              <span className="eyebrow">
                <span className="dot" />
                Why choose us
              </span>
              <h2 id="choose-h" className="h2">
                The right upgrade for your place
              </h2>
              <ul className="ab-ticks">
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
                  Free, friendly service
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
                  An educational approach
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
                  An engaging online platform
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
                  Multiple offers to choose from
                </li>
              </ul>
            </div>
            <ul className="ab-reasons">
              <li className="why-card">
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
                  <h3>Experienced and reliable</h3>
                  <p className="why-d">
                    With qualified professionals and outstanding service, we’ve already upgraded homes and businesses
                    towards a more sustainable environment.
                  </p>
                </div>
              </li>
              <li className="why-card">
                <span className="why-ico">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3>We truly care</h3>
                  <p className="why-d">
                    We go above and beyond to help our clients, taking care of the little things that set us apart.
                  </p>
                </div>
              </li>
              <li className="why-card">
                <span className="why-ico">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3>Customer satisfaction first</h3>
                  <p className="why-d">Great customer satisfaction is our first priority.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* Where we work */}
        <section className="sec mist" aria-labelledby="where-h">
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "720px" }}>
              <span className="eyebrow">
                <span className="dot" />
                Where we work
              </span>
              <h2 id="where-h" className="h2">
                Victoria and New South Wales
              </h2>
              <p className="lead">
                We help homes and businesses across both states take part in their energy-efficiency programs.
              </p>
            </div>
            <div className="g-2 ab-states">
              <a className="ab-state" href={`${BASE}/victoria/victorian-energy-upgrades/`}>
                <span className="photo">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                    src={`${BASE}/assets/images/about-melbourne.webp`}
                    width="636"
                    height="360"
                    alt="The Melbourne city skyline on a sunny day"
                  />
                </span>
                <span className="ab-state-body">
                  <span className="why-k">Victoria</span>
                  <strong>Victorian Energy Upgrades (VEU)</strong>
                  <span className="ct-go">
                    How the VEU program works
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
                </span>
              </a>{" "}
              <a className="ab-state" href={`${BASE}/nsw/energy-savings-scheme-ess/`}>
                <span className="photo">
                  <img
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                    src={`${BASE}/assets/images/about-sydney.webp`}
                    width="636"
                    height="360"
                    alt="Sydney Harbour and the Harbour Bridge at sunset"
                  />
                </span>
                <span className="ab-state-body">
                  <span className="why-k">New South Wales</span>
                  <strong>NSW Energy Savings Scheme (ESS)</strong>
                  <span className="ct-go">
                    How the NSW ESS works
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
                </span>
              </a>
            </div>
          </div>
        </section>
        {/* Work with us */}
        <section id="careers" className="sec" aria-labelledby="work-h">
          <div className="wrap">
            <div className="ab-work">
              <div className="ab-work-copy">
                <span className="eyebrow">
                  <span className="dot" />
                  Careers
                </span>
                <h2 id="work-h" className="h2">
                  Work with Auzbright
                </h2>
                <p className="ab-p">
                  We’re always on the lookout for talented people who are passionate about making a positive impact on
                  the environment. Joining our team means being part of a dynamic company that provides energy-efficient
                  solutions to homes and businesses.
                </p>
                <p className="ab-p">
                  Whether you’re an experienced professional or just starting your career, we offer opportunities for
                  growth, training and development.
                </p>
              </div>
              <div className="ab-work-cta">
                <a className="btn btn-navy" href={`${BASE}/contact/`}>
                  Get in touch
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
                <a className="btn btn-ghost" href="mailto:admin@auzbright.com.au?subject=Careers%20at%20Auzbright">
                  Email us your CV
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Closing call to action */}
        <section className="sec cta-sec" aria-labelledby="cta-h" style={{ paddingTop: "0" }}>
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
                <div className="btn-row">
                  <a className="btn btn-lime" href={`${BASE}/#check`}>
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
                  sizes="(max-width: 1100px) calc(100vw - 80px), 640px"
                  alt="A family at home in a comfortable, energy-efficient living room"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
