"use client"

import { useEffect, useRef } from "react"

import Image from "next/image"

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="download"
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 bg-primary px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Start Your Growth Journey
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
          Download Flaura today and take the first step toward becoming the
          person you were meant to be.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#">
            <Image
              src="/images/app-store-badge.webp"
              alt="Download on the App Store"
              width={160}
              height={53}
              className="h-[53px] w-auto"
            />
          </a>
          <a href="#">
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
    </section>
  )
}
