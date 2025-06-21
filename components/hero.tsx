"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Download, ArrowRight } from "lucide-react"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export function Hero() {
  const specializations = [
    "Full Stack Developer",
    "React Specialist",
    "Node.js Developer",
    "MongoDB Expert",
    "JavaScript Engineer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Web Developer",
    "Software Engineer",
  ]

  return (
    <section id="home" className="min-h-screen bg-slate-900 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div>
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm <span className="text-orange-500">Aakansha Singh</span>
              </motion.h1>

              <motion.div
                className="mt-4 h-16 flex items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <TypewriterEffect
                  texts={specializations}
                  className="text-2xl md:text-3xl text-slate-400 font-light"
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={2000}
                />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg text-slate-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A passionate full-stack developer with experience in React.js, Node.js, and MongoDB. Building innovative
              web applications with a focus on user experience and performance.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
              >
                Contact Me
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://drive.google.com/file/d/1Z48zNMdgrTmxSjIFcA4SCYc9Dj6-z-xX/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
              >
                <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href="https://www.linkedin.com/in/aakansha-singh-527776301/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/akansha8114?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-2xl scale-110"></div>

              {/* Profile Image Container */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image src="/profile.jpeg" alt="Aakansha Singh" fill className="object-cover" priority />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-orange-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
