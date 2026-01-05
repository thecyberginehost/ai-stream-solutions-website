"use client"

import { useEffect, useRef } from "react"

export default function StreamingDataAnimation() {
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

    // Data stream particles
    const particles: { x: number; y: number; speed: number; size: number; opacity: number }[] = []
    const particleCount = 80

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        speed: 0.5 + Math.random() * 2,
        size: 1.5 + Math.random() * 2,
        opacity: 0.1 + Math.random() * 0.4,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.y -= particle.speed
        if (particle.y < -10) {
          particle.y = canvas.clientHeight + 10
          particle.x = Math.random() * canvas.clientWidth
        }

        ctx.beginPath()
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connecting lines
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.8
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "transparent" }} />
}
