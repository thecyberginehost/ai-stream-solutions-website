"use client"

import { useState, useEffect } from "react"
import TestimonialCard from "@/components/testimonial-card"

export default function TestimonialSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote:
        "AI Stream Solutions has completely transformed our sales process. We're closing deals faster and more efficiently than ever before.",
      author: "John Smith",
      company: "Acme Corp",
      image: "https://source.unsplash.com/50x50/?face",
    },
    {
      quote:
        "The automation suite is a game-changer. It's like having an extra team member dedicated to nurturing leads and closing deals.",
      author: "Alice Johnson",
      company: "Beta Industries",
      image: "https://source.unsplash.com/50x50/?face",
    },
    {
      quote:
        "We've seen a significant increase in conversion rates since implementing AI Stream Solutions. The personalized follow-ups are incredibly effective.",
      author: "Bob Williams",
      company: "Gamma Solutions",
      image: "https://source.unsplash.com/50x50/?face",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
