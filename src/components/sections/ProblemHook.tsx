"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/variants";

const statements = [
  {
    number: "01",
    text: "You have sat in class wondering why learning feels much smaller than your curiosity.",
  },
  {
    number: "02",
    text: "You've been told what to learn, what success looks like, and what path to follow — but deep down, you're still asking questions no one seems to answer.",
  },
  {
    number: "03",
    text: "You want to explore your interests, solve problems, create things, or make a difference, but you're not sure where to begin.",
  },
];

export function ProblemHook() {
  return (
    <SectionWrapper id="about-book">
      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto flex flex-col gap-12"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl lg:text-5xl font-bold text-foreground text-center"
        >
          If any of this sounds familiar…
        </motion.h2>

        {statements.map((s) => (
          <motion.div
            key={s.number}
            variants={fadeUp}
            className="flex gap-6 lg:gap-10 items-start"
          >
            <span className="text-5xl lg:text-6xl font-bold text-primary/20 shrink-0 font-mono leading-none pt-1">
              {s.number}
            </span>
            <p className="text-2xl lg:text-3xl text-foreground leading-relaxed">
              {s.text}
            </p>
          </motion.div>
        ))}

        <motion.p
          variants={fadeUp}
          className="text-xl text-muted text-center pt-4"
        >
          This book was written for you.
        </motion.p>
      </motion.div>
    </SectionWrapper>
  );
}
