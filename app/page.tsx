import { Navbar } from "@/components/navbar";
import { HeroSlider } from "@/components/hero-slider";
import { AboutSection } from "@/components/about-section";
import { WhyUsSection } from "@/components/why-us-section";
import { ClientsSection } from "@/components/clients-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Footer } from "@/components/footer";
import { ServicesSection } from "@/components/our-service";
import ServiceMap from "@/components/google-map";
import VenturesSection from "@/components/ventures";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background SVG - Abstract Waves */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23e0f2fe' fill-opacity='1' d='M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,170.7C672,171,768,117,864,106.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,576,320,480,320,384,320,288,320,192,320,96,320,48,320,0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      />

      {/* Subtle Circular Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23d1d5db' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          zIndex: -1,
        }}
      />

      {/* Diagonal Gradient Overlay (Optional, for added depth) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%)",
          zIndex: -1,
        }}
      />

      <Navbar />
      <HeroSlider />
      <AboutSection />
      <WhyUsSection />
      <ServiceMap />
      <ClientsSection />
      <ServicesSection />
      <VenturesSection />
      {/* <NewsletterSection /> */}
      <Footer />
    </main>
  );
}