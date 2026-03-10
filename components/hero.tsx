"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "./ui/button"

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = "0"
    el.style.transform = "translateY(24px)"
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
      el.style.opacity = "1"
      el.style.transform = "translateY(0)"
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden px-6 pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-foreground">
            For ambitious women who want to stop consuming and start executing 🌻
          </span>
          <h1 className="max-w-xl text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            You Have Big Dreams.
            <br />
            Let's Turn Them Into Action.
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            If you've read all the books, watched all the videos, but still can't seem to follow through... you're not broken. You just need the right system.
          </p>
          <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-foreground font-medium">
            Flaura helps you reframe your identity and break down big goals into small, actionable steps you'll actually complete.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start w-full sm:w-auto">
            <a
              href="#waitlist"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                Join 81 Women on the Waitlist
              </Button>
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Coming soon to iOS and Android • March 2026
          </p>
        </div>
        <div className="relative flex-1">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-thistle/30 via-peach/30 to-salmon-pink/30 p-8 flex items-center justify-center">
            <Image
              src="/icon.svg"
              alt="Flaura AI app icon - sunflower representing personal growth"
              width={300}
              height={300}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
