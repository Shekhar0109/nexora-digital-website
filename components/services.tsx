import {
  Globe,
  User,
  ShoppingCart,
  Rocket,
  RefreshCcw,
  Wrench,
} from "lucide-react"
import { AnimatedSection } from "./animated-section"

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional websites that establish your online presence and build credibility with your audience.",
  },
  {
    icon: User,
    title: "Portfolio Websites",
    description: "Showcase your work beautifully with custom-designed portfolios that leave a lasting impression.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description: "Feature-rich online stores optimized for conversions with seamless checkout experiences.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive meaningful business results.",
  },
  {
    icon: RefreshCcw,
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, high-performing digital experience.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Ongoing support and updates to keep your website secure, fast, and running smoothly.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-4">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              Our Services
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              What We{" "}
              <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              End-to-end web development services tailored to your business needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 80}>
              <div className="glass rounded-2xl p-8 hover:bg-foreground/5 transition-all duration-300 group h-full relative overflow-hidden">
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-[60px]" />
                </div>

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
