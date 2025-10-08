import { generateServiceStructuredData } from "@/lib/structured-data"

export default function FeaturesStructuredData() {
  const structuredData = generateServiceStructuredData({
    name: "AI-Powered Automation & Social Media Features",
    description:
      "Our comprehensive suite of automation and social media tools handles your entire business workflow, from data processing to analytics.",
    url: "https://aistreamsolutions.com/features",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/data-analytics-nNiI6eqElfvGNYOINyBMnfGf7ck8Ho.png",
  })

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
