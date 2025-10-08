"use client"

let scriptLoaded = false

export function loadLeadConnectorScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (scriptLoaded) {
      resolve()
      return
    }

    const script = document.createElement("script")
    script.src = "https://link.msgsndr.com/js/form_embed.js"
    script.async = true

    script.onload = () => {
      scriptLoaded = true
      resolve()
    }

    script.onerror = () => {
      reject(new Error("Failed to load LeadConnector script"))
    }

    document.body.appendChild(script)
  })
}
