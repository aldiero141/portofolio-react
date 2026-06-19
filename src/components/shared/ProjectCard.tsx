import { ArrowUpRight, ArrowRight } from "lucide-react"
import type { Project } from "@/types"
import { Dialog, DialogContent, DialogTrigger } from "@/components/dialog"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const displayIndex = (index + 1).toString().padStart(2, "0")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <article className="project-row group py-12 border-b border-primary/15 flex flex-col md:flex-row md:items-start transition-all cursor-pointer hover:bg-primary/5 px-gutter md:px-4">
          <div className="md:w-1/12 font-mono-data text-mono-data text-primary/40 mb-4 md:mb-0">
            {displayIndex}
          </div>

          <div className="md:w-5/12 pr-12">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
              {project.title}
              <ArrowUpRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"
              />
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              {project.description}
            </p>
          </div>

          <div className="md:w-4/12 flex flex-wrap gap-2 mt-6 md:mt-0 items-start">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono-data text-mono-data px-3 py-1 border border-primary/20 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="md:w-2/12 flex md:justify-end mt-8 md:mt-0">
            <span className="inline-flex items-center font-label-caps text-label-caps text-primary border-b border-primary/0 group-hover:border-primary pb-1 transition-all">
              CASE STUDY
              <ArrowRight
                size={18}
                className="ml-2 project-arrow transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </article>
      </DialogTrigger>

      <DialogContent className="rounded-none border border-primary/10 bg-background p-0 gap-0 max-h-[90vh] md:max-w-4xl w-full overflow-y-auto flex flex-col md:flex-row">
        <div className="md:w-3/5 aspect-video bg-surface-container flex items-center justify-center min-h-[300px]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full sm:h-[300px] md:h-full h-full object-contain"
            />
          ) : (
            <img src="/logo.svg" alt="logo" className="size-12" />
          )}
        </div>

        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <span className="font-mono-data text-mono-data text-primary/40 mb-2 block">
              {displayIndex}
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mb-6">
              {project.title}
            </h2>
            <div className="font-body-md text-body-md text-on-surface-variant mb-8 space-y-4">
              {project.longDescription ? (
                <>
                  <p>{project.description}</p>
                  <p>{project.longDescription}</p>
                </>
              ) : (
                <p>{project.description}</p>
              )}
            </div>
          </div>
          <div>
            <h3 className="font-label-caps text-label-caps text-primary/60 mb-4">
              TECH STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-data text-mono-data px-3 py-1 border border-primary/20 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
