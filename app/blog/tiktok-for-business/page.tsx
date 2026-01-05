import type { Metadata } from "next"
import { BlogPostStructuredData } from "@/components/blog-post-structured-data"
import ClientBlogPost from "./ClientBlogPost"

export const metadata: Metadata = {
  title: "TikTok for Business: Leveraging Short-Form Video | AI Stream Solutions",
  description:
    "Learn how to effectively use TikTok for business growth. Discover strategies for creating engaging short-form videos that drive brand awareness and conversions.",
  openGraph: {
    title: "TikTok for Business: Leveraging Short-Form Video | AI Stream Solutions",
    description:
      "Learn how to effectively use TikTok for business growth. Discover strategies for creating engaging short-form videos that drive brand awareness and conversions.",
    images: [
      {
        url: "/images/tiktok-for-business.jpg",
        width: 1200,
        height: 630,
        alt: "TikTok for Business",
      },
    ],
  },
}

export default function Page() {
  return (
    <>
      <BlogPostStructuredData
        title="TikTok for Business: Leveraging Short-Form Video"
        description="Learn how to effectively use TikTok for business growth. Discover strategies for creating engaging short-form videos that drive brand awareness and conversions."
        url="https://aistreamsolutions.com/blog/tiktok-for-business"
        image="https://aistreamsolutions.com/images/tiktok-for-business.jpg"
        datePublished="2025-02-27"
        author="AI Stream Solutions"
      />
      <ClientBlogPost />
    </>
  )
}
