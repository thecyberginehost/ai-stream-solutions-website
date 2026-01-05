"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
        if (window.scrollY > 1000) {
          setShowScrollTop(true)
        } else {
          setShowScrollTop(false)
        }
      } else {
        setIsVisible(false)
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isMounted || !isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <Button
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all animate-float"
        asChild
      >
        <Link href="/schedule">Book Strategy Call</Link>
      </Button>
    </div>
  )
}
