import { Metadata } from "next"
import ROICalculator from "@/components/roi-calculator"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calculator } from "lucide-react"

export const metadata: Metadata = {
  title: "ROI Calculator - Calculate Your Automation Savings | AI Stream Solutions",
  description: "Calculate exactly how much time and money you'll save with AI automation. Get a personalized ROI report showing your potential cost savings, time freed up, and break-even timeline.",
  keywords: "ROI calculator, automation ROI, cost savings calculator, business automation calculator, AI automation savings",
  openGraph: {
    title: "ROI Calculator - Calculate Your Automation Savings",
    description: "See exactly how much time and money you'll save by automating repetitive tasks with AI Stream Solutions.",
    type: "website",
  },
}

export default function ROICalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/schedule">Book a Call</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Calculator className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Automation ROI Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how much time and money your business can save with AI-powered automation.
            Get a detailed breakdown of your potential savings in minutes.
          </p>
        </div>

        {/* Calculator Component */}
        <div className="max-w-4xl mx-auto">
          <ROICalculator isStandalone={true} />
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Calculate Your Automation ROI?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Make Data-Driven Decisions</h3>
                <p className="text-sm">
                  Get concrete numbers on how automation will impact your bottom line. See exactly
                  when you'll break even and start seeing positive returns.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Identify Hidden Costs</h3>
                <p className="text-sm">
                  Discover how much manual processes are really costing you in labor hours and
                  opportunity costs that could be redirected to growth.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Justify Your Investment</h3>
                <p className="text-sm">
                  Present a clear business case to stakeholders with detailed projections and
                  professional ROI analysis.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Plan for Scale</h3>
                <p className="text-sm">
                  Understand how automation savings compound as your business grows and what that
                  means for your long-term profitability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Turn These Savings Into Reality?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Book a free strategy call and we'll show you exactly how to implement automation
              that delivers these results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/schedule">Schedule Your Free Call</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/process">See Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
