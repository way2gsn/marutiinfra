"use client";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuestionCircle, FaTruck, FaTools, FaCogs } from "react-icons/fa";

export default function EquipmentSupply() {
  const equipmentList = [
    "Excavator", "Hydra", "Ajax", "Hyva", "Backhoe Loader",
    "Transit Mixer", "RMC 20cum/hr", "Concrete Pump",
    "Tanker", "Roller", "Vibrator",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-gray-50 relative overflow-hidden ">
      {/* Background SVG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23a8dadc' fill-opacity='0.2' d='M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,170.7C672,171,768,117,864,106.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,576,320,480,320,384,320,288,320,192,320,96,320,48,320,0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      />
      <Navbar bgColor="bg-[#1B1B2F]" />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] mt-40">
        <Image
          src="https://images.unsplash.com/photo-1616400619173-0d4c06b91f9b?q=80&w=2000&auto=format&fit=crop"
          alt="Equipment Supply"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-6 py-16 text-gray-800 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Reliable Equipment Supply Services
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We provide top-tier industrial and construction equipment, ensuring efficiency, durability, and timely delivery for all your project needs.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-16 mb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <motion.div variants={itemVariants} className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="https://wordpress.bricknbolt.com/blogs-and-articles/wp-content/uploads/sites/2/2024/08/Building-Construction-Equipment.webp"
              alt="Construction Equipment"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-900 flex items-center justify-center"><FaTools className="mr-2"/>Construction Equipment</h3>
            <p className="mt-2 text-gray-600">High-performance machinery for construction and infrastructure projects.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/055/098/309/non_2x/gears-rotating-in-industrial-machinery-manufacturing-process-photo.jpg"
              alt="Industrial Machinery"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-900 flex items-center justify-center"><FaCogs className="mr-2"/>Industrial Machinery</h3>
            <p className="mt-2 text-gray-600">Advanced tools for manufacturing and production industries.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="https://martak.com/wp-content/uploads/2021/09/custom-solutions.webp"
              alt="Customized Equipment"
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-900 flex items-center justify-center"><FaTruck className="mr-2"/>Customized Equipment</h3>
            <p className="mt-2 text-gray-600">Tailored solutions to meet your unique project requirements.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Available Equipment Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          {/* <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 my-20">
            Available Equipment
          </h2> */}
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Explore our wide range of equipment designed to power your projects.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {equipmentList.map((equipment, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center"
              >
                <span className="text-lg font-medium text-gray-800">{equipment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-6 max-w-3xl mx-auto">
            <details className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors">
              <summary className="font-semibold text-gray-900 flex items-center"><FaQuestionCircle className="mr-2"/>What types of equipment do you supply?</summary>
              <p className="mt-2 text-gray-600">We provide construction, industrial, and customized equipment solutions.</p>
            </details>
            <details className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors">
              <summary className="font-semibold text-gray-900 flex items-center"><FaQuestionCircle className="mr-2"/>Do you offer rental services?</summary>
              <p className="mt-2 text-gray-600">Yes, we offer both sales and rental options for various equipment types.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-gray-200 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Need High-Quality Equipment for Your Project?
        </h2>
        <p className="mt-4 text-lg md:text-xl">Contact us for reliable equipment supply solutions tailored to your needs.</p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
          Contact Us
        </button>
      </section>

      <Footer />
    </main>
  );
}