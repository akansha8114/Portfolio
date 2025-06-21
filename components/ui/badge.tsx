"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  variant?: "default" | "tech" | "featured"
  icon?: ReactNode
  className?: string
}

export function Badge({ children, variant = "default", icon, className = "" }: BadgeProps) {
  const variants = {
    default: "bg-slate-700/50 text-slate-300 border border-slate-600/50",
    tech: "bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:bg-slate-600/50 hover:border-slate-500/70",
    featured: "bg-gradient-to-r from-slate-600/50 to-slate-500/50 text-slate-200 border border-slate-500/50",
  }

  return (
    <motion.div
      className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm transition-all duration-200 ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {icon && <span className="text-base">{icon}</span>}
      <span>{children}</span>
    </motion.div>
  )
}
