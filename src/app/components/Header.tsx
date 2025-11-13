// src/app/components/Header.tsx

import Navbar from "./Navbar"; // Importa tu Navbar (el de Framer Motion)
import styles from "./Header.module.css"; // Importa los estilos del módulo

export default function SiteHeader() {
  return (
    <header className="relative z-30 overflow-hidden bg-[linear-gradient(to_bottom,rgba(2,6,23,0.94)_0%,rgba(3,10,28,0.92)_50%,rgba(2,6,23,0.9)_100%)] border-b border-cyan-500/10">

      {/* ======================================== */}
      {/* ESTA ES LA CAPA DEL EFECTO MATRIX (z-0) */}
      {/* Asegúrate de que este 'div' NO tenga la clase 'hidden' */}
      {/* ======================================== */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {Array.from({ length: 70 }).map((_, i) => (
          <div
            key={i}
            className={styles['matrix-column']}
            style={{
              left: `${(i / 70) * 100}%`,
              animationDuration: `${3 + (i % 6) * 0.4}s`,
              animationDelay: `${(i % 12) * -0.25}s`,
            }}
          >
            {"01<>[]{}$#/*=+ΔΛ{};:".repeat(40)}
          </div>
        ))}
      </div>

      {/* Contenido del header (z-10, adelante) */}
      <div className="relative z-10">
        
        {/* Barra de estado superior (Esto SÍ se oculta en móvil) */}
        <div className="hidden sm:block border-b border-emerald-500/15">
          <div className="mx-auto flex max-w-6xl items-center justify-end px-4 py-1 text-[10px] text-emerald-300/80">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Systems operational
              </span>
              <span className="text-emerald-300/70">v1.0.0</span>
              <span className="text-emerald-300/70">
                Response time &lt; 120ms
              </span>
            </div>
          </div>
        </div>

        {/* Navbar (Tu componente de Navbar.tsx) */}
        {/* Esto se muestra en PC y móvil */}
        <Navbar variant="dark" />

        {/* Tagline (Esto SÍ se oculta en móvil) */}
        <div className="hidden sm:block border-t border-sky-500/5">
          <div className="mx-auto max-w-6xl px-6 py-2 flex items-center gap-3 text-[11px] text-sky-300/80">
            <span className="h-[2px] w-7 rounded-full bg-sky-500/70" />
            <p>
              Blue Evolution — Ingeniería de software, arquitectura cloud y
              experiencias digitales a medida.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}