// src/app/components/Header.tsx

import Navbar from "./Navbar";
import { MatrixBackground } from "./MatrixBackground";

export default function SiteHeader() {
  return (
    <header className="relative z-30 pb-10 pt-10 overflow-x-hidden bg-[linear-gradient(to_bottom,rgba(2,6,23,0.94)_0%,rgba(3,10,28,0.92)_50%,rgba(2,6,23,0.9)_100%)] border-b border-cyan-500/10">
      {/* ===== Fondo Matrix ===== */}
      <MatrixBackground />

      {/* ===== Contenido del header ===== */}
      <div className="relative z-10">
        {/* Barra status (ahora también en móvil) */}
        <div className="border-b border-emerald-500/15">
          <div className="mx-auto flex max-w-6xl items-center justify-center sm:justify-end px-3 sm:px-3 py-3 sm:py-3 text-[9px] sm:text-[10px] text-emerald-300/80 gap-3 sm:gap-4">
          </div>
        </div>

        {/* Navbar (logo + nombre + menú hamburguesa en móvil, links en desktop) */}
        <Navbar variant="dark" />

        {/* Tagline inferior (también visible en móvil, pero más compacto) */}
        <div className="border-t border-sky-500/5">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-1.5 sm:py-2 flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-sky-300/80">
            <span className="h-[2px] w-6 sm:w-7 rounded-full bg-sky-500/70" />
          </div>
        </div>
      </div>
    </header>
  );
}
