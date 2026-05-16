// lib/data.ts — All static content for JG University landing page

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export const stats: Stat[] = [
  { value: "10,000+", label: "Students Enrolled", icon: "Users" },
  { value: "100+", label: "Academic Programs", icon: "BookOpen" },
  { value: "95%", label: "Placement Rate", icon: "TrendingUp" },
  { value: "50+", label: "Research Centers", icon: "Microscope" },
];

export interface AboutStat {
  value: string;
  label: string;
}

export const aboutStats: AboutStat[] = [
  { value: "25+", label: "Years of Excellence" },
  { value: "500+", label: "Expert Faculty" },
  { value: "120+", label: "Industry Partners" },
  { value: "45+", label: "Countries Represented" },
];

export interface Program {
  icon: string;
  title: string;
  description: string;
  badge: string;
  color: string;
  students: string;
}

export const programs: Program[] = [
  {
    icon: "Cpu",
    title: "Engineering",
    description:
      "Lead innovation with our cutting-edge B.Tech and M.Tech programs across Computer Science, Mechanical, Civil, and Electrical streams.",
    badge: "Most Popular",
    color: "from-blue-500 to-cyan-400",
    students: "3,200+",
  },
  {
    icon: "BarChart3",
    title: "Business",
    description:
      "Develop strategic thinking and leadership skills with our MBA and BBA programs, designed with real-world case studies.",
    badge: "High ROI",
    color: "from-violet-500 to-purple-400",
    students: "2,100+",
  },
  {
    icon: "Palette",
    title: "Design",
    description:
      "Blend creativity with technology in our UI/UX, Graphic Design, and Industrial Design programs taught by industry veterans.",
    badge: "Creative",
    color: "from-pink-500 to-rose-400",
    students: "890+",
  },
  {
    icon: "FlaskConical",
    title: "Science",
    description:
      "Explore the frontiers of knowledge with research-intensive programs in Physics, Chemistry, Biology, and Mathematics.",
    badge: "Research First",
    color: "from-emerald-500 to-teal-400",
    students: "1,450+",
  },
  {
    icon: "Code2",
    title: "Technology",
    description:
      "Master AI, Data Science, Cybersecurity, and Cloud Computing through hands-on labs and industry-aligned curriculum.",
    badge: "Future Ready",
    color: "from-orange-500 to-amber-400",
    students: "1,800+",
  },
  {
    icon: "Music",
    title: "Arts & Humanities",
    description:
      "Cultivate critical thinking and cultural literacy through our diverse programs in Literature, History, Philosophy, and Fine Arts.",
    badge: "Holistic",
    color: "from-sky-500 to-indigo-400",
    students: "560+",
  },
];

export interface Feature {
  icon: string;
  title: string;
  description: string;
  color: "blue" | "violet" | "cyan" | "emerald" | "orange" | "rose";
}

export const features: Feature[] = [
  {
    icon: "GraduationCap",
    title: "Expert Faculty",
    description:
      "Our professors hold advanced degrees from globally ranked institutions and bring decades of academic and industry experience.",
    color: "blue",
  },
  {
    icon: "Handshake",
    title: "Industry Partnerships",
    description:
      "120+ MoUs with leading corporations including TCS, Infosys, Google, Amazon, and ISRO ensure real-world exposure.",
    color: "violet",
  },
  {
    icon: "Building2",
    title: "Modern Campus",
    description:
      "Spread across 150 acres, our smart campus features state-of-the-art labs, digital libraries, and innovation hubs.",
    color: "cyan",
  },
  {
    icon: "Briefcase",
    title: "Career Support",
    description:
      "Dedicated placement cell with mock interviews, resume workshops, and direct recruiter access across 500+ companies.",
    color: "emerald",
  },
  {
    icon: "Globe2",
    title: "Global Opportunities",
    description:
      "Student exchange programs with 30+ international universities, enabling semester-abroad and dual-degree pathways.",
    color: "orange",
  },
  {
    icon: "Telescope",
    title: "Research Excellence",
    description:
      "Over ₹50 crore in active research grants. Join interdisciplinary labs publishing in top-tier international journals.",
    color: "rose",
  },
];

export interface Testimonial {
  name: string;
  course: string;
  avatar: string;
  rating: number;
  quote: string;
  company: string;
  gradient: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Aryan Mehta",
    course: "B.Tech Computer Science, 2023",
    avatar: "AM",
    rating: 5,
    quote:
      "JG University transformed my career. The faculty here doesn't just teach — they mentor. I received three pre-placement offers before my final year even ended.",
    company: "Software Engineer @ Google",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    name: "Priya Sharma",
    course: "MBA — Marketing, 2022",
    avatar: "PS",
    rating: 5,
    quote:
      "The MBA program's curriculum is industry-aligned in a way I've never seen before. The guest lectures, live projects, and case competitions gave me an edge I still use daily.",
    company: "Brand Manager @ Unilever",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    name: "Rohan Patel",
    course: "M.Tech AI & Data Science, 2024",
    avatar: "RP",
    rating: 5,
    quote:
      "The research facilities are world-class. My thesis was co-authored with my professor and published in a Scopus-indexed journal. No other university offered this at my level.",
    company: "ML Engineer @ Microsoft",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    name: "Sneha Krishnan",
    course: "B.Design — UI/UX, 2023",
    avatar: "SK",
    rating: 5,
    quote:
      "From the design labs to the studio culture — JG University taught me to think like a designer and execute like a professional. My portfolio opened doors I never imagined.",
    company: "Senior Designer @ Adobe",
    gradient: "from-pink-500 to-rose-400",
  },
];

export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface FooterLinks {
  quickLinks: FooterLink[];
  programs: FooterLink[];
  contact: ContactInfo;
}

export const footerLinks: FooterLinks = {
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Academic Programs", href: "#programs" },
    { label: "Admissions", href: "#contact" },
    { label: "Research", href: "#" },
    { label: "Campus Life", href: "#" },
    { label: "Alumni Network", href: "#" },
  ],
  programs: [
    { label: "Engineering", href: "#programs" },
    { label: "Business & MBA", href: "#programs" },
    { label: "Design", href: "#programs" },
    { label: "Science", href: "#programs" },
    { label: "Technology", href: "#programs" },
    { label: "Arts & Humanities", href: "#programs" },
  ],
  contact: {
    address: "JG University Campus, Raipur, Chhattisgarh — 492 001, India",
    phone: "+91 98765 43210",
    email: "admissions@jgu.edu.in",
    hours: "Mon–Sat: 9:00 AM – 5:00 PM",
  },
};
