"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StarMark } from "@/components/ui/StarMark";
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

  const active = testimonials[activeIndex];

  return (
    <SectionWrapper dark id="testimonials">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-12"
      >
        <motion.div variants={fadeUp} className="text-center flex flex-col gap-3">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">
            Early praise
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            What People Are Saying
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="max-w-4xl mx-auto w-full"
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={activeIndex}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="card relative px-8 py-12 lg:px-16 lg:py-16 text-center flex flex-col items-center gap-8 overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute -top-6 left-6 font-display text-[10rem] leading-none text-primary/10 select-none"
              >
                &ldquo;
              </span>
              <blockquote className="relative text-2xl lg:text-3xl text-foreground leading-snug font-medium text-balance">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
              <figcaption className="flex flex-col items-center gap-3">
                <StarMark />
                <div>
                  <p className="font-semibold text-foreground">{active.name}</p>
                  <p className="text-sm text-subtle">{active.title}</p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {testimonials.length > 1 && (
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
          )}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
