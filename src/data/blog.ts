export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "future-of-ai-consultancy",
    title: "The Future of AI Consultancy in 2026",
    slug: "future-of-ai-consultancy",
    excerpt: "How forward-thinking businesses are integrating AI to dramatically reduce costs and speed up delivery.",
    content: "Artificial Intelligence has moved beyond hype... [Content will be dynamically rendered].",
    date: "March 15, 2026",
    author: "Zainab Shah",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: "mobile-first-ecommerce",
    title: "Why Mobile-First E-Commerce is Mandatory",
    slug: "mobile-first-ecommerce",
    excerpt: "With mobile traffic dominating global intent, responsive e-commerce platforms are no longer optional.",
    content: "If your store is not optimized for mobile, you are losing sales... [Content will be dynamically rendered].",
    date: "February 28, 2026",
    author: "Omar Farooq",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: "digital-transformation-guide",
    title: "A Step-By-Step Guide to Digital Transformation",
    slug: "digital-transformation-guide",
    excerpt: "Transitioning a legacy business to the cloud can seem daunting. Here is our 5-step roadmap.",
    content: "Digital transformation is not just about technology, it's about people and processes... [Content].",
    date: "February 12, 2026",
    author: "Ahmad Khan",
    category: "Business Strategy",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: "importance-of-uat",
    title: "Don't Skip UAT: Why User Testing Matters",
    slug: "importance-of-uat",
    excerpt: "The last mile of software deployment is often the most critical. Understanding User Acceptance Testing.",
    content: "Bugs found in production cost 10x more to fix... [Content].",
    date: "January 20, 2026",
    author: "Usman Tariq",
    category: "Software Engineering",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: "erp-implementation-pitfalls",
    title: "5 Common ERP Implementation Pitfalls",
    slug: "erp-implementation-pitfalls",
    excerpt: "Learn how to avoid these expensive mistakes when integrating Enterprise Resource Planning systems.",
    content: "Implementing an ERP is a massive undertaking... [Content].",
    date: "January 05, 2026",
    author: "Sarah Ali",
    category: "Enterprise Solutions",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: "vocational-training-impact",
    title: "Bridging the Skill Gap with Vocational Training",
    slug: "vocational-training-impact",
    excerpt: "How targeted technical training programs are reshaping local economies in Pakistan.",
    content: "The rapidly changing tech landscape requires continuous learning... [Content].",
    date: "December 15, 2025",
    author: "Ahmad Khan",
    category: "Education",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: "seo-in-2026",
    title: "SEO Trends You Cannot Ignore in 2026",
    slug: "seo-in-2026",
    excerpt: "From voice search to AI-driven algorithms, search engine optimization continues to evolve.",
    content: "Staying ahead of search trends is vital for continuous organic traffic... [Content].",
    date: "November 22, 2025",
    author: "Fatima Noor",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1432888117426-1d5ac0c98f98?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: "lms-for-schools",
    title: "Adopting an LMS for Modern Schooling",
    slug: "lms-for-schools",
    excerpt: "How Learning Management Systems streamline grading, attendance, and remote learning.",
    content: "Education institutions are upgrading their infrastructure... [Content].",
    date: "November 05, 2025",
    author: "Sarah Ali",
    category: "EdTech",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800&h=500"
  }
];
