/* eslint-disable react-hooks/purity */
"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Starfield() {
  const stars = useMemo(
    () => new Array(140).fill(0).map((_, i) => ({
      key: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.8 + 0.4,
      delay: Math.random() * 6,
      dur: Math.random() * 6 + 4,
    })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-1/3 -left-24 h-60 w-60 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      {stars.map((s) => (
        <motion.span
          key={s.key}
          className="absolute rounded-full bg-white/70 dark:bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.1, 0.9, 0.1] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
