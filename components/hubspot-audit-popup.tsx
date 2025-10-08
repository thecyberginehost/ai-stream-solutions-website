"use client"

import { useEffect } from "react"
import { X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HubSpotAuditPopupProps {
  isOpen: boolean
  onClose: () => void
}

function HubSpotAuditPopup({ isOpen, onClose }: HubSpotAuditPopupProps) {
  useEffect(() => {
    if (isOpen) {
      // Load HubSpot script when popup opens
      const script = document.createElement("script")
      script.src = "https://js-na2.hsforms.net/forms/embed/242691539.js"
      script.defer = true
      script.onload = () => {
        // Script loaded, form should render
        console.log("HubSpot script loaded")
      }

      // Check if script is already loaded
      const existingScript = document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/242691539.js"]')
      if (!existingScript) {
        document.head.appendChild(script)
      }

      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden"
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = "unset"
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Free Automation Audit</h2>
            <p className="text-gray-600 mt-1">Discover your automation opportunities</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 hover:bg-gray-100">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              Get a complete diagnostic of your business operations and see exactly where automation will deliver ROI.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Identify all repetitive workflows suitable for automation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Calculate time and resource savings</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Receive an actionable roadmap for automation roll-out</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-start">
              <Shield className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-green-800 mb-1">Your Data is Protected</p>
                <p className="text-sm text-green-700">
                  Each client receives their own private cloud server and isolated Docker container. Your business data
                  never shares infrastructure with other clients.
                </p>
              </div>
            </div>
          </div>

          {/* HubSpot Form Container */}
          <div className="hubspot-form-container">
            <div
              className="hs-form-frame"
              data-region="na2"
              data-form-id="b3256371-508f-4d68-a99e-eb1cc2dcc674"
              data-portal-id="242691539"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HubSpotAuditPopup
