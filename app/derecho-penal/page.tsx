import HeroPenal from "@/components/derecho-penal/hero-penal"
import ServiceDescriptionPenal from "@/components/derecho-penal/service-description-penal"
import WhyChooseUsPenal from "@/components/derecho-penal/why-choose-us-penal"
import CallToActionPenal from "@/components/derecho-penal/call-to-action-penal"
import ContactFormPenal from "@/components/derecho-penal/contact-form-penal"
import Footer from "@/components/footer"

export default function DerechoPenalPage() {
  return (
    <main className="min-h-screen">
      <HeroPenal />
      <ServiceDescriptionPenal />
      <WhyChooseUsPenal />
      <CallToActionPenal />
      <ContactFormPenal />
      <Footer />
    </main>
  )
}
