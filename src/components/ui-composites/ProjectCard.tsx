"use client";

import { useMemo, useState, MouseEvent, KeyboardEvent } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  maxChars?: number;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  maxChars = 140,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  const { isLong, shortText } = useMemo(() => {
    const clean = description?.trim() ?? "";
    if (clean.length <= maxChars) return { isLong: false, shortText: clean };
    const slice = clean.slice(0, maxChars);
    const lastSpace = slice.lastIndexOf(" ");
    const truncated = (lastSpace > 80 ? slice.slice(0, lastSpace) : slice).trim() + "…";
    return { isLong: true, shortText: truncated };
  }, [description, maxChars]);

  const descId = `${title.replace(/\s+/g, "-").toLowerCase()}-desc`;

  const stopLink = (e: MouseEvent | KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const onToggleClick = (e: MouseEvent<HTMLButtonElement>) => {
    stopLink(e);
    setExpanded((v) => !v);
  };
  const onToggleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      stopLink(e);
      setExpanded((v) => !v);
    } else {
      e.stopPropagation();
    }
  };

  const onOpenExternal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (link) window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <Card
      className={[
        "group relative overflow-hidden rounded-2xl transition-all cursor-pointer",
        "bg-white/70 dark:bg-slate-900/60 supports-backdrop-filter:backdrop-blur",
        "border border-slate-200/70 dark:border-slate-800/80",
        "hover:shadow-[0_14px_36px_-14px_rgba(2,6,23,0.25)] dark:hover:shadow-[0_14px_36px_-14px_rgba(0,0,0,0.45)]",
        "focus-within:ring-2 focus-within:ring-sky-500/60 focus-within:ring-offset-2",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-sky-500/40 to-transparent" />

      <div className="absolute inset-0 bg-linear-to-br from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <CardHeader className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-slate-900 dark:text-slate-100">{title}</CardTitle>

          {link ? (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-xl hover:bg-sky-500/10 hover:text-sky-700 dark:hover:text-sky-300"
              onClick={onOpenExternal}
              aria-label={`Open ${title} in new tab`}
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
          ) : null}
        </div>

        <CardDescription id={descId} className="text-slate-600 dark:text-slate-300">
          {expanded ? description : shortText}{" "}
          {isLong && (
            <button
              type="button"
              onClick={onToggleClick}
              onKeyDown={onToggleKeyDown}
              aria-expanded={expanded}
              aria-controls={descId}
              className="inline-block align-baseline font-medium text-sky-700 dark:text-sky-300 hover:underline underline-offset-4"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </CardDescription>

        <div className="mt-2 h-0.5 w-20 rounded-full bg-linear-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400" />
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge
              key={t}
              variant="secondary"
              className={[
                "rounded-lg",
                "bg-slate-100 text-slate-900 border border-slate-200",
                "dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700",
              ].join(" ")}
            >
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
