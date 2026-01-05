"use client"

import { useEffect, useRef } from "react"

interface HubSpotBookingEmbedProps {
  className?: string
}

export default function HubSpotBookingEmbed({ className = "" }: HubSpotBookingEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    if (containerRef.current && !scriptLoadedRef.current) {
      // Create the meetings container
      containerRef.current.innerHTML = `
        <div class="meetings-iframe-container" data-src="https://meetings-na2.hubspot.com/aamore?embed=true"></div>
      `

      // Load the HubSpot script
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
      script.async = true

      script.onload = () => {
        console.log("HubSpot meetings script loaded successfully")
        scriptLoadedRef.current = true
      }

      script.onerror = () => {
        console.error("Failed to load HubSpot meetings script")
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div style="padding: 20px; text-align: center; border: 1px solid #e5e7eb; border-radius: 8px;">
              <p style="margin-bottom: 16px;">Unable to load booking calendar. Please visit:</p>
              <a href="https://meetings-na2.hubspot.com/aamore" target="_blank" rel="noopener noreferrer" 
                 style="color: #2563eb; text-decoration: underline;">
                https://meetings-na2.hubspot.com/aamore
              </a>
            </div>
          `
        }
      }

      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className={`w-full ${className}`}>
      <div ref={containerRef} style={{ minHeight: "600px" }}>
        {/* HubSpot meetings embed will be loaded here */}
        <div className="flex items-center justify-center h-full min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading booking calendar...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
