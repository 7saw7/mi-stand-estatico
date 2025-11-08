import Navbar from "./Navbar";

export default function SiteHeader() {
  return (
    <header className="relative z-50">
      {/* Barra de estado superior */}
      <div className="hidden sm:block bg-slate-950/95 border-b border-emerald-500/15">
        <div className="mx-auto flex max-w-6xl items-center justify-end px-4 py-1 text-[10px] text-emerald-300/80">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Systems operational
            </span>
            <span className="text-emerald-300/70">v1.0.0</span>
            <span className="text-emerald-300/70">Response time &lt; 120ms</span>
          </div>
        </div>
      </div>

      {/* Navbar principal (no se toca) */}
      <Navbar variant="dark" />

      {/* Banda de tagline global */}
      <div className="hidden sm:block bg-slate-950/95 border-t border-sky-500/5">
        <div className="mx-auto max-w-6xl px-6 py-2 flex items-center gap-3 text-[11px] text-sky-300/80">
          <span className="h-[2px] w-7 rounded-full bg-sky-500/70" />
          <p>
            Blue Evolution — Ingeniería de software, arquitectura cloud y experiencias digitales a medida.
          </p>
        </div>
      </div>
    </header>
  );
}