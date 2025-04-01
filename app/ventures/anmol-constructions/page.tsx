"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { FaHome, FaTools, FaCity } from "react-icons/fa";

const AnmolConstructionsPage: React.FC = () => {
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
        className="py-20 from-gray-100 to-white relative overflow-hidden my-40"
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
            Anmol Constructions
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-12">
            <img
              src="https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Anmol Constructions Overview"
              className="rounded-2xl w-full h-96 object-cover"
            />
          </motion.div>

          <section className="space-y-8">
            <motion.div variants={itemVariants} className="p-6">
              <div className="flex items-center mb-4">
                <FaHome className="text-orange-500 mr-4 text-3xl" />
                <h2 className="text-2xl font-semibold">About Us</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Anmol Constructions is a leading construction company dedicated to building quality structures that stand the test of time. We specialize in creating spaces that are not only functional but also aesthetically pleasing, catering to a diverse range of client needs.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our team comprises experienced architects, engineers, and construction professionals who are committed to delivering excellence in every project. We prioritize client satisfaction and work closely with our clients to ensure their vision is realized.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6">
              <div className="flex items-center mb-4">
                <FaTools className="text-blue-500 mr-4 text-3xl" />
                <h2 className="text-2xl font-semibold">Our Services</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We offer a wide array of construction services, including residential and commercial building, renovation, and infrastructure development. Our services are tailored to meet the specific requirements of each project, ensuring quality and efficiency.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                From initial planning and design to final construction and finishing, we provide end-to-end solutions. Our commitment to using high-quality materials and employing advanced construction techniques sets us apart.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6">
              <div className="flex items-center mb-4">
                <FaCity className="text-green-500 mr-4 text-3xl" />
                <h2 className="text-2xl font-semibold">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to be recognized as a premier construction company that contributes significantly to the development of modern and sustainable communities. We aim to build not just structures, but also lasting relationships with our clients.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                We are dedicated to innovation and continuous improvement, striving to adopt the latest technologies and best practices in the construction industry. Our goal is to create spaces that enhance the quality of life and contribute to the growth of our society.
              </p>
            </motion.div>
          </section>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default AnmolConstructionsPage;