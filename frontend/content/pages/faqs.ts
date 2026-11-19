import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/faqs/",
  seoTitle: "FAQs | Incentives, Costs, Installation and Warranty Questions | Auzbright",
  description:
    "Straight answers about government incentives, upgrade costs, installation, warranty and the areas Auzbright services across Victoria and NSW.",
  crumbs: [{ label: "FAQs" }],
  hero: {
    eyebrow: "FAQs",
    title: "Good questions, {straight answers.}",
    lead: "The things customers ask us most about incentives, costs, installation and warranty. Can’t find your answer? Our team is available Mon–Fri, 9am–5pm.",
    primary: { label: "Call 03 8609 5195", href: "tel:0386095195" },
    secondary: { label: "Contact us", href: "/contact/" },
  },
  sections: [
    {
      type: "faq",
      id: "incentives",
      eyebrow: "Incentives and costs",
      title: "Eligibility, rebates and pricing",
      items: [
        {
          q: "Am I eligible for a government incentive?",
          a: [
            "It depends on your state and postcode, your property, the product you choose and the scheme rules at the time of installation. Our [free eligibility check](/#check) looks at all of this before you commit.",
          ],
        },
        {
          q: "How much will my upgrade cost?",
          a: [
            "It depends on the product, your home and any incentive you qualify for. You’ll get a written, itemised quote before any work starts, with no obligation.",
          ],
        },
        {
          q: "How do rebates and discounts work?",
          a: [
            "Most state scheme incentives are applied as a point-of-sale discount by an accredited provider, so you don’t have to claim them yourself. We show any discount as its own line on your quote.",
          ],
        },
        {
          q: "Why are the offers different in Victoria and New South Wales?",
          a: [
            "Each state runs its own program with its own rules: the [Victorian Energy Upgrades (VEU)](/victoria/victorian-energy-upgrades/) program and the [NSW Energy Savings Scheme (ESS)](/nsw/energy-savings-scheme-ess/). The value each program can provide differs, so offers differ between the states.",
          ],
        },
        {
          q: "Do you work with landlords, property managers and businesses?",
          a: ["Yes. Rental and commercial eligibility rules differ, so we check each property individually."],
        },
      ],
    },
    {
      type: "faq",
      id: "installation",
      tone: "mist",
      eyebrow: "Installation",
      title: "Booking and installation",
      items: [
        {
          q: "How long does installation take?",
          a: ["Timing depends on the system and your site. We’ll confirm a date and expected timeframe when you book."],
        },
        {
          q: "Who does the work?",
          a: [
            "Our field crew is made up of trained assessors, installers, licensed plumbers and A-grade electricians. All are fully insured and carry Auzbright photo ID.",
            "Read more about [how installation works](/installation/).",
          ],
        },
        {
          q: "Which areas do you service?",
          a: [
            "Our office is in Derrimut, Victoria, and we install across Victoria and New South Wales. Enter your postcode in the [eligibility check](/#check) and we’ll confirm availability for your area.",
          ],
        },
        {
          q: "Which upgrades do you offer?",
          a: [
            "Residential heat pumps, air conditioners, solar and battery, EV chargers, LED lighting and water filters, in Victoria and NSW. Ask us about other eligible efficiency upgrades, or browse [all products](/products/).",
          ],
        },
      ],
    },
    {
      type: "faq",
      id: "warranty",
      eyebrow: "After installation",
      title: "Warranty and support",
      items: [
        {
          q: "What warranty comes with my product?",
          a: [
            "Warranty terms depend on the product and its manufacturer, and are listed on your quote. Many of the products we install show their warranty on their [product page](/products/).",
          ],
        },
        {
          q: "Something isn’t working. What should I do?",
          a: [
            "Use our [warranty claim form](/claim-warranty/) or call [03 8609 5195](tel:0386095195). Tell us the address, the product and what’s happening, and we’ll arrange the next step.",
          ],
        },
      ],
    },
    {
      type: "cards",
      tone: "mist",
      eyebrow: "By state",
      title: "Questions about your state’s program",
      items: [
        {
          label: "Victoria",
          title: "Victoria FAQs",
          text: "The VEU program, eligibility and who does the work.",
          href: "/victoria/victoria-faqs/",
          image: {
            src: "/assets/images/about-melbourne.webp",
            alt: "The Melbourne city skyline on a sunny day",
            width: 636,
            height: 360,
          },
        },
        {
          label: "New South Wales",
          title: "NSW FAQs",
          text: "The Energy Savings Scheme and how it works.",
          href: "/nsw/nsw-faqs/",
          image: {
            src: "/assets/images/about-sydney.webp",
            alt: "Sydney Harbour and the Harbour Bridge at sunset",
            width: 636,
            height: 360,
          },
        },
      ],
    },
  ],
};

export default data;
