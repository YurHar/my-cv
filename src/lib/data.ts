import { HeroInfo, Project, Experience, SkillRadar } from "./types";

export const HERO: HeroInfo = {
  name: "Yuri Harutyunyan",
  role: "Front-End Developer",
  blurb:
    "Front-end developer building modern, accessible apps with React/Next.js and TypeScript.",
  avatar: "/avatar.jpg",
  links: {
    github: "https://github.com/YurHar",
    linkedin: "https://www.linkedin.com/in/yuri-harutyunyan/",
    email: "mailto:yuri.harutyunyan.a@gmail.com",
    cv: "/Yuri_Harutyunyan_CV.pdf",
  },
};

export const PROJECTS: Project[] = [
  {
    title: "e-social.am",
    description:
      "Armenia’s unified social-protection portal: a single account where citizens apply for and track a wide range of benefits and services—housing and hardship programs, family and employment services, disability-related workflows, and more. The platform guides users through the right application, verifies data against state registers, and provides status updates/notifications, serving as the official online channel for many MLSA programs.",
    tech: [
      "Public service portal",
      "Eligibility flows",
      "Account & status tracking",
      "Gov registry checks",
    ],
    link: "https://e-social.am/",
  },
  {
    title: "e-disability.am",
    description:
      "Government platform for submitting applications and managing the functional disability assessment process (initial, repeated, re-evaluation).",
    tech: ["React", "Ant Design", "WCAG 2.1", "TanStack Query", "API"],
    link: "https://e-disability.am/home",
  },
  {
    title: "Park’n Go – Valet Platform",
    description:
      "Event valet service brand/website offering professional attendants for weddings, galas, corporate events, and more.",
    tech: ["Vite", "React", "Ant Design", "TanStack Query", "API"],
    link: "https://parkngovalet.com/",
  },
  {
    title: "mnha.am",
    description:
      "Site for Armenia’s Association for the Support of Private Preschool Institutions",
    tech: ["React", "Ant Design", "TanStack Query", "API"],
    link: "https://mnha.am/",
  },
  {
    title: "rent.socservice.am",
    description:
      "Online portal for forcibly displaced families to apply for rent/utility support and check application status.",
    tech: ["React", "Ant design", "TanStack Query", "Public service portal"],
    link: "https://rent.socservice.am/",
  },
  {
    title: "housing.socservice.am",
    description:
      "State portal where forcibly displaced families apply for housing support—buying or building a home, or repaying an existing mortgage—with clear eligibility guidance and online submission.",
    tech: ["React", "Ant design", "TanStack Query", "i18n (hy-AM)"],
    link: "https://housing.socservice.am/",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Front-End Developer",
    company: "Nork Technology Center",
    time: "2021 — Present",
    bullets: [
      "Developed highly responsive user interfaces based on design specifications for 20+ client projects.",
      "Built accessible and responsive web applications using React, Next.js, Tailwind CSS, and Ant Design.",
      "Collaborated with cross-functional teams to deliver high-performance, user-friendly applications that enable efficient data management and seamless user interaction.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "SJDevs LTD",
    time: "2024 — 2025",
    bullets: [
      "Implemented user interfaces with React.js based on client specifications.",
      "Developed front-end tests using browser automation tools.",
      "Collaborated with back-end developers to ensure seamless service integration.",
    ],
  },
  {
    role: "Data Manager",
    company: "Sporting Software Solutions LLC",
    time: "2019 — 2020",
    bullets: [
      "Collected and analyzed data across multiple fields to support business operations.",
      "Monitored market activity relevant to the company’s sector.",
      "Provided critical data to regional branches in the USA, Argentina, Brazil, and other locations.",
      "Maintained clear and consistent communication within the team.",
    ],
  },
];

export const SKILLS_RADAR: SkillRadar[] = [
  { subject: "JavaScript", A: 92 },
  { subject: "TypeScript", A: 90 },
  { subject: "React.js", A: 95 },
  { subject: "Next.js", A: 93 },
  { subject: "Tailwind", A: 90 },
  { subject: "Accessibility", A: 85 },
];

export const SKILL_BARS = [
  { label: "Performance & DX", value: 92 },
  { label: "Accessibility", value: 88 },
  { label: "Testing", value: 82 },
  { label: "Animations", value: 90 },
];
