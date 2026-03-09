"use client"

import { useEffect, useRef } from "react"
import {
  Heart,
  Target,
  Repeat,
  TrendingUp,
  Sparkles,
  CheckCircle2,
} from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Identity-Based Affirmations",
    description:
      "Reframe how you see yourself with personalized affirmations that rewire your brain through daily repetition. You're not 'inconsistent'—you're becoming consistent.",
  },
  {
    icon: Target,
    title: "90-Day Quest System",
    description:
      "Break your big yearly goals into focused 90-day quests. No more overwhelm. Just clear, achievable milestones that actually move you forward.",
  },
  {
    icon: Repeat,
    title: "Daily Habits & Systems",
    description:
      "Turn your quests into small daily actions. You don't rise to your goals—you fall to the level of your systems. We help you build the right ones.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Personalization",
    description:
      "Every affirmation, every quest, every habit is tailored to YOU. Based on your identity, your goals, and who you're becoming.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "See your transformation unfold. Track your quests, celebrate your wins, and build the evidence that you ARE someone who follows through.",
  },
  {
    icon: CheckCircle2,
    title: "Rebuild Self-Trust",
    description:
      "Every promise you keep to yourself strengthens your self-trust. Every completed daily habit proves you're becoming who you say you want to be.",
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
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            How Flaura Works
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Two parts. One transformation.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
            Stop consuming content and start executing on your goals through identity transformation and actionable systems.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-lg"
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
