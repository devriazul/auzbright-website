/**
 * Our Team page data (app/about/our-team/page.tsx).
 *
 * SAMPLE DATA: every name, role and bio below is a placeholder, not a real staff member.
 * Replace them with the real team before launch, then set TEAM_IS_SAMPLE to false so the
 * page is indexed by search engines and listed in sitemap.xml.
 *
 * Each card shows only the photo, name and role. To add a photo, put a portrait WebP
 * (4:5, at least 480×600) in public/assets/images/team/ and set `photo` to its file name.
 * Without a photo the card shows the person's initials.
 *
 * PLACEHOLDER PHOTOS: every `placeholder-*.webp` is a stock photo of someone who does not work
 * at Auzbright (Unsplash License; credits in frontend/README.md, "Our Team placeholder photos").
 * They are for the design preview only. Replace each with the person's real photo, and delete
 * the placeholder, before launch.
 */
export const TEAM_IS_SAMPLE = true;

export type Department = "Customer care" | "Installations" | "Operations & compliance" | "Sales & assessments";

export interface Member {
  name: string;
  role: string;
  /** One or two sentences, written in the third person. Not shown on the cards; kept for a future profile view. */
  bio: string;
  /** Leadership only. Not shown on the cards. */
  since?: string;
  department?: Department;
  /** Languages other than English. Not shown on the cards. */
  languages?: string[];
  /** File name in public/assets/images/team/, e.g. "alex-morgan.webp". */
  photo?: string;
}

export const LEADERSHIP: Member[] = [
  {
    name: "Alex Morgan",
    role: "Managing Director",
    photo: "placeholder-alex-morgan.webp",
    since: "With Auzbright since 2017",
    bio: "Sets the company's direction and looks after our partnerships with manufacturers and the VEU and ESS programs.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Operations",
    photo: "placeholder-priya-sharma.webp",
    since: "With Auzbright since 2018",
    bio: "Runs scheduling, installation quality and scheme paperwork, so every job is finished and lodged on time.",
  },
  {
    name: "Daniel Nguyen",
    role: "Installations Manager",
    photo: "placeholder-daniel-nguyen.webp",
    since: "With Auzbright since 2019",
    bio: "Leads our installer and electrician crews across Victoria and New South Wales, and signs off every site.",
  },
];

export const DEPARTMENTS: Department[] = [
  "Customer care",
  "Sales & assessments",
  "Installations",
  "Operations & compliance",
];

export const MEMBERS: Member[] = [
  {
    name: "Sarah Mitchell",
    role: "Customer Care Lead",
    photo: "placeholder-sarah-mitchell.webp",
    department: "Customer care",
    bio: "Answers your first call and stays in touch until the job is done.",
    languages: ["French"],
  },
  {
    name: "Omar Haddad",
    role: "Customer Care Officer",
    photo: "placeholder-omar-haddad.webp",
    department: "Customer care",
    bio: "Books appointments and follows up on warranty requests.",
    languages: ["Arabic"],
  },
  {
    name: "Mei Lin Chen",
    role: "Customer Care Officer",
    photo: "placeholder-mei-lin-chen.webp",
    department: "Customer care",
    bio: "Helps customers with eligibility questions and documents.",
    languages: ["Mandarin", "Cantonese"],
  },
  {
    name: "James O'Connor",
    role: "Energy Assessor",
    photo: "placeholder-james-o-connor.webp",
    department: "Sales & assessments",
    bio: "Visits homes and businesses to recommend the right upgrade.",
  },
  {
    name: "Ravi Patel",
    role: "Commercial Sales Consultant",
    photo: "placeholder-ravi-patel.webp",
    department: "Sales & assessments",
    bio: "Plans commercial heat pump and lighting projects with business owners.",
    languages: ["Hindi", "Gujarati"],
  },
  {
    name: "Lucy Tran",
    role: "Residential Sales Consultant",
    photo: "placeholder-lucy-tran.webp",
    department: "Sales & assessments",
    bio: "Prepares written quotes and explains the incentives that apply.",
    languages: ["Vietnamese"],
  },
  {
    name: "Ben Walker",
    role: "Senior Electrician",
    photo: "placeholder-ben-walker.webp",
    department: "Installations",
    bio: "A-grade electrician leading heat pump and solar installs in Victoria.",
  },
  {
    name: "Marco Rossi",
    role: "Licensed Plumber",
    photo: "placeholder-marco-rossi.webp",
    department: "Installations",
    bio: "Fits hot water systems and water filters to Australian Standards.",
    languages: ["Italian"],
  },
  {
    name: "Ahmed Rahman",
    role: "Air Conditioning Technician",
    photo: "placeholder-ahmed-rahman.webp",
    department: "Installations",
    bio: "Installs split and ducted systems across Sydney and Melbourne.",
    languages: ["Bengali"],
  },
  {
    name: "Emily Clarke",
    role: "Compliance Officer",
    photo: "placeholder-emily-clarke.webp",
    department: "Operations & compliance",
    bio: "Checks every job against VEU and ESS rules before it is lodged.",
  },
  {
    name: "Hassan Ali",
    role: "Scheduling Coordinator",
    photo: "placeholder-hassan-ali.webp",
    department: "Operations & compliance",
    bio: "Matches installers to jobs and keeps customers updated on timing.",
    languages: ["Urdu"],
  },
  {
    name: "Sophie Williams",
    role: "Accounts Officer",
    photo: "placeholder-sophie-williams.webp",
    department: "Operations & compliance",
    bio: "Handles invoices, payments and certificate reconciliation.",
  },
];

/** "Mei Lin Chen" → "MC"; "James O'Connor" → "JO". */
export function initials(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

/** URL-safe key for a department, used by the filter buttons. */
export function deptKey(d: Department): string {
  return d.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
}
