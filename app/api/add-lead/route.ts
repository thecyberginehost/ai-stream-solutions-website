import { NextRequest, NextResponse } from 'next/server'

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

    const apiKey = process.env.INSTANTLY_API_KEY
    const campaignId = process.env.INSTANTLY_CAMPAIGN_ID

    if (!apiKey) {
      console.error('INSTANTLY_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    if (!campaignId) {
      console.error('INSTANTLY_CAMPAIGN_ID is not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Prepare the payload for Instantly.ai API v2
    const payload = {
      email: email,
      first_name: firstName || '',
      last_name: lastName || '',
      company_name: companyName || '',
      custom_variables: {
        roi_employees: String(roiData?.employees || ''),
        roi_hours_per_week: String(roiData?.hoursPerWeek || ''),
        roi_hourly_rate: String(roiData?.avgHourlyRate || ''),
        roi_yearly_savings: String(roiData?.yearlyCostSaved || ''),
        roi_time_saved_yearly: String(roiData?.yearlyTimeSaved || ''),
        roi_months_to_roi: String(roiData?.monthsToROI || ''),
        roi_net_first_year: String(roiData?.netFirstYearSavings || ''),
      },
    }

    console.log('Sending to Instantly.ai v2:', {
      ...payload,
      campaign_id: campaignId,
    })

    // Add lead to Instantly.ai API v2
    // API v2 uses Authorization header instead of api_key in body
    const instantlyResponse = await fetch(`https://api.instantly.ai/api/v2/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        ...payload,
        campaign_id: campaignId,
      }),
    })

    const instantlyData = await instantlyResponse.json()

    console.log('Instantly.ai response:', instantlyData)

    if (!instantlyResponse.ok) {
      console.error('Instantly.ai error:', instantlyData)
      return NextResponse.json(
        { error: 'Failed to add lead to Instantly.ai', details: instantlyData },
        { status: instantlyResponse.status }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Lead added successfully',
      data: instantlyData,
    })
  } catch (error) {
    console.error('Error adding lead:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
