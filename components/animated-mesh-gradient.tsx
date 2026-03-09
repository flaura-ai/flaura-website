"use client"

import { useEffect, useRef } from "react"

const COLORS = [
  { r: 176, g: 143, b: 197 }, // Lavender  #B08FC5
  { r: 240, g: 154, b: 120 }, // Peach     #F09A78
  { r: 240, g: 112, b: 136 }, // Pink      #F07088
  { r: 229, g: 96, b: 80 },   // Coral     #E56050
  { r: 208, g: 184, b: 136 }, // Warm Gold #D0B888
]

function drawSoftBlob(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  color: (typeof COLORS)[0],
  centerAlpha: number
) {
  const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius)
  gradient.addColorStop(0, `rgba(${color.r},${color.g},${color.b},${centerAlpha})`)
  gradient.addColorStop(0.4, `rgba(${color.r},${color.g},${color.b},${centerAlpha * 0.7})`)
  gradient.addColorStop(0.7, `rgba(${color.r},${color.g},${color.b},${centerAlpha * 0.3})`)
  gradient.addColorStop(1, `rgba(${color.r},${color.g},${color.b},0)`)
  ctx.fillStyle = gradient
  ctx.beginPath()
  ctx.arc(cx, cy, radius, 0, Math.PI * 2)
  ctx.fill()
}

export function AnimatedMeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const startTime = performance.now()

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    const draw = (now: number) => {
      const t = prefersReducedMotion ? 0 : (now - startTime) / 1000
      const w = window.innerWidth
      const h = window.innerHeight

      // Phases — same durations as mobile app (8s, 11s, 9.5s, 13s, 7.5s)
      const phase1 = (t / 8) * Math.PI * 2
      const phase2 = (t / 11) * Math.PI * 2 + Math.PI / 3
      const phase3 = (t / 9.5) * Math.PI * 2 + (2 * Math.PI) / 3
      const phase4 = (t / 13) * Math.PI * 2 + Math.PI
      const phase5 = (t / 7.5) * Math.PI * 2 + (4 * Math.PI) / 3

      // Breathing scale (0.9 – 1.1) over 4s
      const scale = 0.9 + 0.2 * (0.5 + 0.5 * Math.sin(t * Math.PI / 2))
      const blobRadius = Math.min(w, h) * 0.6 * scale

      // Base fill — cosmic latte
      ctx.fillStyle = "#FFF5E1"
      ctx.fillRect(0, 0, w, h)

      // Layer 1: large background blobs (slightly reduced alpha for light base)
      drawSoftBlob(ctx, w * 0.5 + w * 0.3 * Math.sin(phase1),  h * 0.5 + h * 0.3 * Math.cos(phase2),  blobRadius * 1.1,  COLORS[0], 0.55)
      drawSoftBlob(ctx, w * 0.5 + w * 0.25 * Math.cos(phase2), h * 0.5 + h * 0.25 * Math.sin(phase3), blobRadius * 0.95, COLORS[1], 0.5)
      drawSoftBlob(ctx, w * 0.5 + w * 0.35 * Math.sin(phase3), h * 0.5 + h * 0.35 * Math.cos(phase4), blobRadius * 1.0,  COLORS[2], 0.55)
      drawSoftBlob(ctx, w * 0.5 + w * 0.2 * Math.cos(phase4),  h * 0.5 + h * 0.3 * Math.sin(phase5),  blobRadius * 0.85, COLORS[3], 0.5)
      drawSoftBlob(ctx, w * 0.5 + w * 0.32 * Math.sin(phase5), h * 0.5 + h * 0.22 * Math.cos(phase1), blobRadius * 1.05, COLORS[4], 0.45)

      // Layer 2: smaller accent blobs
      drawSoftBlob(ctx, w * 0.5 + w * 0.18 * Math.cos(phase4), h * 0.5 + h * 0.2 * Math.sin(phase2),  blobRadius * 0.5,  COLORS[2], 0.35)
      drawSoftBlob(ctx, w * 0.5 + w * 0.22 * Math.sin(phase1), h * 0.5 + h * 0.25 * Math.cos(phase3), blobRadius * 0.45, COLORS[3], 0.3)

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      aria-hidden="true"
    />
  )
}
