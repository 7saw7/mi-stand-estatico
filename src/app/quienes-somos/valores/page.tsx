import type { Metadata } from "next";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import type { IconType } from "react-icons";
import {
  FiEye,
  FiSearch,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiBookOpen,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Valores | Codeva Studio",
  description:
    "Valores que guían nuestra forma de trabajar y colaborar en cada proyecto.",
};

type ValueCard = {
  title: string;
  text: string;
  icon: IconType;
};

const VALUES: ValueCard[] = [
  {
    title: "Claridad",
    text: "Comunicamos de forma directa: qué vamos a hacer, qué no y por qué. Preferimos hablar de escenarios reales antes que prometer imposibles.",
    icon: FiEye,
  },
  {
    title: "Detalle",
    text: "Cuidamos tanto el diseño visual como la arquitectura, la performance y la experiencia de uso. Todo suma en la percepción de calidad.",
    icon: FiSearch,
  },
  {
    title: "Responsabilidad",
    text: "Si asumimos un proyecto, nos lo tomamos en serio. Cumplimos plazos realistas y avisamos a tiempo cuando algo se debe ajustar.",
    icon: FiShield,
  },
  {
    title: "Colaboración",
    text: "Vemos cada proyecto como un trabajo conjunto. Tú aportas el conocimiento del negocio, nosotros la parte digital y técnica.",
    icon: FiUsers,
  },
  {
    title: "Largo plazo",
    text: "Construimos pensando en cómo va a crecer tu proyecto. Evitamos soluciones rápidas que comprometan el futuro del producto.",
    icon: FiTrendingUp,
  },
  {
    title: "Aprendizaje",
    text: "Nos mantenemos al día en tecnologías y buenas prácticas para aportar soluciones actualizadas, no recetas de hace diez años.",
    icon: FiBookOpen,
  },
];

export default function ValoresPage() {
  return (
    <>
      <Header />

      <section className="relative min-h-screen overflow-hidden pt-[6rem] p-5 md:p-10 lg:p-20">
        {/* BG premium */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {/* gradiente base */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_140%_at_0%_0%,#0f3e78_0%,#020817_40%,#000715_85%,#000000_100%)]" />
          {/* glow central */}
          <div className="absolute -top-32 left-1/2 h-[26rem] w-[30rem] -translate-x-1/2 rounded-full bg-emerald-500/25 blur-3xl opacity-70" />
          {/* glow inferior */}
          <div className="absolute -bottom-40 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/25 blur-3xl opacity-60" />
          {/* grid sutil */}
          <div className="absolute inset-0 opacity-[0.16] mix-blend-soft-light bg-[linear-gradient(115deg,rgba(56,189,248,0.25)_1px,transparent_1px),linear-gradient(295deg,rgba(16,185,129,0.18)_1px,transparent_1px)] bg-[size:90px_90px]" />
          {/* overlay para bajar brillo */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-x">
          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center">
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

          {/* GRID DE VALORES */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/80 p-5 text-sm text-slate-200 shadow-[0_18px_45px_rgba(0,0,0,0.85)] transition-all duration-200 hover:-translate-y-1.5 hover:border-emerald-400/70 hover:shadow-[0_24px_80px_rgba(16,185,129,0.35)]"
                >
                  {/* halo decorativo */}
                  <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-emerald-500/15 blur-2xl opacity-60 transition-opacity duration-200 group-hover:opacity-90" />

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-emerald-400/50 bg-emerald-500/10">
                      <Icon className="h-4 w-4 text-emerald-200" />
                    </span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                      {v.title}
                    </p>
                  </div>

                  <p className="mt-3 text-[13px] leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>

          {/* CTA final */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-slate-900/70 px-4 py-2 text-[12px] text-slate-200 shadow-[0_14px_40px_rgba(0,0,0,0.8)]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              <span>
                Estos valores también se aplican a tu proyecto.{" "}
                <a
                  href="/#contacto"
                  className="font-semibold text-emerald-300 hover:text-emerald-200"
                >
                  Hablemos.
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
