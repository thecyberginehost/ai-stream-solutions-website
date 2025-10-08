"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "AI Stream Solutions transformed our client onboarding process. What used to take 3 days now happens in hours. The automation infrastructure they built is rock-solid and has scaled perfectly with our growth.",
    author: "Sarah M.",
    role: "VP of Operations",
    company: "SaaS Platform ($12M ARR)",
  },
  {
    quote:
      "We were drowning in manual data entry across 5 different systems. Their team built a seamless integration that syncs everything in real-time. We've reclaimed 30+ hours per week and virtually eliminated data errors.",
    author: "James K.",
    role: "CTO",
    company: "401(k) Advisory Firm",
  },
  {
    quote:
      "The private infrastructure approach was exactly what we needed for compliance. Every workflow is isolated, secure, and fully documented. Our auditors were impressed with the security controls.",
    author: "Michael R.",
    role: "Chief Compliance Officer",
    company: "Financial Services Company",
  },
  {
    quote:
      "I was skeptical about automation, but their team made it painless. They audited our processes, identified quick wins, and delivered ROI in the first month. Now we're automating everything we can.",
    author: "Lisa T.",
    role: "Founder & CEO",
    company: "Digital Marketing Agency",
  },
  {
    quote:
      "We already had Zapier workflows, but they were breaking constantly. AI Stream Solutions rebuilt everything with proper error handling and monitoring. We haven't had a single failure in 6 months.",
    author: "David P.",
    role: "Director of Revenue Operations",
    company: "B2B SaaS Startup",
  },
  {
    quote:
      "The AI-powered chatbot they built handles 60% of our support inquiries automatically. Our team now focuses on complex issues while the bot handles the routine stuff. Customer satisfaction actually went up.",
    author: "Amanda W.",
    role: "Head of Customer Success",
    company: "E-commerce Platform",
  },
  {
    quote:
      "Their MASP approach is a game-changer. We don't have to hire automation engineers or worry about maintenance. They handle everything, and our systems just work. It's like having an entire automation team on retainer.",
    author: "Robert H.",
    role: "COO",
    company: "Healthcare Technology Company",
  },
  {
    quote:
      "We needed to automate our sales pipeline but didn't want to rip out our existing CRM. They integrated everything seamlessly—lead scoring, follow-ups, reporting—all running in the background. Zero disruption.",
    author: "Jennifer L.",
    role: "VP of Sales",
    company: "Enterprise Software Vendor",
  },
  {
    quote:
      "The ROI was immediate. In the first quarter alone, we saved over $40,000 in labor costs and reduced our sales cycle by 18%. The automation infrastructure pays for itself many times over.",
    author: "Thomas B.",
    role: "CFO",
    company: "Professional Services Firm",
  },
  {
    quote:
      "What impressed me most was their strategic thinking. They didn't just automate what we asked for—they redesigned our entire workflow to be more efficient. We're operating at a level we couldn't have reached manually.",
    author: "Rachel S.",
    role: "Chief Operating Officer",
    company: "Real Estate Investment Trust",
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000) // Change testimonial every 6 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToIndex = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Card className="border-2 border-blue-100 shadow-xl">
        <CardContent className="p-8 md:p-12 relative">
          <Quote className="h-12 w-12 text-blue-200 absolute top-6 left-6 opacity-50" />

          <div className="relative z-10 min-h-[240px] flex flex-col justify-between">
            <blockquote className="text-lg md:text-xl text-slate-700 italic mb-6 leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>

            <div className="space-y-1">
              <div className="font-semibold text-slate-900 text-lg">{currentTestimonial.author}</div>
              <div className="text-blue-600 font-medium">{currentTestimonial.role}</div>
              <div className="text-slate-600">{currentTestimonial.company}</div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full border-slate-300 hover:border-blue-600 hover:bg-blue-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-slate-300 hover:border-blue-600 hover:bg-blue-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
