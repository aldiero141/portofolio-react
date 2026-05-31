import { ExternalLink, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Project } from "@/types"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog"
import { Logo } from "./Logo"

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
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="group relative flex h-full cursor-pointer flex-col overflow-hidden border-2 border-primary bg-card transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(255,0,60,0.3)]"
        >
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 z-20 h-2 w-2 border-t-2 border-l-2 border-primary group-hover:border-secondary" />
          <div className="absolute top-0 right-0 z-20 h-2 w-2 border-t-2 border-r-2 border-primary group-hover:border-secondary" />
          <div className="absolute bottom-0 left-0 z-20 h-2 w-2 border-b-2 border-l-2 border-primary group-hover:border-secondary" />
          <div className="absolute right-0 bottom-0 z-20 h-2 w-2 border-r-2 border-b-2 border-primary group-hover:border-secondary" />

          {/* Header band */}
          <div className="relative h-48 overflow-hidden border-b-2 border-primary/20 bg-muted/50 transition-all group-hover:border-accent">
            {!project.image && (
              <>
              {/* Cyber Grid */}
              <div
                className="absolute inset-0 opacity-30 group-hover:opacity-0"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Big initials overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                {!project.image && (
                  <Logo className="size-32 text-primary"/>
                )}
              </div>
            </>
            )}
            {/* Project Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-top transition-all duration-300 group-hover:scale-105"
              />
            )}
            
            {/* Year badge */}
            <div className="absolute top-3 left-3 border border-secondary/40 bg-background/80 px-2 py-1 font-mono text-[10px] tracking-widest text-secondary uppercase">
              DATE: {project.year}
            </div>
            {/* Category badge */}
            <div
              className={cn(
                "absolute top-3 right-3 border px-2.5 py-1 text-xs font-bold tracking-tighter uppercase ",
                "border-secondary/30 bg-background/80 text-secondary"
              )}
            >
              {project.category}
            </div>
            {/* Hover overlay with links */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-background/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-primary bg-primary/20 px-4 py-2 text-xs font-bold tracking-widest text-primary uppercase transition-colors hover:bg-primary hover:text-background"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GithubIcon size={14} />
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-primary bg-primary px-4 py-2 text-xs font-bold tracking-widest text-background uppercase transition-colors hover:bg-transparent hover:text-primary"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={14} />
                  Live
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-black tracking-tighter text-foreground uppercase transition-colors duration-200 group-hover:text-accent">
                {project.title}
              </h3>
              <ArrowUpRight
                size={18}
                className="mt-0.5 shrink-0 text-accent opacity-50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </div>

            <p className="line-clamp-3 font-mono text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="border border-secondary/30 bg-secondary/5 px-2 py-0.5 font-mono text-[10px] tracking-tighter text-secondary uppercase"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="border border-secondary/30 bg-secondary/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground uppercase">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>
          </div>
        </motion.article>
      </DialogTrigger>
      <DialogContent className="max-w-2xl gap-0 overflow-hidden rounded-none border-2 border-primary bg-card p-0">
        <div className="relative flex h-40 w-full items-center justify-center border-b-2 border-primary/20 bg-muted/30 overflow-hidden">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-top transition-all duration-300 group-hover:scale-105"
            />
          )}
          {!project.image && (
            <Logo className="size-32 text-primary"/>
          )}
         
          <div className="absolute top-4 left-4">
            <div
              className={cn(
                "border px-2.5 py-1 text-xs font-bold tracking-tighter uppercase",
                "border-secondary/30 bg-background/80 text-secondary"
              )}
            >
              {project.category}
            </div>
          </div>
        </div>
        <div className="space-y-6 p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black tracking-tighter text-foreground uppercase">
              {project.title}
            </DialogTitle>
            <DialogDescription className="font-mono text-xs tracking-widest text-primary uppercase">
              <h4 className="text-xs font-bold tracking-widest text-primary uppercase">
              Deployment_Year:
              <span className="text-secondary"> {project.year}</span>
            </h4>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-primary uppercase">
              Project_Description
            </h4>
            <p className="font-mono text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-primary uppercase">
              Role_&_Contributions
            </h4>
            <p className="font-mono text-sm leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-primary uppercase">
              Tech_Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-secondary/30 bg-secondary/5 px-2 py-0.5 font-mono text-[10px] tracking-tighter text-secondary uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-primary/40 bg-transparent px-4 py-2 text-xs font-bold tracking-widest text-primary uppercase transition-all hover:bg-primary hover:text-background"
              >
                <GithubIcon size={14} />
                Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-primary bg-primary px-4 py-2 text-xs font-bold tracking-widest text-background uppercase transition-all hover:bg-transparent hover:text-primary"
              >
                <ExternalLink size={14} />
                Live Preview
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
