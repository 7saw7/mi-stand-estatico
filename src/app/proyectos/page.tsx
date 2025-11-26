import type { Metadata } from "next";
import Footer from "src/components/Footer";
import ProjectCard, { type Project } from "src/app/proyectos/projectCard";

export const metadata: Metadata = {
  title: "Proyectos | Codeva Studio",
  description:
    "Selección de proyectos y casos donde hemos aplicado nuestra forma de trabajar en web y producto digital.",
};

const PROJECTS: Project[] = [
  {
    id: "p1",
    tag: "Landing + Branding",
    title: "Proyecto 1 – Rubro Limpieza",
    text: "Pagina web para ofrecer servicios de limpieza en muebles, colchones, etc.",
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
    title: "Proyecto 2 – Rubro Construccion",
    text: "Web corporativa que promociona variados servicios en construccion, se muestran garantias y acabados",
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
    title: "Proyecto 3 – Rubro electricidad",
    text: "Landing Page para mostrar los trabajos realizados en obras y hogares.",
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
              <ProjectCard key={p.id} project={p} />
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
