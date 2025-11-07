import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Globe } from "lucide-react";

export default function ExperienceItem({
  role,
  company,
  time,
  bullets,
}: {
  role: string;
  company: string;
  time: string;
  bullets: string[];
}) {
  return (
    <Card
      className={[
        "group relative overflow-hidden rounded-2xl transition-all cursor-pointer",
        "bg-white/70 dark:bg-slate-900/60 supports-[backdrop-filter]:backdrop-blur",
        "border border-slate-200/70 dark:border-slate-800/80",
        "hover:shadow-[0_14px_36px_-14px_rgba(2,6,23,0.25)] dark:hover:shadow-[0_14px_36px_-14px_rgba(0,0,0,0.45)]",
        "focus-within:ring-2 focus-within:ring-sky-500/60 focus-within:ring-offset-2",
      ].join(" ")}
    >
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="text-lg">{role}</CardTitle>
          <Badge variant="outline">{time}</Badge>
        </div>
        <CardDescription className="flex items-center gap-2">
          <Globe className="h-4 w-4" /> {company}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        {bullets.map((b, i) => (
          <div
            key={i}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60" />
            <p>{b}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
