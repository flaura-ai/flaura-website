"use client"

import { useEffect, useRef } from "react"


import { Button } from "@/components/ui/button"

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
          <Button
            size="lg"
            className="rounded-full bg-primary-foreground px-8 text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <a href="#" className="flex items-center gap-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-primary-foreground/30 px-8 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a href="#" className="flex items-center gap-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.414l2.937 1.647c.388.218.607.547.607.919 0 .372-.22.7-.607.919l-2.937 1.647-2.544-2.566 2.544-2.566zM5.864 3.455L16.8 9.788l-2.302 2.302-8.635-8.635z"/>
              </svg>
              Google Play
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
