import ContentPage, { pageMetadata } from "@/components/ContentPage";
import data from "@/content/pages/emerald-energy";

export const metadata = pageMetadata(data);

export default function Page() {
  return <ContentPage data={data} />;
}
