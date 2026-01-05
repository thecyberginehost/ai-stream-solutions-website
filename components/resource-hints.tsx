export default function ResourceHints() {
  return (
    <>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://assets.calendly.com" />

      {/* Preload critical resources */}
      <link
        rel="preload"
        href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designer%281%29-jeVqkJ6OJJ2ZWzeDlOTv00BShikCAG.jpeg"
        as="image"
      />

      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        as="style"
      />

      {/* DNS prefetch for third-party services */}
      <link rel="dns-prefetch" href="https://assets.calendly.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

      {/* Add prefetch for key pages users are likely to visit */}
      <link rel="prefetch" href="/features" />
      <link rel="prefetch" href="/automation-suite" />
      <link rel="prefetch" href="/about" />
    </>
  )
}
