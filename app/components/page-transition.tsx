"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import LoadingAnimation from "./loading-animation"

interface PageTransitionContextType {
  startTransition: () => void
  isTransitioning: boolean
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  startTransition: () => {},
  isTransitioning: false,
})

export const usePageTransition = () => useContext(PageTransitionContext)

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showContent, setShowContent] = useState(true)
  const pathname = usePathname()

  const startTransition = () => {
    setIsTransitioning(true)
    setShowContent(false)
  }

  const handleTransitionComplete = () => {
    setShowContent(true)
  }

  // Trigger transition on route change
  useEffect(() => {
    setIsTransitioning(true)
    setShowContent(false)

    // Auto complete transition after animation duration
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 1500) // Match animation duration

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <PageTransitionContext.Provider value={{ startTransition, isTransitioning }}>
      <LoadingAnimation isLoading={isTransitioning} onComplete={handleTransitionComplete} />
      {showContent && children}
    </PageTransitionContext.Provider>
  )
}
