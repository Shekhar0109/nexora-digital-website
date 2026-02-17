import {
  Timer,
  Code,
  DollarSign,
  Search,
  Smartphone,
  Headphones,
} from "lucide-react"
import { AnimatedSection } from "./animated-section"

const reasons = [
  { icon: Timer, title: "Fast Delivery", description: "We deliver projects on time, every time." },
  { icon: Code, title: "Clean Code", description: "Maintainable, scalable code built to last." },
  { icon: DollarSign, title: "Affordable Pricing", description: "Premium quality without the premium price." },
  { icon: Search, title: "SEO Optimized", description: "Built for search engines from day one." },
  { icon: Smartphone, title: "Fully Responsive", description: "Flawless experience on every device." },
  { icon: Headphones, title: "Client Support", description: "Dedicated support throughout and beyond." },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 px-4">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              Why Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Why Choose{" "}
              <span className="gradient-text">Nexora Digital</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              We combine technical excellence with creative design to deliver outstanding results.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 80}>
              <div className="glass rounded-2xl p-7 flex items-start gap-5 hover:bg-foreground/5 transition-all duration-300 group h-full">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <reason.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
