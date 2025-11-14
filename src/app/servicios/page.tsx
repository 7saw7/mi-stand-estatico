import { Metadata } from "next";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nombre del servicio | Codeva Studio",
  description:
    "Descripción corta SEO del servicio. Clara, concisa, orientada a resultados.",
};

export default function ServicePage() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[6rem] pb-20">
      {/* ==== BG PREMIUM ==== */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00121c] via-[#000f18] to-[#00070c]" />
        <div className="absolute -top-20 -left-20 h-[32rem] w-[32rem] rounded-full bg-emerald-500/20 blur-3xl opacity-40" />
        <div className="absolute -bottom-20 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl opacity-30" />
        <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(circle_at_center,_rgba(0,255,201,0.22),transparent_60%)]" />
      </div>

      {/* ==== HERO DEL SERVICIO ==== */}
      <div className="container-x">
        <p className="uppercase tracking-[0.22em] text-emerald-300 text-xs font-semibold">
          Categoría / Área
        </p>

        <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Nombre del <span className="text-emerald-400">Servicio</span>
        </h1>

        <p className="mt-4 max-w-2xl text-[15px] text-slate-300">
          Descripción principal del servicio con enfoque comercial.  
          Explica en 2–3 líneas qué problema resuelve y qué resultados obtiene el cliente.
        </p>

        {/* CTA */}
        <div className="mt-6 flex gap-4">
          <Link
            href="/#contacto"
            className="rounded-full bg-emerald-500 px-6 py-2.5 font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition"
          >
            Solicitar propuesta
          </Link>
          <Link
            href="/proyectos"
            className="rounded-full border border-emerald-400/40 px-6 py-2.5 text-slate-200 hover:border-emerald-300 hover:bg-emerald-400/5 transition"
          >
            Ver proyectos
          </Link>
        </div>
      </div>

      {/* ==== IMAGEN DESTACADA ==== */}
      <div className="container-x mt-10">
        <div className="overflow-hidden rounded-3xl border border-white/10 backdrop-blur bg-white/5">
          <Image
            src="/media/servicios/service-default.jpg"
            alt="Imagen del servicio"
            width={1600}
            height={900}
            className="object-cover opacity-95"
            priority
          />
        </div>
      </div>

      {/* ==== SECCIÓN DE BENEFICIOS ==== */}
      <div className="container-x mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            ¿Qué incluye este servicio?
          </h2>
          <p className="mt-2 text-slate-300 text-sm max-w-md">
            Una lista clara de todo lo que el cliente recibirá.  
            Cada punto debe transmitir valor real.
          </p>
        </div>

        <ul className="space-y-3 text-slate-200">
          {[
            "Diseño profesional adaptado a tu marca",
            "Optimización de rendimiento y SEO",
            "Integración con sistemas o APIs",
            "Implementación en menos de 3 semanas",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <FaCheckCircle className="text-emerald-400 mt-[3px]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ==== SECCIÓN FINAL ==== */}
      <div className="container-x mt-20 text-center">
        <h3 className="text-2xl font-semibold text-white">
          ¿Listo para comenzar?
        </h3>
        <p className="mt-2 text-slate-400 text-sm max-w-xl mx-auto">
          Comparte tu proyecto con nosotros y te enviaremos un plan claro y una
          cotización personalizada.
        </p>

        <a
          href="/#contacto"
          className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 hover:bg-emerald-200 transition"
        >
          Agendar llamada
        </a>
      </div>
    </section>
  );
}
