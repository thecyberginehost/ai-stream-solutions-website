"use client"

import { useEffect, useState } from "react"
import { X, TrendingUp, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ExitIntentPopupProps {
  onOpenROICalculator: () => void
  onOpenChecklist: () => void
}

export default function ExitIntentPopup({ onOpenROICalculator, onOpenChecklist }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("exitIntentShown")
    if (hasSeenPopup) {
      setHasShown(true)
      return
    }

    let mouseLeaveTimer: NodeJS.Timeout

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        mouseLeaveTimer = setTimeout(() => {
          setIsVisible(true)
          setHasShown(true)
          sessionStorage.setItem("exitIntentShown", "true")
        }, 200)
      }
    }

    const handleMouseEnter = () => {
      if (mouseLeaveTimer) {
        clearTimeout(mouseLeaveTimer)
      }
    }

    // Also show after 30 seconds if user hasn't left
    const timeoutId = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem("exitIntentShown", "true")
      }
    }, 30000)

    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      clearTimeout(timeoutId)
      if (mouseLeaveTimer) clearTimeout(mouseLeaveTimer)
    }
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleROIClick = () => {
    setIsVisible(false)
    onOpenROICalculator()
  }

  const handleChecklistClick = () => {
    setIsVisible(false)
    onOpenChecklist()
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-300">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <Card className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 animate-in slide-in-from-top-4 duration-500">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="absolute top-4 right-4 h-8 w-8 p-0 hover:bg-gray-100 z-10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Wait! Before You Go...</h2>
            <p className="text-lg text-gray-600">
              See exactly how much time and money automation can save your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* ROI Calculator Card */}
            <Card
              className="p-6 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 cursor-pointer hover:shadow-lg transition-all hover:scale-105"
              onClick={handleROIClick}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">ROI Calculator</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Calculate your exact savings with our interactive ROI tool
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Calculate Now
                </Button>
              </div>
            </Card>

            {/* Checklist Card */}
            <Card
              className="p-6 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 cursor-pointer hover:shadow-lg transition-all hover:scale-105"
              onClick={handleChecklistClick}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-100 p-3 rounded-full mb-3">
                  <Gift className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Free Checklist</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Get 30+ automation ideas you can implement today
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Get Checklist
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-3">
              Join 500+ businesses already saving 20+ hours per week
            </p>
            <Button variant="ghost" onClick={handleClose} className="text-gray-400 hover:text-gray-600">
              No thanks, I'll figure it out myself
            </Button>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-3xl opacity-20 pointer-events-none" />
      </Card>
    </div>
  )
}
