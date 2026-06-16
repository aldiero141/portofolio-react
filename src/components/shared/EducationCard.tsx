import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-6 bottom-0 left-[0.4rem] w-px bg-primary opacity-20" />
      )}

      {/* Timeline node */}
      <div className="absolute top-1.5 left-0 z-10 flex h-3 w-3 items-center justify-center bg-primary">
        <div className="h-1.5 w-1.5 bg-[#FFF8F1]" />
      </div>

      {/* Card */}
      <div className="group relative mb-12 border-b border-primary/15 pb-8">
        {/* Header */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <span className="font-mono-data text-mono-data text-primary-container opacity-60">
              {String(index + 1).padStart(2, "0")} / {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary">
              {education.degree}
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <GraduationCap size={14} strokeWidth={1.5} className="text-on-surface-variant" />
                <span className="text-body-md text-on-surface-variant font-medium">
                  {education.institution}
                </span>
              </div>
              <div className="flex items-center gap-2 border-l border-primary/15 pl-3">
                <MapPin size={14} strokeWidth={1.5} className="text-on-surface-variant" />
                <span className="font-mono-data text-mono-data text-on-surface-variant">
                  {education.location}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 border-b border-primary/40 pb-1">
            <Calendar size={12} strokeWidth={1.5} className="text-on-surface-variant" />
            <span className="font-mono-data text-mono-data text-on-surface-variant">
              {education.year}
            </span>
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-3">
          {education.description.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-body-md text-on-surface-variant"
            >
              <span className="mt-2 h-1 w-1 shrink-0 bg-primary opacity-60" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
