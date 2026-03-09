"use client"

import { useEffect, useRef } from "react"
import { Button } from "./ui/button"

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
      id="waitlist"
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Ready to Stop Consuming and Start Executing?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Join 81 ambitious women who are done with journals that never get used and goals that never get started.
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground font-medium">
          Be the first to know when Flaura launches in March 2026. Get exclusive early access and founder pricing.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://growwithflaura.beehiiv.com/?utm_source=website&utm_medium=cta_section" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
            >
              Join the Waitlist →
            </Button>
          </a>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Coming soon to iOS and Android • No credit card required
        </p>
      </div>
    </section>
  )
}
