import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import ResourceHints from "@/components/resource-hints"
import CriticalCSS from "@/components/critical-css"
import ThirdPartyScripts from "@/components/third-party-scripts"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BookingModal from "@/components/booking-modal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aistreamsolutions.com'),
  title: "AI Stream Solutions - AI-Powered Automation for Business Growth",
  description:
    "Streamline your business operations with AI-powered automation solutions. Boost efficiency, reduce costs, and drive growth with our cutting-edge AI tools.",
  icons: {
    icon: "/images/ai-stream-logo.png",
    shortcut: "/images/ai-stream-logo.png",
    apple: "/images/ai-stream-logo.png",
  },
  openGraph: {
    images: ["/images/ai-stream-logo.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // This function will be used to determine if we're on a GoHighLevel page
  const isGoHighLevelPage = () => {
    // In server components, we can't access window.location
    // We'll use a different approach in the rendered HTML
    return false // Default to false, we'll handle this with client-side logic
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ResourceHints />
        <meta name="google-site-verification" content="M5E0WrmkWT6O1UJv8JU1X47u1-RlOQcJoErELjJ9i1I" />
        <script id="vtag-ai-js" async src="https://r2.leadsy.ai/tag.js" data-pid="1xBBmuoCIF5Wi9n3v" data-version="062024"></script>
        <CriticalCSS />
        <ThirdPartyScripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const path = window.location.pathname;
              const isGoHighLevelPage = path.includes('/gohighlevel') || path.includes('/gohighlevel-all-in-one-platform');
              document.documentElement.classList.toggle('gohighlevel-page', isGoHighLevelPage);
            })();
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div id="page-container" className="flex flex-col min-h-screen">
            <div className="hidden gohighlevel-page:block">
              {/* This empty div will be shown on GoHighLevel pages instead of the header */}
            </div>
            <div className="gohighlevel-page:hidden">
              <Header />
            </div>
            <div className="flex-grow">{children}</div>
            <div className="hidden gohighlevel-page:block">
              {/* This empty div will be shown on GoHighLevel pages instead of the footer */}
            </div>
            <div className="gohighlevel-page:hidden">
              <Footer />
            </div>
          </div>
          <BookingModal />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
