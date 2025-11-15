import type { Metadata } from "next";
import PremiumServicePage from "src/components/Service/PremiumServicePage";

export const metadata: Metadata = {
  title: "CMS a medida y headless | Codeva Studio",
  description:
    "Implementamos CMS modernos y flexibles para que puedas gestionar contenidos con libertad.",
};

export default function CmsService() {
  return (
    <PremiumServicePage
      category="Desarrollo a medida"
      title="CMS a medida"
      accent="que no te limitan al crecer."
      description="Diseñamos e implementamos CMS modernos —tradicionales o headless— para que tu equipo pueda gestionar contenido sin pelearse con la herramienta."
      imageSrc="/media/services/cms-medida.jpg"
      imageAlt="Gestor de contenidos moderno"
      theme="web"  
      benefits={[
        "Selección de tecnología CMS adecuada a tu caso.",
        "Modelado de contenidos flexible y escalable.",
        "Flujos de publicación adaptados al equipo.",
        "Seguridad, roles y permisos bien definidos.",
      ]}
      deliverables={[
        "CMS configurado y listo para producción.",
        "Modelos de contenido y colecciones principales.",
        "Capacitación básica para tu equipo de contenidos.",
        "Guía rápida de buenas prácticas de publicación.",
      ]}
      idealFor={[
        "Equipos de marketing que publican con frecuencia.",
        "Medios, blogs, academias online o portales.",
        "Empresas que necesitan conectar varias webs a un mismo CMS.",
        "Proyectos que se preparan para internacionalización.",
      ]}
    />
  );
}
