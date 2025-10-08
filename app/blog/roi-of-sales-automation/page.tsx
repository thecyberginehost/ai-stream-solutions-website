import ROIOfSalesAutomationClient from "./ROIOfSalesAutomationClient"
import BlogPostStructuredData from "@/components/blog-post-structured-data"

export const metadata = {
  title: "The ROI of Sales Automation: Calculating the True Value for Your Business | AI Stream Solutions",
  description:
    "Discover how to accurately measure the return on investment from implementing sales automation tools and processes in your organization.",
  alternates: {
    canonical: "/blog/roi-of-sales-automation",
  },
  openGraph: {
    title: "The ROI of Sales Automation: Calculating the True Value for Your Business",
    description:
      "Discover how to accurately measure the return on investment from implementing sales automation tools and processes in your organization.",
    url: "https://aistreamsolutions.com/blog/roi-of-sales-automation",
    type: "article",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salesblog-iS0kR5thvdCfqFMq29baNMIm4uPsyQ.png",
        width: 1200,
        height: 630,
        alt: "ROI of Sales Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The ROI of Sales Automation: Calculating the True Value for Your Business",
    description:
      "Discover how to accurately measure the return on investment from implementing sales automation tools and processes in your organization.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salesblog-iS0kR5thvdCfqFMq29baNMIm4uPsyQ.png"],
  },
}

export default function BlogPost() {
  return (
    <>
      <BlogPostStructuredData
        title="The ROI of Sales Automation: Calculating the True Value for Your Business"
        description="Discover how to accurately measure the return on investment from implementing sales automation tools and processes in your organization."
        url="https://aistreamsolutions.com/blog/roi-of-sales-automation"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salesblog-iS0kR5thvdCfqFMq29baNMIm4uPsyQ.png"
        datePublished="2025-03-05T00:00:00Z"
        author="AI Stream Solutions Team"
      />
      <ROIOfSalesAutomationClient />
    </>
  )
}
