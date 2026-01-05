import Link from "next/link"

interface BlogDisclaimerProps {
  type: "ai-focused" | "general"
}

export default function BlogDisclaimer({ type }: BlogDisclaimerProps) {
  if (type === "ai-focused") {
    return (
      <div className="not-prose bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
        <p className="text-amber-900 font-semibold mb-2">⚠️ Important Note About This Article</p>
        <p className="text-amber-800 text-sm">
          This article discusses advanced AI and machine learning capabilities for workflow automation.
          <strong> Most workflow automation uses standard logic-based automation</strong> (triggers, actions, conditional routing) which accounts for 80-90% of typical implementations.
          AI features like those described here—document processing with ML, predictive analytics, natural language understanding—are optional add-ons used when they deliver clear ROI.
          {" "}<Link href="/services" className="text-amber-900 underline font-medium">Contact us</Link> to discuss which approach fits your specific needs.
        </p>
      </div>
    )
  }

  return null
}
