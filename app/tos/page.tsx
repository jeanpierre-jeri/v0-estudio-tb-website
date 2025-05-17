import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";

export default function ToSPage() {
  return (
    <div>
      <HeroSection />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">
          Términos y Condiciones de Uso
        </h1>

        <p className="mb-4">
          Al acceder y utilizar el sitio web de <strong>Estudio TB</strong>,
          aceptás los siguientes Términos y Condiciones. Si no estás de acuerdo
          con alguno de ellos, te solicitamos que no utilices este sitio.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Uso del sitio</h2>
          <p>
            El contenido de este sitio web tiene fines exclusivamente
            informativos. No constituye asesoramiento legal específico ni genera
            una relación abogado-cliente de manera automática.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. Propiedad intelectual
          </h2>
          <p>
            Todo el contenido de este sitio, incluyendo textos, logos, imágenes
            y diseños, es propiedad de <strong>Estudio TB</strong> o se utiliza
            con autorización. Queda prohibida su reproducción, distribución o
            modificación sin consentimiento previo por escrito.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Responsabilidad</h2>
          <p>
            <strong>Estudio TB</strong> no garantiza la exactitud ni la
            actualidad de la información publicada. No nos responsabilizamos por
            daños derivados del uso de la información contenida en este sitio.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Enlaces a terceros</h2>
          <p>
            Este sitio puede contener enlaces a sitios de terceros.{" "}
            <strong>Estudio TB</strong> no se responsabiliza por el contenido,
            políticas o prácticas de dichos sitios externos.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos Términos y Condiciones
            en cualquier momento. Los cambios entrarán en vigencia una vez
            publicados en esta página.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            6. Legislación aplicable
          </h2>
          <p>
            Estos Términos se rigen por las leyes de la República Argentina.
            Cualquier controversia será sometida a los tribunales ordinarios de
            la Ciudad Autónoma de Buenos Aires.
          </p>
        </section>

        <section>
          {/* <h2 className="text-xl font-semibold mb-2">7. Contacto</h2>
          <p>
            Si tenés preguntas sobre estos Términos y Condiciones, podés
            contactarnos en:
          </p>
          <div className="mt-2">
            <p>
              <strong>Estudio TB</strong>
            </p>
            <p>
              Correo electrónico:{" "}
              <a
                href="mailto:contacto@estudiotb.com"
                className="text-blue-600 underline"
              >
                contacto@estudiotb.com
              </a>
            </p>
            <p>
              Teléfono:{" "}
              <a href="tel:+5491234567890" className="text-blue-600 underline">
                +54 9 123 456 7890
              </a>
            </p>
          </div> */}
          <p className="mt-4 text-sm text-gray-500">
            Última actualización: 17 de mayo de 2025
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
