"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface BusinessAuditPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function BusinessAuditPopup({ isOpen, onClose }: BusinessAuditPopupProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Load the script when the component mounts
    if (typeof window !== "undefined") {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = "https://services.leadconnectorhq.com/prospecting/client/widget_script.js"
      script.async = true
      document.body.appendChild(script)

      return () => {
        // Clean up the script when the component unmounts
        document.body.removeChild(script)
      }
    }
  }, [])

  if (!isMounted) return null

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl relative max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Free Business Audit</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-grow overflow-auto p-1">
          <iframe
            id="prospecting-widget"
            src="https://services.leadconnectorhq.com/prospecting/widgets/load/6807b89e69ab993f26ffb623"
            frameBorder="0"
            style={{ display: "block", width: "100%", height: "80vh" }}
          ></iframe>
        </div>
      </div>
    </div>
  )
}
