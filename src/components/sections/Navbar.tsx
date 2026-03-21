"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
          <button
            onClick={() => scrollTo("about")}
            className="text-muted hover:text-foreground transition-colors text-sm"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("chapters")}
            className="text-muted hover:text-foreground transition-colors text-sm"
          >
            Chapters
          </button>
          <button
            onClick={() => scrollTo("testimonials")}
            className="text-muted hover:text-foreground transition-colors text-sm"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollTo("faq")}
            className="text-muted hover:text-foreground transition-colors text-sm"
          >
            FAQ
          </button>
          <Button size="sm" onClick={() => scrollTo("waitlist")}>
            {siteConfig.cta.hero}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4"
        >
          {[
            { label: "About", id: "about" },
            { label: "Chapters", id: "chapters" },
            { label: "Reviews", id: "testimonials" },
            { label: "FAQ", id: "faq" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-muted hover:text-foreground transition-colors text-left"
            >
              {label}
            </button>
          ))}
          <Button size="sm" className="self-start" onClick={() => scrollTo("waitlist")}>
            {siteConfig.cta.hero}
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
