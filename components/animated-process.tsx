"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, LineChart, BarChart } from "lucide-react"

export default function AnimatedProcess() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 2 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      title: "Capture Leads",
      description: "Automatically capture and qualify leads from multiple sources.",
      icon: <CheckCircle className="h-12 w-12 text-blue-500" />,
    },
    {
      title: "Nurture Prospects",
      description: "Engage prospects with personalized, automated follow-ups.",
      icon: <LineChart className="h-12 w-12 text-blue-500" />,
    },
    {
      title: "Close Deals",
      description: "Convert prospects into customers with targeted messaging.",
      icon: <BarChart className="h-12 w-12 text-blue-500" />,
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg border ${
              activeStep === index ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"
            }`}
            animate={{
              scale: activeStep === index ? 1.05 : 1,
              boxShadow:
                activeStep === index
                  ? "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)"
                  : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center text-center">
              {step.icon}
              <h3 className="mt-4 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
