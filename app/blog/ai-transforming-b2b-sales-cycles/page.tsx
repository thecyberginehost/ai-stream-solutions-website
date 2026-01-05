import ClientBlogPost from "./ClientBlogPost"
import BlogPostStructuredData from "@/components/blog-post-structured-data"

export const metadata = {
  title: "How AI is Transforming B2B Sales Cycles | AI Stream Solutions",
  description:
    "Discover how artificial intelligence is revolutionizing B2B sales cycles, shortening timelines, and increasing conversion rates through automation and predictive analytics.",
  alternates: {
    canonical: "/blog/ai-transforming-b2b-sales-cycles",
  },
  openGraph: {
    title: "How AI is Transforming B2B Sales Cycles",
    description:
      "Discover how artificial intelligence is revolutionizing B2B sales cycles, shortening timelines, and increasing conversion rates through automation and predictive analytics.",
    url: "https://aistreamsolutions.com/blog/ai-transforming-b2b-sales-cycles",
    type: "article",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b2b.jpg-ObYs6I1aMbJ90JjxbbyUtV6kQbmIlb.jpeg",
        width: 1200,
        height: 630,
        alt: "AI Transforming B2B Sales Cycles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How AI is Transforming B2B Sales Cycles",
    description:
      "Discover how artificial intelligence is revolutionizing B2B sales cycles, shortening timelines, and increasing conversion rates through automation and predictive analytics.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b2b.jpg-ObYs6I1aMbJ90JjxbbyUtV6kQbmIlb.jpeg"],
  },
}

export default function BlogPost() {
  return (
    <>
      <BlogPostStructuredData
        title="How AI is Transforming B2B Sales Cycles"
        description="Discover how artificial intelligence is revolutionizing B2B sales cycles, shortening timelines, and increasing conversion rates through automation and predictive analytics."
        url="https://aistreamsolutions.com/blog/ai-transforming-b2b-sales-cycles"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b2b.jpg-ObYs6I1aMbJ90JjxbbyUtV6kQbmIlb.jpeg"
        datePublished="2025-03-11T00:00:00Z"
        author="AI Stream Solutions Team"
      />
      <ClientBlogPost />
    </>
  )
}
