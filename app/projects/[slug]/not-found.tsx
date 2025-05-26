"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <Search className="w-24 h-24 mx-auto text-gray-600 mb-6" />
            <h1 className="text-6xl font-light mb-4">404</h1>
            <h2 className="text-2xl font-light mb-6">Project Not Found</h2>
            <p className="text-gray-400 mb-8">The project you're looking for doesn't exist or may have been moved.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <motion.button
                className="flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Projects</span>
              </motion.button>
            </Link>
            <Link href="/">
              <motion.button
                className="flex items-center space-x-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Go Home</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
