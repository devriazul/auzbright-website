import ContentPage, { pageMetadata } from "@/components/ContentPage";
import data from "@/content/pages/ev-charger";

export const metadata = pageMetadata(data);

export default function Page() {
  return <ContentPage data={data} />;
}
