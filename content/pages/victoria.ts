import type { PageData } from "@/lib/page-types";

/** State hub. The live site has this URL but no content on it, so this page links to the state's pages. */
const data: PageData = {
  path: "/victoria/",
  seoTitle: "Energy-Efficient Upgrades in Victoria | Auzbright",
  description:
    "Heat pump hot water, air conditioning, solar and battery and EV charger upgrades for Victoria homes and businesses, with a free eligibility check under the Victorian Energy Upgrades (VEU) program.",
  crumbs: [{ label: "Victoria" }],
  hero: {
    eyebrow: "Victoria",
    title: "Energy-efficient upgrades for {Victorian homes and businesses.}",
    lead: "Auzbright is an accredited provider under the Victorian Energy Upgrades (VEU) program. Choose an upgrade below, or start with a free eligibility check.",
    image: { src: "/assets/images/about-melbourne.webp", alt: "The Melbourne city skyline on a sunny day", width: 636, height: 360 },
  },
  sections: [
    {
      type: "cards",
      eyebrow: "The program",
      title: "How incentives work in Victoria",
      intro: "Start here to understand the scheme, or go straight to common questions.",
      items: [
        { label: "Victoria program", title: "Victorian Energy Upgrades (VEU) program", text: "What the program is, who runs it and how the incentives are created.", href: "/victoria/victorian-energy-upgrades/" },
        { label: "Questions", title: "Victoria FAQs", text: "How it works, who does the work and who is eligible.", href: "/victoria/victoria-faqs/" },
      ],
    },
    {
      type: "cards",
      tone: "mist",
      eyebrow: "Upgrades",
      title: "Upgrades available in Victoria",
      items: [
        {
          label: "Homes",
          title: "Residential heat pump",
          text: "Replace an old electric or gas hot water system with an efficient heat pump.",
          href: "/victoria/energy-efficient-hot-water-solutions-for-homes/",
          image: { src: "/assets/images/svc-heat-pump.webp", alt: "", width: 406, height: 440, fit: "contain" },
        },
        {
          label: "Homes",
          title: "Air conditioner",
          text: "Reverse-cycle split, multi-head and ducted heating and cooling.",
          href: "/victoria/split-aircon-rebate-government-program/",
          image: { src: "/assets/images/svc-air-conditioner.webp", alt: "", width: 364, height: 380, fit: "contain" },
        },
        {
          label: "Businesses",
          title: "Commercial heat pump",
          text: "Heat pump hot water upgrades for Victorian businesses.",
          href: "/victoria/free-hot-water-systems/",
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
