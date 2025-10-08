"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import {
  Brain,
  Lock,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Server,
  Container,
  Eye,
  Workflow,
  Database,
  BarChart3,
  Mail,
  Smartphone,
  Users,
  MessageSquare,
  Calendar,
  FileText,
  Target,
  Clock,
  Zap,
  GitMerge,
  Layers,
  PlugZap,
  Settings2,
} from "lucide-react"

interface FeatureListItemProps {
  children: React.ReactNode
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({ children }) => (
  <li className="flex items-start">
    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
    <span>{children}</span>
  </li>
)

const Callout = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-md">
    <p className="flex items-start">
      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
      <span>{children}</span>
    </p>
  </div>
)

const securityFeatures = [
  {
    icon: Server,
    title: "Private Cloud Server",
    description: "Dedicated resources just for your business, ensuring your data and processes are not co-mingled.",
  },
  {
    icon: Container,
    title: "Docker Isolation",
    description: "Containerized workflows for peak security and performance, preventing cross-contamination.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Ready",
    description: "Built with SOC 2, GDPR, and other enterprise-grade controls in mind to meet stringent requirements.",
  },
  {
    icon: Eye,
    title: "24/7 Monitoring & Support",
    description:
      "Real-time alerts, proactive response, and expert oversight to maintain system integrity and availability.",
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-background text-slate-800">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center bg-white">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShieldCheck className="h-4 w-4" />
            Enterprise-Grade • Private Infrastructure • Zero Data Sharing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
            Managed Automation Service Provider (MASP)
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto">
            Enterprise Automation Infrastructure, Fully Managed
          </p>
          <p className="text-lg text-slate-600 mb-6 max-w-3xl mx-auto">
            We design, deploy, and manage your complete automation infrastructure—whether we build it from the ground up
            or enhance what you already use. Enterprise-grade security, unlimited scalability, and white-glove service.
          </p>
          <div className="max-w-2xl mx-auto space-y-4 mb-8">
            <Callout>
              Already using tools like Zapier, Make.com, or n8n? We'll audit, optimize, and manage it for you.
            </Callout>
            <Callout>Need isolated infrastructure? We'll set it up, secure it, and maintain it 24/7.</Callout>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" asChild>
              <Link href="/schedule">Book Strategy Call</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/process">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI vs Automation Framework */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800">
              Standard Automation vs AI: Understanding the Difference
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Most of what we do is sophisticated workflow automation using industry-leading platforms. We add AI capabilities where they deliver clear, measurable value.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Standard Automation */}
              <Card className="border-2 border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Workflow className="h-6 w-6 mr-2 text-blue-600" />
                    Standard Workflow Automation
                    <span className="ml-auto text-sm font-normal bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Most of what we do</span>
                  </CardTitle>
                  <CardDescription>Using n8n, Make.com, Zapier</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700">
                    <FeatureListItem>Form submissions → CRM sync</FeatureListItem>
                    <FeatureListItem>Email sequences & follow-ups</FeatureListItem>
                    <FeatureListItem>Data enrichment & validation</FeatureListItem>
                    <FeatureListItem>Conditional routing & notifications</FeatureListItem>
                    <FeatureListItem>Report generation & scheduling</FeatureListItem>
                    <FeatureListItem>API integrations & webhooks</FeatureListItem>
                    <FeatureListItem>Document generation</FeatureListItem>
                  </ul>
                </CardContent>
              </Card>

              {/* AI-Powered Features */}
              <Card className="border-2 border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Brain className="h-6 w-6 mr-2 text-purple-600" />
                    AI-Powered Features
                    <span className="ml-auto text-sm font-normal bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Optional add-ons</span>
                  </CardTitle>
                  <CardDescription>Using GPT-4, Claude, ML models</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700">
                    <FeatureListItem>Chatbots with natural language understanding</FeatureListItem>
                    <FeatureListItem>AI voice/call bots for customer service</FeatureListItem>
                    <FeatureListItem>Predictive lead scoring (ML models)</FeatureListItem>
                    <FeatureListItem>Sentiment analysis</FeatureListItem>
                    <FeatureListItem>Advanced document extraction (OCR/NLP)</FeatureListItem>
                    <FeatureListItem>Content generation & summarization</FeatureListItem>
                    <FeatureListItem>Intelligent recommendations</FeatureListItem>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
              <p className="text-green-800">
                <strong>Our Approach:</strong> We start with robust workflow automation that solves 80-90% of your needs efficiently and cost-effectively.
                Then we strategically add AI capabilities where they provide measurable ROI—not as a buzzword, but as a genuine business advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - Core Features */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
            Everything You Need, Fully Managed
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Our enterprise managed service includes comprehensive automation capabilities, secure infrastructure, and
            dedicated support—all managed by our MASP-certified team.
          </p>

          {/* Core Automation Capabilities */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center justify-center">
              <Brain className="h-8 w-8 mr-3 text-blue-600" />
              Core Automation Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Custom Workflow Automation</h3>
                  <p className="text-sm text-slate-600">
                    Sophisticated multi-step workflows tailored to your business processes using n8n, Make.com, and Zapier
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Workflow className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Custom Workflow Design</h3>
                  <p className="text-sm text-slate-600">
                    Complex automations requiring no coding or technical expertise from your team
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Database className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Data Processing & Sync</h3>
                  <p className="text-sm text-slate-600">
                    Advanced data transformation, analysis, and real-time integration
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Analytics & Insights</h3>
                  <p className="text-sm text-slate-600">
                    Comprehensive dashboards and reporting with data-driven insights
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Communication & Marketing */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center justify-center">
              <Mail className="h-8 w-8 mr-3 text-green-600" />
              Communication & Marketing Automation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white border-2 hover:border-green-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Email Campaigns</h3>
                  <p className="text-sm text-slate-600">Personalized sequences, drip campaigns, and automated responses</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 hover:border-green-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Smartphone className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">SMS Marketing</h3>
                  <p className="text-sm text-slate-600">Automated text campaigns and two-way SMS conversations</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 hover:border-green-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Social Media Management</h3>
                  <p className="text-sm text-slate-600">Automated posting, engagement, and multi-platform management</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 hover:border-green-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">AI Chatbots & Call Bots</h3>
                  <p className="text-sm text-slate-600">AI-powered customer support, lead qualification, and voice automation using GPT-4 and Claude</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Business Process Automation */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center justify-center">
              <Target className="h-8 w-8 mr-3 text-purple-600" />
              Business Process Automation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-purple-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">CRM Integration</h3>
                  <p className="text-sm text-slate-600">Seamless automation with your CRM for efficient management</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Appointment Scheduling</h3>
                  <p className="text-sm text-slate-600">Automated booking, reminders, and calendar synchronization</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Document Workflow</h3>
                  <p className="text-sm text-slate-600">Automated generation, processing, and management of documents</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-200 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Lead Management</h3>
                  <p className="text-sm text-slate-600">Intelligent lead scoring and automated follow-up sequences</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
            <GitMerge className="inline-block h-10 w-10 mr-3 mb-1 text-indigo-600" />
            Flexible Infrastructure Options
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            We adapt to your needs—deploy new private infrastructure, enhance your current automation tools, or create a
            hybrid solution. Your choice.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-indigo-200 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Layers className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Private Infrastructure</h3>
                <p className="text-sm text-slate-600">
                  Dedicated, isolated environment with secure private cloud servers managed by our team
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <PlugZap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Existing Tool Enhancement</h3>
                <p className="text-sm text-slate-600">
                  Using Zapier, Make.com, HubSpot, n8n? We plug in to enhance and manage your current setup
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Rocket className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Workflow Optimization</h3>
                <p className="text-sm text-slate-600">
                  Build new efficient workflows or optimize existing ones for peak performance and ROI
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-indigo-200 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Settings2 className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Ongoing Management</h3>
                <p className="text-sm text-slate-600">
                  Continuous maintenance, support, and strategic guidance for long-term success
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise-Grade Security Section */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
            <Lock className="inline-block h-10 w-10 mr-3 mb-1 text-red-600" />
            Enterprise-Grade Security—No Compromises
          </h2>
          <p className="text-lg text-slate-600 text-center mb-10 max-w-3xl mx-auto">
            Every client gets their own private infrastructure or a secure connection into their existing tools. We never
            share environments, and your data stays fully isolated or protected.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Service Level Guarantees */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Enterprise Service Level Guarantees</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
                <div className="text-sm text-slate-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1-2 hrs</div>
                <div className="text-sm text-slate-600">Priority Support Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-slate-600">Monitoring & Alerts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included in Management */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
            White-Glove Managed Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 mr-2 text-green-600" />
                  Implementation & Onboarding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <FeatureListItem>Comprehensive automation audit</FeatureListItem>
                  <FeatureListItem>Custom infrastructure setup</FeatureListItem>
                  <FeatureListItem>Platform integrations (unlimited)</FeatureListItem>
                  <FeatureListItem>Team training & documentation</FeatureListItem>
                  <FeatureListItem>Executive and ops team onboarding</FeatureListItem>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 mr-2 text-green-600" />
                  Ongoing Support & Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <FeatureListItem>Dedicated account manager</FeatureListItem>
                  <FeatureListItem>Weekly strategy calls</FeatureListItem>
                  <FeatureListItem>Priority support (1-2 hr response)</FeatureListItem>
                  <FeatureListItem>Continuous optimization reviews</FeatureListItem>
                  <FeatureListItem>Real-time analytics & reporting</FeatureListItem>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 mr-2 text-green-600" />
                  Automation Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <FeatureListItem>Unlimited active workflows</FeatureListItem>
                  <FeatureListItem>Multi-channel communication automation</FeatureListItem>
                  <FeatureListItem>Predictive lead scoring & routing</FeatureListItem>
                  <FeatureListItem>Complex workflows with intelligent logic</FeatureListItem>
                  <FeatureListItem>Optional AI agents and NLP capabilities for chatbots and advanced use cases</FeatureListItem>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 mr-2 text-green-600" />
                  Enterprise Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <FeatureListItem>Dedicated private server or hybrid setup</FeatureListItem>
                  <FeatureListItem>SOC 2 & GDPR compliance support</FeatureListItem>
                  <FeatureListItem>Automated backups & disaster recovery</FeatureListItem>
                  <FeatureListItem>Custom integration development</FeatureListItem>
                  <FeatureListItem>Custom reporting & dashboards</FeatureListItem>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
            Our Technology Stack
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Automation Platforms */}
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Workflow className="h-6 w-6 mr-2 text-blue-600" />
                  Automation Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-slate-900">Private Infrastructure:</p>
                    <p className="text-sm text-slate-600">n8n (self-hosted, Docker isolated)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Existing Tools:</p>
                    <p className="text-sm text-slate-600">Make.com, Zapier, HubSpot Workflows</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 italic">We enhance & manage what you already use</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Integrations */}
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="h-6 w-6 mr-2 text-purple-600" />
                  AI Integrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-slate-900">When Needed:</p>
                    <p className="text-sm text-slate-600">OpenAI (GPT-4), Anthropic (Claude)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Cloud AI Services:</p>
                    <p className="text-sm text-slate-600">AWS AI, Google Cloud AI, Azure AI</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 italic">For chatbots, voice bots, and ML features</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Infrastructure */}
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="h-6 w-6 mr-2 text-green-600" />
                  Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-slate-900">Cloud Providers:</p>
                    <p className="text-sm text-slate-600">AWS, Google Cloud, Azure</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Security:</p>
                    <p className="text-sm text-slate-600">Docker containers, Private VPCs, SSL/TLS</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">SLA:</p>
                    <p className="text-sm text-slate-600">99.99% uptime guarantee</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl">
              <p className="text-slate-700">
                <strong className="text-blue-700">1,000+ App Integrations</strong> available through our automation platforms.
                We connect to any tool with an API—from CRMs and marketing platforms to custom internal systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by MASP Framework Section */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800">
            <Zap className="inline-block h-10 w-10 mr-3 mb-1 text-blue-600" />
            Powered by the MASP Framework
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-slate-600">
            <p>
              We're not just automation experts—we're MASP Certified. The Managed Automation Service Provider (MASP)
              framework is our proprietary methodology for delivering scalable, secure, fully managed automation systems.
            </p>
            <p className="italic text-sm text-slate-500">
              We've officially filed a trademark for MASP and MASP Certified, currently under review through our legal
              team.
            </p>
            <p>
              Whether you want to plug in, build new, or scale up—our MASP process is built to meet you where you are and
              take you further.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Rocket className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with Enterprise Automation?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Book a strategy call to discuss your automation needs and get a custom implementation plan from our
            MASP-certified team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3" asChild>
              <Link href="/schedule">
                <span className="inline-flex items-center">
                  Book Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3"
              asChild
            >
              <Link href="/departmental-automation-examples">See Real-World Examples</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
