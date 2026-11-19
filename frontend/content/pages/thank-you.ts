import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/thank-you/",
  seoTitle: "Thank You for Your Enquiry | Auzbright",
  description:
    "Thank you for your interest in Auzbright. We have received your enquiry and a member of our team will be in touch with you shortly.",
  crumbs: [{ label: "Thank you" }],
  hero: {
    eyebrow: "Enquiry received",
    title: "Thank you for {your interest}",
    lead: "We have received your enquiry, and a team member will be in touch shortly.",
    primary: { label: "Back to the homepage", href: "/" },
    secondary: { label: "Read our guides", href: "/blogs/" },
  },
  sections: [
    {
      type: "steps",
      eyebrow: "Our process",
      title: "Seamless solutions, effortless savings",
      items: [
        { title: "Get a free quote." },
        { title: "Schedule an appointment." },
        { title: "Electricians and licensed plumbers." },
        { title: "Start saving on your energy bills." },
      ],
    },
    {
      type: "reviews",
      tone: "mist",
      eyebrow: "Customer feedback",
      title: "What people say about us",
    },
  ],
  cta: false,
  noindex: true,
};

export default data;
