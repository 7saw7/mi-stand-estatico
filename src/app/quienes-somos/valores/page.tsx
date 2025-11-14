import type { Metadata } from "next";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

export const metadata: Metadata = {
  title: "Valores | Codeva Studio",
  description:
    "Valores que guían nuestra forma de trabajar y colaborar en cada proyecto.",
};

const VALUES = [
  {
    title: "Claridad",
    text: "Comunicamos de forma directa: qué vamos a hacer, qué no y por qué. Preferimos hablar de escenarios reales antes que prometer imposibles.",
  },
  {
    title: "Detalle",
    text: "Cuidamos tanto el diseño visual como la arquitectura, la performance y la experiencia de uso. Todo suma en la percepción de calidad.",
  },
  {
    title: "Responsabilidad",
    text: "Si asumimos un proyecto, nos lo tomamos en serio. Cumplimos plazos realistas y avisamos a tiempo cuando algo se debe ajustar.",
  },
  {
    title: "Colaboración",
    text: "Vemos cada proyecto como un trabajo conjunto. Tú aportas el conocimiento del negocio, nosotros la parte digital y técnica.",
  },
  {
    title: "Largo plazo",
    text: "Construimos pensando en cómo va a crecer tu proyecto. Evitamos soluciones rápidas que comprometan el futuro del producto.",
  },
  {
    title: "Aprendizaje",
    text: "Nos mantenemos al día en tecnologías y buenas prácticas para aportar soluciones actualizadas, no recetas de hace diez años.",
  },
];

export default function ValoresPage() {
  return (
    <>
    <Header />
    <section className="relative min-h-screen overflow-hidden pt-[6rem] p-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#000915] to-[#00060c]" />
        <div className="absolute -top-24 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-emerald-500/25 blur-3xl opacity-70" />
        <div className="absolute -bottom-36 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/25 blur-3xl opacity-60" />
      </div>

      <div className="container-x">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Valores
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
            Principios que aplicamos en
            <span className="text-emerald-400"> cada proyecto.</span>
          </h1>
          <p className="mt-4 text-[15px] text-slate-300">
            Lo que ves en nuestro trabajo es el resultado de cómo pensamos y
            tomamos decisiones: desde el primer briefing hasta el lanzamiento.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/80 p-5 text-sm text-slate-200 shadow-[0_18px_45px_rgba(0,0,0,0.85)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/70"
            >
              <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-emerald-500/20 blur-2xl opacity-70" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                {v.title}
              </p>
              <p className="mt-3 text-[13px]">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
