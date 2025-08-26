"use client";
import { motion } from "framer-motion";
import { FaThreads } from "react-icons/fa6";
import {
  ArrowUpRight,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Code,
  Heart,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "Web Development" },
      { name: "Mobile Apps" },
      { name: "UI/UX Design" },
      { name: "Consulting" },
    ],
    Company: [{ name: "Contact", href: "/contact" }],
    // Resources: [
    //   { name: "Blog", href: "/blog" },
    //   { name: "Documentation", href: "/docs" },
    //   { name: "Case Studies", href: "/cases" },
    //   { name: "Support", href: "/support" },
    // ],
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/devultrasolutions?igsh=Nm1yNDh5b3d4c3k4",
    },
    {
      name: "Threads",
      icon: FaThreads,
      href: "https://www.threads.com/@devultrasolutions",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/devultrasolutions/",
    },
    {
      name: "Email",
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=Devultrasolutions@gmail.com",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="max-w-7xl mx-auto px-6 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3">
                <div className="relative overflow-hidden rounded-xl p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
                  <Image
                    src="/DevUltra_Logo.png"
                    alt="DevUltra Logo"
                    height={40}
                    width={56}
                    className="filter drop-shadow-lg"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  DevUltra
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed max-w-sm">
                Transforming ideas into extraordinary digital experiences with
                cutting-edge development solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group cursor-pointer">
                  <MapPin className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm">Lahore, Pakistan</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group cursor-pointer">
                  <Phone className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm">+92 333 8240907</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group cursor-pointer">
                  <Mail className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                  <span className="text-sm">Devultrasolutions@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <motion.div
                key={title}
                className="space-y-6"
                variants={itemVariants}
              >
                <h3 className="text-white font-semibold text-lg relative">
                  {title}
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </h3>

                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      {title != "Services" ? (
                        <a
                          href={link.href}
                          className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                        >
                          <span className="text-sm">{link.name}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ) : (
                        <div className="group flex items-center gap-2 text-gray-400">
                          <span className="text-sm">{link.name}</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-gray-800/50 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6"
            variants={itemVariants}
          >
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} DevUltra. All rights reserved.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 hover:border-gray-600 rounded-xl transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 text-sm font-medium"
            >
              <ArrowUpRight className="w-4 h-4 rotate-[-90deg]" />
              Back to top
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
