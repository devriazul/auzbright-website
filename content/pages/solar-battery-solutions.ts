import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/solar-battery-solutions/",
  seoTitle:
    "Solar Battery Solutions Australia | Smart Energy Storage Upgrade for Homes",
  description:
    "Explore solar and battery solutions to help Australian homes and businesses store energy, reduce bills, and improve long-term energy efficiency.",
  crumbs: [
    {
      label: "Solar & battery",
    },
  ],
  hero: {
    eyebrow: "Solar & battery solutions",
    title: "Power your home with {smarter solar & battery solutions.}",
    lead: "Cut your energy bills, reduce your carbon footprint, and enjoy 24/7 reliable power with our premium solar panels and battery systems — backed by long warranties and local Australian support.",
    image: {
      src: "/assets/images/pages/why-choose-solar-battery.webp",
      alt: "Rows of solar panels under a sunset sky",
      width: 500,
      height: 590,
    },
  },
  sections: [
    {
      type: "features",
      eyebrow: "Why Auzbright",
      title: "Why choose solar + battery with Auzbright?",
      intro:
        "Switching to solar is more than just saving money — it’s about creating a sustainable, future-ready home.",
      columns: 3,
      items: [
        {
          icon: "battery",
          title: "Energy independence",
          text: "Store excess solar power and use it whenever you need, even at night.",
        },
        {
          icon: "dollar",
          title: "Lower power bills",
          text: "Reduce reliance on the grid and cut electricity costs significantly.",
        },
        {
          icon: "award",
          title: "Government rebates and incentives",
          text: "Take advantage of available solar rebates to save more.",
        },
        {
          icon: "leaf",
          title: "Eco-friendly solution",
          text: "Reduce your carbon footprint with clean, renewable energy.",
        },
        {
          icon: "bolt",
          title: "Reliable power backup",
          text: "Keep your home running during blackouts with instant battery support.",
        },
        {
          icon: "users",
          title: "Australian local support",
          text: "Backed by local installers, warranties and payment plan options.",
        },
      ],
    },
    {
      type: "products",
      tone: "mist",
      eyebrow: "Batteries",
      title: "High-performance solar & battery systems",
      items: [
        {
          brand: "Potis",
          name: "Potis Edge Battery",
          href: "/products/potis-edge-battery/",
          features: [
            "Quick plug design for hassle-free transport and installation",
            "Triple protection for safe battery pack performance",
            "Compact, space-saving and highly durable design",
            "Energy-conscious system that switches to low power mode during idle times",
          ],
          badge: "10 years warranty",
          image: {
            src: "/assets/images/pages/potis-edge-battery.webp",
            alt: "Potis Edge stackable home battery",
            width: 400,
            height: 380,
            fit: "contain",
          },
          links: [
            {
              label: "Product manual",
              href: "/assets/docs/spec-potis-edge-battery.pdf",
            },
          ],
        },
        {
          brand: "Sungrow",
          name: "Sungrow Battery",
          href: "/products/sungrow-battery/",
          features: [
            "Continuous 30A charge and discharge with high efficiency",
            "Up to 100% usable energy capacity",
            "Reliable lithium iron phosphate (LFP) technology",
            "Expandable system: supports 2–8 modules per unit",
          ],
          badge: "10 years warranty",
          image: {
            src: "/assets/images/pages/sungrow-battery.webp",
            alt: "Sungrow home battery",
            width: 400,
            height: 380,
            fit: "contain",
          },
          links: [
            {
              label: "Product manual",
              href: "/assets/docs/spec-sungrow-battery.pdf",
            },
          ],
        },
        {
          brand: "Alpha ESS",
          name: "Alpha ESS Battery",
          href: "/products/alpha-ess-battery/",
          features: [
            "All-in-one unit with both inverter and battery integrated",
            "Operates ultra-quietly (under 35 dB)",
            "100% depth of discharge for maximum energy use",
            "Stackable design for quick setup and easy expansion",
          ],
          badge: "10 years warranty",
          image: {
            src: "/assets/images/pages/alpha-ess-battery.webp",
            alt: "Alpha ESS home battery",
            width: 400,
            height: 380,
            fit: "contain",
          },
          links: [
            {
              label: "Product manual",
              href: "/assets/docs/spec-alpha-ess-battery.pdf",
            },
          ],
        },
        {
          brand: "Solax",
          name: "Solax Battery",
          href: "/products/solax-battery/",
          features: [
            "Remote monitoring, fault diagnosis and upgrades",
            "Unique heating technology ensures performance in cold climates",
            "Advanced LFP battery cells with high-performance processors",
            "IP65-rated weather protection",
          ],
          badge: "10 years warranty",
          image: {
            src: "/assets/images/pages/solax-battery.webp",
            alt: "Solax home battery",
            width: 400,
            height: 380,
            fit: "contain",
          },
          links: [
            {
              label: "Product manual",
              href: "/assets/docs/spec-solax-battery.pdf",
            },
          ],
        },
        {
          brand: "GoodWe",
          name: "GoodWe Battery",
          href: "/products/goodwe-battery/",
          features: [
            "Intelligent monitoring and smart controls",
            "User-friendly design for easy use",
            "Long-lasting LFP technology with stable cycles",
            "IP55 protection for safe outdoor installation",
          ],
          badge: "10 years warranty",
          image: {
            src: "/assets/images/pages/goodwe-battery.webp",
            alt: "GoodWe home battery",
            width: 400,
            height: 380,
            fit: "contain",
          },
          links: [
            {
              label: "Product manual",
              href: "/assets/docs/spec-goodwe-battery.pdf",
            },
          ],
        },
        {
          brand: "Fox ESS",
          name: "Fox ESS Solar Battery",
          href: "/products/fox-ess-battery/",
          features: [
            "High efficiency with performance above 95%",
            "Long lifespan exceeding 6,000 cycles",
            "IP65 protection (varies by model)",
            "Modular and scalable to grow with your needs",
          ],
          badge: "10 years warranty",
          image: {
            src: "/assets/images/pages/fox-ess-solar-battery.webp",
            alt: "Fox ESS solar battery",
            width: 400,
            height: 380,
            fit: "contain",
          },
          links: [
            {
              label: "Product manual",
              href: "/assets/docs/ep11-user-manual-au-v1.0.1-20250815.pdf",
            },
          ],
        },
        {
          brand: "Anker",
          name: "Anker SOLIX Solar Battery",
          href: "/products/anker-solix-battery/",
          features: [
            "Optimised safety and performance",
            "Weatherproof with IP65 protection",
            "Works in extreme conditions (-20°C to 55°C)",
            "Provides 24/7 backup power",
          ],
          badge: "10 years warranty",
          image: {
            src: "/assets/images/pages/anker-solar-battery.webp",
            alt: "Anker SOLIX solar battery",
            width: 400,
            height: 380,
            fit: "contain",
          },
          links: [
            {
              label: "Product manual",
              href: "/assets/docs/spec-anker-solar-battery.pdf",
            },
          ],
        },
        {
          brand: "Sigenergy",
          name: "Sigenergy Solar Battery",
          href: "/products/sigenergy-battery/",
          features: [
            "Multi-layer safety features for complete protection",
            "Real-time battery status via the mySigen App",
            "Quick-connect design for faster installation",
            "AI-enabled optimisation extends battery life",
          ],
          badge: "10 years warranty",
          image: {
            src: "/assets/images/pages/sigenergy-solar-battery.webp",
            alt: "Sigenergy solar battery",
            width: 400,
            height: 380,
            fit: "contain",
          },
          links: [
            {
              label: "Product manual",
              href: "/assets/docs/spec-sigenergy-solar-battery.pdf",
            },
          ],
        },
        {
          brand: "Sofar",
          name: "Sofar PowerAll",
          href: "/products/sofar-powerall/",
          features: [
            "Integrated modular design for simple transport and installation",
            "Expandable capacity for future growth",
            "Very low power consumption in sleep mode",
            "Fast switchover to critical loads in under 10 milliseconds",
          ],
          badge: "10 years warranty",
          image: {
            src: "/assets/images/pages/sofar-powerall.webp",
            alt: "Sofar PowerAll battery system",
            width: 400,
            height: 380,
            fit: "contain",
          },
          links: [
            {
              label: "Product manual",
              href: "/assets/docs/spec-sofar-powerall.pdf",
            },
          ],
        },
        {
          brand: "Hiconics",
          name: "Hiconics Battery",
          href: "/products/hiconics-battery/",
          features: [
            "Advanced thermal management for reliable performance",
            "Modular stackable design",
            "Engineered for extreme environmental conditions",
            "Smooth transition between on-grid and off-grid power",
          ],
          badge: "10 years warranty",
          image: {
            src: "/assets/images/pages/hiconics-battery.webp",
            alt: "Hiconics home battery",
            width: 400,
            height: 380,
            fit: "contain",
          },
          links: [
            {
              label: "Product manual",
              href: "/assets/docs/spec-hiconics-battery.pdf",
            },
          ],
        },
        {
          brand: "Growatt",
          name: "Growatt Battery",
          href: "/products/growatt-battery/",
          features: [
            "Quick and easy installation",
            "Safe and reliable: surge protection plus under-voltage wake-up",
            "Smart monitoring: remote diagnostics and upgrades",
            "Full system warranty for peace of mind",
          ],
          badge: "10 years warranty",
          image: {
            src: "/assets/images/pages/growatt-battery-info.webp",
            alt: "Growatt inverters and battery units",
            width: 400,
            height: 380,
            fit: "contain",
          },
          links: [
            {
              label: "Enquire now",
              href: "/enquire-now/",
            },
          ],
        },
        {
          brand: "Tesla",
          name: "Tesla Battery",
          href: "/products/tesla-battery/",
          features: [
            "Energy independence",
            "High capacity",
            "Seamless integration",
            "Scalable",
            "Compact design",
          ],
          badge: "10 years warranty",
          image: {
            src: "/assets/images/pages/tesla-battery-info.webp",
            alt: "Tesla Powerwall batteries mounted on an outside wall",
            width: 400,
            height: 380,
          },
          links: [
            {
              label: "Enquire now",
              href: "/enquire-now/",
            },
          ],
        },
      ],
    },
    {
      type: "products",
      eyebrow: "Solar packages",
      title: "High-performance solar & battery systems",
      items: [
        {
          name: "6.6kW Jinko or Canadian Solar system",
          href: "/products/solar-system-6-6kw/",
          text: "Paired with a 15kWh battery – the perfect starter solution.",
          features: [
            "Tier 1 solar panels with 25-year warranty",
            "Hybrid Wi-Fi–enabled inverter with 10-year warranty",
            "Supported by local Australian service and payment plans",
            "Tier 1 battery manufacturer with 10-year warranty",
          ],
          image: {
            src: "/assets/images/pages/alpha-ess-battery2-1.webp",
            alt: "Solar panels with a hybrid inverter",
            width: 570,
            height: 380,
            fit: "contain",
          },
          links: [
            {
              label: "Enquire now",
              href: "/enquire-now/",
            },
          ],
        },
        {
          name: "10kW Jinko or Canadian Solar system",
          href: "/products/solar-system-10kw/",
          text: "Matched with a 20kWh battery – the sweet spot for families.",
          features: [
            "Tier 1 solar panels with 25-year warranty",
            "Hybrid Wi-Fi–enabled inverter with 10-year warranty",
            "Supported by local Australian service and payment plans",
            "Tier 1 battery manufacturer with 10-year warranty",
          ],
          image: {
            src: "/assets/images/pages/alpha-ess-battery2-1.webp",
            alt: "Solar panels with a hybrid inverter",
            width: 570,
            height: 380,
            fit: "contain",
          },
          links: [
            {
              label: "Enquire now",
              href: "/enquire-now/",
            },
          ],
        },
        {
          name: "13.5kW Jinko or Canadian Solar system",
          href: "/products/solar-system-13-5kw/",
          text: "Comes with a 25kWh battery – for serious energy independence.",
          features: [
            "Tier 1 solar panels with 25-year warranty",
            "Hybrid Wi-Fi–enabled inverter with 10-year warranty",
            "1x 9.6kW battery with 10-year warranty",
            "Supported by local Australian service and payment plans",
          ],
          image: {
            src: "/assets/images/pages/alpha-ess-battery2-1.webp",
            alt: "Solar panels with a hybrid inverter",
            width: 570,
            height: 380,
            fit: "contain",
          },
          links: [
            {
              label: "Enquire now",
              href: "/enquire-now/",
            },
          ],
        },
      ],
    },
    {
      type: "features",
      tone: "mist",
      eyebrow: "Benefits",
      title: "Why go solar",
      columns: 3,
      items: [
        {
          icon: "dollar",
          title: "Lower electricity bills",
          text: "Generate your own power and reduce dependence on the grid.",
        },
        {
          icon: "leaf",
          title: "Eco-friendly",
          text: "Cut carbon emissions and contribute to a sustainable future.",
        },
        {
          icon: "home",
          title: "Increase property value",
          text: "Homes with solar systems are more attractive to buyers.",
        },
        {
          icon: "shield",
          title: "Reliable power supply",
          text: "Pair solar with battery storage for backup during blackouts.",
        },
        {
          icon: "sun",
          title: "Energy independence",
          text: "Use stored solar power at night or during peak tariff hours.",
        },
        {
          icon: "award",
          title: "Government incentives",
          text: "Take advantage of rebates and incentives to reduce upfront costs.",
        },
      ],
    },
    {
      type: "reviews",
      eyebrow: "Customer feedback",
      title: "What people say about us",
    },
  ],
};

export default data;
