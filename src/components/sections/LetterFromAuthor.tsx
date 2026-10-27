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
            Over time, I discovered that while places matter, the most important questions dwell in us.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="card flex flex-col divide-y divide-foreground/10 px-8 py-2"
        >
          {questions.map((q) => (
            <p key={q} className="text-xl lg:text-2xl font-semibold text-foreground tracking-tight py-4">
              {q}
            </p>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="text-lg text-muted leading-relaxed">
          More profoundly, I realised that the questions were being asked on a weak foundation,
          in terms of, &ldquo;what am I building?&rdquo;, instead of, &ldquo;to what am I building?&rdquo;
        </motion.p>

        <motion.p variants={fadeUp} className="text-lg text-muted leading-relaxed">
          <em>To The Stars</em> is an invitation to explore those questions for yourself.
          And perhaps, along the way, discover just how far this question can take you.
        </motion.p>
      </motion.div>
    </SectionWrapper>
  );
}
