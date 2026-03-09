import { Navbar } from "@/components/navbar"
import { AnimatedMeshGradient } from "@/components/animated-mesh-gradient"
import { Hero } from "@/components/hero"
import { ProblemSolution } from "@/components/problem-solution"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Testimonial } from "@/components/testimonial"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      <AnimatedMeshGradient />
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Testimonial />
      <CtaSection />
      <Footer />
    </main>
  )
}
