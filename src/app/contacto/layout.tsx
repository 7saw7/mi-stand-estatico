// src/app/contacto/layout.tsx
import type { ReactNode } from "react";
import "./contacto-animations.css"; 

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* === CAPA 1 — Gradiente base azul profundo === */}
      <div
        aria-hidden
        className="
          absolute inset-0 -z-50
          bg-[linear-gradient(to_bottom,#0b1f3a,#111827,#020617,#02010a)]
        "
      />

      {/* === CAPA 2 — Aurora volumétrica animada === */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute -top-40 -left-20 -z-40
          h-[34rem] w-[60rem] opacity-80
        "
      >
        <div
          className="
            h-full w-full rounded-[999px]
            bg-[radial-gradient(circle_at_0%_40%,rgba(59,130,246,0.75),transparent_60%),
                radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.7),transparent_65%),
                radial-gradient(circle_at_40%_100%,rgba(94,234,212,0.45),transparent_60%)]
            animate-aurora-3d
          "
        />
      </div>

      {/* === CAPA 3 — Glow hero central (bajo el título) === */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute top-20 left-1/2 -z-30
          h-[22rem] w-[38rem] -translate-x-1/2
          bg-[radial-gradient(circle_at_50%_0%,rgba(129,230,217,0.16),transparent_70%)]
          blur-[70px]
        "
      />

      {/* === CAPA 4 — Superficie 3D con profundidad === */}
      <div
        aria-hidden
        className="
          absolute top-40 left-1/2 -z-30
          h-[52rem] w-[160%]
          -translate-x-1/2 -skew-y-3
          rounded-[4.5rem]
          bg-[linear-gradient(to_bottom,#122449,#0f172a,#050816)]
          shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_50px_140px_rgba(0,0,0,0.9)]
          border border-blue-400/10
        "
      />

      {/* === CAPA 5 — Línea de luz en la arista del panel === */}
      <div
        aria-hidden
        className="
          absolute top-40 left-1/2 -z-20
          h-[2.4rem] w-[140%]
          -translate-x-1/2 -skew-y-3
          rounded-[3rem]
          bg-[linear-gradient(to_right,rgba(59,130,246,0),rgba(125,211,252,0.9),rgba(59,130,246,0))]
          opacity-70
          animate-lightflow
        "
      />

      {/* === CAPA 6 — Líneas CAD isométricas azuladas === */}
      <div
        aria-hidden
        className="
          absolute top-40 left-1/2 -z-20
          h-[52rem] w-[160%]
          -translate-x-1/2 -skew-y-3
          rounded-[4.5rem]
          bg-[linear-gradient(115deg,rgba(96,165,250,0.11)_1px,transparent_1px),
              linear-gradient(295deg,rgba(56,189,248,0.07)_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-[0.28]
          mix-blend-screen
        "
      />

      {/* === CAPA 7 — Engineering dots premium === */}
      <div
        aria-hidden
        className="
          absolute top-40 left-1/2 -z-10
          h-[52rem] w-[160%]
          -translate-x-1/2 -skew-y-3
          rounded-[4.5rem]
          bg-[radial-gradient(circle,rgba(148,163,184,0.22)_1px,transparent_1px)]
          bg-[size:22px_22px]
          opacity-[0.12]
        "
      />

      {/* === CAPA 8 — Beams diagonales muy suaves === */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[linear-gradient(130deg,rgba(59,130,246,0.12)_0%,transparent_40%,transparent_60%,rgba(56,189,248,0.10)_100%)]
          opacity-70
          mix-blend-soft-light
        "
      />

      {/* === CAPA 9 — Glows laterales === */}
      <div className="pointer-events-none absolute top-24 -left-40 h-[26rem] w-[26rem] -z-10 rounded-full bg-blue-500/30 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 -right-40 h-[26rem] w-[26rem] -z-10 rounded-full bg-cyan-400/30 blur-[150px]" />

      {/* === CAPA 10 — Vignette premium === */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 -z-10 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 -z-10 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />

      {/* === CAPA 11 — Noise HD === */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay bg-[url('/noise/noise-stars.png')] bg-repeat" />

      {/* === CONTENIDO === */}
      <div className="relative z-30">
        {children}
      </div>
    </div>
  );
}
