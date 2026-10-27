import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Globe } from "lucide-react";
import type { Experience } from "@/lib/types";

function Bullets({ items }: { items: string[] }) {
  return (
    <>
      {items.map((b, i) => (
        <div
          key={i}
          className="flex items-start gap-2 text-sm text-muted-foreground"
        >
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
          <p>{b}</p>
        </div>
      ))}
    </>
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
    <Card
      className={[
        "group relative overflow-hidden rounded-2xl transition-all cursor-pointer",
        "bg-white/70 dark:bg-slate-900/60 supports-backdrop-filter:backdrop-blur",
        "border border-slate-200/70 dark:border-slate-800/80",
        "hover:shadow-[0_14px_36px_-14px_rgba(2,6,23,0.25)] dark:hover:shadow-[0_14px_36px_-14px_rgba(0,0,0,0.45)]",
        "focus-within:ring-2 focus-within:ring-sky-500/60 focus-within:ring-offset-2",
      ].join(" ")}
    >
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="text-lg">{role ?? company}</CardTitle>
          <Badge variant="outline">{time}</Badge>
        </div>
        {role ? (
          <CardDescription className="flex items-center gap-2">
            <Globe className="h-4 w-4" /> {company}
          </CardDescription>
        ) : null}
        {positions?.length ? (
          <div className="mt-1 grid gap-1">
            {positions.map((p) => (
              <div
                key={p.title}
                className="flex flex-wrap items-baseline justify-between gap-x-3 text-sm"
              >
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {p.title}
                </span>
                <span className="text-muted-foreground">{p.time}</span>
              </div>
            ))}
          </div>
        ) : null}
      </CardHeader>
      <CardContent className="grid gap-2">
        <Bullets items={bullets} />

        {projects?.map((p) => (
          <div
            key={p.name}
            className="mt-3 grid gap-2 border-l-2 border-sky-500/30 pl-3"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h4 className="font-medium text-slate-800 dark:text-slate-200">
                {p.name}
              </h4>
              <span className="text-xs text-muted-foreground">{p.period}</span>
            </div>
            <p className="text-sm text-muted-foreground italic">{p.summary}</p>
            <Bullets items={p.bullets} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
