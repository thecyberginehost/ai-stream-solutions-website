import ClientBlogPost from "./ClientBlogPost"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Top 10 AI Automation Trends Reshaping Business in 2025 | AI Stream Solutions",
  description:
    "Explore the cutting-edge AI automation trends that are transforming how businesses operate in 2025, from autonomous decision engines to hyper-personalized customer experiences.",
  alternates: {
    canonical: "/blog/top-10-ai-automation-trends-2025",
  },
  openGraph: {
    title: "Top 10 AI Automation Trends Reshaping Business in 2025",
    description:
      "Explore the cutting-edge AI automation trends that are transforming how businesses operate in 2025, from autonomous decision engines to hyper-personalized customer experiences.",
    url: "https://aistreamsolutions.com/blog/top-10-ai-automation-trends-2025",
    type: "article",
    publishedTime: "2025-03-27T08:00:00.000Z",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/topaitrends.png-AInm5vwSOjRYVqvJzmFUS7Kdq3iB5d.jpeg",
        width: 1200,
        height: 630,
        alt: "Top AI Automation Trends 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 10 AI Automation Trends Reshaping Business in 2025",
    description:
      "Explore the cutting-edge AI automation trends that are transforming how businesses operate in 2025, from autonomous decision engines to hyper-personalized customer experiences.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/topaitrends.png-AInm5vwSOjRYVqvJzmFUS7Kdq3iB5d.jpeg",
    ],
  },
}

export default function TopAIAutomationTrendsPage() {
  return <ClientBlogPost />
}
