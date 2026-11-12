import type { PageData } from "@/lib/page-types";

/** State hub. The live site has this URL but no content on it, so this page links to the state's pages. */
const data: PageData = {
  path: "/nsw/",
  seoTitle: "Energy-Efficient Upgrades in NSW | Auzbright",
  description:
    "Heat pump hot water, air conditioning, solar and battery and EV charger upgrades for New South Wales homes and businesses, with a free eligibility check under the NSW Energy Savings Scheme (ESS).",
  crumbs: [{ label: "NSW" }],
  hero: {
    eyebrow: "New South Wales",
    title: "Energy-efficient upgrades for {New South Wales homes and businesses.}",
    lead: "Auzbright is an accredited provider under the NSW Energy Savings Scheme (ESS). Choose an upgrade below, or start with a free eligibility check.",
    image: { src: "/assets/images/about-sydney.webp", alt: "Sydney Harbour and the Harbour Bridge at sunset", width: 636, height: 360 },
  },
  sections: [
    {
      type: "cards",
      eyebrow: "The program",
      title: "How incentives work in New South Wales",
      intro: "Start here to understand the scheme, or go straight to common questions.",
      items: [
        { label: "NSW program", title: "NSW Energy Savings Scheme (ESS)", text: "What the program is, who runs it and how the incentives are created.", href: "/nsw/energy-savings-scheme-ess/" },
        { label: "Questions", title: "NSW FAQs", text: "How it works, who does the work and who is eligible.", href: "/nsw/nsw-faqs/" },
      ],
    },
    {
      type: "cards",
      tone: "mist",
      eyebrow: "Upgrades",
      title: "Upgrades available in New South Wales",
      items: [
        {
          label: "Homes",
          title: "Residential heat pump",
          text: "Replace an old electric or gas hot water system with an efficient heat pump.",
          href: "/nsw/energy-efficient-hot-water-solutions-for-homes/",
          image: { src: "/assets/images/svc-heat-pump.webp", alt: "", width: 406, height: 440, fit: "contain" },
        },
        {
          label: "Businesses",
          title: "Commercial heat pump",
          text: "Heat pump hot water upgrades for NSW businesses.",
          href: "/nsw/energy-efficient-hot-water-solutions-for-businesses/",
          image: { src: "/assets/images/svc-heat-pump.webp", alt: "", width: 406, height: 440, fit: "contain" },
        },
        {
          label: "Homes and businesses",
          title: "Solar & battery",
          text: "Rooftop solar with battery storage, sized to how you use energy.",
          href: "/solar-battery-solutions/",
          image: { src: "/assets/images/svc-solar-battery.webp", alt: "", width: 400, height: 380, fit: "contain" },
        },
        {
          label: "Homes and businesses",
          title: "EV charger",
          text: "Smart home and workplace EV charging, professionally installed.",
          href: "/ev-charger/",
          image: { src: "/assets/images/svc-ev-charger.webp", alt: "", width: 1400, height: 467 },
        }
      ],
    },
  ],
};

export default data;
