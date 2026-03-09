"use client"

import { useEffect, useRef } from "react"
import { X, Check } from "lucide-react"

export function ProblemSolution() {
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
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Does this sound like you?
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* The Problem */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2">
              <X className="h-5 w-5 text-destructive" />
              <span className="font-semibold text-destructive">The Old Way</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 rounded-xl bg-background border border-destructive/20">
                <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">You've read all the books, watched all the videos</p>
                  <p className="text-sm text-muted-foreground mt-1">But you're still not taking action</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-background border border-destructive/20">
                <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">You start strong every Monday</p>
                  <p className="text-sm text-muted-foreground mt-1">But by Wednesday, you're back to old habits</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-background border border-destructive/20">
                <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Your journal is full of big dreams</p>
                  <p className="text-sm text-muted-foreground mt-1">That you never actually work toward</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-background border border-destructive/20">
                <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">You call yourself "inconsistent" or "undisciplined"</p>
                  <p className="text-sm text-muted-foreground mt-1">And it becomes a self-fulfilling prophecy</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground italic pl-4 border-l-4 border-destructive/30">
              Sound familiar? You're not broken. You just haven't had the right system.
            </p>
          </div>

          {/* The Solution */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">The Flaura Way</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 rounded-xl bg-background border border-primary/30 shadow-sm">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Identity-based affirmations rewire your brain</p>
                  <p className="text-sm text-muted-foreground mt-1">You're not "inconsistent"—you're becoming consistent</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-background border border-primary/30 shadow-sm">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">90-day quests break big goals into achievable milestones</p>
                  <p className="text-sm text-muted-foreground mt-1">No more overwhelm. Just clear, focused action.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-background border border-primary/30 shadow-sm">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Daily habits turn dreams into systems</p>
                  <p className="text-sm text-muted-foreground mt-1">Small actions compound into transformation</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-xl bg-background border border-primary/30 shadow-sm">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Every promise kept rebuilds your self-trust</p>
                  <p className="text-sm text-muted-foreground mt-1">Prove to yourself you're someone who follows through</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-foreground font-medium pl-4 border-l-4 border-primary">
              This is how you stop consuming and start executing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
