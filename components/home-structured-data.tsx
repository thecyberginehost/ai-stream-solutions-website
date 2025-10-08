export default function HomeStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Stream Solutions - AI Automation, Social Media Marketing & Cybersecurity",
    description:
      "Transform your business with AI-powered automation, social media marketing, and cybersecurity services.",
    url: "https://aistreamsolutions.com",
    mainEntity: {
      "@type": "Organization",
      name: "AI Stream Solutions",
      description:
        "Comprehensive business solutions provider specializing in AI automation, social media marketing, and cybersecurity services.",
      service: [
        {
          "@type": "Service",
          name: "AI-Powered Business Automation",
          description:
            "Our AI-powered platform automates business processes across departments, from data processing to workflow optimization.",
        },
        {
          "@type": "Service",
          name: "Social Media Marketing",
          description:
            "AI-driven social media management, content creation, and analytics to boost your brand's online presence.",
        },
        {
          "@type": "Service",
          name: "Cybersecurity Services",
          description:
            "Comprehensive security solutions including vulnerability assessments, network monitoring, and automated penetration testing.",
        },
      ],
      offers: {
        "@type": "AggregateOffer",
        description: "Custom business solutions tailored to your specific needs",
      },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
