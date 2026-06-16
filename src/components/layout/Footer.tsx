import { OWNER } from "@/utils/constants"
import { SocialLinks } from "@/components/shared/SocialLinks"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-primary/15 bg-[#FFF8F1]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-5 py-12 md:flex-row md:px-gutter">
        <span className="font-label-caps text-label-caps text-primary">
          © {currentYear} {OWNER.name.toUpperCase()}
        </span>
        <div className="flex items-center gap-8">
          <SocialLinks
            variant="default"
            showLabels={false}
            iconSize={18}
            className="flex-row gap-6"
          />
        </div>
      </div>
    </footer>
  )
}