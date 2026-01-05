"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Download, Mail, Briefcase, MessageSquare, Clock, Database, FileText } from "lucide-react"

interface AutomationChecklistProps {
  onClose?: () => void
  isStandalone?: boolean
}

export default function AutomationChecklist({ onClose, isStandalone = false }: AutomationChecklistProps) {
  const [email, setEmail] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [showChecklist, setShowChecklist] = useState(false)
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleViewChecklist = () => {
    setShowChecklist(true)
  }

  const handleDownload = async () => {
    if (!email || !companyName) {
      alert("Please enter your email and company name to download the checklist")
      return
    }

    // Here you would typically send the email to your backend/HubSpot
    // For now, we'll just simulate the download
    setEmailSubmitted(true)

    // Track the lead capture
    console.log("Lead captured:", { email, companyName })

    // Simulate download - in production, this would be a real PDF
    alert("Checklist downloaded! Check your email for the full automation guide.")
  }

  const automationAreas = [
    {
      icon: Mail,
      title: "Email & Communication",
      items: [
        "Automated email sequences for leads",
        "Follow-up reminders for sales team",
        "Customer onboarding email flows",
        "Internal notification workflows",
        "SMS appointment reminders",
      ],
    },
    {
      icon: Briefcase,
      title: "Sales & CRM",
      items: [
        "Lead scoring and qualification",
        "Automatic lead routing to sales reps",
        "Pipeline stage updates",
        "Deal creation from web forms",
        "Customer data enrichment",
      ],
    },
    {
      icon: MessageSquare,
      title: "Customer Support",
      items: [
        "Ticket creation and routing",
        "Auto-responses for common questions",
        "Customer satisfaction surveys",
        "Escalation workflows for urgent issues",
        "Support team workload distribution",
      ],
    },
    {
      icon: Clock,
      title: "Scheduling & Calendar",
      items: [
        "Automated meeting scheduling",
        "Calendar sync across platforms",
        "Reminder notifications",
        "Time zone conversions",
        "Resource booking automation",
      ],
    },
    {
      icon: Database,
      title: "Data Management",
      items: [
        "Data sync between platforms",
        "Duplicate record detection",
        "Regular data backups",
        "Report generation and distribution",
        "Data validation and cleaning",
      ],
    },
    {
      icon: FileText,
      title: "Document Processing",
      items: [
        "Contract generation from templates",
        "E-signature collection",
        "Invoice creation and sending",
        "Document approval workflows",
        "File organization and archiving",
      ],
    },
  ]

  return (
    <div className={isStandalone ? "" : "p-6"}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Automation Checklist</h3>
        <p className="text-gray-600">
          Discover 30+ automation opportunities across your business operations.
        </p>
      </div>

      {!showChecklist ? (
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
          <div className="text-center space-y-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                What's Inside the Automation Checklist?
              </h4>
              <ul className="text-left max-w-md mx-auto space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>30+ specific tasks you can automate today</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Organized by department and function</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Quick-win opportunities highlighted</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Implementation difficulty ratings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Estimated time savings for each task</span>
                </li>
              </ul>
            </div>
            <Button
              onClick={handleViewChecklist}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              size="lg"
            >
              View Checklist Now
            </Button>
          </div>
        </Card>
      ) : (
        <div className="space-y-6">
          {/* Email Capture Form */}
          {!emailSubmitted && (
            <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <h4 className="font-bold text-gray-900 mb-1">Want the full checklist?</h4>
                  <p className="text-sm text-gray-600">
                    Enter your details to download the complete automation guide (PDF)
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
                      Work Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-1 block">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="bg-white"
                    />
                  </div>
                </div>
                <Button
                  onClick={handleDownload}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Full Checklist
                </Button>
              </div>
            </Card>
          )}

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {automationAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <Card key={index} className="p-5 hover:shadow-lg transition-shadow border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900">{area.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm text-gray-700">
                        <span className="text-green-600 mr-2 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <Card className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <div className="text-center space-y-4">
              <h4 className="text-xl font-bold">Ready to Start Automating?</h4>
              <p className="text-blue-100">
                Book a free strategy call to discuss which automations will deliver the biggest impact for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <a href="/schedule">Book Strategy Call</a>
                </Button>
                {!emailSubmitted && (
                  <Button
                    onClick={handleDownload}
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Checklist
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      )}

      {onClose && !isStandalone && (
        <div className="mt-6 text-center">
          <Button variant="ghost" onClick={onClose} className="text-gray-500">
            Close Checklist
          </Button>
        </div>
      )}
    </div>
  )
}
