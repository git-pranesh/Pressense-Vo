import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

// The email address where you want to receive diagnostic submissions
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL?.trim()

export async function POST(request: Request) {
  try {
    // Validate environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error('[v0] RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }
    
    if (!NOTIFICATION_EMAIL || !NOTIFICATION_EMAIL.includes('@')) {
      console.error('[v0] NOTIFICATION_EMAIL is invalid:', NOTIFICATION_EMAIL)
      return NextResponse.json(
        { error: 'Notification email not configured correctly' },
        { status: 500 }
      )
    }
    
    const data = await request.json()
    
    const {
      name,
      email,
      company,
      role,
      teamSize,
      revenue,
      constraint,
      context,
    } = data

    // Format the email content
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a1a; border-bottom: 2px solid #e5e5e5; padding-bottom: 12px;">New Diagnostic Request</h2>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
          <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 8px 0;"><strong>Company:</strong> ${company}</p>
          ${role ? `<p style="margin: 8px 0;"><strong>What the business does:</strong> ${role}</p>` : ''}
        </div>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Timeline & Budget</h3>
          ${teamSize ? `<p style="margin: 8px 0;"><strong>Timeline:</strong> ${teamSize}</p>` : '<p style="margin: 8px 0;"><strong>Timeline:</strong> Not specified</p>'}
          ${revenue ? `<p style="margin: 8px 0;"><strong>Budget:</strong> ${revenue}</p>` : '<p style="margin: 8px 0;"><strong>Budget:</strong> Not specified</p>'}
        </div>
        
        <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
          <h3 style="color: #333; margin-top: 0;">Primary Constraint / Problem</h3>
          <p style="margin: 0; white-space: pre-wrap;">${constraint || 'Not provided'}</p>
        </div>
        
        ${context ? `
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Additional Context</h3>
          <p style="margin: 0; white-space: pre-wrap;">${context}</p>
        </div>
        ` : ''}
        
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 30px 0;" />
        <p style="color: #666; font-size: 12px;">
          Submitted via Pressense Diagnostic Form<br />
          Reply directly to this email to respond to ${name}.
        </p>
      </div>
    `

    const emailText = `
NEW DIAGNOSTIC REQUEST
======================

CONTACT INFORMATION
-------------------
Name: ${name}
Email: ${email}
Company: ${company}
${role ? `What the business does: ${role}` : ''}

TIMELINE & BUDGET
-----------------
Timeline: ${teamSize || 'Not specified'}
Budget: ${revenue || 'Not specified'}

PRIMARY CONSTRAINT / PROBLEM
----------------------------
${constraint || 'Not provided'}

${context ? `ADDITIONAL CONTEXT
------------------
${context}` : ''}

---
Submitted via Pressense Diagnostic Form
Reply directly to this email to respond to ${name}.
    `

    // Send email notification
    const { error } = await resend.emails.send({
      from: 'Pressense Diagnostic <diagnostics@pressense.co>',
      to: [NOTIFICATION_EMAIL],
      replyTo: email,
      subject: `New Diagnostic: ${name} from ${company}`,
      html: emailHtml,
      text: emailText,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
