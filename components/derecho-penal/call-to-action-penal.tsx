import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToActionPenal() {
  return (
    <section className="w-full bg-navy-blue py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">¿Necesitás defensa o asesoramiento penal?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
          Completá este formulario y un abogado penalista se comunicará con vos lo antes posible.
        </p>
        <Button asChild size="lg" className="bg-white px-8 text-navy-blue hover:bg-gray-100">
          <Link href="#contacto-penal">Contactarme con un abogado penal</Link>
        </Button>
      </div>
    </section>
  )
}
