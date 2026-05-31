import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  // Sun,
  // Moon
} from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_LINKS, OWNER } from "@/utils/constants"
// import { useTheme } from "@/components/theme-provider"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

export function Header() {
  // const { theme, setTheme } = useTheme()
  const { isAtTop } = useScrollPosition()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Use the links' href to find active section IDs (e.g. #home -> id="home")
  const sectionIds = NAV_LINKS.map((link) => link.href)
  const activeSection = useIntersectionObserver(sectionIds)

  // const toggleTheme = () => {
  //   setTheme(theme === "dark" ? "light" : "dark")
  // }

  // Anim configurations
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b transition-all duration-500",
        isAtTop
          ? "border-transparent bg-transparent py-5"
          : "border-primary bg-card/90 py-3 shadow-[0_0_15px_rgba(255,0,60,0.2)] backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2">
          <span className="group/name font-heading text-lg font-black tracking-tighter text-foreground uppercase transition-colors">
            {OWNER.name.split(" ")[0]}
            <span className="animate-neon-flicker font-mono text-xl font-black text-primary group-hover/name:text-secondary">
              .
            </span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0 border border-primary/30 bg-background/50 p-1 transition-all duration-300 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              activeSection === link.href.substring(1) ||
              (activeSection === "" && link.href === "#home")
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-1.5 text-xs font-bold tracking-widest uppercase transition-all duration-300",
                  isActive
                    ? "text-secondary"
                    : "text-muted-foreground hover:text-secondary"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 z-[-10] bg-primary/80 shadow-[0_0_10px_var(--primary)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="group relative flex h-9 w-9 cursor-pointer items-center justify-center border border-primary/40 bg-background text-foreground transition-all duration-300 hover:border-primary hover:text-primary active:scale-95"
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon
                  size={18}
                  className="text-indigo-400 group-hover:text-primary"
                />
              )}
            </motion.div>
          </button> */}

          {/* Contact Button Desktop */}
          <a
            href="#contact"
            className="hidden items-center justify-center border-2 border-primary bg-primary px-4 py-2 text-xs font-black tracking-widest text-background uppercase transition-all duration-200 hover:border-primary hover:bg-primary/20 hover:text-primary active:scale-95 sm:inline-flex"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center border border-primary/40 bg-background text-foreground transition-all duration-300 hover:text-primary md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full right-0 left-0 overflow-hidden border-b border-primary bg-card/95 shadow-xl backdrop-blur-lg md:hidden"
          >
            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col gap-4 p-6"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  activeSection === link.href.substring(1) ||
                  (activeSection === "" && link.href === "#home")
                return (
                  <motion.a
                    variants={itemVariants}
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between border border-primary/20 px-4 py-3 text-sm font-bold tracking-widest uppercase transition-colors",
                      isActive
                        ? "border-primary bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 animate-pulse bg-primary" />
                    )}
                  </motion.a>
                )
              })}

              <motion.div
                variants={itemVariants}
                className="border-t border-primary/30 pt-4"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center border-2 border-primary bg-primary px-4 py-3 text-sm font-black tracking-widest text-background uppercase transition-colors hover:bg-transparent hover:text-primary"
                >
                  Let's Talk
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
