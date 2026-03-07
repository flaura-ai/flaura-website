"use client"

import { useEffect, useRef } from "react"
import { Quote } from "lucide-react"

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
      <div className="mx-auto max-w-3xl text-center">
        <Quote className="mx-auto mb-6 h-10 w-10 text-primary/30" />
        <blockquote className="font-serif text-2xl font-medium leading-relaxed tracking-tight text-foreground md:text-3xl">
          The only person you are destined to become is the person you decide to
          be.
        </blockquote>
        <p className="mt-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Ralph Waldo Emerson
        </p>
        <div className="mx-auto mt-10 h-px w-24 bg-border" />
        <p className="mt-10 text-muted-foreground">
          Join thousands of ambitious people already transforming their lives
          with Flaura. Your testimonials will appear here soon.
        </p>
      </div>
    </section>
  )
}
