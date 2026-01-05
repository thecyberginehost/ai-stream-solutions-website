import { generateArticleStructuredData } from "@/lib/structured-data"

interface BlogPostStructuredDataProps {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  author: string
}

export function BlogPostStructuredData({
  title,
  description,
  url,
  image,
  datePublished,
  author,
}: BlogPostStructuredDataProps) {
  const structuredData = generateArticleStructuredData({
    headline: title,
    description,
    url,
    image,
    datePublished,
    author,
  })

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

// Keep the default export for backward compatibility
export default BlogPostStructuredData
