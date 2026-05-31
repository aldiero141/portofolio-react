import { motion } from "framer-motion"
import { ArrowRight, FileText, ArrowDown } from "lucide-react"
import { OWNER } from "@/utils/constants"
import { SocialLinks } from "@/components/shared/SocialLinks"
import { Logo } from "@/components/shared/Logo"

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
      className="relative mt-8 flex min-h-svh items-center justify-center overflow-hidden bg-transparent lg:mt-0"
    >
      {/* Cyber HUD Frame - Top Left */}
      <div className="absolute top-10 left-10 z-20 hidden md:block">
        <div className="h-12 w-12 border-t-2 border-l-2 border-primary opacity-50" />
        <span className="absolute top-[-4px] left-18 animate-pulse font-mono text-[10px] tracking-tighter text-primary uppercase">
          System_Active // 0x44A1
        </span>
      </div>

      {/* Cyber HUD Frame - Bottom Right */}
      <div className="absolute right-10 bottom-10 z-20 hidden md:block">
        <div className="h-12 w-12 border-r-2 border-b-2 border-secondary opacity-50" />
        <span className="absolute right-12 bottom-[-2px] animate-pulse font-mono text-[10px] tracking-tighter text-secondary uppercase">
          Secure_Link // Stable
        </span>
      </div>

      <div className="z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 py-12 md:flex-row md:gap-16 md:px-8 md:py-24">
        {/* Content Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left"
        >
          {/* Greeting Badge */}
          <motion.div
            variants={itemVariants}
            className="relative inline-flex items-center gap-2 border border-secondary bg-secondary/10 px-4 py-1.5 font-mono text-xs font-bold tracking-widest text-secondary uppercase shadow-[0_0_10px_rgba(252,238,10,0.3)]"
          >
            {/* <span className="relative mr-2 flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-secondary" />
              <span className="relative rounded-full bg-secondary" />
            </span> */}
            <span>Identity Verified: {OWNER.name}</span>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="relative text-4xl leading-[1.1] font-black tracking-tighter text-foreground uppercase sm:text-6xl md:text-8xl">
              <span className="block text-foreground">Crafting</span>
              <span className="animate-neon-flicker block text-primary">
                Digital
              </span>
              <span className="block text-foreground">Experiences</span>
            </h1>
            <div className="h-1 w-24 bg-primary shadow-[0_0_10px_var(--primary)]" />
            <p className="max-w-xl font-mono text-lg font-bold tracking-wide text-secondary uppercase">
              {OWNER.title}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="max-w-lg font-mono text-base leading-relaxed text-muted-foreground"
          >
            {OWNER.tagline}
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex w-full flex-wrap items-center justify-center gap-6 md:justify-start"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden border-2 border-primary bg-primary px-8 py-3 text-sm font-black tracking-widest text-background uppercase transition-all duration-200 hover:bg-transparent hover:text-primary active:scale-95"
            >
              <span className="relative z-10">View Work</span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform duration-200 group-hover:translate-x-1"
              />
              <div className="absolute inset-0 origin-left scale-x-0 bg-primary opacity-20 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
            <a
              href={OWNER.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 border-2 border-white/20 bg-transparent px-8 py-3 text-sm font-bold tracking-widest text-foreground uppercase transition-all duration-200 hover:border-secondary hover:text-secondary active:scale-95"
            >
              <FileText size={16} />
              Resume
            </a>
          </motion.div>

          {/* Social Links floating panel */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 pt-6"
          >
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase opacity-70">
              External_Nodes
            </span>
            <div className="h-px w-12 bg-primary/30" />
            <SocialLinks variant="icon" iconSize={18} />
          </motion.div>
        </motion.div>

        {/* Hero Illustration Column */}

        {/* Logo Emblem */}
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="relative flex hidden aspect-square w-full max-w-md flex-1 animate-pulse items-center justify-center md:aspect-auto md:max-w-none lg:flex"
        >
          <div className="absolute top-0 left-0 h-2.5 w-2.5 border-t-2 border-l-2 border-secondary" />
          <div className="absolute top-0 right-0 h-2.5 w-2.5 border-t-2 border-r-2 border-secondary" />
          <div className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b-2 border-l-2 border-secondary" />
          <div className="absolute right-0 bottom-0 h-2.5 w-2.5 border-r-2 border-b-2 border-secondary" />

          {/* Scanning line for logo */}
          <div className="animate-scanline pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-secondary/40 opacity-0 group-hover:opacity-100" />

          <Logo
            className="h-full w-full text-secondary transition-all duration-500 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(252,238,10,0.8)]"
            fillColor="currentColor"
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-1.5 lg:bottom-8"
      >
        <a
          href="#about"
          className="group flex flex-col items-center text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="text-xxs font-mono tracking-[0.4em] uppercase group-hover:animate-pulse">
            Initiate_Descent
          </span>
          <ArrowDown size={14} className="mt-1 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
