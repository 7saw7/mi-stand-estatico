import type { Metadata } from "next";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

export const metadata: Metadata = {
  title: "Contacto | Codeva Studio",
  description:
    "Cuéntanos sobre tu proyecto y te responderemos con los siguientes pasos en menos de 24 horas.",
};

export default function ContactoPage() {
  return (
    <>
    <Header />    
    <section className="relative min-h-screen overflow-hidden pt-[6rem] p-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#000915] to-[#00060c]" />
        <div className="absolute -top-24 left-0 h-[24rem] w-[24rem] rounded-full bg-emerald-500/25 blur-3xl opacity-70" />
        <div className="absolute -bottom-32 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/25 blur-3xl opacity-60" />
      </div>

      <div className="container-x">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Contacto
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
            Hablemos de tu proyecto
            <span className="text-emerald-400"> sin compromiso.</span>
          </h1>
          <p className="mt-4 text-[15px] text-slate-300">
            Cuéntanos en qué punto estás, qué necesitas y qué plazos manejas.
            Te responderemos en menos de 24 horas con los siguientes pasos.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
          {/* FORM */}
          <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.9)]">
            <form className="grid gap-4 text-sm text-slate-100">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-[12px] text-slate-300">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="h-10 w-full rounded-lg border border-slate-700/70 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-emerald-400/60 focus:border-emerald-300 focus:ring-2"
                    placeholder="Cómo te llamas"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[12px] text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="h-10 w-full rounded-lg border border-slate-700/70 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-emerald-400/60 focus:border-emerald-300 focus:ring-2"
                    placeholder="demail@tuempresa.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-[12px] text-slate-300">
                  Tipo de proyecto
                </label>
                <select
                  className="h-10 w-full rounded-lg border border-slate-700/70 bg-slate-900/80 px-3 text-sm text-slate-100 outline-none ring-emerald-400/60 focus:border-emerald-300 focus:ring-2"
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

              <div>
                <label className="mb-1 block text-[12px] text-slate-300">
                  Cuéntanos un poco más
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-slate-700/70 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-400/60 focus:border-emerald-300 focus:ring-2"
                  placeholder="En qué punto estás, qué necesitas y qué plazos tienes en mente."
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(16,185,129,0.6)] transition hover:bg-emerald-400"
              >
                Enviar mensaje
              </button>

              <p className="mt-1 text-[11px] text-slate-500">
                Al enviar este formulario no se genera ningún compromiso. Usamos
                tus datos solo para responder a tu consulta.
              </p>
            </form>
          </div>

          {/* INFO LATERAL */}
          <div className="space-y-5 text-sm text-slate-200">
            <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-cyan-500/10 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-100">
                Respuesta en &lt;24h
              </p>
              <p className="mt-3 text-[13px]">
                Suelo responder el mismo día en horario laboral. Si tu proyecto
                encaja con lo que hacemos, te propondré una llamada breve para
                conocernos mejor.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/90 p-5">
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
