"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StarMark } from "@/components/ui/StarMark";
import { fadeUp, staggerContainer } from "@/lib/variants";

const statements = [
  "You have sat in class wondering why learning feels much smaller than your curiosity.",
  "You've been told what to learn, what success looks like, and what path to follow — but deep down, you're still asking questions no one seems to answer.",
  "You want to explore your interests, solve problems, create things, or make a difference, but you're not sure where to begin.",
];

export function ProblemHook() {
  return (
    <SectionWrapper id="about-book">
      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto flex flex-col gap-10"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl lg:text-5xl font-bold text-foreground text-center text-balance tracking-tight"
        >
          Do any of these sound familiar…
        </motion.h2>

        <ul className="flex flex-col divide-y divide-foreground/10 border-y border-foreground/10">
          {statements.map((text) => (
            <motion.li
              key={text}
              variants={fadeUp}
              className="flex gap-5 lg:gap-7 items-start py-7"
            >
              <StarMark className="w-5 h-5 mt-2" />
              <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed">
                {text}
              </p>
            </motion.li>
          ))}
        </ul>

        <motion.p
          variants={fadeUp}
          className="font-display text-3xl lg:text-4xl text-primary text-center"
        >
          This book was written for you.
        </motion.p>
      </motion.div>
    </SectionWrapper>
  );
}
