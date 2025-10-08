import type { Metadata } from "next"
import ClientBlogPost from "./ClientBlogPost"
import BlogPostStructuredData from "@/components/blog-post-structured-data"

export const metadata: Metadata = {
  title: "GoHighLevel: The All-in-One Marketing Automation Platform for Business Growth | AI Stream Solutions",
  description:
    "Discover how GoHighLevel's comprehensive marketing automation platform can streamline your operations, boost customer engagement, and drive business growth.",
  alternates: {
    canonical: "/blog/gohighlevel-all-in-one-marketing-automation",
  },
  openGraph: {
    title: "GoHighLevel: The All-in-One Marketing Automation Platform for Business Growth",
    description:
      "Discover how GoHighLevel's comprehensive marketing automation platform can streamline your operations, boost customer engagement, and drive business growth.",
    url: "https://aistreamsolutions.com/blog/gohighlevel-all-in-one-marketing-automation",
    type: "article",
    images: [
      {
        url: "/images/gohighlevel-logo.png",
        width: 1200,
        height: 630,
        alt: "GoHighLevel Marketing Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel: The All-in-One Marketing Automation Platform for Business Growth",
    description:
      "Discover how GoHighLevel's comprehensive marketing automation platform can streamline your operations, boost customer engagement, and drive business growth.",
    images: ["/images/gohighlevel-logo.png"],
  },
}

const blogData = {
  title: "GoHighLevel: The All-in-One Marketing Automation Platform for Business Growth",
  publishDate: "April 17, 2025",
  category: "Marketing Automation",
  readTime: "10 min read",
  featuredImage: "/images/gohighlevel-logo.png",
  excerpt:
    "Discover how GoHighLevel's comprehensive marketing automation platform can streamline your operations, boost customer engagement, and drive business growth.",
}

export default function BlogPost() {
  return (
    <>
      <BlogPostStructuredData
        title={blogData.title}
        description={blogData.excerpt}
        url="https://aistreamsolutions.com/blog/gohighlevel-all-in-one-marketing-automation"
        image="/images/gohighlevel-logo.png"
        datePublished={blogData.publishDate}
        author="AI Stream Solutions"
      />
      <ClientBlogPost blogData={blogData} />
    </>
  )
}
