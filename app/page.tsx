import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { AboutSection } from "@/components/about-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ClientsSection } from "@/components/clients-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import {ServicesSection} from "@/components/our-service"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <WhyUsSection />
      <ClientsSection />
      <ServicesSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}

