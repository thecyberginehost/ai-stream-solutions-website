"use client"

import { useEffect } from "react"

export default function HubSpotAuditForm() {
  useEffect(() => {
    // Load HubSpot forms script if not already loaded
    if (!document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/242691539.js"]')) {
      const script = document.createElement("script")
      script.src = "https://js-na2.hsforms.net/forms/embed/242691539.js"
      script.defer = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="w-full">
      <div
        className="hs-form-frame"
        data-region="na2"
        data-form-id="b3256371-508f-4d68-a99e-eb1cc2dcc674"
        data-portal-id="242691539"
      ></div>
    </div>
  )
}
