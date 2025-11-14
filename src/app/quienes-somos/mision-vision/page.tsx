import type { Metadata } from "next";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

export const metadata: Metadata = {
  title: "Misión y Visión | Codeva Studio",
  description:
    "Nuestra misión y visión como estudio de desarrollo web y producto digital.",
};

export default function MisionVisionPage() {
  return (
    <>
    <Header />
    <section className="relative min-h-screen overflow-hidden pt-[6rem] p-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#000915] to-[#00060c]" />
        <div className="absolute -top-20 left-0 h-[22rem] w-[22rem] rounded-full bg-emerald-500/25 blur-3xl opacity-70" />
        <div className="absolute -bottom-32 right-10 h-[24rem] w-[24rem] rounded-full bg-cyan-500/25 blur-3xl opacity-60" />
      </div>

      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Misión & Visión
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
            Hacer que la web de tu negocio
            <span className="text-emerald-400"> sea un activo, no un problema.</span>
          </h1>
          <p className="mt-4 text-[15px] text-slate-300 max-w-2xl">
            Vemos cada proyecto como una pieza más dentro de tu sistema digital:
            web, producto, procesos y datos. Nuestra misión es que todo eso
            trabaje a favor de tu negocio, no en contra.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-cyan-500/10 p-6 text-sm text-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-200">
              Misión
            </p>
            <h2 className="mt-3 text-[17px] font-semibold text-white">
              Convertir sitios web en herramientas que generen resultados.
            </h2>
            <p className="mt-3 text-[13px]">
              Diseñamos y desarrollamos soluciones digitales que se conectan con
              tus objetivos de negocio: captar clientes, explicar mejor lo que
              haces, automatizar procesos o mejorar la experiencia de tus
              usuarios.
            </p>
            <p className="mt-3 text-[13px]">
              Queremos que cuando alguien visite tu web, entienda rápido por qué
              existes, qué ofreces y cómo empezar a trabajar contigo.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/80 p-6 text-sm text-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-300">
              Visión
            </p>
            <h2 className="mt-3 text-[17px] font-semibold text-white">
              Ser el estudio al que acuden los negocios cuando quieren subir de
              liga en digital.
            </h2>
            <p className="mt-3 text-[13px]">
              Aspiramos a ser el partner técnico y creativo de empresas que ven
              la tecnología como una inversión estratégica, no solo como un
              gasto puntual.
            </p>
            <p className="mt-3 text-[13px]">
              Queremos construir productos y sitios que sigan funcionando,
              rindiendo y viéndose bien dentro de varios años, no solo el día
              del lanzamiento.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
