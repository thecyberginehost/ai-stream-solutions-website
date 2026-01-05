import { Metadata } from "next"
import EnterpriseServicesPage from "./EnterpriseServicesPage"

export const metadata: Metadata = {
  title: "Enterprise Managed Automation Services | AI Stream Solutions",
  description:
    "Managed Automation Service Provider (MASP) for enterprises. Private infrastructure, dedicated n8n instance, compliance support, and full management. Custom pricing.",
}

export default function Page() {
  return <EnterpriseServicesPage />
}
