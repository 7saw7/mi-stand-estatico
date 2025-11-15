import type { Metadata } from "next";
import PremiumServicePage from "src/components/Service/PremiumServicePage";

export const metadata: Metadata = {
  title: "Sitios corporativos modernos | Codeva Studio",
  description:
    "Webs corporativas modernas, claras y alineadas a la identidad de tu marca para comunicar con autoridad.",
};

export default function CorporativosService() {
  return (
    <PremiumServicePage
      category="Desarrollo web profesional"
      title="Sitios corporativos"
      accent="que transmiten confianza y solidez."
      description="Diseñamos webs corporativas que comunican con claridad qué haces, por qué eres diferente y cómo trabajas, con un look & feel moderno y profesional."
      imageSrc="/media/services/sitios-corporativos.jpg"
      imageAlt="Sitio corporativo profesional"
      theme="web"  
      benefits={[
        "Arquitectura de información alineada a tu negocio.",
        "Secciones clave: servicios, equipo, casos de éxito, contacto.",
        "Diseño adaptable a distintas líneas de negocio o unidades.",
        "Sitio preparado para crecer con nuevos contenidos.",
      ]}
      deliverables={[
        "Sitio corporativo completo y responsive.",
        "Plantillas reutilizables para nuevas páginas internas.",
        "Integración con herramientas de marketing o RRHH.",
        "Checklist SEO básico y buenas prácticas de contenido.",
      ]}
      idealFor={[
        "Empresas que necesitan renovar su imagen digital.",
        "Marcas B2B que venden servicios complejos.",
        "Consultoras, estudios y empresas tecnológicas.",
        "Negocios que quieren un sitio serio pero actual.",
      ]}
    />
  );
}
