"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { siteConfig } from "@/config/site";
import { staggerContainer, fadeUp } from "@/lib/variants";

function CountUp({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseFloat(value.replace(/,/g, ""));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, numericValue, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return motionValue.on("change", (latest) => {
      if (!ref.current) return;
      const formatted =
        numericValue > 100
          ? Math.round(latest).toLocaleString()
          : String(Math.round(latest * 10) / 10);
      ref.current.textContent = formatted;
    });
  }, [motionValue, numericValue]);

  return (
    <span>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export function BookStats() {
  return (
    <section className="bg-surface border-y border-border py-20 px-6">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-[72rem] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {siteConfig.stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="text-center flex flex-col gap-2"
          >
            <p className="text-4xl lg:text-6xl font-bold text-primary">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-muted text-sm font-medium uppercase tracking-wider">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
