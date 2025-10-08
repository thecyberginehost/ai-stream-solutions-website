"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

interface DirectBookingButtonProps {
  text?: string
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export default function DirectBookingButton({
  text = "Book a Free Consultation",
  className = "",
  variant = "default",
  size = "default",
}: DirectBookingButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    // Try modal first, fallback to new window
    try {
      if (typeof window !== "undefined") {
        const event = new CustomEvent("openBookingModal")
        window.dispatchEvent(event)
      }
    } catch (error) {
      console.error("Error opening booking modal:", error)
      // Fallback: open in new window
      window.open("https://meetings-na2.hubspot.com/aamore", "_blank")
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="flex items-center">
        {text}
        <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
      </span>
    </Button>
  )
}
