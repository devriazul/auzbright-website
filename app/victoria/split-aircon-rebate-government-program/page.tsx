import ContentPage, { pageMetadata } from "@/components/ContentPage";
import data from "@/content/pages/victoria--split-aircon-rebate-government-program";

export const metadata = pageMetadata(data);

export default function Page() {
  return <ContentPage data={data} />;
}
