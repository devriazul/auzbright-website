import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/victoria/free-hot-water-systems/",
  seoTitle: "Commercial Heat Pump Victoria | Efficient Hot Water Upgrade for Businesses",
  description:
    "Help your Victorian business reduce hot water energy use with commercial heat pump upgrades, eligibility guidance, and installation support now.",
  crumbs: [{ label: "Victoria", href: "/victoria/" }, { label: "Commercial heat pump" }],
  hero: {
    eyebrow: "Free hot water systems",
    title: "Unlock energy savings with our {free hot water system upgrade.}",
    lead: "Switch to energy efficiency, switch to savings.",
    image: {
      src: "/assets/images/pages/new-main-cover1.webp",
      alt: "Econova and Emerald heat pump hot water systems side by side",
      width: 755,
      height: 819,
      fit: "contain",
    },
  },
  sections: [
    {
      type: "split",
      eyebrow: "Eligibility",
      title: "Are you eligible for a free upgrade?",
      body: [
        "Find out if you qualify for a free hot water system upgrade and start saving hundreds on your power bills.",
        "Auzbright offers government-backed incentives to switch to energy-efficient hot water systems, ensuring you enjoy reliable hot water while reducing your carbon footprint.",
      ],
      cta: { label: "Request a quote", href: "/enquire-now/" },
    },
    {
      type: "split",
      tone: "mist",
      flip: true,
      eyebrow: "Eligibility check",
      title: "Existing hot water unit",
      bullets: [
        "**Electric:** Receive a 100% government discount on establishment work and a 215L system.",
        "**Non-electric (gas, solar, etc.):** Get a 50% government refund.",
        "**New house (no current unit):** Contact Auzbright to check eligibility.",
        "Save $100s on each power bill and upgrade to an energy-efficient hot water system free.",
      ],
      image: {
        src: "/assets/images/pages/why-upgrade-img.webp",
        alt: "A hot water storage tank and pipework in a plant room",
        width: 636,
        height: 500,
      },
      cta: { label: "Request a quote", href: "/enquire-now/" },
    },
    {
      type: "products",
      eyebrow: "Our range",
      title: "Heat pump hot water systems",
      items: [
        {
          brand: "Ecogenica®",
          name: "R 215",
          href: "/products/ecogenica-r215/",
          text: "The Ecogenica® R 215 is the updated and improved take on the original 215 litre product designed by the team at Ecogenica®. After years of mastering our craft, we designed this sleek, modern and energy-efficient unit, which has become one of the most sought-after alternatives for heating water.",
          image: {
            src: "/assets/images/pages/product-image1.webp",
            alt: "Ecogenica R 215 heat pump with white storage tank and outdoor unit",
            width: 270,
            height: 405,
            fit: "contain",
          },
        },
        {
          brand: "Ecogenica®",
          name: "R 290",
          href: "/products/ecogenica-r290/",
          text: "The Ecogenica® R 290 is a workhorse. At 290L there is enough hot water to satisfy the most discerning users of water. The R 290 takes your hot water experience to a new level, delivering piping hot water at an economical price, pushing back against rising energy bills, putting you back in control, and saving money for the things that matter.",
          image: {
            src: "/assets/images/pages/product-image2.webp",
            alt: "Ecogenica R 290 heat pump with white storage tank and outdoor unit",
            width: 270,
            height: 405,
            fit: "contain",
          },
        },
      ],
    },
    {
      type: "steps",
      tone: "mist",
      eyebrow: "Free upgrade process",
      title: "How does it work?",
      items: [
        { title: "Draws surrounding air", text: "A fan pulls air containing heat energy across the evaporator." },
        { title: "Turns air into gas", text: "The evaporator transforms refrigerant into a gas, compressed into a hot gas." },
        { title: "Heats water with gas", text: "Hot gas in the condenser loop warms water inside the tank coil." },
        {
          title: "Produces hot water",
          text: "Refrigerant returns to a fluid after heating the water, ready for the cycle to repeat.",
        },
      ],
    },
    {
      type: "split",
      eyebrow: "Uses up to 70% less energy",
      title: "Benefits of heat pumps",
      bullets: [
        "Saves money in the long term.",
        "Energy-efficient and environmentally friendly.",
        "Fewer greenhouse gas emissions than conventional systems.",
        "Effective in lower temperatures.",
        "No need for additional solar panels or batteries.",
        "Easy installation and connection to your hot water plumbing.",
      ],
      image: {
        src: "/assets/images/pages/benefit-img.webp",
        alt: "A split heat pump hot water system with two stainless steel tanks and an outdoor unit",
        width: 522,
        height: 468,
        fit: "contain",
      },
    },
    {
      type: "split",
      tone: "mist",
      flip: true,
      eyebrow: "Why upgrade",
      title: "Why upgrade to a heat pump hot water system",
      body: [
        "Ensure your hot water system is regularly maintained to save on energy costs. Heat pump systems offer excellent value for businesses seeking to maximise solar electricity usage. They use heat from the air to heat water efficiently, reducing reliance on grid power.",
      ],
      image: {
        src: "/assets/images/pages/upgrade-img.webp",
        alt: "A heat pump outdoor unit seen from below against a cloudy sky",
        width: 1200,
        height: 304,
      },
    },
  ],
};

export default data;
