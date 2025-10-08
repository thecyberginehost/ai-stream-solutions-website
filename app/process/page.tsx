import type { Metadata } from "next"
import ProcessPageClient from "./ProcessPageClient"

export const metadata: Metadata = {
  title: "Our Automation Process - AI Stream Solutions",
  description:
    "Discover our proven 4-step framework for scalable business automation, from discovery and audit to deployment and ongoing optimization.",
  keywords:
    "automation process, business automation framework, MASP certified, automation audit, workflow blueprint, automation deployment, managed automation services",
}

export default function ProcessPage() {
  return <ProcessPageClient />
}
