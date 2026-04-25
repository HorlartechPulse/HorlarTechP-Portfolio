"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Code2, Smartphone, BarChart3, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/animated-counter"
import { GlassCard } from "@/components/glass-card"

const stats = [
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "+", label: "Professional Internships" },
  { value: 5, suffix: "k+", label: "Users Impacted" },
]

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building scalable web applications with Next.js, React, and modern backend technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Creating cross-platform mobile experiences with Flutter and React Native.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transforming raw data into actionable insights with SQL, Python, and Power BI.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting intuitive user interfaces with a focus on accessibility and aesthetics.",
  },
]

export default function HomePage() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Content - 60% */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for new projects</span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Engineering the Future of{" "}
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Digital Ecosystems
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                A multi-disciplinary agency led by Abdulwaheed Toheeb Olanrewaju, specializing in Full-Stack development, Mobile systems, and Data Analytics.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0"
                >
                  <Link href="/portfolio">
                    View Portfolio
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Image - 40% */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-3xl blur-2xl" />
                
                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/founder-QkLc6bzT2XdkzY6ymBAYakVSxZ9Vb2.jpeg"
                    alt="Abdulwaheed Toheeb Olanrewaju - Tech Founder"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Info card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-card/80 backdrop-blur-md border border-border/50">
                    <p className="font-display font-semibold text-foreground">Abdulwaheed Toheeb Olanrewaju</p>
                    <p className="text-sm text-muted-foreground">Tech Founder & Full-Stack Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-2">
                  {statsInView && <AnimatedCounter value={stat.value} />}
                  {stat.suffix}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What I <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions that bridge the gap between innovation and execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full p-6 group hover:border-primary/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" className="border-border hover:bg-secondary">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
            
            <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-balance">
                Ready to Build Something{" "}
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Extraordinary
                </span>
                ?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                {"Let's"} collaborate to transform your ideas into powerful digital solutions that make an impact.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0 animate-pulse-glow"
              >
                <Link href="/contact">Start a Project</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
