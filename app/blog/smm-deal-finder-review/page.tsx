import type { Metadata } from "next"
import ClientBlogPost from "./ClientBlogPost"
import PageMetadata from "../page-metadata"
import BlogPostStructuredData from "@/components/blog-post-structured-data"
import CanonicalLink from "@/components/canonical-link"

export const metadata: Metadata = {
  title: "SMM Deal Finder Review: The Ultimate Lead Generation Tool for Social Media Marketers",
  description:
    "Discover how SMM Deal Finder is revolutionizing lead generation for social media marketing agencies with AI-powered tools and a database of over 6.7 million leads.",
  openGraph: {
    title: "SMM Deal Finder Review: The Ultimate Lead Generation Tool for Social Media Marketers",
    description:
      "Discover how SMM Deal Finder is revolutionizing lead generation for social media marketing agencies with AI-powered tools and a database of over 6.7 million leads.",
    images: [
      {
        url: "https://sjc.microlink.io/wH_jkVjjXTgMom1zGwvMsjpQ8gmbQ149uLLZblq0wXhobQju5qPi-z9YAYQR8gl68FJl0Fl3KISETwt8q-KTaw.jpeg",
        width: 1200,
        height: 630,
        alt: "SMM Deal Finder platform showing lead generation dashboard",
      },
    ],
  },
}

export default function SMMDealFinderReview() {
  const blogData = {
    title: "SMM Deal Finder Review: The Ultimate Lead Generation Tool for Social Media Marketers",
    publishDate: "April 18, 2025",
    author: "AI Stream Solutions Team",
    category: "Lead Generation",
    readTime: "8 min read",
    excerpt:
      "Discover how SMM Deal Finder is revolutionizing lead generation for social media marketing agencies with AI-powered tools and a database of over 6.7 million leads.",
    slug: "smm-deal-finder-review",
    featuredImage:
      "https://sjc.microlink.io/wH_jkVjjXTgMom1zGwvMsjpQ8gmbQ149uLLZblq0wXhobQju5qPi-z9YAYQR8gl68FJl0Fl3KISETwt8q-KTaw.jpeg",
    featuredImageAlt: "SMM Deal Finder platform showing lead generation dashboard",
  }

  return (
    <>
      <PageMetadata
        title={metadata.title as string}
        description={metadata.description as string}
        ogImage={blogData.featuredImage}
      />
      <CanonicalLink path={`/blog/${blogData.slug}`} />
      <BlogPostStructuredData
        title={blogData.title}
        description={blogData.excerpt}
        publishDate={blogData.publishDate}
        modifiedDate={blogData.publishDate}
        authorName={blogData.author}
        featuredImage={blogData.featuredImage}
        slug={blogData.slug}
      />
      <ClientBlogPost blogData={blogData} />
    </>
  )
}
