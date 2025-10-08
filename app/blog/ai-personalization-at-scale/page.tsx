import ClientBlogPost from "./ClientBlogPost"
import BlogPostStructuredData from "@/components/blog-post-structured-data"

export const metadata = {
  title:
    "AI-Powered Personalization at Scale: How to Make Every Prospect Feel Like Your Only Customer | AI Stream Solutions",
  description:
    "Discover how AI enables true personalization at scale, allowing sales teams to deliver tailored experiences to thousands of prospects simultaneously without sacrificing quality or authenticity.",
  alternates: {
    canonical: "/blog/ai-personalization-at-scale",
  },
  openGraph: {
    title: "AI-Powered Personalization at Scale: How to Make Every Prospect Feel Like Your Only Customer",
    description:
      "Discover how AI enables true personalization at scale, allowing sales teams to deliver tailored experiences to thousands of prospects simultaneously without sacrificing quality or authenticity.",
    url: "https://aistreamsolutions.com/blog/ai-personalization-at-scale",
    type: "article",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aipersonalize-eozz1aAsacBChvgk7SNsEHL34T1QEH.png",
        width: 1200,
        height: 630,
        alt: "AI-Powered Personalization at Scale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Personalization at Scale: How to Make Every Prospect Feel Like Your Only Customer",
    description:
      "Discover how AI enables true personalization at scale, allowing sales teams to deliver tailored experiences to thousands of prospects simultaneously without sacrificing quality or authenticity.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aipersonalize-eozz1aAsacBChvgk7SNsEHL34T1QEH.png",
    ],
  },
}

export default function BlogPost() {
  return (
    <>
      <BlogPostStructuredData
        title="AI-Powered Personalization at Scale: How to Make Every Prospect Feel Like Your Only Customer"
        description="Discover how AI enables true personalization at scale, allowing sales teams to deliver tailored experiences to thousands of prospects simultaneously without sacrificing quality or authenticity."
        url="https://aistreamsolutions.com/blog/ai-personalization-at-scale"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/personalization-scale-ai-Hs9kR5thvdCfqFMq29baNMIm4uPsyQ.png"
        datePublished="2025-03-13T00:00:00Z"
        author="AI Stream Solutions Team"
      />
      <ClientBlogPost />
    </>
  )
}
