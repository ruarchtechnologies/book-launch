"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";
import { slideInLeft, slideInRight, fadeUp, staggerContainer } from "@/lib/variants";

export function AboutAuthor() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-primary/5 rounded-3xl" />
          <Image
            src={siteConfig.author.photo}
            alt={siteConfig.author.name}
            width={1620}
            height={1264}
            quality={100}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="relative rounded-2xl w-full h-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {siteConfig.author.credentials.map((cred) => (
              <Badge key={cred} variant="outline">
                {cred}
              </Badge>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              About the Author
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              {siteConfig.author.name}
            </h2>
            <p className="text-muted mt-2">{siteConfig.author.title}</p>
          </motion.div>

          {siteConfig.author.bio.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-muted leading-relaxed"
            >
              {para}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
