"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Starfield() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yFar = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yNear = useTransform(scrollYProgress, [0, 1], [0, 260]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <motion.div style={{ y: yFar }} className="absolute inset-0 stars-layer-far" />
      <motion.div style={{ y: yMid }} className="absolute inset-0 stars-layer-mid" />
      <motion.div style={{ y: yNear }} className="absolute inset-0 stars-layer-near" />
    </div>
  );
}
