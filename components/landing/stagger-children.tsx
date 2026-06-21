"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
  role?: string
}

export function StaggerChildren({ children, className, stagger = 0.08, delay = 0, role }: StaggerChildrenProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      role={role}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reducedMotion ? 0 : stagger,
            delayChildren: reducedMotion ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  role,
}: {
  children: ReactNode
  className?: string
  role?: string
}) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      role={role}
      variants={{
        hidden: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reducedMotion ? 0.2 : 0.65, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
