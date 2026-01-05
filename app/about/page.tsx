import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Award,
  MapPin,
  Phone,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About AI Stream Solutions | Wayne, NJ Automation Experts",
  description:
    "AI Stream Solutions was founded by Anthony Amore, a 17-year Army veteran and enterprise IT/Cybersecurity professional, to bring Fortune 500 automation capabilities to local businesses in Wayne, NJ and North Jersey.",
}

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AI Stream Solutions</h1>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xl text-slate-700 text-center mb-8">
            AI Stream Solutions is a <strong>Managed Automation Service Provider (MASP™)</strong> based in Wayne, NJ, serving local businesses and enterprises across North Jersey.
          </p>
          <p className="text-lg text-slate-600 text-center">
            We design, deploy, and manage complete automation systems—so you can stop drowning in manual tasks and start focusing on growth.
          </p>
        </div>
      </section>

      {/* The Person Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">The Person Behind It</h2>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden relative">
              <Image
                src="https://ai-stream-solutions.s3.us-east-1.amazonaws.com/me.png"
                alt="Anthony Amore"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Anthony Amore</h3>
              <p className="text-blue-600 font-semibold mb-4">Founder & Lead Automation Architect</p>

              <p className="text-slate-700 mb-4">
                I spent 17 years in the Army and another 9+ in IT and cybersecurity—mostly building and securing systems for defense contractors and large enterprises. Somewhere along the way, I got really good at making complex processes run without me.
              </p>

              <p className="text-slate-700 mb-6">
                I started AI Stream Solutions because I saw small businesses struggling with the same problems big companies solve with automation—except nobody was offering them real solutions at a price that made sense. So I decided to change that.
              </p>

              <p className="text-slate-700">
                When you work with me, you actually work with me. No sales team, no junior account managers, no support tickets that disappear into the void. Just a direct line to someone who can actually fix things.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Credentials & Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">Security Background</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">17-year Army veteran (medically retired)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Active Top Secret clearance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">9+ years as an IT/Cybersecurity professional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">14+ defense contractor and private sector environments</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-900">Certifications</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">GIAC Security Essentials (GSEC)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">CompTIA Security+</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">AWS Cloud Practitioner</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">MASP™ Trademark (Managed Automation Service Provider)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Clients Trust Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Enterprise-grade security practices</h3>
                <p className="text-slate-600">The same rigor required by federal contractors</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">4,000+ workflow templates</h3>
                <p className="text-slate-600">Ready to customize for any industry</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Based in Wayne, NJ</h3>
                <p className="text-slate-600">Not a call center across the country</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Direct access</h3>
                <p className="text-slate-600">You get my direct line, not a support queue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to see what automation can do for your business?</h2>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100" asChild>
            <Link href="/schedule" className="inline-flex items-center">
              Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
