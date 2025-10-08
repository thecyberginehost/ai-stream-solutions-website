// Simplified booking utility - redirects to scheduling page
export function openBookingModal() {
  if (typeof window !== "undefined") {
    window.location.href = "/schedule"
  }
}
