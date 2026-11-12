import type { PageData } from "@/lib/page-types";

const APPLY = "mailto:admin@auzbright.com.au?subject=Careers%20at%20Auzbright";

const data: PageData = {
  path: "/about/work-with-auzbright/",
  seoTitle: "Careers at Auzbright | Join Australia's Home Energy Upgrade Solutions Team",
  description:
    "Explore career opportunities at Auzbright and join a team helping Australians access energy efficient upgrades and cleaner technology solutions.",
  crumbs: [{ label: "About", href: "/about/" }, { label: "Careers" }],
  hero: {
    eyebrow: "Careers",
    title: "Hey there, {eco-champion!}",
    lead: "No capes required (at least for now), but we’re all about making positive changes in the world.",
    image: {
      src: "/assets/images/pages/blog-img3.webp",
      alt: "A smiling woman holding a solar panel in a sunlit garden",
      width: 414,
      height: 300,
    },
    primary: { label: "Apply now", href: APPLY },
    secondary: { label: "About Auzbright", href: "/about/" },
  },
  sections: [
    {
      type: "split",
      eyebrow: "Our team",
      title: "Bringing together the right kind of people",
      body: [
        "From our small start in 2007 with just two passionate people in Melbourne, Auzbright has been all about bringing together the right kind of people: people who care deeply about our planet and climate, and are dedicated to combating the impacts of human-induced climate change. Fast forward to today, and we’ve grown to a team of around 80 amazing individuals spread across four Australian states.",
      ],
      bullets: [
        "Our team speaks 15 different languages, creating a diverse and vibrant environment.",
        "We have a mix of fresh perspectives from newcomers and seasoned guidance from experienced leaders.",
        "We’re proud to defy the gender gap that’s often seen in our industry.",
      ],
    },
    {
      type: "split",
      tone: "mist",
      flip: true,
      eyebrow: "Our mission",
      title: "Making a difference together!",
      body: [
        "Everything we do is geared towards fighting climate change. Whether it’s cutting down on energy use, generating clean energy, or helping trade energy certificates, we’re all about shrinking Australia’s carbon footprint. Let’s work together towards reaching our goal of net zero emissions by 2050!",
      ],
      image: {
        src: "/assets/images/pages/veu-img.webp",
        alt: "Three workers in hard hats raising joined hands in front of wind turbines",
        width: 600,
        height: 500,
      },
      cta: { label: "Apply now", href: APPLY },
    },
    {
      type: "features",
      eyebrow: "Why join us",
      title: "What are your goals?",
      columns: 2,
      items: [
        {
          icon: "leaf",
          title: "I want to make a positive impact.",
          text: "Join us, and every day you’ll contribute to the fight against climate change by reducing CO2 emissions.",
        },
        {
          icon: "bulb",
          title: "I want opportunities to develop in my role.",
          text: "Our company prioritises learning and growth. You’ll have access to various training options, both online and in person, including webinars and conferences.",
        },
        {
          icon: "chart",
          title: "I want to advance within the company.",
          text: "We believe in promoting from within. Our internal-first approach and referral programs ensure that you’ll have the chance to move up the ladder before we consider external candidates. Many of our team members, known as Ecovengers, have advanced their careers across different departments while expanding their skills.",
        },
        {
          icon: "clock",
          title: "I want flexibility to balance work and personal life.",
          text: "We value results over time spent in the office. That’s why we offer hybrid working options and flexible hours for everyone on our team. Your happiness, productivity and wellbeing matter to us.",
        },
      ],
    },
    {
      type: "steps",
      tone: "mist",
      eyebrow: "How we hire",
      title: "Our hiring process",
      items: [
        {
          title: "Apply",
          text: "Simply send us your resume and a cover letter explaining why you’re the perfect fit for the job. You can do this by email, LinkedIn or Seek.",
        },
        {
          title: "Shortlist + video chat",
          text: "If your application catches our eye, we’ll invite you to a quick 10-15 minute video chat to discuss your application further.",
        },
        {
          title: "Interview",
          text: "Next, we’ll invite you to our office to meet with your potential manager and our HR Manager. This is a chance for us to talk about the role, your experience, and how well you’d fit in.",
        },
        {
          title: "Second interview (if needed)",
          text: "For some positions, we might want to dive deeper into certain aspects of the role or answer any lingering questions. If so, we’ll schedule a second interview.",
        },
        {
          title: "Job offer",
          text: "If everything goes well, we’ll send you a formal job offer along with the employment agreement and start date. This will be based on discussions from your first or second interview.",
        },
        {
          title: "Timeframe",
          text: "We review applications as they come in and aim to make hiring decisions within two weeks of the initial video chat. We’ll also work with you to find a start date that suits your schedule.",
        },
      ],
    },
    {
      type: "split",
      id: "apply",
      eyebrow: "Join the team",
      title: "Apply now",
      body: [
        "To apply, email your CV and a cover letter explaining why you’re the perfect fit for the job to [admin@auzbright.com.au](mailto:admin@auzbright.com.au?subject=Careers%20at%20Auzbright).",
      ],
      cta: { label: "Email your application", href: APPLY },
    },
  ],
  cta: false,
};

export default data;
