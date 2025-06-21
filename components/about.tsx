"use client"

import { Download, Code2, Database, Palette } from "lucide-react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function About() {
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

  return (
    <section ref={sectionRef} id="about" className="py-16 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="animate-on-scroll"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Who I Am
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  I'm a passionate Computer Science student at{" "}
                  <span className="text-purple-400 font-semibold">Delhi Skill and Entrepreneurship University</span>,
                  currently pursuing my BTech degree with a CGPA of{" "}
                  <span className="text-pink-400 font-semibold">7.6</span>. I specialize in full-stack web development
                  with a focus on React.js and modern JavaScript technologies.
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  My journey in tech has been driven by <span className="text-cyan-400 font-semibold">curiosity</span>{" "}
                  and a desire to create meaningful digital experiences. I enjoy translating complex problems into
                  elegant, user-friendly solutions.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { label: "Location", value: "New Delhi, India", icon: "📍" },
                    { label: "Education", value: "BTech Computer Science (2022-2026)", icon: "🎓" },
                    { label: "Focus", value: "Full Stack Web Development", icon: "💻" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-3 bg-white/5 rounded-lg border border-white/10"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <span className="text-purple-400 font-semibold">{item.label}:</span>
                        <span className="text-gray-300 ml-2">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://drive.google.com/file/d/1Z48zNMdgrTmxSjIFcA4SCYc9Dj6-z-xX/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 shadow-2xl hover:shadow-purple-500/25"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                  <Download size={20} className="relative z-10" />
                  <span className="relative z-10">Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Skills Cards */}
          <div className="space-y-6 animate-on-scroll">
            {[
              {
                title: "Frontend Development",
                description:
                  "Proficient in React.js, Redux, HTML5, CSS3, and modern JavaScript (ES6+). Experience with responsive design and component-based architecture.",
                icon: Palette,
                gradient: "from-pink-500 to-rose-500",
                skills: [
                  { name: "React.js", icon: "⚛️" },
                  { name: "Redux", icon: "🔄" },
                  { name: "Tailwind CSS", icon: "💨" },
                  { name: "TypeScript", icon: "🔷" },
                ],
              },
              {
                title: "Backend Development",
                description:
                  "Skilled in Node.js, Express.js, MongoDB, and RESTful API development. Experience with database design and server-side optimization.",
                icon: Database,
                gradient: "from-blue-500 to-cyan-500",
                skills: [
                  { name: "Node.js", icon: "🟢" },
                  { name: "Express.js", icon: "🚀" },
                  { name: "MongoDB", icon: "🍃" },
                  { name: "REST APIs", icon: "🔗" },
                ],
              },
              {
                title: "Tools & Technologies",
                description:
                  "Git, Chrome DevTools, Vercel, Heroku, React Testing Library, and various development tools for efficient workflow.",
                icon: Code2,
                gradient: "from-green-500 to-emerald-500",
                skills: [
                  { name: "Git", icon: "🌿" },
                  { name: "Vercel", icon: "▲" },
                  { name: "Heroku", icon: "🟣" },
                  { name: "Testing", icon: "🧪" },
                ],
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${skill.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300`}
                />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 bg-gradient-to-r ${skill.gradient} rounded-xl`}>
                      <skill.icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{skill.title}</h4>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 px-3 py-1 bg-white/10 text-sm rounded-full text-gray-300 border border-white/20 hover:bg-white/20 transition-colors duration-200"
                      >
                        <span className="text-base">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
