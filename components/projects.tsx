"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github, Code, Star, Zap, Layers, Cpu } from "lucide-react"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MagneticButton } from "@/components/ui/magnetic-button"

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const projects = [
    {
      title: "Hangman Game",
      description:
        "Interactive Hangman game built with React.js (Vite) focusing on ES6+ features and efficient state management with Hooks. Implemented client-side routing via React Router DOM and responsive UI with Tailwind CSS.",
      tech: ["React.js", "Vite", "React Router", "Tailwind CSS", "JavaScript ES6+"],
      github: "#",
      demo: "#",
      featured: true,
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-500/20",
      color: "blue",
    },
    {
      title: "React Dine",
      description:
        "Mobile-first, responsive React.js app using Tailwind CSS, React Router, and Axios to fetch live restaurant data from Swiggy API. Architected reusable UI components and managed global state with Redux.",
      tech: ["React.js", "Redux", "Tailwind CSS", "Axios", "Swiggy API"],
      github: "#",
      demo: "#",
      featured: true,
      icon: <Layers className="w-6 h-6" />,
      gradient: "from-purple-500/20 via-pink-500/20 to-purple-500/20",
      color: "purple",
    },
    {
      title: "Sorting Visualiser",
      description:
        "Real-time algorithm visualizer built with JavaScript, HTML5, and CSS3, later converted to a React component library for reusability. Demonstrates asynchronous JavaScript and DOM manipulation.",
      tech: ["JavaScript", "HTML5", "CSS3", "React.js", "Algorithms"],
      github: "#",
      demo: "#",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-green-500/20 via-emerald-500/20 to-green-500/20",
      color: "green",
    },
    {
      title: "Snake Game",
      description:
        "Grid-based Snake game using vanilla JavaScript, simulating dynamic movement, self-collision detection, and speed control via game loops.",
      tech: ["HTML", "CSS", "JavaScript", "Game Development"],
      github: "#",
      demo: "#",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-yellow-500/20 via-orange-500/20 to-yellow-500/20",
      color: "yellow",
    },
    {
      title: "Tic Tac Toe",
      description:
        "Turn-based game with win/draw logic and DOM interaction, demonstrating clean state management and edge-case handling.",
      tech: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      github: "#",
      demo: "#",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-red-500/20 via-pink-500/20 to-red-500/20",
      color: "red",
    },
  ]

  return (
    <section ref={containerRef} id="projects" className="py-32 px-4 relative overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <motion.div className="absolute inset-0 opacity-30" style={{ y }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl md:text-8xl font-black mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              My Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-2xl text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A showcase of innovative solutions and creative implementations
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
                data-cursor="project"
              >
                <MagneticButton>
                  <Card className="relative overflow-hidden bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-500 h-full">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: `conic-gradient(from 0deg, transparent, ${project.color === "blue" ? "#3b82f6" : project.color === "purple" ? "#8b5cf6" : "#10b981"}, transparent)`,
                        padding: "1px",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <div className="w-full h-full rounded-lg bg-slate-900/90" />
                    </motion.div>

                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-r ${project.color === "blue" ? "from-blue-500 to-cyan-500" : project.color === "purple" ? "from-purple-500 to-pink-500" : "from-green-500 to-emerald-500"}`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {project.icon}
                        </motion.div>
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-200 border-yellow-500/30"
                        >
                          <Star className="w-3 h-3 mr-1" />
                          FEATURED
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-bold text-white mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-slate-300 text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Badge variant="outline" className="border-slate-600 text-slate-300 hover:border-slate-500">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <MagneticButton href={project.github}>
                          <Button variant="outline" size="sm" className="border-slate-600 hover:border-slate-500">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </MagneticButton>
                        <MagneticButton href={project.demo}>
                          <Button
                            size="sm"
                            className={`bg-gradient-to-r ${project.color === "blue" ? "from-blue-600 to-cyan-600" : project.color === "purple" ? "from-purple-600 to-pink-600" : "from-green-600 to-emerald-600"} hover:opacity-90`}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </MagneticButton>
                      </div>
                    </CardContent>
                  </Card>
                </MagneticButton>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                data-cursor="project"
              >
                <MagneticButton>
                  <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-300 h-full group">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        <motion.div
                          className={`p-2 rounded-lg bg-gradient-to-r ${project.color === "green" ? "from-green-500 to-emerald-500" : project.color === "yellow" ? "from-yellow-500 to-orange-500" : "from-red-500 to-pink-500"}`}
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.4 }}
                        >
                          {project.icon}
                        </motion.div>
                        <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                      </div>
                      <CardDescription className="text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="border-slate-600 text-slate-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline" className="border-slate-600 text-slate-400 text-xs">
                            +{project.tech.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex space-x-3">
                        <motion.a
                          href={project.github}
                          className="flex items-center space-x-1 text-slate-400 hover:text-slate-200 transition-colors text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          className="flex items-center space-x-1 text-slate-400 hover:text-slate-200 transition-colors text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo</span>
                        </motion.a>
                      </div>
                    </CardContent>
                  </Card>
                </MagneticButton>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}
