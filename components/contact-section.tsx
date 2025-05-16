"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // En un entorno real, aquí iría la lógica para enviar el email a admin@estudiotb.com
      console.log("Enviando formulario a admin@estudiotb.com:", formData)

      // Simulamos un tiempo de procesamiento
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitting(false)
      alert(
        "Gracias por contactarnos. Su consulta ha sido enviada correctamente a admin@estudiotb.com. Nos comunicaremos a la brevedad.",
      )

      // Reseteamos el formulario
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setIsSubmitting(false)
      alert(
        "Hubo un error al enviar su consulta. Por favor, intente nuevamente o contáctenos directamente a admin@estudiotb.com",
      )
    }
  }

  return (
    <section id="contacto" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-navy-blue md:text-4xl">
          Consultá con nosotros
        </h2>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          {/* Formulario de contacto */}
          <div className="rounded-lg bg-gray-50 p-6 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ingrese su nombre"
                  required
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ingrese su email"
                  required
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describa brevemente su consulta"
                  required
                  className="min-h-[120px] w-full"
                  disabled={isSubmitting}
                />
              </div>

              <p className="text-xs text-gray-500 mb-4">* Su consulta será enviada a admin@estudiotb.com</p>

              <Button
                type="submit"
                className="w-full bg-navy-blue text-white hover:bg-navy-blue/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar consulta"}
              </Button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col justify-center space-y-8 p-6">
            <h3 className="font-serif text-2xl font-semibold text-navy-blue">Información de contacto</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-4 h-6 w-6 text-navy-blue" />
                <div>
                  <h4 className="font-medium">Dirección</h4>
                  <p className="text-gray-600">Av. Corrientes 1234, Piso 5, Oficina B</p>
                  <p className="text-gray-600">Ciudad Autónoma de Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-4 h-6 w-6 text-navy-blue" />
                <div>
                  <h4 className="font-medium">Teléfono</h4>
                  <p className="text-gray-600">+54 9 11 4171-2111</p>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-4 h-6 w-6 text-navy-blue" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">admin@estudiotb.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
