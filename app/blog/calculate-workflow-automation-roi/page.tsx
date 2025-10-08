import type { Metadata } from "next"
import ClientBlogPost from "./ClientBlogPost"

export const metadata: Metadata = {
  title: "How to Calculate Workflow Automation ROI: Complete Guide with Real Examples (2025)",
  description:
    "Learn how to calculate and prove the ROI of workflow automation. Includes ROI calculator, real-world case studies showing 240% average ROI, cost savings formulas, and implementation metrics for business process automation.",
  keywords: [
    "workflow automation ROI",
    "automation ROI calculator",
    "calculate automation ROI",
    "RPA ROI",
    "business process automation ROI",
    "automation cost savings",
    "workflow efficiency metrics",
    "automation business case",
    "process automation ROI 2025",
  ],
  openGraph: {
    title: "Calculate Workflow Automation ROI: The Complete 2025 Guide",
    description:
      "Prove the value of automation with our comprehensive ROI framework. Real case studies showing 240% ROI, cost savings formulas, and implementation metrics.",
    type: "article",
    publishedTime: "2025-04-14T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow Automation ROI Calculator & Guide (2025)",
    description:
      "Calculate and prove automation ROI with real formulas, case studies showing 240% returns, and implementation metrics. Complete guide with examples.",
  },
}

export default function Page() {
  return <ClientBlogPost />
}
