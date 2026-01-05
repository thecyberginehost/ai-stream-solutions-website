import type { Metadata } from "next"
import ClientBlogPost from "./ClientBlogPost"
import { BlogPostStructuredData } from "@/components/blog-post-structured-data"

export const metadata: Metadata = {
  title: "Social Media Automation: Tools and Tactics That Save 15+ Hours Per Week | AI Stream Solutions",
  description:
    "Discover the most effective social media automation tools and strategies to maintain a consistent presence across platforms while freeing up valuable time.",
  openGraph: {
    title: "Social Media Automation: Tools and Tactics That Save 15+ Hours Per Week",
    description:
      "Discover the most effective social media automation tools and strategies to maintain a consistent presence across platforms while freeing up valuable time.",
    images: [
      {
        url: "/images/social-media-automation.png",
        width: 1200,
        height: 630,
        alt: "Social Media Automation",
      },
    ],
  },
}

export default function SocialMediaAutomationPage() {
  const blogData = {
    title: "Social Media Automation: Tools and Tactics That Save 15+ Hours Per Week",
    description:
      "Discover the most effective social media automation tools and strategies to maintain a consistent presence across platforms while freeing up valuable time.",
    publishDate: "2025-03-20T09:00:00.000Z",
    updateDate: "2025-03-20T09:00:00.000Z",
    authors: [
      {
        name: "AI Stream Solutions Team",
        url: "https://aistreamteam.com/about",
      },
    ],
    image: "/images/social-media-automation.png",
    url: "https://aistreamteam.com/blog/social-media-automation",
  }

  return (
    <>
      <BlogPostStructuredData data={blogData} />
      <ClientBlogPost />
    </>
  )
}
