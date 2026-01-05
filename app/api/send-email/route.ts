import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email content for the business
    const businessMailOptions = {
      from: process.env.EMAIL_FROM,
      to: "strategy@aistreamsolutions.com",
      subject: "New Strategy Call Request",
      text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone || "Not provided"}
    Message: ${message || "Not provided"}
    
    Note: The client has received an email with a link to schedule their call using Calendly.
    If they schedule through the website modal, you'll receive a separate calendar invitation directly from Calendly.
  `,
      html: `
    <h1>New Strategy Call Request</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
    <p><strong>Message:</strong> ${message || "Not provided"}</p>
    <p><em>Note: The client has received an email with a link to schedule their call using Calendly.
    If they schedule through the website modal, you'll receive a separate calendar invitation directly from Calendly.</em></p>
  `,
    }

    // Email confirmation to the client
    const clientMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Schedule Your Strategy Call - AI Stream Solutions",
      text: `
        Dear ${name},

        Thank you for requesting a strategy call with AI Stream Solutions!

        You can schedule your 30-minute strategy call immediately using the link below:
        https://calendly.com/aamore-aistreamsolutions/30min

        Here's a summary of the information you provided:
        - Name: ${name}
        - Email: ${email}
        - Phone: ${phone || "Not provided"}
        - Message: ${message || "Not provided"}

        If you need to make any changes to your request or have any questions before your call, please reply to this email or contact us at info@aistreamsolutions.com.

        We look forward to discussing how AI Stream Solutions can help automate and optimize your sales pipeline!

        Best regards,
        The AI Stream Solutions Team
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designer%281%29-jeVqkJ6OJJ2ZWzeDlOTv00BShikCAG.jpeg" alt="AI Stream Solutions Logo" style="width: 100px; height: auto; border-radius: 50%;">
          </div>
          
          <h2 style="color: #3b82f6; text-align: center;">Schedule Your Strategy Call</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for requesting a strategy call with AI Stream Solutions!</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://calendly.com/aamore-aistreamsolutions/30min" style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">Schedule Your 30-Minute Call Now</a>
          </div>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #334155;">Your Request Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Message:</strong> ${message || "Not provided"}</p>
          </div>
          
          <p>The next step is to schedule your call using the button above. If you were interrupted during the scheduling process, you can use this link anytime to complete your booking.</p>
          <p>If you have any questions, please contact us at <a href="mailto:info@aistreamsolutions.com">info@aistreamsolutions.com</a>.</p>
          
          <p>We look forward to discussing how AI Stream Solutions can help automate and optimize your sales pipeline!</p>
          
          <p>Best regards,<br>The AI Stream Solutions Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; font-size: 12px; color: #64748b;">
            <p>AI Stream Solutions | <a href="https://aistreamsolutions.com" style="color: #3b82f6;">aistreamsolutions.com</a></p>
          </div>
        </div>
      `,
    }

    // Send emails
    await transporter.sendMail(businessMailOptions)
    await transporter.sendMail(clientMailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
