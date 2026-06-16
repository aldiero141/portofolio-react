import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_LINKS, OWNER } from "@/utils/constants"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

export function Header() {
  const { isAtTop } = useScrollPosition()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Use the links' href to find active section IDs (e.g. #home -> id="home")
  const sectionIds = NAV_LINKS.map((link) => link.href)
  const activeSection = useIntersectionObserver(sectionIds)

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
        "fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300",
        isAtTop
          ? "border-transparent bg-transparent py-5"
          : "border-primary/15 bg-background/95 py-3 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-container-max items-center justify-between px-gutter">
        {/* Logo */}
        <a href="#home" className="group flex items-center">
          <span
            className={cn(
              "font-headline-sm text-headline-sm font-bold tracking-tighter transition-colors uppercase",
              isAtTop ? "text-surface-bright" : "text-primary"
            )}
          >
            {OWNER.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              activeSection === link.href.substring(1) ||
              (activeSection === "" && link.href === "#home")
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-label-caps text-label-caps transition-all duration-200 pb-1",
                  isAtTop
                    ? isActive
                      ? "text-surface-bright border-b border-surface-bright"
                      : "text-on-primary-container/80 hover:text-surface-bright"
                    : isActive
                      ? "text-primary border-b border-primary"
                      : "text-on-surface-variant hover:text-primary"
                )}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Resume Button Desktop */}
          <a
            href={OWNER.resumeUrl}
            download="Alexander_Rivelino_Aldo_Aldiero_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden px-6 py-2 font-label-caps text-label-caps transition-all duration-300 sm:inline-flex rounded-none",
              isAtTop
                ? "border border-on-primary-container/30 text-surface-bright hover:bg-surface-bright hover:text-primary-container"
                : "bg-primary-container text-on-primary hover:opacity-80"
            )}
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "flex h-9 w-9 cursor-pointer items-center justify-center border transition-all duration-300 md:hidden rounded-none",
              isAtTop
                ? "border-on-primary-container/30 text-surface-bright hover:text-on-primary-container"
                : "border-primary/20 text-primary hover:text-primary-container"
            )}
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
            className={cn(
              "absolute top-full right-0 left-0 overflow-hidden border-b md:hidden",
              isAtTop
                ? "border-on-primary-container/10 bg-primary-container"
                : "border-primary/10 bg-background"
            )}
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
                      "flex items-center justify-between border px-4 py-3 font-label-caps text-label-caps tracking-widest uppercase transition-colors rounded-none",
                      isAtTop
                        ? isActive
                          ? "border-surface-bright/30 bg-surface-bright/10 text-surface-bright"
                          : "border-surface-bright/5 text-on-primary-container/80 hover:text-surface-bright"
                        : isActive
                          ? "border-primary/20 bg-primary-container/5 text-primary"
                          : "border-primary/5 text-on-surface-variant hover:text-primary"
                    )}
                  >
                    <span>{link.label}</span>
                  </motion.a>
                )
              })}

              <motion.div
                variants={itemVariants}
                className={cn(
                  "border-t pt-4",
                  isAtTop ? "border-on-primary-container/15" : "border-primary/15"
                )}
              >
                <a
                  href={OWNER.resumeUrl}
                  download="Alexander_Rivelino_Aldo_Aldiero_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "inline-flex w-full items-center justify-center px-4 py-3 font-label-caps text-label-caps tracking-widest uppercase transition-colors rounded-none",
                    isAtTop
                      ? "border border-on-primary-container/30 text-surface-bright hover:bg-surface-bright hover:text-primary-container"
                      : "bg-primary-container text-on-primary hover:opacity-80"
                  )}
                >
                  Resume
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
