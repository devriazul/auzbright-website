import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogList, { blogListMetadata } from "@/components/BlogList";
import { pageCount } from "@/lib/blog";

/** Blog list pages 2 and up: /blogs/page/2/ and so on. Page 1 is /blogs/. */
export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: pageCount() - 1 }, (_, i) => ({ page: String(i + 2) }));
}

type Props = { params: Promise<{ page: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return blogListMetadata(Number((await params).page));
}

export default async function BlogsPagedPage({ params }: Props) {
  const page = Number((await params).page);
  if (!Number.isInteger(page) || page < 2 || page > pageCount()) notFound();
  return <BlogList page={page} />;
}
