"use client";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function MaterialSupply() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar bgColor="bg-[#1B1B2F]" />

      {/* Hero Section */}
      <section className="relative w-full  mt-40">
        <Image
          src="https://images.unsplash.com/photo-1616400619173-0d4c06b91f9b?q=80&w=2000&auto=format&fit=crop"
          alt="Material Supply"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white text-center">Material Supply</h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-6 py-16 text-gray-800 text-center">
        <h2 className="text-4xl font-semibold">Reliable Material Supply Services</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We provide high-quality raw materials for various industries, ensuring efficiency, reliability, and timely delivery for your projects.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1580810734915-93a368ed2073?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Construction Materials"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Construction Materials</h3>
            <p className="mt-2 text-gray-600">Top-quality cement, steel, bricks, and aggregates for construction needs.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1469289759076-d1484757abc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Industrial Supplies"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Industrial Supplies</h3>
            <p className="mt-2 text-gray-600">Essential raw materials for manufacturing and industrial operations.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Customized Orders"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Customized Orders</h3>
            <p className="mt-2 text-gray-600">Tailored solutions to meet specific project requirements.</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-6 max-w-3xl mx-auto">
            <details className="p-4 bg-white rounded-lg shadow cursor-pointer">
              <summary className="font-semibold">What materials do you supply?</summary>
              <p className="mt-2 text-gray-600">We provide a wide range of construction, industrial, and customized materials.</p>
            </details>
            <details className="p-4 bg-white rounded-lg shadow cursor-pointer">
              <summary className="font-semibold">Do you offer bulk discounts?</summary>
              <p className="mt-2 text-gray-600">Yes, we provide competitive pricing for bulk orders.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold">Need Quality Materials for Your Project?</h2>
        <p className="mt-4 text-lg">Get in touch with us for reliable material supply solutions.</p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100">
          Contact Us
        </button>
      </section>

      <Footer />
    </main>
  );
}