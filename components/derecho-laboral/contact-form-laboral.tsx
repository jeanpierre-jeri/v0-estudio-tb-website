"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function ContactFormLaboral() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    motivo: "",
    tipoConsulta: "trabajador",
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

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, tipoConsulta: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // En un entorno real, aquí iría la lógica para enviar el email a admin@estudiotb.com
      console.log("Enviando formulario de Derecho Laboral a admin@estudiotb.com:", formData)

      // Simulamos un tiempo de procesamiento
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitting(false)
      alert(
        "Gracias por contactarnos. Su consulta sobre Derecho Laboral ha sido enviada correctamente a admin@estudiotb.com. Nos comunicaremos a la brevedad.",
      )

      // Reseteamos el formulario
      setFormData({ name: "", email: "", phone: "", motivo: "", tipoConsulta: "trabajador", message: "" })
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setIsSubmitting(false)
      alert(
        "Hubo un error al enviar su consulta. Por favor, intente nuevamente o contáctenos directamente a admin@estudiotb.com",
      )
    }
  }

  return (
    <section id="contacto-laboral" className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-8 shadow-md">
          <h2 className="mb-6 text-center font-serif text-2xl font-bold text-navy-blue md:text-3xl">
            Formulario de contacto - Derecho Laboral
          </h2>
          <p className="mb-8 text-center text-gray-600">
            Complete el formulario a continuación para recibir asesoramiento especializado en Derecho Laboral.
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
                    <SelectItem value="despido">Despido / Indemnización</SelectItem>
                    <SelectItem value="accidente">Accidente laboral</SelectItem>
                    <SelectItem value="seclo">Audiencia SECLO</SelectItem>
                    <SelectItem value="calculo">Cálculo de liquidación</SelectItem>
                    <SelectItem value="auditoria">Auditoría laboral</SelectItem>
                    <SelectItem value="otro">Otro tema laboral</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Tipo de consulta *</label>
              <RadioGroup
                value={formData.tipoConsulta}
                onValueChange={handleRadioChange}
                className="flex space-x-8"
                disabled={isSubmitting}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="trabajador" id="trabajador" />
                  <Label htmlFor="trabajador">Soy trabajador</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="empleador" id="empleador" />
                  <Label htmlFor="empleador">Soy empleador</Label>
                </div>
              </RadioGroup>
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
