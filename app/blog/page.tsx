"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/glass-card"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Full-Stack Applications with Next.js 15",
    excerpt: "Exploring the latest features in Next.js 15 and how they enable developers to build more performant and scalable web applications.",
    date: "April 20, 2025",
    readTime: "8 min read",
    category: "Development",
    featured: true,
  },
  {
    id: 2,
    title: "The Art of Data Visualization: From Raw Data to Insights",
    excerpt: "A comprehensive guide to transforming complex datasets into compelling visual narratives that drive decision-making.",
    date: "Feb 15, 2026",
    readTime: "6 min read",
    category: "Data Analytics",
  },
  {
    id: 3,
    title: "Flutter vs React Native: Choosing the Right Framework in 2026",
    excerpt: "An in-depth comparison of the two leading cross-platform mobile development frameworks based on real-world project experience.",
    date: "April 10, 2026",
    readTime: "10 min read",
    category: "Mobile",
  },
  {
    id: 4,
    title: "Designing for Accessibility: Best Practices for Inclusive UI/UX",
    excerpt: "How to create digital experiences that are accessible to everyone, including users with disabilities.",
    date: "Jan 5, 2025",
    readTime: "7 min read",
    category: "Design",
  },
  {
    id: 5,
    title: "Optimizing PostgreSQL Queries for High-Performance Applications",
    excerpt: "Techniques and strategies for writing efficient database queries that scale with your application.",
    date: "March 28, 2026",
    readTime: "9 min read",
    category: "Backend",
  },
  {
    id: 6,
    title: "My Journey from Computer Science Student to Tech Founder",
    excerpt: "Lessons learned and insights gained from transitioning from academia to building a multi-disciplinary digital agency.",
    date: "March 20, 2026",
    readTime: "5 min read",
    category: "Career",
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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
              Blog &{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights on web development, mobile apps, data analytics, and the tech industry.
            </p>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <GlassCard className="p-8 md:p-12 relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="absolute top-4 right-4 md:top-8 md:right-8">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-medium">
                    Featured
                  </span>
                </div>

                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1 text-sm text-primary">
                      <Tag className="h-4 w-4" />
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <Button
                    variant="ghost"
                    className="group/btn text-primary hover:text-primary p-0"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <GlassCard className="h-full p-6 group hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary p-0 h-auto"
                    >
                      Read
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <GlassCard className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Stay{" "}
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Updated
                </span>
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Subscribe to receive the latest articles, tutorials, and insights directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0">
                  Subscribe
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
