/**
 * Our Team page data (app/about/our-team/page.tsx).
 *
 * SAMPLE DATA: every name, role and bio below is a placeholder, not a real staff member.
 * Replace them with the real team before launch, then set TEAM_IS_SAMPLE to false so the
 * page is indexed by search engines and listed in sitemap.xml.
 *
 * To add a photo, put a square WebP (at least 480×480) in public/assets/images/team/ and set
 * `photo` to its file name. Without a photo the card shows the person's initials.
 */
export const TEAM_IS_SAMPLE = true;

export type Department = "Customer care" | "Installations" | "Operations & compliance" | "Sales & assessments";

export interface Member {
  name: string;
  role: string;
  /** One or two sentences, written in the third person. */
  bio: string;
  /** Leadership only; shown on the larger leadership cards. */
  since?: string;
  department?: Department;
  /** Languages other than English, shown under the bio. */
  languages?: string[];
  /** File name in public/assets/images/team/, e.g. "alex-morgan.webp". */
  photo?: string;
}

export const LEADERSHIP: Member[] = [
  {
    name: "Alex Morgan",
    role: "Managing Director",
    since: "With Auzbright since 2017",
    bio: "Sets the company's direction and looks after our partnerships with manufacturers and the VEU and ESS programs.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Operations",
    since: "With Auzbright since 2018",
    bio: "Runs scheduling, installation quality and scheme paperwork, so every job is finished and lodged on time.",
  },
  {
    name: "Daniel Nguyen",
    role: "Installations Manager",
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
    department: "Customer care",
    bio: "Answers your first call and stays in touch until the job is done.",
    languages: ["French"],
  },
  {
    name: "Omar Haddad",
    role: "Customer Care Officer",
    department: "Customer care",
    bio: "Books appointments and follows up on warranty requests.",
    languages: ["Arabic"],
  },
  {
    name: "Mei Lin Chen",
    role: "Customer Care Officer",
    department: "Customer care",
    bio: "Helps customers with eligibility questions and documents.",
    languages: ["Mandarin", "Cantonese"],
  },
  {
    name: "James O'Connor",
    role: "Energy Assessor",
    department: "Sales & assessments",
    bio: "Visits homes and businesses to recommend the right upgrade.",
  },
  {
    name: "Ravi Patel",
    role: "Commercial Sales Consultant",
    department: "Sales & assessments",
    bio: "Plans commercial heat pump and lighting projects with business owners.",
    languages: ["Hindi", "Gujarati"],
  },
  {
    name: "Lucy Tran",
    role: "Residential Sales Consultant",
    department: "Sales & assessments",
    bio: "Prepares written quotes and explains the incentives that apply.",
    languages: ["Vietnamese"],
  },
  {
    name: "Ben Walker",
    role: "Senior Electrician",
    department: "Installations",
    bio: "A-grade electrician leading heat pump and solar installs in Victoria.",
  },
  {
    name: "Marco Rossi",
    role: "Licensed Plumber",
    department: "Installations",
    bio: "Fits hot water systems and water filters to Australian Standards.",
    languages: ["Italian"],
  },
  {
    name: "Ahmed Rahman",
    role: "Air Conditioning Technician",
    department: "Installations",
    bio: "Installs split and ducted systems across Sydney and Melbourne.",
    languages: ["Bengali"],
  },
  {
    name: "Emily Clarke",
    role: "Compliance Officer",
    department: "Operations & compliance",
    bio: "Checks every job against VEU and ESS rules before it is lodged.",
  },
  {
    name: "Hassan Ali",
    role: "Scheduling Coordinator",
    department: "Operations & compliance",
    bio: "Matches installers to jobs and keeps customers updated on timing.",
    languages: ["Urdu"],
  },
  {
    name: "Sophie Williams",
    role: "Accounts Officer",
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
