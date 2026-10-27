"use client";

export default function PillCloud({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
