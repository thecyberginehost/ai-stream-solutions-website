"use client"

import { useEffect, useRef } from "react"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const devicePixelRatio = window.devicePixelRatio || 1
      canvas.width = canvas.clientWidth * devicePixelRatio
      canvas.height = canvas.clientHeight * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Define icons and their positions
    const icons = [
      { icon: "message", x: 50, y: 50, vx: 0.5, vy: 0.3, size: 30 },
      { icon: "users", x: 150, y: 100, vx: -0.4, vy: 0.5, size: 30 },
      { icon: "calendar", x: 250, y: 150, vx: 0.3, vy: -0.4, size: 30 },
      { icon: "database", x: 100, y: 200, vx: -0.5, vy: -0.3, size: 30 },
      { icon: "chart", x: 200, y: 50, vx: 0.4, vy: 0.4, size: 30 },
      { icon: "check", x: 300, y: 200, vx: -0.3, vy: -0.5, size: 30 },
    ]

    // Draw icons
    const drawIcon = (icon: string, x: number, y: number, size: number) => {
      ctx.fillStyle = "#3b82f6"
      ctx.beginPath()

      switch (icon) {
        case "message":
          ctx.fillRect(x - size / 2, y - size / 2, size, size)
          break
        case "users":
          ctx.arc(x, y, size / 2, 0, Math.PI * 2)
          ctx.fill()
          break
        case "calendar":
          ctx.fillRect(x - size / 2, y - size / 2, size, size)
          break
        case "database":
          ctx.arc(x, y, size / 2, 0, Math.PI * 2)
          ctx.fill()
          break
        case "chart":
          ctx.fillRect(x - size / 2, y - size / 2, size, size)
          break
        case "check":
          ctx.arc(x, y, size / 2, 0, Math.PI * 2)
          ctx.fill()
          break
      }
    }

    // Draw connections between icons
    const drawConnections = () => {
      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)"
      ctx.lineWidth = 2

      for (let i = 0; i < icons.length; i++) {
        for (let j = i + 1; j < icons.length; j++) {
          const icon1 = icons[i]
          const icon2 = icons[j]
          const distance = Math.sqrt(Math.pow(icon2.x - icon1.x, 2) + Math.pow(icon2.y - icon1.y, 2))

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(icon1.x, icon1.y)
            ctx.lineTo(icon2.x, icon2.y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      // Update positions
      icons.forEach((icon) => {
        icon.x += icon.vx
        icon.y += icon.vy

        // Bounce off walls
        if (icon.x < icon.size / 2 || icon.x > canvas.clientWidth - icon.size / 2) {
          icon.vx = -icon.vx
        }
        if (icon.y < icon.size / 2 || icon.y > canvas.clientHeight - icon.size / 2) {
          icon.vy = -icon.vy
        }
      })

      // Draw connections and icons
      drawConnections()
      icons.forEach((icon) => {
        drawIcon(icon.icon, icon.x, icon.y, icon.size)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="relative w-full h-[400px]">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: "linear-gradient(to bottom right, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.9))" }}
      />
    </div>
  )
}
