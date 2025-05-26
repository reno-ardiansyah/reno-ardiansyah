"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-light mb-6"
        >
          Hello, I'm
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 font-light"
        >
          Full-stack developer passionate about creating
          <br />
          beautiful and functional digital experiences
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <button
            className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
            data-cursor-hover
          >
            View My Work
          </button>
          <button
            className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300"
            data-cursor-hover
          >
            Get In Touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </motion.section>
  )
}
