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
        <main className="min-h-screen ">
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
            href="/contact" // Replace with actual contact page link
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