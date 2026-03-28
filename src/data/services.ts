export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  benefits: string[];
  process: string[];
}

export const services: Service[] = [
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    slug: "digital-transformation",
    shortDescription: "Modernize your business processes and customer experiences with cutting-edge digital solutions.",
    description: "We help organizations leverage technology to radically improve their performance or reach. Our digital transformation strategies align with your business goals to ensure long-term success.",
    icon: "laptop",
    benefits: ["Increased efficiency", "Better customer experience", "Data-driven insights"],
    process: ["Assessment", "Strategy", "Implementation", "Optimization"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    slug: "digital-marketing",
    shortDescription: "Boost your online presence and reach your target audience effectively.",
    description: "Our comprehensive digital marketing campaigns are designed to engage your audience, build brand loyalty, and drive conversions.",
    icon: "megaphone",
    benefits: ["Targeted reach", "Measurable ROI", "Enhanced brand visibility"],
    process: ["Market Research", "Campaign Planning", "Execution", "Analytics"]
  },
  {
    id: "ai-consultancy",
    title: "AI Consultancy",
    slug: "ai-consultancy",
    shortDescription: "Harness the power of Artificial Intelligence to automate and innovate.",
    description: "Unlock new possibilities with customized AI solutions tailored to solve your most complex business challenges.",
    icon: "brain",
    benefits: ["Process automation", "Predictive analytics", "Cost reduction"],
    process: ["Discovery", "Model Development", "Integration", "Monitoring"]
  },
  {
    id: "vocational-training",
    title: "Vocational and Technical Training",
    slug: "vocational-and-technical-training",
    shortDescription: "Empower your workforce with specialized technical skills.",
    description: "We provide comprehensive training programs designed to bridge the skills gap and prepare individuals for the modern workplace.",
    icon: "graduation-cap",
    benefits: ["Skill enhancement", "Career progression", "Industry readiness"],
    process: ["Curriculum Design", "Training Sessions", "Assessment", "Certification"]
  },
  {
    id: "business-consultancy",
    title: "End To End Business Consultancy",
    slug: "end-to-end-business-consultancy",
    shortDescription: "Comprehensive consulting services to streamline your operations.",
    description: "From initial concept to final execution, we guide businesses through every step of their growth journey.",
    icon: "briefcase",
    benefits: ["Strategic alignment", "Operational efficiency", "Risk management"],
    process: ["Analysis", "Strategic Planning", "Execution", "Review"]
  },
  {
    id: "web-development",
    title: "Web Development",
    slug: "web-development",
    shortDescription: "Build scalable, secure, and high-performance web applications.",
    description: "Our expert developers create stunning and functional websites that provide exceptional user experiences.",
    icon: "code",
    benefits: ["Custom solutions", "Scalability", "Security"],
    process: ["Requirement Gathering", "Design", "Development", "Deployment"]
  },
  {
    id: "mobile-development",
    title: "Mobile Apps Development",
    slug: "mobile-apps-development",
    shortDescription: "Create intuitive and engaging iOS and Android applications.",
    description: "We build native and cross-platform mobile apps that put your business right in your customers' hands.",
    icon: "smartphone",
    benefits: ["Wider reach", "Customer engagement", "Brand loyalty"],
    process: ["UI/UX Design", "App Development", "Testing", "Launch"]
  },
  {
    id: "content-creation",
    title: "Content Writing and Creation",
    slug: "content-writing-and-creation",
    shortDescription: "Engaging and SEO-optimized content that tells your brand story.",
    description: "Our creative team produces compelling content that resonates with your audience and drives organic traffic.",
    icon: "pen-tool",
    benefits: ["Brand authority", "SEO ranking", "Audience engagement"],
    process: ["Ideation", "Drafting", "Editing", "Publishing"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Designing",
    slug: "ui-ux-designing",
    shortDescription: "User-centric design solutions for digital products.",
    description: "We craft beautiful and intuitive user interfaces that enhance user satisfaction and drive business results.",
    icon: "layers",
    benefits: ["Usability", "Brand consistency", "Higher conversion rates"],
    process: ["User Research", "Wireframing", "Prototyping", "Testing"]
  },
  {
    id: "uat",
    title: "User Acceptance Testing (UAT)",
    slug: "user-acceptance-testing",
    shortDescription: "Ensure your software meets business requirements before launch.",
    description: "Thorough testing processes to guarantee that your software functions precisely as intended in real-world scenarios.",
    icon: "check-circle",
    benefits: ["Quality assurance", "Reduced bugs", "User satisfaction"],
    process: ["Test Planning", "Test Case Execution", "Defect Reporting", "Sign-off"]
  },
  {
    id: "system-integration",
    title: "System Integration",
    slug: "system-integration",
    shortDescription: "Seamlessly connect your digital landscape.",
    description: "We integrate disparate systems to ensure smooth data flow and synchronized operations across your enterprise.",
    icon: "zap",
    benefits: ["Data consistency", "Operational synchronization", "Reduced manual entry"],
    process: ["Architecture Review", "API Integration", "Testing", "Deployment"]
  },
  {
    id: "data-migration",
    title: "Data Migration",
    slug: "data-migration",
    shortDescription: "Securely move your data to modern platforms.",
    description: "Expert data migration services ensuring zero data loss and minimal downtime during transitions.",
    icon: "database",
    benefits: ["Data integrity", "Minimal disruption", "Secure transfer"],
    process: ["Data Auditing", "Mapping", "Execution", "Validation"]
  },
  {
    id: "ebook-translation",
    title: "E-Book Translation",
    slug: "e-book-translation",
    shortDescription: "Professional translation services for your digital publications.",
    description: "Expand your global reach by making your e-books available in multiple languages with culturally accurate translations.",
    icon: "book-open",
    benefits: ["Global audience", "Cultural relevance", "Increased sales"],
    process: ["Translation", "Proofreading", "Formatting", "Delivery"]
  },
  {
    id: "e-commerce-service",
    title: "E-Commerce",
    slug: "e-commerce",
    shortDescription: "Start and scale your online retail business.",
    description: "Comprehensive e-commerce solutions from platform setup to payment gateway integration and inventory management.",
    icon: "shopping-cart",
    benefits: ["Online sales channel", "Global reach", "Automated processes"],
    process: ["Platform Selection", "Store Setup", "Integration", "Launch"]
  }
];
