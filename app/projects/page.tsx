// pages/projects.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FaCheckCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projectCategories = [
  {
    name: "Cement",
    projects: [
      {
        title: "Emami Cement Ltd",
        location: "Risda, Chhattisgarh",
        status: "Completed",
        logo:"/images/emami.svg", // Replace with actual URL if needed
      },
      {
        title: "SCL SRCP Line 3",
        location: "Khapradih, Chhattisgarh",
        status: "Completed",
        logo: "/images/shree.png" , // Replace with actual URL if needed
      },
      {
        title: "SCL Line II Kodla",
        location: "Karnataka",
        status: "Ongoing",
        logo: "/images/shree.png" , // Replace with actual URL if needed
      },
      {
        title: "Ambuja Cement Limited Line 3 Rawan",
        location: "Chhattisgarh",
        status: "Completed",
        logo:"/images/ambuja.png" // Replace with actual URL if needed
      },
      {
        title: "SCL SRCP GU II",
        location: "Khapradih, Baloda Bazar, Chhattisgarh",
        status: "Ongoing",
        logo: "/images/shree.png" , // Replace with actual URL if needed
      },
      {
        title: "SCL SRCP Township",
        location: "Bharuwadih, Baloda Bazar, Chhattisgarh",
        status: "Completed",
        logo: "/images/shree.png" , // Replace with actual URL if needed
      },
    ],
  },
  {
    name: "Steel",
    projects: [
      {
        title: "Real Ispat And Energy (GK TMT) 650TPD Dri Project",
        location: "Bhatapara (Baloda Bazar), Chhattisgarh",
        status: "Ongoing",
        logo: "/images/REAL.png", // Replace with actual URL if needed
      },
      {
        title: "Sambhv Steel Tubes Ltd",
        location: "Sarora – Tilda, Chhattisgarh",
        status: "Completed",
        logo: "/images/sambhav.webp", // Replace with actual URL if needed
      },
    ],
  },
];

const statusColors = {
  Completed: "text-green-500",
  Ongoing: "text-blue-500",
};

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
          stagger: 0.3,
          duration: 1,
          ease: "power2.out",
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
      {/* Background SVG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='%23a8dadc' fill-opacity='0.8' d='M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,170.7C672,171,768,117,864,106.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,576,320,480,320,384,320,288,320,192,320,96,320,48,320,0,320Z'></path></svg>")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      />

      <Navbar bgColor="bg-[#1B1B2F]" />
      <section className="py-20 mt-40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a1a4e] mb-8 text-center">
            Our Projects
          </h2>
          <div ref={containerRef} className="space-y-12">
            {projectCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold text-[#2c3e50] mb-6">
                  {category.name}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.projects.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className="bg-white rounded-lg shadow-md p-6 flex flex-col"
                    >
                      {project.logo && (
                        <div className="mb-4 h-10 relative w-32">
                          <Image
                            src={project.logo}
                            alt={`${project.title} Logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <h4 className="text-xl font-semibold text-[#34495e] mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Location: {project.location}
                      </p>
                      <div className="flex items-center text-sm">
                        Status:
                        <span className={`ml-1 font-semibold ${statusColors[project?.status]}`}>
                          {project.status === "Completed" && <FaCheckCircle className="inline-block mr-1" />}
                          {project.status}
                        </span>
                      </div>
                    </div>
                  ))}
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