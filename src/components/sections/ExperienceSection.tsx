"use client";

import { EXPERIENCE, EARLIER_EXPERIENCE, EDUCATION, LANGUAGES } from "@/lib/data";
import ExperienceItem from "@/components/ui-composites/ExperienceItem";
import SectionHeading from "@/components/ui-composites/SectionHeading";
import { motion } from "framer-motion";
import { cn, trackPointer } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className={cn("relative mx-auto max-w-6xl px-4 py-16 sm:py-24")}>
      <SectionHeading index="02" eyebrow="Career" title="Experience" />

      {/* Timeline */}
      <ol className="relative space-y-8 sm:space-y-10 pl-6 sm:pl-10">
        <span
          aria-hidden
          className="absolute left-0 top-2 bottom-2 w-px bg-linear-to-b from-primary/70 via-border to-transparent"
        />
        {EXPERIENCE.map((job, idx) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden
              className="absolute -left-6 sm:-left-10 top-8 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background"
            />
            <Reveal delay={0.05 * idx}>
              <ExperienceItem {...job} />
            </Reveal>
          </li>
        ))}
      </ol>

      {/* Earlier experience (compact) */}
      <Reveal className="mt-20">
        <p className="eyebrow mb-5">Earlier Experience</p>
        <div className="space-y-3">
          {EARLIER_EXPERIENCE.map((job) => (
            <div key={job.company} onPointerMove={trackPointer} className="surface px-6 py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-foreground">
                  <span className="font-display text-2xl">{job.role}</span>
                  <span className="text-muted-foreground"> · {job.company}</span>
                </p>
                <span className="text-xs tabular-nums text-muted-foreground">{job.time}</span>
              </div>
              {job.bullets.map((b) => (
                <p key={b} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Education & languages */}
      <Reveal className="mt-16">
        <p className="eyebrow mb-5">Education &amp; Languages</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div onPointerMove={trackPointer} className="surface px-6 py-5">
            <h2 className="font-display text-2xl text-foreground">Education &amp; Training</h2>
            <ul className="mt-4 divide-y divide-border text-sm">
              {EDUCATION.map((e) => (
                <li key={e.title} className="flex flex-wrap justify-between gap-x-4 py-2.5">
                  <span className="text-foreground">{e.title}</span>
                  <span className="text-muted-foreground">{e.school}</span>
                </li>
              ))}
            </ul>
          </div>
          <div onPointerMove={trackPointer} className="surface px-6 py-5">
            <h2 className="font-display text-2xl text-foreground">Languages</h2>
            <ul className="mt-4 divide-y divide-border text-sm">
              {LANGUAGES.map((l) => (
                <li key={l.name} className="flex flex-wrap justify-between gap-x-4 py-2.5">
                  <span className="text-foreground">{l.name}</span>
                  <span className="text-muted-foreground">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
