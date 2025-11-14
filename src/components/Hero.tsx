"use client";

import React from "react";
import {
  TbDeviceDesktopCheck,
  TbSeo,
  TbAbacus,
  TbCalendarCheck,
} from "react-icons/tb";
import { SiLighthouse } from "react-icons/si";

const Hero: React.FC = () => {
  return (
      <section
        className={[
          "hero-section",
          "relative z-0 overflow-hidden text-white",
          "bg-[linear-gradient(to_bottom,rgba(2,6,23,0.94)_0%,rgba(3,10,28,0.92)_50%,rgba(2,6,23,0.9)_100%)]",
        ].join(" ")}
      >
      {/* ===== BG IMAGE ===== */}
      <div
        aria-hidden
        className="absolute inset-0 z-12"
        style={{
          backgroundImage: "url('/assets/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.75,          // súbelo para que se note
          filter: "brightness(0.7) saturate(1.2)",
        }}
      />

      {/* Overlay suave para que el texto siga siendo legible */}
      <div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(circle at 15% 30%, rgba(0,0,0,0.15), transparent 55%)," +
            "radial-gradient(circle at 85% 20%, rgba(0,0,0,0.4), transparent 60%)," +
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(2,6,23,0.95))",
        }}
      />

      {/* Glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 z-20 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.24),transparent)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 z-20 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),transparent)] blur-3xl"
      />

      {/* CONTENIDO */}
      <div className="relative z-30 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:py-24">
        {/* ==== Columna izquierda ==== */}
        <div className="max-w-xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
            Desarrollo Web Profesional
          </p>

          <h1
            className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
          >
            Páginas web que{" "}
            <span className="text-emerald-400 text-shimmer">
              impulsan tu negocio
            </span>
            .
          </h1>

          <p
            className="text-base text-slate-50/90"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
          >
            Creamos sitios modernos, rápidos y optimizados para destacar tu
            marca. Desde landing pages hasta e-commerce a medida.
          </p>

          <ul className="mt-4 grid gap-3 text-sm text-emerald-200/90">
            <li className="flex items-center gap-2.5">
              <TbDeviceDesktopCheck className="h-5 w-5 flex-shrink-0 text-emerald-300" />
              <span>Diseño responsive y enfocado en conversión.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <TbSeo className="h-5 w-5 flex-shrink-0 text-emerald-300" />
              <span>Optimización SEO y performance.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <TbAbacus className="h-5 w-5 flex-shrink-0 text-emerald-300" />
              <span>Integraciones con analítica y automatizaciones.</span>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold text-slate-900
                         bg-emerald-400 shadow-lg shadow-emerald-500/20
                         transition-all duration-200 ease-out hover:scale-110 hover:bg-emerald-300 active:scale-95"
            >
              Agenda una reunión
            </a>
            <a
              href="#servicios-web"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300/40 px-4 py-2 text-xs font-medium text-emerald-200
                         transition-all duration-200 ease-out hover:bg-emerald-300/10 hover:scale-105 md:text-sm"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* ==== Columna derecha: bloque premium ==== */}
        <div className="flex w-full justify-center lg:w-auto lg:justify-end">
          <div className="relative w-full max-w-sm">
            {/* Glow exterior */}
            <div
              aria-hidden
              className="absolute -inset-0.5 rounded-3xl bg-[conic-gradient(from_140deg_at_0%_0%,rgba(16,185,129,0.8),rgba(56,189,248,0.7),rgba(16,185,129,0.3))] opacity-70 blur-sm"
            />
            {/* Card principal */}
            <div className="relative rounded-3xl border border-emerald-400/40 bg-slate-950/80 px-5 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.85)] backdrop-blur-xl">
              {/* Etiqueta superior */}
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
                  Entregamos
                </span>
              </div>

              {/* Headline de oferta */}
              <p className="text-sm font-semibold leading-snug text-slate-50">
                Landing pages, corporativos y e-commerce profesionales.
              </p>

              {/* Línea divisoria */}
              <div className="mt-4 h-px w-full bg-gradient-to-r from-emerald-400/30 via-cyan-400/20 to-transparent" />

              {/* Stats */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {/* Performance */}
                <div className="rounded-2xl border border-emerald-400/35 bg-slate-900/80 px-3 py-2.5">
                  <p className="text-[10px] text-slate-400">Performance</p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <SiLighthouse className="h-4 w-4 text-emerald-300" />
                    <p className="text-sm font-semibold text-emerald-300">
                      +90 Lighthouse
                    </p>
                  </div>
                  <p className="mt-1 text-[12px] text-slate-500/90">
                    Métricas core web vitals optimizadas.
                  </p>
                </div>

                {/* Entrega */}
                <div className="rounded-2xl border border-emerald-400/35 bg-slate-900/80 px-3 py-2.5">
                  <p className="text-[10px] text-slate-400">Entrega</p>
                  <div className="mt-1 flex items-center gap-1.5">
                    <TbCalendarCheck className="h-4 w-4 text-emerald-300" />
                    <p className="text-sm font-semibold text-emerald-300">
                      &lt; 3 semanas *
                    </p>
                  </div>
                  <p className="mt-1 text-[12px] text-slate-500/90">
                    Plan claro y avances semana a semana.
                  </p>
                </div>
              </div>

              {/* Nota inferior */}
              <p className="mt-3 text-[10px] leading-relaxed text-slate-500">
                *Dependiendo del alcance del proyecto. Ideal para resultados
                profesionales rápidos.
              </p>

              {/* Esquinas decorativas */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-1 -top-1 h-4 w-4 rounded-tl-3xl border-l border-t border-emerald-400/50"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-1 -bottom-1 h-4 w-4 rounded-br-3xl border-b border-r border-cyan-400/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
