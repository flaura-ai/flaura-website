import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Terms & Conditions - Flaura",
  description: "Terms and conditions for using the Flaura app and services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="px-6 pt-28 pb-12 md:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Legal
          </span>
          <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            These Terms govern your access to and use of Flaura&apos;s services. Please read them carefully.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="prose prose-lg mx-auto max-w-4xl text-foreground">
          <div className="rounded-2xl border border-border bg-card p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Effective date: 6 March 2026</h2>
            <p className="text-muted-foreground">
              These Terms of Use (&quot;Terms&quot;) govern your access to and use of Flaura&apos;s services, including the Flaura app (the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms.
            </p>
          </div>

          <h3 className="text-xl font-bold mt-8">1. Eligibility</h3>
          <p>
            By using the Service, you represent and warrant that you are at least 18 years of age or the age of legal majority in your jurisdiction. If you do not meet this requirement, you must not access or use the Service.
          </p>

          <h3 className="text-xl font-bold mt-8">2. Accounts and Registration</h3>
          <p>
            To access certain features of the Service, you may be required to create an account. You agree to:
          </p>
          <ul className="list-disc pl-6">
            <li>Provide accurate, current, and complete information during registration.</li>
            <li>Update such information as necessary.</li>
            <li>Safeguard your account credentials.</li>
            <li>Notify us immediately of any unauthorized access or use of your account.</li>
            <li>You are responsible for any activities or actions that occur under your account.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8">3. Use of the Service</h3>
          <p>
            You agree to use the Service in accordance with all applicable laws, rules, and regulations. You are solely responsible for any content you submit through the Service. You agree not to:
          </p>
          <ul className="list-disc pl-6">
            <li>Submit content that is unlawful, harmful, threatening, abusive, harassing, defamatory, or objectionable.</li>
            <li>Engage in any activity that interferes with or disrupts the Service.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8">4. Intellectual Property Rights</h3>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Flaura and its licensors. You agree not to reproduce, distribute, or create derivative works without prior written consent.
          </p>

          <h3 className="text-xl font-bold mt-8">5. Data Storage and Security</h3>
          <p>
            Flaura stores your habit data, journal entries, and quest progress to enable multi-device access. You may delete your data at any time through the app. We take reasonable steps to protect the privacy and security of your data.
          </p>

          <h3 className="text-xl font-bold mt-8">6. Termination</h3>
          <p>
            We reserve the right to terminate or suspend your access to the Service without prior notice if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
          </p>

          <h3 className="text-xl font-bold mt-8">7. Changes to the Terms</h3>
          <p>
            We reserve the right to modify or replace these Terms at any time. Your continued use of the Service after modifications constitutes your acceptance of the modified Terms.
          </p>

          <h3 className="text-xl font-bold mt-8">8. Disclaimer of Warranties and Limitation of Liability</h3>
          <p>
            The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. Flaura disclaims all warranties, express or implied. In no event shall Flaura be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
          </p>
          <ul className="list-disc pl-6">
            <li>Your access to or use of the Service.</li>
            <li>Any third-party content or conduct on the Service.</li>
            <li>Unauthorized access to or use of your transmissions or content.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8">9. Indemnification</h3>
          <p>
            You agree to defend, indemnify, and hold harmless Flaura, its affiliates, and their respective officers, directors, employees, and agents from and against any claims arising out of your access to or use of the Service, your violation of these Terms, or your infringement of any rights of a third party.
          </p>

          <h3 className="text-xl font-bold mt-8">10. Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Australia, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in Adelaide, South Australia.
          </p>

          <h3 className="text-xl font-bold mt-8">11. Contact Information</h3>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:support@flaura.ai" className="text-primary hover:underline">support@flaura.ai</a>.
          </p>

          <p className="mt-8">
            By using Flaura, you acknowledge that you have read and agreed to these Terms of Use.
          </p>

          <div className="flex gap-4 mt-12 not-prose">
            <Link href="/contact">
              <button className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Contact Us
              </button>
            </Link>
            <Link href="/">
              <button className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
