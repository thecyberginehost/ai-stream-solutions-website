import type { Metadata } from "next"
import ClientBlogPost from "./ClientBlogPost"
import BlogPostStructuredData from "@/components/blog-post-structured-data"
import CanonicalLink from "@/components/canonical-link"

const postUrl = "https://aistreamsolutions.com/blog/unlocking-workflow-automation-with-n8n"
const imageUrl = "https://ai-stream-solutions.s3.us-east-1.amazonaws.com/aistream-n8n-workflow.png" // Updated S3 image URL
const postTitle = "Secure & Scalable n8n Automation: The AI Stream Solutions Advantage"
const postDescription =
  "Discover how AI Stream Solutions leverages n8n with dedicated private cloud servers and Docker containers for unparalleled security and performance in your workflow automations."
const datePublished = "2025-06-24T14:00:00Z"
const authorName = "AI Stream Solutions"

export const metadata: Metadata = {
  title: postTitle,
  description: postDescription,
  alternates: {
    canonical: "/blog/unlocking-workflow-automation-with-n8n",
  },
  openGraph: {
    title: postTitle,
    description: postDescription,
    url: postUrl,
    type: "article",
    publishedTime: datePublished,
    images: [
      {
        url: imageUrl, // Using S3 URL
        width: 1200, // Adjust if known, otherwise OpenGraph will fetch
        height: 630, // Adjust if known
        alt: "Secure n8n Automation by AI Stream Solutions",
      },
    ],
    authors: [authorName],
  },
  twitter: {
    card: "summary_large_image",
    title: postTitle,
    description: postDescription,
    images: [imageUrl], // Using S3 URL
  },
}

export default function N8NBlogPage() {
  return (
    <>
      <CanonicalLink href={postUrl} />
      <BlogPostStructuredData
        title={postTitle}
        description={postDescription}
        url={postUrl}
        image={imageUrl} // Using S3 URL
        datePublished={datePublished}
        author={authorName}
      />
      <ClientBlogPost />
    </>
  )
}
