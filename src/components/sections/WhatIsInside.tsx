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
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-14"
      >
        <motion.div
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto flex flex-col gap-5"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">
            Inside the book
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            What&apos;s Inside
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            {siteConfig.book.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.chapters.map((chapter) => (
            <motion.article
              key={chapter.number}
              variants={scaleIn}
              className="card card-hover p-7 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-primary tabular-nums tracking-widest">
                  {chapter.number}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground tracking-tight">
                {chapter.title}
              </h3>
              <p className="text-muted text-[0.95rem] leading-relaxed">
                {chapter.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
