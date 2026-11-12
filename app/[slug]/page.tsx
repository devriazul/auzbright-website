import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { preload } from "react-dom";
import { BASE, SITE_URL, link } from "@/lib/site";
import { formatDate, getPost, getPosts, relatedPosts, topicsOf, withHeadingIds } from "@/lib/blog";
import SiteShell from "@/components/SiteShell";
import EligibilityCta from "@/components/EligibilityCta";
import PostCard from "@/components/PostCard";
import { Arrow } from "@/components/ContentPage";

/**
 * Blog posts live at the site root (/heat-pump-hot-water/), the same URLs as on the WordPress site.
 * Every post in content/blog/ becomes a page; any other root-level slug is a 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.description,
    alternates: { canonical: `/${post.slug}/` },
    openGraph: {
      type: "article",
      siteName: "Auzbright",
      title: post.title,
      description: post.description,
      url: `/${post.slug}/`,
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: post.image?.src ?? "/assets/images/hero-family.webp",
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  if (post.image) preload(link(post.image.src), { as: "image" });

  const related = relatedPosts(post, 4);
  const latest = getPosts()
    .filter((p) => p.slug !== post.slug && !related.includes(p))
    .slice(0, 3);
  const services = topicsOf(post).map((t) => t.service);
  const { html: body, headings } = withHeadingIds(post.html);
  // Site paths inside the post body need the sub-folder prefix too.
  const html = BASE ? body.replace(/href="\//g, `href="${BASE}/`) : body;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.modified,
    mainEntityOfPage: `${SITE_URL}/${post.slug}/`,
    image: post.image ? `${SITE_URL}${post.image.src}` : undefined,
    author: { "@type": "Organization", name: "Auzbright", url: `${SITE_URL}/` },
    publisher: { "@type": "Organization", name: "Auzbright", url: `${SITE_URL}/` },
  });

  return (
    <SiteShell current="/blogs/" jsonLd={jsonLd}>
      <main id="main">
        <header className="dark ct-hero post-hero">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <a href={link("/")}>Home</a>
              <span aria-hidden="true">/</span>
              <a href={link("/blogs/")}>Blogs</a>
            </nav>
            <h1 className="ct-h1 pg-h1">{post.title}</h1>
            <p className="post-meta">
              <span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span>{post.readingMinutes} min read</span>
              <span>By the Auzbright team</span>
            </p>
          </div>
        </header>
        <div className="post-sec">
          <div className="wrap post-layout">
            <article className="post-main" aria-label={post.title}>
              {post.image && (
                <div className="photo post-cover">
                  <img src={link(post.image.src)} width={post.image.width} height={post.image.height} alt="" fetchPriority="high" />
                </div>
              )}
              <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
            </article>

            <aside className="post-side" aria-label="Related information">
              {headings.length > 2 && (
                <nav className="side-card side-toc" aria-labelledby="toc-h">
                  <h2 id="toc-h" className="side-k">
                    On this page
                  </h2>
                  <ol>
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`}>{h.text}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              {services.map((s) => (
                <a key={s.href} className="side-card side-service" href={link(s.href)}>
                  <span className="side-k">{s.label}</span>
                  <strong>{s.title}</strong>
                  <span className="why-d">{s.text}</span>
                  <span className="ct-go">
                    View this upgrade
                    <Arrow size={16} />
                  </span>
                </a>
              ))}

              <div className="side-card">
                <h2 className="side-k">Related articles</h2>
                <ul className="side-posts">
                  {related.map((p) => (
                    <li key={p.slug}>
                      <a href={link(`/${p.slug}/`)}>
                        {p.image && <img src={link(p.image.thumb)} width={p.image.width} height={p.image.height} alt="" loading="lazy" decoding="async" />}
                        <span>
                          <strong>{p.title}</strong>
                          <small>{formatDate(p.date)}</small>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="side-card side-cta dark">
                <span className="side-k">Free eligibility check</span>
                <strong>Find out what you’re eligible for.</strong>
                <p>No obligation, about 2 minutes. We’ll confirm any incentive on your written quote.</p>
                <a className="btn btn-lime btn-sm" href={link("/#check")}>
                  Check My Eligibility
                  <Arrow />
                </a>
                <a className="side-call" href="tel:0386095195">
                  or call 03 8609 5195
                </a>
              </div>
            </aside>
          </div>
        </div>
        <section className="sec pg-sec mist" aria-labelledby="more-h">
          <div className="wrap pg-stack">
            <div className="pg-head">
              <span className="eyebrow">
                <span className="dot" />
                Keep reading
              </span>
              <h2 id="more-h" className="h2 pg-h2">
                Latest guides
              </h2>
            </div>
            <div className="g-3 blog-grid">
              {latest.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
            <div>
              <a className="btn btn-ghost" href={link("/blogs/")}>
                All articles
              </a>
            </div>
          </div>
        </section>
        <EligibilityCta />
      </main>
    </SiteShell>
  );
}
