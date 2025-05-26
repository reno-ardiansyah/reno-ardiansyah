"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import SkillsRadial from "../components/skills-radial"
import GitHubContributions from "../components/github-contributions"
import HamburgerMenu from "../components/hamburger-menu"
import CursorFollower from "../components/cursor-follower"
import { useState } from "react"
import { usePageTransition } from "../components/page-transition"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { startTransition } = usePageTransition()

  return (
    <div className="min-h-screen bg-black text-white">
      <CursorFollower />
      <HamburgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} onNavigate={startTransition} />

      {/* Back Button */}
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="fixed top-6 left-6 z-50">
        <button
          onClick={() => {
            startTransition()
            setTimeout(() => window.history.back(), 300)
          }}
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </button>
      </motion.div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full blur-2xl" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              className="w-80 h-80 mx-auto md:mx-0 mb-8 rounded-2xl overflow-hidden bg-gray-800 shadow-2xl"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/placeholder.svg?height=320&width=320" alt="Profile" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-light mb-6"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              About
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Reno Ardiansyah
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-400 leading-relaxed mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              I'm a passionate full-stack developer with over 5 years of experience in creating innovative digital
              solutions. My journey in technology started with curiosity and has evolved into a deep love for crafting
              beautiful, functional, and user-centered applications.
            </motion.p>

            <motion.p
              className="text-lg text-gray-500 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              I specialize in React, Next.js, TypeScript, and modern web technologies. When I'm not coding, you can find
              me exploring new technologies, contributing to open-source projects, or sharing knowledge with the
              developer community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* GitHub Contributions */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            GitHub Activity
          </motion.h2>
          <GitHubContributions />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Technical Skills
          </motion.h2>
          <SkillsRadial />
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-12 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Experience
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                year: "2023 - Present",
                title: "Senior Full-Stack Developer",
                company: "Tech Company",
                description: "Leading development of modern web applications using React, Next.js, and Node.js.",
              },
              {
                year: "2021 - 2023",
                title: "Full-Stack Developer",
                company: "Digital Agency",
                description: "Developed and maintained multiple client projects with focus on performance and UX.",
              },
              {
                year: "2019 - 2021",
                title: "Frontend Developer",
                company: "Startup",
                description: "Built responsive web applications and collaborated with design teams.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row gap-6 p-6 bg-gray-900/30 rounded-lg"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="md:w-48 flex-shrink-0">
                  <span className="text-blue-400 font-light">{item.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-2">{item.company}</p>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
