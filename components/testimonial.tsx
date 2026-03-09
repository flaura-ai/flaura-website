"use client"

import { useEffect, useRef } from "react"
import { Users, Sparkles } from "lucide-react"

export function Testimonial() {
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
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
            <Users className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Join Our Community</span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            You're not alone in this
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-background rounded-2xl p-6 border border-border shadow-sm">
            <Sparkles className="h-8 w-8 text-primary mb-4" />
            <p className="text-sm text-muted-foreground italic mb-3">
              "I've been waiting for something like this for YEARS. Finally, an app that gets it."
            </p>
            <p className="text-xs font-medium text-foreground">— Waitlist Member</p>
          </div>

          <div className="bg-background rounded-2xl p-6 border border-border shadow-sm">
            <Sparkles className="h-8 w-8 text-primary mb-4" />
            <p className="text-sm text-muted-foreground italic mb-3">
              "I have so many dreams but can't seem to start. This is exactly what I need."
            </p>
            <p className="text-xs font-medium text-foreground">— Waitlist Member</p>
          </div>

          <div className="bg-background rounded-2xl p-6 border border-border shadow-sm">
            <Sparkles className="h-8 w-8 text-primary mb-4" />
            <p className="text-sm text-muted-foreground italic mb-3">
              "Tired of feeling like I can't trust myself to finish things. Ready for change."
            </p>
            <p className="text-xs font-medium text-foreground">— Waitlist Member</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground font-medium">
            81 ambitious women are already waiting.
          </p>
          <p className="mt-2 text-muted-foreground">
            Be part of the founding community that's choosing execution over consumption.
          </p>
        </div>
      </div>
    </section>
  )
}
