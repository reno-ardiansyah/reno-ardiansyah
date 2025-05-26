"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import CircularButton from "./circular-button"
import Link from "next/link"

export default function Contact() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@example.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "Jakarta, Indonesia" },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div ref={ref} className="h-screen overflow-hidden flex items-center px-6">
      <motion.div style={{ y }} className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-light mb-12 text-center"
        >
          Let's Connect
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-light mb-6"
              whileInView={{ x: [0, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              Get in touch
            </motion.h3>
            <motion.p
              className="text-gray-400 mb-8 leading-relaxed"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just
              want to chat about technology, feel free to reach out.
            </motion.p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-center space-x-4 cursor-pointer"
                >
                  <motion.div
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#374151",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-sm text-gray-400 mb-4">Follow me on</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      delay: 1 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      backgroundColor: "#374151",
                      transition: { duration: 0.2 },
                    }}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300"
                    data-cursor-hover
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              className="bg-gray-900/50 p-8 rounded-lg"
              whileInView={{
                scale: [0.9, 1],
                rotateY: [5, 0],
              }}
              transition={{ duration: 0.8 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.h4
                className="text-xl font-light mb-6"
                whileInView={{ y: [20, 0] }}
                transition={{ duration: 0.5 }}
              >
                Quick Contact
              </motion.h4>
              <motion.p
                className="text-gray-400 mb-8"
                whileInView={{ opacity: [0, 1] }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Ready to start a conversation? Click below to send me a message directly.
              </motion.p>

              <motion.div whileInView={{ y: [30, 0] }} transition={{ delay: 0.5, duration: 0.6 }}>
                <Link href="/contact">
                  <CircularButton text="Send Message" hoverText="let's talk" onClick={() => {}} variant="filled" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
