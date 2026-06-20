"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { fadeUp, staggerContainer } from "@/lib/variants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-32 px-6 overflow-hidden">
<div className="max-w-[72rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight"
          >
            {siteConfig.book.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl text-muted leading-relaxed max-w-xl"
          >
            {siteConfig.book.subtitle}
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href={siteConfig.orderUrl}
              className="inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 px-8 py-4 text-lg"
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
            <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl" />
            <Image
              src={siteConfig.book.coverImage}
              alt={siteConfig.book.title}
              width={380}
              height={520}
              className="relative rounded-xl shadow-2xl shadow-primary/20"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
