import { motion } from "framer-motion"
import { EDUCATION } from "@/utils/constants"
import { EducationCard } from "@/components/shared/EducationCard"

export function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      {/* Cyber Backdrop Decoration */}
      <div className="absolute top-0 left-0 -z-10 h-1/2 w-1/3 bg-primary/5 opacity-50 blur-[100px]" />

      <div className="mx-auto max-w-4xl px-4 md:px-8">
        {/* Section Heading - HUD Style */}
        <div className="mb-16 flex flex-col items-center gap-2 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-bold tracking-widest text-primary uppercase"
          >
            [ 04_KNOWLEDGE_BASE ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl font-black tracking-tighter text-foreground uppercase sm:text-4xl"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 h-1 bg-primary shadow-[0_0_10px_var(--primary)]"
          />
        </div>

        {/* Timeline Grid Container */}
        <div className="relative">
          {EDUCATION.map((education, index) => (
            <EducationCard
              key={education.id}
              education={education}
              index={index}
              isLast={index === EDUCATION.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
