"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { openBookingModal } from "@/lib/booking-utils"

interface ClientButtonProps {
  className?: string
  text?: string
}

export function ClientButton({ className, text = "Book a Strategy Call" }: ClientButtonProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <Button
        size="lg"
        variant="secondary"
        className={`px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all ${className || ""}`}
      >
        {text}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      size="lg"
      variant="secondary"
      className={`px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all ${className || ""}`}
      onClick={openBookingModal}
    >
      {text}
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  )
}

// Keep default export for backward compatibility
export default ClientButton
