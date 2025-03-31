"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCheckCircle, FaCity, FaRoad, FaIndustry } from "react-icons/fa";

const serviceAreas = [
  {
    state: "Chhattisgarh",
    cities: ["Raipur", "Baloda Bazar", "Durg"],
    icon: <FaCity size={32} />,
    status: "Serving",
    description: "Active projects in major cities.",
    image: "https://cdn.pixabay.com/photo/2018/07/02/09/08/boat-3511183_1280.jpg" // Replace with actual image path
  },
  {
    state: "Gujarat",
    cities: ["Ambuja Nagar", "Nuvoco"],
    icon: <FaIndustry size={32} />,
    status: "Served",
    description: "Completed projects in industrial areas.",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/12/BE/EL/WC/18811883/gujrat-tour-package-500x500.jpg" // Replace with actual image path
  },
  {
    state: "Maharashtra",
    cities: ["Mumbai", "Pune"],
    icon: <FaRoad size={32} />,
    status: "Planned",
    description: "Upcoming road and infrastructure projects.",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-gateway-of-india-state-hero?qlt=82&ts=1726670249199" // Replace with actual image path
  },
  // {
  //   state: "Odisha",
  //   cities: ["Bhubaneswar", "Cuttack"],
  //   icon: <FaMapMarkerAlt size={32} />,
  //   status: "Serving",
  //   description: "Ongoing construction and development.",
  //   image: "/odisha.jpg" // Replace with actual image path
  // },
  // Add more states as needed
];

const ServiceAreasSection = () => {
  const [hoveredArea, setHoveredArea] = useState(null);

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1a1a4e] mb-8 text-center">
          Our Service Areas
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 justify-center" // Modified for centering
        >
          {serviceAreas.map((area, index:any) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-2xl p-6 shadow-md transition-transform duration-300 ${
                hoveredArea === index ? "transform scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredArea(index)}
              onMouseLeave={() => setHoveredArea(null)}
            >
                <div className="relative h-48 w-full overflow-hidden rounded-t-2xl mb-4">
                    <img
                        src={area.image}
                        alt={area.state}
                        className="object-cover w-full h-full"
                    />
                </div>
              <div className="flex items-center mb-4">
                <span className="mr-4 text-primary">{area.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold">{area.state}</h3>
                  <p className="text-sm text-gray-500">{area.status} {area.status === "Serving" && <FaCheckCircle className="inline ml-1 text-green-500" />}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <div>
                <h4 className="font-semibold text-sm">Cities:</h4>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {area.cities.map((city, cityIndex) => (
                    <li key={cityIndex}>{city}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;