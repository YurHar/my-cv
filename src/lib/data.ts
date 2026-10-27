import { HeroInfo, Project, Experience, Education, Language, Stat } from "./types";

export const HERO: HeroInfo = {
  name: "Yuri Harutyunyan",
  role: "Senior Frontend Engineer",
  blurb:
    "Senior Frontend Engineer with 5+ years building production React and TypeScript applications for government and enterprise platforms. Built solutions across 7+ platforms serving a combined 50,000+ users. Open to remote roles with international teams.",
  location: "Yerevan, Armenia (GMT+4)",
  avatar:
    "https://media.licdn.com/dms/image/v2/D4E03AQH1cNK6xTHJ0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1668925813651?e=1781136000&v=beta&t=JD2NeUc8CaAaLWnbEhD_mADqalib4o6oG4FEv9b9Hwo",
  links: {
    github: "https://github.com/YurHar",
    linkedin: "https://www.linkedin.com/in/yuri-harutyunyan/",
    email: "mailto:yuri.harutyunyan.a@gmail.com",
    // cv: "/Yuri_HarutyunyanCV.pdf", — re-enable once the updated Senior Frontend Engineer CV is in public/
  },
};

// Every figure here comes from the CV summary
export const HERO_STATS: Stat[] = [
  { value: "5+", label: "Years building production React & TypeScript apps" },
  { value: "7+", label: "Platforms built" },
  { value: "50,000+", label: "Users served across those platforms combined" },
  { value: "50+", label: "Form types in the e-social.am form architecture" },
];

export const PROJECTS: Project[] = [
  {
    title: "e-social.am",
    period: "2023 – Present",
    context: "WISE Foundation (formerly Nork Technology Center)",
    description:
      "A government platform for applying for and managing social protection services. Dynamic form architecture supporting 50+ form types with multi-step flows, deeply nested validation, conditional logic, and role-based business rules; an RTK Query data layer; and accessible interfaces aligned with WCAG 2.1. Includes @e-social/ui — a shared UI package under development, integration in progress.",
    tech: ["React", "TypeScript", "RTK Query", "WCAG 2.1"],
    link: "https://id.e-social.am/",
  },
  {
    title: "fastpassdrivingtests.uk",
    period: "2024 – 2025",
    context: "SJDevs LTD · Contract",
    description:
      "A UK driving test booking and swap platform. Built the frontend for registration, test preferences, booking search, and swap workflows; search and filtering by test centre, preferred and excluded dates, and time-of-day preferences; API integration for user profiles, test preferences, and available matches; and Stripe payment flows.",
    tech: ["React", "TypeScript", "Stripe"],
    link: "https://fastpassdrivingtests.uk",
  },
  {
    title: "Park’n Go – Valet Platform",
    period: "2025",
    description:
      "Valet parking platform for businesses, event organizers, and individuals to book and manage valet services, with an admin panel for managing bookings and valet schedules, customer records, parking locations, and service pricing. Mobile-first UI with Vite and Ant Design, and REST APIs integrated with React Query for data fetching and caching.",
    tech: ["React", "Vite", "Ant Design", "React Query", "REST API"],
    link: "https://parkngovalet.com/",
  },
  {
    title: "Aether Studio",
    context: "Personal project",
    description:
      "A Next.js project showcasing interactive UI, motion design, and smooth scrolling, with a focus on frontend architecture.",
    tech: ["Next.js"],
    link: "https://aether-studio-coral.vercel.app/",
  },
  {
    title: "e-disability.am",
    period: "2023 – 2025",
    context: "WISE Foundation (formerly Nork Technology Center)",
    description:
      "A government disability assessment platform. Accessible interfaces with complex form workflows, validation logic, and user feedback; API communication layers for data exchange and state synchronization; and WCAG 2.1 keyboard navigation, screen reader support, semantic markup, and focus management.",
    tech: ["React", "TypeScript", "WCAG 2.1"],
    link: "https://e-disability.am/home",
  },
  {
    title: "Other platforms",
    description:
      "Public-service portals for displaced families’ rent and housing support, and a site for Armenia’s Association for the Support of Private Preschool Institutions.",
    tech: ["React", "Ant Design", "TanStack Query"],
    links: [
      { label: "housing.socservice.am", href: "https://housing.socservice.am/" },
      { label: "rent.socservice.am", href: "https://rent.socservice.am/" },
      { label: "mnha.am", href: "https://mnha.am/" },
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "WISE Foundation (formerly Nork Technology Center)",
    time: "2021 – Present",
    positions: [
      { title: "Senior Frontend Engineer", time: "2024 – Present" },
      { title: "Frontend Engineer", time: "2021 – 2024" },
    ],
    bullets: [
      "Developed and maintained 5+ production React/TypeScript web applications for government and enterprise clients.",
      "Designed a reusable component system adopted across 10+ applications, reducing duplicated UI logic and improving consistency across products.",
    ],
    projects: [
      {
        name: "e-social.am",
        period: "2023 – Present",
        summary: "Government platform for applying for and managing social protection services.",
        bullets: [
          "Architect and develop the React/TypeScript frontend.",
          "Designed a dynamic form architecture supporting 50+ form types, with multi-step flows, deeply nested validation, conditional logic, and role-based business rules.",
          "Built the data layer on RTK Query: data fetching, cache invalidation, and state synchronization across multi-step workflows.",
          "Created @e-social/ui, a shared React/TypeScript UI package currently under development; its integration into e-social.am is in progress.",
          "Build accessible interfaces aligned with WCAG 2.1: semantic markup, keyboard navigation, screen reader support, focus management.",
        ],
      },
      {
        name: "e-disability.am",
        period: "2023 – 2025",
        summary: "Government disability assessment platform.",
        bullets: [
          "Built accessible React/TypeScript interfaces; implemented complex form workflows, validation logic, and user feedback.",
          "Designed API communication layers for data exchange and state synchronization.",
          "Implemented WCAG 2.1 requirements: keyboard navigation, screen reader support, semantic markup, focus management.",
        ],
      },
    ],
  },
  {
    role: "Senior Frontend Engineer",
    company: "SJDevs LTD · Contract",
    time: "2024 – 2025",
    bullets: [],
    projects: [
      {
        name: "fastpassdrivingtests.uk",
        period: "2024 – 2025",
        summary: "UK driving test booking and swap platform.",
        bullets: [
          "Built the React/TypeScript frontend for registration, test preferences, booking search, and swap workflows using responsive, reusable components.",
          "Implemented search and filtering by test centre, preferred and excluded dates, and time-of-day preferences.",
          "Integrated APIs for user profiles, test preferences, and available matches, and implemented Stripe payment flows.",
        ],
      },
    ],
  },
];

export const EARLIER_EXPERIENCE: Experience[] = [
  {
    role: "Data Manager",
    company: "Sporting Software Solutions LLC",
    time: "2019 – 2020",
    bullets: [
      "Collected and analyzed data to support business operations, and provided data to regional branches in the USA, Argentina, Brazil, and other locations.",
    ],
  },
];

export const EDUCATION: Education[] = [
  { title: "React.js Level-Up Course", school: "Sunny School" },
  { title: "React.js Course", school: "Armenian Code Academy" },
];

export const LANGUAGES: Language[] = [
  { name: "Armenian", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
  { name: "Russian", level: "Proficient" },
];
