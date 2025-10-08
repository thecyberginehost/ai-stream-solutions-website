"use client"

import type React from "react"
import { useEffect, useRef, useCallback } from "react"
import { X } from "lucide-react"

interface CalendlyPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function CalendlyPopup({ isOpen, onClose }: CalendlyPopupProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const scriptLoadedRef = useRef(false)

  // Preload Calendly script on component mount for faster loading
  useEffect(() => {
    if (!scriptLoadedRef.current && !document.querySelector('script[src*="widget.js"]')) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      script.onload = () => {
        scriptLoadedRef.current = true
      }
      document.head.appendChild(script)
    }
  }, [])

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }

    document.addEventListener("keydown", handleEscapeKey)
    return () => document.removeEventListener("keydown", handleEscapeKey)
  }, [isOpen])

  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  const handleOutsideClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleClose()
      }
    },
    [handleClose],
  )

  // Load Calendly when modal opens
  useEffect(() => {
    if (isOpen && containerRef.current) {
      loadCalendlyEmbed()
    }
  }, [isOpen])

  const loadCalendlyEmbed = () => {
    if (!containerRef.current) return

    // Create the Calendly container with full height
    containerRef.current.innerHTML = `
      <div class="calendly-inline-widget" data-url="https://calendly.com/aamore-aistreamsolutions/30min?hide_gdpr_banner=1" style="width: 100%; height: 100%; min-height: 700px;"></div>
    `

    // If script is already loaded, initialize immediately
    if (scriptLoadedRef.current || document.querySelector('script[src*="widget.js"]')) {
      // Script is ready, Calendly should initialize automatically
      return
    }

    // Fallback if script isn't loaded yet
    setTimeout(() => {
      if (!containerRef.current?.querySelector(".calendly-inline-widget iframe")) {
        // Show fallback if Calendly doesn't load
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div style="padding: 40px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center;">
              <h3 style="margin-bottom: 20px; color: #1f2937;">Unable to load booking calendar</h3>
              <p style="margin-bottom: 20px; color: #6b7280;">Please click the button below to open the booking page in a new window:</p>
              <a href="https://calendly.com/aamore-aistreamsolutions/30min" target="_blank" rel="noopener noreferrer" 
                 style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; max-width: 300px; margin: 0 auto;">
                Open Booking Calendar
              </a>
            </div>
          `
        }
      }
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/50"
      onClick={handleOutsideClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendly-modal-title"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl h-[95vh] max-h-[900px] overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 bg-blue-600 text-white flex-shrink-0">
          <h2 id="calendly-modal-title" className="text-xl font-bold">
            Book Your Consultation
          </h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-blue-100 transition-colors p-2 rounded-full hover:bg-blue-700"
            aria-label="Close booking modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden">
          <div ref={containerRef} className="w-full h-full">
            {/* Calendly embed will be inserted here */}
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
