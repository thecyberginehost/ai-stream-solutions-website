export default function AutomationSuiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Stream Solutions Automation Suite",
    description: "Tailor your AI automation solution with the exact features your business needs to grow.",
    brand: {
      "@type": "Brand",
      name: "AI Stream Solutions",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      highPrice: "Custom",
      lowPrice: "Custom",
      offerCount: "Multiple",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "124",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
