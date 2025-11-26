// src/app/(site)/servicios/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  SERVICES,
  SERVICE_CATEGORIES,
  FEATURED_SERVICES,
  type ServiceConfig,
  type ServiceCategoryId,
} from "src/app/config/services";

import {
  Sparkles,
  ArrowRight,
  Clock3,
  Layers3,
  Smartphone,
  Palette,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios digitales a medida | Codeva Studio",
  description:
    "Desarrollamos sitios web, e-commerce, apps y experiencias digitales con foco en negocio, UX y performance.",
};

// ✳️ Número de WhatsApp central de Codeva
const WHATSAPP_NUMBER = "51916983980";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getCategoryLabel(catId: string) {
  return SERVICE_CATEGORIES.find((c) => c.id === catId)?.label ?? "Servicio";
}

// Etiquetas meta por categoría (tipo, duración, nivel)
const CATEGORY_META: Record<
  ServiceCategoryId,
  { tipo: string; duracion: string; nivel: string; icon: "web" | "apps" | "ux" }
> = {
  web: {
    tipo: "Web / E-commerce",
    duracion: "3–8 semanas",
    nivel: "A medida",
    icon: "web",
  },
  apps: {
    tipo: "Apps & PWA",
    duracion: "6–12 semanas",
    nivel: "Producto digital",
    icon: "apps",
  },
  ux: {
    tipo: "UX/UI & Marca",
    duracion: "2–6 semanas",
    nivel: "Estrategia & diseño",
    icon: "ux",
  },
};


// Mapeo de ID de servicio → ruta real del detalle
const SERVICE_HREF: Record<string, string> = {
  // Web
  "landing-pages": "/servicios/landing-pages",
  "sitios-corporativos": "/servicios/corporativos",
  ecommerce: "/servicios/ecommerce",
  "cms-medida": "/servicios/cms",
  portfolios: "/servicios/portfolios",

  // Apps
  "react-native": "/servicios/apps/react-native",
  pwa: "/servicios/apps/pwa",

  // UX / Branding
  "branding-digital": "/servicios/branding",
  "diseno-ux-ui": "/servicios/ui-ux",
};

function getServiceHref(service: ServiceConfig) {
  // fallback por si en el futuro agregas algo nuevo
  return SERVICE_HREF[service.id] ?? `/servicios/${service.id}`;
}


function CategoryIcon({ id }: { id: ServiceCategoryId }) {
  const common = "h-3.5 w-3.5";
  if (id === "apps") return <Smartphone className={common} />;
  if (id === "ux") return <Palette className={common} />;
  return <Layers3 className={common} />;
}

type CardProps = {
  service: ServiceConfig;
};

export default function ServicesPage() {
  const totalServices = SERVICES.length;
  const totalCategories = SERVICE_CATEGORIES.length;
  const featuredIds = new Set(FEATURED_SERVICES.map((s) => s.id));

  return (
    <section className="relative min-h-screen overflow-hidden pt-[6rem] p-10 md:p-20">
      {/* ==== BG PREMIUM GLOBAL ==== */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#020617] to-[#00070c]" />
        <div className="absolute -top-28 -left-10 h-[30rem] w-[30rem] rounded-full bg-emerald-500/25 blur-3xl opacity-60" />
        <div className="absolute -bottom-28 right-0 h-[26rem] w-[26rem] rounded-full bg-cyan-500/25 blur-3xl opacity-50" />
        <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_top,_rgba(0,255,201,0.2),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            background:
              "linear-gradient(120deg, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(220deg, rgba(30,64,175,0.18) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-x">
        {/* ================= HERO ================= */}
        <header className="max-w-4xl pb-6 md:pb-8">
          <p className="uppercase tracking-[0.24em] text-emerald-300 text-[11px] font-semibold">
            Servicios · Producto digital & Web
          </p>

          <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-50">
            Servicios digitales{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-100 to-cyan-200 bg-clip-text text-transparent">
              diseñados para generar resultados.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-[15px] text-slate-300">
            Desde landings para campañas hasta e-commerce y apps móviles.
            Diseñamos y desarrollamos soluciones que conectan con tus usuarios y
            se alinean con tus métricas de negocio.
          </p>

          {/* Etiquetas resumen del catálogo */}
          <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-slate-200 border border-slate-700/70">
              <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
              <span>{totalServices} servicios especializados</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1 text-slate-300 border border-slate-700/60">
              <Layers3 className="h-3.5 w-3.5 text-cyan-300" />
              <span>{totalCategories} áreas: Web · Apps · UX/Branding</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 text-slate-400 border border-slate-700/50">
              <Clock3 className="h-3.5 w-3.5 text-emerald-300" />
              <span>Proyectos típicos 3–12 semanas</span>
            </span>
          </div>

          {/* CTA principal → WhatsApp */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={buildWhatsAppUrl(
                "Hola Codeva, quiero conversar sobre un proyecto digital para mi negocio."
              )}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 hover:-translate-y-0.5"
            >
              <span>Hablemos de tu proyecto</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/proyectos"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/40 px-6 py-2.5 text-sm text-slate-200 hover:border-emerald-300 hover:bg-emerald-400/5 transition"
            >
              Ver proyectos realizados
            </Link>
          </div>
        </header>

        {/* ================= ÍNDICE RÁPIDO POR CATEGORÍA ================= */}
        <nav className="mt-2 md:mt-4 -mx-1 flex gap-2 overflow-x-auto pb-2 text-[11px] text-slate-300">
          {SERVICE_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#cat-${cat.id}`}
              className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 mx-1 hover:border-emerald-400/70 hover:text-emerald-100 hover:bg-slate-900/90 transition whitespace-nowrap"
            >
              <CategoryIcon id={cat.id as ServiceCategoryId} />
              <span>{cat.label}</span>
            </a>
          ))}
        </nav>

        {/* ================= DESTACADOS ================= */}
        {FEATURED_SERVICES.length > 0 && (
          <section className="mt-10 space-y-4">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300/90">
                  Servicios destacados
                </p>
                <p className="mt-1 text-sm text-slate-400 max-w-md">
                  Paquetes que solemos recomendar cuando un equipo quiere un
                  salto de calidad claro en su presencia digital.
                </p>
              </div>
              <p className="text-[11px] text-slate-500">
                Puedes adaptar cualquier servicio a un{" "}
                <span className="text-emerald-300">MVP</span> o a una{" "}
                <span className="text-emerald-300">fase 2</span>.
              </p>
            </div>

            <div className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {FEATURED_SERVICES.map((service) => (
                <FeaturedServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        )}

        {/* ================= POR CATEGORÍA ================= */}
        <section className="mt-12 md:mt-16 space-y-14">
          {SERVICE_CATEGORIES.map((cat) => {
            const servicesInCat = SERVICES.filter(
              (s) => s.categoryId === cat.id && !featuredIds.has(s.id)
            );

            if (servicesInCat.length === 0) return null;

            return (
              <div
                key={cat.id}
                id={`cat-${cat.id}`}
                className="space-y-5 scroll-mt-28 md:scroll-mt-32"
              >
                {/* Título de categoría */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-300/80">
                      {cat.label}
                    </p>
                    {cat.subtitle && (
                      <p className="text-xs text-slate-400 max-w-xl">
                        {cat.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 border border-slate-700/70">
                      <CategoryIcon id={cat.id as ServiceCategoryId} />
                      {servicesInCat.length} servicios en esta área
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 border border-slate-700/70">
                      <Clock3 className="h-3 w-3 text-emerald-300" />
                      {CATEGORY_META[cat.id as ServiceCategoryId].duracion}
                    </span>
                  </div>
                </div>

                {/* Grid de cards */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {servicesInCat.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* ================= CIERRE ================= */}
        <section className="mt-20 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-50">
            ¿Tienes algo en mente y no sabes en qué servicio encaja?
          </h3>
          <p className="mt-3 text-sm text-slate-400">
            Cuéntanos tu contexto, tu modelo de negocio y en qué etapa estás.
            Te proponemos un camino claro, sin tecnicismos innecesarios y sin
            compromiso.
          </p>

          <Link
            href={buildWhatsAppUrl(
              "Hola Codeva, quiero contarte mi contexto y que me sugieran qué tipo de proyecto tendría más sentido para mi negocio."
            )}
            target="_blank"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-200 hover:-translate-y-0.5"
          >
            <span>Iniciar conversación por WhatsApp</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </section>
  );
}

/* =========================================================
 * CARD DESTACADA
 * =======================================================*/

function FeaturedServiceCard({ service }: CardProps) {
  const catLabel = getCategoryLabel(service.categoryId);
  const meta = CATEGORY_META[service.categoryId];

  return (
    <article
      className="
        relative overflow-hidden rounded-3xl border border-emerald-400/30
        bg-gradient-to-br from-emerald-500/10 via-slate-900/80 to-cyan-500/10
        shadow-[0_20px_80px_rgba(15,23,42,0.9)]
        flex flex-col
      "
    >
      {/* BG blur suave */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-20 -left-10 h-40 w-40 rounded-full bg-emerald-400/25 blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-40px] h-40 w-40 rounded-full bg-cyan-400/25 blur-3xl" />
      </div>

      {/* Etiquetas superiores */}
      <div className="absolute left-4 top-3 z-20 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium text-amber-100 border border-amber-400/40 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          Servicio destacado
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-[11px] text-slate-100 border border-slate-600/60 backdrop-blur">
          <CategoryIcon id={service.categoryId} />
          {catLabel}
        </span>
      </div>

      {/* Imagen opcional */}
      {service.image && (
        <div className="relative h-40 w-full overflow-hidden rounded-t-3xl border-b border-white/10">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>
      )}

      <div className="relative z-10 flex flex-1 flex-col p-5 md:p-6">
        <h2 className="text-lg font-semibold text-slate-50">
          {service.name}
        </h2>
        <p className="mt-2 text-sm text-slate-200">
          {service.shortDescription}
        </p>

        {/* Tags del servicio */}
        {service.tags && service.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-emerald-400/40 bg-slate-950/40 px-2.5 py-1 text-[11px] text-emerald-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Etiquetas meta (tipo / duración / nivel) */}
        <div className="mt-4 grid grid-cols-1 gap-2 text-[11px] text-slate-200 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-950/70 border border-slate-700/70 px-3 py-2">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Tipo
            </p>
            <p className="mt-1 font-medium">{meta.tipo}</p>
          </div>
          <div className="rounded-xl bg-slate-950/70 border border-slate-700/70 px-3 py-2">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Duración estimada
            </p>
            <p className="mt-1 font-medium flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5 text-emerald-300" />
              {meta.duracion}
            </p>
          </div>
          <div className="rounded-xl bg-slate-950/70 border border-slate-700/70 px-3 py-2">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Nivel
            </p>
            <p className="mt-1 font-medium">{meta.nivel}</p>
          </div>
        </div>

        {/* CTA doble */}
        <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={getServiceHref(service)}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-slate-900 hover:bg-emerald-200 transition"
        >
          <span>Ver detalle del servicio</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>

          <Link
            href={buildWhatsAppUrl(
              `Hola Codeva, estoy interesado en el servicio de ${service.name} y me gustaría más información.`
            )}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-emerald-300/60 px-3.5 py-2 text-[11px] font-medium text-emerald-200 hover:bg-emerald-500/10 transition"
          >
            Consultar por WhatsApp
          </Link>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
 * CARD NORMAL POR CATEGORÍA
 * =======================================================*/

function ServiceCard({ service }: CardProps) {
  const meta = CATEGORY_META[service.categoryId];

  return (
    <article
      className="
        group relative overflow-hidden rounded-2xl border border-slate-800
        bg-slate-950/80 shadow-[0_18px_60px_rgba(15,23,42,0.95)]
        flex flex-col
      "
    >
      {/* bg glow sutil */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute -top-16 right-[-40px] h-32 w-32 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-5">
        {/* encabezado + categoría */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[15px] font-semibold text-slate-50">
            {service.name}
          </h3>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-2.5 py-1 text-[10px] text-slate-300 border border-slate-700/70">
            <CategoryIcon id={service.categoryId} />
            {getCategoryLabel(service.categoryId)}
          </span>
        </div>

        <p className="mt-2 text-sm text-slate-300">
          {service.shortDescription}
        </p>

        {service.bullets && service.bullets.length > 0 && (
          <ul className="mt-3 space-y-1.5 text-[12px] text-slate-400">
            {service.bullets.slice(0, 3).map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* etiquetas meta compactas */}
        <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] text-slate-400">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 border border-slate-700/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {meta.tipo}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 border border-slate-700/70">
            <Clock3 className="h-3 w-3 text-emerald-300" />
            {meta.duracion}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 border border-slate-700/70">
            {meta.nivel}
          </span>
        </div>

        {service.tags && service.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-900/80 px-2 py-1 text-[11px] text-slate-300 border border-slate-700/70"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={getServiceHref(service)}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-[12px] font-semibold text-slate-900 hover:bg-emerald-200 transition"
        >
          <span>Ver detalle</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>

          <Link
            href={buildWhatsAppUrl(
              `Hola Codeva, estuve viendo el servicio “${service.name}” y quiero ver si encaja con mi negocio.`
            )}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-emerald-300/70 px-3 py-2 text-[11px] font-medium text-emerald-200 hover:bg-emerald-500/10 transition"
          >
            Hablar por WhatsApp
          </Link>
        </div>
      </div>
    </article>
  );
}
