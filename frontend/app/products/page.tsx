import ContentPage, { pageMetadata } from "@/components/ContentPage";
import { productsIndexPage } from "@/lib/products";

export const metadata = pageMetadata(productsIndexPage());

export default function ProductsPage() {
  return <ContentPage data={productsIndexPage()} />;
}
