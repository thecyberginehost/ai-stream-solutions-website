"use client"

import { useEffect, useRef, useState } from "react"

export default function OptimizedStreamingAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Use Intersection Observer to only animate when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.1 }
    )

    if (canvasRef.current) {
      observer.observe(canvasRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2) // Cap at 2x for performance
      canvas.width = canvas.clientWidth * devicePixelRatio
      canvas.height = canvas.clientHeight * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Reduced particle count for better performance
    const particles: { x: number; y: number; speed: number; size: number; opacity: number }[] = []
    const particleCount = 50 // Reduced from 80

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        speed: 0.5 + Math.random() * 1.5, // Slightly slower
        size: 1.5 + Math.random() * 1.5,
        opacity: 0.15 + Math.random() * 0.3, // Slightly more transparent
      })
    }

    let animationFrameId: number

    // Animation loop with throttling
    let lastFrameTime = 0
    const targetFPS = 30 // Lower FPS for better performance
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime: number) => {
      if (!isVisible) return

      const elapsed = currentTime - lastFrameTime

      if (elapsed > frameInterval) {
        lastFrameTime = currentTime - (elapsed % frameInterval)

        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

        // Update and draw particles
        particles.forEach((particle, i) => {
          particle.y -= particle.speed
          if (particle.y < -10) {
            particle.y = canvas.clientHeight + 10
            particle.x = Math.random() * canvas.clientWidth
          }

          ctx.beginPath()
          ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()

          // Draw connecting lines only to nearby particles (optimized)
          // Only check next 5 particles instead of all
          for (let j = i + 1; j < Math.min(i + 6, particles.length); j++) {
            const otherParticle = particles[j]
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 80) {
              // Reduced from 100
              ctx.beginPath()
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - distance / 80)})`
              ctx.lineWidth = 0.5
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        })
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isVisible])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "transparent" }} />
}
