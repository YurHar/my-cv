export type LinkItem = { label: string; href: string };

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export type Experience = {
  role: string;
  company: string;
  time: string;
  bullets: string[];
};

export type SkillRadar = { subject: string; A: number };

export type HeroInfo = {
  name: string;
  role: string;
  blurb: string;
  avatar: string;
  links: { github?: string; linkedin?: string; email?: string; cv?: string };
};
