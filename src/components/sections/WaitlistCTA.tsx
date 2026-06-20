"use client";

import { motion } from "framer-motion";
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
        className="text-center max-w-2xl mx-auto flex flex-col gap-8"
      >
        <motion.div variants={fadeUp} className="flex flex-col gap-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-muted">
            Pick up your copy of To The Stars and start exploring what learning can really look like.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <a
            href={siteConfig.orderUrl}
            className="inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 px-8 py-4 text-lg"
          >
            {siteConfig.cta.secondary}
          </a>
        </motion.div>

        <motion.p variants={fadeUp} className="text-sm text-subtle">
          Available in paperback and e-book.
        </motion.p>
      </motion.div>
    </SectionWrapper>
  );
}
