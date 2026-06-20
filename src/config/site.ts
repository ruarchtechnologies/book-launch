// ─── Change book content HERE. Nothing else needs to touch. ───────────────────

export const siteConfig = {
  book: {
    title: "To The Stars",
    subtitle:
      "A letter from one young person to another about courage, learning, service, faith, and the pursuit of a meaningful life.",
    description:
      "To The Stars is a collection of stories, conversations, reflections, and lessons from young people who chose to learn beyond what was expected of them. It is for students who want to understand themselves better, think more deeply about education, and discover what becomes possible when learning extends beyond the school gate.",
    coverImage: "/images/book-cover.png",
    launchDate: "2025-09-01",
  },

  orderUrl: "#", // ← Replace with actual purchase link (Amazon, Selar, publisher site, etc.)

  author: {
    name: "Author Full Name", // ← To be updated
    title: "Author & Educator", // ← To be updated
    bio: [
      "First paragraph about the author — their background, achievements, and why they are uniquely positioned to write this book.", // ← To be updated
      "Second paragraph — what drove them to write it, and the transformation it created in their own life.", // ← To be updated
    ],
    photo: "/images/author.jpg",
    credentials: ["Educator", "Speaker", "Youth Advocate"], // ← To be updated
    social: {
      twitter: "",
      instagram: "",
      linkedin: "",
    },
  },

  contributors: [
    {
      name: "Contributor Name", // ← To be updated
      role: "What they do — one line",
      photo: "/images/contributors/contributor-1.jpg",
      quote: "What this person feels about the book and why it matters to them.",
    },
    {
      name: "Contributor Name", // ← To be updated
      role: "What they do — one line",
      photo: "/images/contributors/contributor-2.jpg",
      quote: "What this person feels about the book and why it matters to them.",
    },
    {
      name: "Contributor Name", // ← To be updated
      role: "What they do — one line",
      photo: "/images/contributors/contributor-3.jpg",
      quote: "What this person feels about the book and why it matters to them.",
    },
  ],

  chapters: [
    {
      number: "01",
      title: "Courage",
      description:
        "What happens when you dare to want something different? Meet young people who challenged assumptions, pursued opportunities no one around them was talking about, and learned how to move forward even when they didn't have everything figured out. Not because they were fearless — but because they had a conviction and were willing to begin.",
    },
    {
      number: "02",
      title: "Learning",
      description:
        "Is education the same thing as learning? This section explores a question that changed everything. You'll encounter stories of curiosity, self-directed learning, and discovery — and perhaps begin to rethink what it means to be educated in the first place.",
    },
    {
      number: "03",
      title: "Service",
      description:
        "What is the purpose of what we learn? Through the stories of young changemakers, you'll discover how learning can become a tool for solving problems, serving others, and contributing to something larger than yourself.",
    },
    {
      number: "04",
      title: "Reflection",
      description:
        "While some books tell you what to think, this one invites you to think for yourself. Throughout the journey, you'll encounter questions designed to help you examine your own experiences, ambitions, frustrations, and possibilities.",
    },
    {
      number: "05",
      title: "The Bigger Picture",
      description:
        "Many students believe extraordinary opportunities belong to people in extraordinary places. This book explores a different possibility: that meaningful learning can begin wherever you are, with whatever you have, if you are willing to engage with the world around you.",
    },
    {
      number: "06",
      title: "Your Turn",
      description:
        "The goal of this book is not to make you admire the people in its pages. Rather, it is to help you recognise what is already possible in your own life — not someday, not when you have more resources, but now, right where you are.",
    },
  ],

  testimonials: [
    {
      name: "Jane Doe",
      title: "Educator & Mentor",
      photo: "/images/testimonials/jane.jpg",
      quote:
        "This book fundamentally changed how I approach my work with young people. Every chapter contains wisdom delivered with clarity and compassion.",
      type: "endorser" as const,
    },
    {
      name: "John Smith",
      title: "School Principal",
      photo: "/images/testimonials/john.jpg",
      quote:
        "I've recommended many books to students over the years. This is the one I'll recommend twice — and give to every student I care about.",
      type: "endorser" as const,
    },
    {
      name: "Sarah Lee",
      title: "Youth Programme Director",
      photo: "/images/testimonials/sarah.jpg",
      quote:
        "The stories in this book are now a core part of how we inspire young people. The results have been extraordinary.",
      type: "industry" as const,
    },
  ],

  faq: [
    {
      question: "Who is this book for?",
      answer:
        "To The Stars is written for secondary school students — particularly those who feel curious about learning beyond the classroom, who are searching for direction, or who want to understand how to make the most of their educational experience.",
    },
    {
      question: "What makes this book different from other student guides?",
      answer:
        "It is not a textbook or a how-to manual. It is a collection of real stories, conversations, and reflections from young people who chose to engage more deeply with their education. It is written by a young person, for young people.",
    },
    {
      question: "What topics does the book cover?",
      answer:
        "The book is organised around six themes: Courage, Learning, Service, Reflection, The Bigger Picture, and Your Turn. Together, they explore what it means to be a curious, purposeful, and engaged student.",
    },
    {
      question: "What formats is the book available in?",
      answer:
        "The book is available in paperback and e-book formats. Check the order page for the latest availability in your region.",
    },
    {
      question: "Can this book be used in schools or youth programmes?",
      answer:
        "Absolutely. The book's themes and reflection questions make it well suited for use in classrooms, reading groups, and youth development programmes. Get in touch if you are interested in bulk orders.",
    },
  ],

  cta: {
    hero: "Order a Copy",
    secondary: "Get Your Copy",
  },

  meta: {
    title: "To The Stars — A Guide for Secondary School Students",
    description:
      "A letter from one young person to another about courage, learning, service, faith, and the pursuit of a meaningful life.",
    url: "https://yourdomain.com",
    ogImage: "/images/og.jpg",
  },
};
