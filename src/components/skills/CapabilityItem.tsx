"use client";

export default function CapabilityItem({
  label,
  index = 0,
}: {
  label: string;
  index?: number;
}) {
  return (
    <li className="group flex items-baseline gap-4 py-3.5 first:pt-0 last:pb-0">
      <span className="text-xs tabular-nums text-primary">{String(index + 1).padStart(2, "0")}</span>
      <span className="font-display text-2xl text-foreground transition-transform duration-300 group-hover:translate-x-1">
        {label}
      </span>
    </li>
  );
}
