import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/led-lighting/",
  seoTitle: "LED Lighting Upgrades for Homes & Businesses | Victoria & NSW | Auzbright",
  description:
    "Switch to energy-efficient LED lighting and save up to 80% on lighting costs. LED upgrades for Victorian and NSW homes and businesses, installed by A-grade electricians.",
  crumbs: [{ label: "Products", href: "/products/" }, { label: "LED lighting" }],
  hero: {
    eyebrow: "LED lighting",
    title: "Brighter spaces, {lower lighting bills.}",
    lead: "Efficient LED lighting upgrades for homes and businesses, installed by A-grade electricians.",
    image: {
      src: "/assets/images/svc-led-lighting.webp",
      alt: "A living room at dusk lit by LED downlights and warm cove lighting",
      width: 900,
      height: 450,
    },
    chips: ["Up to 80% lower lighting costs", "A-grade electricians", "Homes & businesses"],
    primary: { label: "Get an LED lighting quote", href: "/enquire-now/" },
    secondary: { label: "Check my eligibility", href: "/#check" },
  },
  sections: [
    {
      type: "split",
      eyebrow: "Lighting efficiency",
      title: "Efficiency meets elegance with LED upgrades",
      body: [
        "Lighting runs every day, so older halogen and fluorescent fittings quietly add up on your power bill. Switching to LED can save up to 80% on your lighting costs, with light that looks as good as it performs.",
        "We recommend fittings that suit each room, replace your old lights, and take care of any program paperwork for you.",
      ],
      bullets: [
        "**Lower running costs:** LEDs use a fraction of the power of halogen globes.",
        "**Less maintenance:** fewer globe changes, especially in high or hard-to-reach fittings.",
        "**Better light:** choose the colour and brightness that suit each space.",
      ],
      image: {
        src: "/assets/images/pages/lighting-efficiency.webp",
        alt: "A softly lit office with timber desks and glass partitions at dusk",
        width: 475,
        height: 590,
      },
      cta: { label: "Request a quote", href: "/enquire-now/" },
    },
    {
      type: "features",
      tone: "mist",
      eyebrow: "Why upgrade",
      title: "What an LED upgrade gives you",
      columns: 3,
      items: [
        {
          icon: "dollar",
          title: "Up to 80% savings",
          text: "Cut the energy your lighting uses and see the difference on your bill.",
        },
        {
          icon: "bulb",
          title: "Long-lasting fittings",
          text: "LEDs last far longer than halogen globes, so you replace them less often.",
        },
        {
          icon: "shield",
          title: "Manufacturer’s warranty",
          text: "The light globes and LED downlights we install come with a manufacturer’s warranty.",
        },
        {
          icon: "award",
          title: "A-grade electricians",
          text: "Every fitting is installed by a licensed A-grade electrician carrying Auzbright photo ID.",
        },
        {
          icon: "home",
          title: "Homes and businesses",
          text: "From a few downlights at home to offices, warehouses and shops.",
        },
        {
          icon: "doc",
          title: "Paperwork handled",
          text: "Where an energy-efficiency program applies, we handle the paperwork and show any discount on your quote.",
        },
      ],
    },
    {
      type: "steps",
      eyebrow: "How it works",
      title: "Seamless solutions, effortless savings",
      items: [
        { title: "Get a free quote", text: "Tell us how many lights you have and where they are." },
        { title: "Schedule an appointment", text: "Choose a time that suits you." },
        { title: "Professional installation", text: "An A-grade electrician replaces your old fittings." },
        { title: "Start saving", text: "Lower lighting costs from the day it’s done." },
      ],
    },
    {
      type: "faq",
      tone: "mist",
      eyebrow: "LED lighting FAQs",
      title: "Common questions",
      items: [
        {
          q: "Am I eligible for a discount on LED lighting?",
          a: [
            "It depends on your state, your property, the lights you’re replacing and the program rules at the time of installation. Our [free eligibility check](/#check) looks at all of this before you commit.",
          ],
        },
        {
          q: "Do you upgrade lighting for businesses?",
          a: [
            "Yes. We upgrade lighting for offices, shops, warehouses and other commercial premises, as well as homes. Commercial eligibility rules differ, so we check each property individually.",
          ],
        },
        {
          q: "Who installs the lights?",
          a: [
            "Licensed A-grade electricians. All of our electricians are fully insured and carry Auzbright photo ID. Before installation, we’ll explain any equipment needed, such as lifts or lighting accessories.",
          ],
        },
      ],
    },
  ],
};

export default data;
