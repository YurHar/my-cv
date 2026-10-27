// Slow-moving light beams. Pure CSS animation, so there is nothing to hydrate.
export default function BackgroundBlobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-[30%] -left-[20%] h-[90vh] w-[70vw] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(ellipse at center, var(--beam), transparent 65%)",
          animation: "beam-drift 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -top-[20%] right-[-25%] h-[70vh] w-[55vw] rounded-full blur-3xl opacity-60"
        style={{
          background: "radial-gradient(ellipse at center, var(--beam), transparent 65%)",
          animation: "beam-drift 24s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}
