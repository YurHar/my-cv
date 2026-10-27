"use client";

import { motion } from "framer-motion";
import Tile from "@/components/skills/Tile";
import PillCloud from "@/components/skills/PillCloud";
import CapabilityItem from "@/components/skills/CapabilityItem";
import SectionHeading from "@/components/ui-composites/SectionHeading";
import { CAPABILITIES, CORE_STACK, DATA_STATE, TOOLING } from "@/components/skills/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <SectionHeading index="03" eyebrow="Toolkit" title="Skills" />

      {/* Grid */}
      <motion.div
        className="grid gap-5 sm:gap-6 md:grid-cols-2"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 1 },
          show: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
        }}
      >
        <Tile title="Core Stack" subtitle="Daily drivers for building apps">
          <PillCloud items={CORE_STACK} />
        </Tile>

        <Tile title="Data & State" subtitle="Fetching, caching, and app state">
          <PillCloud items={DATA_STATE} />
        </Tile>

        <Tile title="Tooling" subtitle="Workflow, design, and AI-assisted development">
          <PillCloud items={TOOLING} />
        </Tile>

        <Tile title="Capabilities" subtitle="What I’m especially good at">
          <ul className="divide-y divide-border">
            {CAPABILITIES.map((c, i) => (
              <CapabilityItem key={c} label={c} index={i} />
            ))}
          </ul>
        </Tile>
      </motion.div>
    </section>
  );
}
