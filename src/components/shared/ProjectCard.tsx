import { ExternalLink, ArrowUpRight, ArrowRight } from "lucide-react"
import type { Project } from "@/types"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog"

const GithubIcon = ({
  size,
  className,
}: {
  size: number
  className?: string
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

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
          {/* Index column */}
          <div className="md:w-1/12 font-mono-data text-mono-data text-primary/40 mb-4 md:mb-0">
            {displayIndex}
          </div>

          {/* Title and Description column */}
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

          {/* Tech stack column */}
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

          {/* Action column */}
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

      <DialogContent className="max-w-2xl gap-0 overflow-hidden rounded-none border border-primary bg-background p-0">
        <div className="relative flex h-48 w-full items-center justify-center border-b border-primary/15 bg-surface-container overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          ) : (
            <img src="/logo.svg" alt="logo" className="size-12 object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-300" />
          )}

          <div className="absolute top-4 left-4">
            <div className="border border-primary/20 bg-background px-2.5 py-1 text-xs font-bold font-label-caps text-primary uppercase">
              {project.category}
            </div>
          </div>
        </div>

        <div className="space-y-6 p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-headline-sm text-primary uppercase">
              {project.title}
            </DialogTitle>
            <DialogDescription className="font-mono-data text-xs text-primary/60">
              DEPLOYMENT YEAR: {project.year}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2">
            <h4 className="font-label-caps text-label-caps text-primary/70">
              Project Description
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.longDescription && (
            <div className="space-y-2">
              <h4 className="font-label-caps text-label-caps text-primary/70">
                Key Deliverables & Responsibilities
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          )}

          <div className="space-y-2">
            <h4 className="font-label-caps text-label-caps text-primary/70">
              Technology Stack
            </h4>
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

          <div className="flex items-center justify-end gap-3 pt-6 border-t border-primary/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-primary px-6 py-2 text-xs font-bold font-label-caps text-primary hover:bg-primary hover:text-background transition-all"
              >
                <GithubIcon size={14} />
                SOURCE CODE
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary-container px-6 py-2 text-xs font-bold font-label-caps text-on-primary hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={14} />
                LIVE PREVIEW
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
