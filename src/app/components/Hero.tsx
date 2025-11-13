"use client";

// 1. Quitamos useState, useRef, useEffect y los estilos del Hero.module.css
import React from "react"; 

// 2. Mantenemos solo los iconos que sí usamos
import { 
  TbDeviceDesktopCheck, 
  TbSeo, 
  TbAbacus, 
  TbCalendarCheck 
} from "react-icons/tb";
import { SiLighthouse } from "react-icons/si";

const Hero: React.FC = () => {
  // 3. Eliminamos TODOS los hooks (useState, useRef, useEffects)
  // Ya no son necesarios porque controlaban la animación.

  return (
    <section
  className={[
    "hero-section",
    // ESTE ES EL BUENO, EL DEGRADADO OSCURO ORIGINAL
    "relative overflow-hidden text-white bg-[linear-gradient(to_bottom,rgba(2,6,23,0.94)_0%,rgba(3,10,28,0.92)_50%,rgba(2,6,23,0.9)_100%)]",
  ].join(" ")}
>
      
      {/* 5. AQUÍ ESTABA EL DIV DEL "AGUJERO NEGRO". 
           Lo hemos eliminado por completo.
      */}

      {/* Texto */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-start lg:items-center gap-10">
        
        {/* Este contenido se queda exactamente igual */}
        <div className="max-w-xl space-y-4">
        <p className="text-xs uppercase font-semibold tracking-widest text-emerald-400">
          Desarrollo Web Profesional
        </p>
          <h1 
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
            style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)" }}
          >
            Páginas web que{" "}
            <span className="text-emerald-400 text-shimmer">impulsan tu negocio</span>.
          </h1>
          <p
            className="text-base text-slate-50"
            style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)" }}
          >
            Creamos sitios modernos, rápidos y optimizados para destacar tu
            marca. Desde landing pages hasta e-commerce a medida.
          </p>

          <ul className="mt-4 grid gap-3 text-sm text-emerald-200/90">
            <li className="flex items-center gap-2.5">
              <TbDeviceDesktopCheck className="text-emerald-300 h-5 w-5 flex-shrink-0" />
              <span>Diseño responsive y enfocado en conversión.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <TbSeo className="text-emerald-300 h-5 w-5 flex-shrink-0" />
              <span>Optimización SEO y performance.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <TbAbacus className="text-emerald-300 h-5 w-5 flex-shrink-0" />
              <span>Integraciones con analítica y automatizaciones.</span>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
  href="#contacto"
  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium font-bold bg-emerald-400 text-slate-900 
             shadow-lg shadow-emerald-500/20 
             transition-all duration-200 ease-in-out 
             hover:bg-emerald-300 hover:scale-110 
             active:scale-95"
>
  Agenda una reunión
</a>
            <a
              href="#servicios-web"
              className="inline-flex items-center transition-all duration-200 ease-in-out 
             hover:bg-emerald-300 hover:scale-110 justify-center rounded-full px-4 py-2 text-xs md:text-sm font-medium border border-emerald-300/40 text-emerald-200 hover:bg-emerald-300/10 transition"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* Este contenido también se queda igual */}
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
              <div className="flex items-center gap-1.5">
                <SiLighthouse className="h-4 w-4 text-emerald-300" />
                <p className="text-sm font-semibold text-emerald-300">
                  +90 Lighthouse
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-700/60 px-3 py-2 backdrop-blur-sm">
              <p className="text-[10px] text-slate-400">Entrega</p>
              <div className="flex items-center gap-1.5">
                <TbCalendarCheck className="h-4 w-4 text-emerald-300" />
                <p className="text-sm font-semibold text-emerald-300">
                  &lt; 3 semanas *
                </p>
              </div>
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