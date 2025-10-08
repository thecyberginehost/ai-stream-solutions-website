"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { X } from "lucide-react"

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    const handleOpenModal = () => {
      console.log("Opening HubSpot booking modal")
      setIsOpen(true)
    }

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }

    window.addEventListener("openBookingModal", handleOpenModal)
    document.addEventListener("keydown", handleEscapeKey)

    return () => {
      window.removeEventListener("openBookingModal", handleOpenModal)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isOpen])

  const handleClose = useCallback(() => {
    console.log("Closing HubSpot booking modal")
    setIsOpen(false)
  }, [])

  const handleOutsideClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleClose()
      }
    },
    [handleClose],
  )

  // Load HubSpot meetings when modal opens
  useEffect(() => {
    if (isOpen && containerRef.current) {
      loadHubSpotMeetingsEmbed()
    }
  }, [isOpen])

  const loadHubSpotMeetingsEmbed = () => {
    if (!containerRef.current) return

    // Create the meetings container
    containerRef.current.innerHTML = `
      <div class="meetings-iframe-container" data-src="https://meetings-na2.hubspot.com/aamore?embed=true" style="width: 100%; height: 100%; min-height: 600px;"></div>
    `

    // Load script if not already loaded
    if (!scriptLoadedRef.current && !document.querySelector('script[src*="MeetingsEmbedCode.js"]')) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
      script.async = true

      script.onload = () => {
        console.log("HubSpot meetings script loaded in modal")
        scriptLoadedRef.current = true
      }

      script.onerror = () => {
        console.error("Failed to load HubSpot meetings script in modal")
        // Fallback: show link to open in new window
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div style="padding: 40px; text-align: center;">
              <h3 style="margin-bottom: 20px;">Unable to load booking calendar</h3>
              <p style="margin-bottom: 20px;">Please click the button below to open the booking page in a new window:</p>
              <a href="https://meetings-na2.hubspot.com/aamore" target="_blank" rel="noopener noreferrer" 
                 style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500;">
                Open Booking Calendar
              </a>
            </div>
          `
        }
      }

      document.head.appendChild(script)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={handleOutsideClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
          <h2 id="booking-modal-title" className="text-xl font-bold">
            Book a Free Consultation
          </h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-blue-100 transition-colors p-2 rounded-full hover:bg-blue-700"
            aria-label="Close booking modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="relative flex-grow overflow-auto" style={{ minHeight: "600px" }}>
          <div ref={containerRef} className="w-full h-full">
            {/* HubSpot meetings embed will be inserted here */}
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading booking calendar...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
