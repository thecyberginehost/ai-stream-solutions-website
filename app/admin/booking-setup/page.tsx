import CalendarIntegration from "@/components/calendar-integration"

export const metadata = {
  title: "Booking Setup - AI Stream Solutions Admin",
  description: "Configure your booking and scheduling options",
}

export default function BookingSetupPage() {
  return (
    <main className="flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Booking System Setup</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Current Process</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ol className="list-decimal pl-5 space-y-3">
              <li>Client submits a strategy call request through the website form</li>
              <li>Client receives an automatic confirmation email</li>
              <li>You receive a notification email with the client's details</li>
              <li>You need to contact the client to schedule the actual call</li>
            </ol>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Calendar Integration Options</h2>
          <p className="mb-6">
            To streamline your booking process, consider integrating one of these scheduling tools:
          </p>
          <CalendarIntegration />
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">Recommended Workflow</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Set up your preferred scheduling tool (Calendly, HubSpot, or Google Calendar)</li>
            <li>Update the client confirmation email template to include your scheduling link</li>
            <li>Client receives confirmation email and books a time that works for them</li>
            <li>Both you and the client receive calendar invitations automatically</li>
            <li>Conduct the strategy call at the scheduled time</li>
          </ol>
        </div>
      </div>
    </main>
  )
}
