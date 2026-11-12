import ContentPage, { pageMetadata } from "@/components/ContentPage";
import data from "@/content/pages/nsw--energy-efficient-hot-water-solutions-for-businesses";

export const metadata = pageMetadata(data);

export default function Page() {
  return <ContentPage data={data} />;
}
