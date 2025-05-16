// Este archivo simula una API para enviar emails
// En un entorno de producción, esto se implementaría en un servidor real

type EmailData = {
  to: string
  subject: string
  body: string
  from?: string
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; message: string }> {
  // Simulamos un retraso para imitar una llamada a API real
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    // En un entorno real, aquí iría la lógica para enviar el email
    console.log("Enviando email a:", data.to)
    console.log("Asunto:", data.subject)
    console.log("Contenido:", data.body)

    // Verificamos que el destinatario sea admin@estudiotb.com
    if (data.to !== "admin@estudiotb.com") {
      console.error("Error: El destinatario no es admin@estudiotb.com")
      return {
        success: false,
        message: "El email debe enviarse a admin@estudiotb.com",
      }
    }

    // Simulamos una respuesta exitosa
    return {
      success: true,
      message: "Email enviado correctamente a admin@estudiotb.com",
    }
  } catch (error) {
    console.error("Error al enviar email:", error)
    return {
      success: false,
      message: "Error al enviar el email. Por favor, intente nuevamente.",
    }
  }
}
