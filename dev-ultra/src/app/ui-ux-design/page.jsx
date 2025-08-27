"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Palette,
  Users,
  Smartphone,
  Star,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

// Animated Design Elements Background
const AnimatedDesignBackground = () => {
  const designElements = [
    { type: "circle", size: 20, x: 15, y: 25, color: "pink" },
    { type: "square", size: 16, x: 75, y: 35, color: "purple" },
    { type: "triangle", size: 18, x: 25, y: 70, color: "orange" },
    { type: "circle", size: 14, x: 85, y: 20, color: "pink" },
    { type: "square", size: 22, x: 10, y: 80, color: "purple" },
    { type: "triangle", size: 16, x: 70, y: 75, color: "orange" },
  ];

  const colorVariants = {
    pink: "bg-pink-500/20 border-pink-500/30",
    purple: "bg-purple-500/20 border-purple-500/30",
    orange: "bg-orange-500/20 border-orange-500/30",
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {designElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute border-2 ${colorVariants[element.color]}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            borderRadius:
              element.type === "circle"
                ? "50%"
                : element.type === "triangle"
                ? "0 0 50% 50%"
                : "8px",
            transform: element.type === "triangle" ? "rotate(45deg)" : "none",
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + index,
            delay: index * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating design tools */}
      {["🎨", "✏️", "📐", "🖱️"].map((tool, i) => (
        <motion.div
          key={`tool-${i}`}
          className="absolute text-2xl opacity-20"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5 + i,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {tool}
        </motion.div>
      ))}

      {/* Bezier curves */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {[...Array(4)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${50 + i * 100},${100 + i * 50} Q${150 + i * 80},${
              50 + i * 30
            } ${250 + i * 60},${120 + i * 40}`}
            stroke={i % 2 === 0 ? "#ec4899" : "#f97316"}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 6,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default function UIUXDesign() {
  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Design",
      description: "Stunning visuals that captivate and engage users",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centered",
      description: "Research-driven designs focused on user experience",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Seamless experience across all devices and platforms",
    },
  ];

  const services = [
    "UI/UX Consultation",
    "User Research & Testing",
    "Wireframing & Prototyping",
    "Visual Design Systems",
    "Mobile App Design",
    "Web Interface Design",
    "Brand Identity Design",
    "Design System Creation",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <AnimatedDesignBackground />

        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-orange-500 bg-clip-text text-transparent py-5">
              UI/UX Design
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Creating intuitive, beautiful, and user-centered designs that
              drive engagement and conversions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact" passHref>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-pink-500 to-orange-600 hover:from-pink-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-full flex items-center gap-3 transition-all duration-300 shadow-lg"
              >
                Start Design Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent py-5">
              Design Philosophy
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We believe great design is invisible - it just works. Our designs
              combine beauty with functionality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-600 rounded-2xl p-8 text-center transition-all duration-500"
              >
                <div className="bg-gradient-to-br from-pink-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-pink-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent py-5">
              Design Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive design solutions from concept to final
              implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-gray-900/30 border border-gray-800 hover:border-gray-600 rounded-xl transition-all duration-300 hover:bg-gray-900/50"
              >
                <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent py-5">
              Ready to Transform Your Design?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Let's create beautiful, functional designs that your users will
              love
            </p>

            <Link href="/contact" passHref>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(236, 72, 153, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-pink-500 to-orange-600 hover:from-pink-600 hover:to-orange-700 text-white font-semibold py-6 px-12 rounded-full flex items-center gap-3 mx-auto transition-all duration-300 shadow-xl"
              >
                Start Design Project
                <Star className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
