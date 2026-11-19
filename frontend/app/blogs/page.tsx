import BlogList, { blogListMetadata } from "@/components/BlogList";

export const metadata = blogListMetadata(1);

export default function BlogsPage() {
  return <BlogList page={1} />;
}
