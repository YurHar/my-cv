"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Tile({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.45 }}
      className={cn(
        "group relative rounded-2xl transition-all",
        "bg-white/70 dark:bg-slate-900/60 supports-backdrop-filter:backdrop-blur",
        "border border-slate-200/70 dark:border-slate-800/80",
        "hover:shadow-[0_14px_36px_-14px_rgba(2,6,23,0.25)] dark:hover:shadow-[0_14px_36px_-14px_rgba(0,0,0,0.45)]",
        "focus-within:ring-2 focus-within:ring-sky-500/60 focus-within:ring-offset-2"
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-sky-500/40 to-transparent" />

      <div className="rounded-2xl p-4 sm:p-5">
        <div className="mb-3">
          <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">
            {title}
          </h3>
          {subtitle ? (
            <p className="text-sm text-slate-600 dark:text-slate-300">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </motion.div>
  );
}
