"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span
                className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(90deg, #ffffff 0%, #e5e5e5 50%, #9ca3af 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Building Digital Experiences That Matter
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Your goals deserve more than templates. We craft custom solutions designed to deliver real results.
            </p>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Devultrasolutions@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-6 px-12 rounded-full flex items-center gap-3 mx-auto transition-all duration-300 shadow-xl w-65"
            >
              Let's Collaborate
              <Star className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </motion.a>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
