import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/enquire-now/",
  seoTitle: "Enquire Now | Get Free Energy Upgrade Help for Heat Pumps, Solar & Air-Con",
  description:
    "Submit your inquiry for heat pumps, air conditioning, solar or battery solutions. Auzbright guides you through the next upgrade steps with care.",
  crumbs: [{ label: "Enquire now" }],
  hero: {
    eyebrow: "Connect with Auzbright",
    title: "Empowering your journey towards {energy efficiency}",
    lead: "Get your free quote now.",
    primary: { label: "Send an enquiry", href: "#contact-form" },
  },
  sections: [{ type: "form" }],
  cta: false,
};

export default data;
