// pages/gallery.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: "images/construction1.jpg",
    alt: "Construction Project 1",
  },
  {
    src: "images/construction2.jpg",
    alt: "Construction Project 2",
  },
  {
    src: "images/construction3.jpg",
    alt: "Construction Project 3",
  },
  {
    src: "images/construction4.jpg",
    alt: "Construction Project 4",
  },
  {
    src: "images/construction5.jpg",
    alt: "Construction Project 5",
  },
  {
    src: "images/construction6.jpg",
    alt: "Construction Project 6",
  },
  // Add more images as needed
];

export default function GalleryPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className="min-h-screen">
      <Navbar bgColor="bg-[#1B1B2F]" />
      <section ref={sectionRef} className="py-20 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a1a4e] mb-12 text-center">
            Our Gallery
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg relative cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                onClick={() => handleImageClick(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative">
            <img src={selectedImage} alt="Full View" className="max-w-full max-h-screen rounded-lg" />
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}