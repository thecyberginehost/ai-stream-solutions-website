import BlogPageClient from "./page-client"
import BlogIndexStructuredData from "@/components/blog-index-structured-data"
import { metadata } from "./page-metadata"

export { metadata }

export default function BlogPage() {
  return (
    <>
      <BlogIndexStructuredData />
      <BlogPageClient />
    </>
  )
}
