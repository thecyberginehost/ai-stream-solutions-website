"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Zap,
  Settings,
  Database,
  Clock,
  Server,
  GitCompareArrows,
  Brain,
  MessageSquareText,
  Briefcase,
  LayoutDashboard,
  FileText,
  Shield,
  Calculator,
  ListChecks,
} from "lucide-react"
import OptimizedStreamingAnimation from "@/components/optimized-streaming-animation"
import HomeStructuredData from "@/components/home-structured-data"
import GoogleVerification from "@/components/google-verification"
import ROICalculator from "@/components/roi-calculator"
import AutomationChecklist from "@/components/automation-checklist"
import ExitIntentPopup from "@/components/exit-intent-popup"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function Home() {
  const [isROICalculatorOpen, setIsROICalculatorOpen] = useState(false)
  const [isChecklistOpen, setIsChecklistOpen] = useState(false)

  return (
    <main className="flex flex-col items-center">
      <GoogleVerification />
      <HomeStructuredData />

      {/* Exit Intent Popup */}
      <ExitIntentPopup
        onOpenROICalculator={() => setIsROICalculatorOpen(true)}
        onOpenChecklist={() => setIsChecklistOpen(true)}
      />

      {/* ROI Calculator Modal */}
      <Dialog open={isROICalculatorOpen} onOpenChange={setIsROICalculatorOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">ROI Calculator</DialogTitle>
          </DialogHeader>
          <ROICalculator onClose={() => setIsROICalculatorOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Automation Checklist Modal */}
      <Dialog open={isChecklistOpen} onOpenChange={setIsChecklistOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">Automation Checklist</DialogTitle>
          </DialogHeader>
          <AutomationChecklist onClose={() => setIsChecklistOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <OptimizedStreamingAnimation />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Security Badge */}
              <div className="inline-flex items-center bg-green-600/20 border border-green-500/30 rounded-full px-4 py-2 text-green-300 text-sm font-medium">
                <Shield className="h-4 w-4 mr-2" />
                Private Infrastructure • Zero Data Sharing
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Managed Automation Service Provider (MASP)
              </h1>
              <p className="text-xl text-slate-200">
                Enterprise workflow automation, fully managed. We design, deploy, and manage your complete automation system using n8n, Make.com, and Zapier—whether we build private infrastructure or enhance what you already use. Add AI capabilities (chatbots, agents, ML scoring) where they deliver measurable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/schedule">Book Strategy Call</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                  onClick={() => setIsROICalculatorOpen(true)}
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate Your ROI
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-slate-800 h-[400px]">
                <OptimizedStreamingAnimation />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-blue-400 text-5xl font-bold mb-4">Enterprise</div>
                    <div className="text-white text-2xl">Automation Infrastructure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is a MASP? Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What Is a Managed Automation Service Provider (MASP)?</h2>
            <p className="mt-4 text-xl text-slate-700 max-w-3xl mx-auto">
              Unlike DIY automation tools or typical agencies, a MASP is a specialized service provider that designs, deploys,
              and manages your complete automation infrastructure. We're MASP-certified—meaning we handle everything from strategy
              to ongoing optimization, so you can focus on growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Automation Infrastructure? Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Choose Enterprise-Grade Managed Automation?</h2>
            <p className="mt-4 text-xl text-slate-700 max-w-3xl mx-auto">
              Your operations deserve a real system—not just a collection of disconnected tools. Our managed automation
              infrastructure operates 24/7 to streamline your processes, reduce overhead, and unlock growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Save 20+ Hours Per Week</h3>
              </div>
              <p className="text-slate-700">
                Remove repetitive work and free your team to focus on strategic execution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Reduce Human Error</h3>
              </div>
              <p className="text-slate-700">Eliminate mistakes caused by manual data entry and fragmented workflows.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Scale Confidently</h3>
              </div>
              <p className="text-slate-700">
                We handle infrastructure setup, updates, and ongoing management—no internal team needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Private Infrastructure</h3>
              </div>
              <p className="text-slate-700">
                Each client gets their own private cloud server and isolated Docker container—your data never touches
                another client's environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Managed Service Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Enterprise Managed Automation Service
            </h2>
            <p className="mt-4 text-xl text-slate-700 max-w-3xl mx-auto">
              One comprehensive service tier designed for businesses that demand the best. Private infrastructure or existing tool enhancement—your choice.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg shadow-xl border-2 border-blue-200 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">White-Glove Managed Service</h3>
              <p className="text-slate-700 text-lg">
                Everything you need to automate and scale your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  What's Included
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Unlimited workflows & integrations
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Private server OR existing tool enhancement
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Workflow automation with optional AI agents & insights
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Dedicated account manager
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Weekly strategy calls
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                  <Shield className="h-5 w-5 text-green-600 mr-2" />
                  Enterprise Guarantees
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    99.99% uptime SLA
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    1-2 hour support response
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    24/7 monitoring & alerts
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    SOC 2 & GDPR compliance support
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Custom integration development
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/services">View Full Service Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Capabilities Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Automation Capabilities</h2>
            <p className="mt-4 text-xl text-slate-700 max-w-3xl mx-auto">
              We integrate your existing tools into a seamless automated system:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-slate-100">
              <MessageSquareText className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Email & SMS</h3>
              <p className="text-sm text-slate-600">Sequences, follow-ups, transactional alerts</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-slate-100">
              <Briefcase className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">CRM</h3>
              <p className="text-sm text-slate-600">Lead routing, pipeline updates, customer lifecycle workflows</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-slate-100">
              <GitCompareArrows className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Data Syncing</h3>
              <p className="text-sm text-slate-600">Integrate platforms, forms, CRMs, and schedulers</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-slate-100">
              <LayoutDashboard className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Dashboards & Reports</h3>
              <p className="text-sm text-slate-600">Real-time performance insights</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-slate-100">
              <Brain className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">AI Agents</h3>
              <p className="text-sm text-slate-600">On-demand guidance, automation recommendations, and more</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-slate-100">
              <FileText className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Form & Document Automation</h3>
              <p className="text-sm text-slate-600">
                Auto-generate contracts, send pre-filled forms, collect e-signatures, and sync data into your systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnets Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Discover Your Automation Potential
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Use our free tools to understand exactly how automation can transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ROI Calculator Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">ROI Calculator</h3>
                <p className="text-gray-700 mb-6">
                  Calculate exactly how much time and money you'll save by automating repetitive tasks in your business.
                </p>
                <ul className="space-y-2 mb-6 text-left">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">See your yearly cost savings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Calculate time to ROI</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Download personalized report</span>
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setIsROICalculatorOpen(true)}
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Calculate My ROI
                </Button>
              </div>
            </div>

            {/* Automation Checklist Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <ListChecks className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Automation Checklist</h3>
                <p className="text-gray-700 mb-6">
                  Get 30+ specific automation ideas organized by department—from email to CRM to customer support.
                </p>
                <ul className="space-y-2 mb-6 text-left">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Quick-win opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Organized by department</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Implementation difficulty ratings</span>
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => setIsChecklistOpen(true)}
                >
                  <ListChecks className="h-5 w-5 mr-2" />
                  Get Free Checklist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Your Automation System Starts Here</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you want a done-for-you infrastructure or guided control, we'll build the foundation. Book a
            consultation and start scaling with automation—without adding headcount.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100" asChild>
              <Link href="/schedule">Book Strategy Call</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => setIsROICalculatorOpen(true)}
            >
              <Calculator className="h-5 w-5 mr-2" />
              Calculate Your ROI
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
