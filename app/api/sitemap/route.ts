import { NextResponse } from "next/server"
import { headers } from "next/headers"

export async function GET() {
  // Get host from request headers
  const headersList = headers()
  const host = headersList.get("host") || "aistreamsolutions.com"

  // Determine protocol (use https by default for production)
  const protocol = host.includes("localhost") ? "http" : "https"

  // Base URL constructed from host
  const baseUrl = `${protocol}://${host}`

  // Main pages (static)
  const mainPages = [
    { url: "/", lastmod: "2025-04-18", priority: "1.0", changefreq: "monthly" },
    { url: "/about", lastmod: "2025-04-18", priority: "0.8", changefreq: "monthly" },
    { url: "/services", lastmod: "2025-04-18", priority: "0.9", changefreq: "monthly" },
    { url: "/features", lastmod: "2025-04-18", priority: "0.8", changefreq: "monthly" },
    { url: "/automation-suite", lastmod: "2025-04-18", priority: "0.9", changefreq: "monthly" },
    { url: "/blog", lastmod: "2025-04-18", priority: "0.8", changefreq: "weekly" },
    { url: "/terms", lastmod: "2025-04-18", priority: "0.3", changefreq: "yearly" },
    { url: "/privacy", lastmod: "2025-04-18", priority: "0.3", changefreq: "yearly" },
    { url: "/refund-policy", lastmod: "2025-04-18", priority: "0.3", changefreq: "yearly" },
  ]

  // Blog posts - Automation
  const automationPosts = [
    { url: "/blog/ai-workflow-automation-revolution", lastmod: "2025-03-10", priority: "0.7", changefreq: "yearly" },
    {
      url: "/blog/ai-workflow-automation-across-departments",
      lastmod: "2025-03-05",
      priority: "0.7",
      changefreq: "yearly",
    },
    { url: "/blog/ai-personalization-at-scale", lastmod: "2025-02-28", priority: "0.7", changefreq: "yearly" },
    { url: "/blog/ai-transforming-b2b-sales-cycles", lastmod: "2025-02-20", priority: "0.7", changefreq: "yearly" },
    { url: "/blog/low-code-automation-platforms", lastmod: "2025-02-15", priority: "0.7", changefreq: "yearly" },
    { url: "/blog/top-10-ai-automation-trends-2025", lastmod: "2025-01-30", priority: "0.7", changefreq: "yearly" },
    { url: "/blog/integrating-ai-into-sales-process", lastmod: "2025-01-25", priority: "0.7", changefreq: "yearly" },
    { url: "/blog/roi-of-sales-automation", lastmod: "2025-01-20", priority: "0.7", changefreq: "yearly" },
    { url: "/blog/ai-powered-lead-qualification", lastmod: "2025-01-15", priority: "0.7", changefreq: "yearly" },
    {
      url: "/blog/gohighlevel-all-in-one-marketing-automation",
      lastmod: "2025-01-10",
      priority: "0.7",
      changefreq: "yearly",
    },
  ]

  // Blog posts - Social Media
  const socialMediaPosts = [
    { url: "/blog/smm-deal-finder-review", lastmod: "2025-04-18", priority: "0.7", changefreq: "yearly" },
    { url: "/blog/authentic-brand-voice", lastmod: "2025-04-10", priority: "0.7", changefreq: "yearly" },
    { url: "/blog/social-media-advertising", lastmod: "2025-04-04", priority: "0.7", changefreq: "yearly" },
    { url: "/blog/content-repurposing", lastmod: "2025-03-30", priority: "0.7", changefreq: "yearly" },
    { url: "/blog/social-media-automation", lastmod: "2025-03-20", priority: "0.7", changefreq: "yearly" },
    { url: "/blog/linkedin-lead-generation", lastmod: "2025-03-15", priority: "0.7", changefreq: "yearly" },
    { url: "/blog/roi-of-social-media-marketing", lastmod: "2025-03-15", priority: "0.7", changefreq: "yearly" },
    { url: "/blog/instagram-algorithm-mastery", lastmod: "2025-03-14", priority: "0.7", changefreq: "yearly" },
    { url: "/blog/tiktok-for-business", lastmod: "2025-02-27", priority: "0.7", changefreq: "yearly" },
  ]

  // Combine all pages
  const allPages = [...mainPages, ...automationPosts, ...socialMediaPosts]

  // Generate XML with absolute URLs
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`

  // Return XML response
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
