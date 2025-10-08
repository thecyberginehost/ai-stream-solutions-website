"use client"

import { Button } from "@/components/ui/button"
import { openBookingModal } from "@/lib/booking-utils"

export default function EnterpriseConsultationModal() {
  const handleClick = () => {
    openBookingModal()
  }

  return (
    <Button size="lg" className="w-full bg-white text-slate-900 hover:bg-slate-100" onClick={handleClick}>
      Schedule a Consultation
    </Button>
  )
}
