"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Tile from "@/components/skills/Tile";
import PillCloud from "@/components/skills/PillCloud";
import CapabilityItem from "@/components/skills/CapabilityItem";
import { CAPABILITIES, CORE_STACK, DATA_STATE, TOOLING } from "@/components/skills/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
      {/* Header */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sky-600/10 dark:bg-sky-500/15 ring-1 ring-sky-600/20 dark:ring-sky-400/20">
            <Sparkles className="h-4.5 w-4.5 text-sky-700 dark:text-sky-400" />
          </span>
          <h2
            className={cn(
              "text-2xl sm:text-3xl font-bold tracking-tight",
              "bg-clip-text text-transparent",
              "bg-linear-to-r from-sky-700 via-indigo-600 to-purple-600",
              "dark:from-sky-400 dark:via-indigo-400 dark:to-purple-400"
            )}
          >
            Skills
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
        className="grid gap-5 sm:gap-6 md:grid-cols-2"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 1 },
          show: { opacity: 1, transition: { staggerChildren: 0.07 } },
        }}
      >
        <Tile title="Core Stack" subtitle="Daily drivers for building apps">
          <PillCloud items={CORE_STACK} />
        </Tile>

        <Tile title="Data & State" subtitle="Fetching, caching, and app state">
          <PillCloud items={DATA_STATE} />
        </Tile>

        <Tile title="Tooling" subtitle="Build, DX, and animations">
          <PillCloud items={TOOLING} />
        </Tile>

        <Tile title="Capabilities" subtitle="What I’m especially good at">
          <ul className="space-y-3">
            {CAPABILITIES.map((c, i) => (
              <CapabilityItem
                key={typeof c === "string" ? c : c.label}
                label={typeof c === "string" ? c : c.label}
                index={i}
              />
            ))}
          </ul>
        </Tile>
      </motion.div>
    </section>
  );
}
