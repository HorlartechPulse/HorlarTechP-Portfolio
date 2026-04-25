import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/50 bg-card/50 backdrop-blur-md transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  )
}
