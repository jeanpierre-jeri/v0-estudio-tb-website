import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
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
      <div className="container relative z-10 mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 text-center md:min-h-[80vh] lg:min-h-[90vh]">
        <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Estudio TB</h1>
        <p className="mb-8 max-w-2xl text-lg font-light md:text-xl lg:text-2xl">
          Comprometidos con la justicia, enfocados en tus derechos
        </p>
        <Button asChild size="lg" className="bg-white text-navy-blue hover:bg-gray-100">
          <Link href="#contacto">Solicitar consulta</Link>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
