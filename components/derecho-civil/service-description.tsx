import { FileText, FileCodeIcon as FileContract, Briefcase } from "lucide-react"

const services = [
  {
    title: "Daños y perjuicios",
    description:
      "ACCIDENTES DE TRÁNSITO, Reclamos por daños materiales, morales, contractuales y extracontractuales. Indemnizaciones por accidentes, mala praxis, incumplimientos.",
    icon: FileText,
  },
  {
    title: "Contratos civiles",
    description:
      "Redacción, revisión y negociación de contratos de locación, comodato, mutuo, compraventa, entre otros.",
    icon: FileContract,
  },
  {
    title: "Sucesiones",
    description:
      "Asesoramiento integral en procesos testamentarios e intestados. Representación judicial y extrajudicial.",
    icon: Briefcase,
  },
]

export default function ServiceDescription() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center font-serif text-3xl font-bold text-navy-blue md:text-4xl">
          ¿Qué incluye nuestro servicio en Derecho Civil?
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-700 md:text-lg">
          Brindamos soluciones legales claras, rápidas y eficaces en los principales temas de Derecho Civil. Nuestra
          experiencia y atención personalizada nos permite abordar cada caso con el enfoque que merece.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy-blue/10 text-navy-blue">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-navy-blue">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
