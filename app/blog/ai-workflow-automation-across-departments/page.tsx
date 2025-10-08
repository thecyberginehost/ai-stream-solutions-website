import ClientBlogPost from "./ClientBlogPost"
import BlogPostStructuredData from "@/components/blog-post-structured-data"

export const metadata = {
  title: "AI Workflow Automation Across Departments: Breaking Down Silos for Maximum Efficiency | AI Stream Solutions",
  description:
    "Discover how AI-powered workflow automation can connect departments, eliminate silos, and create seamless processes that boost productivity and reduce operational costs.",
  alternates: {
    canonical: "/blog/ai-workflow-automation-across-departments",
  },
  openGraph: {
    title: "AI Workflow Automation Across Departments: Breaking Down Silos for Maximum Efficiency",
    description:
      "Discover how AI-powered workflow automation can connect departments, eliminate silos, and create seamless processes that boost productivity and reduce operational costs.",
    url: "https://aistreamsolutions.com/blog/ai-workflow-automation-across-departments",
    type: "article",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workflow-automation-KjL9pQrSt7mHnVbF4xZwD2yGe5aPcR.png",
        width: 1200,
        height: 630,
        alt: "AI Workflow Automation Across Departments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workflow Automation Across Departments: Breaking Down Silos for Maximum Efficiency",
    description:
      "Discover how AI-powered workflow automation can connect departments, eliminate silos, and create seamless processes that boost productivity and reduce operational costs.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workflow-automation-KjL9pQrSt7mHnVbF4xZwD2yGe5aPcR.png",
    ],
  },
}

export default function BlogPost() {
  return (
    <>
      <BlogPostStructuredData
        title="AI Workflow Automation Across Departments: Breaking Down Silos for Maximum Efficiency"
        description="Discover how AI-powered workflow automation can connect departments, eliminate silos, and create seamless processes that boost productivity and reduce operational costs."
        url="https://aistreamsolutions.com/blog/ai-workflow-automation-across-departments"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workflow-automation-KjL9pQrSt7mHnVbF4xZwD2yGe5aPcR.png"
        datePublished="2025-03-21T00:00:00Z"
        author="AI Stream Solutions Team"
      />
      <ClientBlogPost />
    </>
  )
}
