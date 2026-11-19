import { link } from "@/lib/site";
import { formatDate, type Post } from "@/lib/blog";
import { Arrow } from "./ContentPage";

export default function PostCard({ post, lead = false }: { post: Post; lead?: boolean }) {
  return (
    <a className={`post-card ${lead ? "is-lead" : ""}`} href={link(`/${post.slug}/`)}>
      {post.image && (
        <span className="photo">
          <img
            src={link(lead ? post.image.src : post.image.thumb)}
            width={post.image.width}
            height={post.image.height}
            alt=""
            {...(lead ? { fetchPriority: "high" as const } : { loading: "lazy" as const, decoding: "async" as const })}
          />
        </span>
      )}
      <span className="post-card-body">
        <span className="why-k">
          {formatDate(post.date)} · {post.readingMinutes} min read
        </span>
        <strong>{post.title}</strong>
        <span className="why-d">{post.excerpt}</span>
        <span className="ct-go">
          Read article
          <Arrow size={16} />
        </span>
      </span>
    </a>
  );
}
