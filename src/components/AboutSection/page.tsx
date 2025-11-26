// src/components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpSoft = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <motion.section
      id="nosotros"
      className="relative py-6 lg:py-10" // ❗ podrías probar sin overflow-hidden aquí
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* === BG GOD MODE OPTIMIZADO === */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Desktop / tablet (versión completa) */}
        <div className="hidden h-full w-full md:block">
          {/* 1. Nebulosa volumétrica con aurora dinámica */}
          <div className="absolute inset-0">
            <div
              className="absolute -inset-[45%] animate-aurora-3d opacity-[0.24]"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(0,255,180,0.35), transparent 60%), radial-gradient(circle at 70% 80%, rgba(0,140,255,0.35), transparent 60%), radial-gradient(circle at 50% 50%, rgba(255,0,200,0.22), transparent 65%)",
              }}
            />
          </div>

          {/* 2. Light-flow dinámico (río de luz) */}
          <div className="absolute inset-0 overflow-hidden opacity-[0.12]">
            <div
              className="absolute -top-1/3 left-[-30%] h-[160%] w-[160%] animate-lightflow"
              style={{
                background:
                  "linear-gradient(120deg, transparent 0%, rgba(0,240,255,0.3) 40%, rgba(0,255,180,0.4) 60%, transparent 100%)",
                filter: "blur(80px)", // antes 120px
                willChange: "transform", // solo aquí
              }}
            />
          </div>

          {/* 3. Grid futurista sutil */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(210deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* 4. Noise procedural ligero */}
          <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0,transparent_60%)]" />

          {/* 5. Glow radial cinematográfico */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,21,16,0)_0%,rgba(3,21,16,0.6)_70%,rgba(3,21,16,0.9)_100%)]" />
        </div>

        {/* Mobile (versión más ligera) */}
        <div className="block h-full w-full md:hidden">
          {/* Aurora estática simple */}
          <div
            className="absolute inset-0 opacity-35"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(0,255,180,0.24), transparent 60%), radial-gradient(circle at 70% 80%, rgba(0,140,255,0.22), transparent 60%)",
            }}
          />
          {/* Grid muy suave, sin mix-blend para ahorrar */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(210deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          {/* Glow central simple */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,21,16,0.12)_0%,rgba(3,21,16,0.88)_100%)]" />
        </div>
      </div>

      <div className="container-x lg:px-12 xl:px-20 2xl:px-32">
        {/* HERO QUIÉNES SOMOS */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative mx-auto max-w-4xl"
        >
          {/* borde shimmer animado (solo desktop para aligerar aún más) */}
          <div className="pointer-events-none absolute -inset-[1px] hidden rounded-[1.9rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.0),rgba(16,185,129,0.4),rgba(56,189,248,0.5),rgba(16,185,129,0.0))] opacity-70 md:block" />

          <div className="relative rounded-[1.7rem] border border-slate-700/80 bg-slate-950/95 px-6 py-10 text-center shadow-[0_18px_60px_rgba(15,23,42,0.9)] md:bg-slate-950/90 md:shadow-[0_30px_120px_rgba(15,23,42,0.95)] md:backdrop-blur">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-emerald-300/90">
              Personas detrás del código
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
              ¿Quiénes somos?
            </h2>
            <p className="mt-4 text-sm text-slate-200 sm:text-base">
              Más allá de entregar software, nos vemos como aliados estratégicos.
              Nos obsesiona entender tu negocio, tus desafíos y tus métricas
              para convertirlos en productos digitales que realmente importan.
            </p>

            {/* chips flotando */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-[11px]">
              <span className="animate-float-slow rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-emerald-100">
                Estrategia · Diseño · Tecnología
              </span>
              <span className="animate-float-slow-delayed rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-cyan-100">
                Producto digital, no solo “webs”
              </span>
            </div>
          </div>
        </motion.div>

        {/* ENFOQUE / DIFERENCIALES + TIMELINE */}
        <motion.div
          className="mt-7 grid gap-8 lg:grid-cols-[1.4fr_minmax(0,1fr)] lg:items-stretch"
          variants={fadeUpSoft}
          transition={{ delay: 0.2, duration: 0.55, ease: "easeOut" }}
        >
          {/* ENFOQUE */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/95 px-6 py-7 shadow-[0_18px_60px_rgba(15,23,42,0.9)] md:bg-slate-950/90 md:shadow-[0_24px_80px_rgba(15,23,42,0.95)] md:backdrop-blur h-full">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-55"
            >
              <div className="absolute -top-32 -left-4 h-36 w-36 rounded-full bg-emerald-500/20 blur-2xl" />
              <div className="absolute -bottom-32 right-4 h-36 w-36 rounded-full bg-cyan-400/15 blur-2xl" />
            </div>
            <div className="relative ">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-300">
                Nuestro enfoque
              </p>
              <h3 className="mt-8 text-xl font-semibold text-slate-50">
                Estrategia, diseño y tecnología en el mismo equipo.
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                Antes de escribir una sola línea de código, alineamos
                objetivos, audiencia y métricas. A partir de ahí diseñamos
                experiencias que se sienten claras, modernas y fáciles de usar;
                luego las llevamos a producción con arquitecturas preparadas
                para crecer.
              </p>
              <div className="mt-5 grid gap-4 text-sm sm:grid-cols-3">
                {[
                  {
                    label: "Estrategia",
                    text: "Entendemos tu modelo de negocio y definimos qué vale la pena construir ahora.",
                  },
                  {
                    label: "Diseño",
                    text: "Interfaces orientadas a conversión, claridad de contenido y confianza de marca.",
                  },
                  {
                    label: "Tecnología",
                    text: "Stack moderno, buenas prácticas y rendimiento como base, no como extra.",
                  },
                ].map((item) => (
                  <div key={item.label} className="relative">
                    <p className="text-[11px] mt-6 font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-3 text-xs text-slate-100">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-950/95 px-6 py-7 shadow-[0_18px_60px_rgba(15,23,42,0.9)] md:bg-slate-950/90 md:shadow-[0_24px_80px_rgba(15,23,42,0.95)] md:backdrop-blur">
            {/* línea vertical luminosa */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-7 top-10 bottom-10 w-px bg-gradient-to-b from-emerald-400/40 via-emerald-300/70 to-cyan-400/50"
            />
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
              Cómo lo construimos
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-200">
              {[
                {
                  title: "Descubrimiento",
                  text: "Profundizamos en tu contexto, usuarios, procesos y prioridades para definir un roadmap realista.",
                },
                {
                  title: "Diseño & prototipo",
                  text: "Bocetamos flujos, pantallas y contenido, y validamos rápido para reducir riesgos antes del desarrollo.",
                },
                {
                  title: "Desarrollo & lanzamiento",
                  text: "Implementamos con buenas prácticas, pruebas y observabilidad para que el lanzamiento sea sólido desde el día uno.",
                },
                {
                  title: "Acompañamiento",
                  text: "Medimos, iteramos y seguimos construyendo contigo para que tu producto no se quede estático.",
                },
              ].map((step, index) => (
                <div key={step.title} className="relative flex gap-3">
                  {/* nodo numerado */}
                  <div className="relative z-10 mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/25 text-[11px] font-semibold text-emerald-100">
                      {index + 1}
                    </span>
                  </div>
                  <div className="relative">
                    <p className="font-semibold text-slate-50">
                      {step.title}
                    </p>
                    <p className="text-[11px] text-slate-400">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA CIERRE */}
        <motion.div
          variants={fadeUpSoft}
          transition={{ delay: 0.3, duration: 0.55, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 text-center"
        >
          <p className="max-w-xl text-sm text-white/90">
            Si sientes que tu presencia digital ya no refleja el nivel de tu
            negocio, conversemos. Nos encantará diseñar y construir algo que te
            haga sentir orgulloso cada vez que lo abras.
          </p>
          <Link
            href={`https://wa.me/51916983980?text=${encodeURIComponent(
              "Hola Codeva, estoy interesado en un proyecto y quisiera mas información."
            )}`}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:from-emerald-400 hover:via-cyan-400 hover:to-sky-400"
          >
            Hablemos de tu proyecto
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
