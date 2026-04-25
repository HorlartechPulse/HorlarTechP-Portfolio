"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/glass-card"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Projects" },
  { id: "edtech", label: "EdTech" },
  { id: "mobile", label: "Mobile" },
  { id: "data", label: "Data Analytics" },
  { id: "uiux", label: "UI/UX Design" },
  { id: "frontend", label: "Frontend" },
]

const projects = [
  {
    id: 1,
    title: "BOUESTI E-Learning Platform (Lamas)",
    category: "edtech",
    description: "A comprehensive full-stack student resource hub built for Bamidele Olumilua University, featuring course management, resource sharing, and interactive learning modules.",
    problem: "Students lacked a centralized platform for accessing course materials and resources.",
    solution: "Built a full-stack e-learning platform with Next.js, featuring user authentication, course organization, and resource management.",
    impact: "Improved student access to learning materials and increased engagement across 1000+ students.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 2,
    title: "YouTube Mobile Clone",
    category: "mobile",
    description: "High-fidelity mobile application clone replicating YouTube's core functionality and UI patterns.",
    problem: "Learning mobile development patterns through practical implementation.",
    solution: "Recreated YouTube's complex UI with video streaming, search, and user interactions.",
    impact: "Mastered Flutter's video handling capabilities and complex state management.",
    tags: ["Flutter", "Dart", "REST API", "Video Streaming"],
  },
  {
    id: 3,
    title: "Facebook Engagement vs Car Sales Analysis",
    category: "data",
    description: "Comprehensive data analysis exploring the correlation between social media engagement metrics and automotive sales performance.",
    problem: "Businesses needed insights into how social media affects purchase decisions.",
    solution: "Conducted multi-variable analysis using SQL queries and Python visualizations.",
    impact: "Provided actionable insights for marketing strategy optimization.",
    tags: ["SQL", "Python", "Power BI", "Data Visualization"],
  },
  {
    id: 4,
    title: "Mobile Banking App Design",
    category: "uiux",
    description: "Complete UI/UX design for a modern mobile banking application with focus on security and user experience.",
    problem: "Traditional banking apps were complex and intimidating for new users.",
    solution: "Designed intuitive interfaces with simplified navigation and clear visual hierarchy.",
    impact: "Created a user-friendly design that reduced onboarding time by 40%.",
    tags: ["Figma", "UI/UX", "Prototyping", "Design System"],
  },
  {
    id: 5,
    title: "E-commerce Mobile App",
    category: "mobile",
    description: "Full-featured e-commerce application with product catalog, cart management, and checkout functionality.",
    problem: "Local businesses needed mobile presence for online sales.",
    solution: "Built a cross-platform app with Flutter featuring real-time inventory and secure payments.",
    impact: "Enabled 50+ small businesses to expand their digital footprint.",
    tags: ["Flutter", "Firebase", "Stripe", "Push Notifications"],
  },
  {
    id: 6,
    title: "Facebook Homepage Clone",
    category: "frontend",
    description: "Pixel-perfect recreation of Facebook's homepage using modern React and responsive design principles.",
    problem: "Demonstrating frontend mastery through complex UI implementation.",
    solution: "Built responsive layouts with React, implementing Facebook's design patterns.",
    impact: "Showcased advanced CSS and React component architecture skills.",
    tags: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    id: 7,
    title: "Finance Domain Analysis",
    category: "data",
    description: "In-depth analysis of financial market trends and patterns using advanced SQL queries and Python data science libraries.",
    problem: "Financial institutions needed automated reporting and trend analysis.",
    solution: "Developed automated data pipelines and interactive dashboards for real-time insights.",
    impact: "Reduced manual reporting time by 60% and improved decision accuracy.",
    tags: ["SQL", "Python", "Power BI", "Pandas"],
  },
  {
    id: 8,
    title: "Food Delivery App",
    category: "mobile",
    description: "Complete food delivery mobile application with real-time order tracking and restaurant management.",
    problem: "Local restaurants needed a delivery platform during increased demand for online ordering.",
    solution: "Created a full-featured app with order management, GPS tracking, and payment integration.",
    impact: "Connected 30+ local restaurants with customers, processing 500+ orders monthly.",
    tags: ["Flutter", "Node.js", "MongoDB", "Google Maps API"],
  },
  {
    id: 9,
    title: "Microsoft Homepage Clone",
    category: "frontend",
    description: "Responsive recreation of Microsoft's corporate homepage showcasing modern web development techniques.",
    problem: "Practice implementing enterprise-level design systems.",
    solution: "Built a fully responsive site with Next.js, matching Microsoft's design language.",
    impact: "Demonstrated proficiency in corporate web design and accessibility standards.",
    tags: ["Next.js", "TypeScript", "CSS Grid", "Accessibility"],
  },
  {
    id: 10,
    title: "Wallet App Design",
    category: "uiux",
    description: "Sleek digital wallet interface design with cryptocurrency support and transaction management.",
    problem: "Crypto wallets were too complex for mainstream adoption.",
    solution: "Designed an intuitive wallet with simplified transaction flows and clear portfolio views.",
    impact: "Created a design framework adopted by 2 fintech startups.",
    tags: ["Figma", "UI/UX", "Design System", "Animations"],
  },
  {
    id: 11,
    title: "SaaS Dashboard Design",
    category: "uiux",
    description: "Comprehensive desktop SaaS dashboard design featuring analytics, user management, and reporting modules.",
    problem: "SaaS platforms needed better information architecture for complex data.",
    solution: "Designed modular dashboard components with clear data visualization patterns.",
    impact: "Improved user task completion rates by 35% in usability testing.",
    tags: ["Figma", "Dashboard Design", "Data Visualization", "Prototyping"],
  },
  {
    id: 12,
    title: "Real-time Chat Application",
    category: "mobile",
    description: "Feature-rich messaging application with real-time communication, media sharing, and group chat functionality.",
    problem: "Teams needed a secure, private communication platform.",
    solution: "Built real-time chat with end-to-end encryption and media support.",
    impact: "Provided secure communication for 200+ active users.",
    tags: ["React Native", "Firebase", "WebSocket", "Encryption"],
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Portfolio{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Hub
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Categorized case studies showcasing problem-solving approaches and impactful solutions across various domains.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <GlassCard className="h-full group hover:border-primary/50 transition-all duration-300 overflow-hidden">
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-medium z-10">
                        Flagship
                      </div>
                    )}

                    <div className="p-6">
                      {/* Category */}
                      <div className="text-xs text-primary font-medium uppercase tracking-wider mb-2">
                        {categories.find((c) => c.id === project.category)?.label}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Problem/Solution/Impact - Hover State */}
                      <div className="space-y-3 mb-4">
                        <div className="text-xs">
                          <span className="text-primary font-medium">Problem:</span>
                          <span className="text-muted-foreground ml-1 line-clamp-1">{project.problem}</span>
                        </div>
                        <div className="text-xs">
                          <span className="text-primary font-medium">Solution:</span>
                          <span className="text-muted-foreground ml-1 line-clamp-1">{project.solution}</span>
                        </div>
                        <div className="text-xs">
                          <span className="text-primary font-medium">Impact:</span>
                          <span className="text-muted-foreground ml-1 line-clamp-1">{project.impact}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-muted-foreground">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </Button>
                        <Button variant="ghost" size="sm" className="ml-auto text-primary hover:text-primary">
                          Details
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <GlassCard className="inline-block px-8 py-8 md:px-16">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center">
                  <Github className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                    Explore More on GitHub
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    15+ repositories showcasing various projects and experiments
                  </p>
                </div>
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0"
                >
                  <a href="https://github.com/HorlartechPulse" target="_blank" rel="noopener noreferrer">
                    Visit GitHub
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
