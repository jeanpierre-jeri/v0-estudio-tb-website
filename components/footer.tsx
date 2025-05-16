import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-navy-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo y descripción */}
          <div>
            <h3 className="mb-4 font-serif text-2xl font-bold">Estudio TB</h3>
            <p className="text-sm text-gray-300">
              Asesoramiento legal integral con profesionales especializados en diversas áreas del derecho.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-white hover:underline">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Síguenos</h4>
            <div className="flex space-x-4">
              <Link href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="my-8 h-px w-full bg-white/20"></div>

        {/* Copyright y aviso legal */}
        <div className="flex flex-col justify-between space-y-4 text-sm text-gray-300 md:flex-row md:space-y-0">
          <p>© {currentYear} Estudio TB. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white hover:underline">
              Aviso Legal
            </Link>
            <Link href="#" className="hover:text-white hover:underline">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
