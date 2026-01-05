import { Metadata } from "next"
import LocalServicesPage from "./LocalServicesPage"

export const metadata: Metadata = {
  title: "Local Business Automation Services | AI Stream Solutions",
  description:
    "Industry-specific workflow automation for local businesses in North Jersey. Dental, HVAC, legal, real estate, and 20+ more industries. Starting at $997/month.",
}

export default function Page() {
  return <LocalServicesPage />
}
