import Script from "next/script"
import { generateServiceStructuredData } from "@/lib/structured-data"

export default function ServicesStructuredData() {
  const servicesData = generateServiceStructuredData({
    name: "AI Stream Solutions Services",
    description:
      "Comprehensive business solutions including AI automation and social media marketing services designed to help your business grow.",
    url: "https://aistreamsolutions.com/services",
  })

  return (
    <Script
      id="services-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesData) }}
    />
  )
}
