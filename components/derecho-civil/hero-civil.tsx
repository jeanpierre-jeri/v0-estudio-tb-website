import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HeroCivil() {
  return (
    <section className="relative w-full bg-navy-blue text-white">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/law-columns.jpg"
          alt="Columnas de edificio de justicia"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-navy-blue/80 to-navy-blue/90"></div>
      <div className="container relative z-10 mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center md:min-h-[60vh] lg:min-h-[70vh]">
        <Link href="/" className="absolute left-4 top-4 text-white hover:text-gray-200 md:left-8 md:top-8">
          <span className="font-serif text-xl font-bold">Estudio TB</span>
          <span className="sr-only">Volver al inicio</span>
        </Link>

        <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Derecho Civil</h1>
        <p className="mb-6 max-w-2xl text-lg font-light md:text-xl lg:text-2xl">
          Asesoramiento integral para proteger tus derechos civiles
        </p>
        <p className="mb-8 max-w-3xl text-base text-gray-200 md:text-lg">
          En Estudio TB contamos con un equipo altamente capacitado para acompañarte en cada etapa de tus necesidades
          civiles, desde la redacción de un contrato hasta un juicio por daños.
        </p>
        <Button asChild size="lg" className="bg-white text-navy-blue hover:bg-gray-100">
          <Link href="#contacto-civil">Solicitá una consulta gratuita</Link>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
