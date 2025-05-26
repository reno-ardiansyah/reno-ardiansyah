"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", updateMousePosition)

    const interactiveElements = document.querySelectorAll("button, a, [data-cursor-hover]")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full z-50 mix-blend-difference pointer-events-none"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 25,
        }}
      />

      {/* Blur effect - Blue */}
      <motion.div
        className="fixed top-0 left-0 w-[35rem] h-[35rem] bg-blue-500 rounded-full pointer-events-none z-10 opacity-15 blur-3xl"
        animate={{
          x: mousePosition.x - 160,
          y: mousePosition.y - 160,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
        }}
      />

      {/* Blur effect - Purple */}
      <motion.div
        className="fixed top-0 left-0 w-[30rem] h-[30rem] bg-purple-500 rounded-full pointer-events-none z-10 opacity-20 blur-2xl"
        animate={{
          x: mousePosition.x - 108,
          y: mousePosition.y - 108,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 30,
        }}
      />
    </>
  )
}
