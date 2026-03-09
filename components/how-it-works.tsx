"use client"

import { useEffect, useRef } from "react"
import { MessageCircle, Map, Calendar, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "Discover Your Identity",
    description:
      "Answer a quick 2-minute questionnaire. We'll understand your current struggles, your strengths, and who you're becoming. No word clouds. No judgment. Just honest questions.",
  },
  {
    icon: Map,
    title: "Get Your Personalized Affirmations",
    description:
      "Based on your answers, we create 3-5 identity-based affirmations designed just for you. Repeat them daily to rewire your brain and shift your self-perception.",
  },
  {
    icon: Calendar,
    title: "Build Your 90-Day Quest",
    description:
      "Break your big yearly goal into ONE focused 90-day quest. Then we help you turn that quest into daily habits and systems using our GPS method (Goals → Plans → Systems).",
  },
  {
    icon: TrendingUp,
    title: "Track, Execute, Transform",
    description:
      "Check in daily. Complete your habits. Say your affirmations. Watch your self-trust rebuild as you become someone who actually follows through.",
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
            Getting Started
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Your journey from stuck to unstoppable
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
            No more consuming. No more "I'll start Monday." Just a clear path from where you are to where you want to be.
          </p>
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
