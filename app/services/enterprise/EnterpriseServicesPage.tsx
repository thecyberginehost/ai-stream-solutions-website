"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Server,
  Shield,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Lock,
  Headphones,
  Zap,
  Award,
} from "lucide-react"

export default function EnterpriseServicesPage() {
  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Managed Automation Service Provider</h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8">
            Your complete automation infrastructure—designed, deployed, and managed.
          </p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            For organizations that need more than workflows—AI Stream Solutions provides full-service managed automation with private infrastructure, compliance support, and dedicated oversight.
          </p>
        </div>
      </section>

      {/* MASP Explanation */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xl text-slate-700 text-center mb-8">
            As a <strong>Managed Automation Service Provider (MASP™)</strong>, we don't just build automations. We become your automation department.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Private Infrastructure */}
            <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Server className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Private Infrastructure</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Dedicated n8n instance on isolated servers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Your data never touches another client's environment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Docker containerization for complete process isolation</span>
                </li>
              </ul>
            </div>

            {/* Compliance & Security */}
            <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Compliance & Security</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">SOC 2 and GDPR compliance support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Enterprise-grade security practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Built by a 17-year defense industry veteran with active TS clearance</span>
                </li>
              </ul>
            </div>

            {/* Reliability & Support */}
            <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Reliability & Support</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">99.9% uptime SLA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">1-2 hour support response</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">24/7 monitoring and alerts</span>
                </li>
              </ul>
            </div>

            {/* Full Management */}
            <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Full Management</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Weekly strategy calls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Custom integration development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Ongoing optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-900 text-white rounded-xl p-8 md:p-12">
            <p className="text-xl text-center mb-8">
              "AI Stream Solutions brings the same secure, scalable infrastructure used by defense contractors and Fortune 500 companies—now available to growth-focused businesses."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Award className="h-10 w-10 text-blue-400 mb-2" />
                <p className="font-semibold">17 years</p>
                <p className="text-sm text-slate-400">Enterprise IT experience</p>
              </div>
              <div className="flex flex-col items-center">
                <Lock className="h-10 w-10 text-blue-400 mb-2" />
                <p className="font-semibold">14+</p>
                <p className="text-sm text-slate-400">Defense contractor environments</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-10 w-10 text-blue-400 mb-2" />
                <p className="font-semibold">GSEC, Security+, AWS</p>
                <p className="text-sm text-slate-400">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Enterprise Pricing</h2>
          <p className="text-lg text-slate-600 mb-8">
            Enterprise solutions start at <strong className="text-blue-600">$5,000/month</strong>.
          </p>
          <p className="text-slate-600 mb-8">
            Pricing based on infrastructure requirements, workflow volume, and support level.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link href="/schedule" className="inline-flex items-center">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Bridge to SMB */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
            <Zap className="h-10 w-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Just getting started?</h3>
            <p className="text-slate-600 mb-6">
              Our Local Business packages deliver enterprise-grade automation at accessible price points.
            </p>
            <Button variant="outline" asChild>
              <Link href="/services/local" className="inline-flex items-center">
                View Local Business Options <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
