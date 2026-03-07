"use client"

import { useEffect, useRef } from "react"

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
            <a href="#download">
              <Image
                src="/images/app-store-badge.webp"
                alt="Download on the App Store"
                width={160}
                height={53}
                className="h-[53px] w-auto"
              />
            </a>
            <a href="#download">
              <Image
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                width={180}
                height={53}
                className="h-[53px] w-auto"
              />
            </a>
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
