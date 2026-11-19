import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage, { pageMetadata } from "@/components/ContentPage";
import { SITE_URL } from "@/lib/site";
import { getProduct, getProducts, productPage } from "@/lib/products";

/** Product detail pages: one per file in content/products/. */
export const dynamicParams = false;

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return product ? pageMetadata(productPage(product)) : {};
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: { "@type": "Brand", name: product.brand },
    description: product.summary[0],
    image: `${SITE_URL}${product.image.src}`,
  };
  return <ContentPage data={productPage(product)} extraJsonLd={jsonLd} />;
}
