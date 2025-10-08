"use client"

import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface SocialMediaBlogContainerProps {
  children: ReactNode
}

export function SocialMediaBlogContainer({ children }: SocialMediaBlogContainerProps) {
  return (
    <div className="bg-white dark:bg-slate-900 py-12">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  )
}

export function SocialMediaBlogHeader({
  title,
  category,
  date,
  readTime,
  className,
}: {
  title: string
  category: string
  date: string
  readTime: string
  className?: string
}) {
  return (
    <div className={cn("mb-8", className)}>
      <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-purple-600 rounded-full">
        {category}
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">{title}</h1>
      <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
        <span className="mr-4">{date}</span>
        <span>{readTime}</span>
      </div>
    </div>
  )
}

export function SocialMediaBlogContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "prose prose-lg max-w-none prose-headings:text-slate-900 prose-headings:dark:text-white prose-p:text-slate-700 prose-p:dark:text-slate-300 prose-a:text-purple-600 prose-a:dark:text-purple-400 prose-strong:text-slate-900 prose-strong:dark:text-white prose-li:text-slate-700 prose-li:dark:text-slate-300",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function SocialMediaBlogImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={cn("relative w-full h-64 sm:h-96 mb-8 rounded-lg overflow-hidden", className)}>
      <img src={src || "/placeholder.svg"} alt={alt} className="object-cover w-full h-full" />
    </div>
  )
}

export function SocialMediaBlogCTA({
  text,
  onClick,
  className,
}: {
  text: string
  onClick: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 mt-6 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors",
        className,
      )}
    >
      {text}
    </button>
  )
}
