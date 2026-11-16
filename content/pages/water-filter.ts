import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/water-filter/",
  seoTitle: "Whole-Home & Under-Sink Water Filtration | Victoria & NSW | Auzbright",
  description:
    "Three-stage whole-home water filtration and under-sink filters for Victorian and NSW homes. Filtered water at every connected tap, installed by licensed plumbers.",
  crumbs: [{ label: "Products", href: "/products/" }, { label: "Water filter" }],
  hero: {
    eyebrow: "Water filters",
    title: "Filtered water, {at every tap.}",
    lead: "Whole-home and under-sink filtration for cleaner, better-tasting water. We’ll help you choose the right setup for your home.",
    image: {
      src: "/assets/images/svc-water-filter.webp",
      alt: "A whole-home water filtration cabinet on a courtyard beside a modern home at dusk",
      width: 900,
      height: 450,
    },
    chips: ["Three-stage filtration", "Whole-home or under-sink", "Licensed plumbers"],
    primary: { label: "Get a water filter quote", href: "/enquire-now/" },
    secondary: { label: "Call 03 8609 5195", href: "tel:0386095195" },
  },
  sections: [
    {
      type: "split",
      eyebrow: "Whole-home filtration",
      title: "Filtration at the source",
      body: [
        "A whole-home system is installed on the main water supply where it enters your property. Water passes through the filtration stages before it travels to your kitchen, bathrooms, laundry and water-using appliances.",
        "The exact outlets served depend on your plumbing layout, so we assess your property before confirming where the system can go and which lines it will serve.",
      ],
      bullets: [
        "Kitchen taps, bathroom basins, showers and baths",
        "Laundry taps, washing machines and dishwashers",
        "Hot water systems and other connected fixtures",
      ],
      image: {
        src: "/assets/images/blog/whole-home-water-filtration-in-derrimut.webp",
        alt: "A whole-home water filtration system installed at a house",
        width: 700,
        height: 394,
      },
    },
    {
      type: "steps",
      tone: "mist",
      eyebrow: "How it works",
      title: "Three stages of filtration",
      intro: "Results and maintenance needs vary with your property, incoming water and household use.",
      items: [
        {
          title: "Sediment filtration",
          text: "Designed to reduce sediment and particles such as dirt, dust, rust, sand and silt.",
        },
        {
          title: "Mineral-particle reduction",
          text: "Reduces mineral particles and may help limit scale build-up on taps, fixtures and appliances.",
        },
        {
          title: "Chlorine, taste and odour",
          text: "Helps improve chlorine-related taste and odour before water reaches your taps.",
        },
      ],
    },
    {
      type: "features",
      eyebrow: "Choose your setup",
      title: "Whole-home or under-sink?",
      intro: "The main difference is coverage: one drinking-water tap, or water filtered before it reaches every connected outlet.",
      columns: 2,
      items: [
        {
          icon: "home",
          title: "Whole-home filtration",
          text: "Filters water before it reaches your kitchens, bathrooms, laundry, showers and appliances. A broader installation and servicing scope.",
        },
        {
          icon: "drop",
          title: "Under-sink filtration",
          text: "Installed beneath the kitchen sink and connected to one selected tap, for filtered drinking and cooking water. A smaller, targeted installation.",
        },
      ],
    },
    {
      type: "specs",
      tone: "mist",
      eyebrow: "Before we install",
      title: "What we check at your property",
      intro: "A suitability assessment comes first, so there are no surprises on installation day.",
      items: [
        { label: "Mains supply", value: "Where the water enters the property" },
        { label: "Space", value: "Room near the entry point for the filter cabinet" },
        { label: "Plumbing", value: "Access to existing pipes and any changes needed" },
        { label: "Water pressure", value: "Suitable pressure for the system" },
        { label: "Servicing", value: "Easy access for future cartridge changes" },
        { label: "Drainage", value: "Drainage and installation requirements" },
      ],
    },
    {
      type: "cards",
      eyebrow: "Read more",
      title: "Water filtration guides",
      items: [
        {
          label: "Guide",
          title: "Whole home vs under-sink water filtration",
          text: "Which setup suits your household?",
          href: "/whole-home-vs-under-sink-water-filters-for-western-melbourne-homes/",
          image: {
            src: "/assets/images/blog/whole-home-vs-under-sink-water-filters-for-western-melbourne-homes-600.webp",
            alt: "",
            width: 600,
            height: 338,
          },
        },
        {
          label: "Guide",
          title: "Filtered water at every tap",
          text: "How whole-home filtration works.",
          href: "/whole-home-water-filtration-in-derrimut/",
          image: {
            src: "/assets/images/blog/whole-home-water-filtration-in-derrimut-600.webp",
            alt: "",
            width: 600,
            height: 338,
          },
        },
        {
          label: "Guide",
          title: "Retrofitting an established home",
          text: "What to check in an older property.",
          href: "/whole-home-water-filtration-for-established-derrimut-homes/",
          image: {
            src: "/assets/images/blog/whole-home-water-filtration-for-established-derrimut-homes-600.webp",
            alt: "",
            width: 600,
            height: 338,
          },
        },
      ],
    },
  ],
};

export default data;
