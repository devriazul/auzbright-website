import type { Metadata } from "next";
import { link } from "@/lib/site";
import { getPage, pageCount, pageHref } from "@/lib/blog";
import SiteShell from "./SiteShell";
import EligibilityCta from "./EligibilityCta";
import PostCard from "./PostCard";

const description =
  "Explore expert guides on heat pump hot water, air conditioning, solar, batteries, VEU and ESS programs to make smarter home energy upgrade choices.";

export function blogListMetadata(page: number): Metadata {
  const suffix = page > 1 ? ` (page ${page})` : "";
  return {
    title: `Energy Upgrade Blogs: Heat Pumps, Air Con & Solar${suffix} | Auzbright`,
    description,
    alternates: { canonical: pageHref(page) },
    openGraph: {
      type: "website",
      siteName: "Auzbright",
      title: `Energy Upgrade Blogs${suffix} | Auzbright`,
      description,
      url: pageHref(page),
      images: "/assets/images/hero-family.webp",
    },
  };
}

function Chevron({ back = false }: { back?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d={back ? "m12 5-5 5 5 5" : "m8 5 5 5-5 5"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Pagination({ page, total }: { page: number; total: number }) {
  if (total < 2) return null;
  return (
    <nav className="pager" aria-label="Blog pages">
      {page > 1 ? (
        <a className="pager-step" href={link(pageHref(page - 1))} rel="prev">
          <Chevron back />
          Newer
        </a>
      ) : (
        <span className="pager-step is-off" aria-hidden="true">
          <Chevron back />
          Newer
        </span>
      )}
      <ol>
        {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            <a href={link(pageHref(n))} aria-label={`Page ${n}`} aria-current={n === page ? "page" : undefined}>
              {n}
            </a>
          </li>
        ))}
      </ol>
      {page < total ? (
        <a className="pager-step" href={link(pageHref(page + 1))} rel="next">
          Older
          <Chevron />
        </a>
      ) : (
        <span className="pager-step is-off" aria-hidden="true">
          Older
          <Chevron />
        </span>
      )}
    </nav>
  );
}

/** One page of the blog list. Page 1 leads with the newest post as a large card. */
export default function BlogList({ page }: { page: number }) {
  const posts = getPage(page);
  const total = pageCount();
  return (
    <SiteShell current="/blogs/">
      <main id="main">
        <section className="dark ct-hero" aria-labelledby="blog-h">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <a href={link("/")}>Home</a>
              <span aria-hidden="true">/</span>
              {page > 1 ? <a href={link("/blogs/")}>Blogs</a> : <span aria-current="page">Blogs</span>}
              {page > 1 && (
                <>
                  <span aria-hidden="true">/</span>
                  <span aria-current="page">Page {page}</span>
                </>
              )}
            </nav>
            <span className="eyebrow">
              <span className="dot" />
              Guides and advice
            </span>
            <h1 id="blog-h" className="ct-h1">
              Energy upgrade guides, <span style={{ color: "#A0E25F" }}>in plain English.</span>
            </h1>
            <p className="lead ct-lead">
              Practical articles on heat pump hot water, air conditioning, solar and batteries, water filtration and the
              VEU and ESS programs.
            </p>
          </div>
        </section>
        <section className="sec pg-sec" aria-label={`Articles, page ${page} of ${total}`}>
          <div className="wrap pg-stack">
            <div className="g-3 blog-grid">
              {posts.map((p, i) => (
                <PostCard key={p.slug} post={p} lead={page === 1 && i === 0} />
              ))}
            </div>
            <Pagination page={page} total={total} />
          </div>
        </section>
        <EligibilityCta />
      </main>
    </SiteShell>
  );
}
