import HeroSection from "@/components/hero-section"
import PresentationSection from "@/components/presentation-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import ClientsSection from "@/components/clients-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PresentationSection />
      <ServicesSection />
      <ContactSection />
      <ClientsSection />
      <Footer />
    </main>
  )
}
