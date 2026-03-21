import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProblemHook } from "@/components/sections/ProblemHook";
import { WhatIsInside } from "@/components/sections/WhatIsInside";
import { AboutAuthor } from "@/components/sections/AboutAuthor";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookStats } from "@/components/sections/BookStats";
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
      <Testimonials />
      {/* <BookStats /> */}
      <WaitlistCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
