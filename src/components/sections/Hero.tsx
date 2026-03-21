"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { EmailInput } from "@/components/ui/EmailInput";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, staggerContainer } from "@/lib/variants";
import { useEmailSubmit } from "@/hooks/useEmailSubmit";

export function Hero() {
  const { submit, loading, success, error } = useEmailSubmit();

  const launchDate = new Date(siteConfig.book.launchDate).toLocaleDateString(
    "en-US",
    { month: "long", year: "numeric" }
  );

  return (
    <section className="relative min-h-screen flex items-center bg-background py-32 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[72rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp}>
            <Badge>Coming {launchDate}</Badge>
          </motion.div>

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
            <EmailInput
              onSubmit={submit}
              loading={loading}
              success={success}
              error={error ?? undefined}
              placeholder="Enter your email"
              buttonText={siteConfig.cta.hero}
            />
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm text-subtle">
            <span className="text-foreground font-semibold">
              {siteConfig.stats[2].value}
              {siteConfig.stats[2].suffix}
            </span>{" "}
            people on the waitlist &middot; {siteConfig.cta.incentive}
          </motion.p>
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
