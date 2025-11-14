import type { Metadata } from "next";
import PremiumServicePage from "src/components/Service/PremiumServicePage";

export const metadata: Metadata = {
  title: "Branding digital & sistemas visuales | Codeva Studio",
  description:
    "Definimos identidades digitales coherentes: logo, paleta, tipografías y sistema visual aplicable a todo tu ecosistema online.",
};

export default function BrandingDigitalService() {
  return (
    <PremiumServicePage
      category="UX/UI & Branding"
      title="Branding digital"
      accent="que se siente consistente en todos tus puntos de contacto."
      description="Diseñamos identidades digitales que funcionan en la realidad: web, producto, redes y materiales comerciales. No solo un logo, sino un sistema visual para crecer sin perder coherencia."
      imageSrc="/media/services/branding.jpg"
      imageAlt="Sistema de branding digital para productos y sitios web"
      benefits={[
        "Definición de tono visual y dirección creativa alineada al negocio.",
        "Construcción de logo o ajuste del existente para uso digital.",
        "Sistema de color, tipografías y componentes reutilizables.",
        "Guías claras de aplicación para web, producto y redes.",
      ]}
      deliverables={[
        "Mini brandbook digital con usos recomendados.",
        "Paletas de color y estilos tipográficos listos para implementación.",
        "Componentes clave para UI: botones, tarjetas, etiquetas, estados.",
        "Assets exportados para web y redes (formatos optimizados).",
      ]}
      idealFor={[
        "Negocios que nunca han definido bien su identidad digital.",
        "Marcas que crecieron rápido y hoy se ven incoherentes.",
        "Equipos que van a lanzar un nuevo producto o rebranding.",
        "Startups que quieren verse serias sin perder frescura.",
      ]}
    />
  );
}
