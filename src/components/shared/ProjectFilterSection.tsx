import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PROJECTS } from "@/utils/constants"
import { ProjectCard } from "./ProjectCard"

type Project = (typeof PROJECTS)[number]

interface ProjectFilterSectionProps {
  projects: Project[]
}

export function ProjectFilterSection({ projects }: ProjectFilterSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const categories = ["All", ...new Set(projects.map((p) => p.category))]

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true
    return p.category === activeFilter
  })

  return (
    <>
      {/* Filter Navigation - Frequency Tuner Style */}
      <div className="mx-auto mb-12 flex max-w-lg flex-wrap items-center justify-center gap-0 rounded-none border border-primary/30 bg-card/50 p-1">
        {categories.map((cat) => {
          const isActive = activeFilter === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="relative cursor-pointer px-4 py-2 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300"
            >
              <span
                className={cn(
                  "relative z-10 transition-colors duration-300",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-secondary"
                )}
              >
                {cat}
              </span>
              {isActive && (
                <motion.span
                  layoutId="activeFilterTab"
                  className="absolute inset-0 -z-10 bg-primary shadow-[0_0_10px_var(--primary)]"
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

// Helper for class joining since I'm using it in the content
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
