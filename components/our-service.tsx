"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Civil Construction",
    description:
      "We provide comprehensive civil construction services, including industrial structures, building projects, and roads.",
    image: "/images/construction-1.jpg", // Replace with actual image path
  },
  {
    title: "Mechanical Fabrication and Erection",
    description:
      "Our expertise covers mechanical fabrication and erection work, ensuring high-quality and precise installations.",
    image: "/images/construction-2.jpg", // Replace with actual image path
  },
  {
    title: "Material Supply",
    description:
      "We offer reliable material supply services to support your construction and mechanical projects.",
    image: "/images/construction-3.jpg", // Replace with actual image path
  },
  {
    title: "Transporting and Handling",
    description:
      "Efficient transporting and handling services to ensure timely and safe delivery of materials and equipment.",
    image: "/images/construction-4.jpg", // Replace with actual image path
  },
  {
    title: "Liaisoning Agency",
    description:
      "We act as a liaisoning agency, streamlining communication and processes between different stakeholders.",
    image: "/images/construction-5.jpg", // Replace with actual image path
  },
  {
    title: "Equipment Supply",
    description: "We provide a wide range of construction and mechanical equipment.",
    image: "/images/construction-6.jpg", // Replace with actual image path
  },
];

export function ServicesSection() {
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-primary uppercase font-semibold">OUR SERVICES</h3>
          <h2 className="text-4xl font-bold text-[#1a1a4e]">Services We Offer</h2>
        </div>
        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="h-48 w-full relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1a1a4e]">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <a href="#" className="text-primary font-semibold mt-4 inline-block">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}