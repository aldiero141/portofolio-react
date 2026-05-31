import { motion } from "framer-motion"
import { PROJECTS } from "@/utils/constants"
import { ProjectFilterSection } from "@/components/shared/ProjectFilterSection"

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-transparent py-20 md:py-28"
    >
      {/* Industrial Grid Backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Section Title - HUD Style */}
        <div className="mb-16 flex flex-col items-center gap-2 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-bold tracking-widest text-primary uppercase"
          >
            [ 02_PROJECT_ARCHIVE ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl font-black tracking-tighter text-foreground uppercase sm:text-4xl"
          >
            Featured Work
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 h-1 bg-secondary shadow-[0_0_10px_var(--secondary)]"
          />
        </div>

        {/* Delegate filtering and rendering to the reusable component */}
        <ProjectFilterSection projects={PROJECTS} />
      </div>
    </section>
  )
}
