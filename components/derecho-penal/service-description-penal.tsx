import { Scale, FileText, Briefcase, FileCheck, Gavel } from "lucide-react"

const services = [
  {
    title: "Defensa en causas penales",
    description: "Imputaciones, detenciones, acusaciones",
    icon: Scale,
    details:
      "Representación legal integral ante cualquier tipo de imputación penal, con estrategias de defensa adaptadas a cada caso particular.",
  },
  {
    title: "Asistencia legal",
    description: "Ante denuncias, citaciones y declaraciones indagatorias",
    icon: FileText,
    details:
      "Acompañamiento profesional en todas las instancias del proceso penal, garantizando el respeto de tus derechos y garantías constitucionales.",
  },
  {
    title: "Estrategia penal personalizada",
    description: "Para cada etapa del proceso",
    icon: Briefcase,
    details:
      "Diseño de estrategias de defensa específicas según la etapa procesal, tipo de delito y circunstancias particulares del caso.",
  },
  {
    title: "Presentación de escritos",
    description: "Recursos y eximiciones de prisión",
    icon: FileCheck,
    details:
      "Elaboración y presentación de todos los escritos necesarios para la defensa, incluyendo recursos, apelaciones y solicitudes de eximición de prisión.",
  },
  {
    title: "Representación en juicios",
    description: "Orales y apelaciones",
    icon: Gavel,
    details:
      "Defensa técnica en juicios orales y representación en instancias de apelación, con amplia experiencia en litigación penal.",
  },
]

export default function ServiceDescriptionPenal() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center font-serif text-3xl font-bold text-navy-blue md:text-4xl">
          ¿Qué hacemos en Derecho Penal?
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-700 md:text-lg">
          Contamos con una sólida trayectoria en defensa penal. Atendemos casos en todas sus etapas: desde denuncias
          iniciales hasta juicios orales. Nuestra prioridad es proteger tus derechos y garantizar un proceso justo.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
