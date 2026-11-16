import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/installation/",
  seoTitle: "Installation | Licensed Installers in Victoria & NSW | Auzbright",
  description:
    "How Auzbright installs your upgrade: free quote, booking, installation by licensed plumbers and A-grade electricians, and a follow-up call. Victoria and NSW.",
  crumbs: [{ label: "Installation" }],
  hero: {
    eyebrow: "Installation",
    title: "Professional installation, {start to finish.}",
    lead: "Licensed plumbers and A-grade electricians install every upgrade, and the same team handles your quote, booking and scheme paperwork.",
    image: {
      src: "/assets/images/heat-pump-tank-install.webp",
      alt: "A heat pump hot water tank and plumbing installed in a utility room",
      width: 636,
      height: 500,
    },
    chips: ["Licensed & insured", "Auzbright photo ID", "Follow-up after every job"],
    primary: { label: "Get a free quote", href: "/enquire-now/" },
    secondary: { label: "Call 03 8609 5195", href: "tel:0386095195" },
  },
  sections: [
    {
      type: "steps",
      eyebrow: "Our process",
      title: "Seamless solutions, effortless savings",
      intro: "Our process is simple, from your first enquiry to lower energy bills.",
      items: [
        { title: "Get a free quote", text: "Tell us about your home or business and what you’d like to upgrade. You’ll get a written, itemised quote." },
        { title: "Schedule an appointment", text: "Choose a time that suits you. We confirm the date and expected timeframe when you book." },
        { title: "Professional installation", text: "Our licensed installers fit your new system to Australian Standards." },
        { title: "Start saving", text: "We call to check everything went smoothly and you’re happy with your upgrade." },
      ],
    },
    {
      type: "features",
      tone: "mist",
      eyebrow: "Who does the work",
      title: "A crew you can trust in your home",
      columns: 3,
      items: [
        {
          icon: "award",
          title: "Licensed trades",
          text: "Assessors, installers, licensed plumbers and A-grade electricians make up our field crew.",
        },
        {
          icon: "shield",
          title: "Fully insured",
          text: "All of our electricians and installers carry full business insurance.",
        },
        {
          icon: "users",
          title: "Auzbright trained",
          text: "Every crew member completes thorough Auzbright training and carries Auzbright photo ID.",
        },
        {
          icon: "doc",
          title: "Program rules followed",
          text: "Installers follow the requirements of the VEU program in Victoria and the ESS in New South Wales.",
        },
        {
          icon: "phone",
          title: "Follow-up call",
          text: "After installation, one of our team calls to make sure everything meets your satisfaction.",
        },
        {
          icon: "heart",
          title: "Respect for your home",
          text: "Courteous, tidy crews who explain what they’re doing before they start.",
        },
      ],
    },
    {
      type: "split",
      eyebrow: "On the day",
      title: "What to expect at installation",
      body: [
        "Before work starts, your installer explains the job and any equipment needed, such as lifts, extra electrical devices or lighting accessories.",
        "Timing depends on the system and your site. A like-for-like hot water replacement or a set of LED downlights is usually quicker than a ducted air conditioning or solar and battery install.",
      ],
      bullets: [
        "Clear access to the work area and switchboard",
        "Tell us about pets, parking or access codes when you book",
        "Ask your installer anything before they leave",
      ],
      image: {
        src: "/assets/images/heat-pump-plumbing-gauges.webp",
        alt: "Close-up of pressure gauges and valves on heat pump plumbing",
        width: 636,
        height: 500,
      },
      flip: true,
    },
    {
      type: "cards",
      tone: "mist",
      eyebrow: "What we install",
      title: "Upgrades we install",
      items: [
        {
          label: "Hot water",
          title: "Heat pump hot water",
          href: "/products/heat-pump/",
          image: { src: "/assets/images/svc-heat-pump.webp", alt: "", width: 900, height: 450 },
        },
        {
          label: "Heating and cooling",
          title: "Air conditioning",
          href: "/products/air-conditioner/",
          image: { src: "/assets/images/svc-air-conditioner.webp", alt: "", width: 900, height: 450 },
        },
        {
          label: "Energy",
          title: "Solar and battery",
          href: "/solar-battery-solutions/",
          image: { src: "/assets/images/svc-solar-battery.webp", alt: "", width: 900, height: 450 },
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "Installation FAQs",
      title: "Common questions",
      items: [
        {
          q: "How long does installation take?",
          a: ["Timing depends on the system and your site. We’ll confirm a date and expected timeframe when you book."],
        },
        {
          q: "Do I need to be home?",
          a: ["Someone needs to give our installer access to the property. We’ll confirm the access arrangements with you when you book."],
        },
        {
          q: "What if something isn’t right after installation?",
          a: [
            "Call us on [03 8609 5195](tel:0386095195) or use our [warranty claim form](/claim-warranty/), and we’ll arrange the next step.",
          ],
        },
      ],
    },
  ],
};

export default data;
