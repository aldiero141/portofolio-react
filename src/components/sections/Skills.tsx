import { motion } from "framer-motion"
import { Monitor, Server, Wrench, Shield } from "lucide-react"
import { SKILL_GROUPS } from "@/utils/constants"

export function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "monitor":
        return <Monitor className="h-5 w-5" />
      case "server":
        return <Server className="h-5 w-5" />
      case "wrench":
        return <Wrench className="h-5 w-5" />
      default:
        return <Shield className="h-5 w-5" />
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  } as const

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-transparent py-20 md:py-28"
    >
      {/* Cyber Backdrop Decoration */}
      <div className="absolute top-0 left-0 -z-10 h-1/2 w-1/3 bg-primary/5 opacity-50 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Section Title - HUD Style */}
        <div className="mb-16 flex flex-col items-center gap-2 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-bold tracking-widest text-primary uppercase"
          >
            [ 03_CORE_CAPABILITIES ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl font-black tracking-tighter text-foreground uppercase sm:text-4xl"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 h-1 bg-secondary shadow-[0_0_10px_var(--secondary)]"
          />
        </div>

        {/* Skills Groups Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              className="group relative flex flex-col rounded-none border-2 border-primary bg-card p-6 transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:shadow-[0_0_20px_rgba(255,0,60,0.2)]"
            >
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 z-20 h-2 w-2 border-t-2 border-l-2 border-primary group-hover:border-secondary" />
              <div className="absolute top-0 right-0 z-20 h-2 w-2 border-t-2 border-r-2 border-primary group-hover:border-secondary" />
              <div className="absolute bottom-0 left-0 z-20 h-2 w-2 border-b-2 border-l-2 border-primary group-hover:border-secondary" />
              <div className="absolute right-0 bottom-0 z-20 h-2 w-2 border-r-2 border-b-2 border-primary group-hover:border-secondary" />

              {/* Group Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 text-primary transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                  {getIcon(group.icon)}
                </div>
                <h3 className="font-heading text-lg font-black tracking-tighter text-foreground uppercase transition-colors group-hover:text-accent">
                  {group.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex-1 space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    {/* Label & Value */}
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="font-bold tracking-tighter text-muted-foreground uppercase transition-colors group-hover:text-foreground">
                        {skill.name}
                      </span>
                      <span className="font-bold text-primary group-hover:text-accent">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full overflow-hidden rounded-none border border-primary/30 bg-muted/60 transition-all duration-300 group-hover:border-accent/20">
                      {/* Interactive dynamic color bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.1,
                        }}
                        className="h-full rounded-none bg-gradient-to-r from-primary to-secondary group-hover:from-accent group-hover:to-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
