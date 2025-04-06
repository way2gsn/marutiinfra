// pages/careers.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Navbar } from "@/components/navbar";
import { FaUserTie, FaHardHat, FaDraftingCompass, FaUsers, FaFileInvoiceDollar, FaCogs, FaWrench,  FaBurn, FaCut, FaPaintRoller, FaTruckLoading, FaUser, FaCalculator, FaBoxOpen } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const jobOpenings = [
  { title: "Project Managers (Civil & Mechanical)", icon: FaUserTie },
  { title: "Site Incharge", icon: FaHardHat },
  { title: "Site Engineers (Civil & Mechanical)", icon: FaDraftingCompass },
  { title: "Site Supervisors (Civil & Mechanical)", icon: FaUsers },
  { title: "Billing & Planning Engineer", icon: FaFileInvoiceDollar },
  { title: "Foreman (Civil & Mechanical)", icon: FaHardHat },
  { title: "Millwright Fitter", icon: FaCogs },
  { title: "Fabricators", icon: FaWrench },
  { title: "Welders", icon: FaBurn },
  { title: "Gas Cutters", icon: FaCut },
  { title: "Grinders", icon: FaPaintRoller },
  { title: "Riggers", icon: FaTruckLoading },
  { title: "Site Admin Officers", icon: FaUser },
  { title: "Site Accountants", icon: FaCalculator },
  { title: "Store Keepers", icon: FaBoxOpen },
];

export default function CareersPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const jobsContainer = jobsRef.current;

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

      if (jobsContainer) {
        gsap.fromTo(
          jobsContainer.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: jobsContainer,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      gsap.context(() => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }, sectionRef);
    };
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background SVG - Abstract Mountain Waves */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='%23a8dadc' fill-opacity='0.8' d='M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,170.7C672,171,768,117,864,106.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,576,320,480,320,384,320,288,320,192,320,96,320,48,320,0,320Z'></path></svg>")`,
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

      {/* Diagonal Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%)",
          zIndex: -1,
        }}
      />

      <Navbar bgColor="bg-[#1B1B2F]" />
      <section ref={sectionRef} className="py-20 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a1a4e] mb-8 text-center">
            Careers
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10 text-center">
            Join our team and be a part of building exceptional projects. We are
            currently seeking talented and motivated individuals for the
            following positions to support our expansion and upcoming ventures.
          </p>

          <div ref={jobsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-primary text-2xl mr-3">
                    <job.icon />
                  </span>
                  <h3 className="text-xl font-semibold text-[#1a1a4e]">
                    {job.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We are looking for dedicated professionals to fill this role.
                  Click below to learn more and apply.
                </p>
                <div className="mt-4">
                  <a
                    href="/contact" // Replace with actual application link
                    className="inline-block bg-primary text-white py-2 px-4 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 text-sm"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 leading-relaxed">
              Don't see a role that fits your experience? We are always growing.
            </p>
            <a
              href="/contact"
              className="inline-block mt-4 bg-gray-300 text-gray-700 py-3 px-6 rounded-full font-semibold hover:bg-gray-400 transition-colors duration-300"
            >
              Contact Us for Future Opportunities
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}