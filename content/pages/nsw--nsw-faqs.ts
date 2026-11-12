import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/nsw/nsw-faqs/",
  seoTitle: "FAQs | Heat Pump, ESS and Upgrade Questions Answered Clearly for Homes",
  description:
    "Find answers to NSW energy upgrade FAQs, covering heat pumps, ESS eligibility, installation steps, business support and savings potential today.",
  crumbs: [{ label: "NSW", href: "/nsw/" }, { label: "NSW FAQs" }],
  hero: {
    eyebrow: "NSW FAQs: your energy-saving queries answered",
    title: "Unlock savings, empower sustainability: {Auzbright NSW FAQs.}",
    lead: "Discover how to save money, reduce carbon emissions, and leave a smaller ecological footprint.",
  },
  sections: [
    {
      type: "faq",
      eyebrow: "NSW FAQs",
      title: "Your questions answered",
      items: [
        {
          q: "How does it work?",
          a: [
            "By providing you with incredible savings on the supply and installation of energy-saving and water-saving devices in your home or small company, we help you save money, reduce your carbon emissions, and leave a smaller ecological impact.",
            "Contact us to discuss your needs or get a savings assessment: call [03 8609 5195](tel:0386095195) or email [admin@auzbright.com.au](mailto:admin@auzbright.com.au). We can give you an assessment right away on the phone.",
            "Book your installation and we will arrange a suitable time for one of our installers to fit your new products.",
            "After the installation, you will start saving money right away. Our friendly customer support staff will give you a call to check that everything went smoothly and that you are happy with your new products.",
          ],
        },
        {
          q: "Why are the offers different for Victorian and New South Wales premises?",
          a: [
            "The amount of value we can generate from the regulated activities is set by the regulatory frameworks that apply to premises in each state. The average fuel type burned to generate electricity in VIC is more CO2-intensive than in NSW, and the long history of the NSW scheme has reduced savings opportunities, such as by enabling the free distribution of about 26.9 million CFL light globes in 2004–2011. As a result, the value we can create in VIC is significantly higher than in NSW.",
            "For New South Wales premises, we still ensure you get the best deal on energy-efficient products, so it’s like getting the installation free!",
          ],
        },
        {
          q: "Who does the work?",
          a: [
            "Auzbright takes pride in having a crew that is welcoming, courteous, effective, and professional. Our field staff consists of assessors, installers, plumbers, and electricians who are trained, licensed, and experienced.",
            "Our entire crew goes through extensive Auzbright training. All contractors are fully insured for their businesses. For your peace of mind, all of our contractors are fully licensed and carry Auzbright photo ID.",
          ],
        },
      ],
    },
  ],
};

export default data;
