import type { Metadata } from "next"
import ClientBlogPost from "./ClientBlogPost"
import { BlogPostStructuredData } from "@/components/blog-post-structured-data"

export const metadata: Metadata = {
  title: "Measuring Social Media ROI: Strategies That Prove Business Value | AI Stream Solutions",
  description:
    "Learn how to effectively measure and maximize your social media ROI with proven strategies, key metrics, and practical frameworks that demonstrate real business value.",
  openGraph: {
    title: "Measuring Social Media ROI: Strategies That Prove Business Value",
    description:
      "Learn how to effectively measure and maximize your social media ROI with proven strategies, key metrics, and practical frameworks that demonstrate real business value.",
    images: [
      {
        url: "/images/social-media-roi.png",
        width: 1200,
        height: 630,
        alt: "Measuring Social Media ROI with upward trending graph and social media icons",
      },
    ],
  },
}

export default function SocialMediaROIPage() {
  const blogData = {
    title: "Measuring Social Media ROI: Strategies That Prove Business Value",
    description:
      "Learn how to effectively measure and maximize your social media ROI with proven strategies, key metrics, and practical frameworks that demonstrate real business value.",
    publishDate: "2025-03-15T09:00:00.000Z",
    updateDate: "2025-03-15T09:00:00.000Z",
    authors: [
      {
        name: "AI Stream Solutions Team",
        url: "https://aistreamteam.com/about",
      },
    ],
    image: "/images/social-media-roi.png",
    url: "https://aistreamteam.com/blog/roi-of-social-media-marketing",
  }

  return (
    <>
      <BlogPostStructuredData data={blogData} />
      <ClientBlogPost />
    </>
  )
}
