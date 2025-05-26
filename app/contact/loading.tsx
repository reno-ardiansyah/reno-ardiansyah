"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-20 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Skeleton */}
          <div className="text-center mb-12">
            <motion.div
              className="h-16 bg-gray-800 rounded-lg mb-6 mx-auto max-w-md"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="h-6 bg-gray-800 rounded-lg mx-auto max-w-3xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
            />
          </div>

          {/* Content Skeleton */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Skeleton */}
            <motion.div
              className="bg-gray-900/30 p-8 rounded-2xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="h-8 bg-gray-800 rounded mb-6 w-32" />
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="h-12 bg-gray-800 rounded" />
                  <div className="h-12 bg-gray-800 rounded" />
                </div>
                <div className="h-12 bg-gray-800 rounded" />
                <div className="h-32 bg-gray-800 rounded" />
                <div className="h-12 bg-gray-800 rounded" />
              </div>
            </motion.div>

            {/* Info Skeleton */}
            <div className="space-y-8">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
              >
                <div className="h-8 bg-gray-800 rounded mb-6 w-48" />
                <div className="h-4 bg-gray-800 rounded mb-2" />
                <div className="h-4 bg-gray-800 rounded w-3/4" />
              </motion.div>

              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="flex items-center space-x-4 p-4 bg-gray-900/30 rounded-lg"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gray-800 rounded-full" />
                    <div className="flex-1">
                      <div className="h-4 bg-gray-800 rounded mb-2 w-16" />
                      <div className="h-4 bg-gray-800 rounded w-32" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
