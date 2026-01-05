"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Clock,
  MessageSquare,
  Shield,
  Building2,
  Stethoscope,
  Briefcase,
  Home,
  Factory,
  ShoppingBag,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import HomeStructuredData from "@/components/home-structured-data"
import GoogleVerification from "@/components/google-verification"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <GoogleVerification />
      <HomeStructuredData />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Automate Your Business. Reclaim Your Time.
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Enterprise-grade workflow automation for local businesses in North Jersey—without the enterprise price tag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6" asChild>
              <Link href="/schedule">Book a Strategy Call</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              asChild
            >
              <Link href="/process">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="w-full bg-slate-100 py-4 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-slate-700 font-medium">
            Built on 17 years of enterprise IT and security experience
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              We Design, Deploy, and Manage Your Automation Ecosystem
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto">
              AI Stream Solutions is a Managed Automation Service Provider (MASP™). Unlike DIY tools or one-off consultants, we handle everything—strategy, implementation, and ongoing optimization. You get a system that runs 24/7 while you focus on your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Save 20+ Hours/Week</h3>
              <p className="text-slate-700">
                Remove repetitive tasks and free your team to focus on what matters.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Never Miss a Lead</h3>
              <p className="text-slate-700">
                Instant follow-ups, automated nurture sequences, and 24/7 response.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise-Grade, Local Price</h3>
              <p className="text-slate-700">
                The same infrastructure trusted by major corporations—now accessible to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Automation for Every Industry
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link href="/services/local#home-services" className="group">
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-slate-200">
                <Home className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Home & Field Services
                </h3>
              </div>
            </Link>

            <Link href="/services/local#healthcare" className="group">
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-slate-200">
                <Stethoscope className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Healthcare & Wellness
                </h3>
              </div>
            </Link>

            <Link href="/services/local#professional" className="group">
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-slate-200">
                <Briefcase className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Professional Services
                </h3>
              </div>
            </Link>

            <Link href="/services/local#real-estate" className="group">
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-slate-200">
                <Building2 className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Real Estate & Property
                </h3>
              </div>
            </Link>

            <Link href="/services/local#industrial" className="group">
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-slate-200">
                <Factory className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Industrial & Logistics
                </h3>
              </div>
            </Link>

            <Link href="/services/local#retail" className="group">
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-slate-200">
                <ShoppingBag className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Retail & Hospitality
                </h3>
              </div>
            </Link>

            <Link href="/services/local#staffing" className="group">
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-slate-200">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Staffing & HR
                </h3>
              </div>
            </Link>

            <Link href="/services/local" className="group">
              <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-blue-200">
                <ArrowRight className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-600">
                  View All Industries
                </h3>
              </div>
            </Link>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-slate-700 text-lg">
              Don't see your industry? We have <strong>4,000+ workflow templates</strong> ready for any business.{" "}
              <Link href="/schedule" className="text-blue-600 hover:underline font-semibold">
                Book a Call →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Discovery Call</h3>
              <p className="text-slate-600">
                We map your workflows and identify automation opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Custom Blueprint</h3>
              <p className="text-slate-600">
                You receive a detailed plan with projected ROI.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Build & Deploy</h3>
              <p className="text-slate-600">
                Automations built, tested, and launched in 2-4 weeks.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Optimize & Support</h3>
              <p className="text-slate-600">
                Ongoing monitoring, updates, and improvements.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/process" className="text-blue-600 hover:underline font-semibold inline-flex items-center">
              See Full Process <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Pricing Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Simple Pricing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$997<span className="text-lg text-slate-500">/month</span></div>
              <p className="text-slate-600 mb-6">Get your first 3-5 automations running</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">3-5 core workflows</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Email/SMS automations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Monthly check-in</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-blue-500 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Growth</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$2,500<span className="text-lg text-slate-500">/month</span></div>
              <p className="text-slate-600 mb-6">Full workflow automation + AI capabilities</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">10-15 workflows</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">AI-powered features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Bi-weekly strategy calls</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">Let's Talk</div>
              <p className="text-slate-600 mb-6">Custom infrastructure and dedicated management</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Unlimited workflows</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Private infrastructure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Dedicated support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8" asChild>
              <Link href="/schedule">Book Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden relative">
              <Image
                src="https://ai-stream-solutions.s3.us-east-1.amazonaws.com/me.png"
                alt="Anthony Amore"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg text-slate-700 mb-4">
                AI Stream Solutions was founded by Anthony Amore, a 17-year Army veteran and enterprise IT/Cybersecurity professional, to bring Fortune 500 automation capabilities to local businesses. Based in Wayne, NJ.
              </p>
              <Link href="/about" className="text-blue-600 hover:underline font-semibold inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a free strategy call and discover how automation can transform your operations.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8" asChild>
            <Link href="/schedule">Book Strategy Call</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
