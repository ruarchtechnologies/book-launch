"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/variants";

export function Contributors() {
  return (
    <SectionWrapper id="contributors">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-col gap-12"
      >
        <motion.div variants={fadeUp} className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            Contributors
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            The People Behind the Pages
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.contributors.map((c) => (
            <motion.div
              key={c.name}
              variants={scaleIn}
              className="bg-surface-raised rounded-2xl border border-border flex flex-col overflow-hidden"
            >
              {/* Profile */}
              <div className="p-6">
                <p className="font-semibold text-foreground text-lg leading-snug">
                  {c.name}
                </p>
                <p className="text-sm text-muted mt-0.5">{c.role}</p>
              </div>

              {/* Divider */}
              <div className="h-px bg-border mx-6" />

              {/* Quote */}
              <div className="p-6 flex-1">
                <blockquote className="text-muted leading-relaxed italic text-sm">
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
