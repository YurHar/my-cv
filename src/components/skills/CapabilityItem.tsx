"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CapabilityItem({
  label,
  index = 0,
}: {
  label: string;
  index?: number;
}) {
  return (
    <motion.li
      variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.35, delay: 0.02 * index }}
      className={cn(
        "relative overflow-hidden rounded-xl border",
        "border-slate-200 dark:border-slate-800",
        "bg-white/60 dark:bg-slate-900/50 supports-[backdrop-filter]:backdrop-blur"
      )}
    >
      {/* shimmering accent on the right */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-12 bg-gradient-to-l from-sky-500/15 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* row content */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="flex items-center justify-between gap-3 px-3.5 py-2.5"
      >
        <span className="flex items-center gap-2 text-sm sm:text-base text-slate-800 dark:text-slate-200">
          <CheckCircle2 className="h-4 w-4 text-sky-600 dark:text-sky-400" />
          {label}
        </span>

        {/* tiny pulse dot (decorative, not a level) */}
        <motion.span
          aria-hidden
          className="h-2.5 w-2.5 rounded-full bg-sky-500/70 dark:bg-sky-400/80 shadow-[0_0_0_3px_rgba(56,189,248,0.15)]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.05 * index }}
        />
      </motion.div>
    </motion.li>
  );
}
