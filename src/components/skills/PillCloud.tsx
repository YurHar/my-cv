"use client";

import { cn } from "@/lib/utils";

export default function PillCloud({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((t) => (
        <span
          key={t}
          className={cn(
            "inline-flex items-center gap-1.5",
            "rounded-xl px-3 py-1.5 text-sm font-medium",
            "bg-slate-100 text-slate-900 border border-slate-200",
            "dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700",
            "hover:bg-sky-600 hover:text-white hover:border-sky-500/60 transition-colors"
          )}
        >
          {t}
        </span>
      ))}
    </div>
  );
}
