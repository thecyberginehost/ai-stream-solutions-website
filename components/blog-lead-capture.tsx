"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function BlogLeadCapture() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real implementation, you would send this to your email service
    // For now, we'll simulate a successful submission
    setIsSubmitted(true)

    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    })
  }

  if (!isVisible) return null

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8 relative">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      {!isSubmitted ? (
        <>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-slate-700 mb-4">
            Get the latest insights on AI sales automation and strategies to increase your conversions.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              Subscribe
            </Button>
          </form>
        </>
      ) : (
        <div className="text-center py-2">
          <h3 className="text-xl font-bold text-green-600 mb-2">Thank You!</h3>
          <p className="text-slate-700">
            You've been subscribed to our newsletter. We'll keep you updated with the latest insights.
          </p>
        </div>
      )}
    </div>
  )
}
