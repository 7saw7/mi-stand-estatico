import type { Metadata } from "next";
import Link from "next/link";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

export const metadata: Metadata = {
  title: "Quiénes somos | Codeva Studio",
  description:
    "Conoce el estudio, nuestra forma de trabajar y los valores que guían cada proyecto en Codeva Studio.",
};

export default function QuienesSomosPage() {
  return (
    <>
    <Header />
    <section className="relative min-h-screen overflow-hidden pt-[6rem] p-20">
      {/* BG */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#000915] to-[#00060c]" />
        <div className="absolute -top-24 -left-16 h-[26rem] w-[26rem] rounded-full bg-emerald-500/25 blur-3xl opacity-70" />
        <div className="absolute -bottom-32 right-0 h-[26rem] w-[26rem] rounded-full bg-cyan-500/25 blur-3xl opacity-60" />
        <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.35),transparent_65%),radial-gradient(circle_at_bottom,_rgba(8,47,73,0.9),transparent_55%)]" />
      </div>

      <div className="container-x">
        {/* HERO */}
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Identidad Codeva
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
            El estudio detrás de las
            <span className="text-emerald-400"> webs que impulsan tu negocio.</span>
          </h1>
          <p className="mt-4 text-[15px] text-slate-300 max-w-2xl">
            Somos un estudio de desarrollo y diseño digital que combina
            estrategia, UX y tecnología para construir productos claros,
            rápidos y listos para crecer. Cuidamos tanto el código como la
            experiencia de quien lo usa.
          </p>
        </div>

        {/* CARDS IDENTIDAD */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Link
            href="/quienes-somos/nosotros"
            className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/70"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-300">
              Nosotros
            </p>
            <h2 className="mt-3 text-[17px] font-semibold text-white">
              Quién está detrás del estudio
            </h2>
            <p className="mt-3 text-[13px] text-slate-300">
              Cómo trabajamos, qué nos importa y por qué nos obsesiona la
              calidad en cada detalle del producto digital.
            </p>
            <span className="mt-4 inline-flex text-[12px] font-medium text-emerald-300 group-hover:text-emerald-200">
              Ver más →
            </span>
          </Link>

          <Link
            href="/quienes-somos/mision-vision"
            className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/70"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-300">
              Misión & Visión
            </p>
            <h2 className="mt-3 text-[17px] font-semibold text-white">
              Hacia dónde vamos como estudio
            </h2>
            <p className="mt-3 text-[13px] text-slate-300">
              Nuestra misión y visión para acompañar a negocios que entienden
              la web como un activo estratégico y medible.
            </p>
            <span className="mt-4 inline-flex text-[12px] font-medium text-emerald-300 group-hover:text-emerald-200">
              Ver más →
            </span>
          </Link>

          <Link
            href="/quienes-somos/valores"
            className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/70"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-300">
              Valores
            </p>
            <h2 className="mt-3 text-[17px] font-semibold text-white">
              Cómo se siente trabajar con nosotros
            </h2>
            <p className="mt-3 text-[13px] text-slate-300">
              Principios que aplicamos en cada proyecto: transparencia,
              detalle, comunicación clara y compromiso con el resultado.
            </p>
            <span className="mt-4 inline-flex text-[12px] font-medium text-emerald-300 group-hover:text-emerald-200">
              Ver más →
            </span>
          </Link>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
