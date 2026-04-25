"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Code2, 
  Smartphone, 
  BarChart3, 
  Palette, 
  Database, 
  Globe,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/glass-card"

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern frameworks and best practices.",
    features: [
      "Next.js & React Applications",
      "Node.js & Express Backend",
      "PostgreSQL & MongoDB Databases",
      "RESTful & GraphQL APIs",
      "Authentication & Authorization",
      "Performance Optimization",
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications that deliver native-like experiences.",
    features: [
      "Flutter & React Native Apps",
      "iOS & Android Development",
      "Push Notifications",
      "Offline-First Architecture",
      "App Store Deployment",
      "Real-time Features",
    ],
    technologies: ["Flutter", "React Native", "Dart", "Firebase", "REST API"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights that drive business decisions.",
    features: [
      "Data Cleaning & Processing",
      "Statistical Analysis",
      "Interactive Dashboards",
      "Predictive Modeling",
      "Automated Reporting",
      "Data Visualization",
    ],
    technologies: ["Python", "SQL", "Power BI", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that balance aesthetics with functionality.",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Design Systems",
      "Mobile & Web Interfaces",
      "Usability Testing",
      "Accessibility Compliance",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient database architectures that scale with your application needs.",
    features: [
      "Schema Design & Modeling",
      "Query Optimization",
      "Data Migration",
      "Backup & Recovery",
      "Real-time Sync",
      "Security Implementation",
    ],
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    icon: Globe,
    title: "Technical Consulting",
    description: "Strategic technical guidance to help you make informed technology decisions.",
    features: [
      "Architecture Reviews",
      "Technology Selection",
      "Code Audits",
      "Performance Analysis",
      "Security Assessment",
      "Team Training",
    ],
    technologies: ["System Design", "Best Practices", "Documentation", "Mentorship"],
  },
]

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "Java", "Python", "REST APIs"] },
  { category: "Mobile", items: ["Flutter", "React Native", "Dart", "Firebase"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"] },
  { category: "Data Science", items: ["Python", "SQL", "Power BI", "Pandas", "NumPy"] },
  { category: "Design", items: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] },
]

export default function ServicesPage() {
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
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Services &{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to transform your ideas into powerful, scalable products.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full p-6 group hover:border-primary/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Technical{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Skillset
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-foreground border border-border hover:border-primary/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to delivering high-quality solutions that meet your unique requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", description: "Understanding your goals, requirements, and target audience." },
              { step: "02", title: "Design", description: "Creating wireframes, prototypes, and visual designs for approval." },
              { step: "03", title: "Development", description: "Building the solution with clean, maintainable code." },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support for your project." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 text-center h-full">
                  <div className="text-4xl font-display font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <GlassCard className="inline-block px-8 py-12 md:px-16">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                {"Let's"} discuss how I can help bring your vision to life with the right technology stack.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0 animate-pulse-glow"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
