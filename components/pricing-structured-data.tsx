export default function PricingStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Stream Solutions Sales Automation",
    description: "AI-powered sales automation platform that helps businesses generate and close more leads",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "2500",
      highPrice: "5500",
      offerCount: "3",
      offers: [
        {
          "@type": "Offer",
          name: "Starter Plan",
          price: "2500",
          priceCurrency: "USD",
          description: "AI lead generation, email automation, SMS automation, CRM integration",
          url: "https://aistreamsolutions.com/pricing#starter",
        },
        {
          "@type": "Offer",
          name: "Growth Plan",
          price: "4000",
          priceCurrency: "USD",
          description: "Everything in Starter + AI lead scoring, multichannel outreach (LinkedIn, SMS, calls)",
          url: "https://aistreamsolutions.com/pricing#growth",
        },
        {
          "@type": "Offer",
          name: "Elite Plan",
          price: "5500",
          priceCurrency: "USD",
          description: "Everything in Growth + AI voice assistant, predictive analytics, unlimited leads",
          url: "https://aistreamsolutions.com/pricing#elite",
        },
      ],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
