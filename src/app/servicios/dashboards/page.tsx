import type { Metadata } from "next";
import PremiumServicePage from "src/components/Service/PremiumServicePage";

export const metadata: Metadata = {
  title: "Dashboards y visualización de datos | Codeva Studio",
  description:
    "Diseñamos dashboards claros y accionables para que tu equipo tome decisiones con datos.",
};

export default function DashboardsService() {
  return (
    <PremiumServicePage
      category="Data & producto digital"
      title="Dashboards"
      accent="que convierten datos en decisiones."
      description="Construimos dashboards con jerarquía visual clara, métricas bien definidas y foco en lo que tu equipo realmente necesita ver cada día."
      imageSrc="/media/services/dashboards.jpg"
      imageAlt="Dashboard con gráficos y métricas"
      benefits={[
        "Definición conjunta de KPIs y métricas clave.",
        "Diseño de layouts limpios y legibles.",
        "Integración con fuentes de datos existentes.",
        "Soporte para filtros, segmentos y drill-down.",
      ]}
      deliverables={[
        "Dashboard principal listo para uso diario.",
        "Conjunto de vistas o pestañas por área o rol.",
        "Diccionario de métricas documentado.",
        "Sugerencias de evolución y nuevas vistas.",
      ]}
      idealFor={[
        "Direcciones y gerencias que toman decisiones frecuentes.",
        "Equipos de marketing, ventas o producto.",
        "Startups que necesitan visibilidad clara del negocio.",
        "Organizaciones que ya tienen datos pero no claridad.",
      ]}
    />
  );
}
