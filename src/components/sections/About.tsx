import { motion } from "framer-motion"
import { Award, Code2, MapPin, Download, GraduationCap } from "lucide-react"
import { OWNER } from "@/utils/constants"
import avatarSvg from "@/assets/avatar.svg"

export function About() {
  const stats = [
    { label: "Experience", value: "5+", icon: Award },
    { label: "Projects", value: "15+", icon: Code2 },
    { label: "Location", value: "YOG,ID", icon: MapPin },
  ]

  const highlights = [
    {
      title: "Full-Stack Engineering",
      desc: "Expertise in modern JavaScript/TypeScript, React/Next.js and backend development.",
      icon: Code2,
    },
    {
      title: "Product-Focused Mindset",
      desc: "Close collaboration with product & design teams to build user-centered high-performance platforms.",
      icon: Award,
    },
    {
      title: "Continuous Education",
      desc: "Constantly tracking emerging technologies, AI integrations, performance audits and engineering standards.",
      icon: GraduationCap,
    },
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent py-20 md:py-28"
    >
      {/* Cyber Backdrop Decoration */}
      <div className="absolute top-0 right-0 -z-10 h-full w-1/3 bg-primary/5 opacity-50 blur-[120px]" />

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
            [ 01_IDENTITY_FILE ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl font-black tracking-tighter text-foreground uppercase sm:text-4xl"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 h-1 bg-secondary shadow-[0_0_10px_var(--secondary)]"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Visual Column - Biometric Frame */}
          <div className="group relative flex flex-col items-center justify-center lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square w-full max-w-sm overflow-hidden border-2 border-primary bg-card p-2 shadow-[0_0_30px_rgba(255,0,60,0.1)] hover:border-accent hover:bg-accent/5"
            >
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 z-20 h-3 w-3 border-t-2 border-l-2 border-primary group-hover:border-secondary" />
              <div className="absolute top-0 right-0 z-20 h-3 w-3 border-t-2 border-r-2 border-primary group-hover:border-secondary" />
              <div className="absolute bottom-0 left-0 z-20 h-3 w-3 border-b-2 border-l-2 border-primary group-hover:border-secondary" />
              <div className="absolute right-0 bottom-0 z-20 h-3 w-3 border-r-2 border-b-2 border-primary group-hover:border-secondary" />

              <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-muted/30 transition-transform duration-500 group-hover:scale-105">
                {/* Scanline Effect */}

                {/* Background Grid */}
                <div className="absolute inset-0 bg-primary/10 opacity-20 group-hover:bg-accent/10" />

                {/* <span className="font-mono text-8xl font-black tracking-tighter text-primary/10 uppercase select-none">
                  {OWNER.name.split(" ")[0]}
                </span> */}

                {/* Biometric Avatar */}
                <img
                  src={avatarSvg}
                  alt="Biometric Avatar"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-screen transition-opacity duration-300 select-none group-hover:opacity-80"
                  style={{
                    filter:
                      "invert(1) sepia(1) saturate(2.8) hue-rotate(240deg) brightness(1) contrast(1) grayscale(0.5) ",
                  }}
                />

                {/* Data Badge */}
                <div className="absolute right-4 bottom-4 left-4 border border-primary/40 bg-background/80 p-4 text-left group-hover:border-accent">
                  <div className="font-mono text-xs font-bold tracking-widest text-primary uppercase group-hover:text-accent">
                    SESS_USER: {OWNER.name}
                  </div>
                  <div className="text-xxs mt-0.5 font-mono tracking-tighter text-muted-foreground uppercase group-hover:text-foreground">
                    LOC: INDONESIA // Node_S-01
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text/Bio Column */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="font-heading text-xl font-black tracking-tighter text-foreground uppercase sm:text-2xl">
                {`> System_Intro: Hello_World`}
              </h3>
              <p className="text-justify font-mono text-base leading-relaxed text-muted-foreground">
                <span className="font-bold text-primary">BIO:</span> {OWNER.bio}
              </p>
            </motion.div>

            {/* Quick Metrics - System Modules */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex flex-col items-center gap-1 border-2 border-primary bg-card p-4 text-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,60,0.2)] sm:items-start sm:text-left"
                  >
                    <div className="mb-1 flex h-8 w-8 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
                      <Icon size={16} />
                    </div>
                    <span className="font-heading text-xl leading-none font-black text-foreground sm:text-2xl">
                      {stat.value}
                    </span>
                    <span className="text-xxs mt-0.5 font-mono tracking-widest text-primary uppercase">
                      {stat.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            {/* Structured Highlights - Data Rows */}
            <div className="space-y-4">
              {highlights.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group flex gap-4 border border-primary/20 bg-card/50 p-4 transition-all duration-300 hover:border-accent hover:bg-accent/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 text-primary transition-all duration-20 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                      <Icon size={18} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold tracking-tighter text-foreground uppercase group-hover:text-accent">
                        {item.title}
                      </h4>
                      <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Action Download */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2"
            >
              <a
                href={OWNER.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary bg-primary px-5 py-2.5 text-sm font-black tracking-widest text-background uppercase transition-all duration-200 hover:bg-transparent hover:text-primary active:scale-95"
              >
                <Download size={15} />
                Download_Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
