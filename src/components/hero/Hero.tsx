"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HERO, HERO_STATS } from "@/lib/data";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { name, role, blurb, location, avatar, links } = HERO;
  const [first, ...rest] = name.split(" ");
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-4 py-12 sm:py-16">
      {/* Eyebrow: avatar + role + location */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <Avatar className="h-12 w-12 rounded-full ring-1 ring-primary/50 ring-offset-4 ring-offset-background">
          <AvatarImage src={avatar} alt={`Portrait of ${name}`} className="object-cover" />
          <AvatarFallback className="bg-transparent font-display text-lg text-primary">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="eyebrow">{role}</p>
          {location ? <p className="mt-1 text-xs text-muted-foreground">{location}</p> : null}
        </div>
      </motion.div>

      {/* Name: each line rises out of a mask, like a title card */}
      <h1 className="mt-8 font-display text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.88] tracking-tight text-foreground">
        <span className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.15, duration: 1.1, ease: EASE }}
          >
            {first}
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block italic"
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 1.1, ease: EASE }}
          >
            {rest.join(" ")}
            <span className="text-primary not-italic">.</span>
          </motion.span>
        </span>
      </h1>

      <motion.div
        className="mt-8 h-px w-full max-w-md origin-left bg-linear-to-r from-primary/80 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.7, duration: 1.2, ease: EASE }}
      />

      {/* Blurb + actions */}
      <motion.div
        className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.9, ease: EASE }}
      >
        <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
          {blurb}
        </p>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-6 group">
              <Link href="/projects">
                View projects
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-6 bg-transparent">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            {links.github ? (
              <SocialIcon href={links.github} label="GitHub">
                <Github className="h-4 w-4" />
              </SocialIcon>
            ) : null}
            {links.linkedin ? (
              <SocialIcon href={links.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
            ) : null}
            {links.email ? (
              <SocialIcon href={links.email} label="Email">
                <Mail className="h-4 w-4" />
              </SocialIcon>
            ) : null}
            {links.cv ? (
              <a
                href={links.cv}
                download
                target="_blank"
                rel="noreferrer"
                className="ml-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>

      {/* Stats strip */}
      <motion.dl
        className="mt-12 sm:mt-14 grid grid-cols-2 md:grid-cols-4 border-t border-border"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { delayChildren: 1.1, staggerChildren: 0.12 } } }}
      >
        {HERO_STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className={cn(
              "flex flex-col pt-6 pb-2 pr-4",
              i % 2 === 1 && "pl-4 md:pl-0",
              i > 0 && "md:pl-6 md:border-l md:border-border"
            )}
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {/* dt before dd for valid markup; order-last puts the label under the number */}
            <dt className="order-last mt-2 text-xs leading-snug text-muted-foreground">{s.label}</dt>
            <dd className="font-display text-4xl sm:text-5xl text-foreground">{s.value}</dd>
          </motion.div>
        ))}
      </motion.dl>
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
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
      {...(opensInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
