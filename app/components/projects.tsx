"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import CircularButton from "./circular-button"
import Link from "next/link"

export default function Projects() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"])

  // Featured projects with real images and varied sizes
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      slug: "ecommerce-platform",
      description: "Modern e-commerce solution with React and Node.js",
      shortDesc: "Full-stack e-commerce with payment integration",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=400&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=350&fit=crop",
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=300&h=380&fit=crop",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Full-Stack",
      height: 400,
    },
    {
      id: 2,
      title: "Task Management App",
      slug: "task-management-app",
      description: "Collaborative task management with real-time updates",
      shortDesc: "Real-time collaboration tool for teams",
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=350&fit=crop",
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=320&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=340&fit=crop",
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Web App",
      height: 350,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      slug: "weather-dashboard",
      description: "Beautiful weather app with location-based forecasts",
      shortDesc: "Location-based weather forecasting",
      images: [
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=300&h=280&fit=crop",
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=260&fit=crop",
      ],
      technologies: ["Vue.js", "Express", "OpenWeather API", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Frontend",
      height: 280,
    },
    {
      id: 4,
      title: "Social Media App",
      slug: "social-media-app",
      description: "Instagram-like social platform",
      shortDesc: "Social platform with real-time messaging",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=380&fit=crop",
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=360&fit=crop",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=300&h=390&fit=crop",
      ],
      technologies: ["React Native", "Firebase", "Redux"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Mobile",
      height: 380,
    },
    {
      id: 5,
      title: "AI Chat Bot",
      slug: "ai-chat-bot",
      description: "Intelligent chatbot with natural language processing",
      shortDesc: "AI-powered customer service bot",
      images: [
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=300&h=250&fit=crop",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=270&fit=crop",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=240&fit=crop",
      ],
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "AI/ML",
      height: 250,
    },
    {
      id: 6,
      title: "Portfolio Website",
      slug: "portfolio-website",
      description: "Modern portfolio with animations",
      shortDesc: "Animated portfolio with smooth interactions",
      images: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=320&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=340&fit=crop",
      ],
      technologies: ["Next.js", "Framer Motion", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Frontend",
      height: 320,
    },
    {
      id: 7,
      title: "Crypto Dashboard",
      slug: "crypto-dashboard",
      description: "Real-time cryptocurrency tracking",
      shortDesc: "Track crypto prices and portfolio",
      images: [
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=300&h=420&fit=crop",
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=300&h=400&fit=crop",
        "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=300&h=410&fit=crop",
      ],
      technologies: ["React", "Chart.js", "CoinGecko API"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Frontend",
      height: 420,
    },
    {
      id: 8,
      title: "Food Delivery App",
      slug: "food-delivery-app",
      description: "Mobile food ordering platform",
      shortDesc: "Order food with real-time tracking",
      images: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=360&fit=crop",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=340&fit=crop",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=370&fit=crop",
      ],
      technologies: ["React Native", "Node.js", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Mobile",
      height: 360,
    },
    {
      id: 9,
      title: "Blog Platform",
      slug: "blog-platform",
      description: "Content management system for bloggers",
      shortDesc: "CMS with markdown support and SEO optimization",
      images: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=280&fit=crop",
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=300&fit=crop",
        "https://images.unsplash.com/photo-1542435503-956c469947f6?w=300&h=260&fit=crop",
      ],
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Full-Stack",
      height: 280,
    },
    {
      id: 10,
      title: "Expense Tracker",
      slug: "expense-tracker",
      description: "Personal finance management app",
      shortDesc: "Track expenses with beautiful charts and insights",
      images: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=350&fit=crop",
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&h=330&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=360&fit=crop",
      ],
      technologies: ["React", "Chart.js", "LocalStorage"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Frontend",
      height: 350,
    },
  ]

  return (
    <div ref={ref} className="h-screen overflow-hidden flex flex-col px-6">
      {/* Title - Outside of height calculation */}
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-light pt-20 pb-8 text-center flex-shrink-0"
      >
        Featured Projects
      </motion.h2>

      {/* Projects Grid Container - Max 100vh from here */}
      <div className="flex-1 overflow-hidden relative">
        <motion.div style={{ y }} className="max-w-7xl mx-auto w-full h-full">
          {/* 5 Column Pinterest Grid */}
          <motion.div
            className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4 h-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* View All Button - Fixed at bottom */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <Link href="/projects">
              <CircularButton text="View All Projects" hoverText="see more" onClick={() => {}} variant="filled" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-rotate images
  useState(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <motion.div
      className="break-inside-avoid mb-4 group cursor-pointer"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -3 }}
    >
      <div className="relative bg-gray-900/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* Compact Image Container */}
        <div className="relative overflow-hidden" style={{ height: `${Math.min(project.height, 300)}px` }}>
          <motion.img
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            onError={(e) => {
              e.currentTarget.src = `/placeholder.svg?height=${project.height}&width=300&text=${encodeURIComponent(project.title)}`
            }}
          />

          {/* Compact Image Indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {project.images.map((_, imgIndex) => (
              <div
                key={imgIndex}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  imgIndex === currentImageIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Compact Category Badge */}
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        {/* Compact Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-between p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <motion.h3
              className="text-lg font-light text-white mb-2"
              initial={{ y: 15 }}
              animate={{ y: isHovered ? 0 : 15 }}
              transition={{ delay: 0.1 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-gray-300 text-xs mb-3"
              initial={{ y: 15 }}
              animate={{ y: isHovered ? 0 : 15 }}
              transition={{ delay: 0.15 }}
            >
              {project.shortDesc}
            </motion.p>

            {/* Compact Technologies */}
            <motion.div
              className="flex flex-wrap gap-1 mb-4"
              initial={{ y: 15 }}
              animate={{ y: isHovered ? 0 : 15 }}
              transition={{ delay: 0.2 }}
            >
              {project.technologies.slice(0, 2).map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-white/20 text-white text-xs rounded-full">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 2 && (
                <span className="px-2 py-0.5 bg-white/20 text-white text-xs rounded-full">
                  +{project.technologies.length - 2}
                </span>
              )}
            </motion.div>
          </div>

          {/* Compact Action Buttons */}
          <motion.div
            className="flex space-x-2"
            initial={{ y: 15 }}
            animate={{ y: isHovered ? 0 : 15 }}
            transition={{ delay: 0.25 }}
          >
            <Link href={`/projects/${project.slug}`} className="flex-1">
              <button className="w-full py-1.5 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-300 text-xs font-medium">
                View Detail
              </button>
            </Link>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
            >
              <ExternalLink className="w-3 h-3 text-white" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-300"
            >
              <Github className="w-3 h-3 text-white" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
