import { NextResponse } from "next/server"
import { sendEmail } from "@/components/api/send-email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, area, motivo } = body

    // Validamos los datos recibidos
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Faltan campos obligatorios" }, { status: 400 })
    }

    // Preparamos el asunto según el área de consulta
    let subject = "Nueva consulta desde el sitio web"
    if (area) {
      subject = `Nueva consulta de ${area} desde el sitio web`
    }

    // Preparamos el cuerpo del email
    const emailBody = `
      Nombre: ${name}
      Email: ${email}
      Teléfono: ${phone || "No proporcionado"}
      ${motivo ? `Motivo: ${motivo}` : ""}
      
      Mensaje:
      ${message}
    `

    // Enviamos el email a admin@estudiotb.com
    const result = await sendEmail({
      to: "admin@estudiotb.com",
      subject,
      body: emailBody,
      from: email,
    })

    if (result.success) {
      return NextResponse.json(
        { success: true, message: "Consulta enviada correctamente a admin@estudiotb.com" },
        { status: 200 },
      )
    } else {
      return NextResponse.json({ success: false, message: result.message }, { status: 500 })
    }
  } catch (error) {
    console.error("Error en la API de contacto:", error)
    return NextResponse.json({ success: false, message: "Error al procesar la solicitud" }, { status: 500 })
  }
}
