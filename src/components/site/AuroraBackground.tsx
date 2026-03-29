"use client";

export function AuroraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#030014]" />
      <div
        className="animate-float-a absolute -left-[20%] top-[-10%] h-[70vh] w-[70vh] rounded-full blur-[120px]"
        style={{
          animationDelay: "0s",
          background: "rgba(157, 80, 187, 0.28)",
        }}
      />
      <div
        className="animate-float-b absolute -right-[15%] top-[20%] h-[60vh] w-[60vh] rounded-full blur-[100px]"
        style={{
          animationDelay: "-5s",
          background: "rgba(0, 210, 255, 0.18)",
        }}
      />
      <div
        className="animate-float-c absolute bottom-[-20%] left-[10%] h-[55vh] w-[55vh] rounded-full blur-[110px]"
        style={{
          animationDelay: "-8s",
          background: "rgba(167, 139, 250, 0.2)",
        }}
      />
      <div
        className="animate-pulse-glow absolute left-1/2 top-1/3 h-[40vh] w-[80vw] max-w-4xl -translate-x-1/2 rounded-full blur-[80px]"
        style={{
          background:
            "linear-gradient(90deg, rgba(157,80,187,0.22) 0%, rgba(0,210,255,0.15) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-grid-fade opacity-60" />
    </div>
  );
}
