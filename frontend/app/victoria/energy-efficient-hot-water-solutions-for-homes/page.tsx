import ContentPage, { pageMetadata } from "@/components/ContentPage";
import data from "@/content/pages/victoria--energy-efficient-hot-water-solutions-for-homes";

export const metadata = pageMetadata(data);

export default function Page() {
  return <ContentPage data={data} />;
}
