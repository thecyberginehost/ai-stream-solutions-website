"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Wrench,
  Stethoscope,
  Briefcase,
  Building2,
  Factory,
  ShoppingBag,
  Users,
  GraduationCap,
  Star,
} from "lucide-react"

// Featured industries with full workflow examples
const featuredIndustries = [
  {
    name: "Dental Practices",
    category: "Healthcare",
    workflows: [
      {
        name: "Appointment Reminders",
        trigger: "Appointment booked",
        result: "30-40% fewer no-shows",
      },
      {
        name: "Post-Visit Review Request",
        trigger: "Appointment completed",
        result: "3-5x more Google reviews",
      },
      {
        name: "Hygiene Recall Campaign",
        trigger: "6 months since last cleaning",
        result: "25% more reappointments",
      },
    ],
  },
  {
    name: "HVAC & Home Services",
    category: "Field Services",
    workflows: [
      {
        name: "Instant Lead Response",
        trigger: "Web form submitted",
        result: "First response in under 2 minutes",
      },
      {
        name: "Missed Call Text-Back",
        trigger: "Missed call",
        result: "Recover 40% of missed calls",
      },
      {
        name: "Seasonal Maintenance Campaign",
        trigger: "Date-based triggers",
        result: "Predictable seasonal revenue",
      },
    ],
  },
  {
    name: "Law Firms",
    category: "Professional Services",
    workflows: [
      {
        name: "Online Intake + Qualification",
        trigger: "Intake form submitted",
        result: "Only qualified leads reach attorneys",
      },
      {
        name: "Case Status Updates",
        trigger: "Case stage changed",
        result: "Fewer 'where's my case?' calls",
      },
      {
        name: "Document Request Sequence",
        trigger: "Document needed",
        result: "Faster document collection",
      },
    ],
  },
  {
    name: "Real Estate Agents",
    category: "Real Estate",
    workflows: [
      {
        name: "New Lead Nurture",
        trigger: "Lead captured",
        result: "Stay top-of-mind for long buying cycles",
      },
      {
        name: "Open House Follow-Up",
        trigger: "Open house sign-in",
        result: "Convert more attendees",
      },
      {
        name: "Past Client Touches",
        trigger: "Anniversary, birthday, holidays",
        result: "Steady referral pipeline",
      },
    ],
  },
]

// Industry categories for browsing
const industryCategories = [
  {
    id: "home-services",
    name: "Home & Field Services",
    icon: Wrench,
    industries: [
      "HVAC & Heating", "Plumbing", "Electrical", "Construction & General Contractors",
      "Landscaping & Lawn Care", "Roofing & Exteriors", "Cleaning & Janitorial",
      "Pest Control", "Auto Repair", "Auto Dealerships", "Towing & Roadside"
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Wellness",
    icon: Stethoscope,
    industries: [
      "Dental Practices", "Medical Practices & Clinics", "Chiropractic & Physical Therapy",
      "Med Spas & Aesthetics", "Mental Health & Counseling", "Veterinary Clinics",
      "Home Health & Senior Care"
    ],
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: Briefcase,
    industries: [
      "Law Firms", "Accounting & CPA Firms", "Insurance Agencies",
      "Financial Advisors", "Marketing Agencies", "IT Service Providers", "Consulting Firms"
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate & Property",
    icon: Building2,
    industries: [
      "Real Estate Agents & Teams", "Property Management", "Mortgage & Lending", "Title & Escrow"
    ],
  },
  {
    id: "industrial",
    name: "Industrial & Logistics",
    icon: Factory,
    industries: [
      "Manufacturing & Machine Shops", "Warehousing & Distribution",
      "Logistics & Freight", "Trucking & Transportation"
    ],
  },
  {
    id: "retail",
    name: "Retail & Hospitality",
    icon: ShoppingBag,
    industries: [
      "Restaurants & Food Service", "Gyms & Fitness Studios",
      "Salons & Barbershops", "Retail & E-commerce"
    ],
  },
  {
    id: "staffing",
    name: "Staffing & HR",
    icon: Users,
    industries: ["Staffing & Recruiting Agencies", "HR Service Providers"],
  },
  {
    id: "education",
    name: "Education & Nonprofit",
    icon: GraduationCap,
    industries: ["Private Schools & Tutoring", "Nonprofits & Associations"],
  },
]

export default function LocalServicesPage() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Automation for Local Businesses</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Industry-specific workflows designed to save you time and grow your business.
          </p>
        </div>
      </section>

      {/* Pricing Section - Moved to Top */}
      <section className="py-12 px-4 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <h3 className="font-bold text-slate-900 mb-1">Starter</h3>
              <div className="text-3xl font-bold text-blue-600 mb-1">
                $997<span className="text-sm text-slate-500">/mo</span>
              </div>
              <p className="text-sm text-slate-600">3-5 workflows</p>
            </div>

            {/* Growth */}
            <div className="bg-blue-600 p-6 rounded-xl text-white text-center relative">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-0.5 rounded-full">
                POPULAR
              </div>
              <h3 className="font-bold mb-1">Growth</h3>
              <div className="text-3xl font-bold mb-1">
                $2,500<span className="text-sm text-blue-200">/mo</span>
              </div>
              <p className="text-sm text-blue-100">10-15 workflows + AI</p>
            </div>

            {/* Custom */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <h3 className="font-bold text-slate-900 mb-1">Custom</h3>
              <div className="text-3xl font-bold text-blue-600 mb-1">Let's Talk</div>
              <p className="text-sm text-slate-600">Unlimited workflows</p>
            </div>
          </div>

          <div className="text-center mt-6">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/schedule">Book Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Industries */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              Popular Industries
            </div>
            <h2 className="text-3xl font-bold text-slate-900">See What's Possible</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredIndustries.map((industry) => (
              <div
                key={industry.name}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200"
              >
                <div className="mb-4">
                  <span className="text-sm text-blue-600 font-medium">{industry.category}</span>
                  <h3 className="text-xl font-bold text-slate-900">{industry.name}</h3>
                </div>

                <div className="space-y-3">
                  {industry.workflows.map((workflow, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-slate-900">{workflow.name}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Trigger: {workflow.trigger}</span>
                        <span className="text-green-600 font-medium">{workflow.result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse All Industries */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Browse All Industries</h2>
            <p className="text-slate-600">Click a category to see industries we serve</p>
          </div>

          <div className="space-y-3">
            {industryCategories.map((category) => {
              const isExpanded = expandedCategories[category.id]
              const IconComponent = category.icon

              return (
                <div key={category.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-2.5 rounded-lg">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">{category.name}</span>
                        <span className="text-slate-500 text-sm ml-2">
                          ({category.industries.length} industries)
                        </span>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-slate-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-slate-100">
                      <div className="flex flex-wrap gap-2">
                        {category.industries.map((industry) => (
                          <span
                            key={industry}
                            className="inline-flex items-center px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Don't See Your Industry */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 md:p-12 text-center">
            <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Don't see your industry?</h3>
            <p className="text-lg text-slate-600 mb-2">
              These are just examples. We maintain <strong>4,000+ workflow templates</strong> across every industry.
            </p>
            <p className="text-slate-700 mb-8">
              If you can describe your process, we can automate it.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/schedule" className="inline-flex items-center">
                Book a Call <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free strategy call. We'll map your workflows and show you exactly how automation can help.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100" asChild>
            <Link href="/schedule" className="inline-flex items-center">
              Book Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
