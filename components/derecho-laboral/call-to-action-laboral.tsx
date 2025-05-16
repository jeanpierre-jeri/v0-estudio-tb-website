import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToActionLaboral() {
  return (
    <section className="w-full bg-navy-blue py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">¿Querés resolver tu situación laboral?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
          Completá el siguiente formulario y un abogado se comunicará con vos en menos de 24 horas.
        </p>
        <Button asChild size="lg" className="bg-white px-8 text-navy-blue hover:bg-gray-100">
          <Link href="#contacto-laboral">Contactarme con un abogado laboral</Link>
        </Button>
      </div>
    </section>
  )
}
