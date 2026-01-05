"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, FileText, Settings, RefreshCw, ArrowRight, CheckCircle } from "lucide-react"

export default function ProcessPageClient() {
  const steps = [
    {
      icon: Search,
      number: "1",
      title: "Discovery Call",
      description:
        "We map your workflows and identify automation opportunities. This is a free, no-obligation conversation where we learn about your business and uncover where automation can save you the most time and money.",
      details: [
        "Review your current processes and pain points",
        "Identify repetitive tasks eating up your team's time",
        "Map out your tech stack and integration needs",
        "Prioritize quick wins and high-impact automations",
      ],
    },
    {
      icon: FileText,
      number: "2",
      title: "Custom Blueprint",
      description:
        "You receive a detailed automation plan with projected ROI. No generic templates—this is a custom strategy built specifically for your business, your industry, and your goals.",
      details: [
        "Detailed workflow documentation",
        "Clear implementation roadmap",
        "Projected time and cost savings",
        "Integration specifications",
      ],
    },
    {
      icon: Settings,
      number: "3",
      title: "Build & Deploy",
      description:
        "Automations built, tested, and launched in 2-4 weeks. Our team handles everything—no technical expertise required on your end. You focus on running your business while we build your automation infrastructure.",
      details: [
        "Custom workflow development",
        "Tool integrations and API connections",
        "Thorough testing before launch",
        "Team training and documentation",
      ],
    },
    {
      icon: RefreshCw,
      number: "4",
      title: "Optimize & Support",
      description:
        "Ongoing monitoring, updates, and improvements. Automation isn't a one-time thing—we continuously optimize your workflows, add new automations as your business grows, and provide support whenever you need it.",
      details: [
        "24/7 monitoring and alerts",
        "Regular performance reviews",
        "Workflow updates and expansions",
        "Direct access to your automation manager",
      ],
    },
  ]

  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            A simple 4-step process to transform your business with automation. From discovery to deployment, we handle everything.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="bg-blue-50 w-32 h-32 rounded-2xl flex items-center justify-center">
                    <step.icon className="h-16 w-16 text-blue-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Your Journey to Automation</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.number}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free discovery call and let's map out your automation opportunities.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100" asChild>
            <Link href="/schedule" className="inline-flex items-center">
              Book Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
