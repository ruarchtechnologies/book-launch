"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/variants";

const questions = [
  "Who am I?",
  "What do I care about?",
  "What problems do I want to solve?",
  "What kind of life am I trying to build?",
];

export function LetterFromAuthor() {
  return (
    <SectionWrapper id="letter" dark>
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-2xl mx-auto flex flex-col gap-8 text-center"
      >
        <motion.p variants={fadeUp} className="text-sm font-semibold text-primary uppercase tracking-wider">
          A Final Thought
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col gap-5 text-lg text-muted leading-relaxed italic">
          <p>
            Years ago, I thought the answers I was looking for lived somewhere far away.
          </p>
          <p>
            A different school. A different country. A different opportunity.
          </p>
          <p>
            Over time, I discovered that while places matter, the most important questions travel with us.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-3 py-6 px-8 rounded-2xl border border-border bg-surface-raised"
        >
          {questions.map((q) => (
            <p key={q} className="text-xl font-semibold text-foreground">
              {q}
            </p>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="text-lg text-muted leading-relaxed">
          <em>To The Stars</em> is an invitation to explore those questions for yourself.
          And perhaps, along the way, discover just how far learning can take you.
        </motion.p>
      </motion.div>
    </SectionWrapper>
  );
}
