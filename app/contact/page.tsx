import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, MessageSquare, HelpCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contact - Flaura",
  description: "Get in touch with the Flaura team for support, feedback, or inquiries.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="px-6 pt-28 pb-12 md:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Contact Us
          </span>
          <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;d love to hear from you. Choose the most convenient way to reach us.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold mb-4">Email Us</h3>
            <p className="text-muted-foreground mb-6">
              Select the most appropriate email option below to get in touch with our team.
            </p>

            <div className="space-y-4">
              <a href="mailto:support@flaura.ai" className="block">
                <div className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:bg-accent">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium block">General Support</span>
                    <span className="text-sm text-muted-foreground">support@flaura.ai</span>
                  </div>
                </div>
              </a>

              <a href="mailto:feedback@flaura.ai" className="block">
                <div className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:bg-accent">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium block">Feedback &amp; Suggestions</span>
                    <span className="text-sm text-muted-foreground">feedback@flaura.ai</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-6 rounded-xl bg-primary/5 p-4">
              <h4 className="font-medium mb-2">Response Time</h4>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24-48 hours during business days. For urgent matters, include &quot;URGENT&quot; in your subject line.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-muted-foreground">
                  <a href="mailto:support@flaura.ai" className="hover:text-primary transition-colors">support@flaura.ai</a>
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0011.14 4.17V13a8.16 8.16 0 005.3 1.93V11.5a4.85 4.85 0 01-2.49-.69 4.8 4.8 0 01-1.78-2.12V6.69h4.27z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/privacy">
                <button className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors">
                  Privacy Policy
                </button>
              </Link>
              <Link href="/terms">
                <button className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors">
                  Terms
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
