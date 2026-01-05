import type { Metadata } from "next"
import ClientBlogPost from "./ClientBlogPost"
import PageMetadata from "../page-metadata"
import BlogPostStructuredData from "@/components/blog-post-structured-data"
import CanonicalLink from "@/components/canonical-link"

export const metadata: Metadata = {
  title: "Building an Authentic Brand Voice on Social Media: Strategy and Examples | AI Stream Solutions",
  description:
    "Learn how to develop a consistent, authentic brand voice that resonates with your audience and differentiates your business in a crowded social landscape.",
  openGraph: {
    title: "Building an Authentic Brand Voice on Social Media: Strategy and Examples",
    description:
      "Learn how to develop a consistent, authentic brand voice that resonates with your audience and differentiates your business in a crowded social landscape.",
    url: "https://aistreamingsolutions.com/blog/authentic-brand-voice",
    siteName: "AI Stream Solutions",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1745024700116.jpg-n7IL1lJMe10UiJwRKfZMfJTHAwEXtp.jpeg",
        width: 1200,
        height: 630,
        alt: "Team collaborating on brand voice development with whiteboard and design materials",
      },
    ],
    locale: "en_US",
    type: "article",
  },
}

export default function AuthenticBrandVoicePage() {
  const blogPost = {
    title: "Building an Authentic Brand Voice on Social Media: Strategy and Examples",
    description:
      "Learn how to develop a consistent, authentic brand voice that resonates with your audience and differentiates your business in a crowded social landscape.",
    publishDate: "2025-04-10T08:00:00.000Z",
    updateDate: "2025-04-10T08:00:00.000Z",
    authorName: "AI Stream Solutions Team",
    authorUrl: "https://aistreamingsolutions.com/about",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1745024700116.jpg-n7IL1lJMe10UiJwRKfZMfJTHAwEXtp.jpeg",
    url: "https://aistreamingsolutions.com/blog/authentic-brand-voice",
  }

  return (
    <>
      <PageMetadata
        title="Building an Authentic Brand Voice on Social Media: Strategy and Examples"
        description="Learn how to develop a consistent, authentic brand voice that resonates with your audience and differentiates your business in a crowded social landscape."
      />
      <CanonicalLink path="/blog/authentic-brand-voice" />
      <BlogPostStructuredData post={blogPost} />
      <ClientBlogPost />
    </>
  )
}
