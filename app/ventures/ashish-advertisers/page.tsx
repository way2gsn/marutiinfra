"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { FaBullhorn, FaLightbulb, FaEye, FaChartBar } from "react-icons/fa";

const AshishAdvertisersPage: React.FC = () => {
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
      <Navbar bgColor="bg-[#333]" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-20 bg-gradient-to-br from-blue-100 to-indigo-100 relative overflow-hidden my-40"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='#dbeafe' fill-opacity='0.6' d='M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,170.7C672,171,768,117,864,106.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,576,320,480,320,384,320,288,320,192,320,96,320,48,320,0,320Z'></path></svg>")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: -1,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-[#2e3192] mb-8 text-center"
          >
            Ashish Advertisers
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ashish Advertisers Overview"
              className="rounded-2xl w-full h-96 object-cover"
            />
          </motion.div>

          <section className="space-y-8">
            <motion.div variants={itemVariants} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaBullhorn className="text-red-500 mr-4 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-800">About Us</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Ashish Advertisers is a dynamic and results-driven advertising agency dedicated to helping businesses amplify their brand message and connect with their target audience effectively. We offer a comprehensive suite of advertising services tailored to meet the unique needs of each client.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Our experienced team of marketing strategists, creative designers, and media experts work collaboratively to develop innovative and impactful advertising campaigns that deliver measurable results. We believe in understanding our clients' goals and crafting strategies that drive growth and enhance brand visibility.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-yellow-500 mr-4 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-800">Our Services</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We provide a wide range of advertising services, including digital marketing, social media management, print advertising, outdoor advertising, and branding solutions. Our approach is data-driven, ensuring that every campaign is strategically planned and optimized for maximum impact.
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-4">
                <li>Digital Marketing (SEO, SEM, PPC)</li>
                <li>Social Media Marketing & Management</li>
                <li>Print Advertising (Newspapers, Magazines, Brochures)</li>
                <li>Outdoor Advertising (Billboards, Hoardings)</li>
                <li>Branding & Identity Development</li>
                <li>Content Creation & Marketing</li>
                <li>Media Planning & Buying</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaEye className="text-purple-500 mr-4 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to be the leading advertising agency recognized for its creativity, strategic thinking, and commitment to client success. We aim to empower businesses of all sizes to achieve their marketing objectives through innovative and effective advertising solutions.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                We are constantly evolving with the latest trends and technologies in the advertising industry to provide our clients with cutting-edge strategies that deliver a competitive edge. Our focus is on building long-term partnerships based on trust, transparency, and exceptional results.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaChartBar className="text-teal-500 mr-4 text-3xl" />
                <h2 className="text-2xl font-semibold text-gray-800">Our Approach</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                At Ashish Advertisers, we believe in a collaborative and client-centric approach. We start by understanding your business, your target audience, and your marketing goals. This in-depth understanding forms the foundation of our strategic recommendations and creative executions.
              </p>
              <ul className="list-decimal list-inside text-gray-700 leading-relaxed mt-4">
                <li>**Understand:** We listen to your needs and analyze your market.</li>
                <li>**Strategize:** We develop a tailored advertising strategy.</li>
                <li>**Create:** Our creative team brings your message to life.</li>
                <li>**Implement:** We execute your campaign across chosen channels.</li>
                <li>**Analyze:** We track performance and optimize for results.</li>
              </ul>
            </motion.div>
          </section>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default AshishAdvertisersPage;