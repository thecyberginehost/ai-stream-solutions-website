// Extract data from webhook
const data = $input.item.json;

// Access roiCalculations - it might be nested differently
const roi = data.roiCalculations || data.roiData || {};

// Create formatted HTML for PDF
const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    @page { margin: 40px; }
    body {
      font-family: 'Helvetica', 'Arial', sans-serif;
      color: #1e293b;
      line-height: 1.6;
    }
    .header {
      background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
      color: white;
      padding: 40px;
      margin: -40px -40px 30px -40px;
    }
    .header h1 {
      margin: 0 0 10px 0;
      font-size: 28px;
    }
    .header p {
      margin: 0;
      opacity: 0.9;
      font-size: 14px;
    }
    .section {
      margin-bottom: 30px;
    }
    .section-title {
      color: #2563eb;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 15px;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 8px;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-bottom: 20px;
    }
    .info-item {
      background: #f8fafc;
      padding: 12px;
      border-radius: 6px;
      border-left: 3px solid #2563eb;
    }
    .info-label {
      font-size: 11px;
      color: #64748b;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .info-value {
      font-size: 14px;
      font-weight: bold;
      color: #1e293b;
    }
    .metric-box {
      background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
      border: 2px solid #2563eb;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 15px;
      text-align: center;
    }
    .metric-label {
      font-size: 12px;
      color: #64748b;
      margin-bottom: 8px;
    }
    .metric-value {
      font-size: 32px;
      font-weight: bold;
      color: #2563eb;
      margin-bottom: 5px;
    }
    .metric-subtitle {
      font-size: 11px;
      color: #64748b;
    }
    .benefits {
      background: #f8fafc;
      padding: 20px;
      border-radius: 8px;
      margin-top: 20px;
    }
    .benefits ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    .benefits li {
      margin-bottom: 8px;
      color: #1e293b;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #e2e8f0;
      text-align: center;
      color: #64748b;
      font-size: 11px;
    }
    .cta-box {
      background: #2563eb;
      color: white;
      padding: 25px;
      border-radius: 10px;
      text-align: center;
      margin: 30px 0;
    }
    .cta-box h3 {
      margin: 0 0 10px 0;
      font-size: 20px;
    }
    .cta-box p {
      margin: 0;
      opacity: 0.9;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>AI Stream Solutions</h1>
    <p>Automation ROI Analysis Report</p>
    <p>Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
  </div>

  <div class="section">
    <div class="section-title">Client Information</div>
    <div class="info-grid">
      ${data.firstName || data.lastName ? `
      <div class="info-item">
        <div class="info-label">Name</div>
        <div class="info-value">${data.firstName || ''} ${data.lastName || ''}</div>
      </div>
      ` : ''}
      <div class="info-item">
        <div class="info-label">Email</div>
        <div class="info-value">${data.email || 'N/A'}</div>
      </div>
      ${data.companyName ? `
      <div class="info-item">
        <div class="info-label">Company</div>
        <div class="info-value">${data.companyName}</div>
      </div>
      ` : ''}
    </div>
  </div>

  <div class="section">
    <div class="section-title">Your Current Situation</div>
    <div class="info-grid">
      <div class="info-item">
        <div class="info-label">Number of Employees</div>
        <div class="info-value">${roi.employees || 0}</div>
      </div>
      <div class="info-item">
        <div class="info-label">Hours per Week (per employee)</div>
        <div class="info-value">${roi.hoursPerWeek || 0} hours</div>
      </div>
      <div class="info-item">
        <div class="info-label">Average Hourly Rate</div>
        <div class="info-value">$${roi.avgHourlyRate || 0}</div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Your Automation ROI</div>

    <div class="info-grid">
      <div class="metric-box" style="background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%); border-color: #16a34a;">
        <div class="metric-label">Time Saved Per Year</div>
        <div class="metric-value" style="color: #16a34a;">${(roi.yearlyTimeSaved || 0).toLocaleString()}</div>
        <div class="metric-subtitle">hours</div>
      </div>

      <div class="metric-box">
        <div class="metric-label">Cost Saved Per Year</div>
        <div class="metric-value">$${(roi.yearlyCostSaved || 0).toLocaleString()}</div>
        <div class="metric-subtitle">in labor costs</div>
      </div>
    </div>

    <div class="info-grid">
      <div class="metric-box" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-color: #f59e0b;">
        <div class="metric-label">Time to ROI</div>
        <div class="metric-value" style="color: #f59e0b;">${roi.monthsToROI || 0}</div>
        <div class="metric-subtitle">months to break even</div>
      </div>

      <div class="metric-box" style="background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%); border-color: #a855f7;">
        <div class="metric-label">Net First-Year Savings</div>
        <div class="metric-value" style="color: #a855f7;">$${(roi.netFirstYearSavings || 0).toLocaleString()}</div>
        <div class="metric-subtitle">after investment</div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Monthly Impact</div>
    <div class="benefits">
      <ul>
        <li><strong>${(roi.monthlyTimeSaved || 0).toLocaleString()} hours/month</strong> freed up for strategic work</li>
        <li><strong>$${(roi.monthlyCostSaved || 0).toLocaleString()}/month</strong> in cost savings</li>
        <li>99.99% uptime with enterprise-grade infrastructure</li>
        <li>Dedicated account manager & weekly strategy calls</li>
        <li>Real-time monitoring and performance tracking</li>
        <li>Unlimited workflow updates and optimizations</li>
      </ul>
    </div>
  </div>

  <div class="cta-box">
    <h3>Ready to Unlock These Savings?</h3>
    <p>Schedule your free automation audit today and see how we can transform your business.</p>
  </div>

  <div class="footer">
    <p><strong>AI Stream Solutions</strong></p>
    <p>https://aistreamsolutions.com | contact@aistreamsolutions.com</p>
    <p>© ${new Date().getFullYear()} AI Stream Solutions. All rights reserved.</p>
  </div>
</body>
</html>
`;

return {
  html: html,
  email: data.email,
  firstName: data.firstName || '',
  lastName: data.lastName || '',
  companyName: data.companyName || '',
  roiCalculations: roi
};
