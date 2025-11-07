export const CORE_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript (ESNext)",
  "Tailwind CSS",
  "Ant Design",
  "shadcn/ui",
];

export const DATA_STATE = [
  "React Query",
  "Redux Toolkit",
  "Zustand",
  "TanStack Router",
  "REST API",
  "Axios",
];

export const TOOLING = [
  "Vite",
  "Next App Router",
  "Framer Motion",
  "Jest / Playwright (UI)",
  "ESLint / Prettier",
  "Git / GitHub",
];

export type Capability = string | { label: string; level?: number };

export const CAPABILITIES = [
  "Accessibility (WCAG 2.x) & i18n",
  { label: "Performance & UX polish", level: 5 },
  "Component systems & design tokens",
  { label: "SSR/ISR/Edge patterns", level: 4 },
  "CI-friendly testing mindset",
] as const satisfies readonly Capability[];
