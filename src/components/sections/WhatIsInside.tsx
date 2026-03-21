"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/variants";

export function WhatIsInside() {
  return (
    <SectionWrapper dark id="chapters">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-16"
      >
        <motion.div
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto flex flex-col gap-4"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            What&apos;s Inside
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            {siteConfig.book.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.chapters.map((chapter) => (
            <motion.div
              key={chapter.number}
              variants={scaleIn}
              className="bg-surface-raised rounded-2xl p-6 border border-border hover:border-primary/40 transition-colors duration-300 flex flex-col gap-3"
            >
              <span className="text-4xl font-bold text-primary/30 font-mono leading-none">
                {chapter.number}
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                {chapter.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {chapter.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
