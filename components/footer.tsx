"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  { href: "https://github.com/HorlartechPulse", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/Toheeb-Abdulwaheed", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:Olanrewaju3501@gmail.com", icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      {/* Pulse glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
      
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Horlartech_Pulse
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Engineering the future of digital ecosystems through innovative full-stack development, mobile systems, and data analytics.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display font-semibold text-foreground mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+2348135018288"
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +234 813 501 8288
              </a>
              <a
                href="mailto:Olanrewaju3501@gmail.com"
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                Olanrewaju3501@gmail.com
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                Oyo, Nigeria
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              {new Date().getFullYear()} Horlartech_Pulse. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Designed & Built by Abdulwaheed Toheeb Olanrewaju
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
