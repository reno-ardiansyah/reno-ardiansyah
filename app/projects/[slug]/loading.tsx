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
              className="h-16 bg-gray-800 rounded-lg mb-6 mx-auto max-w-2xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="h-6 bg-gray-800 rounded-lg mx-auto max-w-3xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
            />
          </div>

          {/* Info Cards Skeleton */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="text-center"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 }}
              >
                <div className="w-6 h-6 bg-gray-800 rounded-full mx-auto mb-2" />
                <div className="h-4 bg-gray-800 rounded mb-2" />
                <div className="h-4 bg-gray-800 rounded" />
              </motion.div>
            ))}
          </div>

          {/* Buttons Skeleton */}
          <div className="flex justify-center space-x-4 mb-16">
            <motion.div
              className="h-12 w-32 bg-gray-800 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="h-12 w-32 bg-gray-800 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
            />
          </div>

          {/* Image Skeleton */}
          <motion.div
            className="w-full h-96 bg-gray-800 rounded-2xl mb-8"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />

          {/* Thumbnails Skeleton */}
          <div className="flex justify-center space-x-4 mb-16">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-20 h-16 bg-gray-800 rounded-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
