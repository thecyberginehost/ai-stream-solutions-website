import type { Metadata } from "next"
import ClientBlogPost from "./ClientBlogPost"
import BlogPostStructuredData from "@/components/blog-post-structured-data"
import CanonicalLink from "@/components/canonical-link"

export const metadata: Metadata = {
  title: "Low-Code Automation Platforms: Democratizing Workflow Development | AI Stream Solutions",
  description:
    "Discover how low-code automation platforms are empowering non-technical business users to create sophisticated workflows, boosting productivity and reducing IT backlogs across industries.",
  alternates: {
    canonical: "/blog/low-code-automation-platforms",
  },
  openGraph: {
    title: "Low-Code Automation Platforms: Democratizing Workflow Development",
    description:
      "Discover how low-code automation platforms are empowering non-technical business users to create sophisticated workflows, boosting productivity and reducing IT backlogs across industries.",
    url: "https://aistreamsolutions.com/blog/low-code-automation-platforms",
    type: "article",
    publishedTime: "2025-03-24T08:00:00Z",
    authors: ["Anthony Richards"],
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lowcodeautomation-PCEptX00JvT9rQ0UErpHjr9ZJvZFe5.png",
        width: 1200,
        height: 630,
        alt: "Low-Code Automation Platforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Low-Code Automation Platforms: Democratizing Workflow Development",
    description:
      "Discover how low-code automation platforms are empowering non-technical business users to create sophisticated workflows, boosting productivity and reducing IT backlogs across industries.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lowcodeautomation-PCEptX00JvT9rQ0UErpHjr9ZJvZFe5.png",
    ],
  },
}

export default function LowCodeAutomationPage() {
  return (
    <>
      <CanonicalLink path="/blog/low-code-automation-platforms" />
      <BlogPostStructuredData
        title="Low-Code Automation Platforms: Democratizing Workflow Development"
        description="Discover how low-code automation platforms are empowering non-technical business users to create sophisticated workflows, boosting productivity and reducing IT backlogs across industries."
        url="https://aistreamsolutions.com/blog/low-code-automation-platforms"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lowcodeautomation-PCEptX00JvT9rQ0UErpHjr9ZJvZFe5.png"
        datePublished="2025-03-24T08:00:00Z"
        author="Anthony Richards"
      />
      <ClientBlogPost />
    </>
  )
}
