"use client";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function TransportHandling() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar bgColor="bg-[#1B1B2F]" />

      {/* Hero Section */}
      <section className="relative w-full mt-40">
        <Image
          src="https://images.unsplash.com/photo-1616400619173-0d4c06b91f9b?q=80&w=2000&auto=format&fit=crop"
          alt="Transport & Handling"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white text-center">Transport & Handling</h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-6 py-16 text-gray-800 text-center">
        <h2 className="text-4xl font-semibold">Efficient Transport & Handling Services</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We specialize in the secure and timely transportation of goods, ensuring efficient logistics and handling solutions for various industries.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://www.shutterstock.com/image-photo/aerial-view-large-loaded-container-600nw-2192678849.jpg"
              alt="Heavy Cargo Transport"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Heavy Cargo Transport</h3>
            <p className="mt-2 text-gray-600">Safe and efficient transportation of heavy and oversized loads.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://t3.ftcdn.net/jpg/02/47/00/94/360_F_247009476_bWnpHdluSWd9j2fOHW0vxZk2teSmcFn4.jpg"
              alt="Warehousing & Storage"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Warehousing & Storage</h3>
            <p className="mt-2 text-gray-600">Secure storage facilities to manage your logistics needs.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://amertranslogistics.com/wp-content/uploads/2021/07/custom-logistics.jpg"
              alt="Customized Logistics"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Customized Logistics</h3>
            <p className="mt-2 text-gray-600">Tailored transport solutions for specialized project requirements.</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-6 max-w-3xl mx-auto">
            <details className="p-4 bg-white rounded-lg shadow cursor-pointer">
              <summary className="font-semibold">What types of goods do you transport?</summary>
              <p className="mt-2 text-gray-600">We handle all kinds of shipments, from fragile items to heavy machinery.</p>
            </details>
            <details className="p-4 bg-white rounded-lg shadow cursor-pointer">
              <summary className="font-semibold">Do you offer real-time tracking?</summary>
              <p className="mt-2 text-gray-600">Yes, our tracking system ensures you have full visibility of your shipment.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold">Need Reliable Transport & Handling?</h2>
        <p className="mt-4 text-lg">Contact us today for secure and efficient logistics solutions.</p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100">
          Contact Us
        </button>
      </section>

      <Footer />
    </main>
  );
}
