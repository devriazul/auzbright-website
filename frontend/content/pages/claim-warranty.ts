import type { PageData } from "@/lib/page-types";
import { CATEGORIES, getProducts, type CategoryKey } from "@/lib/products";

/** "5 years" or "5–7 years" for each product category, from the `warranty` field in content/products/. */
function warrantyRanges() {
  return (Object.keys(CATEGORIES) as CategoryKey[]).flatMap((k) => {
    const years = getProducts()
      .filter((p) => p.category === k && p.warranty)
      .map((p) => Number(p.warranty!.match(/\d+/)?.[0]))
      .filter((n) => n > 0);
    if (!years.length) return [];
    const lo = Math.min(...years);
    const hi = Math.max(...years);
    return [{ label: CATEGORIES[k].plural, value: lo === hi ? `${lo} years` : `${lo}–${hi} years, depending on the model` }];
  });
}

const data: PageData = {
  path: "/claim-warranty/",
  seoTitle: "Claim a Warranty | Service for Existing Installations | Auzbright",
  description:
    "Something not working after your Auzbright installation? Lodge a warranty or service request online or call 03 8609 5195, and we’ll arrange the next step.",
  crumbs: [{ label: "Claim warranty" }],
  hero: {
    eyebrow: "Warranty and service",
    title: "Something not right? {We’ll sort it out.}",
    lead: "If a product we installed isn’t working as it should, lodge a warranty or service request below, or call us during business hours.",
    chips: ["Mon–Fri, 9am–5pm", "Existing installations"],
    primary: { label: "Start my claim", href: "#contact-form" },
    secondary: { label: "Call 03 8609 5195", href: "tel:0386095195" },
  },
  sections: [
    {
      type: "steps",
      eyebrow: "How it works",
      title: "Making a claim",
      items: [
        { title: "Tell us what’s happening", text: "Send the form below or call us. Describe the problem and when it started." },
        { title: "We review your request", text: "We check your installation details and the product’s warranty terms." },
        { title: "We arrange the next step", text: "We call you to book a technician visit or organise a manufacturer’s service." },
        { title: "Back to normal", text: "We follow up to make sure the problem is fixed." },
      ],
    },
    {
      type: "features",
      tone: "mist",
      eyebrow: "Before you contact us",
      title: "What to have ready",
      intro: "These details help us find your installation and move your claim along quickly.",
      columns: 4,
      items: [
        { icon: "pin", title: "Installation address", text: "Where the product is installed." },
        { icon: "doc", title: "Invoice or quote", text: "Your installation date, if you have it." },
        { icon: "wrench", title: "Product details", text: "The brand and model, often on a label on the unit." },
        { icon: "phone", title: "Photos or error codes", text: "Any error code on the display, and a photo if you can." },
      ],
    },
    {
      type: "form",
      topic: "Existing installation or warranty",
    },
    {
      type: "specs",
      eyebrow: "Product warranties",
      title: "Warranty periods for the products we install",
      intro: "Warranty terms depend on the product and its manufacturer. Your quote lists the warranty for your exact model, and each product page shows its warranty.",
      items: warrantyRanges(),
    },
    {
      type: "cards",
      tone: "mist",
      eyebrow: "More help",
      title: "Other ways we can help",
      items: [
        {
          label: "FAQs",
          title: "Warranty and support questions",
          href: "/faqs/#warranty",
        },
        {
          label: "Installation",
          title: "How installation works",
          href: "/installation/",
        },
        {
          label: "Contact",
          title: "Talk to the Auzbright team",
          href: "/contact/",
        },
      ],
    },
  ],
  cta: false,
};

export default data;
