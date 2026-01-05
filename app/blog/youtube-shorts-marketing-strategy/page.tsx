import ClientBlogPost from "./ClientBlogPost"
import { BlogPostStructuredData } from "@/components/blog-post-structured-data"
import CanonicalLink from "@/components/canonical-link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "YouTube Shorts Marketing Strategy 2025: Complete Guide to Viral Success | AI Stream Solutions",
  description:
    "Master YouTube Shorts marketing with our comprehensive 2025 strategy guide. Learn proven tactics for viral content, audience growth, and monetization on YouTube's fastest-growing format.",
  keywords:
    "YouTube Shorts marketing, YouTube Shorts strategy, viral YouTube content, short-form video marketing, YouTube algorithm 2025, YouTube Shorts monetization, video marketing strategy",
  alternates: {
    canonical: "/blog/youtube-shorts-marketing-strategy",
  },
  openGraph: {
    title: "YouTube Shorts Marketing Strategy 2025: Complete Guide to Viral Success",
    description:
      "Master YouTube Shorts marketing with our comprehensive 2025 strategy guide. Learn proven tactics for viral content, audience growth, and monetization.",
    url: "https://aistreamsolutions.com/blog/youtube-shorts-marketing-strategy",
    type: "article",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youtube-shorts-marketing-strategy-blog.png",
        width: 1200,
        height: 630,
        alt: "YouTube Shorts Marketing Strategy 2025 Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Shorts Marketing Strategy 2025: Complete Guide to Viral Success",
    description:
      "Master YouTube Shorts marketing with our comprehensive 2025 strategy guide. Learn proven tactics for viral content and audience growth.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youtube-shorts-marketing-strategy-blog.png"],
  },
}

export default function YouTubeShortsStrategyPage() {
  return (
    <>
      <CanonicalLink href="/blog/youtube-shorts-marketing-strategy" />
      <BlogPostStructuredData
        title="YouTube Shorts Marketing Strategy 2025: Complete Guide to Viral Success"
        description="Master YouTube Shorts marketing with our comprehensive 2025 strategy guide. Learn proven tactics for viral content, audience growth, and monetization on YouTube's fastest-growing format."
        url="https://aistreamsolutions.com/blog/youtube-shorts-marketing-strategy"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youtube-shorts-marketing-strategy-blog.png"
        datePublished="2025-01-26"
        author="AI Stream Solutions"
      />
      <ClientBlogPost />
    </>
  )
}
