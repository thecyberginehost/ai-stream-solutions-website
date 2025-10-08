import ClientBlogPost from "./ClientBlogPost"
import { BlogPostStructuredData } from "@/components/blog-post-structured-data"
import CanonicalLink from "@/components/canonical-link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Make.com Review 2025: Complete Automation Platform Guide | AI Stream Solutions",
  description:
    "Comprehensive Make.com review covering features, pricing, integrations, and real-world automation scenarios. Learn if Make.com is the right automation platform for your business in 2025.",
  keywords:
    "Make.com review, automation platform, workflow automation, business process automation, Make.com pricing, Make.com vs Zapier, no-code automation",
  alternates: {
    canonical: "/blog/make-com-automation-platform-review",
  },
  openGraph: {
    title: "Make.com Review 2025: Complete Automation Platform Guide",
    description:
      "Comprehensive Make.com review covering features, pricing, integrations, and real-world automation scenarios. Learn if Make.com is the right automation platform for your business.",
    url: "https://aistreamsolutions.com/blog/make-com-automation-platform-review",
    type: "article",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/make-automation-platform-review-blog.png",
        width: 1200,
        height: 630,
        alt: "Make.com Automation Platform Review 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Make.com Review 2025: Complete Automation Platform Guide",
    description:
      "Comprehensive Make.com review covering features, pricing, integrations, and real-world automation scenarios.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/make-automation-platform-review-blog.png"],
  },
}

export default function MakeComReviewPage() {
  return (
    <>
      <CanonicalLink href="/blog/make-com-automation-platform-review" />
      <BlogPostStructuredData
        title="Make.com Review 2025: Complete Automation Platform Guide"
        description="Comprehensive Make.com review covering features, pricing, integrations, and real-world automation scenarios. Learn if Make.com is the right automation platform for your business in 2025."
        url="https://aistreamsolutions.com/blog/make-com-automation-platform-review"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/make-automation-platform-review-blog.png"
        datePublished="2025-01-26"
        author="AI Stream Solutions"
      />
      <ClientBlogPost />
    </>
  )
}
