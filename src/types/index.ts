export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  category: string
  image: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  year: number
}

export interface Skill {
  name: string
  level: number // 0–100
  category: 'frontend' | 'backend' | 'softskills' 
  color: string
}

export interface SkillGroup {
  category: string
  icon: string
  skills: Skill[]
}

export interface Experience {
  id: string
  company: string
  role: string
  duration: string
  startDate: string
  endDate: string
  description: string[]
  technologies: string[]
  logo?: string
  type: 'full-time' | 'contract' | 'freelance'
}

export interface Education {
  id: string
  degree: string
  institution: string
  year: string
  location: string
  description: string[]
}

export interface Testimonial {
  id: string
  author: string
  role: string
  company: string
  avatar?: string
  content: string
  rating: number
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}
