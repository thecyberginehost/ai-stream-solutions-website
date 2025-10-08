import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | AI Stream Solutions",
  description: "Insights, strategies, and best practices for AI-powered automation and business process optimization.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "AI Stream Solutions Blog",
    description:
      "Insights, strategies, and best practices for AI-powered automation and business process optimization.",
    url: "https://aistreamsolutions.com/blog",
    type: "website",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salesblog-iS0kR5thvdCfqFMq29baNMIm4uPsyQ.png",
        width: 1200,
        height: 630,
        alt: "AI Stream Solutions Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Stream Solutions Blog",
    description:
      "Insights, strategies, and best practices for AI-powered automation and business process optimization.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salesblog-iS0kR5thvdCfqFMq29baNMIm4uPsyQ.png"],
  },
}

export default function PageMetadata() {
  return null
}
