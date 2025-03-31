"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

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
              About Maruti Groupstructure
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are M/s. Maruti Group STRUCTURE, a registered partnership firm
              under the Registrar of Firms, Indian Partnership Act, 1932. Based in
              Baloda Bazar, Chhattisgarh, we specialize in Civil Construction,
              Mechanical Fabrication and Erection work, Transporting, Handling, and
              Liaisoning.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Under the leadership of Mr. Ashish Natthani, we bring extensive
              experience and knowledge in construction, transportation, and supply.
              Our vision is to be the most reliable, trusted, and preferred resource
              partner in the construction and material supply chain, providing
              cost-effective solutions to our customers.
            </p>
            <a
              href="/contact" // Replace with your actual contact page link
              className="bg-primary text-white py-3 px-6 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Core Values Section */}
        <div ref={valuesRef} className="mb-16">
          <h2 className="text-2xl font-bold text-[#1a1a4e] mb-6 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl border border-gray-200 text-center">
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">
                We are committed to delivering on our promises and being a trusted
                partner.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-200 text-center">
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with the highest ethical standards.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-200 text-center">
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                We prioritize our customers' needs and strive for their satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div ref={teamRef} className="mb-16">
          <h2 className="text-2xl font-bold text-[#1a1a4e] mb-6 text-center">
            Meet Our Team
          </h2>
          <div className="flex  justify-center items-space space-x-40">
            <Link href={"ashish"}>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" // Replace with actual image
                  alt="Ashish Natthani"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Ashish Natthani</h3>
              <p className="text-gray-600">Co-founder</p>
            </div>
            </Link>   
            {/* Add more team members as needed */}
            <Link href={"adesh"}>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" // Replace with actual image
                  alt="Team Member 2"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Adesh</h3>
              <p className="text-gray-600">Co-Founder</p>
            </div>
</Link>
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1a1a4e] mb-6">
            Our Commitment
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Maruti Groupstructure, we are dedicated to providing high-quality
            construction and material supply services. We strive to build lasting
            relationships with our clients through trust, reliability, and
            exceptional service.
          </p>
        </div>
      </div>
    </section>
          <Footer />
        </main>

  );
}