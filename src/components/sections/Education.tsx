import { motion } from "framer-motion"
import { EDUCATION } from "@/utils/constants"
import { EducationCard } from "@/components/shared/EducationCard"

export function Education() {
  return (
    <section
      id="education"
      className="bg-[#FFF8F1] py-20 md:py-section-padding border-t border-primary/10"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-gutter">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          {/* Header Sidebar */}
          <div className="md:col-span-4">
            <div className="sticky top-32 flex flex-col items-start gap-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="font-label-caps text-label-caps text-primary-container"
              >
                05 / EDUCATION_LOG
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-headline-lg-mobile text-primary leading-tight tracking-tighter md:text-headline-md"
              >
                Academic Path.
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 bg-primary-container"
              />
              <p className="text-on-surface-variant max-w-xs pt-4 text-body-md">
                Formal education credentials and research achievements that ground my engineering practices.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="md:col-span-8">
            <div className="relative">
              {EDUCATION.map((education, index) => (
                <EducationCard
                  key={education.id}
                  education={education}
                  index={index}
                  isLast={index === EDUCATION.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
