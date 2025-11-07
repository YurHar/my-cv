"use client";

import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
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
              "bg-gradient-to-r from-sky-700 via-indigo-600 to-purple-600",
              "dark:from-sky-400 dark:via-indigo-400 dark:to-purple-400"
            )}
          >
            Experience
          </h2>
        </div>
        <div
          className={cn(
            "mt-3 h-0.5 w-32 rounded-full",
            "bg-gradient-to-r from-sky-600 to-indigo-600",
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
              "bg-white/70 dark:bg-slate-900/60 supports-[backdrop-filter]:backdrop-blur",
              "border border-slate-200/70 dark:border-slate-800/80",
              "hover:shadow-[0_14px_36px_-14px_rgba(2,6,23,0.25)] dark:hover:shadow-[0_14px_36px_-14px_rgba(0,0,0,0.45)]",
              "focus-within:ring-2 focus-within:ring-sky-500/60 focus-within:ring-offset-2",
            ].join(" ")}
          >
            {/* subtle top edge glow */}
            <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
            <div className="rounded-2xl p-3 sm:p-4">
              <ExperienceItem {...job} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
