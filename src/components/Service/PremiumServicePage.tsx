// src/components/Service/PremiumServicePage.tsx
"use client";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import { ReactNode } from "react";
import Link from "next/link";

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
  } = props;

  return (
    <>
    <Header />
    <section className="relative min-h-screen overflow-hidden pt-[6rem] p-5 md:p-10 lg:p-20">
      {/* === BG GOD MODE === */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#000915] to-[#00060c]" />
        <div className="absolute -top-32 -left-10 h-[26rem] w-[26rem] rounded-full bg-emerald-500/30 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/25 blur-3xl opacity-60" />
        <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.3),transparent_65%),radial-gradient(circle_at_bottom,_rgba(8,47,73,0.95),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(120deg,rgba(15,23,42,0.7)_1px,transparent_1px),linear-gradient(210deg,rgba(15,23,42,0.7)_1px,transparent_1px)] bg-[length:32px_32px]" />
      </div>

      <div className="container-x">
        {/* HERO */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
              {category}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.2rem]">
              {title} <br />
              <span className="text-emerald-400">{accent}</span>
            </h1>
            <p className="mt-4 max-w-xl text-[15px] text-slate-300">
              {description}
            </p>

            {extraHero && <div className="mt-5">{extraHero}</div>}

            <div className="mt-6 flex flex-wrap gap-3">
            <Link
            href="/#contacto"
            className="group inline-flex items-center justify-center rounded-full ..."
            >
            <span>Agendar llamada</span>
            </Link>

            <Link
            href="/#servicios"
            className="inline-flex items-center justify-center rounded-full ..."
            >
            Ver más servicios
            </Link>
            </div>
          </div>

          {/* CARD IMAGEN */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[2.3rem] bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.45),transparent_60%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.45),transparent_60%)] opacity-60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-emerald-400/30 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-emerald-950/40 shadow-[0_20px_60px_rgba(0,0,0,0.75)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover opacity-[0.92]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 text-[11px] text-slate-200">
                <div>
                  <p className="font-semibold text-emerald-300">
                    Entregamos
                  </p>
                  <p className="text-xs text-slate-200/90">
                    Diseño premium, performance y conversión.
                  </p>
                </div>
                <div className="flex gap-4 text-right text-[11px]">
                  <div>
                    <p className="text-slate-400">Performance</p>
                    <p className="font-semibold text-emerald-300">
                      +90 Lighthouse
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">Entrega</p>
                    <p className="font-semibold text-emerald-300">
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
                  <FaCheckCircle className="mt-[3px] flex-shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/5 p-5 text-sm text-slate-200">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Entregables
              </p>
              <ul className="mt-3 grid gap-2 md:grid-cols-2">
                {deliverables.map((item) => (
                  <li key={item} className="flex gap-2 text-[13px]">
                    <span className="mt-[6px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 text-sm text-slate-200">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Ideal para
              </p>
              <ul className="mt-3 space-y-2 text-[13px]">
                {idealFor.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[6px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-cyan-500/10 p-5 text-sm">
              <p className="text-[13px] text-emerald-100">
                Cuéntanos en qué punto está tu proyecto y te proponemos el tipo
                de sitio, la tecnología y el roadmap ideal para lanzar rápido
                sin perder calidad.
              </p>
            <Link
            href="/#contacto"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-white ..."
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
