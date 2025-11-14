// src/components/Service/ServiceDetail.tsx
"use client";

import { ArrowRight, CheckCircle2, Clock3, Sparkles } from "lucide-react";
import type { ServiceConfig } from "src/app/config/services";

type Props = {
  service: ServiceConfig;
};

const themeColors = {
  web: {
    glow1: "rgba(16,185,129,0.25)", // emerald
    glow2: "rgba(56,189,248,0.25)", // cyan
    line1: "rgba(148,163,184,0.25)",
    line2: "rgba(15,23,42,0.9)",
  },
  apps: {
    glow1: "rgba(59,130,246,0.25)", // blue
    glow2: "rgba(147,51,234,0.25)", // purple
    line1: "rgba(99,102,241,0.25)",
    line2: "rgba(15,23,42,0.9)",
  },
  branding: {
    glow1: "rgba(168,85,247,0.25)", // fuchsia
    glow2: "rgba(236,72,153,0.25)", // pink
    line1: "rgba(217,70,239,0.25)",
    line2: "rgba(15,23,42,0.9)",
  },
} satisfies Record<string, { glow1: string; glow2: string; line1: string; line2: string }>;

type ThemeKey = keyof typeof themeColors;

// “extendemos” ServiceConfig solo localmente con una prop opcional theme
type ThemedServiceConfig = ServiceConfig & {
  theme?: ThemeKey;
};

function resolveThemeKey(service: ServiceConfig): ThemeKey {
  const maybeThemed = service as ThemedServiceConfig;

  if (maybeThemed.theme && maybeThemed.theme in themeColors) {
    return maybeThemed.theme;
  }

  // fallback por categoría
  if (service.categoryId === "apps") return "apps";
  if (service.categoryId === "ux") return "branding";

  return "web";
}

export default function ServiceDetail({ service }: Props) {
  const themeKey = resolveThemeKey(service);
  const colors = themeColors[themeKey];


  return (
    <div
      className="
        relative overflow-hidden rounded-3xl
        bg-slate-950/90 text-slate-50
        border border-emerald-400/20
        shadow-[0_24px_80px_rgba(15,23,42,0.95)]
      "
    >
      {/* ==== BG ultra premium dinámico ==== */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Aurora animada */}
        <div className="absolute inset-0 opacity-[0.28] animate-aurora">
          <div
            className="absolute -inset-[40%]"
            style={{
              background: `radial-gradient(circle at 30% 20%, ${colors.glow1}, transparent 60%)`,
            }}
          />
          <div
            className="absolute -inset-[40%]"
            style={{
              background: `radial-gradient(circle at 80% 80%, ${colors.glow2}, transparent 60%)`,
            }}
          />
        </div>

        {/* Líneas suaves “holográficas” */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            background: `
              linear-gradient(115deg, ${colors.line1} 1px, transparent 1px),
              linear-gradient(250deg, ${colors.line2} 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />

        {/* Border glow suave */}
        <div className="absolute inset-0 rounded-[inherit] ring-1 ring-white/10" />
      </div>

      {/* ==== contenido ==== */}
      <div className="relative z-10 p-6 md:p-8 lg:p-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase text-emerald-100">
              <Sparkles className="h-3 w-3" />
              Servicio · Diseño & Desarrollo
            </span>

            {service.badge && (
              <span className="inline-flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-sky-200">
                {service.badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-300">
            <Clock3 className="h-3.5 w-3.5" />
            <span>Proyecto típico 4-8 semanas</span>
          </div>
        </div>

        {/* 👉 dos columnas solo en lg */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          {/* === Columna izquierda: narrativa === */}
          <div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-100 to-cyan-200 bg-clip-text text-transparent">
                {service.name}
              </span>
            </h2>

            <p className="mb-5 text-sm leading-relaxed text-slate-200 md:text-[15px]">
              {service.longDescription}
            </p>

            {service.bullets && service.bullets.length > 0 && (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
                  Qué incluye
                </p>
                <ul className="space-y-2">
                  {service.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-slate-100/95"
                    >
                      <span className="mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* === Columna derecha: ficha rápida + CTA === */}
          <aside
            className="
              relative rounded-2xl border border-slate-700/60
              bg-slate-900/60 p-4 md:p-5 backdrop-blur-sm
              flex flex-col gap-4 h-full
            "
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl border border-emerald-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Radiografía del proyecto
              </p>

              {service.tags && service.tags.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-emerald-400/40 bg-emerald-400/8 px-3 py-1 text-[11px] font-medium text-emerald-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between gap-3 rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      Nivel de personalización
                    </p>
                    <p className="text-sm font-semibold text-slate-50">
                      A medida, escalable
                    </p>
                  </div>
                  <div className="flex items-center text-[11px] text-emerald-300">
                    UI · UX · Dev
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 px-3 py-2.5">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      Ideal para
                    </p>
                    <p className="text-sm font-semibold text-slate-50">
                      Equipos que quieren “web nivel producto”
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 px-3 py-2.5">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      Enfoque
                    </p>
                    <p className="text-sm font-semibold text-slate-50">
                      Branding, performance & SEO técnico
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* empujamos CTA hacia abajo */}
            <div className="mt-auto">
              <button
                className="
                  group inline-flex w-full items-center justify-center gap-2
                  rounded-full bg-gradient-to-r
                  from-emerald-500 via-emerald-400 to-cyan-400
                  px-6 py-3 text-sm font-semibold text-slate-950
                  shadow-lg shadow-emerald-500/30
                  transition
                  hover:from-emerald-400 hover:via-cyan-400 hover:to-sky-400
                "
                onClick={() => {
                  alert("¡Te contactaremos pronto para hablar de tu proyecto!");
                }}
              >
                <span>Quiero este tipo de proyecto</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <p className="mt-3 text-center text-[11px] text-slate-400">
                También podemos adaptar este servicio a una versión{" "}
                <span className="text-emerald-300">MVP</span> o{" "}
                <span className="text-emerald-300">fase 2</span> según tu etapa.
              </p>
            </div>
          </aside>
        </div>

        {/* mini “timeline” de cómo trabajas */}
        <div className="mt-8 border-t border-slate-800 pt-4 text-[11px] text-slate-400">
          <p className="mb-2 font-semibold uppercase tracking-[0.2em]">
            Cómo lo construimos
          </p>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] font-semibold text-emerald-200">
                1
              </span>
              <span>
                Workshop de descubrimiento y arquitectura de contenidos.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] font-semibold text-emerald-200">
                2
              </span>
              <span>Prototipo de interfaz + guía de componentes para la web.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] font-semibold text-emerald-200">
                3
              </span>
              <span>Implementación técnica, pruebas y handoff al equipo.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
