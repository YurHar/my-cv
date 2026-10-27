"use client";

import { Briefcase } from "lucide-react";
import { EXPERIENCE, EARLIER_EXPERIENCE, EDUCATION, LANGUAGES } from "@/lib/data";
import ExperienceItem from "@/components/ui-composites/ExperienceItem";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className={cn("relative mx-auto mt-6 max-w-6xl px-4 py-16 sm:py-20")}
    >
      {/* Header */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sky-600/10 dark:bg-sky-500/15 ring-1 ring-sky-600/20 dark:ring-sky-400/20">
            <Briefcase className="h-4.5 w-4.5 text-sky-700 dark:text-sky-400" />
          </span>
          <h2
            className={cn(
              "text-2xl sm:text-3xl font-bold tracking-tight",
              "bg-clip-text text-transparent",
              "bg-linear-to-r from-sky-700 via-indigo-600 to-purple-600",
              "dark:from-sky-400 dark:via-indigo-400 dark:to-purple-400"
            )}
          >
            Experience
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

      {/* List */}
      <motion.div
        className="space-y-5 sm:space-y-6"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 1 },
          show: { opacity: 1, transition: { staggerChildren: 0.07 } },
        }}
      >
        {EXPERIENCE.map((job, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.45, delay: 0.03 * idx }}
            className={[
              "group relative overflow-hidden rounded-2xl transition-all cursor-pointer",
              "bg-white/70 dark:bg-slate-900/60 supports-backdrop-filter:backdrop-blur",
              "border border-slate-200/70 dark:border-slate-800/80",
              "hover:shadow-[0_14px_36px_-14px_rgba(2,6,23,0.25)] dark:hover:shadow-[0_14px_36px_-14px_rgba(0,0,0,0.45)]",
              "focus-within:ring-2 focus-within:ring-sky-500/60 focus-within:ring-offset-2",
            ].join(" ")}
          >
            {/* subtle top edge glow */}
            <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-sky-500/40 to-transparent" />
            <div className="rounded-2xl p-3 sm:p-4">
              <ExperienceItem {...job} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Earlier experience (compact) */}
      <div className="mt-12">
        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
          Earlier Experience
        </h3>
        <div className="space-y-3">
          {EARLIER_EXPERIENCE.map((job) => (
            <div
              key={job.company}
              className="rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 supports-backdrop-filter:backdrop-blur px-5 py-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <p className="font-medium text-slate-800 dark:text-slate-200">
                  {job.role} · <span className="font-normal text-muted-foreground">{job.company}</span>
                </p>
                <span className="text-xs text-muted-foreground">{job.time}</span>
              </div>
              {job.bullets.map((b) => (
                <p key={b} className="mt-1 text-sm text-muted-foreground">
                  {b}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Education & languages */}
      <div className="mt-12">
        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
          Education &amp; Languages
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 supports-backdrop-filter:backdrop-blur px-5 py-4">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Education &amp; Training
            </h4>
            <ul className="grid gap-1.5 text-sm">
              {EDUCATION.map((e) => (
                <li key={e.title}>
                  <span className="text-slate-800 dark:text-slate-200">{e.title}</span>
                  <span className="text-muted-foreground"> — {e.school}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 supports-backdrop-filter:backdrop-blur px-5 py-4">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Languages
            </h4>
            <ul className="grid gap-1.5 text-sm">
              {LANGUAGES.map((l) => (
                <li key={l.name}>
                  <span className="text-slate-800 dark:text-slate-200">{l.name}</span>
                  <span className="text-muted-foreground"> — {l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
