// ─── Change book content HERE. Nothing else needs to touch. ───────────────────

export const siteConfig = {
  book: {
    title: "The Book Title",
    subtitle: "A transformational one-line promise to the reader.",
    description:
      "Two sentences on what the book delivers and who it is for. This is a complete guide to everything you need to know.",
    coverImage: "/images/book-cover.png",
    launchDate: "2025-09-01",
    format: ["Hardcover", "Paperback", "E-Book", "Audiobook"],
  },

  author: {
    name: "Author Full Name",
    title: "Speaker, Entrepreneur & Founder of XYZ",
    bio: [
      "First paragraph about the author — their background, achievements, and why they are uniquely positioned to write this book.",
      "Second paragraph — what drove them to write it, and the transformation it created in their own life.",
    ],
    photo: "/images/author.jpg",
    credentials: ["Forbes", "TechCrunch", "Harvard Business Review"],
    social: {
      twitter: "https://twitter.com/handle",
      instagram: "https://instagram.com/handle",
      linkedin: "https://linkedin.com/in/handle",
    },
  },

  chapters: [
    {
      number: "01",
      title: "The Foundation",
      description:
        "Lay the groundwork for everything that follows. Build the mental model that makes the rest click.",
    },
    {
      number: "02",
      title: "The Shift",
      description:
        "Identify the single belief holding you back, and dismantle it with a framework used by world-class performers.",
    },
    {
      number: "03",
      title: "The Method",
      description:
        "A step-by-step system for applying what you've learned — starting today, not someday.",
    },
    {
      number: "04",
      title: "The Practice",
      description:
        "Turn insight into habit. Build the daily rituals that compound into extraordinary results.",
    },
    {
      number: "05",
      title: "The Community",
      description:
        "Why going alone is the slowest route, and how to find — or build — the right circle.",
    },
    {
      number: "06",
      title: "The Long Game",
      description:
        "How to stay the course when motivation fades and the world pushes back.",
    },
  ],

  stats: [
    { value: "3", suffix: " Years", label: "In the Making" },
    { value: "47", suffix: "+", label: "Interviews Conducted" },
    { value: "8000", suffix: "+", label: "Waitlist Members" },
    { value: "12", suffix: "", label: "Countries Researched" },
  ],

  testimonials: [
    {
      name: "Jane Doe",
      title: "CEO, Some Company",
      photo: "/images/testimonials/jane.jpg",
      quote:
        "This book fundamentally changed how I approach my work and my relationships. Every chapter contains a decade of hard-won wisdom, delivered with clarity and compassion.",
      type: "endorser" as const,
    },
    {
      name: "John Smith",
      title: "Founder, Another Company",
      photo: "/images/testimonials/john.jpg",
      quote:
        "I've read hundreds of books in this space. This is the one I'll read twice — and give to everyone I care about.",
      type: "endorser" as const,
    },
    {
      name: "Sarah Lee",
      title: "Executive Coach",
      photo: "/images/testimonials/sarah.jpg",
      quote:
        "The frameworks in this book are now a core part of my coaching practice. My clients are getting results they didn't think were possible.",
      type: "industry" as const,
    },
  ],

  faq: [
    {
      question: "When does the book launch?",
      answer:
        "The official launch date is September 1, 2025. Waitlist members will receive early access and a special discount before the public launch.",
    },
    {
      question: "What formats will the book be available in?",
      answer:
        "The book will be available in hardcover, paperback, e-book, and audiobook formats. All formats will be available on launch day.",
    },
    {
      question: "What do I get for joining the waitlist?",
      answer:
        "Waitlist members get the first chapter completely free, plus a 30% discount off the cover price — applied automatically on launch day.",
    },
    {
      question: "Who is this book for?",
      answer:
        "This book is for anyone who feels like they're capable of more but isn't sure how to unlock it. Whether you're early in your career or a seasoned professional, the frameworks inside are immediately applicable.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes. If you're not completely satisfied within 30 days of purchase, we'll refund you in full. No questions asked.",
    },
  ],

  cta: {
    hero: "Get Early Access",
    secondary: "Join the Waitlist — It's Free",
    incentive:
      "Waitlist members get the first chapter free + 30% off on launch day.",
  },

  meta: {
    title: "The Book Title — By Author Full Name",
    description: "The book that changes how you think about X.",
    url: "https://yourdomain.com",
    ogImage: "/images/og.jpg",
  },
};
