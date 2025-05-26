"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Search } from "lucide-react"
import ProjectCard from "../components/project-card"
import HamburgerMenu from "../components/hamburger-menu"
import CursorFollower from "../components/cursor-follower"
import { usePageTransition } from "../components/page-transition"

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { startTransition } = usePageTransition()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile", "AI/ML", "Web App"]

  // Extended projects with real images and varied heights
  const allProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      slug: "ecommerce-platform",
      description: "Modern e-commerce solution with React and Node.js",
      shortDesc: "Full-stack e-commerce with payment integration",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=550&fit=crop",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Full-Stack",
      featured: true,
      height: 600,
    },
    {
      id: 2,
      title: "Task Management App",
      slug: "task-management-app",
      description: "Collaborative task management with real-time updates",
      shortDesc: "Real-time collaboration tool for teams",
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=450&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=480&fit=crop",
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Web App",
      featured: true,
      height: 500,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      slug: "weather-dashboard",
      description: "Beautiful weather app with location-based forecasts",
      shortDesc: "Location-based weather forecasting",
      images: [
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=350&fit=crop",
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=380&fit=crop",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=320&fit=crop",
      ],
      technologies: ["Vue.js", "Express", "OpenWeather API", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Frontend",
      featured: true,
      height: 350,
    },
    {
      id: 4,
      title: "Social Media App",
      slug: "social-media-app",
      description: "Instagram-like social platform",
      shortDesc: "Social platform with real-time messaging",
      images: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=450&fit=crop",
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=420&fit=crop",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=480&fit=crop",
      ],
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Mobile",
      featured: true,
      height: 450,
    },
    {
      id: 5,
      title: "AI Chat Bot",
      slug: "ai-chat-bot",
      description: "Intelligent chatbot with natural language processing",
      shortDesc: "AI-powered customer service bot",
      images: [
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=320&fit=crop",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=280&fit=crop",
      ],
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "OpenAI"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "AI/ML",
      featured: true,
      height: 300,
    },
    {
      id: 6,
      title: "Portfolio Website",
      slug: "portfolio-website",
      description: "Modern portfolio with animations",
      shortDesc: "Animated portfolio with smooth interactions",
      images: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=380&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=360&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
      ],
      technologies: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Frontend",
      featured: true,
      height: 380,
    },
    {
      id: 7,
      title: "Crypto Dashboard",
      slug: "crypto-dashboard",
      description: "Real-time cryptocurrency tracking",
      shortDesc: "Track crypto prices and portfolio",
      images: [
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=520&fit=crop",
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=480&fit=crop",
        "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=500&fit=crop",
      ],
      technologies: ["React", "Chart.js", "CoinGecko API"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Frontend",
      featured: false,
      height: 520,
    },
    {
      id: 8,
      title: "Food Delivery App",
      slug: "food-delivery-app",
      description: "Mobile food ordering platform",
      shortDesc: "Order food with real-time tracking",
      images: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=420&fit=crop",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=440&fit=crop",
      ],
      technologies: ["React Native", "Node.js", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Mobile",
      featured: false,
      height: 420,
    },
    {
      id: 9,
      title: "Blog Platform",
      slug: "blog-platform",
      description: "Content management system for bloggers",
      shortDesc: "CMS with markdown support and SEO optimization",
      images: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=320&fit=crop",
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=340&fit=crop",
        "https://images.unsplash.com/photo-1542435503-956c469947f6?w=400&h=300&fit=crop",
      ],
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Full-Stack",
      featured: false,
      height: 320,
    },
    {
      id: 10,
      title: "Expense Tracker",
      slug: "expense-tracker",
      description: "Personal finance management app",
      shortDesc: "Track expenses with beautiful charts and insights",
      images: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=420&fit=crop",
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=440&fit=crop",
      ],
      technologies: ["React", "Chart.js", "LocalStorage"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Frontend",
      featured: false,
      height: 420,
    },
    {
      id: 11,
      title: "Video Streaming Platform",
      slug: "video-streaming-platform",
      description: "Netflix-like video streaming service",
      shortDesc: "Stream videos with subscription model",
      images: [
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=560&fit=crop",
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=520&fit=crop",
        "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=540&fit=crop",
      ],
      technologies: ["React", "Node.js", "AWS", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Full-Stack",
      featured: false,
      height: 560,
    },
    {
      id: 12,
      title: "Fitness Tracker",
      slug: "fitness-tracker",
      description: "Health and fitness monitoring app",
      shortDesc: "Track workouts and health metrics",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=480&fit=crop",
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=460&fit=crop",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=500&fit=crop",
      ],
      technologies: ["React Native", "HealthKit", "Firebase"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Mobile",
      featured: false,
      height: 480,
    },
  ]

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <CursorFollower />
      <HamburgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} onNavigate={startTransition} />

      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-12"
        >
          <button
            onClick={() => {
              startTransition()
              setTimeout(() => window.history.back(), 300)
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </button>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-light"
          >
            All Projects
          </motion.h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:outline-none focus:border-white transition-colors duration-300 text-white placeholder-gray-400"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  selectedCategory === category ? "bg-white text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Projects Grid */}
        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
