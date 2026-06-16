import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { OWNER } from "@/utils/constants"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
        stiffness: 100,
        damping: 18,
      },
    },
  } as const

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary-container text-surface-bright selection:bg-on-primary-container selection:text-primary-container"
    >
      {/* Floating Atmospheric Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-on-tertiary-container/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-fixed-dim/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-gutter w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-24 md:py-0 z-10">
        {/* Hero Content: Column 1-7 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 space-y-8 flex flex-col items-start text-left"
        >
          <div className="space-y-4">
            <motion.span
              variants={itemVariants}
              className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest block opacity-70"
            >
              {OWNER.title.toUpperCase()}
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight text-surface-bright max-w-2xl"
            >
              Engineering Scalable Digital Solutions.
            </motion.h1>
          </div>
          <motion.p
            variants={itemVariants}
            className="font-body-lg text-body-lg text-on-primary-container max-w-xl"
          >
            {OWNER.tagline}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="bg-surface-bright text-primary-container font-label-caps text-label-caps px-10 py-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group w-full sm:w-auto rounded-none"
            >
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="border border-on-primary-container/30 text-surface-bright font-label-caps text-label-caps px-10 py-4 hover:bg-on-primary-container/10 transition-colors flex items-center justify-center w-full sm:w-auto rounded-none"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Asymmetric Graphic: Column 8-12 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:col-span-5 relative hidden md:block"
        >
          <div className="relative w-full aspect-square bg-on-primary-container/5 border border-on-primary-container/10 p-8 flex flex-col justify-between overflow-hidden group">
            {/* Subtle Tech Decor */}
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <span className="font-mono-data text-mono-data text-on-primary-container">
                0x7F // CLOUD_ARCH
              </span>
            </div>

            {/* Code Visualizer */}
            <div className="font-mono-data text-mono-data text-on-primary-container/60 space-y-2 select-none pointer-events-none">
              <div className="flex gap-4">
                <span className="text-on-tertiary-container/40">01</span>
                <span>class Infrastructure &#123;</span>
              </div>
              <div className="flex gap-4 pl-4">
                <span className="text-on-tertiary-container/40">02</span>
                <span className="text-on-tertiary-container">constructor() &#123;</span>
              </div>
              <div className="flex gap-4 pl-8">
                <span className="text-on-tertiary-container/40">03</span>
                <span>this.scalability = 'infinite';</span>
              </div>
              <div className="flex gap-4 pl-8">
                <span className="text-on-tertiary-container/40">04</span>
                <span>this.reliability = '99.99%';</span>
              </div>
              <div className="flex gap-4 pl-4">
                <span className="text-on-tertiary-container/40">05</span>
                <span>&#125;</span>
              </div>
              <div className="flex gap-4">
                <span className="text-on-tertiary-container/40">06</span>
                <span className="text-on-tertiary-container">optimize(systems) &#123;</span>
              </div>
              <div className="flex gap-4 pl-4">
                <span className="text-on-tertiary-container/40">07</span>
                <span>return systems.map(s =&gt; simplify(s));</span>
              </div>
              <div className="flex gap-4">
                <span className="text-on-tertiary-container/40">08</span>
                <span>&#125;</span>
              </div>
            </div>

            {/* Diagram Visual */}
            <div className="mt-8 relative h-48 border-t border-on-primary-container/10 pt-8">
              <div className="flex justify-between items-end gap-2 h-full px-4">
                <div className="w-1/4 h-[60%] border border-on-primary-container/20 bg-on-primary-container/5 relative group-hover:bg-on-tertiary-container/10 transition-colors">
                  <span className="absolute -top-6 left-0 font-mono-data text-[10px] opacity-40">
                    NODE_A
                  </span>
                </div>
                <div className="w-1/4 h-[90%] border border-on-primary-container/20 bg-on-primary-container/5 relative group-hover:bg-on-tertiary-container/10 transition-colors">
                  <span className="absolute -top-6 left-0 font-mono-data text-[10px] opacity-40">
                    NODE_B
                  </span>
                </div>
                <div className="w-1/4 h-[40%] border border-on-primary-container/20 bg-on-primary-container/5 relative group-hover:bg-on-tertiary-container/10 transition-colors">
                  <span className="absolute -top-6 left-0 font-mono-data text-[10px] opacity-40">
                    NODE_C
                  </span>
                </div>
                <div className="w-1/4 h-[75%] border border-on-primary-container/20 bg-on-primary-container/5 relative group-hover:bg-on-tertiary-container/10 transition-colors">
                  <span className="absolute -top-6 left-0 font-mono-data text-[10px] opacity-40">
                    NODE_D
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Abstract Layered Box */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-on-primary-container/5 -z-10"></div>
        </motion.div>
      </div>
    </section>
  )
}
