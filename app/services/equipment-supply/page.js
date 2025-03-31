"use client";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function EquipmentSupply() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar bgColor="bg-[#1B1B2F]" />

      {/* Hero Section */}
      <section className="relative w-full mt-40">
        <Image
          src="https://images.unsplash.com/photo-1616400619173-0d4c06b91f9b?q=80&w=2000&auto=format&fit=crop"
          alt="Equipment Supply"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white text-center">Equipment Supply</h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-6 py-16 text-gray-800 text-center">
        <h2 className="text-4xl font-semibold">Reliable Equipment Supply Services</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We provide high-quality industrial and construction equipment, ensuring efficiency, reliability, and timely delivery for your projects.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://wordpress.bricknbolt.com/blogs-and-articles/wp-content/uploads/sites/2/2024/08/Building-Construction-Equipment.webp"
              alt="Construction Equipment"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Construction Equipment</h3>
            <p className="mt-2 text-gray-600">High-performance machinery for construction and infrastructure projects.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/055/098/309/non_2x/gears-rotating-in-industrial-machinery-manufacturing-process-photo.jpg"
              alt="Industrial Machinery"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Industrial Machinery</h3>
            <p className="mt-2 text-gray-600">Advanced machinery for manufacturing and production industries.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://martak.com/wp-content/uploads/2021/09/custom-solutions.webp"
              alt="Customized Equipment"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Customized Equipment</h3>
            <p className="mt-2 text-gray-600">Tailored equipment solutions to meet specific project requirements.</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-6 max-w-3xl mx-auto">
            <details className="p-4 bg-white rounded-lg shadow cursor-pointer">
              <summary className="font-semibold">What types of equipment do you supply?</summary>
              <p className="mt-2 text-gray-600">We provide construction, industrial, and customized equipment solutions.</p>
            </details>
            <details className="p-4 bg-white rounded-lg shadow cursor-pointer">
              <summary className="font-semibold">Do you offer rental services?</summary>
              <p className="mt-2 text-gray-600">Yes, we offer both sales and rental options for various equipment types.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold">Need High-Quality Equipment for Your Project?</h2>
        <p className="mt-4 text-lg">Get in touch with us for reliable equipment supply solutions.</p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100">
          Contact Us
        </button>
      </section>

      <Footer />
    </main>
  );
}
