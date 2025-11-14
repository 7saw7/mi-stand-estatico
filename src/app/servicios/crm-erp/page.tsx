import type { Metadata } from "next";
import PremiumServicePage from "src/components/Service/PremiumServicePage";

export const metadata: Metadata = {
  title: "CRM & ERP a medida | Codeva Studio",
  description:
    "Soluciones CRM y ERP adaptadas a tus procesos, no al revés, con foco en usabilidad y datos.",
};

export default function CrmErpService() {
  return (
    <PremiumServicePage
      category="Software de negocio"
      title="CRM & ERP"
      accent="que siguen tus procesos reales."
      description="Diseñamos y desarrollamos soluciones CRM y ERP que encajan con tu forma de trabajar, mejorando visibilidad, trazabilidad y eficiencia operativa."
      imageSrc="/media/services/crm-erp.jpg"
      imageAlt="Panel CRM y ERP"
      benefits={[
        "Análisis de procesos comerciales y operativos.",
        "Diseño de modelos de datos y permisos.",
        "Interfaces claras para equipos no técnicos.",
        "Integraciones con sistemas existentes y BI.",
      ]}
      deliverables={[
        "Módulos CRM y/o ERP funcionales en producción.",
        "Modelos de datos y entidades documentadas.",
        "Capacitación básica para tu equipo.",
        "Roadmap sugerido para futuras fases.",
      ]}
      idealFor={[
        "Empresas que crecieron más rápido que sus sistemas.",
        "Equipos que trabajan con demasiados Excel aislados.",
        "Negocios que quieren centralizar información crítica.",
        "Organizaciones que necesitan trazabilidad y reporting.",
      ]}
    />
  );
}
