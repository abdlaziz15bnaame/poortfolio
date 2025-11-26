// components/Portfolio.jsx
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      image: "/images/project-1.png",
      url: "https://e-book-dusky.vercel.app",
      title: " E-Book Store",
    },
    {
      image: "/images/project-8.png",
      url: "https://deluxe-basket.vercel.app/",
      title: "Deluxe-Basket",
    },
    {
      image: "/images/project-2.png",
      url: "https://proje-de-cofe.vercel.app/",
      title: " Coffee Shop",
    },
    
    {
      image: "/images/project-4.png",
      url: " https://design-studio-black.vercel.app/",
      title: "Design-Studio",
    },
    {
      image: "/images/project-5.png",
      url: " https://product-catalog-peach.vercel.app/ ",
      title: " Product Catalog",
    },
    {
      image: "/images/project-6.png",
      url: "https://sfxhpnlx-3000.uks1.devtunnels.ms/",
      title: "My recepis",
    },
    {
      image: "/images/project-7.png",
      url: "https://sfxhpnlx-3000.uks1.devtunnels.ms/",
      title: "Foodapp",
    },
{
      image: "/images/project-3.png",
      url: " https://website-restaurante-three.vercel.app/",
      title: " Restaurant Website",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative bg-[#0a192f] py-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-400/10 blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            My <span className="text-yellow-400">Work</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Project image */}
              <div className="relative overflow-hidden rounded-xl aspect-video border-2 border-gray-800 group-hover:border-yellow-400 transition-all duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0a192f] opacity-0 group-hover:opacity-90 transition duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-center p-6"
                  >
                    <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                      {project.title}
                    </h3>
                    <Link
                      href={project.url}
                      target="_blank"
                      className="inline-block px-6 py-2 border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-[#0a192f] transition duration-300"
                    >
                      View Project
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Floating title (visible on mobile) */}
              <div className="mt-4 md:hidden">
                <h3 className="text-xl font-bold text-gray-100">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 relative z-30"
        >
          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-yellow-400 text-[#0a192f] font-bold rounded-lg hover:bg-yellow-300 transition duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/20"
          >
            Want Similar Results?
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
