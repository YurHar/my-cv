import BackgroundBlobs from "./BackgroundBlobs";

export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-background" aria-hidden />
      <BackgroundBlobs />
      {/* Vignette: darkens the edges for a lens-like frame */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse at 50% 40%, transparent 55%, var(--vignette))" }}
        aria-hidden
      />
    </>
  );
}
