"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const projects = [
  {
    title: "Restaurant Website",
    category: "Food & Dining",
    image: "/images/portfolio-restaurant.jpg",
  },
  {
    title: "Gym Website",
    category: "Health & Fitness",
    image: "/images/portfolio-gym.jpg",
  },
  {
    title: "Startup Landing Page",
    category: "Technology",
    image: "/images/portfolio-startup.jpg",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              Our Work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              A selection of our recent work that showcases our design and development expertise.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 100}>
              <div className="group relative rounded-2xl overflow-hidden glass">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                    <ExternalLink className="w-8 h-8 text-primary" />
                    <span className="text-sm font-medium text-foreground">View Project</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium text-primary tracking-wider uppercase mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
