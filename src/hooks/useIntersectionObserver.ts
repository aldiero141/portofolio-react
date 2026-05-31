import { useEffect, useState } from 'react'

export function useIntersectionObserver(
  selectors: string[],
  options?: IntersectionObserverInit
) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, options ?? { rootMargin: '-30% 0px -60% 0px' }) // Focus on center/top-ish of viewport

    selectors.forEach((selector) => {
      const el = document.querySelector(selector)
      if (el) observer.observe(el)
    })

    return () => {
      selectors.forEach((selector) => {
        const el = document.querySelector(selector)
        if (el) observer.unobserve(el)
      })
    }
  }, [selectors, options])

  return activeId
}
