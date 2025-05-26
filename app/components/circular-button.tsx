"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface CircularButtonProps {
  text: string
  hoverText: string
  onClick: () => void
  variant?: "outline" | "filled"
}

export default function CircularButton({
  text,
  hoverText,
  onClick,
  variant = "outline",
}: CircularButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 300, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(buttonRef.current!.offsetWidth / 2)
    mouseY.set(buttonRef.current!.offsetHeight / 2)
  }

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Tombol utama */}
      <motion.button
        ref={buttonRef}
        className={`relative z-10 px-8 py-3 rounded-full transition-all duration-300 overflow-hidden
          ${
            variant === "outline"
              ? "border border-white/20 text-white hover:bg-white/10"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <motion.span
          animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
          className="block"
        >
          {text}
        </motion.span>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center text-sm font-light z-10"
        >
          {hoverText}
        </motion.span>
      </motion.button>

      {/* Jelly Circle */}
      <motion.div
        className="absolute top-0 left-0 w-24 h-24 pointer-events-none z-0"
        style={{
          x: springX,
          y: springY,
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Border Lingkaran */}
        <div className="absolute inset-0 border-2 border-dashed mix-blend-difference border-white/40 rounded-full animate-spin-slow"></div>

        {/* Text Lingkaran (muter) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center animate-spin-slower text-[10px] tracking-widest text-white/60"
          style={{
            fontFamily: "monospace",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-white/50">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text>
              <textPath xlinkHref="#circlePath" startOffset="0%">
                {hoverText.repeat(4)} {/* repeat biar muter penuh */}
              </textPath>
            </text>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}
