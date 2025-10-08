import type { Metadata } from "next"
import ClientBlogPost from "./ClientBlogPost"

export const metadata: Metadata = {
  title: "Automate and Innovate: How to Leverage Zapier for Business Efficiency",
  description:
    "Learn how your business can leverage Zapier to automate repetitive tasks and integrate AI tools like ChatGPT into your workflows. Become more efficient and accelerate growth.",
  openGraph: {
    title: "Automate and Innovate: How to Leverage Zapier for Business Efficiency",
    description:
      "Discover practical ways to use Zapier and AI for automation. As a Certified Zapier Solutions Partner, AI Stream Solutions can help you streamline your operations.",
    images: [
      {
        url: "https://ai-stream-solutions.s3.us-east-1.amazonaws.com/Zapier-Logo.png",
        width: 1200,
        height: 630,
        alt: "Zapier Logo with text 'Automate and Innovate'",
      },
    ],
  },
}

export default function ZapierBlogPostPage() {
  return <ClientBlogPost />
}
