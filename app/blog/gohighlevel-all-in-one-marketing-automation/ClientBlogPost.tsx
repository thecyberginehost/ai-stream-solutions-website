"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { openBookingModal } from "@/lib/booking-utils"

interface BlogData {
  title: string
  publishDate: string
  category: string
  readTime: string
  featuredImage: string
  excerpt: string
}

export default function ClientBlogPost({ blogData }: { blogData: BlogData }) {
  const affiliateLink = "https://www.gohighlevel.com/?fp_ref=ai-stream-solutions"

  const handleConsultationClick = () => {
    openBookingModal()
  }

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center text-sm text-blue-400 mb-4">
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span>{blogData.category}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{blogData.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-slate-300 mb-6 gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{blogData.publishDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{blogData.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Featured Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={blogData.featuredImage || "/placeholder.svg"}
                alt="GoHighLevel Marketing Automation Platform"
                fill
                className="object-cover"
                priority
              />
            </div>

            <h2>Introduction to GoHighLevel</h2>
            <p>
              In today's competitive business landscape, having the right tools to automate your marketing efforts can
              make the difference between struggling to keep up and scaling efficiently. GoHighLevel has emerged as a
              powerful all-in-one marketing automation platform that's transforming how businesses manage their
              marketing operations, customer relationships, and sales processes.
            </p>

            <p>
              At AI Stream Solutions, we've helped numerous clients implement and optimize GoHighLevel to achieve
              remarkable results. In this comprehensive guide, we'll explore what makes GoHighLevel stand out, its key
              features, and how it can benefit your business.
            </p>

            {/* First CTA */}
            <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Ready to transform your marketing automation?</h3>
              <p className="mb-4">
                Try GoHighLevel today with our special partner link and receive exclusive onboarding support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleConsultationClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                >
                  Book a Free Consultation
                </Button>
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full sm:w-auto"
                >
                  Try GoHighLevel <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <h2>What is GoHighLevel?</h2>
            <p>
              GoHighLevel is a comprehensive marketing platform designed to replace multiple tools in your tech stack.
              It's an all-in-one solution that combines CRM, email marketing, SMS marketing, landing page building,
              appointment scheduling, funnel creation, and much more into a single, unified platform.
            </p>

            <p>
              What sets GoHighLevel apart is its ability to centralize all your marketing efforts, eliminating the need
              for multiple subscriptions and the headaches that come with integrating disparate systems.
            </p>

            <h2>Key Features of GoHighLevel</h2>

            <h3>1. Comprehensive CRM System</h3>
            <p>
              At the core of GoHighLevel is a robust CRM system that helps you manage all your customer relationships in
              one place. You can track leads, opportunities, and customer interactions with ease, ensuring nothing falls
              through the cracks.
            </p>

            <h3>2. Marketing Automation</h3>
            <p>
              GoHighLevel's automation capabilities allow you to create sophisticated marketing workflows that trigger
              based on customer actions. From email sequences to SMS campaigns, you can automate your entire customer
              journey, saving time and ensuring consistent communication.
            </p>

            <h3>3. Multi-Channel Communication</h3>
            <p>
              Reach your customers where they are with GoHighLevel's multi-channel communication tools. Send emails, SMS
              messages, voice messages, and even engage through Facebook Messenger—all from a single platform.
            </p>

            <h3>4. Website and Funnel Builder</h3>
            <p>
              Create high-converting landing pages, websites, and sales funnels without any coding knowledge. The
              drag-and-drop builder makes it easy to design professional-looking pages that drive results.
            </p>

            <h3>5. Appointment Scheduling</h3>
            <p>
              GoHighLevel's built-in scheduling system allows clients to book appointments directly on your calendar,
              eliminating the back-and-forth of traditional scheduling.
            </p>

            <h2>How GoHighLevel Can Transform Your Business</h2>

            <h3>Streamlined Operations</h3>
            <p>
              By consolidating multiple tools into one platform, GoHighLevel significantly reduces the complexity of
              your marketing tech stack. This streamlining not only saves money but also eliminates the inefficiencies
              that come with managing multiple systems.
            </p>

            <h3>Enhanced Customer Experience</h3>
            <p>
              With all customer data centralized, you can provide a more personalized experience across all touchpoints.
              This consistency builds trust and strengthens relationships with your customers.
            </p>

            <h3>Improved Team Collaboration</h3>
            <p>
              GoHighLevel makes it easy for teams to collaborate, with shared access to customer information, marketing
              campaigns, and performance metrics. This transparency ensures everyone is aligned and working toward the
              same goals.
            </p>

            <h3>Data-Driven Decision Making</h3>
            <p>
              The platform's comprehensive reporting and analytics tools provide valuable insights into your marketing
              performance. These insights enable you to make informed decisions and continuously optimize your
              strategies.
            </p>

            {/* Second CTA */}
            <div className="my-8 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-2">Ready to take your marketing to the next level?</h3>
              <p className="mb-4">
                Join thousands of businesses that have transformed their marketing with GoHighLevel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-700 hover:bg-slate-100 h-10 px-4 py-2 w-full"
                >
                  Start Your GoHighLevel Journey <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Button
                  onClick={handleConsultationClick}
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700 w-full"
                >
                  Book a Free Consultation
                </Button>
              </div>
            </div>

            <h2>Real-World Success with GoHighLevel</h2>
            <p>
              At AI Stream Solutions, we've helped numerous businesses implement GoHighLevel and achieve remarkable
              results. Here are some real-world examples of how our clients have benefited from this powerful platform:
            </p>

            <div className="bg-slate-50 p-6 rounded-lg my-6">
              <h3 className="font-bold text-lg">Case Study: Digital Marketing Agency</h3>
              <p>
                A digital marketing agency was struggling to manage campaigns across multiple platforms for dozens of
                clients. After implementing GoHighLevel with our guidance, they:
              </p>
              <ul className="mt-2">
                <li className="flex items-start mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Reduced their tech stack from 7 tools to just GoHighLevel</span>
                </li>
                <li className="flex items-start mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Saved over $1,200 per month in subscription costs</span>
                </li>
                <li className="flex items-start mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Increased client retention by 35% through improved reporting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Scaled their client base by 40% without adding additional staff</span>
                </li>
              </ul>
            </div>

            <h2>Getting Started with GoHighLevel</h2>
            <p>
              Implementing GoHighLevel in your business is a strategic decision that can yield significant returns.
              However, like any powerful tool, it requires proper setup and optimization to maximize its benefits.
            </p>

            <p>
              At AI Stream Solutions, we specialize in helping businesses implement GoHighLevel effectively. Our team of
              experts can guide you through the setup process, customize the platform to your specific needs, and train
              your team to use it efficiently.
            </p>

            <h3>Our GoHighLevel Implementation Services Include:</h3>
            <ul>
              <li>Initial setup and configuration</li>
              <li>Custom workflow creation</li>
              <li>Integration with existing systems</li>
              <li>Template development for emails, SMS, and landing pages</li>
              <li>Team training and ongoing support</li>
            </ul>

            <h2>Conclusion: Is GoHighLevel Right for Your Business?</h2>
            <p>
              GoHighLevel offers a powerful solution for businesses looking to streamline their marketing operations and
              enhance customer engagement. Its comprehensive feature set and all-in-one approach make it an attractive
              option for businesses of all sizes.
            </p>

            <p>
              However, to truly leverage the power of GoHighLevel, it's essential to implement it correctly and align it
              with your specific business goals. That's where AI Stream Solutions comes in.
            </p>

            <p>
              Whether you're considering GoHighLevel for your business or looking to optimize your existing
              implementation, our team is here to help. We'll work with you to ensure you get the most out of this
              powerful platform and achieve your business objectives.
            </p>

            {/* Final CTA */}
            <div className="my-8 p-8 bg-slate-900 rounded-lg text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Revolutionize Your Marketing?</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Take the first step toward marketing automation excellence with GoHighLevel and AI Stream Solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-6 py-2 w-full"
                >
                  Try GoHighLevel Today <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Button
                  onClick={handleConsultationClick}
                  variant="outline"
                  className="border-white text-white hover:bg-slate-800 w-full"
                >
                  Book a Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
