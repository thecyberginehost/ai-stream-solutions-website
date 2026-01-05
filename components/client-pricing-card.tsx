"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ClientPricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export default function ClientPricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  popular = false,
}: ClientPricingCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden ${popular ? "border-2 border-blue-500 relative" : "border border-slate-200"} flex flex-col h-full`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium">Popular</div>
      )}

      <div className={`p-6 ${popular ? "bg-blue-50" : ""}`}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-slate-500 ml-1">{period}</span>
        </div>
        <p className="text-slate-600 mb-6">{description}</p>
      </div>

      <div className="p-6 border-t border-slate-100 flex-grow flex flex-col">
        <ul className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full mt-auto ${popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
          onClick={() => window.dispatchEvent(new CustomEvent("openBookingModal"))}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
