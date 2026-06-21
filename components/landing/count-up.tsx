"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"

interface CountUpProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
}

export function CountUp({ value, suffix = "", prefix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const count = useMotionValue(0)
  const display = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 1.2, ease: [0.16, 1, 0.3, 1] })
    }
  }, [inView, count, value])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}
