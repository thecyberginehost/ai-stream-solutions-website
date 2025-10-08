# n8n ROI Calculator Workflow Setup Guide

This guide will walk you through setting up the n8n workflow to generate and email PDF reports from your ROI calculator.

## 📋 Prerequisites

- n8n instance running (cloud or self-hosted)
- SMTP credentials for sending emails
- Instantly.ai API key (already configured)

---

## 🚀 Step-by-Step Setup

### Step 1: Import the Workflow

1. **Log into your n8n instance**
2. **Click "Workflows" in the left sidebar**
3. **Click "Add Workflow"** (or the + button)
4. **Click the 3-dot menu** (top right) → **Import from File**
5. **Select `n8n-roi-workflow.json`** from your project directory
6. **Click "Import"**

The workflow will now appear in your n8n editor!

---

### Step 2: Configure SMTP Credentials (Email Node)

**Why:** To send the PDF report via email

1. **Click on the "Send Email" node** (4th node in the workflow)
2. **Click "Credentials" dropdown**
3. **Click "Create New"**
4. **Fill in your SMTP details:**
   - **From Email:** `noreply@aistreamsolutions.com` (or your sending address)
   - **Host:** Your email provider's SMTP server
     - Gmail: `smtp.gmail.com`
     - Outlook: `smtp.office365.com`
     - SendGrid: `smtp.sendgrid.net`
     - Mailgun: `smtp.mailgun.org`
   - **Port:** Usually `587` (TLS) or `465` (SSL)
   - **User:** Your email username
   - **Password:** Your email password or app password
   - **Secure Connection:** Enable TLS/SSL

5. **Click "Save"**
6. **Test the credentials** by clicking "Test"

**🔥 Pro Tip:** For Gmail, you'll need to create an [App Password](https://support.google.com/accounts/answer/185833)

---

### Step 3: Configure Instantly.ai Credentials

**Why:** To automatically add leads to your Instantly.ai campaign

1. **Click on the "Add to Instantly.ai" node** (5th node)
2. **Click "Credentials" dropdown**
3. **Click "Create New" → "Header Auth"**
4. **Configure:**
   - **Name:** `Instantly.ai API`
   - **Header Name:** `Authorization`
   - **Header Value:** `Bearer YzY1MWM2OTAtMzUwYS00ZTE3LWEzZWYtNWQ4YTJjNWQ4ODI4OnZGeFFEU25DYURRVA==`
     (Use your actual Instantly.ai v2 API key)

5. **Click "Save"**

---

### Step 4: Activate the Webhook

1. **Click on the "Webhook" node** (first node)
2. **Set the path** to `roi-calculator` (or your preference)
3. **Click "Execute Node"** to test it
4. **Copy the Production Webhook URL** - it will look like:
   ```
   https://your-n8n-instance.com/webhook/roi-calculator
   ```

5. **Save this URL** - you'll need it in the next step!

---

### Step 5: Save & Activate the Workflow

1. **Click "Save"** (top right)
2. **Toggle the workflow to "Active"** (switch in top right)
3. **Verify it says "Active"** (green indicator)

Your n8n workflow is now live and ready to receive webhooks! ✅

---

### Step 6: Connect Your Website to the Workflow

1. **Open your `.env.local` file**
2. **Add the webhook URL:**
   ```bash
   N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/roi-calculator
   ```

3. **Restart your dev server:**
   ```bash
   # Stop the current server (Ctrl+C)
   npm run dev
   ```

---

## 🧪 Testing the Integration

### Test the Workflow

1. **Go to** http://localhost:3000 (or your port)
2. **Open the ROI Calculator**
3. **Fill in the form:**
   - Set employees, hours, hourly rate
   - Click "Calculate My ROI"
   - Click "Download Full Report"
   - Enter your test email address
   - Check both consent boxes
   - Click "Send My Report"

4. **Check your email!** You should receive:
   - ✅ Professional HTML email
   - ✅ PDF attachment with your ROI analysis
   - ✅ Branded AI Stream Solutions design

5. **Check Instantly.ai** - the lead should be added to campaign `801b2b50-f7f3-4cb8-bb6a-9d84130b97f7`

---

## 🔧 Troubleshooting

### Email Not Sending?

**Check:**
- ✅ SMTP credentials are correct
- ✅ "From Email" is authorized to send from your SMTP server
- ✅ Check spam folder
- ✅ Look at n8n execution logs for errors

### PDF Not Generating?

**Check:**
- ✅ n8n has the HTML node enabled (some instances don't have it)
- ✅ Check the "Generate PDF HTML" node executed successfully
- ✅ Look at execution logs for errors

### Lead Not Added to Instantly.ai?

**Check:**
- ✅ Instantly.ai API credentials are correct
- ✅ Campaign ID `801b2b50-f7f3-4cb8-bb6a-9d84130b97f7` exists
- ✅ Check "Add to Instantly.ai" node execution logs
- ✅ Verify API key has permission to add leads

### Webhook Not Receiving Data?

**Check:**
- ✅ Workflow is "Active" (green toggle)
- ✅ Webhook URL in `.env.local` is correct
- ✅ Dev server was restarted after adding webhook URL
- ✅ Check browser console for errors when submitting form

---

## 📊 Workflow Overview

Here's what happens when a user submits the ROI calculator:

```
User Submits Form
      ↓
1. Webhook Receives Data
      ↓
2. Generate PDF HTML (with ROI data)
      ↓
3. Convert HTML to PDF
      ↓
4a. Send Email with PDF    +    4b. Add Lead to Instantly.ai
      ↓                               ↓
5. Respond to Webhook (success message)
      ↓
User sees "Check your email" message
```

**Total execution time:** ~2-5 seconds

---

## 🎨 Customization Options

### Change Email Design

Edit the **"Generate PDF HTML"** node → Modify the HTML template in the `jsCode` section

### Change Email Subject/Body

Edit the **"Send Email"** node:
- **Subject:** Change the subject line
- **Message:** Modify the HTML email body

### Add More Data to PDF

Edit the **"Generate PDF HTML"** node → Add more variables from `data.roiCalculations`

### Send to Different Campaign

Edit the **"Add to Instantly.ai"** node → Change the `campaign_id` parameter

---

## 🔐 Security Notes

- ✅ Webhook URL is public but should be kept private
- ✅ All API keys are stored securely in n8n credentials
- ✅ Email is sent via authenticated SMTP
- ✅ No sensitive data is logged in the workflow

---

## 📞 Need Help?

If you encounter issues:

1. **Check n8n execution logs** - Click on workflow execution history
2. **Test each node individually** - Click "Execute Node" on each step
3. **Verify credentials** - Re-test SMTP and Instantly.ai credentials
4. **Check the browser console** - Look for JavaScript errors when submitting

---

## ✅ Success Checklist

Before going live, verify:

- [ ] Workflow is Active (green toggle)
- [ ] SMTP credentials work (test email received)
- [ ] Instantly.ai credentials work (test lead added)
- [ ] Webhook URL is in `.env.local`
- [ ] Dev server restarted after adding webhook URL
- [ ] Test form submission works end-to-end
- [ ] Email received with PDF attachment
- [ ] Lead appears in Instantly.ai campaign
- [ ] PDF design looks professional
- [ ] Email design looks good on mobile

---

## 🚢 Deploying to Production

When you're ready to deploy:

1. **Add webhook URL to production environment variables**
   - Vercel: Dashboard → Settings → Environment Variables
   - Add `N8N_WEBHOOK_URL` with your production webhook

2. **Update email "From" address** to your production domain

3. **Test with a real email** before going live

4. **Monitor n8n executions** for the first few submissions

---

## 🎉 You're All Set!

Your ROI Calculator is now fully integrated with:
- ✅ Professional PDF generation
- ✅ Automated email delivery
- ✅ Lead capture in Instantly.ai
- ✅ Custom variables for personalized outreach

Enjoy automated lead generation! 🚀
