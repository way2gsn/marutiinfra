// pages/careers.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Navbar } from "@/components/navbar";

gsap.registerPlugin(ScrollTrigger);

export default function CareersPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.context(() => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => {
      gsap.context(() => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }, sectionRef);
    };
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background SVG - Abstract Mountain Waves (Changed) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23a8dadc' fill-opacity='1' d='M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,170.7C672,171,768,117,864,106.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,576,320,480,320,384,320,288,320,192,320,96,320,48,320,0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
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
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%)",
          zIndex: -1,
        }}
      />

      <Navbar bgColor="bg-[#1B1B2F]" />
      <section ref={sectionRef} className="py-20 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a1a4e] mb-8 text-center">
            Careers
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-center">
            Join our team and be a part of building the future. We are always
            looking for talented individuals to contribute to our success.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="bg-primary text-white py-3 px-6 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              Explore Opportunities
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}