import type { Metadata } from "next";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Image from "next/image";
import {
  FiTarget,
  FiCompass,
  FiTrendingUp,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";
import { Crosshair } from "lucide-react";

export const metadata: Metadata = {
  title: "Misión y Visión | Codeva Studio",
  description:
    "Nuestra misión y visión como estudio de desarrollo web y producto digital.",
};

export default function MisionVisionPage() {
  return (
    <>
      <Header />

      <section className="relative min-h-screen overflow-hidden pt-[6rem] p-5 md:p-10 lg:p-20">
      <div className="absolute inset-0 bg-black/60 -z-10" />
        {/* === BG PRO AZUL/VIOLETA === */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {/* base */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_140%_at_0%_0%,#1d4ed8_0%,#020617_40%,#020012_85%,#000000_100%)]" />
          {/* auroras */}
          <div className="absolute -top-24 left-0 h-[22rem] w-[22rem] rounded-full bg-cyan-400/30 blur-3xl opacity-80" />
          <div className="absolute -bottom-32 right-10 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/25 blur-3xl opacity-70" />
          {/* grid sutil */}
          <div className="absolute inset-0 opacity-[0.22] mix-blend-soft-light bg-[linear-gradient(115deg,rgba(56,189,248,0.25)_1px,transparent_1px),linear-gradient(295deg,rgba(129,140,248,0.18)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>

        <div className="container-x">
          {/* HERO */}
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Misión & Visión
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
              Hacer que la web de tu negocio
              <span className="text-emerald-400">
                {" "}
                sea un activo, no un problema.
              </span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] text-slate-200">
              Vemos cada proyecto como una pieza más dentro de tu sistema
              digital: web, producto, procesos y datos. Nuestra misión es que
              todo eso trabaje a favor de tu negocio, no en contra.
            </p>

            {/* Pills con iconos */}
            <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-medium text-cyan-50">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1">
                <Crosshair className="h-3.5 w-3.5" />
                Foco en resultados
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/35 bg-indigo-500/10 px-3 py-1">
                <FiCompass className="h-3.5 w-3.5" />
                Estrategia antes de código
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-1">
                <FiTrendingUp className="h-3.5 w-3.5" />
                Crecimiento sostenible
              </span>
            </div>
          </div>

          {/* CARDS MISION / VISION */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Misión */}
            <div className="relative overflow-hidden rounded-2xl border border-cyan-400/45 bg-gradient-to-br from-cyan-500/20 via-slate-900/85 to-emerald-500/15 p-6 text-sm text-slate-100 shadow-[0_22px_70px_rgba(0,0,0,0.9)]">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-cyan-300/70 bg-slate-950/70">
                  <FiTarget className="h-4 w-4 text-cyan-200" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-200">
                    Misión
                  </p>
                  <h2 className="mt-3 text-[17px] font-semibold text-white">
                    Convertir sitios web en herramientas que generen resultados.
                  </h2>
                </div>
              </div>

              <p className="mt-3 text-[13px]">
                Diseñamos y desarrollamos soluciones digitales que se conectan
                con tus objetivos de negocio: captar clientes, explicar mejor lo
                que haces, automatizar procesos o mejorar la experiencia de tus
                usuarios.
              </p>
              <p className="mt-3 text-[13px]">
                Queremos que cuando alguien visite tu web, entienda rápido por
                qué existes, qué ofreces y cómo empezar a trabajar contigo.
              </p>

              {/* Bullets + imagen lateral */}
              <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-stretch">
                <ul className="flex-1 space-y-1.5 text-[13px]">
                  {[
                    "Webs alineadas con métricas de negocio.",
                    "Arquitecturas pensadas para iterar, no para rehacer.",
                    "Procesos claros desde discovery hasta lanzamiento.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <FiCheckCircle className="mt-[2px] h-3.5 w-3.5 flex-shrink-0 text-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-4 h-36 w-full flex-1 overflow-hidden rounded-2xl border border-cyan-400/35 bg-slate-950/90 p-2 md:mt-0">
                  <Image
                    src="/media/about/mission-grid.jpg"
                    alt="Visual de una interfaz enfocada en métricas y resultados"
                    fill
                    className="object-cover opacity-[0.96]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-cyan-400/25" />
                </div>
              </div>
            </div>

            {/* Visión */}
            <div className="relative overflow-hidden rounded-2xl border border-indigo-400/50 bg-gradient-to-br from-slate-950/90 via-indigo-900/70 to-fuchsia-500/20 p-6 text-sm text-slate-100 shadow-[0_22px_70px_rgba(0,0,0,0.9)]">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-indigo-300/70 bg-slate-950/70">
                  <FiGlobe className="h-4 w-4 text-indigo-200" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-indigo-200">
                    Visión
                  </p>
                  <h2 className="mt-3 text-[17px] font-semibold text-white">
                    Ser el estudio al que acuden los negocios cuando quieren
                    subir de liga en digital.
                  </h2>
                </div>
              </div>

              <p className="mt-3 text-[13px]">
                Aspiramos a ser el partner técnico y creativo de empresas que
                ven la tecnología como una inversión estratégica, no solo como
                un gasto puntual.
              </p>
              <p className="mt-3 text-[13px]">
                Queremos construir productos y sitios que sigan funcionando,
                rindiendo y viéndose bien dentro de varios años, no solo el día
                del lanzamiento.
              </p>

              <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-stretch">
                <ul className="flex-1 space-y-1.5 text-[13px]">
                  {[
                    "Relaciones de largo plazo con los clientes.",
                    "Productos que escalan con el negocio.",
                    "Experiencias digitales coherentes en todo el ecosistema.",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <FiCheckCircle className="mt-[2px] h-3.5 w-3.5 flex-shrink-0 text-indigo-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-10 h-36 w-full flex-1 overflow-hidden rounded-2xl border border-cyan-400/35 bg-slate-950/90 p-2 md:mt-0">
                  <Image
                    src="/media/about/vision-grid.jpg"
                    alt="Mapa conceptual de ecosistema digital y crecimiento"
                    fill
                    className="object-cover opacity-[0.96] "
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-fuchsia-400/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
