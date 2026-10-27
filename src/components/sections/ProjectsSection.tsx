/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ui-composites/ProjectCard";
import SectionHeading from "@/components/ui-composites/SectionHeading";
import type { LinkItem } from "@/lib/types";

type RawProject = {
  title?: string;
  description?: string;
  desc?: string;
  subtitle?: string;
  tech?: string[];
  stack?: string[];
  tags?: string[];
  link?: string;
  href?: string;
  url?: string;
  period?: string;
  context?: string;
  links?: LinkItem[];
  [k: string]: any;
};

type ProjectCardLike = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  period?: string;
  context?: string;
  links?: LinkItem[];
};

function pickFirstString(...vals: Array<unknown>): string | undefined {
  for (const v of vals) {
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return undefined;
}

function toStringArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((v) => (typeof v === "string" ? v.trim() : undefined))
      .filter(Boolean) as string[];
  }
  return [];
}

function normalizeProject(p: RawProject): ProjectCardLike | null {
  const title = pickFirstString(p.title);
  if (!title) return null;

  const description = pickFirstString(p.description, p.desc, p.subtitle) ?? "";
  const tech =
    toStringArray(p.tech).length
      ? toStringArray(p.tech)
      : toStringArray(p.stack).length
      ? toStringArray(p.stack)
      : toStringArray(p.tags);

  const link = pickFirstString(p.link, p.href, p.url);

  const period = pickFirstString(p.period);
  const context = pickFirstString(p.context);

  return { title, description, tech, link, period, context, links: p.links };
}

function isExternal(url?: string) {
  return !!url && /^https?:\/\//i.test(url);
}

export default function ProjectsSection() {
  const projects: ProjectCardLike[] = (PROJECTS as RawProject[])
    .map(normalizeProject)
    .filter((p): p is ProjectCardLike => p !== null);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <SectionHeading index="01" eyebrow="Selected work" title="Projects" />

      {/* Grid: first project is featured wide; the grouped "links" card spans the full row */}
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => {
          const external = isExternal(p.link);
          const featured = i === 0;
          const full = !!p.links?.length;
          return (
            <motion.div
              key={`${p.title}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.06 * (i % 3), ease: [0.22, 1, 0.36, 1] }}
              className={cn(featured && "md:col-span-2", full && "md:col-span-2 lg:col-span-3")}
            >
              {p.link ? (
                <Link
                  href={p.link}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={`Open ${p.title}${external ? " in new tab" : ""}`}
                  className="block h-full rounded-[1.25rem] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <ProjectCard
                    title={p.title}
                    description={p.description}
                    tech={p.tech}
                    link={p.link}
                    period={p.period}
                    context={p.context}
                    index={i}
                    featured={featured}
                  />
                </Link>
              ) : (
                <ProjectCard
                  title={p.title}
                  description={p.description}
                  tech={p.tech}
                  period={p.period}
                  context={p.context}
                  links={p.links}
                  index={i}
                  featured={featured}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
