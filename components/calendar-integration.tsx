"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ExternalLink, Calendar, Clock, Users, Zap } from "lucide-react"

export default function CalendarIntegration() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  const integrationOptions = [
    {
      name: "HubSpot Meetings",
      description: "Professional meeting scheduling with CRM integration",
      features: [
        "Automated email confirmations",
        "CRM contact creation",
        "Meeting reminders",
        "Custom booking forms",
        "Team scheduling",
        "Analytics and reporting",
      ],
      pros: [
        "Seamless CRM integration",
        "Professional appearance",
        "Advanced customization",
        "Team collaboration features",
      ],
      cons: ["Requires HubSpot account", "Learning curve for advanced features"],
      recommended: true,
      icon: <Users className="h-6 w-6" />,
      color: "bg-orange-500",
    },
    {
      name: "Calendly",
      description: "Simple and popular scheduling tool",
      features: [
        "Easy setup and use",
        "Multiple meeting types",
        "Buffer times",
        "Timezone detection",
        "Payment integration",
        "Workflow automation",
      ],
      pros: ["User-friendly interface", "Quick setup", "Reliable service", "Good free tier"],
      cons: ["Limited customization", "Basic CRM integration", "Can look generic"],
      recommended: false,
      icon: <Calendar className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      name: "Google Calendar",
      description: "Basic scheduling with appointment slots",
      features: [
        "Free to use",
        "Google Workspace integration",
        "Simple appointment slots",
        "Email notifications",
        "Mobile access",
      ],
      pros: ["Completely free", "Easy Google integration", "Familiar interface"],
      cons: ["Very basic features", "No advanced customization", "Limited automation", "No CRM integration"],
      recommended: false,
      icon: <Clock className="h-6 w-6" />,
      color: "bg-green-500",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {integrationOptions.map((tool) => (
          <Card
            key={tool.name}
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedTool === tool.name ? "ring-2 ring-blue-500 shadow-lg" : ""
            } ${tool.recommended ? "border-orange-200 bg-orange-50" : ""}`}
            onClick={() => setSelectedTool(selectedTool === tool.name ? null : tool.name)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${tool.color} text-white`}>{tool.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    {tool.recommended && (
                      <Badge variant="secondary" className="mt-1 bg-orange-100 text-orange-800">
                        <Zap className="h-3 w-3 mr-1" />
                        Recommended
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {tool.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {tool.features.length > 3 && (
                      <li className="text-sm text-gray-500">+ {tool.features.length - 3} more features</li>
                    )}
                  </ul>
                </div>

                {selectedTool === tool.name && (
                  <div className="space-y-3 pt-3 border-t">
                    <div>
                      <h5 className="font-medium text-sm text-green-700 mb-1">Pros:</h5>
                      <ul className="space-y-1">
                        {tool.pros.map((pro, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <CheckCircle2 className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium text-sm text-red-700 mb-1">Considerations:</h5>
                      <ul className="space-y-1">
                        {tool.cons.map((con, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <span className="w-3 h-3 rounded-full bg-red-200 mr-2 mt-1 flex-shrink-0"></span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {tool.name === "HubSpot Meetings" && (
                      <div className="pt-2">
                        <Button size="sm" className="w-full" asChild>
                          <a
                            href="https://www.hubspot.com/products/sales/meetings"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            Learn More About HubSpot Meetings
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold mb-3 text-blue-800">Current Setup</h3>
        <p className="text-blue-700 mb-4">
          We're currently using <strong>HubSpot Meetings</strong> for our booking system, which provides seamless CRM
          integration and professional scheduling capabilities.
        </p>
        <div className="flex items-center text-sm text-blue-600">
          <CheckCircle2 className="h-4 w-4 mr-2" />
          <span>Automatic lead capture and CRM sync</span>
        </div>
        <div className="flex items-center text-sm text-blue-600 mt-1">
          <CheckCircle2 className="h-4 w-4 mr-2" />
          <span>Professional branded booking experience</span>
        </div>
      </div>
    </div>
  )
}
