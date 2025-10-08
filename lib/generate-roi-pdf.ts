import jsPDF from 'jspdf'

interface ROIData {
  employees: number
  hoursPerWeek: number
  avgHourlyRate: number
  weeklyTimeSaved: number
  monthlyTimeSaved: number
  yearlyTimeSaved: number
  weeklyCostSaved: number
  monthlyCostSaved: number
  yearlyCostSaved: number
  monthsToROI: number
  netFirstYearSavings: number
  email: string
  firstName?: string
  lastName?: string
  companyName?: string
}

export function generateROIPDF(data: ROIData): void {
  const doc = new jsPDF()

  // Brand colors
  const primaryBlue = '#2563eb'
  const darkGray = '#1e293b'
  const lightGray = '#64748b'

  // Header with logo/branding
  doc.setFillColor(37, 99, 235) // Blue
  doc.rect(0, 0, 210, 40, 'F')

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.text('AI Stream Solutions', 20, 20)

  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  doc.text('Automation ROI Analysis Report', 20, 30)

  // Date
  doc.setFontSize(10)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })}`, 20, 36)

  // Reset text color
  doc.setTextColor(30, 41, 59) // Dark gray

  // Client Information
  let yPos = 55
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text('Client Information', 20, yPos)

  yPos += 10
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')

  if (data.firstName || data.lastName) {
    doc.text(`Name: ${data.firstName || ''} ${data.lastName || ''}`, 20, yPos)
    yPos += 7
  }

  if (data.companyName) {
    doc.text(`Company: ${data.companyName}`, 20, yPos)
    yPos += 7
  }

  doc.text(`Email: ${data.email}`, 20, yPos)

  // Input Parameters
  yPos += 15
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text('Your Current Situation', 20, yPos)

  // Box for parameters
  yPos += 5
  doc.setFillColor(241, 245, 249) // Light blue-gray
  doc.rect(20, yPos, 170, 35, 'F')

  yPos += 10
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text(`• Number of Employees: ${data.employees}`, 30, yPos)
  yPos += 8
  doc.text(`• Hours per Week (per employee): ${data.hoursPerWeek}`, 30, yPos)
  yPos += 8
  doc.text(`• Average Hourly Rate: $${data.avgHourlyRate}`, 30, yPos)

  // ROI Results - Big Impact Section
  yPos += 20
  doc.setFontSize(18)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(37, 99, 235) // Blue
  doc.text('Your Automation ROI', 20, yPos)

  // Key Metrics Boxes
  yPos += 10

  // Time Saved Box
  doc.setFillColor(220, 252, 231) // Light green
  doc.rect(20, yPos, 80, 30, 'F')
  doc.setDrawColor(22, 163, 74) // Green border
  doc.setLineWidth(0.5)
  doc.rect(20, yPos, 80, 30, 'S')

  doc.setFontSize(10)
  doc.setTextColor(100, 116, 139)
  doc.setFont('helvetica', 'normal')
  doc.text('Time Saved Per Year', 25, yPos + 8)

  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(22, 163, 74) // Green
  doc.text(`${data.yearlyTimeSaved.toLocaleString()} hrs`, 25, yPos + 20)

  // Cost Saved Box
  doc.setFillColor(219, 234, 254) // Light blue
  doc.rect(110, yPos, 80, 30, 'F')
  doc.setDrawColor(37, 99, 235) // Blue border
  doc.rect(110, yPos, 80, 30, 'S')

  doc.setFontSize(10)
  doc.setTextColor(100, 116, 139)
  doc.setFont('helvetica', 'normal')
  doc.text('Cost Saved Per Year', 115, yPos + 8)

  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(37, 99, 235) // Blue
  doc.text(`$${data.yearlyCostSaved.toLocaleString()}`, 115, yPos + 20)

  yPos += 40

  // ROI Timeline Box
  doc.setFillColor(254, 243, 199) // Light yellow
  doc.rect(20, yPos, 80, 30, 'F')
  doc.setDrawColor(245, 158, 11) // Orange border
  doc.rect(20, yPos, 80, 30, 'S')

  doc.setFontSize(10)
  doc.setTextColor(100, 116, 139)
  doc.setFont('helvetica', 'normal')
  doc.text('Time to ROI', 25, yPos + 8)

  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(245, 158, 11) // Orange
  doc.text(`${data.monthsToROI} months`, 25, yPos + 20)

  // Net Savings Box
  doc.setFillColor(243, 232, 255) // Light purple
  doc.rect(110, yPos, 80, 30, 'F')
  doc.setDrawColor(168, 85, 247) // Purple border
  doc.rect(110, yPos, 80, 30, 'S')

  doc.setFontSize(10)
  doc.setTextColor(100, 116, 139)
  doc.setFont('helvetica', 'normal')
  doc.text('Net First-Year Savings', 115, yPos + 8)

  doc.setFontSize(20)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(168, 85, 247) // Purple
  doc.text(`$${data.netFirstYearSavings.toLocaleString()}`, 115, yPos + 20)

  // Monthly Breakdown
  yPos += 45
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(30, 41, 59)
  doc.text('Monthly Impact', 20, yPos)

  yPos += 8
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text(`• ${data.monthlyTimeSaved} hours/month freed for strategic work`, 25, yPos)
  yPos += 7
  doc.text(`• $${data.monthlyCostSaved.toLocaleString()}/month in cost savings`, 25, yPos)
  yPos += 7
  doc.text('• 99.99% uptime with enterprise-grade infrastructure', 25, yPos)
  yPos += 7
  doc.text('• Dedicated account manager & weekly strategy calls', 25, yPos)

  // Next Steps / CTA
  yPos += 15
  doc.setFillColor(37, 99, 235) // Blue
  doc.rect(20, yPos, 170, 25, 'F')

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('Ready to Unlock These Savings?', 60, yPos + 10)

  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text('Schedule your free automation audit today', 58, yPos + 18)

  // Footer
  yPos = 280
  doc.setTextColor(100, 116, 139)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text('AI Stream Solutions | https://aistreamsolutions.com', 105, yPos, { align: 'center' })
  doc.text('Contact us: contact@aistreamsolutions.com', 105, yPos + 5, { align: 'center' })

  // Save the PDF
  const fileName = `ROI-Report-${new Date().toISOString().split('T')[0]}.pdf`
  doc.save(fileName)
}
