import { Code2, Palette, Zap } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Built with React, Next.js, and modern best practices.",
  },
  {
    icon: Palette,
    title: "Stunning Design",
    description: "Pixel-perfect UI that elevates your brand identity.",
  },
  {
    icon: Zap,
    title: "Peak Performance",
    description: "Lightning-fast load times and SEO-first approach.",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              We Are{" "}
              <span className="gradient-text">Nexora Digital</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed text-pretty">
              A web development agency specializing in modern technologies like React,
              Next.js, and WordPress. We focus on performance, design quality, and
              exceptional user experiences that help businesses grow and succeed online.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 100}>
              <div className="glass rounded-2xl p-8 text-center hover:bg-foreground/5 transition-all duration-300 group h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
