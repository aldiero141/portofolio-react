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

  const filteredProjects = projects
    .sort((a, b) => b.year - a.year)
    .filter((p) => {
      if (activeFilter === "All") return true
      return p.category === activeFilter
    })

  return (
    <>
      {/* Filter Navigation - Minimalist Inline Links */}
      <div className="flex flex-wrap items-center gap-8 mb-12 border-b border-primary/10 pb-4">
        {categories.map((cat) => {
          const isActive = activeFilter === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "font-label-caps text-label-caps pb-2 transition-all duration-200 cursor-pointer border-b-2",
                isActive
                  ? "text-primary border-primary font-bold"
                  : "text-on-surface-variant/65 border-transparent hover:text-primary hover:border-primary/30"
              )}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Project List: Structured as technical rows */}
      <div className="flex flex-col border-t border-primary/15 mb-16">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
