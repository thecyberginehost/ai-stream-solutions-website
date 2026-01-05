"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Users,
  ArrowRight,
  CheckCircle,
  Server,
  Shield,
  Clock,
  Phone,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Automation Solutions That Scale With You
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Whether you're a local business looking to save time or an enterprise needing managed infrastructure, we've got you covered.
          </p>
        </div>
      </section>

      {/* Two-Track Cards */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Local Business Card */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Local Business</h2>
              </div>

              <p className="text-lg text-slate-600 mb-6">
                Ready-to-deploy automations by industry
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Dental & Medical
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Home Services
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Legal & Professional
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Real Estate
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Manufacturing
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  And 20+ more industries
                </li>
              </ul>

              <div className="border-t border-slate-200 pt-6 mb-6">
                <p className="text-slate-600 mb-2">Starting at</p>
                <p className="text-3xl font-bold text-blue-600">$997<span className="text-lg text-slate-500">/month</span></p>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg" asChild>
                <Link href="/services/local" className="inline-flex items-center justify-center">
                  Browse Industries <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Enterprise Card */}
            <div className="bg-slate-900 border-2 border-slate-700 rounded-xl p-8 text-white hover:border-blue-500 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Enterprise</h2>
              </div>

              <p className="text-lg text-slate-300 mb-6">
                Private infrastructure + full management
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-200">
                  <Server className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                  Dedicated n8n instance
                </li>
                <li className="flex items-center text-slate-200">
                  <Shield className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                  Compliance support
                </li>
                <li className="flex items-center text-slate-200">
                  <Clock className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                  SLA guarantees
                </li>
                <li className="flex items-center text-slate-200">
                  <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                  Custom development
                </li>
              </ul>

              <div className="border-t border-slate-700 pt-6 mb-6">
                <p className="text-slate-400 mb-2">Pricing</p>
                <p className="text-3xl font-bold text-white">Custom</p>
              </div>

              <Button className="w-full bg-white text-slate-900 hover:bg-slate-100" size="lg" asChild>
                <Link href="/services/enterprise" className="inline-flex items-center justify-center">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Not sure which is right for you?
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            Book a free strategy call and we'll help you figure out the best path for your business.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link href="/schedule">Book Strategy Call</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
