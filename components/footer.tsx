import { Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <a href="/" className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                className="text-primary"
              >
                <circle
                  cx="14"
                  cy="14"
                  r="14"
                  fill="currentColor"
                  opacity="0.15"
                />
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
              <span className="text-lg font-bold tracking-tight text-foreground">
                Flaura
              </span>
            </a>
            <p className="text-sm text-muted-foreground">
              Your AI Growth Companion
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-foreground">
              Terms & Conditions
            </a>
            <a href="/contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0011.14 4.17V13a8.16 8.16 0 005.3 1.93V11.5a4.85 4.85 0 01-2.49-.69 4.8 4.8 0 01-1.78-2.12V6.69h4.27z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Flaura. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
