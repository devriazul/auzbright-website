import ContentPage, { pageMetadata } from "@/components/ContentPage";
import { categoryPage } from "@/lib/products";

export const metadata = pageMetadata(categoryPage("heat-pump"));

export default function Page() {
  return <ContentPage data={categoryPage("heat-pump")} />;
}
