import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Monitor, Server, Users } from "lucide-react"
import { SKILL_GROUPS } from "@/utils/constants"

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsInView(true)
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "monitor":
        return <Monitor className="h-5 w-5" strokeWidth={1.5} />
      case "server":
        return <Server className="h-5 w-5" strokeWidth={1.5} />
      case "wrench":
        return <Server className="h-5 w-5" strokeWidth={1.5} />
      default:
        return <Users className="h-5 w-5" strokeWidth={1.5} />
    }
  }

  return (
    <section
      id="skills"
      className="relative bg-[#FFF8F1] py-20 md:py-section-padding"
    >
      <div
        ref={sectionRef}
        className="mx-auto max-w-[1280px] px-5 md:px-gutter"
      >
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start gap-4 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="font-label-caps text-label-caps text-primary-container"
          >
            CORE COMPETENCIES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-headline-lg-mobile text-primary md:text-headline-lg"
          >
            Technical Arsenal.
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-primary-container"
          />
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-12">
          {SKILL_GROUPS.map((group, groupIdx) => {
            // Calculate the starting index for this group
            const groupStartIndex = SKILL_GROUPS.slice(0, groupIdx)
              .flatMap((g) => g.skills)
              .length

            return (
              <motion.section
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + groupIdx * 0.1 }}
                className="flex flex-col lg:col-span-4"
              >
                {/* Category Header */}
                <div className="mb-8 flex items-center gap-3">
                  <span className="text-primary">{getIcon(group.icon)}</span>
                  <h2 className="font-headline-sm text-headline-sm text-primary">
                    {group.category}
                  </h2>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {group.skills.map((skill, skillIdx) => {
                    const globalIndex = String(
                      groupStartIndex + skillIdx + 1
                    ).padStart(2, "0")
                    return (
                      <div
                        key={skill.name}
                        className="skill-item group flex flex-col gap-1"
                      >
                        <div className="skill-icon flex items-center justify-between border-b border-primary/10 pb-2 transition-all duration-300 group-hover:border-primary/40 group-hover:translate-x-1">
                          <span className="font-body-lg text-body-lg font-medium text-primary">
                            {skill.name}
                          </span>
                          <span className="font-mono-data text-mono-data text-primary opacity-40">
                            {globalIndex}
                          </span>
                        </div>
                        <p className="text-on-surface-variant max-w-xs text-body-md">
                          {generateSkillDescription(skill.name)}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </motion.section>
            )
          })}
        </div>

        {/* Visual Element: Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32 relative h-96 w-full overflow-hidden border border-primary/10 bg-[#F1E7D6]"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-12">
            <div className="max-w-2xl space-y-4 text-center">
              <p className="font-mono-data text-mono-data tracking-widest text-primary/60 uppercase">
                Philosophy
              </p>
              <p className="font-headline-sm text-headline-sm text-primary italic">
                "Complexity is the enemy of reliability. My stack is chosen for
                its ability to deliver robust systems that scale without
                friction."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Helper to generate descriptions based on skill name
function generateSkillDescription(name: string): string {
  const lower = name.toLowerCase()
  if (lower.includes("react") || lower.includes("next")) {
    return "Building scalable component architectures and complex state management systems."
  }
  if (lower.includes("vue") || lower.includes("nuxt")) {
    return "Crafting reactive interfaces and SSR-powered applications with the Vue ecosystem."
  }
  if (lower.includes("typescript") || lower.includes("javascript")) {
    return "Implementing type-safe applications for maximum maintainability and developer efficiency."
  }
  if (lower.includes("tailwind") || lower.includes("css") || lower.includes("scss")) {
    return "Crafting rapid, responsive, and precision-focused UI systems with a utility-first approach."
  }
  if (lower.includes("svelte")) {
    return "Engineering lean, high-performance applications with compile-time optimized reactivity."
  }
  if (lower.includes("node") || lower.includes("express")) {
    return "Developing high-performance, asynchronous server environments and real-time APIs."
  }
  if (lower.includes("php") || lower.includes("laravel") || lower.includes("codeigniter")) {
    return "Architecting robust web services and rapid backend systems with proven PHP frameworks."
  }
  if (lower.includes("supabase") || lower.includes("postgres") || lower.includes("mysql")) {
    return "Designing relational schemas, query optimization, and secure data access layers."
  }
  if (lower.includes("communication")) {
    return "Bridging technical and non-technical teams with clarity and intent."
  }
  if (lower.includes("problem") || lower.includes("critical")) {
    return "Decomposing ambiguity into structured, testable, and maintainable solutions."
  }
  if (lower.includes("leadership") || lower.includes("management")) {
    return "Coordinating cross-functional teams to ship ambitious products on time."
  }
  if (lower.includes("api") || lower.includes("integration")) {
    return "Wiring third-party systems, payment gateways, and internal services end-to-end."
  }
  if (lower.includes("seo")) {
    return "Optimizing discoverability, performance, and structure for organic growth."
  }
  return "Production-grade expertise refined through years of shipping real-world projects."
}