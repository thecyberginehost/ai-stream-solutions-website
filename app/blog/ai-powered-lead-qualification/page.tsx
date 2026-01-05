import ClientBlogPost from "./ClientBlogPost"

export const metadata = {
  title: "AI-Powered Lead Qualification: Separating Hot Prospects from Time-Wasters | AI Stream Solutions",
  description:
    "Learn how artificial intelligence is revolutionizing lead qualification by identifying high-value prospects with unprecedented accuracy.",
}

export default function BlogPost() {
  // Add the missing blogData prop
  const blogData = {
    title: "AI-Powered Lead Qualification: Separating Hot Prospects from Time-Wasters",
    publishDate: "February 22, 2025",
    author: "AI Stream Solutions Team",
    authorRole: "AI Automation Experts",
    category: "Lead Generation",
    readTime: "6 min read",
    featuredImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leadsblog.jpg-uHQHK63gLtV7UmWaaNoYsrTFDj7p43.jpeg",
    excerpt:
      "Learn how artificial intelligence is revolutionizing lead qualification by identifying high-value prospects with unprecedented accuracy.",
  }

  return <ClientBlogPost blogData={blogData} />
}
