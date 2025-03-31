// pages/projects.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Industrial Structures",
    description: "Construction of robust industrial structures.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
  },
  {
    title: "Building Projects",
    description: "Diverse building construction projects.",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
  },
  {
    title: "Road Construction",
    description: "Quality road construction and maintenance.",
    image: "https://plus.unsplash.com/premium_photo-1723734021959-096229cff8c9?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
  },
  {
    title: "Mechanical Fabrication",
    description: "Precision mechanical fabrication and erection.",
    image: "https://images.unsplash.com/photo-1738162837672-de9d735a9b90?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
  },
  // Add more projects as needed
];

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.children;
    if (elements) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
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
      <section className="py-20 mt-40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a1a4e] mb-8 text-center">
            Our Projects
          </h2>
          <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="h-48 w-full relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1a1a4e]">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <a
                    href="#"
                    className="text-primary font-semibold mt-4 inline-block"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}