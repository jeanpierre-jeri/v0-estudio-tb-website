import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <HeroSection />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">
          Política de Privacidad
        </h1>

        <p className="mb-4">
          En <strong>Estudio TB</strong>, nos comprometemos a proteger la
          privacidad de nuestros usuarios y clientes. Esta Política de
          Privacidad describe cómo recopilamos, usamos y protegemos la
          información personal que nos proporcionas a través de nuestro sitio
          web.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            1. Información que recopilamos
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Nombre y apellido</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Información relacionada con la consulta legal que realices</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. Uso de la información
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Brindar asesoramiento legal personalizado</li>
            <li>Responder a consultas y solicitudes</li>
            <li>Mejorar nuestros servicios y la atención al cliente</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. Compartición de la información
          </h2>
          <p>
            <strong>Estudio TB</strong> no vende, alquila ni comparte tu
            información personal con terceros, salvo que:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Tengamos tu consentimiento expreso</li>
            <li>
              Sea requerido por una obligación legal o autoridad competente
            </li>
            <li>
              Sea necesario para la prestación del servicio, y el tercero
              involucrado esté sujeto a obligaciones de confidencialidad
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            4. Seguridad de los datos
          </h2>
          <p>
            Adoptamos medidas de seguridad técnicas y organizativas apropiadas
            para proteger tus datos personales frente a accesos no autorizados,
            pérdidas o alteraciones.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            5. Derechos del titular de los datos
          </h2>
          <p>Como usuario, tenés derecho a:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Acceder a tus datos personales</li>
            <li>Solicitar la rectificación de datos inexactos</li>
            <li>
              Solicitar la eliminación de tus datos, cuando sea legalmente
              procedente
            </li>
            <li>
              Oponerte al tratamiento de tus datos en determinadas
              circunstancias
            </li>
          </ul>
          <p className="mt-2">
            Podés ejercer estos derechos contactándonos por correo electrónico o
            mediante los medios indicados en nuestra sección de contacto.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Cookies</h2>
          <p>
            Este sitio puede utilizar cookies para mejorar la experiencia de
            navegación. Podés configurar tu navegador para rechazarlas si lo
            preferís.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            7. Cambios en esta política
          </h2>
          <p>
            Nos reservamos el derecho de modificar esta Política de Privacidad
            en cualquier momento. Cualquier cambio será publicado en esta página
            con una fecha de actualización.
          </p>
          <p className="mt-2">
            <strong>Última actualización:</strong> 17 de mayo de 2025
          </p>
        </section>

        {/* <section>
          <h2 className="text-xl font-semibold mb-2">8. Contacto</h2>
          <p>
            Si tenés preguntas sobre esta Política de Privacidad o querés
            ejercer tus derechos, podés contactarnos en:
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
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
