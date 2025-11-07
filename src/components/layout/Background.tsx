"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// Client-only animated blobs so SSR and client DOM match
const BackgroundBlobs = dynamic(() => import("./BackgroundBlobs"), { ssr: false });

export default function Background() {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 -z-10",
          "bg-gradient-to-b from-slate-50 via-white to-slate-50",
          "dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
        )}
        aria-hidden
      />
      <BackgroundBlobs />
    </>
  );
}
