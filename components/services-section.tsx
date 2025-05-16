import { FileText, Building2, Briefcase, Scale } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    title: "Derecho Civil",
    description: "Contratos, sucesiones, daños y perjuicios",
    icon: FileText,
    details:
      "Asesoramiento integral en asuntos civiles, redacción y revisión de contratos, procesos sucesorios y reclamos por daños.",
    link: "/derecho-civil",
  },
  {
    title: "Derecho Comercial",
    description: "Sociedades, concursos y quiebras, contratos comerciales",
    icon: Building2,
    details:
      "Constitución y asesoramiento de sociedades, procesos concursales, negociación y redacción de contratos comerciales.",
    link: "/derecho-comercial",
  },
  {
    title: "Derecho Laboral",
    description: "Reclamos laborales, despidos, accidentes de trabajo",
    icon: Briefcase,
    details:
      "Representación en conflictos laborales, asesoramiento en despidos, indemnizaciones y accidentes laborales.",
    link: "/derecho-laboral",
  },
  {
    title: "Derecho Penal",
    description: "Defensa en causas penales, denuncias, estrategias procesales",
    icon: Scale,
    details:
      "Defensa técnica en procesos penales, asesoramiento en denuncias y desarrollo de estrategias procesales efectivas.",
    link: "/derecho-penal",
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-navy-blue md:text-4xl">
          Nuestros Servicios
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className="block transition-transform duration-300 hover:scale-[1.02]"
            >
              <Card className="h-full border-none shadow-md transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-blue/10 text-navy-blue">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-navy-blue">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{service.details}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
