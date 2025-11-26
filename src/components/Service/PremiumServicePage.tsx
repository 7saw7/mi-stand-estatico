// src/components/Service/PremiumServicePage.tsx
"use client";

import Footer from "src/components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import { ReactNode } from "react";
import Link from "next/link";

type ThemeId = "web" | "apps" | "branding";

const THEME_STYLES: Record<
  ThemeId,
  {
    label: string;
    accent: string;
    topGlow: string;
    bottomGlow: string;
    imageAura: string;
    imageBorder: string;
    entregamosLabel: string;
    metricLabel: string;
    checkIcon: string;
    deliverDot: string;
    idealDot: string;
    entregablesPanel: string;
    rightPanel: string;
    primaryCta: string;
    secondaryCta: string;
  }
> = {
  web: {
    label: "text-emerald-300",
    accent: "text-emerald-400",
    topGlow: "bg-emerald-500/30",
    bottomGlow: "bg-cyan-500/25",
    imageAura:
      "bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.45),transparent_60%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.45),transparent_60%)]",
    imageBorder: "border-emerald-400/30",
    entregamosLabel: "text-emerald-300",
    metricLabel: "text-emerald-300",
    checkIcon: "text-emerald-400",
    deliverDot: "bg-emerald-400",
    idealDot: "bg-cyan-400",
    entregablesPanel: "border-emerald-400/30 bg-emerald-500/5",
    rightPanel:
      "border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-cyan-500/10",
    primaryCta:
      "bg-emerald-400 text-slate-950 hover:bg-emerald-300 focus-visible:ring-emerald-400",
    secondaryCta:
      "border border-emerald-400/40 text-emerald-200 hover:bg-emerald-500/10",
  },
  apps: {
    label: "text-sky-300",
    accent: "text-sky-400",
    topGlow: "bg-sky-500/30",
    bottomGlow: "bg-cyan-500/25",
    imageAura:
      "bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.45),transparent_60%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.45),transparent_60%)]",
    imageBorder: "border-sky-400/40",
    entregamosLabel: "text-sky-300",
    metricLabel: "text-sky-300",
    checkIcon: "text-sky-400",
    deliverDot: "bg-sky-400",
    idealDot: "bg-cyan-400",
    entregablesPanel: "border-sky-400/30 bg-sky-500/5",
    rightPanel:
      "border-sky-500/30 bg-gradient-to-br from-sky-500/15 via-sky-500/5 to-indigo-500/10",
    primaryCta:
      "bg-sky-400 text-slate-950 hover:bg-sky-300 focus-visible:ring-sky-400",
    secondaryCta:
      "border border-sky-400/40 text-sky-200 hover:bg-sky-500/10",
  },
  branding: {
    label: "text-fuchsia-300",
    accent: "text-fuchsia-400",
    topGlow: "bg-fuchsia-500/30",
    bottomGlow: "bg-purple-600/25",
    imageAura:
      "bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.45),transparent_60%),radial-gradient(circle_at_bottom,rgba(129,140,248,0.45),transparent_60%)]",
    imageBorder: "border-fuchsia-400/40",
    entregamosLabel: "text-fuchsia-300",
    metricLabel: "text-fuchsia-300",
    checkIcon: "text-fuchsia-400",
    deliverDot: "bg-fuchsia-400",
    idealDot: "bg-purple-400",
    entregablesPanel: "border-fuchsia-400/30 bg-fuchsia-500/5",
    rightPanel:
      "border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/15 via-fuchsia-500/5 to-purple-500/10",
    primaryCta:
      "bg-fuchsia-400 text-slate-950 hover:bg-fuchsia-300 focus-visible:ring-fuchsia-400",
    secondaryCta:
      "border border-fuchsia-400/40 text-fuchsia-200 hover:bg-fuchsia-500/10",
  },
};

type PremiumServicePageProps = {
  category: string;
  title: string;
  accent: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  idealFor: string[];
  imageSrc: string;
  imageAlt: string;
  extraHero?: ReactNode;
  theme?: ThemeId; // 👈 NUEVO
};

export default function PremiumServicePage(props: PremiumServicePageProps) {
  const {
    category,
    title,
    accent,
    description,
    benefits,
    deliverables,
    idealFor,
    imageSrc,
    imageAlt,
    extraHero,
    theme = "web", // valor por defecto
  } = props;

  const t = THEME_STYLES[theme];

  const primaryCtaBase =
    "group inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";
  const secondaryCtaBase =
    "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition";

  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-[6rem] pb-16 px-5 md:px-10 lg:px-20">
        {/* === BG GOD MODE === */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#000915] to-[#00060c]" />
          <div
            className={`absolute -top-32 -left-10 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-60 ${t.topGlow}`}
          />
          <div
            className={`absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-60 ${t.bottomGlow}`}
          />
          <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.3),transparent_65%),radial-gradient(circle_at_bottom,_rgba(8,47,73,0.95),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(120deg,rgba(15,23,42,0.7)_1px,transparent_1px),linear-gradient(210deg,rgba(15,23,42,0.7)_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="container-x">
          {/* HERO */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${t.label}`}
              >
                {category}
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.2rem]">
                {title} <br />
                <span className={t.accent}>{accent}</span>
              </h1>
              <p className="mt-4 max-w-xl text-[15px] text-slate-300">
                {description}
              </p>

              {extraHero && <div className="mt-5">{extraHero}</div>}

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`https://wa.me/51916983980?text=${encodeURIComponent(
                    "Hola Codeva, quisiera agendar una reunión"
                  )}`}
                  target="_blank"
                  className="
                    inline-flex items-center justify-center rounded-full 
                    px-5 py-2.5 text-sm font-bold text-slate-900
                    bg-emerald-400 shadow-lg shadow-emerald-500/20
                    transition-all duration-200 ease-out 
                    hover:scale-110 hover:bg-emerald-300 active:scale-95
                  "
                >
                  Agendar llamada
                </Link>

                <Link
                  href="/servicios"
                  className={`${secondaryCtaBase} ${t.secondaryCta}`}
                >
                  Ver más servicios
                </Link>
              </div>
            </div>

            {/* CARD IMAGEN */}
            <div className="relative">
              <div
                className={`pointer-events-none absolute -inset-6 rounded-[2.3rem] opacity-60 blur-2xl ${t.imageAura}`}
              />
              <div
                className={`relative overflow-hidden rounded-[1.8rem] border bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/60 shadow-[0_20px_60px_rgba(0,0,0,0.75)] ${t.imageBorder}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-full w-full object-cover opacity-[0.92]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 text-[11px] text-slate-200">
                  <div>
                    <p className={`font-semibold ${t.entregamosLabel}`}>
                      Entregamos
                    </p>
                    <p className="text-xs text-slate-200/90">
                      Diseño premium, performance y conversión.
                    </p>
                  </div>
                  <div className="flex gap-4 text-right text-[11px]">
                    <div>
                      <p className="text-slate-400">Performance</p>
                      <p className={`font-semibold ${t.metricLabel}`}>
                        +90 Lighthouse
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400">Entrega</p>
                      <p className={`font-semibold ${t.metricLabel}`}>
                        &lt; 3 semanas*
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENIDO */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white md:text-2xl">
                Qué incluye este servicio
              </h2>
              <ul className="space-y-3 text-sm text-slate-200">
                {benefits.map((item) => (
                  <li key={item} className="flex gap-2">
                    <FaCheckCircle
                      className={`mt-[3px] flex-shrink-0 ${t.checkIcon}`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`mt-6 rounded-2xl border p-5 text-sm text-slate-200 ${t.entregablesPanel}`}
              >
                <p
                  className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${t.label}`}
                >
                  Entregables
                </p>
                <ul className="mt-3 grid gap-2 md:grid-cols-2">
                  {deliverables.map((item) => (
                    <li key={item} className="flex gap-2 text-[13px]">
                      <span
                        className={`mt-[6px] h-[6px] w-[6px] flex-shrink-0 rounded-full ${t.deliverDot}`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 text-sm text-slate-200">
                <p
                  className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${t.label}`}
                >
                  Ideal para
                </p>
                <ul className="mt-3 space-y-2 text-[13px]">
                  {idealFor.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className={`mt-[6px] h-[6px] w-[6px] flex-shrink-0 rounded-full ${t.idealDot}`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`rounded-2xl p-5 text-sm ${t.rightPanel}`}>
                <p className="text-[13px] text-emerald-50/90">
                  Cuéntanos en qué punto está tu proyecto y te proponemos el
                  tipo de sitio, la tecnología y el roadmap ideal para lanzar
                  rápido sin perder calidad.
                </p>
                <Link
                  href="/contacto"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
                >
                  Enviar brief del proyecto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
