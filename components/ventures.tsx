"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaBuilding, FaSchool, FaHammer } from "react-icons/fa";

const ventures = [
  {
    name: "Onmia Enterprises",
    icon: <FaBuilding size={48} />,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "ventures/onmia-enterprises",
    target:null
  },
  {
    name: "Maruti Infrastructure",
    icon: <FaHammer size={48} />,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/about",
    target:null
  },
  {
    name: "Anmol Constructions",
    icon: <FaBuilding size={48} />,
    image: "https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "ventures/anmol-constructions",
     target:null
  },
  {
    name: "Adarsh Public School",
    icon: <FaSchool size={48} />,
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1224,h=520,fit=crop,trim=81.06872852233677;0;0;0/A1aQrqj98EHGbP93/gtku2-meP1DJnaDPFjRgZ3.jpg",
    link: "https://www.adarshpublicschool.in/",
    target:"_blank"
  },
];

const VenturesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23a8dadc' fill-opacity='0.2' d='M0,128L48,117.3C96,107,192,85,288,101.3C384,117,480,171,576,170.7C672,171,768,117,864,106.7C960,96,1056,128,1152,144C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,576,320,480,320,384,320,288,320,192,320,96,320,48,320,0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-[#1a1a4e] mb-12 text-center">
          Our Ventures
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="relative rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300"
            >
              <Link href={`${venture.link}`} target={venture.target ? venture.target :""}>
                <div className="relative h-64">
                  <img
                    src={venture.image}
                    alt={venture.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute top-4 left-4 text-orange-500">
                    {venture.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{venture.name}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VenturesSection;