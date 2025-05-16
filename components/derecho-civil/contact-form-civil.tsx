"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactFormCivil() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    motivo: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, motivo: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // En un entorno real, aquí iría la lógica para enviar el email a admin@estudiotb.com
      console.log("Enviando formulario de Derecho Civil a admin@estudiotb.com:", formData)

      // Simulamos un tiempo de procesamiento
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitting(false)
      alert(
        "Gracias por contactarnos. Su consulta sobre Derecho Civil ha sido enviada correctamente a admin@estudiotb.com. Nos comunicaremos a la brevedad.",
      )

      // Reseteamos el formulario
      setFormData({ name: "", email: "", phone: "", motivo: "", message: "" })
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setIsSubmitting(false)
      alert(
        "Hubo un error al enviar su consulta. Por favor, intente nuevamente o contáctenos directamente a admin@estudiotb.com",
      )
    }
  }

  return (
    <section id="contacto-civil" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-8 shadow-md">
          <h2 className="mb-6 text-center font-serif text-2xl font-bold text-navy-blue md:text-3xl">
            Formulario de contacto - Derecho Civil
          </h2>
          <p className="mb-8 text-center text-gray-600">
            Complete el formulario a continuación para recibir asesoramiento especializado en Derecho Civil.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Nombre completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ingrese su nombre completo"
                  required
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Correo electrónico *
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
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Teléfono *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ingrese su número de teléfono"
                  required
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="motivo" className="text-sm font-medium text-gray-700">
                  Motivo de consulta *
                </label>
                <Select value={formData.motivo} onValueChange={handleSelectChange} disabled={isSubmitting}>
                  <SelectTrigger id="motivo" className="w-full">
                    <SelectValue placeholder="Seleccione un motivo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daños">Daños y perjuicios</SelectItem>
                    <SelectItem value="contratos">Contratos civiles</SelectItem>
                    <SelectItem value="sucesiones">Sucesiones</SelectItem>
                    <SelectItem value="otro">Otro tema civil</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Detalle de su consulta *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describa brevemente su situación y consulta"
                required
                className="min-h-[120px] w-full"
                disabled={isSubmitting}
              />
            </div>

            <p className="text-xs text-gray-500">* Su consulta será enviada a admin@estudiotb.com</p>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-full max-w-md bg-navy-blue text-white hover:bg-navy-blue/90 md:w-auto md:px-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar consulta"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
