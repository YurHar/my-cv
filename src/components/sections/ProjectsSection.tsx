/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ui-composites/ProjectCard";

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
  [k: string]: any;
};

type ProjectCardLike = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
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

  return { title, description, tech, link };
}

function isExternal(url?: string) {
  return !!url && /^https?:\/\//i.test(url);
}

export default function ProjectsSection() {
  const projects: ProjectCardLike[] = (PROJECTS as RawProject[])
    .map(normalizeProject)
    .filter((p): p is ProjectCardLike => p !== null);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
      {/* Header (matches SkillsSection) */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sky-600/10 dark:bg-sky-500/15 ring-1 ring-sky-600/20 dark:ring-sky-400/20">
            <Code2 className="h-4 w-4 text-sky-700 dark:text-sky-400" />
          </span>
          <h2
            className={cn(
              "text-2xl sm:text-3xl font-bold tracking-tight",
              "bg-clip-text text-transparent",
              "bg-linear-to-r from-sky-700 via-indigo-600 to-purple-600",
              "dark:from-sky-400 dark:via-indigo-400 dark:to-purple-400"
            )}
          >
            Projects
          </h2>
        </div>
        <div
          className={cn(
            "mt-3 h-0.5 w-32 rounded-full",
            "bg-linear-to-r from-sky-600 to-indigo-600",
            "dark:from-sky-400 dark:to-indigo-400"
          )}
        />
      </div>

      {/* Grid */}
      <motion.div
        className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 1 },
          show: { opacity: 1, transition: { staggerChildren: 0.07 } },
        }}
      >
        {projects.map((p, i) => {
          const external = isExternal(p.link);
          return (
            <motion.div
              key={`${p.title}-${i}`}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.45, delay: 0.04 * i }}
              className={cn(
                "group relative rounded-2xl transition-all",
                "bg-white/70 dark:bg-slate-900/60 supports-backdrop-filter:backdrop-blur",
                "border border-slate-200/70 dark:border-slate-800/80",
                "hover:shadow-[0_14px_36px_-14px_rgba(2,6,23,0.25)] dark:hover:shadow-[0_14px_36px_-14px_rgba(0,0,0,0.45)]",
                "focus-within:ring-2 focus-within:ring-sky-500/60 focus-within:ring-offset-2"
              )}
            >
              {/* subtle top edge glow */}
              <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-sky-500/40 to-transparent" />
              <div className="rounded-2xl p-2 sm:p-2.5">
                {p.link ? (
                  <Link
                    href={p.link}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={`Open ${p.title}${external ? " in new tab" : ""}`}
                    className="block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
                  >
                    <ProjectCard
                      title={p.title}
                      description={p.description}
                      tech={p.tech}
                      link={p.link}
                    />
                  </Link>
                ) : (
                  <ProjectCard title={p.title} description={p.description} tech={p.tech} />
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
