"use client";

export function AuroraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#030014]" />
      {/* Aurora orbs */}
      <div
        className="animate-float-a absolute -left-[20%] top-[-10%] h-[70vh] w-[70vh] rounded-full bg-violet-600/30 blur-[120px]"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="animate-float-b absolute -right-[15%] top-[20%] h-[60vh] w-[60vh] rounded-full bg-fuchsia-500/25 blur-[100px]"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="animate-float-c absolute bottom-[-20%] left-[10%] h-[55vh] w-[55vh] rounded-full bg-cyan-500/20 blur-[110px]"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="animate-pulse-glow absolute left-1/2 top-1/3 h-[40vh] w-[80vw] max-w-4xl -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600/20 via-fuchsia-500/15 to-cyan-400/20 blur-[80px]"
      />
      {/* Perspective grid */}
      <div className="absolute inset-0 bg-grid-fade opacity-60" />
    </div>
  );
}
