// src/app/config/services.ts

export type ServiceCategoryId = "web" | "apps" | "ux";

export interface ServiceCategory {
  id: ServiceCategoryId;
  label: string;
  subtitle: string;
  accentColorClass: string; // pill
  cardBgClass: string;      // gradiente de fondo de la card
}

export interface ServiceConfig {
  id: string;
  categoryId: ServiceCategoryId;
  name: string;
  shortDescription: string;
  longDescription: string;
  bullets?: string[];
  tags?: string[];
  featured?: boolean;
  image?: string; // bg ilustrativa
  badge?: string;
  theme?: "web" | "apps" | "branding";
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "web",
    label: "Desarrollo web",
    subtitle: "Landing pages, sitios corporativos y e-commerce a medida.",
    accentColorClass: "text-emerald-300 bg-emerald-500/10",
    cardBgClass: "from-emerald-500/15 via-emerald-400/5 to-cyan-400/15",
  },
  {
    id: "apps",
    label: "Apps móviles",
    subtitle: "React Native y Progressive Web Apps.",
    accentColorClass: "text-sky-300 bg-sky-500/10",
    cardBgClass: "from-sky-500/15 via-sky-400/5 to-indigo-500/15",
  },
  {
    id: "ux",
    label: "UX/UI & Branding",
    subtitle: "Identidad digital y diseño de interfaces.",
    accentColorClass: "text-fuchsia-300 bg-fuchsia-500/10",
    cardBgClass: "from-fuchsia-500/15 via-purple-500/5 to-rose-500/15",
  },
];

// ===================== SERVICIOS =====================

export const SERVICES: ServiceConfig[] = [
  // ---------- DESARROLLO WEB ----------
  {
    id: "landing-pages",
    categoryId: "web",
    name: "Landing Pages",
    shortDescription:
      "Páginas enfocadas en conversión para campañas, anuncios y lanzamientos.",
    longDescription:
      "Diseñamos landings orientadas a resultados: captación de leads, ventas o reservas. Cuidamos estructura, copy, velocidad de carga y medición para optimizar cada campaña.",
    bullets: [
      "Diseño responsive optimizado para mobile-first.",
      "Integración con CRM, formularios y automatizaciones.",
      "SEO on-page y tiempos de carga rápidos.",
      "Implementación de píxeles y eventos (Meta, Google Ads, etc.).",
    ],
    tags: ["Campañas", "Leads", "Performance"],
    featured: true,
    image: "/media/services/landing-pages.jpg",
    badge: "Alto rendimiento",
    theme: "web",
  },
  {
    id: "sitios-corporativos",
    categoryId: "web",
    name: "Sitios corporativos",
    shortDescription:
      "Webs institucionales sólidas, claras y fáciles de mantener.",
    longDescription:
      "Creamos sitios que transmiten confianza: arquitectura de contenidos clara, diseño alineado a tu marca y una base técnica preparada para crecer contigo.",
    bullets: [
      "Diseño alineado a tu identidad visual.",
      "CMS a medida o integración con gestores existentes.",
      "Buenas prácticas de accesibilidad y SEO técnico.",
      "Secciones dinámicas: equipo, proyectos, noticias, etc.",
    ],
    tags: ["Institucional", "SEO", "Escalable"],
    image: "/media/services/sitios-corporativos.jpg",
    theme: "web",
  },
  {
    id: "ecommerce",
    categoryId: "web",
    name: "E-commerce",
    shortDescription:
      "Tiendas online rápidas, seguras y pensadas para vender más.",
    longDescription:
      "Desarrollamos e-commerce cuidando catálogo, medios de pago, logística y experiencia de checkout. Tú te centras en vender; nosotros en que todo funcione.",
    bullets: [
      "Integración con pasarelas de pago locales e internacionales.",
      "Gestión de stock, cupones, envíos y reportes.",
      "Optimización del checkout y recuperación de carritos.",
      "Métricas clave para seguir la conversión.",
    ],
    tags: ["Tiendas", "Pagos online", "Conversión"],
    featured: true,
    image: "/media/services/ecommerce.jpg",
    badge: "Listo para escalar",
    theme: "web",
  },
  {
    id: "cms-medida",
    categoryId: "web",
    name: "CMS a medida",
    shortDescription:
      "Paneles de administración diseñados a la medida de tu equipo.",
    longDescription:
      "Cuando un WordPress estándar no es suficiente, construimos un CMS a medida sobre tecnologías modernas para que tu equipo gestione contenido sin fricciones.",
    bullets: [
      "Definición de roles y permisos por tipo de usuario.",
      "Flujos de publicación y aprobación adaptados a tu proceso.",
      "Integración con APIs, catálogos y sistemas internos.",
      "Interfaz sencilla, sin opciones que no necesitas.",
    ],
    tags: ["Backoffice", "Headless", "Contenido"],
    image: "/media/services/cms-medida.jpg",
    theme: "web",
  },
  {
    id: "portfolios",
    categoryId: "web",
    name: "Portfolios",
    shortDescription:
      "Portfolios visuales para estudios, creativos y profesionales.",
    longDescription:
      "Diseñamos portfolios que ponen el foco en tu trabajo: proyectos organizados, navegación limpia y animaciones sutiles que acompañan, no distraen.",
    bullets: [
      "Layouts pensados para fotografía, vídeo o ilustración.",
      "Gestión sencilla de proyectos y categorías.",
      "Optimización de imágenes y carga progresiva.",
    ],
    tags: ["Creativos", "Estudios", "Proyectos"],
    image: "/media/services/portfolios.jpg",
    theme: "web",
  },

  // ---------- APPS MÓVILES ----------
  {
    id: "react-native",
    categoryId: "apps",
    name: "React Native",
    shortDescription:
      "Apps móviles nativas para iOS y Android con un solo código.",
    longDescription:
      "Desarrollamos aplicaciones con React Native para reducir tiempos de desarrollo y mantenimiento sin renunciar a la experiencia nativa.",
    bullets: [
      "Publicación en App Store y Google Play.",
      "Integración con APIs, push notifications y analítica.",
      "Soporte para dark mode, accesibilidad y diseño moderno.",
    ],
    tags: ["iOS & Android", "Móvil", "Nativo"],
    image: "/media/services/react-native.jpg",
    theme: "apps",
  },
  {
    id: "pwa",
    categoryId: "apps",
    name: "Progressive Web Apps (PWA)",
    shortDescription:
      "Apps web instalables, rápidas y listas para funcionar offline.",
    longDescription:
      "Las PWA permiten instalar tu app desde el navegador, trabajar sin conexión y enviar notificaciones. Una opción ideal cuando el presupuesto es ajustado pero la ambición es alta.",
    bullets: [
      "Funcionamiento offline y sincronización en segundo plano.",
      "Instalación en móvil y escritorio sin pasar por tiendas.",
      "Carga muy rápida y experiencia tipo app.",
    ],
    tags: ["Offline", "Instalable", "Cross-platform"],
    image: "/media/services/pwa.jpg",
    theme: "apps",
  },

  // ---------- UX/UI & BRANDING ----------
  {
    id: "branding-digital",
    categoryId: "ux",
    name: "Branding digital",
    shortDescription:
      "Creamos una identidad coherente para todo tu ecosistema digital.",
    longDescription:
      "Definimos el sistema visual de tu marca: logotipo, paleta, tipografías y usos correctos para que tu presencia online sea consistente y memorable.",
    bullets: [
      "Logotipo principal y variantes.",
      "Paleta de color y sistema tipográfico.",
      "Guía rápida de uso aplicada a web y redes.",
    ],
    tags: ["Identidad", "Marca", "Guía visual"],
    image: "/media/services/branding.jpg",
    theme: "branding",
  },
  {
    id: "diseno-ux-ui",
    categoryId: "ux",
    name: "Diseño UX/UI",
    shortDescription:
      "Interfaces bonitas, pero sobre todo claras y fáciles de usar.",
    longDescription:
      "Trabajamos desde el flujo de usuario hasta el detalle visual. Nuestro objetivo es reducir fricciones y aumentar la conversión, no solo ‘maquillar’ pantallas.",
    bullets: [
      "Research ligera y definición de journeys clave.",
      "Wireframes, prototipos navegables y test con usuarios.",
      "Design system reutilizable para acelerar desarrollo.",
    ],
    tags: ["Prototipos", "Figma", "Design system"],
    featured: true,
    image: "/media/services/ux-ui.jpg",
    badge: "Experiencia primero",
    theme: "branding",
  },
];

export function getServicesByCategory(categoryId: ServiceCategoryId) {
  return SERVICES.filter((s) => s.categoryId === categoryId);
}

export const FEATURED_SERVICES = SERVICES.filter((s) => s.featured);
