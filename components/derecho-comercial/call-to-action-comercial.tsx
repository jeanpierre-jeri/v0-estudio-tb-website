import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToActionComercial() {
  return (
    <section className="w-full bg-navy-blue py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">Solicitá una reunión con nuestros abogados</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
          Completá el formulario y un especialista se pondrá en contacto con vos.
        </p>
        <Button asChild size="lg" className="bg-white px-8 text-navy-blue hover:bg-gray-100">
          <Link href="#contacto-comercial">Asesorarme en derecho comercial</Link>
        </Button>
      </div>
    </section>
  )
}
