import ClientBlogPost from "./ClientBlogPost"
import BlogPostStructuredData from "@/components/blog-post-structured-data"

export const metadata = {
  title: "The AI Workflow Automation Revolution: How Businesses Are Achieving 10x Efficiency | AI Stream Solutions",
  description:
    "Discover how AI-powered workflow automation is transforming businesses across industries, dramatically reducing manual tasks and enabling unprecedented operational efficiency.",
  alternates: {
    canonical: "/blog/ai-workflow-automation-revolution",
  },
  openGraph: {
    title: "The AI Workflow Automation Revolution: How Businesses Are Achieving 10x Efficiency",
    description:
      "Discover how AI-powered workflow automation is transforming businesses across industries, dramatically reducing manual tasks and enabling unprecedented operational efficiency.",
    url: "https://aistreamsolutions.com/blog/ai-workflow-automation-revolution",
    type: "article",
    images: [
      {
        url: "/images/AIEfficiency.jpg",
        width: 1200,
        height: 630,
        alt: "AI Workflow Automation Revolution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The AI Workflow Automation Revolution: How Businesses Are Achieving 10x Efficiency",
    description:
      "Discover how AI-powered workflow automation is transforming businesses across industries, dramatically reducing manual tasks and enabling unprecedented operational efficiency.",
    images: ["/images/AIEfficiency.jpg"],
  },
}

export default function BlogPost() {
  return (
    <>
      <BlogPostStructuredData
        title="The AI Workflow Automation Revolution: How Businesses Are Achieving 10x Efficiency"
        description="Discover how AI-powered workflow automation is transforming businesses across industries, dramatically reducing manual tasks and enabling unprecedented operational efficiency."
        url="https://aistreamsolutions.com/blog/ai-workflow-automation-revolution"
        image="/images/AIEfficiency.jpg"
        datePublished="2025-03-21T00:00:00Z"
        author="AI Stream Solutions Team"
      />
      <ClientBlogPost />
    </>
  )
}
