import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/nsw/energy-efficient-hot-water-solutions-for-homes/",
  seoTitle: "Residential Heat Pump NSW | Energy-Efficient Hot Water Upgrades",
  description:
    "Find energy efficient heat pump hot water options for NSW homes with guidance on eligibility, installation, upgrade steps and practical savings.",
  crumbs: [{ label: "NSW", href: "/nsw/" }, { label: "Residential heat pump" }],
  hero: {
    eyebrow: "Energy-efficient hot water solutions for homes",
    title: "Upgrade your home, lower your bills: {energy-efficient hot water systems.}",
    lead: "Efficient, eco-friendly, and cost-saving hot water solutions for every home.",
    chips: ["From just $33", "Up to 65% more energy efficient", "5 years warranty"],
    image: {
      src: "/assets/images/pages/new-main-cover1.webp",
      alt: "Two heat pump hot water systems, an Econova and an Emerald, displayed on a round platform",
      width: 755,
      height: 819,
      fit: "contain",
    },
  },
  sections: [
    {
      type: "features",
      eyebrow: "At a glance",
      title: "What you get",
      columns: 3,
      items: [
        {
          icon: "dollar",
          title: "From just $33",
          text: "Fully supplied and installed by our licensed electricians and plumbers.",
        },
        {
          icon: "bolt",
          title: "Up to 65% more energy efficient",
          text: "You can save up to $930 per year.",
        },
        {
          icon: "shield",
          title: "5 years warranty",
          text: "5 years warranty on the hot water tank; 3 years warranty on mechanical parts and labour.",
        },
      ],
    },
    {
      type: "split",
      tone: "mist",
      eyebrow: "The offer",
      title: "NSW heat pump",
      body: [
        "From just $33, VIC residents can now upgrade their gas or electric hot water systems to energy-efficient heat pumps, slashing hot water running costs by up to 70%.",
        "Our service, backed by state and federal initiatives, offers qualified homes significant savings, making eco-friendly hot water solutions accessible and affordable.",
      ],
      cta: { label: "Request a quote", href: "/enquire-now/" },
    },
    {
      type: "split",
      flip: true,
      eyebrow: "Why upgrade",
      title: "Why upgrade to a heat pump hot water system",
      body: [
        "Maintain your heat pump hot water system to save on maintenance and energy costs.",
        "For companies aiming to maximise solar electricity usage, heat pump systems offer great value, enabling efficient water heating during solar generation hours.",
      ],
      image: {
        src: "/assets/images/pages/why-upgrade-img.webp",
        alt: "A hot water storage tank installed in a plant room with pipework and an expansion vessel",
        width: 636,
        height: 500,
      },
    },
    {
      type: "products",
      tone: "mist",
      eyebrow: "Products",
      title: "Our heat pump range",
      items: [
        {
          brand: "Ecogenica®",
          name: "R 215",
          href: "/products/ecogenica-r215/",
          text: "The Ecogenica® R 215 is the updated and improved take on the original 215 litre product designed by the team at Ecogenica®. After years of mastering our craft, we designed this sleek, modern and energy-efficient unit, which has become one of the most sought-after alternatives for heating water.",
          image: {
            src: "/assets/images/pages/product-image1.webp",
            alt: "Ecogenica split heat pump: white storage tank with a separate outdoor compressor unit",
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
            alt: "Ecogenica split heat pump: white storage tank with a separate outdoor compressor unit",
            width: 270,
            height: 405,
            fit: "contain",
          },
        },
      ],
    },
    {
      type: "features",
      eyebrow: "Features",
      title: "Heat pump features",
      columns: 3,
      items: [
        {
          icon: "leaf",
          title: "Eco-friendly savings",
          text: "Our CFC-free, renewable energy heat pumps extract heat from the air, reducing energy costs by up to 70% while preserving the environment and your wallet.",
        },
        {
          icon: "award",
          title: "Quality components",
          text: "Featuring Japanese-made Toshiba compressors and fully welded enamel tanks, our heat pumps ensure durability and efficiency.",
        },
        {
          icon: "snow",
          title: "Frost protection",
          text: "Specially built fan modules ensure silent operation and efficient water heating, even in low temperatures.",
        },
        {
          icon: "thermo",
          title: "Wide temperature range",
          text: "Designed for Australian climates, our heat pumps operate in environments ranging from -7°C to +40°C.",
        },
        {
          icon: "volume",
          title: "Low noise",
          text: "Enjoy noiseless operation with our innovative heat pump design.",
        },
        {
          icon: "check",
          title: "Government approved",
          text: "Fully accredited under VIC VEU and NSW ESS/IPART schemes, ensuring savings for years to come.",
        },
      ],
    },
    {
      type: "split",
      tone: "mist",
      eyebrow: "State incentive",
      title: "Energy Savings Scheme (VEU)",
      body: [
        "The VIC VEU offers financial incentives for energy-saving equipment installation, upgrade, or replacement.",
        "Tradeable certificates called energy savings certificates (VEUs) provide reductions on energy savings activities, creating a market for certificates and fulfilling statutory energy savings targets.",
      ],
      image: {
        src: "/assets/images/pages/energy-saving-img.webp",
        alt: "Pressure gauges and sensors fitted to hot water pipework",
        width: 636,
        height: 500,
      },
      cta: { label: "Request a quote", href: "/enquire-now/" },
    },
    {
      type: "split",
      flip: true,
      eyebrow: "Federal incentive",
      title: "Small-scale Renewable Energy Scheme (SRES)",
      body: [
        "SRES provides incentives for installing environmentally friendly power systems like PV solar systems or energy-efficient heat pump hot water systems.",
        "Eligible installations receive small-scale technology certificates based on location, installation date, and displaced megawatt hours of electricity.",
      ],
      image: {
        src: "/assets/images/pages/small-scale-img.webp",
        alt: "A person on a sofa holding a tablet showing a home energy efficiency rating chart",
        width: 636,
        height: 500,
      },
    },
    {
      type: "steps",
      tone: "mist",
      eyebrow: "Heat pump",
      title: "How does it work?",
      intro: "Free upgrade from an electric hot water system to an energy-efficient heat pump system (155L).",
      items: [
        { title: "Get a free quote", text: "A fan pulls air containing heat energy across the evaporator." },
        { title: "Turns air into gas", text: "The evaporator transforms refrigerant into a gas, which is compressed into a hot gas." },
        { title: "Heats water with gas", text: "Hot gas in the condenser loop warms water inside the tank coil." },
        { title: "Produces hot water", text: "Refrigerant returns to a fluid after heating the water, ready for the cycle to repeat." },
      ],
    },
  ],
};

export default data;
