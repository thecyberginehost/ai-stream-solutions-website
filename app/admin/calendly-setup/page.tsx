export default function CalendlySetupPage() {
  return (
    <main className="flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Calendly Setup Guide</h1>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Configuring Calendly Email Notifications</h2>

          <p className="mb-4">
            To ensure both your personal email (aamore@aistreamsolutions.com) and the strategy email
            (strategy@aistreamsolutions.com) receive notifications, follow these steps:
          </p>

          <ol className="list-decimal pl-6 space-y-4 mb-6">
            <li>
              <strong>Log in to your Calendly account</strong> at
              <a
                href="https://calendly.com/app/login"
                className="text-blue-600 hover:underline ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                calendly.com
              </a>
            </li>

            <li>
              <strong>Navigate to the event type</strong> you're using for strategy calls (likely "30 Minute Meeting")
            </li>

            <li>
              <strong>Click "Edit"</strong> to modify the event settings
            </li>

            <li>
              <strong>Go to the "Notifications" tab</strong> in the event settings
            </li>

            <li>
              <strong>Under "Email notifications to host"</strong>, click "Add email recipients"
            </li>

            <li>
              <strong>Add strategy@aistreamsolutions.com</strong> as an additional recipient
            </li>

            <li>
              <strong>Save your changes</strong>
            </li>
          </ol>

          <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
            <p className="text-blue-800">
              <strong>Note:</strong> This will ensure that both email addresses receive the same notification emails
              directly from Calendly, including all the invitee information.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Additional Calendly Settings to Check</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">1. Confirmation Page</h3>
              <p>
                Make sure your confirmation page includes all necessary information for clients. You can customize this
                under Event Type → Confirmation Page.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">2. Required Fields</h3>
              <p>
                Ensure you're collecting all necessary information from clients. Go to Event Type → Invitee Questions to
                configure required fields.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">3. Calendar Connection</h3>
              <p>
                Verify that Calendly is connected to your calendar to avoid double-bookings. Check this under Account →
                Calendar Connections.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">4. Email Templates</h3>
              <p>
                Customize the email templates sent to clients to match your brand voice. Edit these under Event Type →
                Notifications → Email notifications to invitees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
