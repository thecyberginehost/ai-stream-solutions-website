"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import ROICalculator from "@/components/roi-calculator"
import {
  Briefcase,
  Megaphone,
  TrendingUp,
  Lightbulb,
  BarChartBig,
  UsersRound,
  DollarSign,
  HeartHandshake,
  Wrench,
  Network,
  FileText,
  CalendarClock,
  MailCheck,
  Filter,
  Repeat,
  BellRing,
  UserPlus,
  KeyRound,
  ShieldCheck,
  Calculator,
} from "lucide-react"

// Metadata moved to separate metadata export file due to "use client" directive

interface AutomationExample {
  name: string
  complexity: "Basic" | "Intermediate" | "Complex"
  description: string
  roi: string
  complexityColor: string
  icon: React.ElementType
}

const departmentAutomations: {
  department: string
  icon: React.ElementType
  examples: AutomationExample[]
}[] = [
  {
    department: "Sales",
    icon: Briefcase,
    examples: [
      {
        name: "Automated Lead Assignment & Welcome Email",
        complexity: "Basic",
        complexityColor: "bg-green-500",
        icon: UserPlus,
        description:
          "Instantly routes new leads from web forms or landing pages to the correct sales representative based on territory, product interest, or round-robin rules, and triggers a personalized welcome email.",
        roi: "Reduces lead response time by >90%, saves 5+ hours/month per rep",
      },
      {
        name: "Rule-Based Lead Scoring & CRM Tagging",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: Filter,
        description:
          "Automatically scores leads based on explicit data from form submissions (e.g., company size, budget field) and website activity (e.g., visited pricing page - if tracked). Tags high-scoring leads in the CRM and alerts sales.",
        roi: "Focuses sales efforts, potentially boosting conversion rates by 10-15%",
      },
      {
        name: "Proposal Generation from CRM Data",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: FileText,
        description:
          "Populates pre-defined proposal templates (e.g., Google Docs, Word) with customer data, product/service details, and pricing directly from your CRM upon a deal stage change.",
        roi: "Speeds up proposal creation by up to 75%",
      },
      {
        name: "Stale Deal Notifications & Task Creation",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: BellRing,
        description:
          "Monitors the sales pipeline in your CRM for deals with no activity for a set period (e.g., 14 days) and automatically sends a notification to the deal owner or manager and creates a follow-up task.",
        roi: "Helps prevent deals from falling through the cracks, potentially reducing sales cycle time by 5-10%",
      },
    ],
  },
  {
    department: "Marketing",
    icon: Megaphone,
    examples: [
      {
        name: "Social Media Post Scheduling & Approval",
        complexity: "Basic",
        complexityColor: "bg-green-500",
        icon: CalendarClock,
        description:
          "Allows marketing teams to draft social media posts, submit them for approval via a notification (e.g., Slack, email), and upon approval, automatically schedules them for optimal times across multiple platforms.",
        roi: "Saves 8-12 hours/month on manual posting and coordination",
      },
      {
        name: "Segmented Email Nurturing Sequences",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: MailCheck,
        description:
          "Automatically enrolls new leads from different sources (e.g., webinar sign-up, ebook download) into tailored email drip campaigns designed to nurture them based on their initial interest.",
        roi: "Can increase lead engagement and MQL conversion by 15-25%",
      },
      {
        name: "Campaign Performance Data Aggregation",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: BarChartBig,
        description:
          "Fetches key metrics (spend, clicks, impressions, conversions) from various ad platforms (e.g., Google Ads, Facebook Ads) and populates a centralized spreadsheet or data table daily/weekly for review.",
        roi: "Saves 5-10 hours/month on manual data collection for reporting",
      },
      {
        name: "Trigger-Based Multi-Step Form Abandonment Follow-Up",
        complexity: "Complex",
        complexityColor: "bg-red-500",
        icon: Repeat,
        description:
          "If a user starts a multi-step form (e.g., for a quote or detailed inquiry) but doesn't complete it within a set time, triggers an automated email or SMS reminder with a link to resume.",
        roi: "Can recover 5-15% of abandoned form submissions",
      },
    ],
  },
  {
    department: "Customer Support",
    icon: UsersRound,
    examples: [
      {
        name: "Support Ticket Auto-Categorization & Routing",
        complexity: "Basic",
        complexityColor: "bg-green-500",
        icon: Filter,
        description:
          "Automatically categorizes incoming support tickets based on keywords in the subject/body or sender's email domain, and routes them to the appropriate support agent or team queue.",
        roi: "Improves first response time by up to 25%",
      },
      {
        name: "Automated Customer Feedback Survey Distribution",
        complexity: "Basic",
        complexityColor: "bg-green-500",
        icon: MailCheck,
        description:
          "Automatically sends a CSAT or NPS survey email to customers a set period after their support ticket is resolved or a purchase is completed.",
        roi: "Increases feedback collection rates by 30-50%",
      },
      {
        name: "FAQ Chatbot Triage & Ticket Creation",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: UsersRound,
        description:
          "When a website visitor interacts with a simple FAQ chatbot and their query isn't resolved by pre-defined answers, the chat transcript and user details are used to automatically create a new support ticket.",
        roi: "Deflects common queries, ensures unresolved issues are captured, saves agent time",
      },
      {
        name: "SLA Breach Warning Notifications",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: BellRing,
        description:
          "Monitors open support tickets in your helpdesk for approaching SLA deadlines (e.g., time to first response, time to resolution) and sends warning notifications to assigned agents or managers.",
        roi: "Helps improve SLA adherence and customer satisfaction",
      },
    ],
  },
  {
    department: "Finance",
    icon: DollarSign,
    examples: [
      {
        name: "Automated Invoice Due Date Reminders",
        complexity: "Basic",
        complexityColor: "bg-green-500",
        icon: CalendarClock,
        description:
          "Connects to your accounting software to automatically send email or SMS reminders to clients for upcoming and overdue invoices based on pre-set schedules (e.g., 7 days before, 1 day after due date).",
        roi: "Can reduce late payments by 15-25%",
      },
      {
        name: "Expense Form Submission & Approval Routing",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: FileText,
        description:
          "Employees submit expense details via a standardized online form. The workflow automatically routes the submission to their manager for approval based on amount/department, then notifies finance upon approval.",
        roi: "Streamlines expense reporting, saves 10-15 hours/month on processing",
      },
      {
        name: "New Client Data Sync to Accounting Software",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: Repeat,
        description:
          "When a new client is marked as 'Closed Won' in the CRM, automatically creates a corresponding customer record in your accounting software (e.g., QuickBooks, Xero) with key details.",
        roi: "Reduces manual data entry errors and ensures data consistency",
      },
      {
        name: "Subscription Renewal Failure Notifications & Dunning",
        complexity: "Complex",
        complexityColor: "bg-red-500",
        icon: BellRing,
        description:
          "Monitors your payment gateway for failed subscription renewals. Automatically sends a series of dunning emails to the customer with instructions to update payment information and notifies internal team.",
        roi: "Reduces involuntary churn by 5-10%",
      },
    ],
  },
  {
    department: "Human Resources",
    icon: HeartHandshake,
    examples: [
      {
        name: "New Hire Onboarding Task Management",
        complexity: "Basic",
        complexityColor: "bg-green-500",
        icon: UserPlus,
        description:
          "When a new hire is confirmed, automatically creates a series of onboarding tasks (e.g., 'Prepare welcome kit,' 'Set up accounts,' 'Schedule orientation') in a project management tool, assigned to relevant team members with due dates.",
        roi: "Ensures consistent onboarding, saves 3-5 hours per new hire",
      },
      {
        name: "Leave Request Approval & Calendar Update",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: CalendarClock,
        description:
          "Employees submit leave requests via a form. The request is routed to their manager for approval. Upon approval, the leave is automatically added to a shared team calendar and the employee's leave balance is updated (if system allows).",
        roi: "Reduces HR admin time by 4-6 hours/month",
      },
      {
        name: "Employee Anniversary & Birthday Notifications",
        complexity: "Basic",
        complexityColor: "bg-green-500",
        icon: BellRing,
        description:
          "Tracks employee start dates and birthdays from an HRIS or spreadsheet. Automatically sends a congratulatory email to the employee and/or a notification to their manager/team on these dates.",
        roi: "Improves employee engagement and morale",
      },
      {
        name: "Performance Review Cycle Reminders & Document Distribution",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: FileText,
        description:
          "Automates sending reminders for upcoming performance review deadlines (self-assessment, manager review). Distributes review templates and collects completed forms into a central folder.",
        roi: "Improves review cycle efficiency and completion rates by 20-30%",
      },
    ],
  },
  {
    department: "Operations",
    icon: Wrench,
    examples: [
      {
        name: "Low Inventory Level Alerts & Reorder Drafts",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: BellRing,
        description:
          "Monitors stock levels for key items in an inventory management system or spreadsheet. When a threshold is met, automatically sends a reorder alert to the purchasing team and can draft a purchase order in the accounting system.",
        roi: "Helps prevent stockouts by 10-20% and reduces manual PO creation time",
      },
      {
        name: "Order Status Update Notifications to Customers",
        complexity: "Basic",
        complexityColor: "bg-green-500",
        icon: MailCheck,
        description:
          "When an order status changes in your e-commerce or fulfillment system (e.g., 'Shipped,' 'Out for Delivery'), automatically sends an email or SMS update to the customer with relevant details and tracking links.",
        roi: "Reduces 'Where is my order?' inquiries by 20-40%",
      },
      {
        name: "Daily Operational Report Generation",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: FileText,
        description:
          "Aggregates key operational data (e.g., orders processed, units shipped, support tickets closed) from various systems into a formatted daily report (e.g., PDF, email summary) and distributes it to stakeholders.",
        roi: "Saves 1-2 hours daily on manual report compilation",
      },
      {
        name: "Project Milestone Completion Notifications",
        complexity: "Basic",
        complexityColor: "bg-green-500",
        icon: BellRing,
        description:
          "When a key task or milestone is marked as complete in your project management tool, automatically notifies relevant team members or clients via email or a chat application.",
        roi: "Improves project visibility and team coordination",
      },
    ],
  },
  {
    department: "IT & Admin",
    icon: Network,
    examples: [
      {
        name: "User Account Provisioning for Standard SaaS Apps",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: UserPlus,
        description:
          "Upon new hire confirmation in HRIS, automatically creates user accounts in standard company applications (e.g., Google Workspace, Microsoft 365, Slack) and sends login details to the new hire/manager.",
        roi: "Saves 2-4 hours of IT admin time per new hire, ensures day-one access",
      },
      {
        name: "User Account Deprovisioning upon Offboarding",
        complexity: "Intermediate",
        complexityColor: "bg-yellow-500",
        icon: KeyRound,
        description:
          "When an employee's offboarding is initiated in HRIS, automatically suspends or deactivates their accounts in key SaaS applications to ensure security.",
        roi: "Improves security posture and reduces risk of unauthorized access",
      },
      {
        name: "Software License Renewal Reminders",
        complexity: "Basic",
        complexityColor: "bg-green-500",
        icon: CalendarClock,
        description:
          "Tracks software license renewal dates from a spreadsheet or asset management system. Sends automated email reminders to the IT team or budget holder 60, 30, and 7 days before expiration.",
        roi: "Prevents unexpected license expirations and service disruptions",
      },
      {
        name: "Security Advisory Monitoring & Alerting",
        complexity: "Complex",
        complexityColor: "bg-red-500",
        icon: ShieldCheck,
        description:
          "Monitors specific vendor security advisory feeds (via RSS or API if available) for keywords relevant to your tech stack. If a critical advisory is found, creates a high-priority alert/ticket for the IT security team.",
        roi: "Enhances proactive security response, reduces time to awareness for critical vulnerabilities",
      },
    ],
  },
]

export default function DepartmentalAutomationPage() {
  const [isROICalculatorOpen, setIsROICalculatorOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      {/* ROI Calculator Modal */}
      <Dialog open={isROICalculatorOpen} onOpenChange={setIsROICalculatorOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="sr-only">ROI Calculator</DialogTitle>
          </DialogHeader>
          <ROICalculator onClose={() => setIsROICalculatorOpen(false)} />
        </DialogContent>
      </Dialog>
      {/* Intro Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center bg-white shadow-sm">
        <div className="container mx-auto max-w-4xl">
          <Lightbulb className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Explore Real-World Automation by Department
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            Discover practical automation ideas that AI Stream Solutions can fully design, implement, and manage for
            your business. Visualize the ROI and transform your operations with our tailored Managed Automation Service
            Provider (MASP) plans.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg" asChild>
            <Link href="/services">See Our Managed Automation Service</Link>
          </Button>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {departmentAutomations.map((dept) => (
              <AccordionItem
                key={dept.department}
                value={dept.department}
                className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
              >
                <AccordionTrigger className="px-6 py-5 text-xl sm:text-2xl font-semibold text-slate-800 hover:bg-slate-50 transition-colors data-[state=open]:bg-slate-100 data-[state=open]:text-blue-700">
                  <div className="flex items-center space-x-3">
                    <dept.icon className="h-7 w-7 text-blue-600" />
                    <span>{dept.department} Automation</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-2 pb-6 bg-slate-50 border-t border-slate-200">
                  <div className="space-y-6 mt-4">
                    {dept.examples.map((example) => (
                      <div
                        key={example.name}
                        className="p-5 bg-white rounded-lg border border-slate-300 shadow-md transition-all hover:border-blue-400 hover:shadow-lg"
                      >
                        <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-3">
                          <div className="flex items-center mb-2 sm:mb-0">
                            <example.icon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                            <h3 className="text-lg font-semibold text-slate-900">{example.name}</h3>
                          </div>
                          <span
                            className={`inline-block text-white px-3 py-1 text-xs font-medium whitespace-nowrap rounded-full ${example.complexityColor}`}
                          >
                            {example.complexity} Workflow
                          </span>
                        </div>
                        <p className="text-slate-700 mb-3 text-sm leading-relaxed">{example.description}</p>
                        <div className="flex items-center text-sm text-green-700 font-medium">
                          <TrendingUp className="h-4 w-4 mr-1.5" />
                          <span>Estimated ROI: {example.roi}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center bg-slate-800 text-white">
        <div className="container mx-auto max-w-3xl">
          <BarChartBig className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Automate Your Business The Right Way?</h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            These are just a few examples. Every solution we build is custom-tailored to your unique operations and
            goals. Start with a free, no-obligation audit, and we’ll help you build your personalized automation
            roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 text-lg w-full sm:w-auto"
              onClick={() => setIsROICalculatorOpen(true)}
            >
              <Calculator className="h-5 w-5 mr-2" />
              Calculate Your ROI
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-400 text-slate-200 hover:bg-slate-700 hover:text-white px-10 py-4 text-lg w-full sm:w-auto"
              asChild
            >
              <Link href="/services">Explore Our Automation Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
