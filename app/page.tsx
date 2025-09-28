"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "../public/assets/logo.png";
import FeatureCard from "../components/FeatureCard";

const whyByteCode = [
  {
    title: "Interactive Learning",
    description: "Practice coding while learning concepts, no passive reading.",
    icon: "💻",
  },
  {
    title: "Step-by-Step Courses",
    description: "Topics unlocked sequentially, building skills gradually.",
    icon: "📚",
  },
  {
    title: "Gamified Progress",
    description: "Earn XP, badges, and rewards while mastering coding.",
    icon: "🏆",
  },
  {
    title: "Expert-Verified Content",
    description: "Courses designed by experienced developers.",
    icon: "👨‍💼",
  },
];

const languages = [
  {
    title: "Frontend",
    description: "HTML, CSS, JavaScript, React",
    color: "from-blue-900 to-cyan-700",
  },
  {
    title: "Backend",
    description: "Node.js, Python, Java",
    color: "from-green-900 to-emerald-700",
  },
  {
    title: "Mobile",
    description: "React Native, Flutter",
    color: "from-purple-900 to-pink-700",
  },
  {
    title: "Database",
    description: "SQL, MongoDB, PostgreSQL",
    color: "from-orange-900 to-red-700",
  },
  // { title: "DevOps", description: "Docker, Git, CI/CD", color: "from-indigo-900 to-purple-700" },
  // { title: "AI/ML", description: "Python, TensorFlow, PyTorch", color: "from-teal-900 to-blue-700" },
];

const features = [
  {
    title: "In-Site Coding Support",
    description: "Practice exercises and challenges directly in your browser.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "AI-Powered Assistance",
    description:
      "Get hints, explanations, and guided feedback without giving answers away.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Discussion & Collaboration",
    description:
      "Ask questions, pair program, and learn with peers in real-time rooms.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Gamified Progress",
    description:
      "Earn XP, unlock badges, and track your achievements as you progress.",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Reference Library",
    description:
      "Access official docs, cheat sheets, and curated tutorials per topic.",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Career Paths",
    description:
      "Structured learning paths for specific developer roles and goals.",
    gradient: "from-teal-500/20 to-blue-500/20",
  },
];

const Landing = () => {
  const [showContent, setShowContent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-green-500/10 rounded-full blur-3xl"
          style={{
            right: `${mousePosition.x / 25}px`,
            bottom: `${mousePosition.y / 25}px`,
            transform: "translate(50%, 50%)",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, 30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Logo + App Name */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: showContent ? 50 : 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 z-10 py-20"
      >
        <motion.div
          initial={{ y: 30, opacity: 0, rotate: -180 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Image
            src={Logo}
            alt="ByteCode Logo"
            priority
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-40 lg:h-40 drop-shadow-2xl"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-amber-200 font-transformer "
        >
          ByteCode
        </motion.h1>
      </motion.div>

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="flex flex-col items-center text-center max-w-6xl space-y-20 mt-20 z-10"
          >
            {/* Hero Section */}
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 py-40"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold font-racing animate-pulse ">
                Code-
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  Practice
                </span>
                -Master
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-5xl leading-relaxed">
                Transform how you learn to code with our interactive, gamified
                platform. Master programming through hands-on exercises,
                AI-powered guidance, and real-world projects—all in one
                immersive experience.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 text-lg font-semibold flex items-center gap-2"
                >
                  Login
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-300 text-lg font-semibold"
                >
                  Register
                </motion.button>
              </div>

              {/* Down Arrow Button */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex justify-center mt-16"
              >
                <button
                  onClick={() => {
                    const nextSection = document.querySelector("#why-bytecode");
                    nextSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>

            {/* Why ByteCode */}
            <motion.section
              id="why-bytecode"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="w-full space-y-12"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                Why{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  ByteCode
                </span>
                ?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyByteCode.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Languages & Frameworks */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="w-full space-y-12"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                Languages &{" "}
                <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
                  Frameworks
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {languages.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-6 bg-gradient-to-br ${item.color} rounded-2xl shadow-2xl text-white group cursor-pointer hover:shadow-xl transition-all duration-100`}
                  >
                    <h4 className="text-3xl font-bold mb-3">{item.title}</h4>
                    <p className="text-white/90 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="w-full space-y-12"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                All-in-One{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  Learning Experience
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-6 bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group`}
                  >
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-200 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Testimonials */}

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="w-full text-center space-y-8 py-16"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                Ready to Start Your{" "}
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  Coding Journey
                </span>
                ?
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of developers who transformed their careers with
                ByteCode
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-lg font-bold"
              >
                Get Started Today - It's Free!
              </motion.button>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Landing;
