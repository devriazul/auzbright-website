import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/nsw/energy-efficient-hot-water-solutions-for-businesses/",
  seoTitle: "Commercial Heat Pump NSW | Efficient Hot Water Solutions for Businesses AU",
  description:
    "Discover commercial heat pump hot water solutions for NSW businesses with support for eligibility, installation planning and energy savings now.",
  crumbs: [{ label: "NSW", href: "/nsw/" }, { label: "Commercial heat pump" }],
  hero: {
    eyebrow: "Energy-efficient hot water solutions for businesses",
    title: "Upgrade your business, lower your costs: {commercial hot water system program.}",
    lead: "Join the energy program for businesses, save money, and go green.",
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
      type: "split",
      eyebrow: "Rebates",
      title: "Claim your government rebate",
      body: [
        "Get started with your minimum co-payment hot water system upgrade and claim your government rebate today.",
        "Join the state’s energy program, confirm your eligibility, and we’ll reach out with all the details you need to proceed.",
      ],
      cta: { label: "Request a quote", href: "/enquire-now/" },
    },
    {
      type: "split",
      tone: "mist",
      flip: true,
      eyebrow: "Federal incentive",
      title: "Renewable Energy Certificate program",
      body: [
        "Residents in Victoria and New South Wales meeting eligibility criteria can access the Federal Government’s Renewable Energy Certificate program.",
        "If eligible, we can replace your old electric hot water system with a modern, energy-efficient electric heat pump system at no cost to you.",
      ],
      image: {
        src: "/assets/images/pages/why-upgrade-img2.webp",
        alt: "Two technicians in hard hats and hi-vis workwear on site, one working overhead with a tool",
        width: 600,
        height: 500,
      },
    },
    {
      type: "products",
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
      type: "split",
      tone: "mist",
      eyebrow: "Benefits",
      title: "Benefits of electric heat pump systems",
      bullets: [
        "**Energy efficiency:** Modern heat pump systems use up to 75% less energy than traditional electric hot water systems, resulting in significant cost savings.",
        "**Financial savings:** Average households can save approximately $700-$900 annually on energy bills with these cutting-edge systems.",
        "**Government subsidies:** Eligible customers can benefit from government subsidies covering installation and compliance fees, ensuring a hassle-free upgrade process.",
      ],
      image: {
        src: "/assets/images/pages/benefit-img1.webp",
        alt: "Two engineers in hard hats and hi-vis vests looking at a laptop at dusk",
        width: 600,
        height: 500,
      },
    },
    {
      type: "features",
      eyebrow: "At a glance",
      title: "Key points",
      columns: 3,
      items: [
        {
          icon: "bolt",
          title: "Efficiency",
          text: "Upgrading to a split system aircon improves energy efficiency, reducing your carbon footprint and energy bills.",
        },
        {
          icon: "check",
          title: "Eligibility",
          text: "Check if you qualify for rebates and subsidies under the government program.",
        },
        {
          icon: "leaf",
          title: "Benefits",
          text: "Enjoy enhanced comfort and reduced environmental impact with energy-efficient cooling solutions.",
        },
        {
          icon: "wrench",
          title: "Installation",
          text: "Our expert team ensures hassle-free installation, complying with all regulations and standards.",
        },
        {
          icon: "star",
          title: "Functions",
          text: "Discover the advanced features and functionalities of modern split system air conditioning units.",
        },
        {
          icon: "dollar",
          title: "Reduced costs",
          text: "Government subsidies cover installation and compliance fees, making the upgrade cost-effective for homeowners.",
        },
      ],
    },
    {
      type: "reviews",
      tone: "mist",
      eyebrow: "Customer feedback",
      title: "What people say about us",
    },
  ],
};

export default data;
