"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, User, ExternalLink, CheckCircle, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BookingModal from "@/components/booking-modal"
import BlogBackButton from "@/components/blog-back-button"

export default function ClientBlogPost({ blogData }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const affiliateLink = "https://smmdealfinder.com?fpr=sm9wx"

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <BlogBackButton />
      </div>

      {/* Title Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
          {blogData.title}
        </h1>
        <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{blogData.publishDate}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{blogData.readTime}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{blogData.author}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full mb-12 relative">
        <div className="relative h-[400px] w-full">
          <Image
            src={blogData.featuredImage || "/placeholder.svg"}
            alt={blogData.featuredImageAlt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded-md">
              {blogData.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 mb-8">
            <p className="text-lg font-medium text-blue-800 mb-2">
              Looking to supercharge your social media marketing agency with high-quality leads?
            </p>
            <p className="text-gray-700">
              SMM Deal Finder is revolutionizing how agencies find and connect with potential clients. With over 6.7
              million leads in their database and AI-powered tools, it's changing the game for social media marketers.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is SMM Deal Finder?</h2>
          <p>
            SMM Deal Finder is a specialized lead generation platform designed specifically for social media marketing
            agencies. Unlike generic lead databases, SMM Deal Finder focuses exclusively on businesses that need social
            media services, making it an invaluable resource for agencies looking to grow their client base.
          </p>

          <p>
            The platform leverages artificial intelligence to identify businesses that are most likely to need social
            media marketing services, analyzing factors such as current online presence, engagement metrics, and growth
            potential.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Features That Set SMM Deal Finder Apart</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Massive Lead Database</h3>
              <p className="text-gray-700">
                Access to over 6.7 million potential clients, with new leads added hourly to ensure you never run out of
                prospects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">AI-Powered Matching</h3>
              <p className="text-gray-700">
                Advanced algorithms identify businesses most likely to need your specific services, increasing your
                conversion rates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Detailed Business Insights</h3>
              <p className="text-gray-700">
                Get comprehensive information about each lead, including contact details, social media presence, and
                potential service needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Mobile Accessibility</h3>
              <p className="text-gray-700">
                Access your leads on the go with dedicated mobile apps for both iOS and Android devices.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How SMM Deal Finder Transforms Lead Generation</h2>

          <p>
            Traditional lead generation methods often involve expensive tools, cold outreach with low response rates, or
            relying on referrals that can be inconsistent. SMM Deal Finder addresses these pain points by providing:
          </p>

          <ul>
            <li className="mb-2">
              <strong>Pre-qualified leads</strong> that have been identified as needing social media services
            </li>
            <li className="mb-2">
              <strong>Detailed contact information</strong> to make outreach more personalized and effective
            </li>
            <li className="mb-2">
              <strong>Insights into business needs</strong> so you can tailor your pitch specifically to their situation
            </li>
            <li className="mb-2">
              <strong>Regular updates</strong> with fresh leads to ensure your pipeline stays full
            </li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 my-8">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Real Results from Real Agencies</h3>
            <p className="italic text-gray-700 mb-4">
              "SMM Deal Finder has completely transformed our agency's growth strategy. We've increased our client
              acquisition by 73% in just three months while reducing our cost per acquisition by over 60%. The quality
              of leads is exceptional."
            </p>
            <p className="text-sm text-gray-600">— Sarah Johnson, Founder of Social Spark Agency</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pricing That Makes Sense for Agencies</h2>

          <p>
            One of the most compelling aspects of SMM Deal Finder is its pricing structure. Unlike enterprise-level
            tools that can cost thousands per month, SMM Deal Finder offers plans that scale with your agency's needs
            and budget.
          </p>

          <p>
            The platform eliminates the need for multiple expensive subscriptions by consolidating lead generation,
            qualification, and outreach assistance in one affordable package.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg my-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Agency's Lead Generation?</h3>
            <p className="mb-6">
              SMM Deal Finder is offering a special discount for AI Stream Solutions readers. Click the button below to
              get started and access over 6.7 million potential clients for your agency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
              >
                Get Started with SMM Deal Finder <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium"
              >
                Book a Free Consultation
              </Button>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Is SMM Deal Finder Right for Your Agency?</h2>

          <p>
            While SMM Deal Finder offers tremendous value, it's particularly beneficial for certain types of social
            media marketing agencies:
          </p>

          <div className="space-y-4 my-6">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Growing Agencies</h4>
                <p className="text-gray-700">
                  If you're looking to scale your client base quickly without increasing your marketing budget
                  proportionally
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Specialized Social Media Services</h4>
                <p className="text-gray-700">
                  Agencies that focus on specific platforms or industries can filter leads to match their exact niche
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Agencies with Limited Sales Resources</h4>
                <p className="text-gray-700">
                  If you don't have a dedicated sales team, SMM Deal Finder's qualified leads make outreach more
                  efficient
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">New Agencies</h4>
                <p className="text-gray-700">
                  If you're just starting out and need to build a client base quickly without extensive networking
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Get Started with SMM Deal Finder</h2>

          <p>
            Getting started with SMM Deal Finder is straightforward. Here's a simple process to begin transforming your
            lead generation:
          </p>

          <ol className="space-y-4 my-6">
            <li className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                1
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Sign up for an account</strong> through our{" "}
                  <a
                    href={affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    special link
                  </a>{" "}
                  to access exclusive discounts
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                2
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Set up your agency profile</strong> to help the AI match you with the most relevant leads
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                3
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Browse the lead database</strong> using filters to narrow down to your ideal prospects
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                4
              </div>
              <div>
                <p className="text-gray-700">
                  <strong>Start your outreach</strong> using the detailed insights provided for each lead
                </p>
              </div>
            </li>
          </ol>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 my-8">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Our Expert Opinion</h3>
            <p className="text-gray-700 mb-4">
              After thoroughly reviewing SMM Deal Finder, we believe it represents exceptional value for social media
              marketing agencies of all sizes. The combination of AI-powered lead matching, comprehensive database, and
              affordable pricing makes it a standout solution in the crowded lead generation market.
            </p>
            <p className="text-gray-700">
              While no lead generation tool can guarantee 100% conversion, SMM Deal Finder significantly improves your
              odds by providing pre-qualified leads that are already identified as needing social media services.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion: Transform Your Agency's Growth</h2>

          <p>
            In today's competitive social media marketing landscape, having access to quality leads can make the
            difference between struggling to find clients and scaling your agency successfully. SMM Deal Finder provides
            that competitive edge with its massive database of over 6.7 million leads and AI-powered matching
            capabilities.
          </p>

          <p>
            Whether you're a new agency looking to build your client base or an established firm aiming to scale
            efficiently, SMM Deal Finder offers the tools and resources you need to succeed.
          </p>

          <div className="bg-blue-600 text-white p-8 rounded-lg my-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Lead Generation?</h3>
            <p className="mb-6">
              Don't miss out on the opportunity to access millions of potential clients for your social media marketing
              agency. Click below to get started with SMM Deal Finder today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
              >
                Get Started with SMM Deal Finder <ChevronRight className="ml-1 h-4 w-4" />
              </a>
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium"
              >
                Book a Free Strategy Call
              </Button>
            </div>
          </div>
        </div>

        {/* Author Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 mb-16">
          <h3 className="text-lg font-bold text-gray-900 mb-4">About the Author</h3>
          <p className="text-gray-700">
            This article was written by the AI Stream Solutions team, experts in social media marketing and automation
            strategies. We regularly review and recommend tools that can help agencies streamline their operations and
            grow their client base.
          </p>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  )
}
