import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FiTarget,
  FiUsers,
  FiZap,
  FiTrendingUp,
  FiCheckCircle,
  FiLayout,
  FiCode,
  FiHeart,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Nosotros | Codeva Studio",
  description:
    "Conoce quién está detrás de Codeva Studio, nuestra forma de trabajar y cómo acompañamos cada proyecto.",
};

export default function NosotrosPage() {
  return (
    <>

      <section className="relative min-h-screen overflow-hidden pt-[6rem] p-5 md:p-10 lg:p-20">
        {/* BG premium */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {/* base */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#000915] to-[#00060c]" />
          {/* auroras */}
          <div className="absolute -top-24 left-1/3 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-emerald-500/25 blur-3xl opacity-70" />
          <div className="absolute -bottom-32 right-0 h-[26rem] w-[26rem] rounded-full bg-cyan-500/25 blur-3xl opacity-60" />
          {/* grid sutil */}
          <div className="absolute inset-0 opacity-[0.18] mix-blend-soft-light bg-[radial-gradient(circle_at_0_0,rgba(45,212,191,0.16),transparent_55%),radial-gradient(circle_at_100%_0,rgba(56,189,248,0.16),transparent_55%)]" />
        </div>

        <div className="container-x">
          {/* HERO */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
            {/* Columna texto principal */}
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Nosotros
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
                Un estudio pequeño, con
                <span className="text-emerald-400"> obsesión por el detalle.</span>
              </h1>
              <p className="mt-4 text-[15px] text-slate-300">
                En Codeva Studio mezclamos diseño, desarrollo y estrategia para
                construir webs que no solo se ven bien, sino que hacen su trabajo:
                explicar, vender y generar confianza.
              </p>

              {/* Pills con iconos */}
              <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-medium text-emerald-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1">
                  <FiTarget className="h-3.5 w-3.5" />
                  Estudio independiente
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/5 px-3 py-1">
                  <FiUsers className="h-3.5 w-3.5" />
                  Pocos proyectos a la vez
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/5 px-3 py-1">
                  <FiTrendingUp className="h-3.5 w-3.5" />
                  Enfoque en negocio
                </span>
              </div>
            </div>

            {/* Columna visual / imagen */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/15 via-slate-900/80 to-cyan-500/20 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.9)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-200">
                      Snapshot del estudio
                    </p>
                    <p className="mt-1 text-[13px] text-slate-100">
                      Un equipo pequeño, procesos serios y ejecuciones muy
                      cuidadas para proyectos que necesitan cariño y criterio.
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/40 bg-slate-950/60">
                    <FiCode className="h-4 w-4 text-emerald-200" />
                  </div>
                </div>

                <div className="mt-4 relative h-40 w-full rounded-2xl overflow-hidden border border-emerald-400/25 bg-slate-900/80">
                  {/* Cambia la ruta por una que exista en tu proyecto */}
                  <Image
                    src="/media/about/codeva-desk.jpg"
                    alt="Vista del espacio de trabajo en Codeva Studio"
                    fill
                    className="object-cover opacity-[0.96]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-emerald-500/25" />
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/40">
                      <FiHeart className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    <span>Diseño + desarrollo en un mismo flujo.</span>
                  </div>
                  <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-200">
                    Detalle por encima de volumen
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CUERPO + CARDS */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Texto + cómo trabajamos / lo que cuidamos */}
            <div className="space-y-6 text-[14px] text-slate-200">
              <p>
                Trabajamos con una estructura ligera: pocos proyectos al mismo
                tiempo, comunicación directa y entregas claras semana a semana.
                Preferimos hacer menos cosas, pero hacerlas muy bien.
              </p>
              <p>
                Cada proyecto comienza entendiendo tu negocio, tu contexto y tus
                restricciones. Desde ahí definimos qué tipo de sitio necesitas,
                qué se debe medir y cómo vamos a construir para que el resultado
                sea sostenible en el tiempo.
              </p>
              <p>
                Nos gusta documentar, dejar procesos ordenados y evitar
                dependencias innecesarias. Queremos que tu web pueda crecer contigo
                sin convertirse en una caja negra.
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {/* Cómo trabajamos */}
                <div className="rounded-2xl border border-emerald-400/35 bg-emerald-500/5 p-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/60">
                      <FiLayout className="h-3.5 w-3.5 text-emerald-200" />
                    </span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                      Cómo trabajamos
                    </p>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-[13px]">
                    {[
                      "Kickoff claro con objetivos y métricas.",
                      "Sprints cortos y revisiones frecuentes.",
                      "Entregas navegables, no solo diseños estáticos.",
                      "Comunicación honesta sobre tiempos y alcances.",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <FiCheckCircle className="mt-[2px] h-3.5 w-3.5 flex-shrink-0 text-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lo que cuidamos */}
                <div className="rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 border border-emerald-300/40">
                      <FiZap className="h-3.5 w-3.5 text-emerald-200" />
                    </span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                      Lo que cuidamos
                    </p>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-[13px]">
                    {[
                      "Performance y experiencia móvil.",
                      "Claridad en los textos y mensajes clave.",
                      "Arquitectura preparada para crecer.",
                      "Entregables que tu equipo puede seguir usando.",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <FiCheckCircle className="mt-[2px] h-3.5 w-3.5 flex-shrink-0 text-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Columna derecha: lo que nos mueve + próximo paso */}
            <div className="space-y-6 text-sm text-slate-100">
              {/* Lo que nos mueve */}
              <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-cyan-500/10 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-emerald-300/60 bg-emerald-500/20">
                    <FiTarget className="h-3.5 w-3.5 text-emerald-100" />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-200">
                    Lo que nos mueve
                  </p>
                </div>
                <p className="mt-3 text-[13px]">
                  Nos entusiasman los proyectos donde la web es más que un
                  folleto: productos, SaaS, herramientas internas y sitios que
                  se conectan con otras piezas del negocio.
                </p>
                <p className="mt-3 text-[13px]">
                  Si buscas un partner que se involucre de verdad y piense en el
                  largo plazo, probablemente nos llevemos bien.
                </p>
              </div>

              {/* Próximo paso */}
              <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-5 text-[13px] text-slate-200">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-500/15">
                    <FiUsers className="h-3.5 w-3.5 text-emerald-200" />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                    Próximo paso
                  </p>
                </div>
                <p className="mt-3">
                  Cuéntanos brevemente qué necesitas y en qué punto está tu
                  proyecto. Te proponemos una llamada corta para ver si tiene
                  sentido trabajar juntos.
                </p>
                <Link
                  href="/#contacto"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-slate-900 shadow-[0_14px_35px_rgba(16,185,129,0.6)] transition hover:bg-emerald-100"
                >
                  Agendar una llamada
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
