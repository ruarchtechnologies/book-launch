"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/variants";

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

export function Contributors() {
  return (
    <SectionWrapper id="contributors">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-12"
      >
        <motion.div variants={fadeUp} className="flex flex-col gap-3 max-w-2xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">
            Contributors
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            The People Behind the Pages
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {siteConfig.contributors.map((c) => (
            <motion.figure
              key={c.name}
              variants={scaleIn}
              className="card card-hover p-7 lg:p-8 flex flex-col gap-6"
            >
              <span
                aria-hidden
                className="font-display text-5xl leading-none text-primary/60 h-6"
              >
                &ldquo;
              </span>
              <blockquote className="flex-1 text-foreground/85 leading-relaxed">
                {c.quote}
              </blockquote>

              <figcaption className="flex items-center gap-4 pt-5 border-t border-foreground/10">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-gradient-to-br from-primary-light to-primary-dark text-ink text-sm font-bold shrink-0">
                  {initials(c.name)}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground leading-snug">
                    {c.name}
                  </p>
                  <p className="text-sm text-subtle leading-snug mt-0.5">
                    {c.role}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
