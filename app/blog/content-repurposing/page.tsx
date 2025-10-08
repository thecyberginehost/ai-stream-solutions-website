import ContentRepurposingClient from "./ClientBlogPost"
import { BlogPostStructuredData } from "@/components/blog-post-structured-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content Repurposing: How to Turn One Idea into 30 Days of Social Media Content",
  description:
    "Master the art of content repurposing to maximize your content creation efficiency and maintain a consistent posting schedule across all platforms.",
  openGraph: {
    title: "Content Repurposing: How to Turn One Idea into 30 Days of Social Media Content",
    description:
      "Master the art of content repurposing to maximize your content creation efficiency and maintain a consistent posting schedule across all platforms.",
    type: "article",
    publishedTime: "2025-03-30T10:00:00Z",
    authors: ["AI Stream Solutions"],
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250418_173402_Gallery.jpg-vvK75sWuU75raqCd0DZD0udWmTixs5.jpeg",
        width: 1200,
        height: 630,
        alt: "Content repurposing workflow showing one piece of content transformed into multiple formats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Repurposing: How to Turn One Idea into 30 Days of Social Media Content",
    description:
      "Master the art of content repurposing to maximize your content creation efficiency and maintain a consistent posting schedule across all platforms.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250418_173402_Gallery.jpg-vvK75sWuU75raqCd0DZD0udWmTixs5.jpeg",
    ],
  },
}

export default function ContentRepurposingPage() {
  return (
    <>
      <BlogPostStructuredData
        title="Content Repurposing: How to Turn One Idea into 30 Days of Social Media Content"
        description="Master the art of content repurposing to maximize your content creation efficiency and maintain a consistent posting schedule across all platforms."
        url="https://aistreamsolutions.com/blog/content-repurposing"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_20250418_173402_Gallery.jpg-vvK75sWuU75raqCd0DZD0udWmTixs5.jpeg"
        datePublished="2025-03-30T10:00:00Z"
        author="AI Stream Solutions"
      />
      <ContentRepurposingClient />
    </>
  )
}
