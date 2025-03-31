"use client";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function LiaisoningAgency() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar bgColor="bg-[#1B1B2F]" />

      {/* Hero Section */}
      <section className="relative w-full mt-40">
        <Image
          src="https://images.unsplash.com/photo-1616400619173-0d4c06b91f9b?q=80&w=2000&auto=format&fit=crop"
          alt="Liaisoning Agency"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white text-center">Liaisoning Agency</h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-6 py-16 text-gray-800 text-center">
        <h2 className="text-4xl font-semibold">Expert Liaisoning Services</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          We facilitate smooth interactions between businesses and government authorities, ensuring compliance, approvals, and seamless operations.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://dfk1kem45npzu.cloudfront.net/media/articles/pop/approval-01.jpg"
              alt="Government Approvals"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Government Approvals</h3>
            <p className="mt-2 text-gray-600">Assistance with licenses, permits, and regulatory compliance.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://felixadvisory.com/wp-content/uploads/2021/10/iStock-1145941803-scaled-e1593097545837.jpg"
              alt="Corporate Compliance"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Corporate Compliance</h3>
            <p className="mt-2 text-gray-600">Expert guidance on legal and regulatory frameworks for businesses.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="https://darnelltechnical.com/wp-content/uploads/2023/06/project-manager-project-coordinator-FP-1-scaled.jpg"
              alt="Project Coordination"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">Project Coordination</h3>
            <p className="mt-2 text-gray-600">Seamless liaisoning for smooth project execution and approvals.</p>
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
              <p className="mt-2 text-gray-600">We assist businesses in construction, manufacturing, IT, and other sectors.</p>
            </details>
            <details className="p-4 bg-white rounded-lg shadow cursor-pointer">
              <summary className="font-semibold">How do you ensure regulatory compliance?</summary>
              <p className="mt-2 text-gray-600">Our experts work closely with authorities to secure necessary approvals.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold">Need Assistance with Government Approvals?</h2>
        <p className="mt-4 text-lg">Reach out to us for seamless liaisoning and compliance solutions.</p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100">
          Contact Us
        </button>
      </section>

      <Footer />
    </main>
  );
}
