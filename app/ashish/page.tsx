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
                src="/images/Ashish.jpeg" // Replace with your actual image
                alt="About Ashis"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold text-[#1a1a4e] mb-4">
              Ashish Natthani
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
            I was born on April 17, 1990, and I have a strong academic background in the fields of Commerce and Corporate Governance. I hold a Master’s degree in Commerce and have further specialized in Company Secretarial Studies through the Institute of Company Secretaries of India (ICSI). My education has provided me with a deep understanding of business management, legal frameworks, corporate law, and compliance procedures.
</p>
<p className="text-gray-600 leading-relaxed mb-6">
With a passion for corporate governance and a strong commitment to upholding regulatory standards, I aim to contribute my knowledge and skills to ensure smooth and transparent operations within organizations. I am particularly interested in advising businesses on best practices, assisting with compliance, and helping to navigate complex legal landscapes.
</p>
<p className="text-gray-600 leading-relaxed mb-6">
I am driven by challenges and always eager to stay updated on the latest developments in corporate laws and governance practices. My goal is to leverage my expertise to help organizations achieve both legal compliance and long-term growth.

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