"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiPrisma,
  SiPython,
  SiTypescript,
  SiGit,
} from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";

export default function AboutUs() {
  return (
    <div className="bg-black text-white min-h-screen w-full">
      <div className="text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            DevUltra
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-lg md:text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed"
        >
          At DevUltra, we're a team of dreamers and doers on a mission to turn
          bold ideas into meaningful digital experiences. As a growing startup,
          we combine creativity, technology, and fresh thinking to build
          solutions that inspire and engage. Every project we take on is a step
          toward innovation which is crafted with precision, fueled by passion,
          and driven by the belief that even the smallest idea can create a big
          impact.
        </motion.p>
      </div>

      <div className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            We Provide
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Frontend Development",
              desc: "We design modern, responsive, and engaging user interfaces using React.js, Next.js, TypeScript, and TailwindCSS to deliver seamless, fast, and accessible experiences.",
              img: "/frontend.jpeg",
            },
            {
              title: "Backend Development",
              desc: "We build secure, scalable, and high-performance backends with Node.js, Express.js, TypeScript, and PostgreSQL, powered by Prisma for efficient and reliable database management.",
              img: "/backend.jpeg",
            },
            {
              title: "Full-Stack Solutions",
              desc: "We deliver complete digital solutions by combining powerful frontend and backend technologies such as React, Next.js, Node.js, PostgreSQL, and Prisma to ensure performance, scalability, and future-ready products.",
              img: "/fullstack.jpg",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-blue-500 transition duration-300"
            >
              <div className="mb-6">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="rounded-xl w-full h-56 object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-gray-400 text-justify">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden py-20 bg-gradient-to-r from-gray-900 to-black">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technologies{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            We Work With
          </span>
        </h2>
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-16">
            {[
              {
                name: "HTML5",
                icon: <SiHtml5 className="text-orange-500 text-5xl" />,
              },
              {
                name: "CSS3",
                icon: <SiCss3 className="text-blue-500 text-5xl" />,
              },
              {
                name: "JavaScript",
                icon: <SiJavascript className="text-yellow-400 text-5xl" />,
              },
              {
                name: "React.js",
                icon: <SiReact className="text-cyan-400 text-5xl" />,
              },
              {
                name: "Next.js",
                icon: <SiNextdotjs className="text-white text-5xl" />,
              },
              {
                name: "Vue.js",
                icon: <SiVuedotjs className="text-green-500 text-5xl" />,
              },
              {
                name: "Express.js",
                icon: <SiExpress className="text-gray-300 text-5xl" />,
              },
              {
                name: "Node.js",
                icon: <SiNodedotjs className="text-green-500 text-5xl" />,
              },
              {
                name: "MongoDB",
                icon: <SiMongodb className="text-green-400 text-5xl" />,
              },
              {
                name: "Prisma",
                icon: <SiPrisma className="text-indigo-400 text-5xl" />,
              },
              {
                name: "PostgreSQL",
                icon: (
                  <Image
                    src="/postgres.svg"
                    alt="PostgreSQL"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ),
              },
              {
                name: "Python",
                icon: <SiPython className="text-yellow-300 text-5xl" />,
              },
              {
                name: "TypeScript",
                icon: <SiTypescript className="text-blue-400 text-5xl" />,
              },
              {
                name: "Git",
                icon: <SiGit className="text-red-500 text-5xl" />,
              },
            ]
              .concat([
                {
                  name: "HTML5",
                  icon: <SiHtml5 className="text-orange-500 text-5xl" />,
                },
                {
                  name: "CSS3",
                  icon: <SiCss3 className="text-blue-500 text-5xl" />,
                },
                {
                  name: "JavaScript",
                  icon: <SiJavascript className="text-yellow-400 text-5xl" />,
                },
                {
                  name: "React.js",
                  icon: <SiReact className="text-cyan-400 text-5xl" />,
                },
                {
                  name: "Next.js",
                  icon: <SiNextdotjs className="text-white text-5xl" />,
                },
                {
                  name: "Express.js",
                  icon: <SiExpress className="text-gray-300 text-5xl" />,
                },
                {
                  name: "Node.js",
                  icon: <SiNodedotjs className="text-green-500 text-5xl" />,
                },
                {
                  name: "MongoDB",
                  icon: <SiMongodb className="text-green-400 text-5xl" />,
                },
                {
                  name: "Prisma",
                  icon: <SiPrisma className="text-indigo-400 text-5xl" />,
                },
                {
                  name: "PostgreSQL",
                  icon: (
                    <Image
                      src="/postgres.svg"
                      alt="PostgreSQL"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  ),
                },
                {
                  name: "Python",
                  icon: <SiPython className="text-yellow-300 text-5xl" />,
                },
                {
                  name: "TypeScript",
                  icon: <SiTypescript className="text-blue-400 text-5xl" />,
                },
                {
                  name: "Git",
                  icon: <SiGit className="text-red-500 text-5xl" />,
                },
              ])
              .map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1 }}
                  className="flex flex-col items-center cursor-pointer transition min-w-[120px]"
                >
                  {tech.icon}
                  <span className="mt-2 text-gray-300 hover:text-blue-400 transition">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      <div className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl shadow-2xl p-10 text-center border border-gray-800 relative"
        >
          <FaQuoteLeft className="absolute top-6 left-6 text-3xl lg:text-5xl text-purple-500 opacity-40" />
          <h2 className="text-4xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed text-justify">
            Our mission at DevUltra is to go beyond conventional development and
            deliver technology-driven solutions that transform businesses. We
            believe in using innovation as the foundation for progress,
            combining strategy, creativity, and technical expertise to craft
            experiences that truly matter. We aim to empower brands by providing
            systems that are secure, scalable, and designed for long-term
            growth. At the heart of everything we do is the commitment to
            excellence and the desire to create solutions that not only meet
            today's needs but also anticipate the challenges of tomorrow.
          </p>
        </motion.div>
      </div>

      <div className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          The{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Team Behind DevUltra
          </span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto text-justify">
          At DevUltra, our strength comes from the creativity, passion, and
          diverse expertise of our team. We may be early in our journey, but
          that only fuels our hunger to push the boundaries of technology and
          build something remarkable. Driven by innovation and a desire to make
          an impact, we turn bold ideas into solutions that stand out in both
          form and function. Collaboration, adaptability, and continuous growth
          are at the heart of what we do because every project is a chance to
          push boundaries and create digital experiences that truly inspire.
          Sure, we’re still figuring some things out along the way, but that’s
          part of the journey and it drives us to keep getting better.
        </p>
      </div>

      <div className="py-24 text-center bg-gradient-to-r from-gray-900 to-black">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-6"
        >
          Let’s Build Something{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Extraordinary
          </span>
        </motion.h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-8 text-lg">
          Whether you’re a visionary startup or a functional enterprise,
          DevUltra is here to help you harness the power of technology. We
          combine design, development, and innovation to craft digital solutions
          that are not only functional but also inspiring. Together, let’s
          create something that defines the future.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="/email_us"
          className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold shadow-lg"
        >
          Get in Touch
        </motion.a>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
