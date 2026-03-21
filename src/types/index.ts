export type TestimonialType = "endorser" | "early-reader" | "industry";

export interface Testimonial {
  name: string;
  title: string;
  photo: string;
  quote: string;
  type: TestimonialType;
}

export interface Chapter {
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  suffix: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
