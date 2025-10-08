// Simplified booking utility - redirects to scheduling page with Calendly
export function openBookingModal() {
  if (typeof window !== "undefined") {
    window.location.href = "/schedule"
  }
}
