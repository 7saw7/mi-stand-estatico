// src/app/components/Header.tsx

import Navbar from "./Navbar";
import { MatrixBackground } from "./MatrixBackground";

export default function SiteHeader() {
  return (
    <header className="relative z-30 overflow-visible bg-[linear-gradient(to_bottom,rgba(2,6,23,0.94)_0%,rgba(3,10,28,0.92)_50%,rgba(2,6,23,0.9)_100%)] border-b border-cyan-500/10">
      {/* ===== Fondo Matrix ===== */}
      <MatrixBackground />

      {/* ===== Contenido del header ===== */}
      <div className="relative z-10">
        {/* Barra status (ahora también en móvil) */}
        <div className="border-b border-emerald-500/15">
          <div className="mx-auto flex max-w-6xl items-center justify-center sm:justify-end px-3 sm:px-4 py-1 sm:py-1.5 text-[9px] sm:text-[10px] text-emerald-300/80 gap-3 sm:gap-4">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Systems operational
            </span>
            <span className="hidden xs:inline text-emerald-300/70">v1.0.0</span>
            <span className="hidden xs:inline text-emerald-300/70">
              Response time &lt; 120ms
            </span>
          </div>
        </div>

        {/* Navbar (logo + nombre + menú hamburguesa en móvil, links en desktop) */}
        <Navbar variant="dark" />

        {/* Tagline inferior (también visible en móvil, pero más compacto) */}
        <div className="border-t border-sky-500/5">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-1.5 sm:py-2 flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-sky-300/80">
            <span className="h-[2px] w-6 sm:w-7 rounded-full bg-sky-500/70" />
            <span className="truncate">
              {/* aquí puedes poner un pequeño claim si quieres */}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
