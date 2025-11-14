import type { Metadata } from "next";
import PremiumServicePage from "src/components/Service/PremiumServicePage";

export const metadata: Metadata = {
  title: "Productos SaaS y plataformas digitales | Codeva Studio",
  description:
    "Diseñamos y construimos productos SaaS listos para crecer: arquitectura, UX y desarrollo.",
};

export default function SaasService() {
  return (
    <PremiumServicePage
      category="Productos digitales"
      title="SaaS & plataformas"
      accent="pensadas para escalar."
      description="Acompañamos a equipos en la creación de productos SaaS: desde la definición funcional y UX hasta la arquitectura y el desarrollo técnico."
      imageSrc="/media/services/saas.jpg"
      imageAlt="Plataforma SaaS en pantalla"
      benefits={[
        "Definición de MVP y roadmap por fases.",
        "Arquitectura técnica preparada para crecer.",
        "Interfaces pensadas para uso intensivo.",
        "Criterios de seguridad y permisos desde el inicio.",
      ]}
      deliverables={[
        "MVP funcional del producto SaaS.",
        "Backlog priorizado con siguientes iteraciones.",
        "Guía de arquitectura y stack utilizado.",
        "Tableros básicos de métricas del producto.",
      ]}
      idealFor={[
        "Fundadores con idea validada que quieren su primera versión.",
        "Equipos que ya tienen usuarios y necesitan re-plataformar.",
        "Empresas que convierten un proceso interno en SaaS.",
        "Startups que necesitan un partner técnico y de producto.",
      ]}
    />
  );
}
