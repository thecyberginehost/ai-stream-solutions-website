'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  CheckCircle2,
  Clock,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  Calendar,
  DollarSign,
  Sparkles,
  Shield,
  BarChart3,
} from 'lucide-react'

export default function PaidAdvertisingPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    currentProcess: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [slotsRemaining, setSlotsRemaining] = useState<number | null>(null)

  // Fetch remaining slots on mount
  useState(() => {
    fetch('/api/get-slots-remaining')
      .then(res => res.json())
      .then(data => setSlotsRemaining(data.remaining))
      .catch(() => setSlotsRemaining(30)) // Default to 30 if API fails
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/add-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.name.split(' ')[0],
          lastName: formData.name.split(' ').slice(1).join(' '),
          companyName: formData.company,
          customVariables: {
            employees: formData.employees,
            current_process: formData.currentProcess,
            phone: formData.phone,
            lead_source: 'paid_advertising_landing_page',
          },
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        // Decrement slot counter
        if (slotsRemaining !== null && slotsRemaining > 0) {
          setSlotsRemaining(slotsRemaining - 1)
        }
        // Update slot count in backend
        fetch('/api/decrement-slot', { method: 'POST' }).catch(console.error)
        // Redirect to Calendly or thank you page after 2 seconds
        setTimeout(() => {
          window.location.href = '/schedule'
        }, 2000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (step === 1 && formData.name && formData.email) {
      setStep(2)
    } else if (step === 2 && formData.company && formData.employees) {
      setStep(3)
    }
  }

  const prevStep = () => setStep(step - 1)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Urgency Bar */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 text-center">
        <p className="text-sm md:text-base font-semibold">
          ⚡ Limited Availability: Only <span className="text-yellow-300">{slotsRemaining ?? 30} consultation slot{slotsRemaining === 1 ? '' : 's'}</span> left this month
        </p>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Copy */}
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-semibold">Free Automation Strategy Call</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Cut Costs by 40% & <span className="text-blue-600">Save 2,000+ Hours/Year</span> with AI Automation
                </h1>

                <p className="text-xl text-gray-600 mb-8">
                  Stop wasting money on repetitive tasks. Our AI automation systems help businesses eliminate manual work, reduce errors, and scale operations—without hiring more staff.
                </p>

                {/* Trust Signals */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Average ROI:</strong> 3.2x in first 6 months</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Setup Time:</strong> Live in 2 weeks, not months</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Free Consultation:</strong> 30-min strategy call with expert</span>
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="md:hidden">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg py-6"
                    onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Free Audit <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>

              {/* Right: Lead Form */}
              <div id="lead-form" className="hidden md:block">
                <Card className="shadow-2xl border-2 border-blue-100">
                  <CardContent className="p-8">
                    {submitSuccess ? (
                      <div className="text-center py-8">
                        <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">You're All Set!</h3>
                        <p className="text-gray-600 mb-4">Redirecting you to book your audit call...</p>
                      </div>
                    ) : (
                      <>
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Get Your Free Automation Audit
                          </h3>
                          <p className="text-gray-600">Step {step} of 3 • Takes 60 seconds</p>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-6">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
                              style={{ width: `${(step / 3) * 100}%` }}
                            />
                          </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                          {step === 1 && (
                            <>
                              <div>
                                <Label htmlFor="name">Full Name *</Label>
                                <Input
                                  id="name"
                                  required
                                  value={formData.name}
                                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                  placeholder="John Smith"
                                  className="text-lg py-6"
                                />
                              </div>
                              <div>
                                <Label htmlFor="email">Work Email *</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  required
                                  value={formData.email}
                                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                  placeholder="john@company.com"
                                  className="text-lg py-6"
                                />
                              </div>
                              <Button
                                type="button"
                                onClick={nextStep}
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg py-6"
                                disabled={!formData.name || !formData.email}
                              >
                                Continue <ArrowRight className="ml-2" />
                              </Button>
                            </>
                          )}

                          {step === 2 && (
                            <>
                              <div>
                                <Label htmlFor="company">Company Name *</Label>
                                <Input
                                  id="company"
                                  required
                                  value={formData.company}
                                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                  placeholder="Your Company Inc."
                                  className="text-lg py-6"
                                />
                              </div>
                              <div>
                                <Label htmlFor="employees">Company Size *</Label>
                                <select
                                  id="employees"
                                  required
                                  value={formData.employees}
                                  onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                                  className="w-full px-3 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                  <option value="">Select size...</option>
                                  <option value="1-10">1-10 employees</option>
                                  <option value="11-50">11-50 employees</option>
                                  <option value="51-200">51-200 employees</option>
                                  <option value="201-500">201-500 employees</option>
                                  <option value="500+">500+ employees</option>
                                </select>
                              </div>
                              <div className="flex gap-3">
                                <Button
                                  type="button"
                                  onClick={prevStep}
                                  variant="outline"
                                  className="flex-1 py-6"
                                >
                                  Back
                                </Button>
                                <Button
                                  type="button"
                                  onClick={nextStep}
                                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-6"
                                  disabled={!formData.company || !formData.employees}
                                >
                                  Continue <ArrowRight className="ml-2" />
                                </Button>
                              </div>
                            </>
                          )}

                          {step === 3 && (
                            <>
                              <div>
                                <Label htmlFor="currentProcess">What's your biggest time drain? *</Label>
                                <select
                                  id="currentProcess"
                                  required
                                  value={formData.currentProcess}
                                  onChange={(e) => setFormData({ ...formData, currentProcess: e.target.value })}
                                  className="w-full px-3 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                  <option value="">Select one...</option>
                                  <option value="Data Entry">Manual data entry</option>
                                  <option value="Reporting">Creating reports</option>
                                  <option value="Customer Communication">Customer emails/communication</option>
                                  <option value="Lead Management">Managing leads/CRM</option>
                                  <option value="Scheduling">Scheduling & calendar management</option>
                                  <option value="Other">Other repetitive tasks</option>
                                </select>
                              </div>
                              <div>
                                <Label htmlFor="phone">Phone (Optional)</Label>
                                <Input
                                  id="phone"
                                  type="tel"
                                  value={formData.phone}
                                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                  placeholder="+1 (555) 123-4567"
                                  className="text-lg py-6"
                                />
                              </div>
                              <div className="flex gap-3">
                                <Button
                                  type="button"
                                  onClick={prevStep}
                                  variant="outline"
                                  className="flex-1 py-6"
                                >
                                  Back
                                </Button>
                                <Button
                                  type="submit"
                                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg py-6"
                                  disabled={isSubmitting || !formData.currentProcess}
                                >
                                  {isSubmitting ? 'Submitting...' : 'Book My Audit'} <Calendar className="ml-2" />
                                </Button>
                              </div>
                            </>
                          )}
                        </form>

                        <p className="text-xs text-gray-500 text-center mt-4">
                          🔒 Your information is secure. No spam, ever.
                        </p>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Form Section */}
      <section className="md:hidden py-12 bg-white">
        <div className="container mx-auto px-4">
          <Card className="shadow-xl">
            <CardContent className="p-6">
              {/* Same form as desktop but for mobile */}
              {submitSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">You're All Set!</h3>
                  <p className="text-gray-600 mb-4">Redirecting you to book your audit call...</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Get Your Free Automation Audit
                    </h3>
                    <p className="text-gray-600">Step {step} of 3</p>
                  </div>

                  <div className="mb-6">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
                        style={{ width: `${(step / 3) * 100}%` }}
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {step === 1 && (
                      <>
                        <div>
                          <Label htmlFor="name-mobile">Full Name *</Label>
                          <Input
                            id="name-mobile"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Smith"
                            className="py-6"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email-mobile">Work Email *</Label>
                          <Input
                            id="email-mobile"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@company.com"
                            className="py-6"
                          />
                        </div>
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-6"
                          disabled={!formData.name || !formData.email}
                        >
                          Continue <ArrowRight className="ml-2" />
                        </Button>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <div>
                          <Label htmlFor="company-mobile">Company Name *</Label>
                          <Input
                            id="company-mobile"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Your Company Inc."
                            className="py-6"
                          />
                        </div>
                        <div>
                          <Label htmlFor="employees-mobile">Company Size *</Label>
                          <select
                            id="employees-mobile"
                            required
                            value={formData.employees}
                            onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select size...</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="500+">500+ employees</option>
                          </select>
                        </div>
                        <div className="flex gap-3">
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            className="flex-1 py-6"
                          >
                            Back
                          </Button>
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-6"
                            disabled={!formData.company || !formData.employees}
                          >
                            Continue <ArrowRight className="ml-2" />
                          </Button>
                        </div>
                      </>
                    )}

                    {step === 3 && (
                      <>
                        <div>
                          <Label htmlFor="currentProcess-mobile">What's your biggest time drain? *</Label>
                          <select
                            id="currentProcess-mobile"
                            required
                            value={formData.currentProcess}
                            onChange={(e) => setFormData({ ...formData, currentProcess: e.target.value })}
                            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select one...</option>
                            <option value="Data Entry">Manual data entry</option>
                            <option value="Reporting">Creating reports</option>
                            <option value="Customer Communication">Customer emails/communication</option>
                            <option value="Lead Management">Managing leads/CRM</option>
                            <option value="Scheduling">Scheduling & calendar management</option>
                            <option value="Other">Other repetitive tasks</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="phone-mobile">Phone (Optional)</Label>
                          <Input
                            id="phone-mobile"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (555) 123-4567"
                            className="py-6"
                          />
                        </div>
                        <div className="flex gap-3">
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            className="flex-1 py-6"
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-6"
                            disabled={isSubmitting || !formData.currentProcess}
                          >
                            {isSubmitting ? 'Submitting...' : 'Book Audit'} <Calendar className="ml-2" />
                          </Button>
                        </div>
                      </>
                    )}
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join 200+ Companies Already Automating Their Growth
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                stat: '$374K',
                label: 'Avg. Yearly Savings',
                icon: <DollarSign className="h-8 w-8" />,
              },
              {
                stat: '2,400',
                label: 'Hours Saved/Year',
                icon: <Clock className="h-8 w-8" />,
              },
              {
                stat: '3.2x',
                label: 'ROI in 6 Months',
                icon: <TrendingUp className="h-8 w-8" />,
              },
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {item.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{item.stat}</div>
                  <div className="text-gray-600">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              From audit to automation in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'Free Audit Call',
                description: 'We analyze your workflows and identify automation opportunities (30 min)',
                icon: <Users className="h-6 w-6" />,
              },
              {
                step: '2',
                title: 'Custom Strategy',
                description: 'Get a tailored automation roadmap with ROI projections (48 hours)',
                icon: <BarChart3 className="h-6 w-6" />,
              },
              {
                step: '3',
                title: 'Go Live',
                description: 'We build, test, and deploy your automations (2 weeks)',
                icon: <Zap className="h-6 w-6" />,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Save 2,000+ Hours This Year?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Book your free audit call today and discover exactly how much time and money automation can save your business
          </p>
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-xl px-12 py-8"
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book My Free Audit Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <p className="text-sm text-blue-200 mt-4">⚡ Only {slotsRemaining ?? 30} spots left this month</p>
        </div>
      </section>
    </div>
  )
}
