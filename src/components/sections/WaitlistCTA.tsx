"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { EmailInput } from "@/components/ui/EmailInput";
import { siteConfig } from "@/config/site";
import { useEmailSubmit } from "@/hooks/useEmailSubmit";
import { fadeUp, staggerContainer } from "@/lib/variants";

export function WaitlistCTA() {
  const { submit, loading, success, error } = useEmailSubmit();

  return (
    <SectionWrapper id="waitlist" className="bg-gradient-to-br from-primary/10 via-background to-background">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-2xl mx-auto flex flex-col gap-8"
      >
        <motion.div variants={fadeUp} className="flex flex-col gap-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            Don&apos;t Miss Launch Day
          </h2>
          <p className="text-xl text-muted">{siteConfig.cta.incentive}</p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <EmailInput
            onSubmit={submit}
            loading={loading}
            success={success}
            error={error ?? undefined}
            placeholder="Your email address"
            buttonText={siteConfig.cta.secondary}
          />
        </motion.div>

        <motion.p variants={fadeUp} className="text-sm text-subtle">
          No spam. Unsubscribe anytime. Your email is safe with us.
        </motion.p>
      </motion.div>
    </SectionWrapper>
  );
}
