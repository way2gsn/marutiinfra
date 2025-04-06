"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const serviceAreas = [
  // New Entries
  {
    state: "Karnataka",
    locations: ["Sedam", "Korla"],
    status: "Serving",
    description: "Ongoing projects in Sedam and Korla.",
    image: "/images/karnatka.jpg", // Replace with a relevant Karnataka image
  },
  {
    state: "Chhattisgarh",
    locations: ["Tilda", "Baloda Bazaar"],
    status: "Serving",
    description: "Continuing our work in Tilda and Baloda Bazaar.",
    image: "/images/CG.png", // Replace with a relevant Chhattisgarh image
  },
  {
    state: "Telangana",
    locations: ["Hyderabad", "Warangal"],
    status: "Serving soon",
    description: "Will Work in Hyderabad.",
    image: "/images/Hyderabad.png", // Replace with a relevant Chhattisgarh image
  },
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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1a1a4e] mb-12 text-center">
          Our Service Areas
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceAreas.map((area, index: any) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ${
                hoveredArea === index ? "transform scale-105 shadow-lg" : ""
              }`}
              onMouseEnter={() => setHoveredArea(index)}
              onMouseLeave={() => setHoveredArea(null)}
            >
              <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                <img
                  src={area.image}
                  alt={area.state}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{area.state}</h3>
                  <p className="text-sm">{area.locations.join(", ")}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="mr-2 text-primary">
                    <FaMapMarkerAlt size={16} />
                  </span>
                  <p className="text-sm text-gray-500">
                    Status: {area.status}
                    {area.status === "Serving" && (
                      <FaCheckCircle className="inline ml-1 text-green-500" />
                    )}
                  </p>
                </div>
                <p className="text-gray-700 mb-4 text-sm">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;