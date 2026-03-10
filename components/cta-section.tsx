"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

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
        <Script src="https://subscribe-forms.beehiiv.com/embed.js" strategy="afterInteractive" />
        <Script src="https://subscribe-forms.beehiiv.com/attribution.js" strategy="afterInteractive" />
        <div className="mt-8 flex items-center justify-center">
          <iframe
            src="https://subscribe-forms.beehiiv.com/537a3975-5972-43f9-be66-ad861d8fb732"
            className="beehiiv-embed h-[500px] sm:h-[377px]"
            data-test-id="beehiiv-embed"
            frameBorder="0"
            scrolling="no"
            style={{ width: 954, maxWidth: "100%", margin: 0, borderRadius: 0, backgroundColor: "transparent", boxShadow: "0 0 #0000" }}
          />
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Coming soon to iOS and Android • No credit card required
        </p>
      </div>
    </section>
  )
}
