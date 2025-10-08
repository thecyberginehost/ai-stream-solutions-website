"use client"

import { useEffect, useRef } from "react"
import { Calendar, Clock, CheckCircle, Users, Zap, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SchedulePage() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Schedule Your Free Discovery Call</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Book a 30-minute consultation to discover how enterprise workflow automation can streamline your operations, save time, and
              accelerate your business growth. We'll show you where AI adds value and where standard automation is the better choice.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-blue-600 mr-2" />
                30 minutes
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-blue-600 mr-2" />
                One-on-one consultation
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                100% Free
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Calendar */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <div className="bg-blue-600 text-white p-6 rounded-t-lg">
                    <h2 className="text-2xl font-semibold mb-2">Select Your Preferred Time</h2>
                    <p className="text-blue-100">Choose a time that works best for your schedule</p>
                  </div>
                  <div className="relative">
                    <div
                      className="calendly-inline-widget"
                      data-url="https://calendly.com/aamore-aistreamsolutions/30min?hide_gdpr_banner=1"
                      style={{ minWidth: "320px", height: "700px" }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* What to Expect */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Zap className="w-5 h-5 text-blue-600 mr-2" />
                    What to Expect
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Business process assessment
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Automation opportunity identification
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Custom strategy recommendations
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      ROI projections and timeline
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preparation Tips */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Come Prepared</h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="text-sm">To maximize our time together, please have ready:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        List of repetitive tasks
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        Current tools and software
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        Business growth goals
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        Current pain points
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* AI Assistant Notice */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Pre-Call Preparation</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    After booking, our AI assistant will contact you via call or SMS within 24 hours to gather details
                    about your business needs.
                  </p>
                  <p className="text-sm text-blue-700 font-medium">
                    This ensures we maximize the value of your discovery call!
                  </p>
                </CardContent>
              </Card>

              {/* Support */}
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">Having trouble with scheduling? We're here to help.</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="mailto:support@aistreamsolutions.com">Contact Support</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join hundreds of businesses that have automated their operations and accelerated their growth with our
                AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/services">View Our Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/process">See How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
