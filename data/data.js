/**
 * Central Data File (Single Source of Truth)
 * Used across all components:
 * Navbar, Hero, About, Programs, Features, Testimonials, CTA, Footer
 */

/* ================= NAVBAR ================= */
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#footer" },
];

/* ================= HERO ================= */
export const heroContent = {
  badge: "Admissions Open For 2026",
  title: "Empowering",
  highlight: "Future Leaders",
  subtitle: "Through Modern Education",
  description:
    "Experience world-class education, industry-focused programs, innovative learning environments, and career opportunities designed to shape tomorrow’s leaders.",
  primaryBtn: "Explore Programs",
  secondaryBtn: "Watch Campus Tour",
  image: "/images/hero.png",
};

export const heroStats = [
  { icon: "Users", value: "15K+", label: "Active Students" },
  { icon: "GraduationCap", value: "120+", label: "Expert Faculty" },
  { icon: "Award", value: "98%", label: "Placement Rate" },
];

export const heroFloatingCards = [
  {
    type: "text",
    title: "#1 Ranked",
    desc: "Modern Learning Campus",
    position: "left",
  },
  {
    type: "stat",
    icon: "GraduationCap",
    value: "50K+",
    desc: "Successful Alumni",
    position: "right",
  },
];

/* ================= ABOUT ================= */
export const aboutContent = {
  badge: "About Our University",
  title: "Building Future Leaders With",
  highlight: "Innovation & Knowledge",
  description:
    "We deliver world-class education combining academic excellence with practical experience to prepare students for global success.",
  image: "/images/about.jpg",
  floatingYears: "25+",
  floatingLabel: "Years of Excellence",
};

export const aboutFeatures = [
  "Industry-focused curriculum",
  "Experienced faculty members",
  "Modern smart classrooms",
  "Strong placement support",
];

export const aboutStats = [
  { icon: "Users", value: "50K+", label: "Students Enrolled" },
  { icon: "BookOpen", value: "200+", label: "Courses Available" },
];

/* ================= PROGRAMS ================= */
export const programs = [
  {
    icon: "Code",
    title: "BCA (Computer Applications)",
    desc: "Learn programming, web development, databases and software engineering fundamentals.",
  },
  {
    icon: "Laptop",
    title: "B.Tech",
    desc: "Engineering-focused program with strong technical and industry exposure.",
  },
  {
    icon: "Briefcase",
    title: "MBA",
    desc: "Develop leadership, business strategy and management skills.",
  },
  {
    icon: "Database",
    title: "Data Science",
    desc: "Learn data analysis, machine learning and AI-based systems.",
  },
  {
    icon: "Brain",
    title: "AI & Machine Learning",
    desc: "Build intelligent systems using modern AI technologies.",
  },
  {
    icon: "Palette",
    title: "Design & UI/UX",
    desc: "Create modern user interfaces and improve user experience design.",
  },
];

/* ================= FEATURES ================= */
export const features = [
  {
    icon: "Trophy",
    title: "Top Ranked Institution",
    desc: "Recognized for academic excellence and outstanding results.",
  },
  {
    icon: "Lightbulb",
    title: "Innovative Learning",
    desc: "Modern teaching methods with real-world project exposure.",
  },
  {
    icon: "BookOpen",
    title: "Updated Curriculum",
    desc: "Industry-aligned syllabus designed for future skills.",
  },
  {
    icon: "Users",
    title: "Expert Faculty",
    desc: "Highly experienced teachers and industry professionals.",
  },
  {
    icon: "Monitor",
    title: "Smart Classrooms",
    desc: "Digital learning environment with advanced technology.",
  },
  {
    icon: "Rocket",
    title: "Career Growth",
    desc: "Strong placement support and career development programs.",
  },
];

/* ================= TESTIMONIALS ================= */
export const testimonials = [
  {
    name: "Rahul Sharma",
    role: "BCA Student",
    review:
      "Amazing faculty and modern teaching methods. The campus environment is very supportive.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "MBA Student",
    review:
      "Great placement support and industry exposure helped me grow my career.",
    rating: 5,
  },
  {
    name: "Amit Yadav",
    role: "B.Tech Student",
    review:
      "Smart classrooms and practical learning made my experience industry-ready.",
    rating: 4,
  },
];

/* ================= CTA ================= */
export const ctaContent = {
  title: "Ready To Shape Your",
  highlight: "Future?",
  description:
    "Join our university and start your journey towards a successful career. Learn from experts, gain real-world skills, and build your future with confidence.",
  primaryButton: "Apply Now",
  secondaryButton: "Contact Us",
  note: "Admissions open for 2026 batch • Limited seats available",
};

/* ================= FOOTER ================= */
export const footerContent = {
  brand: "JG University",
  description: "Empowering students with modern education and skills.",
  email: "info@university.com",
  phone: "+91 98765 43210",
  location: "Near University Campus",
};

export const footerPrograms = [
  "BCA",
  "B.Tech",
  "MBA",
  "Data Science",
];

export const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
];

export const socialLinks = [
  { icon: "facebook", href: "#" },
  { icon: "instagram", href: "#" },
  { icon: "twitter", href: "#" },
  { icon: "linkedin", href: "#" },
];