"use client";

import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isNegative, setIsNegative] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsNegative((prev) => !prev);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const el = document.querySelector(".bh-wrapper");
  const handleMove = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    (el as HTMLElement).style.transform = `translateX(8%) rotateX(${y}deg) rotateY(${x}deg)`;
  };
  window.addEventListener("mousemove", handleMove);
  return () => window.removeEventListener("mousemove", handleMove);
}, []);

  return (
    <section
      className={[
        "hero-section",
        "relative overflow-hidden text-white bg-[linear-gradient(to_bottom,rgba(2,6,23,0.94)_0%,rgba(3,10,28,0.92)_50%,rgba(2,6,23,0.9)_100%)]",
        isNegative ? "hero-negative" : "hero-normal",
      ].join(" ")}
    >
      {/* Agujero negro */}
      <div className="pointer-events-none absolute inset-1 z-0 flex items-center justify-center">
        <div className="bh-wrapper bh-supernova">
          <div className="bh-supernova-infinite" />
          <div className="bh-supernova-pulse" />

          <div className="bh-galaxy" />
          <div className="bh-noise" />
          <div className="bh-stars" />

          <div className="bh-cloud-ring bh-cloud-ring--1" />
          <div className="bh-cloud-ring bh-cloud-ring--2" />
          <div className="bh-cloud-ring bh-cloud-ring--3" />

          <div className="bh-lava bh-lava--1" />
          <div className="bh-lava bh-lava--2" />
          <div className="bh-lava bh-lava--3" />
          <div className="bh-lava-clouds" />

          <div className="bh-halo" />
          <div className="bh-waves" />
          <div className="bh-fog" />
          <div className="bh-flare-core" />
          <div className="bh-sparks" />

          <div className="bh-ring-soft" />
          <div className="bh-orbit-lines" />

          <div className="bh-stream" />
          <div className="bh-caustic bh-caustic--up" />
          <div className="bh-caustic bh-caustic--down" />

          <div className="bh-warp" />
          <div className="bh-glow" />
          <div className="bh-jet bh-jet--right" />
          <div className="bh-jet bh-jet--left" />
          <div className="bh-disk" />
          <div className="bh-disk-lines" />
          <div className="bh-arc bh-arc--top" />
          <div className="bh-arc bh-arc--bottom" />
          <div className="bh-ring-strong" />

          {/* Núcleo con explosión solo aquí */}
          <div
            className={
              "bh-core " + (isNegative ? "bh-explosion" : "")
            }
          />
        </div>
      </div>

      {/* Texto */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-start lg:items-center gap-10">
        <div className="max-w-xl space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/70">
            Desarrollo Web Profesional
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Páginas web que{" "}
            <span className="text-emerald-400">impulsan tu negocio</span>.
          </h1>
          <p
            className="text-base text-slate-50"
            style={{
              textShadow:
                "0 0 2px rgba(0,0,0,0.6), 0 0 6px rgba(0,0,0,0.45), 0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            Creamos sitios modernos, rápidos y optimizados para destacar tu
            marca. Desde landing pages hasta e-commerce a medida.
          </p>

          <ul className="mt-3 grid gap-2 text-sm text-emerald-200/90">
            <li>• Diseño responsive y enfocado en conversión.</li>
            <li>• Optimización SEO y performance.</li>
            <li>• Integraciones con analítica y automatizaciones.</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-emerald-400 text-slate-900 hover:bg-emerald-300 transition shadow-lg shadow-emerald-500/20"
            >
              Agenda una reunión
            </a>
            <a
              href="#servicios-web"
              className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs md:text-sm font-medium border border-emerald-300/40 text-emerald-200 hover:bg-emerald-300/10 transition"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* Panel derecho */}
        <div className="w-full lg:w-auto flex flex-col gap-3 text-xs md:text-sm">
          <div className="rounded-2xl border border-emerald-300/30 bg-slate-900/80 px-4 py-3 shadow-lg backdrop-blur-sm">
            <p className="text-emerald-300 text-[11px] uppercase tracking-[0.16em]">
              Entregamos
            </p>
            <p className="text-slate-50 font-semibold">
              Landing pages, corporativos y e-commerce profesionales.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-700/60 px-3 py-2 backdrop-blur-sm">
              <p className="text-[10px] text-slate-400">Performance</p>
              <p className="text-sm font-semibold text-emerald-300">
                +90 Lighthouse
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-700/60 px-3 py-2 backdrop-blur-sm">
              <p className="text-[10px] text-slate-400">Entrega</p>
              <p className="text-sm font-semibold text-emerald-300">
                &lt; 3 semanas *
              </p>
            </div>
          </div>
          <p className="text-[9px] text-slate-500">
            *Dependiendo del alcance del proyecto. Ideal para resultados
            profesionales rápidos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
