import { Briefcase, HardHat, FileCheck, Calculator, ClipboardCheck } from "lucide-react"

const services = [
  {
    title: "Reclamos laborales",
    description: "Por despidos, salarios y condiciones de trabajo",
    icon: Briefcase,
    details:
      "Representación legal en reclamos por despidos injustificados, falta de pago de salarios, horas extras y mejora de condiciones laborales.",
  },
  {
    title: "Accidentes laborales",
    description: "Asesoramiento integral en accidentes y enfermedades profesionales",
    icon: HardHat,
    details:
      "Asistencia legal completa en casos de accidentes de trabajo y enfermedades profesionales, incluyendo reclamos ante ART.",
  },
  {
    title: "Representación ante el SECLO",
    description: "Conciliación obligatoria",
    icon: FileCheck,
    details:
      "Representación profesional en audiencias de conciliación laboral obligatoria, buscando acuerdos favorables para nuestros clientes.",
  },
  {
    title: "Cálculo de indemnizaciones",
    description: "Y liquidaciones finales",
    icon: Calculator,
    details:
      "Cálculo preciso de indemnizaciones por despido, preaviso, integración, vacaciones no gozadas y demás rubros laborales.",
  },
  {
    title: "Auditoría laboral",
    description: "Para empresas",
    icon: ClipboardCheck,
    details:
      "Revisión integral de la situación laboral de la empresa, contratos, registraciones y cumplimiento de normativa vigente.",
  },
]

export default function ServiceDescriptionLaboral() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center font-serif text-3xl font-bold text-navy-blue md:text-4xl">
          ¿Qué ofrecemos en Derecho Laboral?
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-700 md:text-lg">
          Contamos con amplia experiencia en conflictos laborales. Representamos tanto a trabajadores como a empleadores
          en todo el proceso, desde la conciliación hasta el juicio.
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
