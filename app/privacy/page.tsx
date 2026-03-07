import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - Flaura",
  description: "Learn how Flaura protects your data and privacy.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="px-6 pt-28 pb-12 md:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Privacy
          </span>
          <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your privacy is our top priority. Learn how we protect your data.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="prose prose-lg mx-auto max-w-4xl text-foreground">
          <div className="rounded-2xl border border-border bg-card p-8 mb-10">
            <h2 className="text-2xl font-bold mb-4">Effective date: 6 March 2026</h2>
            <p className="text-muted-foreground">
              Thank you for choosing <strong>Flaura</strong>, your AI Growth Companion.
              Your privacy is our priority, and this Privacy Policy explains how we handle your data responsibly.
            </p>
          </div>

          <h3 className="text-xl font-bold mt-8">Brief Overview</h3>
          <p>
            Flaura (&quot;We&quot; or &quot;us&quot;) is committed to protecting and respecting your (&quot;you&quot; or &quot;user&quot;) personal data privacy and complying with data protection principles and provisions under applicable laws.
          </p>
          <p>
            We only store the data that Flaura needs to function as a secure AI-powered personal growth and habit tracking service. We do not share or commercialize your data, and all processing is strictly aligned with this Privacy Policy.
          </p>
          <p>
            By continuing to use Flaura, you are consenting to the collection, processing, usage and disclosure of your Personal Data as set out in this Privacy Policy. If you do not agree to this Privacy Policy, you should immediately stop using Flaura.
          </p>

          <h3 className="text-xl font-bold mt-8">1. What Data We Collect and Why</h3>

          <h4 className="text-lg font-bold mt-6">1.1 Basic Usage Data</h4>
          <p>
            When you browse our website or use our mobile app, we collect minimal data to ensure the service works properly and securely:
          </p>
          <div className="pl-6 space-y-2">
            <p><strong>1.</strong> Browser type and language preference</p>
            <p><strong>2.</strong> Pages you visit and when you visit them</p>
            <p><strong>3.</strong> IP addresses and basic device information</p>
          </div>
          <p className="mt-4">
            This helps us understand how people use Flaura, improve the service, and keep it secure.
          </p>

          <h4 className="text-lg font-bold mt-8">1.2 Habit and Journal Data</h4>
          <p>
            When you create quests, track habits, or write journal entries in Flaura, the following occurs:
          </p>
          <div className="pl-6 space-y-2">
            <p><strong>1.</strong> Your habit data, streaks, and journal entries are stored securely on our servers to enable access across multiple devices</p>
            <p><strong>2.</strong> All personal data is encrypted and accessible only to you</p>
            <p><strong>3.</strong> Your growth data is never shared with third parties for marketing purposes</p>
          </div>

          <h4 className="text-lg font-bold mt-8">1.3 AI Processing</h4>
          <p>
            Flaura utilizes artificial intelligence to provide personalized coaching, habit recommendations, and reflective insights. The processing occurs as follows:
          </p>
          <div className="pl-6 space-y-2">
            <p><strong>1.</strong> AI-powered features may be processed by third-party AI services</p>
            <p><strong>2.</strong> Only relevant context data is shared for processing (no IP addresses or unnecessary account information)</p>
            <p><strong>3.</strong> Third-party AI providers cannot store or use your data for model training or any other purposes beyond providing the requested service</p>
            <p><strong>4.</strong> All data transmissions are encrypted using industry-standard protocols</p>
          </div>

          <h4 className="text-lg font-bold mt-8">1.4 Your Account Information</h4>
          <p>
            To sync your data across devices and access premium features, you&apos;ll need an account. We only collect the essentials:
          </p>
          <div className="pl-6 space-y-2">
            <p><strong>1.</strong> Your name</p>
            <p><strong>2.</strong> Your email address</p>
          </div>
          <p className="mt-4">
            That&apos;s it. We use this information to identify you, sync your data, and communicate important updates.
          </p>

          <h3 className="text-xl font-bold mt-8">2. What We Don&apos;t Do With Your Data</h3>
          <div className="pl-6 space-y-2">
            <p><strong>1.</strong> We <strong>don&apos;t sell, rent, or share</strong> your personal data with advertisers or marketers</p>
            <p><strong>2.</strong> We <strong>don&apos;t use</strong> your journal entries or habit data to train AI models</p>
            <p><strong>3.</strong> We <strong>don&apos;t track</strong> you across other websites or apps</p>
          </div>

          <h3 className="text-xl font-bold mt-8">3. Cookies and Tracking</h3>
          <p>
            Flaura uses cookies on our website to:
          </p>
          <div className="pl-6 space-y-2">
            <p><strong>1.</strong> Keep you logged in between visits</p>
            <p><strong>2.</strong> Remember your preferences</p>
            <p><strong>3.</strong> Understand how people use our website so we can improve it</p>
          </div>
          <p className="mt-4">
            We don&apos;t track what you do on other websites, and we don&apos;t share your browsing data with anyone. You can disable cookies in your browser settings if you prefer, but some features might not work as well.
          </p>

          <h3 className="text-xl font-bold mt-8">4. Keeping Your Data Safe</h3>
          <p>
            Your data is stored using industry-standard encryption. Strict access controls ensure that only authorized personnel and systems can access data, and only when absolutely necessary for service operations.
          </p>

          <h3 className="text-xl font-bold mt-8">5. Your Rights and Deleting Data</h3>
          <p>
            Under applicable data protection legislation, you have rights concerning your personal data. You may at any time access, correct, or erase your Personal Data by contacting us.
          </p>
          <p className="mt-4">
            You can delete your Flaura account through the app&apos;s settings. Your email address and all associated data will be permanently deleted within 30 days of account deletion.
          </p>

          <h3 className="text-xl font-bold mt-8">6. Changes to This Privacy Policy</h3>
          <p>
            We will review and may update this Privacy Policy from time to time. Any changes will become effective when we post the revised Privacy Policy on this page. By continuing to use Flaura following such modifications, you agree to be bound by such modifications.
          </p>

          <h3 className="text-xl font-bold mt-8">7. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy or how we process your personal data, please contact us at{" "}
            <a href="mailto:support@flaura.ai" className="text-primary hover:underline">support@flaura.ai</a>.
          </p>

          <p className="mt-8">
            By using <strong>Flaura</strong>, you acknowledge that you have read and agreed to this Privacy Policy.
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
