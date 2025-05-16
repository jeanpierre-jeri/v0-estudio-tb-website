"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function ContactFormPenal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    motivo: "",
    message: "",
    urgente: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, motivo: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, urgente: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // En un entorno real, aquí iría la lógica para enviar el email a admin@estudiotb.com
      console.log("Enviando formulario de Derecho Penal a admin@estudiotb.com:", formData)

      // Simulamos un tiempo de procesamiento
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitting(false)
      alert(
        "Gracias por contactarnos. Su consulta sobre Derecho Penal ha sido enviada correctamente a admin@estudiotb.com. Nos comunicaremos a la brevedad.",
      )

      // Reseteamos el formulario
      setFormData({ name: "", email: "", phone: "", motivo: "", message: "", urgente: false })
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setIsSubmitting(false)
      alert(
        "Hubo un error al enviar su consulta. Por favor, intente nuevamente o contáctenos directamente a admin@estudiotb.com",
      )
    }
  }

  return (
    <section id="contacto-penal" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-8 shadow-md">
          <h2 className="mb-6 text-center font-serif text-2xl font-bold text-navy-blue md:text-3xl">
            Formulario de contacto - Derecho Penal
          </h2>
          <p className="mb-8 text-center text-gray-600">
            Complete el formulario a continuación para recibir asesoramiento especializado en Derecho Penal.
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
                    <SelectItem value="defensa">Defensa en causa penal</SelectItem>
                    <SelectItem value="denuncia">Asistencia ante denuncia</SelectItem>
                    <SelectItem value="citacion">Citación judicial</SelectItem>
                    <SelectItem value="detencion">Situación de detención</SelectItem>
                    <SelectItem value="juicio">Juicio oral</SelectItem>
                    <SelectItem value="otro">Otro tema penal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="urgente"
                checked={formData.urgente}
                onCheckedChange={handleSwitchChange}
                disabled={isSubmitting}
              />
              <Label htmlFor="urgente" className="text-sm font-medium text-gray-700">
                Es una consulta urgente (requiere atención inmediata)
              </Label>
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

            <div className="rounded-md bg-gray-50 p-4">
              <p className="text-sm text-gray-600">
                <strong>Nota de confidencialidad:</strong> Toda la información proporcionada en este formulario será
                tratada con absoluta reserva y confidencialidad.
              </p>
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
