export type LinkItem = { label: string; href: string };

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  period?: string;
  context?: string;
  links?: LinkItem[];
};

export type Position = { title: string; time: string };

export type ExperienceProject = {
  name: string;
  period: string;
  summary: string;
  bullets: string[];
};

export type Experience = {
  role?: string;
  company: string;
  time: string;
  positions?: Position[];
  bullets: string[];
  projects?: ExperienceProject[];
};

export type Education = { title: string; school: string };

export type Language = { name: string; level: string };

export type HeroInfo = {
  name: string;
  role: string;
  blurb: string;
  location?: string;
  avatar: string;
  links: { github?: string; linkedin?: string; email?: string; cv?: string };
};
