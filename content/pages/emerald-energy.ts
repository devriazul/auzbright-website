import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/emerald-energy/",
  seoTitle: "Emerald Energy 270L All-In-One Heat Pump | Auzbright",
  description:
    "The Emerald All-In-One combines heat pump technology, hot water storage and smart Wi-Fi control in one compact system for residential hot water.",
  crumbs: [
    {
      label: "Emerald Energy heat pump",
    },
  ],
  hero: {
    eyebrow: "All-in-one system",
    title: "Emerald {Energy 270L.}",
    lead: "Smart, efficient hot water for a more sustainable home.",
    chips: ["Performance", "Quality", "Reliability"],
    image: {
      src: "/assets/images/pages/emerald-475x590-1.webp",
      alt: "Grey Emerald all-in-one heat pump hot water system installed beside a house",
      width: 475,
      height: 590,
    },
    primary: {
      label: "Enquire now",
      href: "/enquire-now/",
    },
  },
  sections: [
    {
      type: "specs",
      eyebrow: "Product overview",
      title: "Emerald All-In-One",
      intro:
        "The Emerald All-In-One Select combines heat pump technology, hot water storage and smart Wi-Fi control in one compact system. Designed for residential use, it provides efficient hot water heating across a range of conditions.",
      items: [
        {
          label: "Capacity",
          value: "270 L",
        },
        {
          label: "Refrigerant",
          value: "R290",
        },
        {
          label: "Power supply",
          value: "220V–240V / 50Hz / 1 phase",
        },
        {
          label: "Wi-Fi",
          value: "Built-in / Emerald App",
        },
        {
          label: "Rated outlet water temperature",
          value: "60°C",
        },
        {
          label: "Maximum outlet water temperature (heat pump)",
          value: "70°C",
        },
        {
          label: "IP class",
          value: "IPX4",
        },
      ],
    },
    {
      type: "features",
      tone: "mist",
      eyebrow: "Key features",
      title: "Smart, connected and built for real-world use",
      columns: 3,
      items: [
        {
          icon: "leaf",
          title: "R290 refrigerant",
          text: "Low GWP refrigerant with excellent thermodynamic properties.",
        },
        {
          icon: "wifi",
          title: "Built-in Wi-Fi",
          text: "Convenient smart control through the Emerald App.",
        },
        {
          icon: "bolt",
          title: "Boost mode",
          text: "Helps raise water temperature more quickly when required.",
        },
        {
          icon: "sun",
          title: "Solar Soaker",
          text: "Can use surplus solar energy when paired with the Electricity Advisor Wi-Fi pack.",
        },
        {
          icon: "thermo",
          title: "Efficient heating",
          text: "Heat pump technology designed to provide efficient hot water heating.",
        },
        {
          icon: "home",
          title: "Residential use",
          text: "Designed for residential hot water applications.",
        },
      ],
    },
    {
      type: "split",
      eyebrow: "Smart control",
      title: "Why choose Emerald All-In-One?",
      body: [
        "Connect to the Emerald App via Wi-Fi and conveniently control the heat pump using your mobile phone. Emerald Network capability also supports remote monitoring of heat pump installations.",
      ],
      bullets: [
        "Smart Wi-Fi connectivity",
        "R290 low-GWP refrigerant",
        "Efficient heat pump technology",
        "Boost function for faster heating",
        "220 L and 320 L capacity options",
        "All-in-one residential hot water solution",
      ],
      image: {
        src: "/assets/images/pages/emerald-heat-pump-in-a-luxury-backyard.webp",
        alt: "Emerald heat pump on a paved terrace beside a pool at a modern home",
        width: 1200,
        height: 900,
      },
    },
    {
      type: "reviews",
      tone: "mist",
      eyebrow: "Customer feedback",
      title: "What people say about us",
    },
  ],
};

export default data;
