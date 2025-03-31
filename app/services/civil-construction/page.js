"use client";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function CivilConstruction() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar bgColor="bg-[#1B1B2F]" />

      {/* Hero Section */}
      <section className="relative w-full  mt-40">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
          alt="Civil Construction"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white text-center">Civil Construction</h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-6 py-16 text-gray-800 text-center">
        <h2 className="text-4xl font-semibold">Civil Construction Services</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We provide comprehensive civil construction services, including industrial structures,
          building projects, and road construction. Our expertise ensures quality, safety, and efficiency.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2000&auto=format&fit=crop"
              alt="Structural Engineering"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Structural Engineering</h3>
            <p className="mt-2 text-gray-600">We design and construct durable, safe, and innovative structures.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Road & Bridge Construction"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Road & Bridge Construction</h3>
            <p className="mt-2 text-gray-600">High-quality roads and bridges with long-lasting infrastructure.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Project Management"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Project Management</h3>
            <p className="mt-2 text-gray-600">Efficient planning, execution, and delivery of projects on time.</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-6 max-w-3xl mx-auto">
            <details className="p-4 bg-white rounded-lg shadow cursor-pointer">
              <summary className="font-semibold">What materials do you use?</summary>
              <p className="mt-2 text-gray-600">We use high-quality concrete, steel, and sustainable materials.</p>
            </details>
            <details className="p-4 bg-white rounded-lg shadow cursor-pointer">
              <summary className="font-semibold">How long do projects take?</summary>
              <p className="mt-2 text-gray-600">Project timelines vary, but we ensure timely and efficient completion.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold">Ready to Start Your Project?</h2>
        <p className="mt-4 text-lg">Contact us today to discuss your civil construction needs.</p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100">
          Get in Touch
        </button>
      </section>

      <Footer />
    </main>
  );
}
