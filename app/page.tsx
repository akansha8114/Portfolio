import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { LeetCodeDashboard } from "@/components/leetcode-dashboard"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/cursor"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <LeetCodeDashboard />
      <Contact />
    </main>
  )
}
