import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/victoria/energy-efficient-hot-water-solutions-for-homes/",
  seoTitle: "Residential Heat Pump Victoria | Efficient Hot Water Upgrade for VIC Homes",
  description:
    "Upgrade your Victorian home with an energy-efficient heat pump hot water system and get guidance on eligibility, installation and savings today.",
  crumbs: [{ label: "Victoria", href: "/victoria/" }, { label: "Residential heat pump" }],
  hero: {
    eyebrow: "Energy-efficient hot water for homes",
    title: "Upgrade your home, lower your bills: {energy-efficient hot water systems.}",
    lead: "Efficient, eco-friendly and cost-saving hot water solutions for every home, fully supplied and installed by our licensed electricians and plumbers.",
    chips: ["Minimal installation charges", "Up to 70% more energy efficient", "Save up to $930 per year"],
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
      eyebrow: "Victorian homes",
      title: "VIC heat pump",
      body: [
        "VIC residents can now upgrade their gas or electric hot water systems to energy-efficient heat pumps, slashing hot water running costs by up to 70%.",
        "Our service, backed by state and federal initiatives, offers qualified homes significant savings, making eco-friendly hot water solutions accessible and affordable.",
      ],
      cta: { label: "Request a quote", href: "/enquire-now/" },
    },
    {
      type: "split",
      tone: "mist",
      flip: true,
      eyebrow: "Why upgrade",
      title: "Why upgrade to a heat pump hot water system",
      body: [
        "Maintain your heat pump hot water system to save on maintenance and energy costs.",
        "For companies aiming to maximise solar electricity usage, heat pump systems offer great value, enabling efficient water heating during solar generation hours.",
      ],
      image: {
        src: "/assets/images/pages/why-upgrade-img.webp",
        alt: "A hot water storage tank and pipework in a plant room",
        width: 636,
        height: 500,
      },
    },
    {
      type: "products",
      eyebrow: "Our range",
      title: "Heat pump hot water systems",
      items: [
        {
          brand: "Emerald Energy®",
          name: "270L",
          href: "/products/emerald-270l-all-in-one/",
          text: "The Emerald all-in-one heat pump is specifically designed to deliver optimum performance. It incorporates highly efficient DC inverter technology, which not only extends the lifespan of the components but also reduces noise production.",
          badge: "5 years warranty",
          image: {
            src: "/assets/images/pages/780b832f-48c4-4d1f-9dec-682dc8dba416-1-1-1-2.webp",
            alt: "White Emerald Energy all-in-one heat pump hot water system",
            width: 270,
            height: 405,
            fit: "contain",
          },
          links: [
            { label: "Product brochure", href: "/assets/docs/emerald-heat-pump-all-in-one-controller-instructions.pdf" },
          ],
        },
        {
          brand: "Emerald Energy®",
          name: "270L",
          href: "/emerald-energy/",
          text: "Smart R290-powered hot water system with built-in Wi-Fi for effortless control.",
          features: [
            "Eco-conscious R290 refrigerant delivering COP up to 4.41",
            "Optimised energy management with solar soaker integration and Wi-Fi connectivity",
          ],
          badge: "5 years warranty",
          image: {
            src: "/assets/images/pages/emerald.webp",
            alt: "Grey Emerald Energy R290 all-in-one heat pump hot water system",
            width: 180,
            height: 429,
            fit: "contain",
          },
          links: [
            { label: "Product brochure", href: "/assets/docs/emerald-hot-water-heat-pump-all-in-one.pdf" },
          ],
        },
        {
          brand: "ECONOVA®",
          name: "ECONOVA",
          href: "/products/econova-heat-pump/",
          text: "Sustainable, cost-saving hot water backed by major rebates and discounts.",
          features: ["Save up to 80% on energy use", "Government rebates + professional local installation"],
          badge: "5 years warranty",
          image: {
            src: "/assets/images/pages/econova1.webp",
            alt: "Dark grey Econova all-in-one heat pump hot water system",
            width: 133,
            height: 427,
            fit: "contain",
          },
          links: [{ label: "Product brochure", href: "/assets/docs/econova-latest-version.pdf" }],
        },
        {
          brand: "Neopower®",
          name: "315L Neopower all-in-one",
          href: "/products/neopower-315l-all-in-one/",
          features: [
            "Delivers up to 75% energy efficiency",
            "Smart Wi-Fi connectivity with mobile app control",
            "Compatible with solar PV systems",
            "Quiet operation for everyday comfort",
            "Built-in frost protection for year-round reliability",
          ],
          badge: "5 years warranty",
          image: {
            src: "/assets/images/pages/315l-neopower-all-in-one.webp",
            alt: "Front and side views of the black Neopower 315L all-in-one heat pump",
            width: 382,
            height: 435,
            fit: "contain",
          },
          links: [
            { label: "Product brochure", href: "/assets/docs/neopower-4ppa4-all-in-one-black-brochure-315l.pdf" },
          ],
        },
        {
          brand: "Midea®",
          name: "280L all-in-one system",
          href: "/products/midea-280l-all-in-one/",
          features: [
            "Advanced heat pump technology",
            "Smart protection",
            "User-friendly control",
            "Reliable and durable",
            "Seamless operation",
          ],
          badge: "5 years warranty",
          image: {
            src: "/assets/images/pages/280l-hot-water-heat-pump-full.webp",
            alt: "Two white Midea all-in-one heat pump hot water systems",
            width: 364,
            height: 534,
            fit: "contain",
          },
          links: [{ label: "Product brochure", href: "/assets/docs/midea-residential-heat-pump-brochures.pdf" }],
        },
      ],
    },
    {
      type: "features",
      tone: "mist",
      eyebrow: "Key features",
      title: "What our heat pumps offer",
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
          icon: "shield",
          title: "Government approved",
          text: "Fully accredited under VIC VEU and NSW ESS/IPART schemes, ensuring savings for years to come.",
        },
      ],
    },
    {
      type: "split",
      eyebrow: "State incentive",
      title: "Energy Savings Scheme (VEU)",
      body: [
        "The VIC VEU offers financial incentives for energy-saving equipment installation, upgrade or replacement.",
        "Tradeable certificates called energy savings certificates (VEUs) provide reductions on energy savings activities, creating a market for certificates and fulfilling statutory energy savings targets.",
      ],
      image: {
        src: "/assets/images/pages/energy-saving-img.webp",
        alt: "Pressure gauges and valves on hot water pipework",
        width: 636,
        height: 500,
      },
      cta: { label: "Request a quote", href: "/enquire-now/" },
    },
    {
      type: "split",
      tone: "mist",
      flip: true,
      eyebrow: "Federal incentive",
      title: "Small-scale Renewable Energy Scheme (SRES)",
      body: [
        "SRES provides incentives for installing environmentally friendly power systems like PV solar systems or energy-efficient heat pump hot water systems.",
        "Eligible installations receive small-scale technology certificates based on location, installation date and displaced megawatt hours of electricity.",
      ],
      image: {
        src: "/assets/images/pages/small-scale-img.webp",
        alt: "A person holding a tablet showing a home energy efficiency rating chart",
        width: 636,
        height: 500,
      },
    },
    {
      type: "steps",
      eyebrow: "Heat pump",
      title: "How does it work?",
      intro: "Free upgrade from an electric hot water system to an energy-efficient heat pump system (155L).",
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
  ],
};

export default data;
