"use client";

import { useMemo, useState, MouseEvent, KeyboardEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import type { LinkItem } from "@/lib/types";
import { cn, trackPointer } from "@/lib/utils";

type Props = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  period?: string;
  context?: string;
  links?: LinkItem[];
  index?: number;
  featured?: boolean;
  maxChars?: number;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
  period,
  context,
  links,
  index,
  featured = false,
  maxChars = featured ? 600 : 160,
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

  const meta = [period, context].filter(Boolean).join(" · ");

  return (
    <article
      onPointerMove={trackPointer}
      className={cn("surface group flex h-full flex-col p-6 sm:p-8", featured && "sm:p-10")}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs tabular-nums text-muted-foreground">
          {index !== undefined ? String(index + 1).padStart(2, "0") : null}
        </span>
        {link ? (
          <ArrowUpRight
            aria-hidden
            className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          />
        ) : null}
      </div>

      <h2
        className={cn(
          "mt-6 font-display leading-[1.05] tracking-tight text-foreground",
          featured ? "text-4xl sm:text-5xl" : "text-3xl"
        )}
      >
        {title}
      </h2>
      {meta ? <p className="mt-2 eyebrow text-[0.65rem]! tracking-[0.2em]!">{meta}</p> : null}

      <p
        id={descId}
        className={cn(
          "mt-5 text-sm leading-relaxed text-muted-foreground",
          featured && "sm:text-base max-w-3xl"
        )}
      >
        {expanded ? description : shortText}{" "}
        {isLong && (
          <button
            type="button"
            onClick={onToggleClick}
            onKeyDown={onToggleKeyDown}
            aria-expanded={expanded}
            aria-controls={descId}
            className="inline-block align-baseline font-medium text-primary hover:underline underline-offset-4"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </p>

      {links?.length ? (
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1 text-foreground hover:text-primary transition-colors"
              >
                {l.label}
                <ArrowUpRight
                  className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-primary"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="mt-auto flex flex-wrap gap-2 pt-6">
        {tech.map((t) => (
          <li
            key={t}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
