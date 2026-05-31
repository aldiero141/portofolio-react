import { NAV_LINKS, OWNER } from "@/utils/constants"
import { SocialLinks } from "@/components/shared/SocialLinks"
import { Logo } from "../shared/Logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t-2 border-primary bg-card py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <a href="#home" className="group flex w-fit items-center gap-2">
              <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden border-2 border-primary bg-background transition-all duration-300 group-hover:shadow-[0_0_10px_var(--primary)]">
                <Logo className="text-primary" />
              </div>
              <span className="font-heading text-base font-black tracking-tighter text-foreground uppercase transition-colors group-hover:text-primary">
                {OWNER.name}
              </span>
            </a>
            <p className="max-w-sm font-mono text-sm leading-relaxed text-muted-foreground">
              {OWNER.tagline}
            </p>
            {OWNER.availability && (
              <div className="inline-flex items-center gap-2 rounded-none border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-xs tracking-widest text-accent uppercase">
                {OWNER.availability}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-primary uppercase">
              Sys_Nav
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-sm tracking-tighter text-muted-foreground uppercase transition-colors duration-200 hover:text-secondary"
                  >
                    {`> ${link.label}`}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Panel */}
          <div className="space-y-4">
            <h4 className="mb-4 font-mono text-xs font-bold tracking-widest text-primary uppercase">
              Net_Node
            </h4>
            <div className="space-y-4">
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                Establish link via secure channel.
              </p>
              <SocialLinks
                variant="default"
                showLabels={true}
                iconSize={16}
                className="flex-col items-start gap-2"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary/30 pt-8 sm:flex-row">
          <p className="text-center font-mono text-xs text-muted-foreground sm:text-left">
            <span className="text-primary">ROOT@SESS:</span> ~/portfolio{" "}
            {`© ${currentYear} ${OWNER.name}`}
          </p>
          <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 animate-pulse bg-accent" />
            <span className="text-[10px] tracking-widest uppercase">
              System_Status: Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
