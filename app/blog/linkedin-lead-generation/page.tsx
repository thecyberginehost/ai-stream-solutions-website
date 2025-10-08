import type { Metadata } from "next"
import { BlogPostStructuredData } from "@/components/blog-post-structured-data"
import ClientBlogPost from "./ClientBlogPost"

export const metadata: Metadata = {
  title: "LinkedIn Lead Generation: Strategies for B2B Success | AI Stream Solutions",
  description:
    "Learn proven LinkedIn lead generation strategies to boost your B2B sales pipeline. Discover how to leverage LinkedIn's powerful features for business growth.",
  openGraph: {
    title: "LinkedIn Lead Generation: Strategies for B2B Success | AI Stream Solutions",
    description:
      "Learn proven LinkedIn lead generation strategies to boost your B2B sales pipeline. Discover how to leverage LinkedIn's powerful features for business growth.",
    images: [
      {
        url: "/images/linkedin-lead-gen.png",
        width: 1200,
        height: 630,
        alt: "LinkedIn Lead Generation Strategies",
      },
    ],
  },
}

export default function Page() {
  return (
    <>
      <BlogPostStructuredData
        title="LinkedIn Lead Generation: Strategies for B2B Success"
        description="Learn proven LinkedIn lead generation strategies to boost your B2B sales pipeline. Discover how to leverage LinkedIn's powerful features for business growth."
        url="https://aistreamsolutions.com/blog/linkedin-lead-generation"
        image="https://aistreamsolutions.com/images/linkedin-lead-gen.png"
        datePublished="2025-03-15"
        author="AI Stream Solutions"
      />
      <ClientBlogPost />
    </>
  )
}
