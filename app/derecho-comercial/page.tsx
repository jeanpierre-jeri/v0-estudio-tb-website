import HeroComercial from "@/components/derecho-comercial/hero-comercial"
import ServiceDescriptionComercial from "@/components/derecho-comercial/service-description-comercial"
import WhyChooseUsComercial from "@/components/derecho-comercial/why-choose-us-comercial"
import CallToActionComercial from "@/components/derecho-comercial/call-to-action-comercial"
import ContactFormComercial from "@/components/derecho-comercial/contact-form-comercial"
import Footer from "@/components/footer"

export default function DerechoComercialPage() {
  return (
    <main className="min-h-screen">
      <HeroComercial />
      <ServiceDescriptionComercial />
      <WhyChooseUsComercial />
      <CallToActionComercial />
      <ContactFormComercial />
      <Footer />
    </main>
  )
}
