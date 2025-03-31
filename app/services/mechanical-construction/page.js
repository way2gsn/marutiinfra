"use client";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function MechanicalFabrication() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar bgColor="bg-[#1B1B2F]" />

      {/* Hero Section */}
      <section className="relative w-full mt-40">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
          alt="Mechanical Fabrication and Erection"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white text-center">Mechanical Fabrication & Erection</h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-6 py-16 text-gray-800 text-center">
        <h2 className="text-4xl font-semibold">Mechanical Fabrication & Erection Services</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We specialize in mechanical fabrication and erection, ensuring precision, durability, 
          and efficiency in industrial projects with top-quality materials and expert craftsmanship.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://plus.unsplash.com/premium_photo-1682141539071-b1d12083025d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Steel Fabrication"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Steel Fabrication</h3>
            <p className="mt-2 text-gray-600">Precision steel fabrication for industrial and commercial applications.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1531708366981-aa022a4e34ef?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pipe & Structural Erection"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Pipe & Structural Erection</h3>
            <p className="mt-2 text-gray-600">Safe and efficient erection of industrial piping and structural components.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
              alt="Heavy Equipment Installation"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Heavy Equipment Installation</h3>
            <p className="mt-2 text-gray-600">Expert handling and installation of industrial machinery.</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-6 max-w-3xl mx-auto">
            <details className="p-4 bg-white rounded-lg shadow cursor-pointer">
              <summary className="font-semibold">What industries do you serve?</summary>
              <p className="mt-2 text-gray-600">We serve manufacturing, construction, oil & gas, and power sectors.</p>
            </details>
            <details className="p-4 bg-white rounded-lg shadow cursor-pointer">
              <summary className="font-semibold">Do you handle custom fabrication?</summary>
              <p className="mt-2 text-gray-600">Yes, we provide tailor-made fabrication solutions based on client specifications.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold">Need Expert Fabrication & Erection Services?</h2>
        <p className="mt-4 text-lg">Reach out to us today for customized solutions to fit your needs.</p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100">
          Contact Us
        </button>
      </section>

      <Footer />
    </main>
  );
}