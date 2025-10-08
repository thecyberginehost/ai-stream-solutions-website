"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, Brain, SettingsIcon, Repeat, Handshake, Zap, ArrowRight, CheckCircle2, Calculator } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import ROICalculator from "@/components/roi-calculator"
import Image from "next/image"

export default function ProcessPageClient() {
  const [isROICalculatorOpen, setIsROICalculatorOpen] = useState(false)

  const steps = [
    {
      icon: Search,
      title: "Step 1: Discovery & Automation Audit",
      emoji: "🔍",
      description:
        "We begin every engagement with a deep-dive discovery session. Our goal is to understand your business, map out your current tech stack, and identify where time and money are being lost to manual processes.",
      details: [
        "Review your lead flow, internal ops, sales funnel, and team workflows",
        "Analyze tools you're currently using (e.g., Zapier, Make.com, HubSpot, n8n, Airtable, etc.)",
        "Identify gaps, inefficiencies, and opportunities for automation",
        "Prioritize workflows that drive the most value quickly",
      ],
      callout: "Already using automation? Great—we'll evaluate your existing setup and build on top of what's working.",
      image: "https://ai-stream-solutions.s3.us-east-1.amazonaws.com/automationaudit.png",
      imageAlt: "Business automation audit process showing workflow analysis, tech stack review, and efficiency gap identification for process optimization",
    },
    {
      icon: Brain,
      title: "Step 2: Strategic Automation Blueprint",
      emoji: "🧠",
      description:
        "Once we've mapped your needs, we create a customized automation plan built around your goals, budget, and tools. You'll get a full workflow blueprint that shows what we'll automate, which platforms we'll connect, and how your systems will talk to each other.",
      details: [
        "Custom architecture tailored to your business model",
        "A choice between fully isolated infrastructure or managed support for your existing tools",
        "Clear deliverables, timelines, and expected outcomes",
        "Ongoing monitoring and optimization baked in from the start",
      ],
      image: "https://ai-stream-solutions.s3.us-east-1.amazonaws.com/automationblueprint.png",
      imageAlt: "Strategic automation blueprint diagram showing customized workflow architecture, platform integrations, and system connections for business automation",
    },
    {
      icon: SettingsIcon,
      title: "Step 3: Build, Integrate & Deploy",
      emoji: "⚙️",
      description:
        "This is where we do the heavy lifting. Whether we're deploying a custom automation stack using n8n on private cloud servers—or fine-tuning your existing Zapier or Make.com setup—we fully build, test, and deploy your automations.",
      details: [
        "Tool integration, data mapping, and API connections",
        "Custom workflows with filters, paths, webhooks, and conditional logic",
        "Secure infrastructure setup (Dockerized, isolated containers if needed)",
        "Pre-launch testing and validation with your team",
      ],
      callout: "No dev team required—we handle everything.",
      image: "https://ai-stream-solutions.s3.us-east-1.amazonaws.com/build_integrate_deploy.png",
      imageAlt: "Automation deployment process showing tool integration, custom workflow building, secure infrastructure setup, and testing validation",
    },
    {
      icon: Repeat,
      title: "Step 4: Optimization & Ongoing Management",
      emoji: "🔁",
      description:
        "Once your automations are live, we don't disappear. We provide continuous monitoring, performance reviews, and updates to keep everything running smoothly as your business evolves.",
      details: [
        "Monthly check-ins and automation health checks",
        "Real-time performance tracking and reporting",
        "Workflow updates and expansions as needed",
        "Dedicated support from your MASP-certified automation manager",
      ],
      image: "https://ai-stream-solutions.s3.us-east-1.amazonaws.com/optimization.png",
      imageAlt: "Ongoing automation optimization and management dashboard showing performance monitoring, health checks, and continuous workflow improvements",
    },
  ]

  return (
    <>
      <div className="bg-white text-slate-800">
        {/* Hero/Intro Section */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              A Proven Framework for Scalable Automation
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
              At AI Stream Solutions, we follow a structured, done-for-you process designed to uncover your biggest
              bottlenecks, automate critical workflows, and scale your operations with confidence. Whether you need your
              own dedicated automation infrastructure or want help managing your existing tools, our MASP-certified team
              handles everything—end to end.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`mb-12 lg:mb-16 flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-12`}
              >
                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                    <step.icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {step.emoji} {step.title}
                  </h2>
                  <p className="text-lg text-slate-700 mb-6">{step.description}</p>
                  <ul className="space-y-3 mb-6">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {step.callout && (
                    <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-md">
                      <p className="text-green-700 font-semibold">✅ {step.callout}</p>
                    </div>
                  )}
                </div>
                <div className="lg:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover"
                      priority={index === 0}
                      loading={index === 0 ? undefined : "lazy"}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgZmlsbD0iI2UyZThmMCIvPjwvc3ZnPg=="
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Real Workflow Examples Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-12">
              Real Workflow Examples
            </h2>

            <div className="max-w-5xl mx-auto space-y-12">
              {/* Example 1: Standard Automation */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border-2 border-blue-200 shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold mr-4">Example 1</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Lead Capture to CRM Sync</h3>
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Standard Automation (No AI)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-slate-900 mb-3">Workflow Steps:</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">1</span>
                        <span className="text-slate-700"><strong>Trigger:</strong> Form submission on website</span>
                      </div>
                      <div className="flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">2</span>
                        <span className="text-slate-700"><strong>Webhook:</strong> Receives form data in n8n</span>
                      </div>
                      <div className="flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">3</span>
                        <span className="text-slate-700"><strong>Enrichment:</strong> API call to Clearbit for company data</span>
                      </div>
                      <div className="flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">4</span>
                        <span className="text-slate-700"><strong>Scoring:</strong> Rule-based logic (company size + industry match)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">5</span>
                        <span className="text-slate-700"><strong>CRM Sync:</strong> Creates contact in HubSpot/Salesforce</span>
                      </div>
                      <div className="flex items-center">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">6</span>
                        <span className="text-slate-700"><strong>Notification:</strong> Conditional email sequence begins + Slack alert to sales rep</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-semibold text-green-800 mb-1">Time Saved</p>
                      <p className="text-2xl font-bold text-green-600">15 min/lead</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <p className="font-semibold text-purple-800 mb-1">Tools Used</p>
                      <p className="text-sm text-purple-700">n8n, HubSpot API, Clearbit, Slack</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example 2: AI-Powered */}
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-lg border-2 border-purple-200 shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold mr-4">Example 2</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Customer Service Chatbot</h3>
                    <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">AI-Powered Feature</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <p className="font-semibold text-slate-900 mb-3">Workflow Steps:</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">1</span>
                        <span className="text-slate-700"><strong>Trigger:</strong> Website visitor asks question in chat</span>
                      </div>
                      <div className="flex items-center">
                        <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">2</span>
                        <span className="text-slate-700"><strong>AI Processing:</strong> GPT-4 API interprets natural language question</span>
                      </div>
                      <div className="flex items-center">
                        <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">3</span>
                        <span className="text-slate-700"><strong>Knowledge Search:</strong> Queries internal documentation/FAQs</span>
                      </div>
                      <div className="flex items-center">
                        <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">4</span>
                        <span className="text-slate-700"><strong>Response:</strong> Natural language answer generated by AI</span>
                      </div>
                      <div className="flex items-center">
                        <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-xs">5</span>
                        <span className="text-slate-700"><strong>Escalation:</strong> If unresolved, creates ticket in Zendesk and notifies human agent</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-semibold text-green-800 mb-1">Deflection Rate</p>
                      <p className="text-2xl font-bold text-green-600">60%</p>
                      <p className="text-xs text-green-700 mt-1">5-10 min saved per inquiry</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <p className="font-semibold text-purple-800 mb-1">Tools Used</p>
                      <p className="text-sm text-purple-700">n8n, OpenAI API, Zendesk API</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 max-w-2xl mx-auto">
                These are just two examples. We build custom workflows for sales, marketing, operations, customer service, finance, and more—tailored to your exact business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Built for Flexibility Section */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Handshake size={48} className="text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Built for Flexibility</h2>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto mb-6">
              Not every business needs custom infrastructure—and that's okay. We support your existing subscriptions and
              systems whenever possible. But when you're ready for more scale, security, or control, we can deploy your
              own dedicated automation environment without locking you into third-party tools.
            </p>
            <div className="inline-block p-4 bg-green-50 border-l-4 border-green-500 rounded-r-md max-w-2xl mx-auto">
              <p className="text-green-700 font-semibold text-left">
                ✅ Whether you want your own automation stack or just need expert help managing what you've already
                got—we make it work.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 sm:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calculator size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Calculate Your Automation ROI</h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              See exactly how much time and money you'll save by automating repetitive tasks in your business. Get your personalized ROI analysis in seconds.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 text-lg font-semibold"
              onClick={() => setIsROICalculatorOpen(true)}
            >
              <Calculator className="mr-2 h-5 w-5" /> Calculate My ROI
            </Button>
          </div>
        </section>
      </div>

      {/* ROI Calculator Modal */}
      <Dialog open={isROICalculatorOpen} onOpenChange={setIsROICalculatorOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">ROI Calculator</DialogTitle>
          </DialogHeader>
          <ROICalculator onClose={() => setIsROICalculatorOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  )
}
