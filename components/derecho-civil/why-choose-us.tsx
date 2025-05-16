import { CheckCircle } from "lucide-react"

const reasons = [
  {
    title: "Más de 15 años de experiencia",
    description: "Trayectoria comprobada en el ámbito del Derecho Civil con casos de alta complejidad.",
  },
  {
    title: "Abogados especializados con matrícula vigente",
    description: "Equipo de profesionales con formación específica en Derecho Civil y constante actualización.",
  },
  {
    title: "Comunicación clara y acompañamiento constante",
    description: "Te mantenemos informado en cada etapa del proceso con lenguaje claro y accesible.",
  },
  {
    title: "Éxito comprobado en más de 1.000 casos civiles",
    description: "Nuestra tasa de éxito nos respalda como uno de los estudios más confiables en la materia.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-navy-blue md:text-4xl">
          ¿Por qué elegir Estudio TB?
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4 rounded-lg bg-white p-6 shadow-sm">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-navy-blue" />
              <div>
                <h3 className="mb-2 text-lg font-bold text-navy-blue">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
