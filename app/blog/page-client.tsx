"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Search } from "lucide-react"

// Blog post data - sorted by date (most recent first)
const blogPosts = [
  {
    title: "Automate and Innovate: How to Leverage Zapier for Business Efficiency",
    description:
      "Discover how to use Zapier to connect your apps, automate workflows, and integrate AI like ChatGPT to supercharge your business operations.",
    href: "/blog/leveraging-zapier-for-automation",
    date: "June 28, 2025",
    readTime: "6 min read",
    imageUrl: "https://ai-stream-solutions.s3.us-east-1.amazonaws.com/Zapier-Logo.png",
    category: "Automation",
  },
  {
    slug: "unlocking-workflow-automation-with-n8n",
    title: "Secure & Scalable n8n Automation: The AI Stream Solutions Advantage",
    description:
      "Discover how AI Stream Solutions leverages n8n with dedicated private cloud servers and Docker containers for unparalleled security and performance.",
    date: "June 24, 2025",
    readTime: "8 min read",
    category: "Secure Automation",
    imageUrl: "https://ai-stream-solutions.s3.us-east-1.amazonaws.com/aistream-n8n-workflow.png",
  },
  {
    title: "Introducing the MASP Era: How AI Stream Solutions is Redefining Automation",
    description:
      "Learn about the Managed Automation Service Provider (MASP) certification and how it sets a new standard for excellence in the automation industry.",
    href: "/blog/introducing-the-masp-era",
    date: "June 21, 2025",
    readTime: "5 min read",
    imageUrl: "https://ai-stream-solutions.s3.us-east-1.amazonaws.com/maspcertifiedmainlogo.png",
    category: "Industry News",
  },
  {
    slug: "make-com-automation-platform-review",
    title: "Make.com Review: The Ultimate Visual Automation Platform for Business Growth",
    description:
      "Discover why Make.com is revolutionizing business automation with its intuitive visual interface, powerful integrations, and cost-effective pricing structure.",
    date: "April 20, 2025",
    readTime: "12 min read",
    category: "Automation Platform",
    imageUrl:
      "https://sjc.microlink.io/lY3nQr8RsUUlH3oI4jnka15UUofk8e9P02nwSz2LuzIATwjdmlZSCuAAEQtRfCFlRsMuid0Cn0SKA5XfGzKWwg.jpeg",
  },
  {
    slug: "gohighlevel-all-in-one-marketing-automation",
    title: "GoHighLevel: The All-in-One Marketing Automation Platform for Business Growth",
    description:
      "Discover how GoHighLevel's comprehensive marketing automation platform can streamline your operations, boost customer engagement, and drive business growth.",
    date: "April 17, 2025",
    readTime: "10 min read",
    category: "Marketing Automation",
    imageUrl: "/images/gohighlevel-logo.png",
  },
  {
    slug: "n8n-vs-make-vs-zapier-comparison-2025",
    title: "n8n vs Make vs Zapier: Which Automation Platform is Right for Your Business in 2025?",
    description:
      "Comprehensive comparison of n8n, Make.com, and Zapier. Compare pricing, features, use cases, and technical capabilities to choose the perfect automation platform.",
    date: "April 14, 2025",
    readTime: "16 min read",
    category: "Platform Comparison",
    imageUrl: "https://ai-stream-solutions.s3.us-east-1.amazonaws.com/Zapier-Logo.png",
  },
  {
    slug: "calculate-workflow-automation-roi",
    title: "How to Calculate Workflow Automation ROI: Complete Guide with Real Examples",
    description:
      "Learn how to calculate and prove the ROI of workflow automation. Includes ROI calculator, real-world case studies showing 240% average ROI, and cost savings formulas.",
    date: "April 12, 2025",
    readTime: "18 min read",
    category: "Business Strategy",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salesblog-iS0kR5thvdCfqFMq29baNMIm4uPsyQ.png",
  },
  {
    slug: "hyperautomation-business-transformation-2025",
    title: "Hyperautomation in 2025: The Next Evolution of Business Process Automation",
    description:
      "Discover how hyperautomation is transforming businesses in 2025. Learn implementation strategies, ROI metrics, and real-world examples achieving 40%+ productivity gains.",
    date: "April 10, 2025",
    readTime: "14 min read",
    category: "Digital Transformation",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/topaitrends.png-AInm5vwSOjRYVqvJzmFUS7Kdq3iB5d.jpeg",
  },
  {
    slug: "top-10-ai-automation-trends-2025",
    title: "Top 10 AI Automation Trends Reshaping Business in 2025",
    description:
      "Explore the cutting-edge AI automation trends that are transforming how businesses operate in 2025, from autonomous decision engines to hyper-personalized customer experiences.",
    date: "March 27, 2025",
    readTime: "15 min read",
    category: "Future Tech",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/topaitrends.png-AInm5vwSOjRYVqvJzmFUS7Kdq3iB5d.jpeg",
  },
  {
    slug: "low-code-automation-platforms",
    title: "Low-Code Automation Platforms: Democratizing Workflow Development",
    description:
      "Discover how low-code automation platforms are empowering non-technical business users to create sophisticated workflows, boosting productivity and reducing IT backlogs across industries.",
    date: "March 24, 2025",
    readTime: "14 min read",
    category: "Process Innovation",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lowcodeautomation-PCEptX00JvT9rQ0UErpHjr9ZJvZFe5.png",
  },
  {
    slug: "ai-workflow-automation-revolution",
    title: "The AI Workflow Automation Revolution: How Businesses Are Achieving 10x Efficiency",
    description:
      "Discover how AI-powered workflow automation is transforming businesses across industries, dramatically reducing manual tasks and enabling unprecedented operational efficiency.",
    date: "March 21, 2025",
    readTime: "12 min read",
    category: "Business Efficiency",
    imageUrl: "/images/AIEfficiency.jpg",
  },
  {
    slug: "ai-personalization-at-scale",
    title: "AI-Powered Personalization at Scale: How to Make Every Prospect Feel Like Your Only Customer",
    description:
      "Discover how AI enables true personalization at scale, allowing sales teams to deliver tailored experiences to thousands of prospects simultaneously.",
    date: "March 13, 2025",
    readTime: "11 min read",
    category: "Customer Experience",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aipersonalize-eozz1aAsacBChvgk7SNsEHL34T1QEH.png",
  },
  {
    slug: "ai-transforming-b2b-sales-cycles",
    title: "How AI is Transforming B2B Sales Cycles",
    description:
      "Discover how artificial intelligence is revolutionizing B2B sales cycles, shortening timelines, and increasing conversion rates.",
    date: "March 11, 2025",
    readTime: "9 min read",
    category: "Sales Strategy",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b2b.jpg-ObYs6I1aMbJ90JjxbbyUtV6kQbmIlb.jpeg",
  },
  {
    slug: "roi-of-sales-automation",
    title: "The ROI of Sales Automation: Calculating the True Value for Your Business",
    description:
      "Discover how to accurately measure the return on investment from implementing sales automation tools and processes in your organization.",
    date: "March 5, 2025",
    readTime: "8 min read",
    category: "Sales Strategy",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salesblog-iS0kR5thvdCfqFMq29baNMIm4uPsyQ.png",
  },
  {
    slug: "ai-powered-lead-qualification",
    title: "AI-Powered Lead Qualification: Separating Hot Prospects from Time-Wasters",
    description:
      "Learn how artificial intelligence is revolutionizing lead qualification by identifying high-value prospects with unprecedented accuracy.",
    date: "February 22, 2025",
    readTime: "6 min read",
    category: "Lead Generation",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leadsblog.jpg-uHQHK63gLtV7UmWaaNoYsrTFDj7p43.jpeg",
  },
  {
    slug: "integrating-ai-into-sales-process",
    title: "Integrating AI Into Your Existing Sales Process: A Step-by-Step Guide",
    description:
      "A practical guide to seamlessly incorporating AI tools into your current sales workflow without disrupting your team's productivity.",
    date: "February 10, 2025",
    readTime: "10 min read",
    category: "Implementation",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aiblog-5XrahLLCmRKf7fhm8Hy0wNmBQmq0mu.png",
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function BlogPageClient() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.description && post.description.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">The AI Stream Blog</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Insights on AI, automation, and business growth from the experts at AI Stream Solutions.
          </p>
        </header>

        <div className="mb-12 max-w-lg mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link href={post.href || `/blog/${post.slug}`} key={post.title || post.slug} className="group block">
              <div className="flex flex-col h-full bg-white rounded-xl border border-slate-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-56 w-full">
                  <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-slate-600 text-base flex-grow">{post.description || post.excerpt}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200 flex items-center text-sm text-slate-500">
                    <div className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
