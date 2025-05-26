"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"

interface HamburgerMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  onNavigate?: () => void
}

export default function HamburgerMenu({ isOpen, setIsOpen, onNavigate }: HamburgerMenuProps) {
  const router = useRouter()

  const menuItems = [
    { id: "home", label: "HOME", href: "/" },
    { id: "about", label: "ABOUT", href: "/about" },
    { id: "projects", label: "PROJECTS", href: "/projects" },
    { id: "contact", label: "CONTACT", href: "/contact" },
  ]

  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
    { label: "GitHub", href: "https://github.com", icon: "gh" },
    { label: "Email", href: "mailto:hello@example.com", icon: "@" },
  ]

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    if (onNavigate) {
      onNavigate()
    }
    // Small delay to allow menu close animation
    setTimeout(() => {
      router.push(href)
    }, 300)
  }

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
        data-cursor-hover
      >
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6" />}
        </motion.div>
      </motion.button>

      {/* Portfolio Logo - Nama User */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-6 left-6 z-50 text-xl font-light"
      >
        {/* Reno Ardiansyah */}
      </motion.div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 flex flex-col"
          >
            {/* Close Button */}
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm font-light text-black hover:text-gray-600 transition-colors duration-300"
              >
                CLOSE
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex flex-col justify-between p-12 md:p-20">
              {/* Navigation Items */}
              <nav className="flex-1 flex flex-col justify-center">
                <motion.ul className="space-y-8">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <button onClick={() => handleNavigation(item.href)}>
                        <motion.div
                          className="text-4xl md:text-6xl lg:text-8xl font-light text-black hover:text-gray-600 transition-colors duration-300 cursor-pointer"
                          whileHover={{ x: 20 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {item.label}
                        </motion.div>
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              {/* Bottom Section */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-end justify-between"
              >
                {/* Name */}
                <div>
                  <div className="w-full h-px bg-black mb-6"></div>
                  <h2 className="text-2xl md:text-4xl font-light text-black mb-4">RENO ARDIANSYAH</h2>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                        className="w-10 h-10 bg-black text-white flex items-center justify-center text-sm font-bold hover:bg-gray-800 transition-colors duration-300"
                        data-cursor-hover
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="hidden md:block"
                >
                  <div className="w-20 h-20 bg-gray-200 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
