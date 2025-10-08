"use client"

import { usePathname } from "next/navigation"
import Head from "next/head"

interface CanonicalLinkProps {
  baseUrl?: string
  path?: string
}

export function CanonicalLink({ baseUrl = "https://aistreamsolutions.com", path }: CanonicalLinkProps) {
  const pathname = usePathname()
  const canonicalUrl = `${baseUrl}${path || pathname}`

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  )
}

// Keep the default export for backward compatibility
export default CanonicalLink
