"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Flaura AI"
            width={140}
            height={58}
            className="h-10 w-auto"
            priority
          />
        </a>

        <Button
          className="hidden rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90 font-semibold shadow-md hover:shadow-lg transition-all md:inline-flex"
          asChild
        >
          <a href="#waitlist">Join Waitlist</a>
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
            className="mt-4 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            asChild
            onClick={() => setMobileOpen(false)}
          >
            <a href="#waitlist">Join Waitlist</a>
          </Button>
        </div>
      )}
    </nav>
  )
}
