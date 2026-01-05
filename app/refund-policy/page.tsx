export default function RefundPolicyPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Refund Policy</h1>
          <p className="text-lg text-slate-300">Last Updated: March 8, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl prose prose-slate prose-lg">
          <h2>1. Introduction</h2>
          <p>
            At AI Stream Solutions, we are committed to ensuring your satisfaction with our services. This Refund Policy
            outlines the terms and conditions for refunds and is designed to be fair to both our customers and our
            business. Please read this policy carefully before subscribing to our services.
          </p>

          <h2>2. Subscription Services</h2>
          <h3>2.1 Monthly Subscriptions</h3>
          <p>
            For monthly subscription plans, you may cancel your subscription at any time. However, we do not provide
            refunds for partial months or for months already paid. When you cancel, you will continue to have access to
            the service until the end of your current billing period.
          </p>

          <h3>2.2 Annual and Biannual Subscriptions</h3>
          <p>
            For annual and biannual subscription plans, you may request a refund within the first 30 days of your
            initial subscription period. If approved, the refund will be prorated based on the time remaining in your
            subscription period, less a 15% administrative fee. After the first 30 days, refunds for annual and biannual
            subscriptions are provided at our discretion and may be subject to additional administrative fees.
          </p>

          <h3>2.3 Extended Prepayment Plans</h3>
          <p>
            For custom extended prepayment plans (e.g., 3-year or 5-year plans), refund terms will be specified in your
            custom contract. Generally, these plans follow similar terms to annual subscriptions but may include
            additional provisions based on the specific arrangement.
          </p>

          <h2>3. Custom Implementation and Onboarding Fees</h2>
          <p>
            Onboarding fees and custom implementation charges cover the costs of setting up and configuring our services
            for your specific needs. These fees are non-refundable once the implementation process has begun. If you
            cancel before implementation begins, we may provide a partial refund at our discretion, less a 20%
            administrative fee.
          </p>

          <h2>4. Eligibility for Refunds</h2>
          <p>Refund requests may be considered under the following circumstances:</p>
          <ul>
            <li>
              Technical issues that significantly impair the functionality of our services and cannot be resolved within
              a reasonable timeframe
            </li>
            <li>Material discrepancy between advertised features and actual service capabilities</li>
            <li>Billing errors or duplicate charges</li>
          </ul>
          <p>Refund requests based on the following reasons are generally not approved:</p>
          <ul>
            <li>Change of business needs or priorities</li>
            <li>Underutilization of the service</li>
            <li>Features or capabilities not explicitly promised in your service agreement</li>
            <li>
              Issues resulting from your systems, infrastructure, or third-party integrations not provided by AI Stream
              Solutions
            </li>
          </ul>

          <h2>5. Service Level Agreement (SLA)</h2>
          <p>
            If our services fail to meet the uptime guarantees specified in our Service Level Agreement, you may be
            eligible for service credits as outlined in the SLA. These credits will be applied to future billing cycles
            and are not provided as cash refunds.
          </p>

          <h2>6. Refund Process</h2>
          <p>
            To request a refund, please contact our customer support team at info@aistreamsolutions.com with the
            following information:
          </p>
          <ul>
            <li>Your account information (company name, account email)</li>
            <li>Reason for the refund request</li>
            <li>Date of purchase or subscription start date</li>
            <li>Any relevant documentation supporting your request</li>
          </ul>
          <p>
            We will review your request and respond within 5 business days. If approved, refunds will be processed using
            the original payment method, and may take 5-10 business days to appear on your statement, depending on your
            financial institution.
          </p>

          <h2>7. Exceptional Circumstances</h2>
          <p>
            We understand that exceptional circumstances may arise. In such cases, we may consider refund requests
            outside the terms of this policy on a case-by-case basis. Any exceptions made will be at the sole discretion
            of AI Stream Solutions and do not constitute a waiver of this policy for future transactions.
          </p>

          <h2>8. Changes to This Refund Policy</h2>
          <p>
            We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon
            posting on our website. Your continued use of our services after such changes constitutes your acceptance of
            the new Refund Policy.
          </p>

          <h2>9. Contact Us</h2>
          <p>If you have any questions about this Refund Policy, please contact us at info@aistreamsolutions.com.</p>
        </div>
      </section>
    </main>
  )
}
