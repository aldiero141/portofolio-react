import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Link as LinkIcon, Code } from "lucide-react"
import { OWNER, SOCIAL_LINKS } from "@/utils/constants"

export function Contact() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const amount = 5
      const x = (e.clientX / window.innerWidth - 0.5) * amount
      const y = (e.clientY / window.innerHeight - 0.5) * amount
      setCoords({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const githubLink = SOCIAL_LINKS.find((link) => link.label.toLowerCase() === "github")?.href ?? "#"
  const linkedinLink = SOCIAL_LINKS.find((link) => link.label.toLowerCase() === "linkedin")?.href ?? "#"

  return (
    <section
      id="contact"
      className="bg-background text-on-background py-20 md:py-section-padding border-t border-primary/15"
    >
      <div className="mx-auto max-w-container-max px-5 md:px-gutter">
        {/* Contact Section Wrapper */}
        <div className="w-full flex flex-col items-center text-center">
          {/* Left Column: Copy & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-unit space-y-8 items-center"
          >
            <div className="space-y-4">
              <h2
                className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tighter leading-none select-none transition-transform duration-75 ease-out"
                style={{
                  transform: `translate(${coords.x}px, ${coords.y}px)`,
                }}
              >
                Get in Touch
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
                Let's discuss technical requirements, architectural scaling, or product vision.
              </p>
            </div>

            {/* Technical Links */}
            <div className="pt-8">
              <a
                href={`mailto:${OWNER.email}`}
                className="btn-primary-custom px-12 py-5 bg-primary-container text-on-primary font-label-caps text-label-caps tracking-widest transition-all duration-300 flex items-center justify-center gap-4 group shadow-none"
              >
                CONTACT ME
                <Mail
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 mt-8">
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                <LinkIcon size={14} />
                LinkedIn
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                <Code size={14} />
                GitHub
              </a>
              <a
                href={`mailto:${OWNER.email}`}
                className="flex items-center gap-2 font-label-caps text-label text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                <Mail size={14} />
                <span className="mb-0.5"> {OWNER.email}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}