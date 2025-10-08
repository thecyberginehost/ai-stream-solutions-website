export function generateServiceStructuredData(service: {
  name: string
  description: string
  url: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "AI Stream Solutions",
      url: "https://aistreamsolutions.com",
    },
    url: service.url,
    ...(service.image && { image: service.image }),
  }
}

export function generateArticleStructuredData(article: {
  headline: string
  description: string
  url: string
  image: string
  datePublished: string
  author: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "AI Stream Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designer%281%29-jeVqkJ6OJJ2ZWzeDlOTv00BShikCAG.jpeg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  }
}
