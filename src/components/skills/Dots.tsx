"use client";

import { cn } from "@/lib/utils";

export default function Dots({ level }: { level: number }) {
  const total = 5; // 1..5
  return (
    <div className="flex items-center gap-1.5" aria-label={`${level} out of 5`}>
      {Array.from({ length: total }).map((_, i) => {
        const active = i < level;
        return (
          <span
            key={i}
            className={cn(
              "h-2.5 w-2.5 rounded-full",
              active ? "bg-sky-600 dark:bg-sky-400" : "bg-slate-300 dark:bg-slate-700"
            )}
          />
        );
      })}
    </div>
  );
}
