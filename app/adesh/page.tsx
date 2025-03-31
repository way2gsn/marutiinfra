"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const values = valuesRef.current?.children;
    const team = teamRef.current?.children;

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

      gsap.fromTo(
             // @ts-ignore
        values,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        // @ts-ignore
        team,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: teamRef.current,
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
     <main className="min-h-screen">
          <Navbar bgColor="bg-[#1B1B2F]"  />
          <section ref={sectionRef} className="py-20 mt-20 ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="md:order-2">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual image
                alt="About Maruti Group"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold text-[#1a1a4e] mb-4">
              Adesh
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
               An M.Tech in Structural Engineering from BIT Durg and a B.Tech in Civil Engineering from KIIT Bhubaneswar, I was born in 1997 in a small town in Chhattisgarh. Growing up in Balodabazar, I studied at Sacred Heart School and nurtured big dreams, which I continue to pursue with passion and dedication in my career and still Chasing it.
            </p>
            <a
              href="/contact" // Replace with your actual contact page link
              className="bg-primary text-white py-3 px-6 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
 <Footer />
        </main>

  );
}