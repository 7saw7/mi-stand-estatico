// app/CodevaLoader.tsx
"use client";

export default function CodevaLoader() {
  return (
    <div
      className="
        fixed inset-0 z-[9000]
        flex flex-col items-center justify-center
        bg-slate-950/80 backdrop-blur-md
        transition-opacity duration-700
      "
      style={{ willChange: "opacity" }}
    >
      <div className="mb-4 animate-pulse">
        <img
          src="/assets/images/codeva-logo.png"
          alt="Codeva Studio"
          className="w-16 h-16 object-contain opacity-90"
        />
      </div>
      <p className="text-slate-300 text-sm tracking-wide opacity-90">
        Preparando tu experiencia…
      </p>
    </div>
  );
}
