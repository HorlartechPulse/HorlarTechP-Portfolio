"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react"
import { GlassCard } from "@/components/glass-card"

const timeline = [
  {
    title: "Data Analyst & Technical Support",
    company: "Kwara State Health Insurance Agency",
    location: "Ilorin, Kwara",
    period: "2025",
    description: "Optimized public sector health data management and provided infrastructure stability for critical healthcare systems.",
    highlights: [
      "Health data optimization",
      "Infrastructure management",
      "Technical support systems",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Blue Light Tech",
    location: "Lagos",
    period: "2019 - 2023",
    description: "Specialized in professional branding, high-speed agile development, and UI/UX optimization for client projects.",
    highlights: [
      "Agile development",
      "Professional branding",
      "UI/UX optimization",
    ],
  },
  {
    title: "Technical Instructor & Systems Support",
    company: "Easy Link Computer Institute",
    location: "Oyo",
    period: "2014 - 2018",
    description: "Managed technical training programs, hardware maintenance, and software troubleshooting for students and staff.",
    highlights: [
      "Technical training",
      "Hardware maintenance",
      "Software troubleshooting",
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Effects */}
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
              About{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The story of a Computer Science graduate bridging the gap between raw data and human-centric design.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-display font-semibold mb-6">
                The <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Story</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey into technology began with a curiosity for how digital systems could transform everyday experiences. As a Computer Science graduate from Bamidele Olumilua University of Education, Science and Technology (BOUESTI), I&apos;ve dedicated myself to bridging the gap between raw data and human-centric design.
                </p>
                <p>
                  Through hands-on experience across multiple industries in Nigeria, I&apos;ve developed a unique perspective on how technology can solve real-world problems. From optimizing healthcare data systems to building educational platforms, each project has reinforced my belief in the power of thoughtful, user-focused development.
                </p>
                <p>
                  Today, I lead Horlartech_Pulse as a multi-disciplinary digital agency, bringing together my expertise in full-stack development, mobile systems, and data analytics to create impactful solutions for clients across various sectors.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span className="text-sm">BOUESTI Graduate</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Oyo, Nigeria</span>
                </div>
              </div>
            </motion.div>

            {/* Keynote Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />
              
              <GlassCard className="relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/keynote-kIDmriZnuC2XEGzqeF5YSE4vfVxOjH.jpg"
                  alt="Abdulwaheed Toheeb Olanrewaju at Technical Seminar"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display font-semibold text-foreground mb-1">The Speaker</p>
                  <p className="text-sm text-muted-foreground">
                    Keynote presentation at Emmanuel Alayande University Technical Seminar, mentoring the next generation of tech leaders.
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              An interactive journey through my career growth across Nigeria.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 border-4 border-background z-10" />

                  {/* Content */}
                  <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <GlassCard className="p-6 hover:border-primary/50 transition-colors">
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm text-primary font-medium">{item.period}</span>
                      </div>
                      
                      <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      
                      <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <Briefcase className="h-4 w-4" />
                        <span>{item.company}</span>
                        <span>•</span>
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        {item.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Education
              </h3>
              <p className="text-lg text-foreground mb-1">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-muted-foreground mb-4">
                Bamidele Olumilua University of Education, Science and Technology (BOUESTI)
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm text-primary">Class of 2024</span>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
