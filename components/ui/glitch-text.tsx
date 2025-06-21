"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    let interval: NodeJS.Timeout

    const startGlitch = () => {
      let iterations = 0
      interval = setInterval(() => {
        setGlitchText((prev) =>
          prev
            .split("")
            .map((char, index) => {
              if (index < iterations) {
                return text[index]
              }
              return glitchChars[Math.floor(Math.random() * glitchChars.length)]
            })
            .join(""),
        )

        if (iterations >= text.length) {
          clearInterval(interval)
          setGlitchText(text)
        }

        iterations += 1 / 3
      }, 30)
    }

    const timeout = setTimeout(startGlitch, 1000)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text])

  return (
    <motion.span className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {glitchText}
    </motion.span>
  )
}
