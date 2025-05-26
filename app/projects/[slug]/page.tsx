"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from "lucide-react"
import { notFound } from "next/navigation"
import CursorFollower from "../../components/cursor-follower"
import HamburgerMenu from "../../components/hamburger-menu"
import { usePageTransition } from "../../components/page-transition"

// Complete project data for all projects
const projectsData = {
  "ecommerce-platform": {
    id: 1,
    title: "E-Commerce Platform",
    slug: "ecommerce-platform",
    description:
      "A comprehensive e-commerce solution built with modern technologies, featuring user authentication, product management, shopping cart, payment integration, and admin dashboard.",
    shortDesc: "Full-stack e-commerce with payment integration",
    images: [
      "/placeholder.svg?height=600&width=800&text=Homepage",
      "/placeholder.svg?height=600&width=800&text=Product+Page",
      "/placeholder.svg?height=600&width=800&text=Dashboard",
      "/placeholder.svg?height=600&width=800&text=Cart",
      "/placeholder.svg?height=600&width=800&text=Checkout",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express", "JWT", "Cloudinary"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Full-Stack",
    featured: true,
    date: "2024-01-15",
    client: "Personal Project",
    duration: "3 months",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Admin dashboard for inventory management",
      "Order tracking and history",
      "Responsive design for all devices",
      "Email notifications for orders",
    ],
    challenges: [
      "Implementing secure payment processing",
      "Optimizing database queries for large product catalogs",
      "Creating a responsive design that works across all devices",
      "Managing complex state with Redux",
    ],
    learnings: [
      "Advanced React patterns and hooks",
      "Payment gateway integration",
      "Database optimization techniques",
      "Security best practices for e-commerce",
    ],
  },
  "task-management-app": {
    id: 2,
    title: "Task Management App",
    slug: "task-management-app",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and comprehensive project tracking.",
    shortDesc: "Real-time collaboration tool for teams",
    images: [
      "/placeholder.svg?height=600&width=800&text=Dashboard",
      "/placeholder.svg?height=600&width=800&text=Kanban+Board",
      "/placeholder.svg?height=600&width=800&text=Calendar+View",
      "/placeholder.svg?height=600&width=800&text=Team+Chat",
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Web App",
    featured: true,
    date: "2024-02-20",
    client: "Startup Company",
    duration: "4 months",
    features: [
      "Real-time collaboration with Socket.io",
      "Drag-and-drop task management",
      "Multiple project views (Kanban, Calendar, List)",
      "Team chat and notifications",
      "File attachments and comments",
      "Time tracking and reporting",
      "Role-based permissions",
      "Mobile-responsive design",
    ],
    challenges: [
      "Implementing real-time synchronization across multiple users",
      "Creating smooth drag-and-drop interactions",
      "Managing complex relational data with Prisma",
      "Optimizing performance for large teams",
    ],
    learnings: [
      "Real-time application architecture",
      "Advanced TypeScript patterns",
      "Database design for collaborative apps",
      "WebSocket implementation and optimization",
    ],
  },
  "weather-dashboard": {
    id: 3,
    title: "Weather Dashboard",
    slug: "weather-dashboard",
    description:
      "A beautiful and intuitive weather application that provides accurate forecasts, interactive maps, and location-based weather data with stunning visualizations.",
    shortDesc: "Location-based weather forecasting",
    images: [
      "/placeholder.svg?height=600&width=800&text=Weather+Dashboard",
      "/placeholder.svg?height=600&width=800&text=7+Day+Forecast",
      "/placeholder.svg?height=600&width=800&text=Weather+Maps",
      "/placeholder.svg?height=600&width=800&text=Hourly+Forecast",
      "/placeholder.svg?height=600&width=800&text=Weather+Alerts",
    ],
    technologies: ["Vue.js", "Express", "OpenWeather API", "Chart.js", "Mapbox", "Vuex"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Frontend",
    featured: true,
    date: "2024-03-10",
    client: "Weather Tech Inc",
    duration: "2 months",
    features: [
      "Current weather conditions with detailed metrics",
      "7-day weather forecast with hourly breakdowns",
      "Interactive weather maps with radar and satellite",
      "Location-based weather alerts and notifications",
      "Beautiful weather animations and transitions",
      "Search for weather in any city worldwide",
      "Responsive design for mobile and desktop",
      "Dark and light theme support",
    ],
    challenges: [
      "Integrating multiple weather APIs for comprehensive data",
      "Creating smooth animations for weather transitions",
      "Optimizing map performance for mobile devices",
      "Handling different timezone calculations",
    ],
    learnings: [
      "Vue.js composition API and advanced patterns",
      "Working with geolocation and mapping APIs",
      "Data visualization with Chart.js",
      "Performance optimization for data-heavy applications",
    ],
  },
  "social-media-app": {
    id: 4,
    title: "Social Media App",
    slug: "social-media-app",
    description:
      "A modern social media platform built with React Native, featuring real-time messaging, story sharing, photo filters, and comprehensive social networking features.",
    shortDesc: "Social platform with real-time messaging",
    images: [
      "/placeholder.svg?height=600&width=800&text=Social+Feed",
      "/placeholder.svg?height=600&width=800&text=Stories",
      "/placeholder.svg?height=600&width=800&text=Messages",
      "/placeholder.svg?height=600&width=800&text=Profile",
      "/placeholder.svg?height=600&width=800&text=Camera",
    ],
    technologies: ["React Native", "Firebase", "Redux", "Expo", "Node.js", "Socket.io"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Mobile",
    featured: true,
    date: "2024-04-05",
    client: "Social Startup",
    duration: "5 months",
    features: [
      "Real-time messaging and group chats",
      "Photo and video sharing with filters",
      "Stories with 24-hour expiration",
      "User profiles with customizable themes",
      "Push notifications for interactions",
      "Advanced camera features and editing",
      "Social networking (follow, like, comment)",
      "Cross-platform compatibility (iOS/Android)",
    ],
    challenges: [
      "Implementing real-time features across mobile platforms",
      "Optimizing image and video processing",
      "Managing complex state in a mobile environment",
      "Ensuring smooth performance on various devices",
    ],
    learnings: [
      "React Native development best practices",
      "Mobile-specific UI/UX patterns",
      "Real-time mobile application architecture",
      "Cross-platform development strategies",
    ],
  },
  "ai-chat-bot": {
    id: 5,
    title: "AI Chat Bot",
    slug: "ai-chat-bot",
    description:
      "An intelligent chatbot powered by machine learning and natural language processing, designed to provide customer support and automated assistance.",
    shortDesc: "AI-powered customer service bot",
    images: [
      "/placeholder.svg?height=600&width=800&text=Chat+Interface",
      "/placeholder.svg?height=600&width=800&text=Admin+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Analytics",
      "/placeholder.svg?height=600&width=800&text=Training+Data",
    ],
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "OpenAI", "PostgreSQL", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "AI/ML",
    featured: true,
    date: "2024-05-12",
    client: "Tech Corporation",
    duration: "4 months",
    features: [
      "Natural language understanding and processing",
      "Context-aware conversation handling",
      "Multi-language support",
      "Integration with customer support systems",
      "Analytics dashboard for conversation insights",
      "Continuous learning from interactions",
      "Customizable personality and responses",
      "API integration for third-party services",
    ],
    challenges: [
      "Training the model for domain-specific conversations",
      "Handling ambiguous user inputs effectively",
      "Scaling the system for high concurrent users",
      "Maintaining conversation context across sessions",
    ],
    learnings: [
      "Machine learning model training and deployment",
      "Natural language processing techniques",
      "Building scalable AI applications",
      "Integration of AI services with web applications",
    ],
  },
  "portfolio-website": {
    id: 6,
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "A modern, animated portfolio website showcasing projects and skills with smooth interactions, responsive design, and engaging user experience.",
    shortDesc: "Animated portfolio with smooth interactions",
    images: [
      "/placeholder.svg?height=600&width=800&text=Homepage",
      "/placeholder.svg?height=600&width=800&text=About+Page",
      "/placeholder.svg?height=600&width=800&text=Projects",
      "/placeholder.svg?height=600&width=800&text=Contact",
    ],
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Vercel"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Frontend",
    featured: true,
    date: "2024-06-01",
    client: "Personal Project",
    duration: "1 month",
    features: [
      "Smooth scroll animations and transitions",
      "Interactive cursor effects",
      "Responsive design for all devices",
      "Dark theme with gradient accents",
      "Project showcase with detailed views",
      "Contact form with email integration",
      "SEO optimization and performance",
      "Modern design with clean aesthetics",
    ],
    challenges: [
      "Creating smooth animations without performance issues",
      "Implementing complex cursor interactions",
      "Optimizing for various screen sizes",
      "Balancing visual appeal with loading speed",
    ],
    learnings: [
      "Advanced Framer Motion animation techniques",
      "Performance optimization for animated websites",
      "Modern CSS techniques and Tailwind utilities",
      "Next.js best practices for static sites",
    ],
  },
  "blog-platform": {
    id: 7,
    title: "Blog Platform",
    slug: "blog-platform",
    description:
      "A comprehensive content management system for bloggers with markdown support, SEO optimization, and user-friendly editing interface.",
    shortDesc: "CMS with markdown support and SEO optimization",
    images: [
      "/placeholder.svg?height=600&width=800&text=Blog+Homepage",
      "/placeholder.svg?height=600&width=800&text=Editor",
      "/placeholder.svg?height=600&width=800&text=Dashboard",
    ],
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Full-Stack",
    featured: false,
    date: "2024-07-15",
    client: "Content Creator",
    duration: "2 months",
    features: [
      "Rich markdown editor with live preview",
      "SEO optimization tools",
      "Tag and category management",
      "Comment system with moderation",
      "Analytics and performance tracking",
      "Social media integration",
      "Responsive reading experience",
      "Admin dashboard for content management",
    ],
    challenges: [
      "Creating a user-friendly markdown editor",
      "Implementing comprehensive SEO features",
      "Managing complex content relationships",
      "Optimizing for search engine visibility",
    ],
    learnings: [
      "Content management system architecture",
      "SEO best practices for blogs",
      "MDX integration and customization",
      "Database design for content platforms",
    ],
  },
  "expense-tracker": {
    id: 8,
    title: "Expense Tracker",
    slug: "expense-tracker",
    description:
      "A personal finance management application that helps users track expenses, set budgets, and gain insights into their spending habits.",
    shortDesc: "Track expenses with beautiful charts and insights",
    images: [
      "/placeholder.svg?height=600&width=800&text=Dashboard",
      "/placeholder.svg?height=600&width=800&text=Expenses",
      "/placeholder.svg?height=600&width=800&text=Charts",
    ],
    technologies: ["React", "Chart.js", "LocalStorage", "Material-UI", "Date-fns"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "Frontend",
    featured: false,
    date: "2024-08-20",
    client: "Personal Project",
    duration: "3 weeks",
    features: [
      "Expense categorization and tagging",
      "Budget setting and tracking",
      "Visual charts and spending insights",
      "Monthly and yearly reports",
      "Export data to CSV",
      "Offline functionality with local storage",
      "Responsive design for mobile use",
      "Dark and light theme options",
    ],
    challenges: [
      "Creating intuitive data visualization",
      "Implementing efficient local storage",
      "Designing user-friendly input forms",
      "Calculating complex financial metrics",
    ],
    learnings: [
      "Data visualization with Chart.js",
      "Local storage management strategies",
      "Financial application design patterns",
      "User experience for data-heavy applications",
    ],
  },
}

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { startTransition } = usePageTransition()
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <CursorFollower />
      <HamburgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} onNavigate={startTransition} />

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="fixed top-6 left-6 z-50">
        <button
          onClick={() => {
            startTransition()
            setTimeout(() => window.history.back(), 300)
          }}
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Projects</span>
        </button>
      </motion.div>

      {/* Hero Section */}
      <section className="pt-20 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6">{project.title}</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">{project.description}</p>
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-4 gap-6 mb-12"
          >
            <div className="text-center">
              <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-400" />
              <p className="text-sm text-gray-400">Date</p>
              <p className="font-light">{new Date(project.date).toLocaleDateString()}</p>
            </div>
            <div className="text-center">
              <User className="w-6 h-6 mx-auto mb-2 text-purple-400" />
              <p className="text-sm text-gray-400">Client</p>
              <p className="font-light">{project.client}</p>
            </div>
            <div className="text-center">
              <Tag className="w-6 h-6 mx-auto mb-2 text-pink-400" />
              <p className="text-sm text-gray-400">Category</p>
              <p className="font-light">{project.category}</p>
            </div>
            <div className="text-center">
              <div className="w-6 h-6 mx-auto mb-2 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-black text-xs font-bold">⏱</span>
              </div>
              <p className="text-sm text-gray-400">Duration</p>
              <p className="font-light">{project.duration}</p>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-4 mb-16"
          >
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View Code</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <img
              src={project.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          <div className="flex justify-center space-x-4 mb-16">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentImageIndex ? "border-white" : "border-gray-600 hover:border-gray-400"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Technologies */}
          <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-light mb-6">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-light mb-6">Key Features</h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-light mb-6">Challenges</h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Learnings */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-light mb-6">What I Learned</h3>
            <ul className="space-y-3">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{learning}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
