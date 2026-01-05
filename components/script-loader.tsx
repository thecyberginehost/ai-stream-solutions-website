"use client"

import { useEffect } from "react"

export default function ScriptLoader() {
  useEffect(() => {
    // Function to load scripts asynchronously
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script")
        script.src = src
        script.async = true
        script.onload = resolve
        script.onerror = reject
        document.body.appendChild(script)
      })
    }

    // Load non-critical scripts after page load
    const timer = setTimeout(() => {
      // We'll let the booking modal handle Calendly loading
      // Add other non-critical scripts here if needed
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return null
}
