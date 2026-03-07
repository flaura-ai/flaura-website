"use client"

import { useEffect, useRef } from "react"
import {
  Brain,
  Target,
  Sun,
  BookOpen,
  Flame,
  WifiOff,
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Habit Plans",
    description:
      "Intelligent algorithms craft habits aligned to your identity, adapting as you grow and evolve.",
  },
  {
    icon: Target,
    title: "90-Day Identity Quests",
    description:
      "Structured transformation journeys with clear milestones so you can see exactly how far you have come.",
  },
  {
    icon: Sun,
    title: "Daily Affirmations",
    description:
      "Start each morning with personalized affirmations that reinforce your growth mindset and values.",
  },
  {
    icon: BookOpen,
    title: "Journal (Text + Voice)",
    description:
      "Reflect through writing or voice entries. Capture thoughts naturally, whenever inspiration strikes.",
  },
  {
    icon: Flame,
    title: "Streak Tracking & Analytics",
    description:
      "Visual progress dashboards and streak counters that celebrate your consistency and momentum.",
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    description:
      "Local-first architecture means your growth never pauses. Syncs seamlessly when you reconnect.",
  },
]

export function Features() {
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 bg-card px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Key Features
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need to grow
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
