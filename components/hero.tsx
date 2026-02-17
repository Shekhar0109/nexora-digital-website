"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Animated gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-40 left-1/3 w-72 h-72 rounded-full bg-primary/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Modern Web Solutions for Growing Brands</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-balance">
            We Build Modern{" "}
            <span className="gradient-text">Websites That Convert</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Professional, fast, and responsive websites for startups and businesses.
            Crafted with cutting-edge technologies to drive results.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass text-foreground font-medium hover:bg-foreground/10 transition-all"
            >
              Get a Free Quote
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
