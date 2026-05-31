import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Education } from "@/types"

interface EducationCardProps {
  education: Education
  index: number
  isLast?: boolean
}

export function EducationCard({
  education,
  index,
  isLast = false,
}: EducationCardProps) {
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
          "mb-10 rounded-none border-2 border-primary bg-card p-5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,60,0.2)]",
          "group relative"
        )}
      >
        {/* Corner Brackets */}
        <div className="absolute top-0 left-0 z-20 h-2 w-2 border-t-2 border-l-2 border-primary" />
        <div className="absolute top-0 right-0 z-20 h-2 w-2 border-t-2 border-r-2 border-primary" />
        <div className="absolute bottom-0 left-0 z-20 h-2 w-2 border-b-2 border-l-2 border-primary" />
        <div className="absolute right-0 bottom-0 z-20 h-2 w-2 border-r-2 border-b-2 border-primary" />

        {/* Header */}
        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-black tracking-tighter text-foreground uppercase transition-colors group-hover:text-primary">
              {education.degree}
            </h3>
            <div className="flex items-center gap-2">
              <GraduationCap size={13} className="text-primary opacity-70" />
              <span className="text-sm font-bold tracking-wide text-foreground uppercase">
                {education.institution}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-primary opacity-70" />
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {education.location}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 border border-primary/30 bg-background/50 px-3 py-1.5 font-mono text-xs whitespace-nowrap text-primary">
            <Calendar size={12} />
            {education.year}
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2">
          {education.description.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 font-mono text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary/60" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
