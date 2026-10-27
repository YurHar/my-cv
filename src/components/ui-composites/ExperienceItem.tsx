"use client";

import type { Experience } from "@/lib/types";
import { trackPointer } from "@/lib/utils";

function Bullets({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="grid gap-2.5">
      {items.map((b, i) => (
        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-2.5 h-px w-3 shrink-0 bg-primary/70" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ExperienceItem({
  role,
  company,
  time,
  positions,
  bullets,
  projects,
}: Experience) {
  return (
    <article onPointerMove={trackPointer} className="surface p-6 sm:p-8">
      <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
        <div className="min-w-0">
          <h2 className="font-display text-3xl sm:text-4xl leading-tight tracking-tight text-foreground">
            {role ?? company}
          </h2>
          {role ? <p className="mt-1 text-sm text-muted-foreground">{company}</p> : null}
        </div>
        <span className="eyebrow pt-2 tabular-nums">{time}</span>
      </header>

      {positions?.length ? (
        <ul className="mt-5 grid gap-1.5 border-l border-border pl-4">
          {positions.map((p) => (
            <li key={p.title} className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm">
              <span className="text-foreground">{p.title}</span>
              <span className="tabular-nums text-muted-foreground">{p.time}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {bullets.length ? (
        <div className="mt-6">
          <Bullets items={bullets} />
        </div>
      ) : null}

      {projects?.map((p) => (
        <section key={p.name} className="mt-8 border-t border-border pt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-display text-2xl text-foreground">{p.name}</h3>
            <span className="text-xs tabular-nums text-muted-foreground">{p.period}</span>
          </div>
          <p className="mt-1 mb-4 text-sm italic text-muted-foreground">{p.summary}</p>
          <Bullets items={p.bullets} />
        </section>
      ))}
    </article>
  );
}
