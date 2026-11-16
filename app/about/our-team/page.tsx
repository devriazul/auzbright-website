import type { Metadata } from "next";
import { preload } from "react-dom";
import { BASE } from "@/lib/site";
import SiteShell from "@/components/SiteShell";
import EligibilityCta from "@/components/EligibilityCta";
import { DEPARTMENTS, LEADERSHIP, MEMBERS, TEAM_IS_SAMPLE, deptKey, initials, type Member } from "@/content/team";

export const metadata: Metadata = {
  title: "Our Team | Auzbright Energy Upgrade Specialists in Victoria & NSW",
  description:
    "Meet the Auzbright team: customer care, energy assessors, licensed installers and compliance staff helping Victorian and NSW homes and businesses upgrade.",
  alternates: { canonical: "/about/our-team/" },
  // Sample names and roles stay out of search results until the real team is added (content/team.ts).
  robots: TEAM_IS_SAMPLE ? { index: false, follow: true } : undefined,
  openGraph: {
    type: "website",
    siteName: "Auzbright",
    title: "Our Team | Auzbright",
    description: "The people behind your upgrade, from the first call to the final paperwork.",
    images: "/assets/images/hero-heat-pump-installer-800.webp",
    url: "/about/our-team/",
  },
};

const ARROW = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Photo when one is set in content/team.ts, otherwise the person's initials on a brand tone. */
function Avatar({ m, i, size }: { m: Member; i: number; size: "lg" | "md" }) {
  return (
    <span className={`tm-av tm-av-${size} tm-tone-${i % 4}`} aria-hidden="true">
      {m.photo ? (
        <img src={`${BASE}/assets/images/team/${m.photo}`} alt="" loading="lazy" decoding="async" width="480" height="480" />
      ) : (
        initials(m.name)
      )}
    </span>
  );
}

const CULTURE = [
  {
    k: "15 languages",
    h: "We speak your language",
    d: "Our team speaks 15 languages, so more customers can talk through their upgrade in the language they’re most comfortable with.",
    icon: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M3.6 9h16.8 M3.6 15h16.8 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18",
  },
  {
    k: "Qualified installers",
    h: "Licensed and experienced",
    d: "Seasoned installers and A-grade electricians make up our field crews, and every job is installed to Australian Standards.",
    icon: "M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z M8.8 12.2l2.2 2.2 4.4-4.6",
  },
  {
    k: "One team",
    h: "From quote to paperwork",
    d: "The same team handles your quote, installation and scheme paperwork, so you always know who to call.",
    icon: "M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1 M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z M21 19v-1a4 4 0 0 0-3-3.9 M15.5 3.1a3.5 3.5 0 0 1 0 6.8",
  },
  {
    k: "Local",
    h: "Based in Derrimut",
    d: "Our office and team are based in Derrimut, Melbourne, with crews working across Victoria and New South Wales.",
    icon: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  },
];

export default function Page() {
  preload(`${BASE}/assets/images/hero-heat-pump-installer-800.webp`, { as: "image" });
  return (
    <SiteShell
      current="/about/our-team/"
      jsonLd={
        '{"@context":"https://schema.org","@graph":[{"@type":"AboutPage","name":"Our Team","url":"https://auzbright.com.au/about/our-team/","about":{"@id":"https://auzbright.com.au/#business"}},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://auzbright.com.au/"},{"@type":"ListItem","position":2,"name":"About us","item":"https://auzbright.com.au/about/"},{"@type":"ListItem","position":3,"name":"Our team","item":"https://auzbright.com.au/about/our-team/"}]}]}'
      }
    >
      <main id="main">
        {/* Hero */}
        <section className="dark ab-hero" aria-labelledby="tm-h">
          <div className="wrap ab-hero-in">
            <div className="ab-hero-copy">
              <nav className="crumbs" aria-label="Breadcrumb">
                <a href={`${BASE}/`}>Home</a>
                <span aria-hidden="true">/</span>
                <a href={`${BASE}/about/`}>About us</a>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Our team</span>
              </nav>
              <span className="eyebrow">
                <span className="dot" />
                Our team
              </span>
              <h1 id="tm-h" className="ct-h1">
                The people behind <span style={{ color: "#A0E25F" }}>your upgrade.</span>
              </h1>
              <p className="lead">
                Customer care, assessors, licensed installers and compliance staff, working as one team from your first
                question to the final paperwork.
              </p>
              <div className="btn-row">
                <a className="btn btn-lime" href="#team">
                  Meet the team
                  {ARROW}
                </a>
                <a className="btn btn-ghost-dark" href={`${BASE}/about/work-with-auzbright/`}>
                  Join our team
                </a>
              </div>
            </div>
            <div className="photo ab-hero-photo">
              <img
                src={`${BASE}/assets/images/hero-heat-pump-installer-800.webp`}
                width="800"
                height="600"
                alt="An Auzbright installer fitting a heat pump hot water system"
                fetchPriority="high"
              />
              <span className="ev-lab">Our installers at work</span>
            </div>
          </div>
        </section>

        {/* Key numbers */}
        <section className="ab-stats-sec" aria-label="Our team in numbers">
          <div className="wrap">
            <ul className="g-4 ab-stats">
              <li>
                <span className="ab-stat-v">2017</span>
                <span className="ab-stat-l">Established in Victoria</span>
              </li>
              <li>
                <span className="ab-stat-v">
                  <span className="sr-only">15</span>
                  <span className="count-up" data-count-to="15" aria-hidden="true">
                    15
                  </span>
                </span>
                <span className="ab-stat-l">Languages spoken across the team</span>
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
                <span className="ab-stat-v">VIC · NSW</span>
                <span className="ab-stat-l">Crews working in both states</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Leadership */}
        <section className="sec" aria-labelledby="lead-h">
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            <div className="sec-head tm-head">
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "720px" }}>
                <span className="eyebrow">
                  <span className="dot" />
                  Leadership
                </span>
                <h2 id="lead-h" className="h2">
                  Leading the way to lower bills
                </h2>
              </div>
              <p className="lead" style={{ maxWidth: "440px" }}>
                The people who set our standards and make sure every upgrade is done properly.
              </p>
            </div>
            <ul className="g-3 tm-leads">
              {LEADERSHIP.map((m, i) => (
                <li key={m.name} className={`tm-card tm-lead${i === 0 ? " is-feature" : ""}`}>
                  <Avatar m={m} i={i} size="lg" />
                  <div className="tm-body">
                    <p className="why-k">{m.role}</p>
                    <h3>{m.name}</h3>
                    <p className="tm-bio">{m.bio}</p>
                    {m.since && <p className="tm-since">{m.since}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Team, filterable by department (main.js) */}
        <section id="team" className="sec mist" aria-labelledby="team-h">
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div className="sec-head tm-head">
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "720px" }}>
                <span className="eyebrow">
                  <span className="dot" />
                  Meet the team
                </span>
                <h2 id="team-h" className="h2">
                  Here to help, start to finish
                </h2>
              </div>
              <p className="lead" style={{ maxWidth: "440px" }}>
                Choose a team to see who looks after each part of your upgrade.
              </p>
            </div>
            <div className="tm-filter" role="group" aria-label="Filter by team">
              <button type="button" className="tm-chip" aria-pressed="true" data-team-filter="all">
                All <span className="tm-n">{MEMBERS.length}</span>
              </button>
              {DEPARTMENTS.map((d) => (
                <button key={d} type="button" className="tm-chip" aria-pressed="false" data-team-filter={deptKey(d)}>
                  {d} <span className="tm-n">{MEMBERS.filter((m) => m.department === d).length}</span>
                </button>
              ))}
            </div>
            <ul className="g-4 tm-grid" aria-describedby="tm-count">
              {MEMBERS.map((m, i) => (
                <li key={m.name} className="tm-card" data-dept={m.department ? deptKey(m.department) : undefined}>
                  <Avatar m={m} i={i + 1} size="md" />
                  <div className="tm-body">
                    <h3>{m.name}</h3>
                    <p className="tm-role">{m.role}</p>
                    <p className="tm-bio">{m.bio}</p>
                    {m.department && <span className="tm-dept">{m.department}</span>}
                    {m.languages && m.languages.length > 0 && (
                      <p className="tm-lang">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M3.6 9h16.8 M3.6 15h16.8 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Also speaks {m.languages.join(" and ")}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p id="tm-count" className="sr-only" aria-live="polite">
              Showing all {MEMBERS.length} team members
            </p>
          </div>
        </section>

        {/* How we work */}
        <section className="sec" aria-labelledby="how-h">
          <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "720px" }}>
              <span className="eyebrow">
                <span className="dot" />
                How we work
              </span>
              <h2 id="how-h" className="h2">
                What our team brings to your upgrade
              </h2>
            </div>
            <ul className="g-4 tm-culture">
              {CULTURE.map((c, i) => (
                <li key={c.k} className={`why-card${i === 2 ? " is-feature" : ""}`}>
                  <span className="why-ico">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d={c.icon} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="why-k">{c.k}</p>
                    <h3>{c.h}</h3>
                    <p className="why-d">{c.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Join us */}
        <section className="sec" aria-labelledby="work-h" style={{ paddingTop: "0", paddingBottom: "0" }}>
          <div className="wrap">
            <div className="ab-work">
              <div className="ab-work-copy">
                <span className="eyebrow">
                  <span className="dot" />
                  Careers
                </span>
                <h2 id="work-h" className="h2">
                  Want to join us?
                </h2>
                <p className="ab-p">
                  We’re always looking for people who care about doing the job properly, from customer care to licensed
                  trades. We promote from within and offer flexible hours.
                </p>
              </div>
              <div className="ab-work-cta">
                <a className="btn btn-navy" href={`${BASE}/about/work-with-auzbright/`}>
                  See careers
                  {ARROW}
                </a>
                <a className="btn btn-ghost" href="mailto:admin@auzbright.com.au?subject=Careers%20at%20Auzbright">
                  Email us your CV
                </a>
              </div>
            </div>
          </div>
        </section>

        <EligibilityCta />
      </main>
    </SiteShell>
  );
}
