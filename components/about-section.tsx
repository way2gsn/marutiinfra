"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightImageRef = useRef(null);
  const bottomTextRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftContent = leftContentRef.current;
    const rightImage = rightImageRef.current;
    const bottomText = bottomTextRef.current;

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
        leftContent,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftContent,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        rightImage,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightImage,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        bottomText,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bottomText,
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
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div ref={leftContentRef} className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-primary uppercase font-semibold">
                ABOUT Maruti Group
              </h3>
              <h2 className="text-4xl font-bold text-[#1a1a4e]">
                We Provide Complete Construction Solutions
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
            Maruti Infrastructure is a leading civil construction, mechanical engineering, material supply and man power supply firm based in Baloda Bazar, Chhattisgarh. We bring years of expertise and a commitment to quality and innovation. Our work spans industrial structures, building projects, roads, and mechanical fabrication. (Know more here can redirect to clients)
            </p>
          </div>
          <div
            ref={rightImageRef}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <Image
              src="https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ayoki Building"
              fill
              className="object-cover scale-100 transition-transform duration-1000 ease-in-out hover:scale-105"
            />
            <div
              ref={bottomTextRef}
              className="absolute bottom-0 left-0 text-white text-left p-4"
            >
              <span className="text-6xl font-bold">11</span>
              <div className="text-xl">
                YEAR&apos;S EXPERIENCE IN
                <div className="font-light">construction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}