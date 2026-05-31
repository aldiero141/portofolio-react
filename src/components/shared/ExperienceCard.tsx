import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Experience } from "@/types"

interface ExperienceCardProps {
  experience: Experience
  index: number
  isLast?: boolean
}

export function ExperienceCard({
  experience,
  index,
  isLast = false,
}: ExperienceCardProps) {
  const typeColors: Record<string, string> = {
    "full-time": "bg-secondary/10 text-secondary border-secondary/40",
    contract: "bg-amber-500/10 text-amber-400 border-amber-500/40",
    freelance: "bg-blue-500/10 text-blue-400 border-blue-500/40",
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-6 bottom-0 left-[0.6rem] w-px bg-primary opacity-30" />
      )}

      {/* Timeline node */}
      <div className="absolute top-1.5 left-0 z-10 flex h-5 w-5 items-center justify-center border-2 border-primary bg-background">
        <div className="h-2 w-2 animate-pulse bg-primary" />
      </div>

      {/* Card */}
      <div
        className={cn(
          "mb-10 rounded-none border-2 border-primary bg-card p-5 transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:shadow-[0_0_20px_rgba(255,0,60,0.2)]",
          "group relative"
        )}
      >
        {/* Corner Brackets */}
        <div className="absolute top-0 left-0 z-20 h-2 w-2 border-t-2 border-l-2 border-primary group-hover:border-secondary" />
        <div className="absolute top-0 right-0 z-20 h-2 w-2 border-t-2 border-r-2 border-primary group-hover:border-secondary" />
        <div className="absolute bottom-0 left-0 z-20 h-2 w-2 border-b-2 border-l-2 border-primary group-hover:border-secondary" />
        <div className="absolute right-0 bottom-0 z-20 h-2 w-2 border-r-2 border-b-2 border-primary group-hover:border-secondary" />

        {/* Header */}
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-black tracking-tighter text-foreground uppercase transition-colors group-hover:text-accent">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2">
              <Briefcase size={13} className="text-primary opacity-70" />
              <span className="text-sm font-bold tracking-wide text-foreground uppercase">
                {experience.company}
              </span>
              <span
                className={cn(
                  "border px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase",
                  typeColors[experience.type] ||
                    "border-primary/30 bg-primary/15 text-primary"
                )}
              >
                {experience.type}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 border border-secondary/30 bg-secondary/10 px-3 py-1.5 font-mono text-xs whitespace-nowrap text-secondary">
            <Calendar size={12} />
            {experience.duration}
          </div>
        </div>

        {/* Description */}
        <ul className="mb-4 space-y-2">
          {experience.description.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 font-mono text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary/60" />
              {item}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="border border-secondary/30 bg-secondary/5 px-2 py-0.5 font-mono text-[10px] tracking-tighter text-secondary uppercase transition-colors hover:bg-secondary hover:text-background"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
