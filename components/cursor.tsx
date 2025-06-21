"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const mouseEnter = () => setIsVisible(true)
    const mouseLeave = () => setIsVisible(false)

    document.addEventListener("mousemove", mouseMove)
    document.addEventListener("mouseenter", mouseEnter)
    document.addEventListener("mouseleave", mouseLeave)

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll("a, button")
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorVariant("pointer"))
        el.addEventListener("mouseleave", () => setCursorVariant("default"))
      })

      const projectCards = document.querySelectorAll("[data-cursor='project']")
      projectCards.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorVariant("project"))
        el.addEventListener("mouseleave", () => setCursorVariant("default"))
      })

      const skillItems = document.querySelectorAll("[data-cursor='skill']")
      skillItems.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorVariant("skill"))
        el.addEventListener("mouseleave", () => setCursorVariant("default"))
      })
    }

    const timeoutId = setTimeout(addHoverListeners, 500)

    return () => {
      document.removeEventListener("mousemove", mouseMove)
      document.removeEventListener("mouseenter", mouseEnter)
      document.removeEventListener("mouseleave", mouseLeave)
      clearTimeout(timeoutId)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: "rgba(148, 163, 184, 0.8)",
    },
    pointer: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: "rgba(59, 130, 246, 0.8)",
    },
    project: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      backgroundColor: "rgba(139, 92, 246, 0.8)",
    },
    skill: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.2,
      backgroundColor: "rgba(16, 185, 129, 0.8)",
    },
  }

  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference border-2 border-white/20"
        animate={variants[cursorVariant as keyof typeof variants]}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{
          width: "32px",
          height: "32px",
          backdropFilter: "blur(4px)",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-49 rounded-full bg-white/40"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
        style={{
          width: "8px",
          height: "8px",
        }}
      />
    </>
  )
}
