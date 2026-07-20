"use client";

import { motion, cubicBezier } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/variants";
import { Starfield } from "@/components/ui/Starfield";

const smooth = cubicBezier(0.22, 1, 0.36, 1);

const titleReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0.4 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 1.1, ease: smooth },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-32 px-6 overflow-hidden">
      <Starfield />

      <div className="relative z-10 max-w-[72rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.h1
            variants={titleReveal}
            className="font-display text-6xl lg:text-8xl text-foreground leading-[1.1]"
          >
            {siteConfig.book.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm text-muted uppercase tracking-[0.3em] -mt-2"
          >
            {siteConfig.author.name}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-xl text-muted leading-relaxed max-w-xl"
          >
            {siteConfig.book.subtitle}
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href={siteConfig.orderUrl}
              className="inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 bg-foreground hover:bg-foreground/90 text-ink shadow-lg shadow-black/30 px-8 py-4 text-lg"
            >
              {siteConfig.cta.hero}
            </a>
          </motion.div>
        </motion.div>

        {/* Book cover column */}
        <div className="flex items-center justify-center order-first lg:order-last">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-foreground/10 rounded-full blur-3xl" />
            <Image
              src={siteConfig.book.coverImage}
              alt={siteConfig.book.title}
              width={380}
              height={520}
              className="relative rounded-xl shadow-2xl shadow-black/40"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
