import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/victoria/victorian-energy-upgrades/",
  seoTitle: "Victorian Energy Upgrades for Homes and Businesses",
  description:
    "Understand the Victorian Energy Upgrades program and how eligible homes and businesses can access energy-efficient upgrades with support from Auzbright.",
  crumbs: [{ label: "Victoria", href: "/victoria/" }, { label: "Victorian Energy Upgrades" }],
  hero: {
    eyebrow: "Victorian Energy Upgrades",
    title: "Empowering Victoria with energy efficiency: {the Victorian Energy Upgrades program.}",
    lead: "Lower costs, reduce emissions, illuminate your future.",
    image: {
      src: "/assets/images/pages/victorian-img.webp",
      alt: "A Victorian home taking part in the Victorian Energy Upgrades program",
      width: 600,
      height: 580,
    },
  },
  sections: [
    {
      type: "split",
      eyebrow: "The program",
      title: "Victorian Energy Upgrades",
      bullets: [
        "Formerly the VEET scheme.",
        "This Victorian Government program helps individuals and businesses reduce electricity costs and greenhouse gas emissions by providing access to affordable goods and services.",
        "It is governed by the Victorian Energy Efficiency Target Act 2007 and its regulations, which set a state-wide objective for energy savings.",
        "Accredited companies generate Victorian Energy Efficiency Certificates (VEECs) by providing financial incentives for energy-efficient goods and services, based on the associated greenhouse gas reductions.",
      ],
      image: {
        src: "/assets/images/pages/veu-img.webp",
        alt: "An installer at work on an energy-efficient upgrade",
        width: 600,
        height: 500,
      },
    },
    {
      type: "split",
      tone: "mist",
      flip: true,
      eyebrow: "How it works",
      title: "What is the VEU (VEET) scheme?",
      bullets: [
        "The Victorian Energy Upgrades (VEU) program offers subsidised access to energy-efficient goods and services, helping Victorians lower electricity costs and greenhouse gas emissions.",
        "Energy retailers meet annual greenhouse gas emission reduction targets by surrendering their VEECs.",
        "The Essential Services Commission (ESC) oversees the program, monitoring performance reporting, compliance, accreditation, and eligible goods and services.",
      ],
      image: {
        src: "/assets/images/pages/benefit-img2.webp",
        alt: "Energy-efficient lighting in a modern home",
        width: 600,
        height: 450,
      },
      cta: { label: "Request a Quote", href: "/enquire-now/" },
    },
    {
      type: "features",
      eyebrow: "Benefits",
      title: "Why take part",
      columns: 2,
      items: [
        {
          icon: "dollar",
          title: "Lower lighting costs",
          text: "Energy-efficient lighting technology could cut lighting costs by up to 85% per globe each year.",
        },
        {
          icon: "bulb",
          title: "Longer-lasting technology",
          text: "LEDs and CFLs light homes more effectively, reducing energy bills and maintenance costs thanks to their extended lifespan.",
        },
        {
          icon: "leaf",
          title: "A more sustainable future",
          text: "The VEU program promotes energy efficiency across Victoria.",
        },
        {
          icon: "globe",
          title: "A greener community",
          text: "Energy-efficient upgrades save money and also reduce environmental impact.",
        },
      ],
    },
    {
      type: "steps",
      tone: "mist",
      eyebrow: "Getting started",
      title: "How easy is it?",
      items: [
        { title: "Check your eligibility", text: "Tell us about your home or business and the upgrade you’re interested in." },
        { title: "We handle the certificates", text: "As an accredited provider, Auzbright creates the certificates for your upgrade and applies the incentive to your quote." },
        { title: "Start saving", text: "Take advantage of government incentives and save on electricity costs." },
      ],
    },
  ],
};

export default data;
