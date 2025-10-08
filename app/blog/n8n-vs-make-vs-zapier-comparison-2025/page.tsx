import type { Metadata } from "next"
import ClientBlogPost from "./ClientBlogPost"

export const metadata: Metadata = {
  title: "n8n vs Make vs Zapier: Which Automation Platform is Right for Your Business in 2025?",
  description:
    "Comprehensive comparison of n8n, Make.com, and Zapier for 2025. Compare pricing, features, use cases, and technical capabilities to choose the perfect automation platform for your business needs.",
  keywords: [
    "n8n vs Zapier",
    "Make vs Zapier",
    "n8n vs Make",
    "automation platform comparison",
    "workflow automation tools",
    "Zapier alternatives",
    "best automation platform 2025",
    "n8n pricing",
    "Make.com pricing",
    "workflow automation comparison",
  ],
  openGraph: {
    title: "n8n vs Make vs Zapier: Complete 2025 Platform Comparison Guide",
    description:
      "Compare n8n, Make.com, and Zapier side-by-side. Pricing, features, use cases, and expert recommendations to choose the right automation platform for your business.",
    type: "article",
    publishedTime: "2025-04-12T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n vs Make vs Zapier: The Definitive 2025 Comparison",
    description:
      "Which automation platform is right for you? Compare pricing, features, and use cases. Expert analysis and real-world recommendations.",
  },
}

export default function Page() {
  return <ClientBlogPost />
}
