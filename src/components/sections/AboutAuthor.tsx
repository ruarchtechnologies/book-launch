"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Badge } from "@/components/ui/Badge";
import { StarMark } from "@/components/ui/StarMark";
import { siteConfig } from "@/config/site";
import { slideInLeft, fadeUp, staggerContainer } from "@/lib/variants";

export function AboutAuthor() {
  const { author } = siteConfig;

  return (
    <SectionWrapper id="about">
      {/* On desktop the photo floats left, so the bio wraps beside it and
          then continues full-width underneath. */}
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="flow-root max-w-5xl mx-auto"
      >
        <motion.div
          variants={slideInLeft}
          className="relative mb-10 lg:float-left lg:w-[44%] lg:mr-14 lg:mb-8"
        >
          <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl" />
          <Image
            src={author.photo}
            alt={author.name}
            width={1620}
            height={1264}
            quality={100}
            sizes="(min-width: 1024px) 500px, 100vw"
            className="relative rounded-[1.5rem] w-full h-auto border border-foreground/10 shadow-2xl shadow-black/40"
          />
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-3 mb-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">
            About the Author
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            {author.name}
          </h2>
          <p className="text-muted">{author.title}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {author.credentials.map((cred) => (
              <Badge key={cred}>{cred}</Badge>
            ))}
          </div>
        </motion.div>

        {author.bio.map((para, i) => (
          <motion.p
            key={i}
            variants={fadeUp}
            className={
              i === 0
                ? "mb-5 text-lg text-foreground/90 leading-relaxed"
                : "mb-5 text-muted leading-relaxed"
            }
          >
            {para}
          </motion.p>
        ))}

        <motion.aside
          variants={fadeUp}
          className="clear-both mt-10 rounded-[1.25rem] border border-primary/30 bg-primary/[0.07] backdrop-blur-md p-6 lg:p-8 flex gap-4 items-start"
        >
          <StarMark className="w-5 h-5 mt-1" />
          <p className="text-foreground text-lg font-medium leading-relaxed">
            {author.invitation}
          </p>
        </motion.aside>
      </motion.div>
    </SectionWrapper>
  );
}
