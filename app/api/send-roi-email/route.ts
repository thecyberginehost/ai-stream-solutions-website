import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function generateROIEmailHTML(data: {
  firstName?: string
  lastName?: string
  email: string
  companyName?: string
  roiData: {
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
  }
}) {
  const { firstName, lastName, companyName, roiData } = data
  const fullName = [firstName, lastName].filter(Boolean).join(' ')

  // Calculate 3-year projections
  const year2Savings = roiData.yearlyCostSaved
  const year3Savings = roiData.yearlyCostSaved
  const threeYearTotal = roiData.netFirstYearSavings + year2Savings + year3Savings

  // Calculate FTE equivalent (assuming $100k per FTE including benefits)
  const fteEquivalent = Math.floor(roiData.yearlyCostSaved / 100000)

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your ROI Analysis Report</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6; line-height: 1.6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6;">
    <tr>
      <td style="padding: 40px 20px;">
        <!-- Main Container -->
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 40px 30px; text-align: center;">
              <div style="background-color: #ffffff; border: 2px solid #e2e8f0; border-radius: 12px; padding: 20px; display: inline-block; margin-bottom: 15px;">
                <img src="https://ai-stream-solutions.s3.us-east-1.amazonaws.com/ai-stream-logo.png" alt="AI Stream Solutions" style="max-width: 200px; height: auto; display: block;" />
              </div>
              <p style="margin: 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">Your Automation ROI Analysis</p>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding: 30px 30px 20px 30px;">
              <p style="margin: 0 0 15px 0; font-size: 16px; color: #1e293b;">
                ${fullName ? `Hi <strong>${fullName}</strong>,` : 'Hello,'}
              </p>
              <p style="margin: 0; font-size: 16px; color: #475569;">
                Thank you for using our ROI Calculator! Here's your personalized automation savings analysis${companyName ? ` for <strong>${companyName}</strong>` : ''}.
              </p>
            </td>
          </tr>

          <!-- Executive Summary -->
          <tr>
            <td style="padding: 30px 30px 20px 30px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-left: 4px solid #2563eb;">
              <h2 style="margin: 0 0 15px 0; font-size: 18px; color: #1e40af; font-weight: bold;">📊 Executive Summary</h2>
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="margin: 0; font-size: 15px; color: #1e293b;">
                      <strong>•</strong> Save <strong>$${roiData.yearlyCostSaved.toLocaleString()}/year</strong> with ${roiData.yearlyTimeSaved.toLocaleString()} hours freed up
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="margin: 0; font-size: 15px; color: #1e293b;">
                      <strong>•</strong> <strong>${roiData.monthsToROI} month${roiData.monthsToROI !== 1 ? 's' : ''}</strong> to full ROI payback
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="margin: 0; font-size: 15px; color: #1e293b;">
                      <strong>•</strong> <strong>$${threeYearTotal.toLocaleString()}</strong> in cumulative savings over 3 years
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Key Metrics Section -->
          <tr>
            <td style="padding: 20px 30px;">
              <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">📊 Your Key Metrics</h2>

              <!-- Current Situation -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 15px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #2563eb;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="padding: 5px 0;">
                          <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Employees</p>
                          <p style="margin: 5px 0 0 0; font-size: 20px; font-weight: bold; color: #1e293b;">${roiData.employees}</p>
                        </td>
                        <td style="padding: 5px 0;">
                          <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Hours/Week</p>
                          <p style="margin: 5px 0 0 0; font-size: 20px; font-weight: bold; color: #1e293b;">${roiData.hoursPerWeek}h</p>
                        </td>
                        <td style="padding: 5px 0;">
                          <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Hourly Rate</p>
                          <p style="margin: 5px 0 0 0; font-size: 20px; font-weight: bold; color: #1e293b;">$${roiData.avgHourlyRate}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Big Impact Numbers -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <!-- Yearly Savings -->
                <tr>
                  <td style="padding: 0 0 15px 0;">
                    <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%); border: 2px solid #16a34a; border-radius: 10px; padding: 20px; text-align: center;">
                      <tr>
                        <td>
                          <p style="margin: 0 0 8px 0; font-size: 13px; color: #15803d; text-transform: uppercase; letter-spacing: 0.5px;">💰 Annual Cost Savings</p>
                          <p style="margin: 0 0 5px 0; font-size: 36px; font-weight: bold; color: #16a34a;">$${roiData.yearlyCostSaved.toLocaleString()}</p>
                          <p style="margin: 0; font-size: 12px; color: #15803d;">${roiData.yearlyTimeSaved.toLocaleString()} hours saved per year</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- ROI & Net Savings -->
                <tr>
                  <td>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="width: 48%; padding-right: 2%;">
                          <table role="presentation" style="width: 100%; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 2px solid #f59e0b; border-radius: 10px; padding: 15px; text-align: center;">
                            <tr>
                              <td>
                                <p style="margin: 0 0 8px 0; font-size: 12px; color: #b45309; text-transform: uppercase;">⚡ Time to ROI</p>
                                <p style="margin: 0 0 5px 0; font-size: 28px; font-weight: bold; color: #f59e0b;">${roiData.monthsToROI}</p>
                                <p style="margin: 0; font-size: 11px; color: #b45309;">months to break even</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td style="width: 48%; padding-left: 2%;">
                          <table role="presentation" style="width: 100%; background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%); border: 2px solid #a855f7; border-radius: 10px; padding: 15px; text-align: center;">
                            <tr>
                              <td>
                                <p style="margin: 0 0 8px 0; font-size: 12px; color: #7e22ce; text-transform: uppercase;">📈 Net Year 1</p>
                                <p style="margin: 0 0 5px 0; font-size: 28px; font-weight: bold; color: #a855f7;">$${roiData.netFirstYearSavings.toLocaleString()}</p>
                                <p style="margin: 0; font-size: 11px; color: #7e22ce;">after investment</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Savings Breakdown by Time Period -->
          <tr>
            <td style="padding: 20px 30px;">
              <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">📅 Savings Breakdown</h2>

              <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8fafc; border-radius: 8px; padding: 20px;">
                <tr>
                  <td>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr style="background-color: #e0f2fe;">
                        <td style="padding: 12px; font-weight: bold; color: #0c4a6e; border-bottom: 2px solid #2563eb;">Time Period</td>
                        <td style="padding: 12px; font-weight: bold; color: #0c4a6e; text-align: right; border-bottom: 2px solid #2563eb;">Hours Saved</td>
                        <td style="padding: 12px; font-weight: bold; color: #0c4a6e; text-align: right; border-bottom: 2px solid #2563eb;">Cost Saved</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">Weekly</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: bold; color: #1e293b;">${roiData.weeklyTimeSaved.toLocaleString()}h</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: bold; color: #16a34a;">$${roiData.weeklyCostSaved.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">Monthly</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: bold; color: #1e293b;">${roiData.monthlyTimeSaved.toLocaleString()}h</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: bold; color: #16a34a;">$${roiData.monthlyCostSaved.toLocaleString()}</td>
                      </tr>
                      <tr style="background-color: #dcfce7;">
                        <td style="padding: 12px; font-weight: bold; color: #15803d;">Yearly</td>
                        <td style="padding: 12px; text-align: right; font-weight: bold; color: #15803d;">${roiData.yearlyTimeSaved.toLocaleString()}h</td>
                        <td style="padding: 12px; text-align: right; font-weight: bold; color: #15803d;">$${roiData.yearlyCostSaved.toLocaleString()}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 3-Year Projection -->
          <tr>
            <td style="padding: 20px 30px;">
              <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">📈 3-Year Savings Projection</h2>

              <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border: 2px solid #2563eb; border-radius: 8px; padding: 20px;">
                <tr>
                  <td>
                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #bae6fd; color: #0c4a6e; font-weight: bold;">Year 1 (Net)</td>
                        <td style="padding: 10px; border-bottom: 1px solid #bae6fd; text-align: right; font-weight: bold; color: #0c4a6e;">$${roiData.netFirstYearSavings.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #bae6fd; color: #0c4a6e; font-weight: bold;">Year 2</td>
                        <td style="padding: 10px; border-bottom: 1px solid #bae6fd; text-align: right; font-weight: bold; color: #0c4a6e;">$${year2Savings.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border-bottom: 2px solid #2563eb; color: #0c4a6e; font-weight: bold;">Year 3</td>
                        <td style="padding: 10px; border-bottom: 2px solid #2563eb; text-align: right; font-weight: bold; color: #0c4a6e;">$${year3Savings.toLocaleString()}</td>
                      </tr>
                      <tr style="background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);">
                        <td style="padding: 15px; font-size: 16px; font-weight: bold; color: #15803d;">Total 3-Year Savings</td>
                        <td style="padding: 15px; text-align: right; font-size: 20px; font-weight: bold; color: #16a34a;">$${threeYearTotal.toLocaleString()}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- What This Means -->
          <tr>
            <td style="padding: 20px 30px;">
              <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">💡 What This Means for ${companyName || 'Your Business'}</h2>

              <table role="presentation" style="width: 100%; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 20px;">
                <tr>
                  <td>
                    ${fteEquivalent > 0 ? `
                    <p style="margin: 0 0 15px 0; font-size: 15px; color: #78350f;">
                      <strong>📊 FTE Equivalent:</strong> Your yearly savings of <strong>$${roiData.yearlyCostSaved.toLocaleString()}</strong> is equivalent to adding <strong>${fteEquivalent}${fteEquivalent === 1 ? '' : '+'} full-time employee${fteEquivalent === 1 ? '' : 's'}</strong> to your team—without the overhead, benefits, or management costs.
                    </p>
                    ` : ''}
                    <p style="margin: 0 0 15px 0; font-size: 15px; color: #78350f;">
                      <strong>⚡ Productivity Gain:</strong> With <strong>${roiData.yearlyTimeSaved.toLocaleString()} hours</strong> saved annually, your team can focus on high-value strategic work instead of repetitive tasks.
                    </p>
                    <p style="margin: 0; font-size: 15px; color: #78350f;">
                      <strong>💰 Payback Speed:</strong> You'll break even in just <strong>${roiData.monthsToROI} month${roiData.monthsToROI !== 1 ? 's' : ''}</strong>, meaning every dollar saved afterward is pure profit added to your bottom line.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- What You Get -->
          <tr>
            <td style="padding: 20px 30px;">
              <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #2563eb; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">✨ What's Included</h2>

              <table role="presentation" style="width: 100%;">
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="margin: 0; font-size: 15px; color: #1e293b;">✅ Enterprise-grade infrastructure (99.99% uptime)</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="margin: 0; font-size: 15px; color: #1e293b;">✅ Dedicated account manager</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="margin: 0; font-size: 15px; color: #1e293b;">✅ Weekly strategy calls</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="margin: 0; font-size: 15px; color: #1e293b;">✅ Real-time monitoring & analytics</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <p style="margin: 0; font-size: 15px; color: #1e293b;">✅ Unlimited workflow updates</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="padding: 30px 30px 20px 30px; text-align: center;">
              <table role="presentation" style="margin: 0 auto;">
                <tr>
                  <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); border-radius: 8px; padding: 16px 32px;">
                    <a href="https://aistreamsolutions.com/services" style="color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold; display: block;">🚀 Schedule Your Free Audit</a>
                  </td>
                </tr>
              </table>
              <p style="margin: 15px 0 0 0; font-size: 14px; color: #64748b;">Let's turn these savings into reality!</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 30px;">
              <div style="border-top: 1px solid #e2e8f0;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px; text-align: center; background-color: #f8fafc;">
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #1e293b; font-weight: bold;">AI Stream Solutions</p>
              <p style="margin: 0 0 5px 0; font-size: 13px; color: #64748b;">
                <a href="https://aistreamsolutions.com" style="color: #2563eb; text-decoration: none;">aistreamsolutions.com</a>
              </p>
              <p style="margin: 0 0 15px 0; font-size: 13px; color: #64748b;">
                <a href="mailto:contact@aistreamsolutions.com" style="color: #2563eb; text-decoration: none;">contact@aistreamsolutions.com</a>
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                © ${new Date().getFullYear()} AI Stream Solutions. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, firstName, lastName, companyName, roiData } = body

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!roiData) {
      return NextResponse.json(
        { error: 'ROI data is required' },
        { status: 400 }
      )
    }

    // Send email via Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'AI Stream Solutions <roi@mail.aistreamsolutions.com>',
      to: [email],
      subject: `Your ROI Analysis: Save $${roiData.yearlyCostSaved?.toLocaleString() || 0}/Year with Automation`,
      html: generateROIEmailHTML({
        firstName,
        lastName,
        email,
        companyName,
        roiData,
      }),
    })

    if (emailError) {
      console.error('Resend error:', emailError)
      return NextResponse.json(
        { error: 'Failed to send email', details: emailError.message },
        { status: 500 }
      )
    }

    console.log('Email sent successfully:', emailData)

    // Add lead to Instantly.ai
    try {
      const instantlyApiKey = process.env.INSTANTLY_API_KEY
      const campaignId = process.env.INSTANTLY_CAMPAIGN_ID

      if (instantlyApiKey && campaignId) {
        const instantlyPayload = {
          email,
          campaign_id: campaignId,
          first_name: firstName || '',
          last_name: lastName || '',
          company_name: companyName || '',
          variables: {
            employees: roiData.employees?.toString() || '0',
            hours_per_week: roiData.hoursPerWeek?.toString() || '0',
            avg_hourly_rate: roiData.avgHourlyRate?.toString() || '0',
            yearly_time_saved: roiData.yearlyTimeSaved?.toString() || '0',
            yearly_cost_saved: roiData.yearlyCostSaved?.toString() || '0',
            monthly_cost_saved: roiData.monthlyCostSaved?.toString() || '0',
            months_to_roi: roiData.monthsToROI?.toString() || '0',
            net_first_year_savings: roiData.netFirstYearSavings?.toString() || '0',
          },
        }

        const instantlyResponse = await fetch('https://api.instantly.ai/api/v2/leads', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${instantlyApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(instantlyPayload),
        })

        if (instantlyResponse.ok) {
          console.log('Lead added to Instantly.ai successfully')
        } else {
          const instantlyError = await instantlyResponse.text()
          console.error('Instantly.ai error:', instantlyError)
          // Don't fail the whole request if Instantly.ai fails
        }
      }
    } catch (instantlyError) {
      console.error('Error adding to Instantly.ai:', instantlyError)
      // Don't fail the whole request if Instantly.ai fails
    }

    return NextResponse.json({
      success: true,
      message: 'ROI report has been sent to your email!',
      emailId: emailData?.id,
    })
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
