import type { Metadata } from "next"
import ClientBlogPost from "./ClientBlogPost"

export const metadata: Metadata = {
  title: "Introducing the MASP Era: How AI Stream Solutions is Redefining Automation",
  description:
    "Learn about the Managed Automation Service Provider (MASP) certification and how it sets a new standard for excellence in the automation industry.",
  keywords: [
    "MASP",
    "Managed Automation Service Provider",
    "automation certification",
    "enterprise automation",
    "workflow automation",
    "business automation",
  ],
  openGraph: {
    title: "Introducing the MASP Era: Redefining Automation",
    description:
      "Learn about the Managed Automation Service Provider (MASP) certification and how it sets a new standard for excellence in the automation industry.",
    type: "article",
    publishedTime: "2025-06-21T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Introducing the MASP Era: Redefining Automation",
    description:
      "Learn about the Managed Automation Service Provider (MASP) certification and the new standard for excellence in automation.",
  },
}

export default function Page() {
  return <ClientBlogPost />
}
