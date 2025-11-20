import type { Metadata } from "next";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Proyectos | Codeva Studio",
  description:
    "Selección de proyectos y casos donde hemos aplicado nuestra forma de trabajar en web y producto digital.",
};

const PROJECTS = [
  {
    id: "p1",
    tag: "Landing + Branding",
    title: "Proyecto 1 – Stand Estático",
    text: "Descripción breve del proyecto 1. Aquí cuentas qué hiciste, para qué tipo de negocio y el resultado.",
    images: [
      "/media/projects/p1/1.png",
      "/media/projects/p1/2.png",
      "/media/projects/p1/3.png",
      "/media/projects/p1/4.png",
    ],
  },
  {
    id: "p2",
    tag: "Web Corporativa",
    title: "Proyecto 2 – Sitio profesional",
    text: "Descripción breve del proyecto 2. Tecnologías, enfoque y qué problema resolviste.",
    images: [
      "/media/projects/p2/1.png",
      "/media/projects/p2/2.png",
      "/media/projects/p2/3.png",
      "/media/projects/p2/4.png",
    ],
  },
  {
    id: "p3",
    tag: "E-commerce / Catálogo",
    title: "Proyecto 3 – Catálogo digital",
    text: "Descripción breve del proyecto 3. Funcionalidades clave y beneficios para el cliente.",
    images: [
      "/media/projects/p3/1.png",
      "/media/projects/p3/2.png",
      "/media/projects/p3/3.png",
    ],
  },
];

export default function ProyectosPage() {
  return (
    <>
      <Header />

      <section className="relative min-h-screen overflow-hidden pt-[6rem] p-5 md:p-10 lg:p-20">
        {/* Fondo */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#000915] to-[#00060c]" />
          <div className="absolute -top-24 left-0 h-[24rem] w-[24rem] rounded-full bg-emerald-500/25 blur-3xl opacity-70" />
          <div className="absolute -bottom-32 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/25 blur-3xl opacity-60" />
        </div>

        <div className="container-x">
          {/* Intro */}
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Proyectos
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
              Casos reales donde hemos
              <span className="text-emerald-400">
                {" "}
                aplicado nuestro enfoque.
              </span>
            </h1>
            <p className="mt-4 text-[15px] text-slate-300">
              Una selección de proyectos que muestran cómo combinamos diseño,
              desarrollo y estrategia en diferentes tipos de negocios.
            </p>
          </div>

          {/* Tarjetas de proyectos con galería */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/80 p-5 text-sm text-slate-200 shadow-[0_18px_45px_rgba(0,0,0,0.85)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/70"
              >
                {/* Glow */}
                <div className="absolute -top-12 right-0 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl opacity-70" />

                {/* Galería principal */}
                <div className="relative mb-4 overflow-hidden rounded-xl border border-slate-800/70 bg-slate-900/60">
                  <div className="relative h-52 w-full sm:h-60">
                    <Image
                      src={p.images[0]} // primera imagen como principal
                      alt={`${p.title} - captura principal`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Miniaturas debajo */}
                  <div className="flex gap-1 border-t border-slate-800 bg-slate-950/80 px-2 py-2">
                    {p.images.map((img, i) => (
                      <div
                        key={img}
                        className="relative h-12 flex-1 overflow-hidden rounded-lg"
                      >
                        <Image
                          src={img}
                          alt={`${p.title} - captura ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 25vw, 10vw"
                          className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Texto como en tu diseño original */}
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
