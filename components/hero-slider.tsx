"use client"
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import Link from "next/link";

const slides = [
  {
    title: "Maruti Infrastructure",
    subtitle:
      "A well-engineered, high-quality product is not complete without proper and safe execution. We are here for that.",
    image: "images/construction1.jpg",
  },
  {
    title: "Excellence in Construction",
    subtitle: "11 years of experience in delivering quality construction projects across PAN India.",
    image: "images/construction2.jpg",
  },
  {
    title: "Pan India Reach",
    subtitle: "Serving clients across 3 states with dedication and commitment to quality.",
    image: "images/construction3.jpg",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    gsap.fromTo(".slide-text", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo(".slide-bg", { scale: 1.1 }, { scale: 1, duration: 2, ease: "power2.out" });
  }, [currentSlide]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="relative w-full h-full flex transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full flex items-center justify-center bg-cover bg-center slide-bg"
               style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})` }}>
            <div className="container mx-auto px-4 text-center text-white slide-text">
              <h2 className="text-2xl">{slide.title}</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{slide.subtitle}</h1>
              <Link href={"/about"}>
              <Button   className="bg-primary hover:bg-primary/90 border-white rounded-none px-8 mt-4">
                KNOW MORE →
              </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
        <Button onClick={prevSlide} className="bg-black/50 hover:bg-black/70 text-white border-white rounded-full">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button onClick={nextSlide} className="bg-black/50 hover:bg-black/70 text-white border-white rounded-full">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
