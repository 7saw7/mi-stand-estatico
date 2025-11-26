import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & recursos | Codeva Studio",
  description:
    "Próximamente, artículos y recursos sobre desarrollo web, UX y producto digital.",
};

export default function BlogPage() {
  return (
    <>
    
    <section className="relative min-h-[70vh] overflow-hidden pt-[6rem] p-5 md:p-10 lg:p-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#000915] to-[#00060c]" />
        <div className="absolute -top-24 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-emerald-500/25 blur-3xl opacity-70" />
      </div>

      <div className="container-x text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
          Blog & recursos
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
          Contenido para
          <span className="text-emerald-400"> cuidar tu presencia digital.</span>
        </h1>
        <p className="mt-4 text-[15px] text-slate-300 max-w-2xl mx-auto">
          Estamos preparando guías, artículos y recursos sobre performance,
          UX, arquitectura frontend y estrategia digital pensados para equipos
          que toman decisiones con criterio.
        </p>

        <div className="mt-10 inline-flex rounded-2xl border border-slate-700/80 bg-slate-950/80 px-6 py-4 text-sm text-slate-200 shadow-[0_18px_45px_rgba(0,0,0,0.9)]">
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Próximamente
          </span>
          <span className="ml-3 text-[13px]">
            Si quieres que te avisemos cuando publiquemos los primeros
            recursos, mencionalo en el formulario de contacto.
          </span>
        </div>
      </div>
    </section>
    </>
  );
}
