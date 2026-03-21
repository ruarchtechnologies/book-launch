"use client";

import { useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";

const smooth = cubicBezier(0.22, 1, 0.36, 1);
import { ChevronDown } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/variants";
import { cn } from "@/lib/cn";
import type { FAQItem } from "@/types";

function FAQRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "shrink-0 text-muted transition-transform duration-300",
            isOpen && "rotate-180"
          )}
          size={20}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: smooth }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto flex flex-col gap-12"
      >
        <motion.div variants={fadeUp} className="text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-2xl border border-border bg-surface overflow-hidden divide-y divide-border px-8"
        >
          {siteConfig.faq.map((item, i) => (
            <FAQRow
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
