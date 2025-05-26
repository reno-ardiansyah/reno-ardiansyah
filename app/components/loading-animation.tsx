"use client"

import { motion, AnimatePresence } from "framer-motion"

interface LoadingAnimationProps {
  isLoading: boolean
  onComplete?: () => void
}

export default function LoadingAnimation({ isLoading, onComplete }: LoadingAnimationProps) {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {/* First Color Layer (Blue/Purple) */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          />

          {/* Second Color Layer (White) with Name */}
          <motion.div
            className="absolute inset-0 bg-white flex items-center justify-center"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            {/* Name Display */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-8xl font-light text-black tracking-wider"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              >
              </motion.h1>
              <motion.div
                className="w-32 h-px bg-black mx-auto mt-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: "easeOut",
                }}
              />
              <motion.p
                className="text-lg md:text-xl text-gray-600 mt-4 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1,
                }}
              >
                Developer & Designer
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Third Color Layer (Secondary) */}
          <motion.div
            className="absolute inset-0 h-full w-full flex justify-center items-center bg-slate-700 text-center text-4xl md:text-6xl lg:text-8xl tracking-wider"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <div className="bg-gradient-to-r font-bold from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              RENO ARDIANSYAH
            </div>
          </motion.div>


          {/* Loading Progress Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
