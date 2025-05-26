"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface Project {
  id: number
  title: string
  slug: string
  description: string
  shortDesc: string
  images: string[]
  technologies: string[]
  github: string
  demo: string
  category: string
  featured?: boolean
  height: number
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-rotate images
  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [project.images.length])

  return (
    <motion.div
      className="break-inside-avoid mb-6 group cursor-pointer"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="relative bg-gray-900/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* Dynamic Image Container */}
        <div className="relative overflow-hidden" style={{ height: `${project.height}px` }}>
          <motion.img
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.currentTarget.src = `/placeholder.svg?height=${project.height}&width=400&text=${encodeURIComponent(project.title)}`
            }}
          />

          {/* Image Indicators */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.images.map((_, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    imgIndex === currentImageIndex ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
              {project.category}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-between p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <motion.h3
              className="text-xl font-light text-white mb-2"
              initial={{ y: 20 }}
              animate={{ y: isHovered ? 0 : 20 }}
              transition={{ delay: 0.1 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-gray-300 text-sm mb-4"
              initial={{ y: 20 }}
              animate={{ y: isHovered ? 0 : 20 }}
              transition={{ delay: 0.15 }}
            >
              {project.shortDesc}
            </motion.p>

            {/* Technologies */}
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial={{ y: 20 }}
              animate={{ y: isHovered ? 0 : 20 }}
              transition={{ delay: 0.2 }}
            >
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                  +{project.technologies.length - 3}
                </span>
              )}
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex space-x-3"
            initial={{ y: 20 }}
            animate={{ y: isHovered ? 0 : 20 }}
            transition={{ delay: 0.25 }}
          >
            <Link href={`/projects/${project.slug}`} className="flex-1">
              <button className="w-full py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-300 text-sm font-medium">
                View Detail
              </button>
            </Link>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 text-white" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
