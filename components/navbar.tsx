"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-2xl ${
        scrolled
          ? "glass-strong shadow-lg shadow-primary/5 w-[calc(100%-2rem)] max-w-5xl"
          : "glass w-[calc(100%-2rem)] max-w-6xl"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <a href="#" className="text-lg font-bold tracking-tight">
          <span className="gradient-text">Nexora</span>
          <span className="text-foreground"> Digital</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-4 py-2.5 text-sm font-medium text-center rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  )
}
