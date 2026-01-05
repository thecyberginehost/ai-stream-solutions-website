import type { Metadata } from "next"
import { CheckCircle, Calendar, Clock, Mail, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Booking Confirmed - AI Stream Solutions",
  description:
    "Your discovery call has been successfully scheduled. We're excited to discuss how AI automation can transform your business operations.",
  robots: "noindex, nofollow", // Prevent indexing of confirmation pages
}

export default function ConfirmBookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Booking Confirmed! 🎉</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thank you for scheduling your discovery call. We're excited to discuss how AI automation can transform
              your business operations and drive growth.
            </p>
          </div>

          {/* What Happens Next */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                What Happens Next
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Confirmation Email</h3>
                  <p className="text-gray-600 text-sm">
                    You'll receive a calendar invite and confirmation email with meeting details within the next few
                    minutes.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Pre-Call Preparation</h3>
                  <p className="text-gray-600 text-sm">
                    Our AI assistant will contact you via call or SMS within 24 hours to gather details about your
                    business needs and current processes, ensuring we maximize the value of your discovery call.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Discovery Call</h3>
                  <p className="text-gray-600 text-sm">
                    We'll discuss your automation goals and create a custom strategy for your business growth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What We'll Cover */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">What We'll Cover in Your Discovery Call</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Business Assessment</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Current workflow analysis
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Time-consuming task identification
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Growth bottleneck discovery
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Team efficiency evaluation
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Automation Strategy</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Custom automation roadmap
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      ROI projections and timeline
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Technology recommendations
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Implementation strategy
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preparation Tips */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">How to Prepare for Your Call</h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Come prepared with:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />A list of your most
                    time-consuming daily/weekly tasks
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    Information about your current tools and software
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    Your biggest operational challenges and pain points
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    Your business growth goals for the next 6-12 months
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mb-8">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need to Reschedule or Have Questions?</h2>
              <p className="text-gray-600 mb-6">
                No problem! You can reschedule your appointment using the calendar link in your confirmation email, or
                reach out to us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link href="mailto:support@aistreamsolutions.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Support
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/services">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Learn More About Our Services
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              While you wait for your discovery call, explore our automation solutions and see how we've helped other
              businesses transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/features">Explore Automation Features</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Read Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
