import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Mail,
  Calendar,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact AI Stream Solutions | Wayne, NJ",
  description:
    "Get in touch with AI Stream Solutions. Based in Wayne, NJ, serving Passaic County and North Jersey. Book a strategy call to discuss your automation needs.",
}

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Ready to automate your business? Let's talk about how we can help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Book a Call */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Book a Strategy Call</h2>
              <p className="text-slate-600 mb-6">
                The fastest way to get started. Schedule a free 30-minute call to discuss your automation needs.
              </p>
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/schedule" className="inline-flex items-center justify-center">
                  Schedule Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Email */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8 text-center">
              <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-slate-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Send an Email</h2>
              <p className="text-slate-600 mb-6">
                Have a quick question? Drop us a line and we'll get back to you within 24 hours.
              </p>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href="mailto:hello@aistreamsolutions.com">
                  hello@aistreamsolutions.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Location</h2>
            <p className="text-lg text-slate-700 mb-2">
              <strong>Wayne, NJ</strong>
            </p>
            <p className="text-slate-600">
              Serving Wayne, Passaic County, and North Jersey
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Build Something Great Together</h2>
          <p className="text-xl text-blue-100 mb-8">
            Every conversation starts with understanding your unique challenges. No sales pitch—just a real discussion about what automation can do for you.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100" asChild>
            <Link href="/schedule" className="inline-flex items-center">
              Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
