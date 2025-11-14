import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

type FooterProps = {
  variant?: "light" | "dark";
};

const Footer: React.FC<FooterProps> = ({ variant = "dark" }) => {
  const isLight = variant === "light";

  const baseBg = isLight ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-100";
  const borderColor = isLight ? "border-slate-200" : "border-slate-800";
  const subtleText = isLight ? "text-slate-500" : "text-slate-400";

  const socialBase =
    "flex h-9 w-9 items-center justify-center rounded-full border transition hover:-translate-y-0.5";
  const socialColors = isLight
    ? "border-slate-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
    : "border-slate-600/70 hover:border-emerald-400 hover:bg-emerald-500 hover:text-slate-950";

  return (
    <footer
      className={`${baseBg} ${borderColor} relative overflow-hidden border-t pt-16`}
    >
      {/* fondo decorativo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-10 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.9),transparent_60%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.95),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(120deg,rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(210deg,rgba(15,23,42,0.85)_1px,transparent_1px)] bg-[length:32px_32px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* CTA principal */}
        <div className="mb-12">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-400 p-[1px] shadow-[0_20px_70px_rgba(16,185,129,0.45)]">
            <div className="flex flex-col gap-6 rounded-[1.4rem] bg-slate-950/95 px-6 py-6 sm:px-8 sm:py-7 md:flex-row md:items-center md:justify-between lg:px-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200/90">
                  ¿Listo para elevar tu presencia digital?
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl lg:text-[1.7rem]">
                  Diseñamos webs que venden, explican y generan confianza.
                </h2>
                <p className="mt-2 max-w-xl text-sm text-emerald-100/90">
                  Agenda una llamada y revisamos juntos tu proyecto, tu mercado y el
                  tipo de sitio que realmente necesitas para crecer.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {/* Botón principal: Agenda una llamada */}
                <Link
                  href="/#contacto"
                  className="
                    group relative inline-flex items-center justify-center gap-2
                    rounded-full px-6 py-2.5
                    text-sm font-semibold text-slate-950
                    bg-white
                    shadow-[0_18px_45px_rgba(16,185,129,0.6)]
                    transition-transform duration-200
                    hover:-translate-y-0.5
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80
                  "
                >
                  <button className="flex items-center justify-center">
                    <span>Agendar llamada</span>
                  </button>
                  <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>

                {/* Botón secundario: Ver servicios */}
                <button className="flex items-center justify-center">                
                <Link
                  href="/#servicios"
                  className="
                    inline-flex items-center justify-center
                    rounded-full px-5 py-2.5
                    text-sm font-medium
                    border border-slate-500/60
                    bg-slate-950/60
                    text-emerald-200/90
                    shadow-[0_0_0_1px_rgba(15,23,42,0.9)]
                    transition-all duration-200
                    hover:border-emerald-300/85
                    hover:text-emerald-100
                    hover:bg-slate-900/90
                    hover:-translate-y-0.5
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80
                  "
                >
                  Ver servicios
                </Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* contenido principal footer */}
        <div className="grid gap-10 pb-10 md:grid-cols-[minmax(0,1.5fr)_repeat(2,minmax(0,1fr))]">
          {/* columna marca */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40">
                <span className="text-sm font-bold text-emerald-300">BE</span>
              </div>
              <span className="text-[15px] font-semibold tracking-tight">
                Codeva Studio
              </span>
            </div>
            <p className={`max-w-md text-sm ${subtleText}`}>
              Combinamos estrategia, diseño y desarrollo para crear sitios que
              se sienten como producto digital, no solo como “páginas web”.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-1 text-emerald-100">
                Diseño & UX
              </span>
              <span className="rounded-full border border-cyan-400/35 bg-cyan-500/10 px-3 py-1 text-cyan-100">
                Desarrollo a medida
              </span>
              <span className="rounded-full border border-slate-500/40 bg-slate-800/60 px-3 py-1 text-slate-200">
                SEO técnico & performance
              </span>
            </div>
          </div>

          {/* columna navegación */}
          <div className="space-y-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Navegación
            </p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-6">
              <Link
                href="/#servicios"
                className="transition hover:text-emerald-300"
              >
                Servicios
              </Link>
              <Link
                href="/#portfolio"
                className="transition hover:text-emerald-300"
              >
                Proyectos
              </Link>
              <Link
                href="/#nosotros"
                className="transition hover:text-emerald-300"
              >
                Sobre nosotros
              </Link>
              <Link
                href="/#proceso"
                className="transition hover:text-emerald-300"
              >
                Cómo trabajamos
              </Link>
              <Link
                href="/#blog"
                className="transition hover:text-emerald-300"
              >
                Recursos
              </Link>
              <Link
                href="/#contacto"
                className="transition hover:text-emerald-300"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* columna contacto + redes */}
          <div className="space-y-4 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Hablemos
            </p>
            <div className="space-y-2">
              <p className={subtleText}>
                ¿Tienes un proyecto en mente? Escríbenos y te respondemos en menos
                de 24h con los siguientes pasos.
              </p>
              <a
                href="mailto:hola@codeva.studio"
                className="text-sm font-medium text-emerald-300 hover:text-emerald-200"
              >
                hola@codeva.studio
              </a>
              <p className="text-xs text-slate-500">
                También podemos coordinar por WhatsApp o videollamada.
              </p>
            </div>

            <div className="pt-1">
              <p className="mb-2 text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase">
                Redes
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={`
                    ${socialBase}
                    border-emerald-400/40 text-emerald-300
                    sm:${socialColors}
                  `}
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className={`
                  ${socialBase}
                  border-emerald-400/40 text-emerald-300
                  sm:${socialColors}
                `}
                >
                  <FaTwitter className="text-sm" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={`
                  ${socialBase}
                  border-emerald-400/40 text-emerald-300
                  sm:${socialColors}
                `}
                >
                  <FaInstagram className="text-sm" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`
                  ${socialBase}
                  border-emerald-400/40 text-emerald-300
                  sm:${socialColors}
                `}
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* línea final */}
        <div className={`border-t ${borderColor} py-4 text-xs ${subtleText}`}>
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
            <p>© {new Date().getFullYear()} Codeva. Todos los derechos reservados.</p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/privacidad"
                className="
                  inline-flex items-center justify-center
                  rounded-xl px-4 py-1.5 text-[12px] font-medium
                  bg-white/5 backdrop-blur
                  border border-white/10
                  shadow-[0_0_0_0_rgba(16,185,129,0)]
                  transition-all duration-300
                  hover:border-emerald-300/40
                  hover:bg-emerald-300/10
                  hover:text-emerald-200
                  hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]
                  hover:-translate-y-[1px]
                "
              >
                Política de privacidad
              </Link>

              <Link
                href="/terminos"
                className="
                  inline-flex items-center justify-center
                  rounded-xl px-4 py-1.5 text-[12px] font-medium
                  bg-white/5 backdrop-blur
                  border border-white/10
                  shadow-[0_0_0_0_rgba(16,185,129,0)]
                  transition-all duration-300
                  hover:border-emerald-300/40
                  hover:bg-emerald-300/10
                  hover:text-emerald-200
                  hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]
                  hover:-translate-y-[1px]
                "
              >
                Términos de servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
