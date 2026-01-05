export default function BlogIndexStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "AI Stream Solutions Blog",
    description:
      "Insights, strategies, and best practices for AI-powered automation and business process optimization.",
    url: "https://aistreamsolutions.com/blog",
    publisher: {
      "@type": "Organization",
      name: "AI Stream Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designer%281%29-jeVqkJ6OJJ2ZWzeDlOTv00BShikCAG.jpeg",
      },
    },
    blogPost: [
      {
        "@type": "BlogPosting",
        headline: "Secure & Scalable n8n Automation: The AI Stream Solutions Advantage",
        description:
          "Discover how AI Stream Solutions leverages n8n with dedicated private cloud servers and Docker containers for unparalleled security and performance in your workflow automations.",
        datePublished: "2025-06-24T14:00:00Z",
        url: "https://aistreamsolutions.com/blog/unlocking-workflow-automation-with-n8n",
        image: "https://ai-stream-solutions.s3.us-east-1.amazonaws.com/aistream-n8n-workflow.png", // Updated S3 image URL
      },
      {
        "@type": "BlogPosting",
        headline: "The AI Workflow Automation Revolution: How Businesses Are Achieving 10x Efficiency",
        description:
          "Discover how AI-powered workflow automation is transforming businesses across industries, dramatically reducing manual tasks and enabling unprecedented operational efficiency.",
        datePublished: "2025-03-21T00:00:00Z",
        url: "https://aistreamsolutions.com/blog/ai-workflow-automation-revolution",
        image: "/images/AIEfficiency.jpg",
      },
      {
        "@type": "BlogPosting",
        headline: "How AI is Transforming B2B Sales Cycles",
        description:
          "Discover how artificial intelligence is revolutionizing B2B sales cycles, shortening timelines, and increasing conversion rates through automation and predictive analytics.",
        datePublished: "2025-03-11T00:00:00Z",
        url: "https://aistreamsolutions.com/blog/ai-transforming-b2b-sales-cycles",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b2b.jpg-ObYs6I1aMbJ90JjxbbyUtV6kQbmIlb.jpeg",
      },
      {
        "@type": "BlogPosting",
        headline: "The ROI of Sales Automation: Calculating the True Value for Your Business",
        description:
          "Discover how to accurately measure the return on investment from implementing sales automation tools and processes in your organization.",
        datePublished: "2025-03-05T00:00:00Z",
        url: "https://aistreamsolutions.com/blog/roi-of-sales-automation",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salesblog-iS0kR5thvdCfqFMq29baNMIm4uPsyQ.png",
      },
      {
        "@type": "BlogPosting",
        headline: "AI-Powered Lead Qualification: Separating Hot Prospects from Time-Wasters",
        description:
          "Learn how artificial intelligence is revolutionizing lead qualification by identifying high-value prospects with unprecedented accuracy.",
        datePublished: "2025-02-22T00:00:00Z",
        url: "https://aistreamsolutions.com/blog/ai-powered-lead-qualification",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leadsblog.jpg-uHQHK63gLtV7UmWaaNoYsrTFDj7p43.jpeg",
      },
      {
        "@type": "BlogPosting",
        headline: "Integrating AI Into Your Existing Sales Process: A Step-by-Step Guide",
        description:
          "A practical guide to seamlessly incorporating AI tools into your current sales workflow without disrupting your team's productivity.",
        datePublished: "2025-02-10T00:00:00Z",
        url: "https://aistreamsolutions.com/blog/integrating-ai-into-sales-process",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aiblog-5XrahLLCmRKf7fhm8Hy0wNmBQmq0mu.png",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
