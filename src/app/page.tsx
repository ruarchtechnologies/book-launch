import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProblemHook } from "@/components/sections/ProblemHook";
import { WhatIsInside } from "@/components/sections/WhatIsInside";
import { AboutAuthor } from "@/components/sections/AboutAuthor";
import { Contributors } from "@/components/sections/Contributors";
import { LetterFromAuthor } from "@/components/sections/LetterFromAuthor";
import { Testimonials } from "@/components/sections/Testimonials";
import { WaitlistCTA } from "@/components/sections/WaitlistCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemHook />
      <WhatIsInside />
      <AboutAuthor />
      <Contributors />
      <LetterFromAuthor />
      <Testimonials />
      <WaitlistCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
