import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/nsw/energy-savings-scheme-ess/",
  seoTitle: "Energy Savings Scheme | ESS Program Support for Homes and Business NSW",
  description:
    "Learn how the NSW Energy Savings Scheme supports eligible homes and businesses with energy efficient upgrades, opportunities and guidance today.",
  crumbs: [{ label: "NSW", href: "/nsw/" }, { label: "Energy Savings Scheme" }],
  hero: {
    eyebrow: "Energy Savings Scheme (ESS)",
    title: "Unlock savings, empower sustainability: {the NSW Energy Savings Scheme.}",
    lead: "Join the movement to reduce energy consumption, save money, and foster environmental responsibility.",
    image: {
      src: "/assets/images/pages/ess-img.webp",
      alt: "Four technicians in hi-vis and hard hats standing below a wind turbine",
      width: 600,
      height: 580,
    },
  },
  sections: [
    {
      type: "split",
      eyebrow: "The scheme",
      title: "Introduction to ESS",
      body: [
        "The Energy Savings Scheme (ESS) in New South Wales incentivises businesses to invest in energy-saving initiatives, reducing electricity consumption and lowering energy bills.",
        "By supporting the installation, improvement, or replacement of energy-efficient equipment, the scheme promotes energy conservation across various sectors.",
      ],
      cta: { label: "Request a quote", href: "/enquire-now/" },
    },
    {
      type: "split",
      tone: "mist",
      flip: true,
      eyebrow: "How it works",
      title: "Understanding the HEER method",
      body: [
        "The Home Energy Efficiency Retrofits (HEER) approach, part of the ESS Rule, allows upfront recognition of energy savings resulting from upgrades at residential and small business sites.",
        "Accredited Certificate Providers (ACPs) deliver HEER activities, facilitating energy efficiency upgrades like lighting enhancements, equipment replacements, and draught proofing.",
      ],
      image: {
        src: "/assets/images/pages/ess-img1.webp",
        alt: "Three workers in hard hats holding raised hands as they walk towards wind turbines",
        width: 600,
        height: 500,
      },
      cta: { label: "Request a quote", href: "/enquire-now/" },
    },
    {
      type: "split",
      eyebrow: "Our services",
      title: "Benefits of energy-efficient lighting",
      bullets: [
        "**Significant cost savings:** Energy-efficient lighting technology can reduce lighting expenditure by up to 85% annually per globe.",
        "**Enhanced efficiency:** Advanced lighting technologies like LEDs and CFLs optimise energy consumption, providing effective illumination while reducing energy bills.",
        "**Lower maintenance costs:** The extended lifespan of new lighting technology not only lowers energy bills but also reduces maintenance expenses.",
      ],
      image: {
        src: "/assets/images/pages/benefit-img2.webp",
        alt: "Four people in hard hats reviewing a large plan beneath a wind turbine",
        width: 600,
        height: 450,
      },
    },
    {
      type: "steps",
      tone: "mist",
      eyebrow: "Getting started",
      title: "How easy is it?",
      items: [
        {
          title: "Financial incentives",
          text: "The NSW Energy Savings Scheme (ESS) offers financial incentives to households and businesses for installing energy-efficient machinery and appliances.",
        },
        {
          title: "Energy Savings Certificates",
          text: "Accredited Certificate Providers (ACPs) generate Energy Savings Certificates (ESCs) for each hypothetical megawatt hour (MWh) of energy saved by eligible projects.",
        },
        {
          title: "Start saving",
          text: "Take advantage of government incentives with no catch, saving money on electricity costs while contributing to environmental sustainability.",
        },
      ],
    },
  ],
};

export default data;
