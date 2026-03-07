"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="text-primary"
          >
            <circle cx="14" cy="14" r="14" fill="currentColor" opacity="0.15" />
            <path
              d="M14 6c0 4-3 7-3 11a3 3 0 006 0c0-4-3-7-3-11z"
              fill="currentColor"
            />
            <path
              d="M11 13c-2-1-5 0-6 3a3 3 0 004.5 2.5c2-1.5 1.5-4 1.5-5.5z"
              fill="currentColor"
              opacity="0.7"
            />
            <path
              d="M17 13c2-1 5 0 6 3a3 3 0 01-4.5 2.5c-2-1.5-1.5-4-1.5-5.5z"
              fill="currentColor"
              opacity="0.7"
            />
          </svg>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Flaura
          </span>
        </a>

        <Button
          className="hidden rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90 md:inline-flex"
          asChild
        >
          <a href="#download">Get Started</a>
        </Button>

        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <Button
            className="mt-4 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
            onClick={() => setMobileOpen(false)}
          >
            <a href="#download">Get Started</a>
          </Button>
        </div>
      )}
    </nav>
  )
}
