import { Building2, FileText, Scale, Users } from "lucide-react"

const services = [
  {
    title: "Constitución y modificación de sociedades",
    description: "SRL, SA, SAS, asociaciones civiles",
    icon: Building2,
    details:
      "Asesoramiento en la elección del tipo societario adecuado, redacción de estatutos, inscripción y modificaciones posteriores.",
  },
  {
    title: "Contratos comerciales",
    description: "Confección, revisión y negociación de acuerdos mercantiles",
    icon: FileText,
    details:
      "Elaboración y análisis de contratos de distribución, franquicia, suministro, agencia y todo tipo de acuerdos comerciales.",
  },
  {
    title: "Concursos y quiebras",
    description: "Asesoramiento integral en reestructuraciones y procesos judiciales",
    icon: Scale,
    details:
      "Representación de deudores y acreedores en procesos concursales, acuerdos preventivos extrajudiciales y quiebras.",
  },
  {
    title: "Conflictos societarios",
    description: "Representación y solución en disputas entre socios o accionistas",
    icon: Users,
    details:
      "Mediación y litigación en conflictos societarios, impugnación de asambleas y protección de derechos de minoritarios.",
  },
]

export default function ServiceDescriptionComercial() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center font-serif text-3xl font-bold text-navy-blue md:text-4xl">
          ¿Qué incluye nuestro servicio en Derecho Comercial?
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-700 md:text-lg">
          Nos especializamos en brindar asesoramiento jurídico adaptado al mundo empresarial. Ya sea que estés por
          constituir una sociedad, necesites asesoramiento contractual o atravesás un proceso concursal, estamos para
          ayudarte.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy-blue/10 text-navy-blue">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-navy-blue">{service.title}</h3>
              <p className="mb-3 font-medium text-gray-700">{service.description}</p>
              <p className="text-sm text-gray-600">{service.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
