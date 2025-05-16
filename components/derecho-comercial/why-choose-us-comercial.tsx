import { CheckCircle } from "lucide-react"

const reasons = [
  {
    title: "Más de 15 años asesorando empresas",
    description: "Amplia experiencia en el ámbito del Derecho Comercial con clientes de diversos sectores y tamaños.",
  },
  {
    title: "Visión legal y estratégica para negocios",
    description:
      "No solo brindamos asesoramiento jurídico, sino que entendemos las necesidades comerciales de nuestros clientes.",
  },
  {
    title: "Trato directo con abogados especializados",
    description: "Trabajamos con un equipo de profesionales especializados en diferentes áreas del Derecho Comercial.",
  },
  {
    title: "Experiencia en negociación empresarial y procesos judiciales",
    description:
      "Contamos con amplia trayectoria tanto en la resolución alternativa de conflictos como en litigios comerciales.",
  },
]

export default function WhyChooseUsComercial() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-navy-blue md:text-4xl">
          Tu aliado legal en el mundo de los negocios
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
