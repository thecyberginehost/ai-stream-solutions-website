import type { Metadata } from "next"
import { BlogPostStructuredData } from "@/components/blog-post-structured-data"
import ClientBlogPost from "./ClientBlogPost"

export const metadata: Metadata = {
  title: "Instagram Algorithm Mastery: Boost Your Business Visibility | AI Stream Solutions",
  description:
    "Master the Instagram algorithm to increase your business visibility and engagement. Learn proven strategies to work with algorithm changes and grow your audience.",
  openGraph: {
    title: "Instagram Algorithm Mastery: Boost Your Business Visibility | AI Stream Solutions",
    description:
      "Master the Instagram algorithm to increase your business visibility and engagement. Learn proven strategies to work with algorithm changes and grow your audience.",
    images: [
      {
        url: "/images/instagram-algorithm-mastery.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram Algorithm Mastery",
      },
    ],
  },
}

export default function Page() {
  return (
    <>
      <BlogPostStructuredData
        title="Instagram Algorithm Mastery: Boost Your Business Visibility"
        description="Master the Instagram algorithm to increase your business visibility and engagement. Learn proven strategies to work with algorithm changes and grow your audience."
        url="https://aistreamsolutions.com/blog/instagram-algorithm-mastery"
        image="https://aistreamsolutions.com/images/instagram-algorithm-mastery.jpg"
        datePublished="2025-03-14"
        author="AI Stream Solutions"
      />
      <ClientBlogPost />
    </>
  )
}
