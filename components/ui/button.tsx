"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  href?: string
  onClick?: () => void
  className?: string
}

export function Button({ children, variant = "primary", size = "md", href, onClick, className = "" }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 transform-gpu"

  const variants = {
    primary:
      "bg-slate-700 hover:bg-slate-600 text-white shadow-lg hover:shadow-slate-500/25 border border-slate-600/50",
    secondary:
      "bg-slate-600 hover:bg-slate-500 text-white shadow-lg hover:shadow-slate-400/25 border border-slate-500/50",
    outline:
      "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-slate-200 hover:bg-slate-700/50 hover:border-slate-600/70",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </Component>
  )
}
