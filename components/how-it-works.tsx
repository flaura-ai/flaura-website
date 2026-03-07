"use client"

import { useEffect, useRef } from "react"
import { Compass, Map, CalendarCheck, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Compass,
    title: "Discover Yourself",
    description:
      "Our AI-powered onboarding maps your values, strengths, and aspirations to create your unique growth profile.",
  },
  {
    icon: Map,
    title: "Get Your 90-Day Quest",
    description:
      "Receive a personalized habit plan designed around your identity goals with milestones that matter.",
  },
  {
    icon: CalendarCheck,
    title: "Check In Daily",
    description:
      "Track habits, journal your reflections, and receive daily affirmations that keep you grounded and motivated.",
  },
  {
    icon: Sparkles,
    title: "Transform Your Identity",
    description:
      "Watch your progress unfold as new habits become second nature and your confidence grows every day.",
  },
]

export function HowItWorks() {
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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            How It Works
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Your growth journey in four steps
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <step.icon className="h-7 w-7" />
              </div>
              <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Step {i + 1}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
