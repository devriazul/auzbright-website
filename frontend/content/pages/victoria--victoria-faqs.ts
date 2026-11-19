import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/victoria/victoria-faqs/",
  seoTitle: "Victoria FAQs | Heat Pumps, Air Con and Upgrade Questions Answered Clearly",
  description:
    "Read answers to common Victoria energy upgrade questions about heat pump, air conditioning, eligibility, installation and support for VIC homes.",
  crumbs: [{ label: "Victoria", href: "/victoria/" }, { label: "Victoria FAQs" }],
  hero: {
    eyebrow: "Victoria FAQs",
    title: "Answers to your questions: {Victoria FAQs for energy efficiency upgrades.}",
    lead: "Your guide to energy savings and sustainability in Victoria.",
  },
  sections: [
    {
      type: "faq",
      eyebrow: "Common questions",
      title: "Frequently asked questions",
      items: [
        {
          q: "How does it work?",
          a: [
            "We work with you to reduce costs while minimising your ecological footprint and carbon emissions. Through the VEET Plan, we provide free installation of water- and energy-saving appliances at your home or business.",
            "Contact us by phone on [03 8609 5195](tel:0386095195), by email at [admin@auzbright.com.au](mailto:admin@auzbright.com.au), or through our [contact form](/contact/) to discuss your needs and schedule an appointment. Our electricians or installers will then visit your property at a convenient time to install the new appliances. After installation, one of our friendly staff will follow up to make sure everything meets your satisfaction.",
          ],
        },
        {
          q: "What is the rule?",
          a: [
            "One does not exist. Truly! There are no additional costs or undisclosed fees, and you are not required to select any particular products from our range (you can select any number of different product types for installation).",
            "We adhere completely to the VEU regulations and uphold the highest standards. We exclusively employ A-Grade electricians and have a skilled, effective crew. All of our products are of the highest calibre and have undergone rigorous testing. All the light globes and LED downlights we install come with a manufacturer’s warranty.",
            "Please call us on [03 8609 5195](tel:0386095195) if you have any queries or issues regarding our products.",
          ],
        },
        {
          q: "Who does the work?",
          a: [
            "Auzbright takes pride in keeping a crew that is cordial, courteous, effective and knowledgeable. A number of seasoned installers and electricians make up our field crew. All of our team members receive thorough Auzbright training, act responsibly, and strictly adhere to the requirements of the Victorian Government’s VEU Plan.",
            "All of our electricians and installers have full business insurance and are registered under the VEU Scheme. For your peace of mind, each member of our crew carries their Auzbright photo ID, and all of our electricians are properly licensed A-Grade electricians.",
            "Before installation, we will explain any equipment needed for the task, such as lifts, additional electrical devices and lighting accessories.",
          ],
        },
        {
          q: "Is my home or business eligible?",
          a: [
            "To be eligible under the VEU Scheme:",
            "Your home or place of business must be in Victoria.",
            "The products you want installed must not have previously been installed at that address under the VEU Plan, and the existing products you want replaced must not already be energy- or water-saving products.",
            "For instance, a new water-saving showerhead cannot be installed in place of an old water-saving showerhead under the VEU Program. Property owners, bodies corporate and renters alike are eligible. It doesn’t matter if you’ve already had VEET Scheme products installed, even if it was at a different house.",
          ],
        },
      ],
    },
  ],
};

export default data;
