import ServicesPage from "./ServicesPage"
import ServicesStructuredData from "@/components/services-structured-data"

export const metadata = {
  title: "Managed Automation Services | AI Stream Solutions",
  description:
    "Explore our Managed Automation Service Provider (MASP) model. We build, manage, and optimize intelligent automation infrastructure for your business.",
}

export default function Page() {
  return (
    <>
      <ServicesStructuredData />
      <ServicesPage />
    </>
  )
}
