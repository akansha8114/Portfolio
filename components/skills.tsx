"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { Code, Monitor, Server, Wrench, BookOpen, Settings } from "lucide-react"

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "JavaScript", icon: "JS", color: "bg-yellow-500" },
        { name: "TypeScript", icon: "TS", color: "bg-blue-500" },
        { name: "C++", icon: "C++", color: "bg-blue-600" },
        { name: "Python", icon: "PY", color: "bg-green-500" },
        { name: "Java", icon: "JV", color: "bg-red-600" },
      ],
    },
    {
      title: "Frontend",
      icon: <Monitor className="w-5 h-5" />,
      skills: [
        { name: "React", icon: "⚛️", color: "bg-cyan-500" },
        { name: "Next.js", icon: "N", color: "bg-black" },
        { name: "Tailwind CSS", icon: "TW", color: "bg-teal-500" },
        { name: "HTML/CSS", icon: "HTML", color: "bg-orange-500" },
        { name: "Vite", icon: "⚡", color: "bg-purple-500" },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Node.js", icon: "NODE", color: "bg-green-600" },
        { name: "Express", icon: "EX", color: "bg-gray-700" },
        { name: "MongoDB", icon: "🍃", color: "bg-green-500" },
        { name: "SQL", icon: "SQL", color: "bg-blue-600" },
        { name: "Redis", icon: "RD", color: "bg-red-500" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        { name: "Git", icon: "GIT", color: "bg-orange-600" },
        { name: "GitHub", icon: "GH", color: "bg-gray-800" },
        { name: "VS Code", icon: "VS", color: "bg-blue-500" },
        { name: "Vercel", icon: "▲", color: "bg-black" },
        { name: "AWS", icon: "AWS", color: "bg-orange-500" },
        { name: "Heroku", icon: "H", color: "bg-purple-600" },
      ],
    },
    {
      title: "Fundamentals",
      icon: <BookOpen className="w-5 h-5" />,
      skills: [
        { name: "Data Structures & Algorithms", icon: "DSA", color: "bg-indigo-600" },
        { name: "DBMS", icon: "DB", color: "bg-blue-600" },
        { name: "OOPs", icon: "OOP", color: "bg-green-600" },
        { name: "Computer Networks", icon: "NET", color: "bg-purple-600" },
        { name: "Operating Systems", icon: "OS", color: "bg-gray-600" },
      ],
    },
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 relative overflow-hidden bg-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_12%,rgba(255,255,255,0.05)_12.5%,rgba(255,255,255,0.05)_87%,transparent_87.5%)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-[linear-gradient(-30deg,transparent_12%,rgba(255,255,255,0.05)_12.5%,rgba(255,255,255,0.05)_87%,transparent_87.5%)] bg-[length:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex items-center mb-16 animate-on-scroll"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-6">
            <motion.div
              className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center border border-orange-500/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Settings className="w-8 h-8 text-orange-400" />
            </motion.div>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">Skills</h2>
              <p className="text-xl text-slate-400">My technical expertise</p>
            </div>
          </div>
          <motion.div
            className="ml-auto w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="w-3 h-3 bg-orange-400 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="animate-on-scroll"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <motion.div
                  className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-500/30"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-orange-400">{category.icon}</div>
                </motion.div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + idx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-center space-x-3 p-3 bg-slate-900/50 rounded-xl border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 hover:bg-slate-800/50">
                      <motion.div
                        className={`w-8 h-8 ${skill.color} rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-slate-200 font-medium group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          className="mt-20 animate-on-scroll"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Proficiency Levels</h3>
            <p className="text-slate-400 text-lg">My expertise across different technology stacks</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { category: "Frontend Development", level: 90, color: "from-blue-500 to-cyan-500" },
              { category: "Backend Development", level: 85, color: "from-green-500 to-emerald-500" },
              { category: "Full Stack Integration", level: 88, color: "from-purple-500 to-pink-500" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-slate-700/50 transition-all duration-300 hover:bg-slate-800/50">
                  <h4 className="text-xl font-bold text-white mb-4">{item.category}</h4>
                  <div className="relative">
                    <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="absolute right-0 -top-8 text-lg font-bold text-slate-300">{item.level}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
