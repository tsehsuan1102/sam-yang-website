"use client"

import { useEffect, useRef } from "react"

export function AnimatedGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let time = 0
    let animationFrameId: number

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradient = ctx.createLinearGradient(
        canvas.width * (0.5 + 0.3 * Math.sin(time)),
        0,
        canvas.width * (0.5 + 0.3 * Math.cos(time)),
        canvas.height,
      )

      gradient.addColorStop(0, "rgba(79, 70, 229, 0.2)") // Indigo
      gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.2)") // Purple
      gradient.addColorStop(1, "rgba(236, 72, 153, 0.2)") // Pink

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrameId = requestAnimationFrame(animate)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas className="fixed inset-0 -z-10 h-full w-full bg-black opacity-80" ref={canvasRef} />
}

