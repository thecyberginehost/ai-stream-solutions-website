import type { Metadata } from "next"
import ClientBlogPost from "./ClientBlogPost"

export const metadata: Metadata = {
  title: "Hyperautomation in 2025: The Next Evolution of Business Process Automation",
  description:
    "Discover how hyperautomation is transforming businesses in 2025. Learn implementation strategies, ROI metrics, and real-world examples of companies achieving 40%+ productivity gains through intelligent automation.",
  keywords: [
    "hyperautomation",
    "business process automation",
    "workflow automation 2025",
    "intelligent automation",
    "RPA",
    "process optimization",
    "automation ROI",
    "digital transformation",
  ],
  openGraph: {
    title: "Hyperautomation in 2025: Transform Your Business with Intelligent Automation",
    description:
      "Learn how hyperautomation combines RPA, AI, and process mining to achieve 40%+ productivity gains. Complete implementation guide with real-world ROI examples.",
    type: "article",
    publishedTime: "2025-04-10T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyperautomation 2025: The Complete Business Transformation Guide",
    description:
      "Discover how leading companies are achieving 40%+ productivity gains through hyperautomation. Implementation strategies, ROI metrics, and real-world examples.",
  },
}

export default function Page() {
  return <ClientBlogPost />
}
