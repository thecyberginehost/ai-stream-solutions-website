"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "loading"> {
  lowQualitySrc?: string
}

export default function OptimizedImage({ src, alt, lowQualitySrc, className, ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Use a low quality placeholder or blur effect while loading
  const placeholderSrc =
    lowQualitySrc ||
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZWVlZWUiLz48L3N2Zz4="

  return (
    <div className={`relative overflow-hidden ${className || ""}`} style={props.style}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        {...props}
      />
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-slate-100 animate-pulse"
          style={{
            backgroundImage: `url(${placeholderSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
    </div>
  )
}
