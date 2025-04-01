// onmia-enterprises.tsx
"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { FaBuilding, FaTools, FaChartLine } from "react-icons/fa";

const OnmiaEnterprisesPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
   <Navbar bgColor="bg-[#1B1B2F]" />
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-20  from-gray-100 to-white relative overflow-hidden my-40"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='#e0f2fe' fill-opacity='0.5' d='M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,170.7C672,171,768,117,864,106.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,576,320,480,320,384,320,288,320,192,320,96,320,48,320,0,320Z'></path></svg>")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-[#1a1a4e] mb-8 text-center"
        >
          Onmia Enterprises
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Onmia Enterprises Overview"
            className="rounded-2xl w-full h-96 object-cover"
          />
        </motion.div>

        <section className="space-y-8">
          <motion.div variants={itemVariants} className="p-6">
            <div className="flex items-center mb-4">
              <FaBuilding className="text-orange-500 mr-4 text-3xl" />
              <h2 className="text-2xl font-semibold">About Us</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Onmia Enterprises stands at the forefront of innovation, driving progress through strategic solutions and cutting-edge technologies. We are dedicated to empowering our clients with the tools and insights necessary to navigate the complexities of the modern business landscape.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our commitment to excellence is reflected in our tailored approach, ensuring each client receives personalized attention and solutions that align with their unique objectives. We believe in fostering long-term partnerships built on trust, transparency, and mutual success.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6">
            <div className="flex items-center mb-4">
              <FaTools className="text-blue-500 mr-4 text-3xl" />
              <h2 className="text-2xl font-semibold">Our Services</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We offer a comprehensive suite of services designed to address the evolving needs of our clients. From strategic planning and project management to technological integration and market analysis, our expertise spans across multiple domains.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our team of seasoned professionals brings a wealth of experience and knowledge, ensuring that every project is executed with precision and efficiency. We leverage the latest tools and methodologies to deliver results that exceed expectations.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6">
            <div className="flex items-center mb-4">
              <FaChartLine className="text-green-500 mr-4 text-3xl" />
              <h2 className="text-2xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to be a catalyst for positive change, driving progress through innovation and sustainable practices. We aspire to build a future where businesses thrive in harmony with their communities and the environment.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We are committed to fostering a culture of continuous improvement, where creativity and collaboration are valued. By embracing new ideas and technologies, we aim to set new standards of excellence and inspire others to join us in shaping a better tomorrow.
            </p>
          </motion.div>
        </section>
      </div>
    </motion.div>
    <Footer />
    </>
  );
};

export default OnmiaEnterprisesPage;