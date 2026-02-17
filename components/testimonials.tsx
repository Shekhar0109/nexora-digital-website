import { Star } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Nexora Digital transformed our online presence completely. The website they built is fast, beautiful, and has increased our conversions by 40%. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, FitPro Gym",
    content:
      "Working with Nexora was an amazing experience. They understood our vision from day one and delivered a website that perfectly represents our brand. Exceptional quality.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Owner, La Bella Restaurant",
    content:
      "Our new website has brought in so many new customers. The design is stunning and the booking system works flawlessly. Best investment we made this year.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              What Our{" "}
              <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              {"Don't just take our word for it. Here's what our clients have to say."}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={testimonial.name} delay={i * 100}>
              <div className="glass rounded-2xl p-8 h-full flex flex-col hover:bg-foreground/5 transition-all duration-300">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {`"${testimonial.content}"`}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
