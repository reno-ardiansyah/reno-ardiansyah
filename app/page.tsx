"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import HamburgerMenu from "./components/hamburger-menu"
import CursorFollower from "./components/cursor-follower"
import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import ScrollProgress from "./components/scroll-progress"
import { usePageTransition } from "./components/page-transition"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { startTransition } = usePageTransition()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <div className="bg-black text-white">
      <CursorFollower />
      <HamburgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} onNavigate={startTransition} />
      <ScrollProgress />

      {/* Full Screen Sections with Snap Scroll */}
      <main className="scroll-container">
        <section id="home" className="section-snap h-screen overflow-hidden">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="h-full">
            <Hero />
          </motion.div>
        </section>

        <section id="about" className="section-snap h-screen overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full"
          >
            <About />
          </motion.div>
        </section>

        <section id="projects" className="section-snap h-screen overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full"
          >
            <Projects />
          </motion.div>
        </section>

        <section id="contact" className="section-snap h-screen overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full"
          >
            <Contact />
          </motion.div>
        </section>
      </main>
    </div>
  )
}
