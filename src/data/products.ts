export interface Product {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  features: string[];
  benefits: string[];
  useCases: string[];
}

export const products: Product[] = [
  {
    id: "property-management-system",
    title: "Property Management System",
    slug: "property-management-system",
    shortDescription: "Complete software solution to manage real estate properties efficiently.",
    description: "Our comprehensive Property Management System simplifies operations for real estate professionals. Manage tenants, track maintenance requests, and automate rent collection from a single platform.",
    features: ["Tenant Portal", "Maintenance Tracking", "Online Rent Payments", "Financial Reporting"],
    benefits: ["Centralized Operations", "Time Savings", "Enhanced Tenant Experience"],
    useCases: ["Residential Complex Management", "Commercial Leasing Offices"]
  },
  {
    id: "campus-management-system",
    title: "Campus Management System",
    slug: "campus-management-system",
    shortDescription: "End-to-end administration software for schools and universities.",
    description: "Streamline your educational institution's administrative tasks with our CMS. It covers admissions, timetable scheduling, faculty management, and student performance tracking.",
    features: ["Student Enrollment", "Attendance Tracking", "Timetable Management", "Exam Grading"],
    benefits: ["Data Security", "Automated Processes", "Better Communication"],
    useCases: ["Universities", "K-12 Schools", "Colleges"]
  },
  {
    id: "learning-management-system",
    title: "Learning Management System",
    slug: "learning-management-system",
    shortDescription: "A fully-featured platform for delivering digital training and courses.",
    description: "Empower educators and corporate trainers to create, distribute, and manage educational courses. Our LMS supports interactive content, quizzes, and progress tracking.",
    features: ["Course Builder", "Quiz Engine", "Progress Tracking", "Certification Generation"],
    benefits: ["Scalable Training", "Engaging User Experience", "Measurable Outcomes"],
    useCases: ["Corporate Training Programs", "Online Course Creators"]
  },
  {
    id: "erp",
    title: "Enterprise Resource Planning",
    slug: "enterprise-resource-planning",
    shortDescription: "Unify your business operations under one roof.",
    description: "Our ERP solution integrates core business processes across finance, HR, manufacturing, and supply chain, providing real-time data visibility across the organization.",
    features: ["Financial Management", "HR and Payroll", "Supply Chain Control", "Inventory Management"],
    benefits: ["Improved Efficiency", "Data-Driven Decisions", "Reduced Overhead Costs"],
    useCases: ["Manufacturing Firms", "Large Scale Enterprises"]
  },
  {
    id: "omr",
    title: "Optical Mark Recognition",
    slug: "optical-mark-recognition",
    shortDescription: "Fast and reliable processing of multiple-choice forms and exams.",
    description: "Automate the assessment of standardized tests and surveys with our precise OMR software. Reduce manual grading time significantly while ensuring accuracy.",
    features: ["High-speed Scanning", "Custom Form Handling", "Immediate Reporting", "Data Export"],
    benefits: ["Error Reduction", "Rapid Results Processing", "Cost-effective Grading"],
    useCases: ["Educational Boards", "Market Research Firms"]
  },
  {
    id: "distribution-management-system",
    title: "Distribution Management System",
    slug: "distribution-management-system",
    shortDescription: "Optimize your outbound supply chain and delivery networks.",
    description: "Take control of your logistics with an integrated system designed to track inventory in transit, manage fleets, and ensure timely deliveries.",
    features: ["Route Optimization", "Live Tracking", "Inventory Synchronization", "Order Fulfillment"],
    benefits: ["On-time Deliveries", "Optimized Logistics Costs", "Improved Supply Chain Visibility"],
    useCases: ["FMCG Distributors", "Logistics Companies"]
  },
  {
    id: "hims",
    title: "Hospital Information Management System",
    slug: "hospital-information-management-system",
    shortDescription: "Comprehensive clinical and administrative hospital software.",
    description: "Enhance patient care and operational efficiency with our HIMS. From patient registration to complex billing and electronic health records management.",
    features: ["Electronic Health Records", "Appointment Scheduling", "Pharmacy Management", "Integrated Billing"],
    benefits: ["Improved Patient Care Quality", "Streamlined Hospital Operations", "Regulatory Compliance"],
    useCases: ["Hospitals", "Specialty Clinics", "Diagnostic Centers"]
  },
  {
    id: "ecommerce-product",
    title: "Ecommerce",
    slug: "ecommerce",
    shortDescription: "Robust platform to launch your multi-vendor or single-store operations.",
    description: "A secure, highly customizable ecommerce platform built to handle heavy traffic, complex product catalogs, and secure global payments.",
    features: ["Multi-vendor Support", "Secure Checkout", "Inventory Sync", "Analytics Dashboard"],
    benefits: ["Increased Output", "Broader Reach", "Secure Transactions"],
    useCases: ["Retail Brands", "B2B Wholesalers"]
  }
];
