"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { DollarSign, Clock, TrendingUp, CheckCircle, Download } from "lucide-react"
import { generateROIPDF } from "@/lib/generate-roi-pdf"

interface ROICalculatorProps {
  onClose?: () => void
  isStandalone?: boolean
}

export default function ROICalculator({ onClose, isStandalone = false }: ROICalculatorProps) {
  const [employees, setEmployees] = useState(5)
  const [hoursPerWeek, setHoursPerWeek] = useState(10)
  const [avgHourlyRate, setAvgHourlyRate] = useState(50)
  const [showResults, setShowResults] = useState(false)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [consentMarketing, setConsentMarketing] = useState(false)
  const [consentContact, setConsentContact] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Calculations
  const weeklyTimeSaved = employees * hoursPerWeek
  const monthlyTimeSaved = weeklyTimeSaved * 4
  const yearlyTimeSaved = monthlyTimeSaved * 12

  const weeklyCostSaved = weeklyTimeSaved * avgHourlyRate
  const monthlyCostSaved = weeklyCostSaved * 4
  const yearlyCostSaved = monthlyCostSaved * 12

  const estimatedInvestment = 5000 // Starting price
  const monthsToROI = Math.ceil(estimatedInvestment / monthlyCostSaved)
  const netFirstYearSavings = yearlyCostSaved - estimatedInvestment

  const handleCalculate = () => {
    setShowResults(true)
  }

  const handleDownloadReport = () => {
    setShowEmailForm(true)
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send to n8n webhook for PDF generation and email delivery
      const response = await fetch('/api/send-roi-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          companyName,
          roiData: {
            employees,
            hoursPerWeek,
            avgHourlyRate,
            weeklyTimeSaved,
            monthlyTimeSaved,
            yearlyTimeSaved,
            weeklyCostSaved,
            monthlyCostSaved,
            yearlyCostSaved,
            monthsToROI,
            netFirstYearSavings,
          },
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        console.error('Error sending ROI report:', result)
        throw new Error(result.error || 'Failed to send report')
      }

      setShowEmailForm(false)
      alert(`Success! Your personalized ROI report is being sent to ${email}. Please check your inbox in a few moments.`)
    } catch (error) {
      console.error('Error:', error)
      alert("There was an error processing your request. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={isStandalone ? "" : "p-6"}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Calculate Your Automation ROI</h3>
        <p className="text-gray-600">
          See exactly how much time and money you'll save by automating repetitive tasks.
        </p>
      </div>

      <div className="space-y-6">
        {/* Input Section */}
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
          <div className="space-y-6">
            <div>
              <Label htmlFor="employees" className="text-sm font-medium text-gray-700 mb-2 block">
                Number of employees doing repetitive tasks
              </Label>
              <div className="flex items-center gap-4">
                <Slider
                  id="employees"
                  min={1}
                  max={50}
                  step={1}
                  value={[employees]}
                  onValueChange={(value) => setEmployees(value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-20"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="hours" className="text-sm font-medium text-gray-700 mb-2 block">
                Hours per week spent on repetitive tasks (per employee)
              </Label>
              <div className="flex items-center gap-4">
                <Slider
                  id="hours"
                  min={1}
                  max={40}
                  step={1}
                  value={[hoursPerWeek]}
                  onValueChange={(value) => setHoursPerWeek(value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-20"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="rate" className="text-sm font-medium text-gray-700 mb-2 block">
                Average hourly rate ($/hour)
              </Label>
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="rate"
                    type="number"
                    value={avgHourlyRate}
                    onChange={(e) => setAvgHourlyRate(Number(e.target.value))}
                    className="pl-9"
                    placeholder="50"
                  />
                </div>
              </div>
            </div>

            <Button onClick={handleCalculate} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Calculate My ROI
            </Button>
          </div>
        </Card>

        {/* Results Section */}
        {showResults && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Time Saved Per Year</p>
                    <p className="text-3xl font-bold text-green-600">{yearlyTimeSaved.toLocaleString()}</p>
                    <p className="text-sm text-gray-500 mt-1">hours</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Cost Saved Per Year</p>
                    <p className="text-3xl font-bold text-blue-600">${yearlyCostSaved.toLocaleString()}</p>
                    <p className="text-sm text-gray-500 mt-1">in labor costs</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Time to ROI</p>
                  <p className="text-3xl font-bold text-purple-600">{monthsToROI} months</p>
                  <p className="text-sm text-gray-500 mt-1">to break even on your investment</p>
                </div>
              </div>
              <div className="pt-4 border-t border-purple-200">
                <p className="text-sm text-gray-600 mb-1">Net First-Year Savings</p>
                <p className="text-2xl font-bold text-purple-900">
                  ${netFirstYearSavings.toLocaleString()}
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                What You Get With Automation
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>
                    <strong>{monthlyTimeSaved} hours/month</strong> freed up for strategic work
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>
                    <strong>${monthlyCostSaved.toLocaleString()}/month</strong> in cost savings
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>99.99% uptime with enterprise-grade infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Dedicated account manager & weekly strategy calls</span>
                </li>
              </ul>
            </Card>

            {!showEmailForm ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleDownloadReport}
                  variant="outline"
                  className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Full Report
                </Button>
                <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="/schedule">Book Strategy Call</a>
                </Button>
              </div>
            ) : (
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Get Your Professional ROI Report</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Enter your details below and we'll email you a personalized PDF analysis.
                </p>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="John"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Doe"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@company.com"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Label htmlFor="companyName" className="text-sm font-medium text-gray-700 mb-2 block">
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Acme Inc."
                      className="w-full"
                    />
                  </div>

                  {/* Consent Checkboxes */}
                  <div className="space-y-3 pt-2 border-t border-blue-200">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consentContact"
                        required
                        checked={consentContact}
                        onChange={(e) => setConsentContact(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <Label htmlFor="consentContact" className="text-sm text-gray-700 cursor-pointer">
                        I agree to be contacted by AI Stream Solutions regarding automation solutions and services. *
                      </Label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consentMarketing"
                        required
                        checked={consentMarketing}
                        onChange={(e) => setConsentMarketing(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <Label htmlFor="consentMarketing" className="text-sm text-gray-700 cursor-pointer">
                        I agree to receive updates, tips, and resources about business automation via email. *
                      </Label>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="submit"
                      disabled={isSubmitting || !consentContact || !consentMarketing}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        "Sending Report..."
                      ) : (
                        "Send My Report"
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowEmailForm(false)}
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Card>
            )}
          </div>
        )}
      </div>

      {onClose && !isStandalone && (
        <div className="mt-6 text-center">
          <Button variant="ghost" onClick={onClose} className="text-gray-500">
            Close Calculator
          </Button>
        </div>
      )}
    </div>
  )
}
