"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HERO } from "@/lib/data";
import { cn } from "@/lib/utils";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Redux",
  "Zustand",
  "REST API",
  "Git",
];

export default function Hero() {
  const { name, role, avatar, links } = HERO;
  const cvHref = links.cv ?? "/Yuri_HarutyunyanCV.pdf";

  return (
    <section
      className={cn(
        "min-h-screen flex flex-col items-center justify-center relative overflow-hidden",
        "text-slate-900 dark:text-slate-100",
        "bg-linear-to-b from-slate-50 via-white to-slate-50",
        "dark:from-slate-950 dark:via-slate-900 dark:to-slate-950",
        "px-6 py-16 sm:py-24"
      )}
    >
      <motion.div
        className={cn(
          "pointer-events-none absolute w-72 h-72 rounded-full blur-3xl top-16 left-10 sm:left-24",
          "bg-blue-500/20 dark:bg-blue-500/15"
        )}
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className={cn(
          "pointer-events-none absolute w-md h-112 rounded-full blur-3xl -bottom-10 right-6 sm:right-20",
          "bg-violet-500/20 dark:bg-violet-500/15"
        )}
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 w-full max-w-3xl px-0 sm:px-2"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Avatar className="w-28 h-28 sm:w-32 sm:h-32 ring-2 ring-blue-500/30 dark:ring-blue-400/40 shadow-lg mb-4 rounded-full overflow-hidden">
              <AvatarImage
                src={avatar}
                alt={`Portrait of ${name}`}
                className="w-full h-full object-cover rounded-full"
              />
              <AvatarFallback>
                {name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-semibold tracking-tight mb-1 text-slate-900 dark:text-white"
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {name}
          </motion.h1>

          <div className="mt-2 mb-4 h-[3px] w-33 rounded-full bg-sky-600/60 dark:bg-sky-400/70" />

          <motion.p
            className="text-slate-700 dark:text-sky-300/90 mb-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {role}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 mb-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {links.github ? (
              <SocialIcon href={links.github} label="GitHub">
                <Github className="h-5 w-5" />
              </SocialIcon>
            ) : null}
            {links.linkedin ? (
              <SocialIcon href={links.linkedin} label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialIcon>
            ) : null}
            {links.email ? (
              <SocialIcon href={links.email} label="Email">
                <Mail className="h-5 w-5" />
              </SocialIcon>
            ) : null}

            <Button asChild className="rounded-xl font-medium px-4" title="Download CV">
              <a href={cvHref} download target="_blank" rel="noreferrer" aria-label="Download CV">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl text-pretty"
          >
            Focused on performance and clarity, I transform design ideas into polished, responsive
            interfaces with engaging interactions.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mt-10 z-10 w-full max-w-3xl"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.04 }}
          >
            <Badge
              variant="secondary"
              className={cn(
                "w-full justify-center py-3 text-base font-medium rounded-xl",
                "bg-slate-100 text-slate-900 border border-slate-200",
                "dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700",
                "hover:bg-sky-600 hover:text-white hover:border-sky-500/60",
                "transition-colors cursor-default select-none"
              )}
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const opensInNewTab = href.startsWith("http");

  return (
    <motion.div whileHover={{ scale: 1.08, rotate: 2 }} whileTap={{ scale: 0.96 }}>
      <Button
        asChild
        variant="outline"
        size="icon"
        className={cn(
          "rounded-xl",
          "bg-white text-slate-700 border-slate-200",
          "dark:bg-slate-900/70 dark:text-slate-200 dark:border-slate-700",
          "hover:border-sky-500/70 hover:text-sky-600 dark:hover:text-sky-300"
        )}
      >
        <a
          href={href}
          aria-label={label}
          {...(opensInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      </Button>
    </motion.div>
  );
}
