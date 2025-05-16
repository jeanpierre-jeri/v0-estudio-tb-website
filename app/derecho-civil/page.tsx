import HeroCivil from "@/components/derecho-civil/hero-civil"
import ServiceDescription from "@/components/derecho-civil/service-description"
import WhyChooseUs from "@/components/derecho-civil/why-choose-us"
import CallToAction from "@/components/derecho-civil/call-to-action"
import ContactFormCivil from "@/components/derecho-civil/contact-form-civil"
import Footer from "@/components/footer"

export default function DerechoCivilPage() {
  return (
    <main className="min-h-screen">
      <HeroCivil />
      <ServiceDescription />
      <WhyChooseUs />
      <CallToAction />
      <ContactFormCivil />
      <Footer />
    </main>
  )
}
