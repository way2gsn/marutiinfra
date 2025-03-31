"use client"

import { CircleDot, Shield, Users, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function WhyUsSection() {
  const features = [
    {
      icon: <CircleDot className="h-8 w-8 text-primary" />,
      title: "Creativity",
      description:
        "Complex jobs. Difficult installations. Artistic beauty. Creativity is found across our wide breadth of work.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Reliability",
      description:
        "Our local team is trusted to finish every job according to plan. Even when the plans have to change mid-stream.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Service",
      description:
        "From project initiation until final signoff, you'll have dedicated, real people that make service our top priority.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Expertise",
      description:
        "Till today Maruti Group has constructed plants in over 28 states all over the India.",
    },
  ];

  const sectionRef = useRef(null);
  const featureGridRef = useRef(null);
  const textContentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const featureGrid = featureGridRef.current;
    const textContent = textContentRef.current;

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
        featureGrid,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featureGrid,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        textContent,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textContent,
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
    <section ref={sectionRef} className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div ref={featureGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1a1a4e]">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div ref={textContentRef} className="space-y-6">
            <h3 className="text-primary uppercase font-semibold">WHY US?</h3>
            <h2 className="text-4xl font-bold text-[#1a1a4e]">
              Why Choose Maruti Group?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A well-engineered, high-quality product is not complete without
              proper and safe execution. We are here for that. We provide
              innovative solutions for the timely execution of projects without
              compromising on quality and safety.
            </p>
            <div className="flex justify-start">
              <button className="bg-primary text-white py-3 px-6 rounded-full hover:bg-primary/90 transition-colors duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}