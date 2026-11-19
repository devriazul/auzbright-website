import ContentPage, { pageMetadata } from "@/components/ContentPage";
import { categoryPage } from "@/lib/products";

export const metadata = pageMetadata(categoryPage("air-conditioner"));

export default function Page() {
  return <ContentPage data={categoryPage("air-conditioner")} />;
}
