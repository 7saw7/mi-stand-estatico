// src/components/Service/ServiceCard.tsx
import Image from "next/image";
import type {
  ServiceCategory,
  ServiceConfig,
} from "src/app/config/services";

type Props = {
  service: ServiceConfig;
  category: ServiceCategory;
  variant?: "light" | "dark";
  onClick?: () => void;
};

export default function ServiceCard({
  service,
  category,
  variant = "dark",
  onClick,
}: Props) {
  const isDark = variant === "dark";

  return (
    <article
      className={[
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border px-5 py-5",
        "bg-white/5 shadow-[0_18px_45px_rgba(15,23,42,0.85)] backdrop-blur-sm",
        "transition-all duration-300 ease-out transform-gpu",
        "hover:-translate-y-2 hover:shadow-[0_32px_90px_rgba(15,23,42,0.95)]",
        "hover:border-emerald-400/40",
        isDark ? "border-white/8" : "border-slate-200 bg-white",
      ].join(" ")}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {/* Borde / glow interior premium */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-px rounded-[1.35rem] bg-gradient-to-br from-white/10 via-transparent to-emerald-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Gradiente por categoría (capa sutil de fondo) */}
      <div
        aria-hidden
        className={[
          "pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br opacity-70",
          category.cardBgClass,
          "group-hover:opacity-100",
        ].join(" ")}
      />

      {/* Imagen de fondo suave */}
      {service.image && (
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="pointer-events-none -z-30 object-cover opacity-25 mix-blend-soft-light transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Glow inferior para profundidad */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-40%] -z-10 h-40 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
      />

      {/* Categoría */}
      <span
        className={[
          "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium tracking-wide backdrop-blur-sm",
          category.accentColorClass,
        ].join(" ")}
      >
        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current/80" />
        {category.label}
      </span>

      {/* Título + descripción */}
      <h3
        className={[
          "mt-3 text-lg font-semibold",
          isDark ? "text-white" : "text-slate-900",
        ].join(" ")}
      >
        {service.name}
      </h3>

      <p
        className={[
          "mt-2 text-sm leading-relaxed",
          isDark ? "text-slate-100/80" : "text-slate-600",
        ].join(" ")}
      >
        {service.shortDescription}
      </p>

      {/* Tags */}
      {service.tags && service.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-black/35 px-2.5 py-1 text-[11px] text-slate-100/90 backdrop-blur-sm transition-colors group-hover:bg-black/55"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <button
        type="button"
        className="mt-5 inline-flex items-center justify-center self-start rounded-full bg-white/90 px-5 py-2 text-xs font-semibold text-slate-900 transition-colors group-hover:bg-emerald-400 group-hover:text-slate-900"
      >
        Ver detalle
        <span className="ml-2 text-sm">↗</span>
      </button>
    </article>
  );
}
