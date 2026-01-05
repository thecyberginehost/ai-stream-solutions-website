export default function HomeStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://aistreamsolutions.com/#webpage",
        name: "AI Stream Solutions - Managed Automation Service Provider | Wayne, NJ",
        description:
          "Enterprise-grade workflow automation for local businesses in North Jersey. Design, deploy, and manage complete automation systems.",
        url: "https://aistreamsolutions.com",
        isPartOf: {
          "@id": "https://aistreamsolutions.com/#website",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://aistreamsolutions.com/#website",
        name: "AI Stream Solutions",
        url: "https://aistreamsolutions.com",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://aistreamsolutions.com/#localbusiness",
        name: "AI Stream Solutions",
        description:
          "Managed Automation Service Provider (MASP) bringing enterprise-grade workflow automation to local businesses in Wayne, NJ, Passaic County, and North Jersey.",
        url: "https://aistreamsolutions.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Wayne",
          addressRegion: "NJ",
          addressCountry: "US",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Wayne",
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: "Passaic County",
            },
          },
          {
            "@type": "AdministrativeArea",
            name: "Passaic County",
          },
          {
            "@type": "AdministrativeArea",
            name: "North Jersey",
          },
          {
            "@type": "State",
            name: "New Jersey",
          },
        ],
        priceRange: "$997 - $5000+",
        founder: {
          "@type": "Person",
          name: "Anthony Amore",
          jobTitle: "Founder & Lead Automation Architect",
        },
        sameAs: [],
      },
      {
        "@type": "Service",
        "@id": "https://aistreamsolutions.com/#masp-service",
        name: "Managed Automation Service Provider (MASP)",
        description:
          "Complete automation infrastructure design, deployment, and management for businesses. Includes workflow automation, AI capabilities, and ongoing optimization.",
        provider: {
          "@id": "https://aistreamsolutions.com/#localbusiness",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Wayne",
          },
          {
            "@type": "AdministrativeArea",
            name: "Passaic County",
          },
          {
            "@type": "AdministrativeArea",
            name: "North Jersey",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Automation Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Starter Automation Package",
                description: "3-5 core workflows, email/SMS automations, monthly check-ins",
              },
              price: "997",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "997",
                priceCurrency: "USD",
                billingDuration: "P1M",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Growth Automation Package",
                description: "10-15 workflows, AI-powered features, bi-weekly strategy calls",
              },
              price: "2500",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "2500",
                priceCurrency: "USD",
                billingDuration: "P1M",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Enterprise Automation",
                description: "Private infrastructure, dedicated management, custom development",
              },
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                minPrice: "5000",
                priceCurrency: "USD",
                billingDuration: "P1M",
              },
            },
          ],
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
