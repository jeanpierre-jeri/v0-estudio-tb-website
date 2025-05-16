import { CheckCircle } from "lucide-react"

const reasons = [
  {
    title: "Atención especializada por abogados laborales",
    description:
      "Nuestro equipo está formado por profesionales con amplia experiencia y especialización en derecho del trabajo.",
  },
  {
    title: "Resultados comprobados en reclamos y defensas",
    description:
      "Contamos con un historial exitoso tanto en la representación de trabajadores como en la defensa de empleadores.",
  },
  {
    title: "Trato personalizado y seguimiento constante del caso",
    description: "Mantenemos una comunicación fluida y permanente, informándote sobre cada avance en tu caso laboral.",
  },
  {
    title: "Confidencialidad y compromiso",
    description:
      "Garantizamos absoluta reserva en el manejo de la información y un compromiso total con la defensa de tus intereses.",
  },
]

export default function WhyChooseUsLaboral() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-navy-blue md:text-4xl">
          Asistencia laboral clara y profesional
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
