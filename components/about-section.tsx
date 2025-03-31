"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const experienceRef = useRef(null);
  const [typedYears, setTypedYears] = useState(11);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const experience = experienceRef.current;

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
        content,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        experience,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.7)",
          scrollTrigger: {
            trigger: experience,
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-100 to-white relative overflow-hidden">
      {/* Background SVG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23a8dadc' fill-opacity='0.2' d='M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,170.7C672,171,768,117,864,106.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,576,320,480,320,384,320,288,320,192,320,96,320,48,320,0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      />
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div ref={contentRef} className="space-y-6">
          <h3 className="text-primary uppercase font-semibold tracking-wide">
            ABOUT Maruti Group
          </h3>
          <h2 className="text-4xl font-bold text-[#1a1a4e] leading-tight">
            Building the Future, <br />
            One Project at a Time.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Maruti Infrastructure is a trusted leader in civil construction, mechanical engineering, material supply, and manpower solutions, based in Baloda Bazar, Chhattisgarh. We combine deep industry expertise with a relentless pursuit of quality and innovation. Our portfolio includes industrial structures, building projects, roads, and mechanical fabrication, all executed with precision and care.
          </p>
          <a href="/clients" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            Explore Our Projects &rarr;
          </a>
        </div>
        <div className="relative mt-20">
          <div ref={experienceRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <span className="text-7xl md:text-8xl font-extrabold text-[#ff6600] drop-shadow-lg">
                11
              </span>
              <div className="text-xl md:text-2xl font-semibold text-gray-800">
                YEARS OF <br />
                EXPERIENCE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}