"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.header
      className="mb-12 sm:mb-16"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="eyebrow">
        {index} <span className="mx-2 opacity-50">/</span> {eyebrow}
      </p>
      <h1 className="mt-4 font-display text-5xl sm:text-7xl leading-[0.95] tracking-tight text-foreground">
        {title}
        <span className="text-primary">.</span>
      </h1>
      <motion.div
        className="mt-6 h-px w-24 origin-left bg-primary/70"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.header>
  );
}
