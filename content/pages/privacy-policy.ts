import type { PageData } from "@/lib/page-types";

const data: PageData = {
  path: "/privacy-policy/",
  seoTitle: "Privacy Policy - Auzbright",
  description:
    "Read the Auzbright privacy policy: how we collect, use, disclose and safeguard your personal information under the Privacy Act 1988 (Cth).",
  crumbs: [{ label: "Privacy policy" }],
  hero: {
    eyebrow: "Legal",
    title: "Privacy {policy}",
    primary: { label: "Contact us", href: "/contact/" },
  },
  sections: [
    {
      type: "prose",
      blocks: [
        {
          heading: "Introduction",
          paragraphs: [
            "AUZBright (“we”, “our”, “us”) is committed to protecting your privacy in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information.",
          ],
        },
        {
          heading: "Collection of Personal Information",
          paragraphs: ["We may collect the following types of personal information:"],
          bullets: [
            "Name",
            "Contact details (email address, phone number, postal address)",
            "Payment information",
            "Usage data (e.g., IP address, browser type)",
          ],
        },
        {
          heading: "Use of Personal Information",
          paragraphs: ["We collect and use your personal information for the following purposes:"],
          bullets: [
            "To process and fulfill your orders",
            "To communicate with you regarding your purchases and inquiries",
            "To improve our products and services",
            "To comply with legal and regulatory requirements",
          ],
        },
        {
          heading: "Disclosure of Personal Information",
          paragraphs: ["We may disclose your personal information to:"],
          bullets: [
            "Third-party service providers who assist us in operating our business (e.g., payment processors, shipping companies)",
            "Legal authorities if required by law",
            "Any other entities with your consent",
          ],
        },
        {
          heading: "Security of Personal Information",
          paragraphs: [
            "We take reasonable steps to protect your personal information from misuse, loss, unauthorized access, modification, or disclosure. This includes using secure servers and encryption technologies.",
          ],
        },
        {
          heading: "Access to and Correction of Personal Information",
          paragraphs: [
            "You have the right to access and correct the personal information we hold about you. To do so, please contact us at [contact email]. We will respond to your request within a reasonable timeframe.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze website traffic and usage. You can disable cookies through your browser settings, but this may affect your ability to use certain features of our website.",
          ],
        },
        {
          heading: "Changes to this Privacy Policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.",
          ],
        },
        {
          heading: "Contact Us",
          paragraphs: [
            "If you have any questions or concerns about this Privacy Policy, please contact us at:",
            "**AUZBright** Email: [info@auzbright.com.au](mailto:info@auzbright.com.au)",
          ],
        },
      ],
    },
  ],
  cta: false,
};

export default data;
