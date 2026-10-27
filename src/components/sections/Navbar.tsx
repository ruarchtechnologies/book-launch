"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "About the Book", id: "about-book" },
    { label: "The Author", id: "about" },
    { label: "Chapters", id: "chapters" },
    { label: "Reviews", id: "testimonials" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-xl shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[72rem] mx-auto flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-foreground font-bold text-xl hover:text-primary transition-colors"
        >
          {siteConfig.book.title}
        </button>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-muted hover:text-foreground transition-colors text-sm"
            >
              {label}
            </button>
          ))}
          <a
            href={siteConfig.orderUrl}
            className="inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 bg-primary hover:bg-primary-light text-ink shadow-lg shadow-primary/20 px-4 py-2 text-sm"
          >
            {siteConfig.cta.hero}
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4"
        >
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-muted hover:text-foreground transition-colors text-left"
            >
              {label}
            </button>
          ))}
          <a
            href={siteConfig.orderUrl}
            className="self-start inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 bg-primary hover:bg-primary-light text-ink shadow-lg shadow-primary/20 px-4 py-2 text-sm"
          >
            {siteConfig.cta.hero}
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
