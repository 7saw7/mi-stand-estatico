import ContactLabel from "@/components/Contact/ContactLabel";

export default function ContactPage() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 min-h-screen p-8 text-center scroll-mt-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Contáctame
        </h1>

        <div className="space-y-4 inline-block text-left">
          <ContactLabel label="Correo" value="contacto@empresa.com" href="mailto:contacto@empresa.com" />
          <ContactLabel label="Teléfono" value="+51 916 983 980" href="tel:+51916983980" />
          <ContactLabel label="Dirección" value="Av. Siempre Viva 123, Lima, Perú" />
        </div>
      </section>
    </>
  );
}
