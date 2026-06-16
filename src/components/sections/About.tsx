import { Fragment } from "react"
import { motion } from "framer-motion"
import { Terminal, Network, Layout, ArrowRight } from "lucide-react"
import { OWNER } from "@/utils/constants"

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  } as const

  return (
    <section id="about" className="bg-background text-on-background py-section-padding">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col gap-12">
        {/* Main Content Grid */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-gutter items-start">
          {/* Side: Portrait Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 w-full aspect-[4/5] bg-surface-container overflow-hidden group border border-primary/10"
          >
            <img
              alt="Engineering Portrait"
              className="w-full h-full grayscale brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              src="/programming.webp"
            />
          </motion.div>

          {/* Content Canvas */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-7 flex flex-col pt-8 md:pt-0"
          >
            <motion.span
              variants={itemVariants}
              className="font-label-caps text-label-caps text-primary-container mb-4 block"
            >
              PORTFOLIO OVERVIEW
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-none mb-10 uppercase"
            >
              Engineering with Purpose.
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-8 max-w-xl">
              <p className="font-body-lg text-body-lg text-on-surface-variant text-justify">
                {OWNER.bio.split('\n').map((line, i, arr) => (
                  <Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </Fragment>
                ))}
              </p>
            </motion.div>

            {/* Strategic Evolution Phases */}
            <motion.div
              variants={itemVariants}
              className="mt-16 space-y-0 border-t border-primary/10 w-full"
            >
              {/* Phase 01 */}
              <div className="px-4 flex flex-col justify-between md:flex-row border-b border-primary/10 py-8 group hover:bg-surface-container-low transition-colors duration-300">
                <div className="md:w-1/3 font-label-caps text-label-caps text-primary flex items-center gap-2">
                  Implementation
                  <Terminal size={16} className="text-primary" />
                </div>
                <div className="md:w-5/12 font-body-md text-body-md text-on-surface-variant">
                  Mastering the atomic level of engineering. Writing performant, low-level code with precision and clarity.
                </div>
              </div>

              {/* Phase 02 */}
              <div className="px-4 flex flex-col justify-between md:flex-row border-b border-primary/10 py-8 group hover:bg-surface-container-low transition-colors duration-300">
                <div className="md:w-1/3 font-label-caps text-label-caps text-primary flex items-center gap-2">
                  System Integration
                  <Network size={16} className="text-primary" />
                </div>
                <div className="md:w-5/12 font-body-md text-body-md text-on-surface-variant">
                  Coordinating complex dependencies. Scaling distributed systems while maintaining operational integrity.
                </div>
              </div>

              {/* Phase 03 */}
              <div className="px-4 flex flex-col justify-between md:flex-row border-b border-primary/10 py-8 group hover:bg-surface-container-low transition-colors duration-300">
                <div className="md:w-1/3 font-label-caps text-label-caps text-primary flex items-center gap-2">
                  Engineering Strategy
                  <Layout size={16} className="text-primary" />
                </div>
                <div className="md:w-5/12 font-body-md text-body-md text-on-surface-variant">
                  Defining the long-term technical roadmap. Aligning engineering constraints with business objectives.
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-12">
              <a
                href="#projects"
                className="group flex items-center gap-4 text-primary font-label-caps text-label-caps w-fit px-4"
              >
                EXPLORE THE PROJECTS
                <span className="w-12 h-[1px] bg-primary group-hover:w-16 transition-all duration-300"></span>
                <ArrowRight size={20} className="text-primary" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-gutter border-t border-primary/15 pt-12"
        >
          <div className="flex flex-col">
            <span className="font-mono-data text-mono-data text-primary-container/60 uppercase">
              EXPERIENCE
            </span>
            <span className="font-headline-md text-headline-md text-primary">
              5+ YRS
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono-data text-mono-data text-primary-container/60 uppercase">
              PROJECTS
            </span>
            <span className="font-headline-md text-headline-md text-primary">
              10+
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono-data text-mono-data text-primary-container/60 uppercase">
              SYSTEMS
            </span>
            <span className="font-headline-md text-headline-md text-primary">
              10+
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono-data text-mono-data text-primary-container/60 uppercase">
              COMMITMENT
            </span>
            <span className="font-headline-md text-headline-md text-primary">
              100%
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
