import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/landing/",
  seoTitle: "Energy Solutions for Aussies | Auzbright",
  description:
    "Check your eligibility for energy upgrades under the VEU program with Auzbright: air conditioning, hot water systems, exhaust fan seals and LED lighting.",
  crumbs: [{ label: "Energy solutions" }],
  hero: {
    eyebrow: "Auzbright",
    title: "Energy solutions {for Aussies!}",
    lead: "Check your eligibility for the offer under the VEU program.",
    image: {
      src: "/assets/images/pages/new-main-cover1.webp",
      alt: "Econova and Emerald heat pump hot water systems on a display plinth",
      width: 755,
      height: 819,
      fit: "contain",
    },
    primary: { label: "Get offer now", href: "/#check" },
  },
  sections: [
    {
      type: "split",
      eyebrow: "Auzbright",
      title: "Shaping a greener tomorrow",
      body: [
        "Founded in 2017, Auzbright is dedicated to reducing carbon emissions across Australia through the VEET and ESS programs.",
        "Our experienced professionals are committed to providing outstanding service, going above and beyond to make a sustainable impact.",
      ],
      bullets: ["Energy efficiency sector", "Renewable energy", "Integrated solar solutions", "Sustainable lighting"],
      image: {
        src: "/assets/images/pages/daikin-multi-split-system.webp",
        alt: "Daikin multi-split air conditioner indoor and outdoor units",
        width: 262,
        height: 339,
        fit: "contain",
      },
    },
    {
      type: "split",
      tone: "mist",
      flip: true,
      eyebrow: "Lighting efficiency redefined",
      title: "Efficiency meets elegance with Auzbright’s LED upgrades",
      intro: "Performance, quality and reliability.",
      body: ["Switch to LED and save up to 80% on your lighting costs. Experience brilliance without compromise."],
      bullets: [
        "**Fostering a sustainable global village.** Committed to fostering a sustainable global village by offering cost-effective alternatives.",
        "**Innovation for a better future.** Dedicated to creating innovative products that not only make the world a better place but also keep us at the forefront of technology.",
      ],
      image: {
        src: "/assets/images/pages/lighting-efficiency.webp",
        alt: "A softly lit office with timber desks and glass partitions at dusk",
        width: 475,
        height: 590,
      },
    },
    {
      type: "cards",
      eyebrow: "Our services",
      title: "Lighting the path to efficiency",
      items: [
        {
          label: "Up to $9000 rebate",
          title: "Air con upgrades",
          text: "Reduce lighting energy consumption by 70-80%. Upgrade to energy-efficient LED lighting and enjoy up to 80% savings on your lighting costs.",
          href: "/enquire-now/",
          image: {
            src: "/assets/images/pages/service-img1.webp",
            alt: "Two technicians in hard hats and hi-vis vests checking a tablet beside outdoor air conditioning units",
            width: 414,
            height: 400,
          },
        },
        {
          label: "Free upgrade",
          title: "Hot water system",
          text: "Government discounts for electric systems and half refunds for non-electric options. Upgrade to an energy-efficient hot water system and save $100s on every power bill.",
          href: "/enquire-now/",
          image: {
            src: "/assets/images/pages/service-img2.webp",
            alt: "A hand turning a brass valve above a gas meter",
            width: 414,
            height: 400,
          },
        },
        {
          label: "Free upgrade",
          title: "Exhaust fan seals",
          text: "Weatherproof your home with free exhaust fan seal installations. Lower energy costs and increase efficiency under the VEU program.",
          href: "/enquire-now/",
          image: {
            src: "/assets/images/pages/service-img3.webp",
            alt: "A row of large black exhaust fans mounted on a white wall",
            width: 414,
            height: 400,
          },
        },
      ],
    },
    {
      type: "steps",
      tone: "mist",
      eyebrow: "Our process",
      title: "Seamless solutions, effortless savings",
      intro:
        "Under the Victorian Energy Upgrades program, our process for free LED lighting installation is simple. Our services, such as LED upgrades, free hot water systems and exhaust fan seals, reflect a commitment to reducing carbon emissions.",
      items: [
        { title: "Get a free quote." },
        { title: "Schedule an appointment." },
        { title: "Electricians and licensed plumbers." },
        { title: "Start saving on your energy bills." },
      ],
    },
    {
      type: "split",
      eyebrow: "Sustainability",
      title: "Sustainability is our guiding light",
      body: [
        "Sustainability is not a gimmick; it’s one of our guiding principles. We consistently strive towards a greener future, inspiring action and promoting a more environmentally friendly world.",
      ],
      bullets: ["Free residential and commercial LED upgrade", "Heat pump hot water system upgrade"],
      image: {
        src: "/assets/images/pages/sustainability-img1.webp",
        alt: "Aerial night view of a colourfully lit plaza inside a road loop",
        width: 450,
        height: 660,
      },
      cta: { label: "Request a quote", href: "/#check" },
    },
    {
      type: "features",
      tone: "mist",
      eyebrow: "Why Auzbright",
      title: "Join the energy efficiency movement with industry leaders",
      columns: 2,
      items: [
        {
          icon: "shield",
          title: "Trusted partners",
          text: "Benefit from our 10-year legacy of empowering Australians to save energy and money, earning us the trust of countless satisfied customers.",
        },
        {
          icon: "pin",
          title: "Nationwide support",
          text: "Our dedicated local teams in Victoria, New South Wales, South Australia and Queensland ensure you receive exceptional support wherever you are in Australia.",
        },
        {
          icon: "award",
          title: "Accredited ACP",
          text: "As an Accredited Certificate Provider (ACP), we simplify your access to state and federal energy-efficiency programs, making it effortless for you to participate and reap the benefits.",
        },
        {
          icon: "bulb",
          title: "Leading educators",
          text: "We are committed to fostering knowledge-sharing initiatives that empower individuals and businesses on their carbon abatement journey, ensuring a brighter, more sustainable future for all.",
        },
      ],
    },
    {
      type: "split",
      flip: true,
      eyebrow: "What we deliver",
      title: "End-to-end solutions",
      body: [
        "Sustainability is not a gimmick; it’s one of our guiding principles. We consistently strive towards a greener future, inspiring action and promoting a more environmentally friendly world.",
      ],
      image: {
        src: "/assets/images/pages/sustainability-img2.webp",
        alt: "Two round metal ventilation duct outlets beside a blue-framed window",
        width: 460,
        height: 660,
      },
      cta: { label: "Request a quote", href: "/#check" },
    },
    {
      type: "reviews",
      tone: "mist",
      eyebrow: "Customer feedback",
      title: "What people say about us",
    },
  ],
  noindex: true,
};

export default data;
