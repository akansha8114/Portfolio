"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

interface FloatingDockProps {
  items: Array<{
    title: string
    icon: React.ReactNode
    href: string
  }>
}

export function FloatingDock({ items }: FloatingDockProps) {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className="mx-auto flex h-16 items-end gap-4 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 px-4 pb-3"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, type: "spring" }}
    >
      {items.map((item, i) => (
        <AppIcon mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  )
}

function AppIcon({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: any
  title: string
  icon: React.ReactNode
  href: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <motion.div ref={ref} style={{ width }} className="aspect-square">
      <motion.a
        href={href}
        className="flex size-full items-center justify-center rounded-xl bg-gradient-to-t from-slate-800 to-slate-700 text-white shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon}
      </motion.a>
    </motion.div>
  )
}
