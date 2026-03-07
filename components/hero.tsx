"use client"

import { useEffect, useRef } from "react"

import { Button } from "@/components/ui/button"
import Image from "next/image"

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
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Your AI Growth Companion
          </span>
          <h1 className="max-w-xl text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Become Your Most Confident Self
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Flaura combines AI-powered habit design with soulful reflection to
            help ambitious people build identity-aligned habits through
            personalized 90-day quests.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button
              size="lg"
              className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="#download" className="flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-border px-6 text-foreground hover:bg-accent"
              asChild
            >
              <a href="#download" className="flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.414l2.937 1.647c.388.218.607.547.607.919 0 .372-.22.7-.607.919l-2.937 1.647-2.544-2.566 2.544-2.566zM5.864 3.455L16.8 9.788l-2.302 2.302-8.635-8.635z"/>
                </svg>
                Google Play
              </a>
            </Button>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl">
            <Image
              src="/images/hero-illustration.jpg"
              alt="Flaura app botanical illustration representing personal growth"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
