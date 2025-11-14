// src/app/config/nav.ts

export type NavLeaf = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  items: NavLeaf[];
};

export type NavTopItem =
  | {
      label: string;
      href: string;
      groups?: undefined;
    }
  | {
      label: string;
      href: string;
      groups: NavGroup[];
    };

export const NAV: NavTopItem[] = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Quiénes Somos",
    href: "/quienes-somos",
    groups: [
      {
        label: "Identidad",
        items: [
          { label: "Nosotros", href: "/quienes-somos/nosotros" },
          { label: "Misión & Visión", href: "/quienes-somos/mision-vision" },
          { label: "Valores", href: "/quienes-somos/valores" },
        ],
      },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios",
    groups: [
      {
        label: "Desarrollo Web",
        items: [
          { label: "Landing Pages", href: "/servicios/landing-pages" },
          { label: "Sitios Corporativos", href: "/servicios/corporativos" },
          { label: "E-commerce", href: "/servicios/ecommerce" },
          { label: "CMS a Medida", href: "/servicios/cms" },
          { label: "Portfolios", href: "/servicios/portfolios" },
        ],
      },

      // ❌ OCULTO Aplicaciones & SaaS
      /*
      {
        label: "Aplicaciones & SaaS",
        items: [
          { label: "Dashboards", href: "/servicios/dashboards" },
          { label: "CRM/ERP", href: "/servicios/crm-erp" },
          { label: "Plataformas SaaS", href: "/servicios/saas" },
          { label: "Apps Interactivas", href: "/servicios/apps-interactivas" },
        ],
      },
      */

      {
        label: "Apps Móviles",
        items: [
          { label: "React Native", href: "/servicios/apps/react-native" },
          { label: "PWA", href: "/servicios/apps/pwa" },
        ],
      },

      // ❌ OCULTO Software a Medida
      /*
      {
        label: "Software a Medida",
        items: [
          { label: "Sistemas de Gestión", href: "/servicios/software/gestion" },
          { label: "Automatizaciones & APIs", href: "/servicios/software/apis" },
          {
            label: "Microservicios Backend",
            href: "/servicios/software/microservicios",
          },
        ],
      },
      */

      {
        label: "UX/UI & Branding",
        items: [
          { label: "Branding Digital", href: "/servicios/branding" },
          { label: "Diseño UX/UI", href: "/servicios/ui-ux" },
        ],
      },
    ],
  },
  {
    label: "Proyectos",
    href: "/proyectos",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];
