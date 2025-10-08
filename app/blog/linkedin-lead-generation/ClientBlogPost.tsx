"use client"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import { BlogBackButton } from "@/components/blog-back-button"
import { openBookingModal } from "@/lib/booking-utils"

export default function ClientBlogPost() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <BlogBackButton category="socialMedia" className="mb-6" />

        {/* Header */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex items-center space-x-2 text-blue-600 mb-4">
            <span className="text-sm font-medium">Social Media</span>
            <span>/</span>
            <span className="text-sm font-medium">LinkedIn</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            LinkedIn Lead Generation: The Ultimate B2B Social Media Strategy
          </h1>

          <div className="flex items-center text-gray-600 mb-8">
            <div className="flex items-center mr-6">
              <Calendar className="h-5 w-5 mr-2 text-blue-500" />
              <span>March 15, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-500" />
              <span>14 min read</span>
            </div>
          </div>

          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl mb-10">
            <Image
              src="/images/linkedin-lead-gen.png"
              alt="LinkedIn Lead Generation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                LinkedIn Strategy
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-lg prose-blue">
          <p className="text-xl leading-relaxed text-gray-700">
            In today's digital-first business landscape, LinkedIn has emerged as the premier platform for B2B lead
            generation. With over 900 million professionals worldwide, LinkedIn offers unparalleled opportunities to
            connect with decision-makers and build your sales pipeline. This guide explores proven strategies to
            leverage LinkedIn for effective lead generation.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-8 rounded-r-lg">
            <p className="text-blue-900 font-medium">
              Want to implement these LinkedIn strategies but don't know where to start? Our team can set up your entire
              B2B lead generation strategy for you.
            </p>
            <button
              onClick={openBookingModal}
              className="mt-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Book a Free Consultation
            </button>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Why LinkedIn Is Essential for B2B Lead Generation</h2>
          <p>
            LinkedIn's professional focus makes it uniquely valuable for B2B marketers. Unlike other social platforms,
            LinkedIn users are in a business mindset when browsing the platform, making them more receptive to
            professional opportunities and solutions. The platform's robust targeting capabilities allow you to reach
            specific industries, job titles, company sizes, and more.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Optimizing Your LinkedIn Profile and Company Page</h2>
          <p>Before launching lead generation campaigns, ensure your profile and company page are optimized:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use a professional profile photo and compelling banner image</li>
            <li>Craft a headline that clearly communicates your value proposition</li>
            <li>Write a compelling "About" section that addresses your target audience's pain points</li>
            <li>Showcase relevant experience and include keywords your prospects might search for</li>
            <li>Request and display recommendations from clients and colleagues</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-6 rounded-xl my-10">
            <h3 className="text-xl font-bold mb-3">Need Help With Your LinkedIn Lead Generation?</h3>
            <p className="mb-4">
              Our team can implement these strategies and create a custom lead generation system tailored to your
              specific business goals.
            </p>
            <button
              onClick={openBookingModal}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Book a Free Consultation
            </button>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Content Strategy for LinkedIn Lead Generation</h2>
          <p>Consistent, valuable content establishes your authority and keeps you top-of-mind with prospects:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Share industry insights and thought leadership articles</li>
            <li>Post case studies demonstrating your solution's impact</li>
            <li>Create and share infographics and data visualizations</li>
            <li>Publish "how-to" content that solves common industry problems</li>
            <li>Engage with trending topics relevant to your industry</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">
            LinkedIn Sales Navigator: A Powerful Lead Generation Tool
          </h2>
          <p>LinkedIn Sales Navigator is a premium tool designed specifically for lead generation:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Advanced search filters to identify ideal prospects</li>
            <li>Lead recommendations based on your sales preferences</li>
            <li>Real-time updates about prospects and accounts</li>
            <li>CRM integration capabilities</li>
            <li>InMail credits for direct outreach to prospects</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">Building a Strategic Connection Network</h2>
          <p>Quality connections are more valuable than quantity:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Focus on connecting with decision-makers in your target companies</li>
            <li>Personalize connection requests with context about why you're reaching out</li>
            <li>Engage with prospects' content before sending connection requests</li>
            <li>Leverage second-degree connections for warm introductions</li>
            <li>Join and participate in relevant industry groups</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">LinkedIn Advertising for Lead Generation</h2>
          <p>LinkedIn's advertising platform offers several formats optimized for lead generation:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Sponsored Content to promote your best-performing posts</li>
            <li>Message Ads to deliver personalized messages directly to prospects' inboxes</li>
            <li>Lead Gen Forms that auto-populate with LinkedIn profile data</li>
            <li>Dynamic Ads that personalize ad content based on the viewer's profile</li>
            <li>Text Ads for cost-effective reach</li>
          </ul>

          <div className="border border-blue-200 rounded-lg p-6 bg-white shadow-sm my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Transform Your LinkedIn Strategy?</h3>
            <p className="text-gray-700 mb-4">
              Our team can set up your entire LinkedIn lead generation system, train your team, and help you
              consistently generate high-quality B2B leads.
            </p>
            <button
              onClick={openBookingModal}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
