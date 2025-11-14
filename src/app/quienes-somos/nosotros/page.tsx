import type { Metadata } from "next";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros | Codeva Studio",
  description:
    "Conoce quién está detrás de Codeva Studio, nuestra forma de trabajar y cómo acompañamos cada proyecto.",
};

export default function NosotrosPage() {
  return (
    <>
    <Header />
    <section className="relative min-h-screen overflow-hidden pt-[6rem] p-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#000915] to-[#00060c]" />
        <div className="absolute -top-24 left-1/3 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-emerald-500/25 blur-3xl opacity-70" />
        <div className="absolute -bottom-32 right-0 h-[26rem] w-[26rem] rounded-full bg-cyan-500/25 blur-3xl opacity-60" />
      </div>

      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Nosotros
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
            Un estudio pequeño, con
            <span className="text-emerald-400"> obsesión por el detalle.</span>
          </h1>
          <p className="mt-4 text-[15px] text-slate-300">
            En Codeva Studio mezclamos diseño, desarrollo y estrategia para
            construir webs que no solo se ven bien, sino que hacen su trabajo:
            explicar, vender y generar confianza.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-6 text-[14px] text-slate-200">
            <p>
              Trabajamos con una estructura ligera: pocos proyectos al mismo
              tiempo, comunicación directa y entregas claras semana a semana.
              Preferimos hacer menos cosas, pero hacerlas muy bien.
            </p>
            <p>
              Cada proyecto comienza entendiendo tu negocio, tu contexto y tus
              restricciones. Desde ahí definimos qué tipo de sitio necesitas,
              qué se debe medir y cómo vamos a construir para que el resultado
              sea sostenible en el tiempo.
            </p>
            <p>
              Nos gusta documentar, dejar procesos ordenados y evitar
              dependencias innecesarias. Queremos que tu web pueda crecer contigo
              sin convertirse en una caja negra.
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-400/35 bg-emerald-500/5 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  Cómo trabajamos
                </p>
                <ul className="mt-2 space-y-1.5 text-[13px]">
                  <li>• Kickoff claro con objetivos y métricas.</li>
                  <li>• Sprints cortos y revisiones frecuentes.</li>
                  <li>• Entregas navegables, no solo diseños estáticos.</li>
                  <li>• Comunicación honesta sobre tiempos y alcances.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  Lo que cuidamos
                </p>
                <ul className="mt-2 space-y-1.5 text-[13px]">
                  <li>• Performance y experiencia móvil.</li>
                  <li>• Claridad en los textos y mensajes clave.</li>
                  <li>• Arquitectura preparada para crecer.</li>
                  <li>• Entregables que tu equipo puede seguir usando.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-cyan-500/10 p-5 text-sm text-slate-100">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-200">
                Lo que nos mueve
              </p>
              <p className="mt-2 text-[13px]">
                Nos entusiasman los proyectos donde la web es más que un
                folleto: productos, SaaS, herramientas internas y sitios que
                se conectan con otras piezas del negocio.
              </p>
              <p className="mt-3 text-[13px]">
                Si buscas un partner que se involucre de verdad y piense en el
                largo plazo, probablemente nos llevemos bien.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-5 text-[13px] text-slate-200">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Próximo paso
              </p>
              <p className="mt-2">
                Cuéntanos brevemente qué necesitas y en qué punto está tu
                proyecto. Te proponemos una llamada corta para ver si tiene
                sentido trabajar juntos.
              </p>
              <Link
                href="/#contacto"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-slate-900 shadow-[0_14px_35px_rgba(16,185,129,0.6)] transition hover:bg-emerald-100"
              >
                Agendar una llamada
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
