import type { Metadata } from "next"
import SchedulePage from "./SchedulePage"

export const metadata: Metadata = {
  title: "Schedule Your Free Discovery Call - AI Stream Solutions",
  description:
    "Book your free 30-minute discovery call to learn how AI automation can transform your business operations and drive growth. Available times updated in real-time.",
  keywords: [
    "schedule discovery call",
    "book consultation",
    "AI automation consultation",
    "business automation meeting",
    "free discovery call",
  ],
  openGraph: {
    title: "Schedule Your Free Discovery Call - AI Stream Solutions",
    description:
      "Book your free 30-minute discovery call to learn how AI automation can transform your business operations.",
    type: "website",
    url: "https://aistreamsolutions.com/schedule",
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule Your Free Discovery Call - AI Stream Solutions",
    description:
      "Book your free 30-minute discovery call to learn how AI automation can transform your business operations.",
  },
}

export default function Page() {
  return <SchedulePage />
}
