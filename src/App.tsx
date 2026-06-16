import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"
import { Experience } from "@/components/sections/Experience"
// import { Education } from "@/components/sections/Education"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/layout/Footer"

export function App() {
  return (
    <div className="min-h-svh font-sans text-foreground antialiased">
      {/* Dynamic Header */}
      <Header />

      {/* Main Single Page Sections */}
      <main>
        {/* Hero Landing */}
        <Hero />

        {/* Detailed Biography */}
        <About />

        {/* Selected Portfolio Works */}
        <Projects />

        {/* Skill Matrix and Stack */}
        <Skills />

        {/* Vertical Timeline Journey */}
        <Experience />

        {/* Academic Path */}
        {/* <Education /> */}

        {/* Multi-channel Connection */}
        <Contact />
      </main>

      {/* Styled Footer */}
      <Footer />
    </div>
  )
}