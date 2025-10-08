import type { Metadata } from "next"
import { BlogPostStructuredData } from "@/components/blog-post-structured-data"
import ClientBlogPost from "./ClientBlogPost"

export const metadata: Metadata = {
  title: "Social Media Advertising in 2025: What's Working Now | AI Stream Solutions",
  description:
    "Get an insider's look at the latest social media advertising trends, platform changes, and targeting capabilities that are delivering the highest ROI in 2025.",
  openGraph: {
    title: "Social Media Advertising in 2025: What's Working Now | AI Stream Solutions",
    description:
      "Get an insider's look at the latest social media advertising trends, platform changes, and targeting capabilities that are delivering the highest ROI in 2025.",
    images: [
      {
        url: "/images/social-media-advertising.jpg",
        width: 1200,
        height: 630,
        alt: "Social Media Advertising on smartphone showing paid media content",
      },
    ],
  },
}

export default function Page() {
  return (
    <>
      <BlogPostStructuredData
        title="Social Media Advertising in 2025: What's Working Now (And What's Not)"
        description="Get an insider's look at the latest social media advertising trends, platform changes, and targeting capabilities that are delivering the highest ROI in 2025."
        url="https://aistreamsolutions.com/blog/social-media-advertising"
        image="https://aistreamsolutions.com/images/social-media-advertising.jpg"
        datePublished="2025-04-04"
        author="AI Stream Solutions"
      />
      <ClientBlogPost />
    </>
  )
}
