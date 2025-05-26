"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import CircularButton from "./circular-button"
import Link from "next/link"

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  return (
    <div ref={ref} className="h-screen overflow-hidden flex items-center px-6">
      <motion.div style={{ y }} className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-light mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              className="w-64 h-64 mx-auto md:mx-0 mb-8 rounded-full overflow-hidden bg-gray-800"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/placeholder.svg?height=256&width=256" alt="Profile" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.h3
              className="text-2xl font-light mb-6"
              whileInView={{ x: [0, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              Hi, I'm Developer
            </motion.h3>
            <motion.p
              className="text-gray-400 leading-relaxed mb-8 text-lg"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Passionate full-stack developer with 5+ years of experience creating digital solutions. I specialize in
              React, Next.js, and modern web technologies.
            </motion.p>

            <motion.div whileInView={{ y: [20, 0] }} transition={{ duration: 0.6 }}>
              <Link href="/about">
                <CircularButton text="About Me" hoverText="learn more" onClick={() => {}} variant="filled" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
