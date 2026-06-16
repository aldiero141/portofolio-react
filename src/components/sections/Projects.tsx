import { PROJECTS } from "@/utils/constants"
import { ProjectFilterSection } from "@/components/shared/ProjectFilterSection"

export function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#EAE0CF] py-section-padding px-gutter"
    >
      <div className="max-w-container-max mx-auto flex flex-col justify-between h-full">
        {/* Header Block */}
        <div className="mb-20 md:mb-32 max-w-3xl">
          <span className="font-label-caps text-label-caps text-primary/60 mb-4 block">
            PORTFOLIO
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight leading-none uppercase">
            Selected Engineering Works.
          </h2>
        </div>

        {/* Reusable filters & table project rows */}
        <ProjectFilterSection projects={PROJECTS} />

        {/* Decorative Quote and Technical SVG */}
        <div className="mt-32 flex justify-between items-end">
          <div className="max-w-lg">
            <p className="font-body-md text-body-md text-primary/45 italic">
              "Engineering is the thoughtful design of systems and experiences, where every decision balances functionality, performance, and human needs."
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-64 h-64 opacity-[0.07] pointer-events-none select-none">
              <svg className="w-full h-full text-primary" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="none" r="48" stroke="currentColor" strokeWidth="0.5" />
                <line stroke="currentColor" strokeWidth="0.5" x1="0" x2="100" y1="50" y2="50" />
                <line stroke="currentColor" strokeWidth="0.5" x1="50" x2="50" y1="0" y2="100" />
                <rect
                  fill="none"
                  height="50"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  transform="rotate(45 50 50)"
                  width="50"
                  x="25"
                  y="25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
