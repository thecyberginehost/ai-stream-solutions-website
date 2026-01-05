export function loadScriptAsync(src: string, id?: string): Promise<HTMLScriptElement> {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    if (id && document.getElementById(id)) {
      resolve(document.getElementById(id) as HTMLScriptElement)
      return
    }

    const script = document.createElement("script")
    script.src = src
    script.async = true
    if (id) script.id = id

    script.onload = () => resolve(script)
    script.onerror = (error) => reject(error)

    document.body.appendChild(script)
  })
}

export function loadStyleAsync(href: string, id?: string): Promise<HTMLLinkElement> {
  return new Promise((resolve, reject) => {
    // Check if style already exists
    if (id && document.getElementById(id)) {
      resolve(document.getElementById(id) as HTMLLinkElement)
      return
    }

    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = href
    if (id) link.id = id

    link.onload = () => resolve(link)
    link.onerror = (error) => reject(error)

    document.head.appendChild(link)
  })
}
