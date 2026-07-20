"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/variants";
import { cn } from "@/lib/cn";

export function Testimonials() {
  const { testimonials } = siteConfig;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [paused, testimonials.length]);

  return (
    <SectionWrapper dark id="testimonials">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-12"
      >
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            What People Are Saying
          </h2>
        </motion.div>

        {/* Featured carousel */}
        <motion.div
          variants={fadeUp}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-surface-raised rounded-2xl p-8 lg:p-12 border border-border"
            >
              <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-sm text-muted">
                  {testimonials[activeIndex].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === activeIndex ? "bg-primary w-6" : "bg-border w-2"
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
