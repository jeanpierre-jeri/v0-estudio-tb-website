import { CheckCircle } from "lucide-react"

const reasons = [
  {
    title: "Más de 15 años en litigación penal",
    description:
      "Amplia experiencia en la defensa de todo tipo de causas penales, desde delitos menores hasta casos complejos.",
  },
  {
    title: "Intervención inmediata ante urgencias judiciales",
    description:
      "Disponibilidad para actuar de forma inmediata en situaciones de urgencia como detenciones o allanamientos.",
  },
  {
    title: "Absoluta reserva y profesionalismo",
    description:
      "Garantizamos total confidencialidad en el manejo de la información y un trato profesional en todo momento.",
  },
  {
    title: "Defensa técnica en todo el país",
    description: "Capacidad para representar a nuestros clientes en cualquier jurisdicción del territorio nacional.",
  },
]

export default function WhyChooseUsPenal() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-navy-blue md:text-4xl">
          Confianza y experiencia en defensa penal
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
