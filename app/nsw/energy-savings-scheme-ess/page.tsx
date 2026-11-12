import ContentPage, { pageMetadata } from "@/components/ContentPage";
import data from "@/content/pages/nsw--energy-savings-scheme-ess";

export const metadata = pageMetadata(data);

export default function Page() {
  return <ContentPage data={data} />;
}
