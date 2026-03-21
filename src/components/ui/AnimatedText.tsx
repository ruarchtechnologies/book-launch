"use client";

import { motion, cubicBezier } from "framer-motion";

const smooth = cubicBezier(0.22, 1, 0.36, 1);
import { cn } from "@/lib/cn";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={cn("inline", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
      variants={{
        visible: { transition: { staggerChildren: 0.06, delayChildren: delay } },
        hidden: {},
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em] last:mr-0"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: smooth },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
