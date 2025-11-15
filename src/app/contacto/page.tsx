// src/app/contacto/page.tsx
import type { Metadata } from "next";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import {
  FiUser,
  FiMail,
  FiLayers,
  FiMessageCircle,
  FiClock,
  FiSend,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "Contacto | Codeva Studio",
  description:
    "Cuéntanos sobre tu proyecto y te responderemos con los siguientes pasos en menos de 24 horas.",
};

export default function ContactoPage() {
  return (
    <>
      <Header />

      {/* sección contacto: SIN fondo propio, usa el del layout */}
      <section className="relative min-h-screen overflow-hidden pt-[6rem] pb-16 px-5 md:px-10 lg:px-20">
        {/* ===== CONTENIDO ===== */}
        <div className="container-x relative">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Contacto
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
              Hablemos de tu proyecto
              <span className="text-emerald-400"> sin compromiso.</span>
            </h1>
            <p className="mt-4 text-[15px] text-slate-100/90">
              Cuéntanos en qué punto estás, qué necesitas y qué plazos manejas.
              Te responderemos en menos de 24 horas con los siguientes pasos.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
            {/* FORM */}
            <div className="rounded-2xl border border-slate-800/80 bg-[#020818]/90 p-6 shadow-[0_22px_60px_rgba(0,0,0,0.9)] backdrop-blur-sm">
              <form className="grid gap-4 text-sm text-slate-100">
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Nombre */}
                  <div>
                    <label className="mb-1 block text-[12px] text-slate-300">
                      Nombre
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-500">
                        <FiUser className="h-4 w-4" />
                      </span>
                      <input
                        type="text"
                        className="h-10 w-full rounded-lg border border-slate-700/70 bg-slate-950/70 pl-9 pr-3 text-sm text-slate-100 outline-none ring-emerald-400/50 focus:border-emerald-300 focus:ring-2"
                        placeholder="Cómo te llamas"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1 block text-[12px] text-slate-300">
                      Email
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-500">
                        <FiMail className="h-4 w-4" />
                      </span>
                      <input
                        type="email"
                        className="h-10 w-full rounded-lg border border-slate-700/70 bg-slate-950/70 pl-9 pr-3 text-sm text-slate-100 outline-none ring-emerald-400/50 focus:border-emerald-300 focus:ring-2"
                        placeholder="email@tuempresa.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Tipo de proyecto */}
                <div>
                  <label className="mb-1 block text-[12px] text-slate-300">
                    Tipo de proyecto
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-500">
                      <FiLayers className="h-4 w-4" />
                    </span>
                    <select
                      className="h-10 w-full rounded-lg border border-slate-700/70 bg-slate-950/70 pl-9 pr-8 text-sm text-slate-100 outline-none ring-emerald-400/50 focus:border-emerald-300 focus:ring-2"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Selecciona una opción
                      </option>
                      <option>Nuevo sitio web</option>
                      <option>Rediseño de web actual</option>
                      <option>E-commerce</option>
                      <option>Aplicación / producto digital</option>
                      <option>Otro tipo de proyecto</option>
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="mb-1 block text-[12px] text-slate-300">
                    Cuéntanos un poco más
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute top-3 left-3 flex items-start text-slate-500">
                      <FiMessageCircle className="h-4 w-4 mt-[1px]" />
                    </span>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border border-slate-700/70 bg-slate-950/70 pl-9 pr-3 py-2 text-sm text-slate-100 outline-none ring-emerald-400/50 focus:border-emerald-300 focus:ring-2"
                      placeholder="En qué punto estás, qué necesitas y qué plazos tienes en mente."
                    />
                  </div>
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(34,197,94,0.6)] transition hover:from-emerald-300 hover:to-cyan-300"
                >
                  Enviar mensaje
                  <FiSend className="h-4 w-4" />
                </button>

                <p className="mt-1 text-[11px] text-slate-500">
                  Al enviar este formulario no se genera ningún compromiso.
                  Usamos tus datos solo para responder a tu consulta.
                </p>
              </form>
            </div>

            {/* INFO LATERAL */}
            <div className="space-y-5 text-sm text-slate-200">
              {/* Respuesta rápida */}
              <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/18 via-emerald-500/4 to-cyan-500/10 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.75)]">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/15">
                  <FiClock className="h-4 w-4 text-emerald-100" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-100">
                  Respuesta en &lt;24h
                </p>
                <p className="mt-3 text-[13px]">
                  Suelo responder el mismo día en horario laboral. Si tu
                  proyecto encaja con lo que hacemos, te propondré una llamada
                  breve para conocernos mejor.
                </p>
              </div>

              {/* Contacto directo */}
              <div className="rounded-2xl border border-slate-800/80 bg-[#020818]/95 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.85)]">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10">
                  <FiMail className="h-4 w-4 text-emerald-200" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  Contacto directo
                </p>
                <p className="mt-3 text-[13px]">
                  Si prefieres escribir directamente:
                </p>
                <a
                  href="mailto:hola@codeva.studio"
                  className="mt-2 inline-flex text-[13px] font-medium text-emerald-300 hover:text-emerald-200"
                >
                  hola@codeva.studio
                </a>
                <p className="mt-3 text-[12px] text-slate-400">
                  También podemos coordinar por WhatsApp o videollamada una vez
                  tengamos el contexto de tu proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
