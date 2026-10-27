"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/variants";

export function WaitlistCTA() {
  return (
    <SectionWrapper id="order">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="card relative overflow-hidden grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center p-8 md:p-12 lg:p-14"
      >
        {/* Warm glow behind the cover */}
        <div
          aria-hidden
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
        />

        <motion.div variants={fadeUp} className="relative justify-self-center">
          <Image
            src={siteConfig.book.coverImage}
            alt={siteConfig.book.title}
            width={200}
            height={308}
            className="rounded-lg shadow-2xl shadow-black/50 h-auto w-40 md:w-48 -rotate-3"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative flex flex-col gap-6 text-center md:text-left items-center md:items-start"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg lg:text-xl text-muted max-w-xl">
            Pick up your copy of To The Stars and start exploring what learning can really look like.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href={siteConfig.orderUrl}
              className="inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 bg-primary hover:bg-primary-light text-ink shadow-lg shadow-primary/25 px-8 py-4 text-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {siteConfig.cta.secondary}
            </a>
            <p className="text-sm text-subtle">Available in paperback and e-book.</p>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
