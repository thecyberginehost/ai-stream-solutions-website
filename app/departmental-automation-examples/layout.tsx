import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Departmental Automation Examples | AI Stream Solutions",
  description:
    "Explore real-world automation examples for Sales, Marketing, HR, Finance, and more. See how AI Stream Solutions can transform your business operations with fully managed automation.",
  keywords:
    "automation examples, sales automation, marketing automation, HR automation, finance automation, operations automation, IT automation, managed automation services",
}

export default function DepartmentalAutomationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
