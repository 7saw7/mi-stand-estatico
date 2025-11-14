import type { Metadata } from "next";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

export const metadata: Metadata = {
  title: "Proyectos | Codeva Studio",
  description:
    "Selección de proyectos y casos donde hemos aplicado nuestra forma de trabajar en web y producto digital.",
};

const PROJECTS = [
  {
    tag: "SaaS B2B",
    title: "Panel de control para plataforma de datos",
    text: "Replanteo completo de la interfaz y la arquitectura frontend para mejorar la claridad de métricas y la velocidad de carga.",
  },
  {
    tag: "E-commerce",
    title: "Tienda online para marca de producto físico",
    text: "Implementación de tienda a medida con foco en conversión y analítica, conectada a sistemas de logística existentes.",
  },
  {
    tag: "Sitio corporativo",
    title: "Web para estudio de servicios profesionales",
    text: "Sitio serio pero actual, con énfasis en explicar bien la propuesta de valor y los servicios de forma segmentada.",
  },
  {
    tag: "Dashboard interno",
    title: "Herramienta de reporting para dirección",
    text: "Dashboard con KPIs clave, filtros y vistas por área para facilitar decisiones rápidas sin perder contexto.",
  },
];

export default function ProyectosPage() {
  return (
    <>
    <Header />
    <section className="relative min-h-screen overflow-hidden pt-[6rem] p-5 md:p-10 lg:p-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#000915] to-[#00060c]" />
        <div className="absolute -top-24 left-0 h-[24rem] w-[24rem] rounded-full bg-emerald-500/25 blur-3xl opacity-70" />
        <div className="absolute -bottom-32 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/25 blur-3xl opacity-60" />
      </div>

      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Proyectos
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
            Casos reales donde hemos
            <span className="text-emerald-400"> aplicado nuestro enfoque.</span>
          </h1>
          <p className="mt-4 text-[15px] text-slate-300">
            Una selección de proyectos que muestran cómo combinamos diseño,
            desarrollo y estrategia en diferentes tipos de negocios.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/80 p-5 text-sm text-slate-200 shadow-[0_18px_45px_rgba(0,0,0,0.85)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/70"
            >
              <div className="absolute -top-12 right-0 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl opacity-70" />
              <span className="inline-flex rounded-full border border-emerald-300/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                {p.tag}
              </span>
              <h2 className="mt-3 text-[17px] font-semibold text-white">
                {p.title}
              </h2>
              <p className="mt-3 text-[13px]">{p.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 max-w-2xl text-sm text-slate-300">
          <p>
            Muchos proyectos están sujetos a confidencialidad. Si quieres ver
            ejemplos más cercanos a tu sector o tipo de producto, cuéntanos qué
            estás buscando y te compartimos referencias relevantes en una
            llamada.
          </p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
