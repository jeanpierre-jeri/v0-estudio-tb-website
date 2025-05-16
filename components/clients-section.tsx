"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

// Definición de los clientes con sus logos
const clients = [
  {
    id: 1,
    name: "Federación Patronal Seguros",
    logo: "/images/clients/federacion-patronal.png",
  },
  {
    id: 2,
    name: "Sancor Seguros",
    logo: "/images/clients/sancor-seguros.png",
  },
  {
    id: 3,
    name: "La Caja de Ahorro y Seguro",
    logo: "/images/clients/la-caja.png",
  },
  {
    id: 4,
    name: "Provincia ART",
    logo: "/images/clients/provincia-art.webp",
  },
  {
    id: 5,
    name: "L2",
    logo: "/images/clients/l2-logo.svg",
  },
  {
    id: 6,
    name: "Municipalidad de San Isidro",
    logo: "/images/clients/san-isidro.jpeg",
  },
  {
    id: 7,
    name: "Escudo Municipal",
    logo: "/images/clients/escudo-municipal.jpeg",
  },
]

export default function ClientsSection() {
  const marqueeRef1 = useRef<HTMLDivElement>(null)
  const marqueeRef2 = useRef<HTMLDivElement>(null)

  // Duplicamos los clientes para crear un efecto de loop continuo
  const allClients = [...clients, ...clients]

  useEffect(() => {
    // Aseguramos que el segundo grupo de logos comience donde termina el primero
    // para crear un efecto de loop continuo
    const handleResize = () => {
      if (marqueeRef1.current && marqueeRef2.current) {
        const width = marqueeRef1.current.offsetWidth
        marqueeRef2.current.style.left = `${width}px`
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-navy-blue md:text-4xl">Nuestros Clientes</h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
          Organizaciones que confiaron en nuestro asesoramiento jurídico
        </p>

        <div className="relative mx-auto mt-10 h-[120px] w-full overflow-hidden">
          {/* Primera fila de logos que se mueve */}
          <div ref={marqueeRef1} className="absolute left-0 flex animate-marquee items-center space-x-16">
            {clients.map((client) => (
              <div key={client.id} className="flex h-[100px] items-center justify-center">
                <div className="relative transition-all duration-300 hover:scale-110">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={150}
                    height={80}
                    className="h-[80px] w-[150px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Segunda fila de logos para crear el efecto continuo */}
          <div ref={marqueeRef2} className="absolute left-full flex animate-marquee items-center space-x-16">
            {clients.map((client) => (
              <div key={`duplicate-${client.id}`} className="flex h-[100px] items-center justify-center">
                <div className="relative transition-all duration-300 hover:scale-110">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={150}
                    height={80}
                    className="h-[80px] w-[150px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
