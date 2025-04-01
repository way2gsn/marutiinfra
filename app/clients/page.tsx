"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = {
  CEMENT: [
    {
      name: "SHREE CEMENT LTD",
      logo: "https://www.shreecement.com/images/shree-logo.png",
    },
    {
      name: "AMBUJA CEMENTS LTD",
      logo: "https://www.ambujacement.com/images/default-source/default-album/ambuja-logo-new.png?sfvrsn=0",
    },
    {
      name: "ADANI CEMENT",
      logo: "https://www.adanigroup.com/-/media/Project/AdaniGroup/Images/Businesses/Cement/Adani-Cement-Logo.png?h=100&iar=0&w=260&hash=076295F121087F95A3945E7A0350485F",
    },
    {
      name: "LAFARGE CEMENT LTD",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Lafarge_logo.svg/2560px-Lafarge_logo.svg.png",
    },
    {
      name: "NUVOCO VISTAS",
      logo: "https://www.nuvoco.in/images/logo.svg",
    },
    {
      name: "EMAMI CEMENTS LTD",
      logo: "https://www.emamicement.in/wp-content/uploads/2023/04/logo_white.png",
    },
    {
      name: "MACMET ENGG PVT LTD",
      logo: "https://macmet.in/wp-content/uploads/2020/09/macmet-logo.png",
    },
    {
      name: "AYOKI FABRICON PVT LTD",
      logo: "https://ayokifabricon.com/wp-content/uploads/2021/04/logo-ayoki.png",
    },
  ],
  STEEL: [
    {
      name: "REAL ISPAT & ENERGY PVT LTD",
      logo: "https://realispat.com/wp-content/uploads/2021/03/Real-Ispat-logo-1.png",
    },
    {
      name: "SAMBHV SPONGE POWER PVT LTD",
      logo: "https://sambhavgroup.com/images/logo.png",
    },
    {
      name: "SAMBHV STEEL TUBES LTD",
      logo: "https://sambhavgroup.com/images/logo.png",
    },
  ],
  "MATERIAL HANDLINGS": [
    {
      name: "RAIPUR HANDLING & INFRASTRUCTURE pvt ltd",
      logo: "https://raipurhandling.in/wp-content/uploads/2020/12/logo-raipur-handling.png",
    },
  ],
};

const ClientsPage: React.FC = () => {
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
          Our Clients
        </h2>
        {Object.entries(clients).map(([category, clientList]) => (
          <motion.div
            key={category}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clientList.map((client) => (
                <motion.div
                  key={client.name}
                  variants={itemVariants}
                  className="flex items-center justify-center p-4 bg-white rounded-lg"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    width={150}
                    height={75}
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientsPage;