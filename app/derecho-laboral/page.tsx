import HeroLaboral from "@/components/derecho-laboral/hero-laboral"
import ServiceDescriptionLaboral from "@/components/derecho-laboral/service-description-laboral"
import WhyChooseUsLaboral from "@/components/derecho-laboral/why-choose-us-laboral"
import CallToActionLaboral from "@/components/derecho-laboral/call-to-action-laboral"
import ContactFormLaboral from "@/components/derecho-laboral/contact-form-laboral"
import Footer from "@/components/footer"

export default function DerechoLaboralPage() {
  return (
    <main className="min-h-screen">
      <HeroLaboral />
      <ServiceDescriptionLaboral />
      <WhyChooseUsLaboral />
      <CallToActionLaboral />
      <ContactFormLaboral />
      <Footer />
    </main>
  )
}
