"use client"

import { Send, MessageCircle } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { useState, type FormEvent } from "react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 px-4">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              {"Let's Build "}
              <span className="gradient-text">Something Amazing</span>
              {" Together"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Ready to start your project? Get in touch and let us bring your vision to life.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="glass rounded-2xl p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  {"We'll get back to you as soon as possible."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="px-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass text-foreground font-medium hover:bg-foreground/10 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </div>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
