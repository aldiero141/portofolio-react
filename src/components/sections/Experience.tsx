import { motion } from "framer-motion"
import { EXPERIENCES } from "@/utils/constants"
import { ExperienceCard } from "@/components/shared/ExperienceCard"

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-transparent py-20 md:py-28"
    >
      {/* Cyber Backdrop Decoration */}
      <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-1/3 bg-primary/5 opacity-50 blur-[100px]" />

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
            [ 04_EXPERIENCE_LOG ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl font-black tracking-tighter text-foreground uppercase sm:text-4xl"
          >
            Work Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 h-1 bg-secondary shadow-[0_0_10px_var(--secondary)]"
          />
        </div>

        {/* Timeline Grid Container */}
        <div className="relative">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === EXPERIENCES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
