"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function ThirdPartyScripts() {
  const pathname = usePathname()
  const [hasInteracted, setHasInteracted] = useState(false)

  // Load non-critical third-party scripts after user interaction or delay
  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true)

      // Remove event listeners after first interaction
      document.removeEventListener("click", handleInteraction)
      document.removeEventListener("scroll", handleInteraction)
    }

    // Add event listeners for user interaction
    document.addEventListener("click", handleInteraction)
    document.addEventListener("scroll", handleInteraction)

    // Fallback: Load scripts after 5 seconds even without interaction
    const timer = setTimeout(() => {
      setHasInteracted(true)
    }, 5000)

    return () => {
      document.removeEventListener("click", handleInteraction)
      document.removeEventListener("scroll", handleInteraction)
      clearTimeout(timer)
    }
  }, [])

  // Only render scripts after user interaction
  if (!hasInteracted) return null

  return (
    <>
      {/* Add any third-party scripts here that should load after interaction */}
      {/* Example: Analytics, chat widgets, etc. */}
      {pathname.includes("/blog") && <script async defer src="https://platform.twitter.com/widgets.js" />}
    </>
  )
}
