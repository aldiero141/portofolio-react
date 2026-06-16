import type { NavLink, Project, Experience, Testimonial, SkillGroup, Education } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  // { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/aldiero141', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/aldo-aldiero', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://youtu.be/Uq7kyf1T_lk?list=RDUq7kyf1T_lk', icon: 'x' },
  { label: 'Email', href: 'mailto:aldoaldiero.work@gmail.com', icon: 'mail' },
]

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aikrut',
    description: 'B2B AI-driven Video Interview System and high-performance analytics dashboards.',
    longDescription: 'Migrated legacy React (2017) to Next.js 15, developing a high-performance AI-driven Interview system and custom admin/user dashboards. Designed and implemented a modern user experience for the interview process.',
    tags: ['Next.js', 'TypeScript', 'MySQL', 'Websocket', 'ShadcnUI', 'Tailwind'],
    category: 'SaaS',
    image: '/projects/aikrut.webp',
    featured: true,
    year: 2025,
  },
  {
    id: '2',
    title: 'Skillana',
    description: 'Assessment platform for candidates, that provide the interviews for workers.',
    longDescription: ' I orchestrated the migration of a legacy 2017 React codebase to Next.js, resolving critical heritage bugs and improving stability, performance, and developer experience.',
    tags: ['Next.js', 'React', 'MySQL', 'TypeScript', "Jest", "Tailwind"],
    category: 'SaaS',
    image: '/projects/skillana.webp',
    featured: false,
    year: 2025,
  },
  {
    id: '3',
    title: 'ESUITE (eDOT)',
    description: 'Distribution Management System (DMS) dashboards & analytics dashboard.',
    longDescription: 'Maintained and expanded DMS dashboards. Implemented Firebase Remote Config for feature flagging and enhanced reliability via Jest unit testing. Optimized API consumption for faster data fetching.',
    tags: ['Next.js', 'React', 'Firebase', 'Jest', 'TypeScript', "ShadcnUI","MongoDB"],
    category: 'SaaS',
    image: '/projects/esuite.webp',
    featured: true,
    year: 2026,
  },
  {
    id: '4',
    title: 'Hermes (eDOT)',
    description: 'Company configuration dashboards for esuite features.',
    longDescription: 'Maintained and expanded Company configuration dashboards. Implemented Firebase Remote Config for feature flagging and enhanced reliability via Jest unit testing. Optimized API consumption for faster data fetching.',
    tags: ['Next.js', 'React', 'Firebase', 'Jest', 'TypeScript', "ShadcnUI" ],
    category: 'SaaS',
     image: '/projects/hermes.webp',
    featured: true,
    year: 2026,
  },
  {
    id: '5',
    title: 'BSI Hasanah Credit Card',
    description: 'Credit Card Form Registration and analytics flow with identity verification for a bank.',
    longDescription: 'Built a secure registration and analytics flow featuring Facial Recognition and ID Card OCR for automated identity verification, adhering to strict financial security standards.',
    tags: ['Nuxt.js', 'Vue 2', "Vitest", 'OCR', 'Facial Recognition'],
    category: 'Finance',
    image: '/projects/bsi.webp',
    featured: true,
    year: 2023,
  },
  {
    id: '6',
    title: 'HAWKEYE Internal Dashboard',
    description: 'Dynamic enterprise management system for Merchants and Channels.',
    longDescription: 'Developed a dynamic enterprise management system using Vue 3 and Nuxt.js with reusable data-fetching logic for managing large-scale merchant and channel data.',
    tags: ['Nuxt.js', 'Vue 3', 'TypeScript', "Vitest", "Tailwind"],
    category: 'Finance',
    image: '',
    featured: false,
    year: 2024,
  },
  {
    id: '7',
    title: 'CIMB Event Portal',
    description: 'High-traffic event landing page, registration form & admin dashboard.',
    longDescription: 'Developed a high-traffic landing page and admin dashboard. Provided real-time bug fixing and complex price calculation logic during a live 3-day high-stakes event period.',
    tags: ['Nuxt.js', 'Vue 2'],
    category: 'Finance',
    image: '',
    featured: false,
    year: 2022,
  },
  {
    id: '8',
    title: 'HMS Document Signing',
    description: 'Document signing portal and data analytics dashboard.',
    longDescription: 'Architected a complete document signing landing page and data analytics dashboard from the ground up using Vue.js and Nuxt.js, featuring dynamic form inputs.',
    tags: ['Nuxt.js', 'Vue 2'],
    category: 'Finance',
    image: '/projects/hms.webp',
    featured: false,
    year: 2022,
  },
  {
    id: '9',
    title: 'Privy Customization Dashboard',
    description: 'CMS-driven dashboard for dynamic project styling for each companies.',
    longDescription: 'Maintained and expanded a CMS-driven dashboard allowing for dynamic styling and form management across multiple signing document projects, bridging the gap between design and production.',
    tags: ['Nuxt.js', 'Vue 2', 'Vuetify', 'TypeScript'],
    category: 'Finance',
    image: '',
    featured: false,
    year: 2022,
  },
  {
    id: '10',
    title: 'Prosehat',
    description: 'Healthcare and wellness platform.',
    longDescription: 'Revamped the healthcare company profile and user/admin dashboards using React, Vite, and ShadcnUI. Implemented React Hook Form for validation and Midtrans for payment processing.',
    tags: ['Laravel','React', 'Vite', 'Tailwind CSS', 'ShadcnUI', 'Midtrans', ],
    category: 'Health',
    image: '/projects/prosehat.webp',
    featured: true,
    year: 2025,
  },
  {
    id: '11',
    title: 'LingoTalk & LingoJunior',
    description: 'High-performance landing pages and IELTS Exam portal.',
    longDescription: 'Engineered high-performance landing pages and an IELTS Exam page using Svelte, focusing on extreme speed, minimal bundle size, and highly responsive user experience.',
    tags: ['Svelte', "Node.js", "MongoDB", "Tailwind"],
    category: 'Education',
    image: '/projects/lingotalk.webp',
    featured: false,
    year: 2021,
  },
  {
    id: '12',
    title: 'Android Face Liveness App',
    description: 'Camera-based face detection application for university thesis.',
    longDescription: 'Researched and developed a camera-based face liveness & detection application using Java and Python for university thesis, focusing on real-time image processing for a login and registartion feature.',
    tags: ['Java', 'Python', 'Android Studio', "Tensorflow", "OpenCV"],
    category: 'Application',
    image: '/projects/app.webp',
    featured: false,
    year: 2021,
  },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend Tools',
    icon: 'monitor',
    skills: [
      { name: 'Next.js', level: 95, category: 'frontend', color: '#FFFFFF' },
      { name: 'Nuxt.js', level: 90, category: 'frontend', color: '#00C1DE' },
      { name: 'SvelteKit', level: 70, category: 'frontend', color: '#FF3E00' },
      { name: 'React', level: 95, category: 'frontend', color: '#61DAFB' },
      { name: 'Vue.js', level: 90, category: 'frontend', color: '#42B883' },
      { name: 'Svelte', level: 70, category: 'frontend', color: '#FF3E00' },
      { name: 'Javascript/Typescript', level: 95, category: 'frontend', color: '#3178C6' },
      { name: 'Tailwind', level: 95, category: 'frontend', color: '#06B6D4' },
    ],
  },
  {
    category: 'Backend Tools',
    icon: 'wrench',
    skills: [
      { name: 'Laravel', level: 70, category: 'backend', color: '#ED8B00' },
      { name: 'Express.js', level: 80, category: 'backend', color: '#000000' },
      { name: 'Node.js', level: 80, category: 'backend', color: '#339933' },
      { name: 'PrismaORM', level: 80, category: 'backend', color: '#ED8B00' },
      { name: 'PostgresSQL', level: 70, category: 'backend', color: '#ED8B00' },
      { name: 'Supabase', level: 80, category: 'backend', color: '#ED8B00' },
      { name: 'MySQL', level: 70, category: 'backend', color: '#ED8B00' },
      { name: 'PHP', level: 70, category: 'backend', color: '#777BB4' },

    ],
  },
  {
    category: 'Soft Skills',
    icon: 'users',
    skills: [
      { name: 'Communication', level: 90, category: 'softskills', color: '#A259FF' },
      { name: 'Problem-solving', level: 95, category: 'softskills', color: '#A259FF' },
      { name: 'Critical thinking', level: 95, category: 'softskills', color: '#A259FF' },
      { name: 'Leadership', level: 80, category: 'softskills', color: '#A259FF' },
      { name: 'Project Management', level: 80, category: 'softskills', color: '#A259FF' },
      { name: 'API Integration', level: 90, category: 'softskills', color: '#A259FF' },
      { name: 'SEO Optimization', level: 90, category: 'softskills', color: '#A259FF' },
      { name: 'Database Relations', level: 90, category: 'softskills', color: '#A259FF' },
      { name: 'Version Control', level: 90, category: 'softskills', color: '#A259FF' },
    ],
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'PT. Elektronik Distribusi Otomatisasi Terkemuka',
    role: 'Frontend Engineer',
    duration: 'Dec 2025 – Present',
    startDate: '2025-12',
    endDate: 'present',
    type: 'full-time',
    description: [
      'Engineered scalable web platform features using Next.js and TypeScript, improving the developer experience and reducing time-to-market for new features.',
      'Increased code reliability and reduced production bugs by implementing a comprehensive unit testing suite using Jest.',
      'Optimized API consumption by redesigning parameter integration, resulting in more efficient data fetching and faster page load speeds.',
      'Collaborated within cross-functional squads to resolve critical frontend bottlenecks, enhancing overall application stability and user retention.'
    ],
    technologies: ['Next.js', 'TypeScript', 'Jest'],
  },
  {
    id: '2',
    company: 'UMG Idealab',
    role: 'Senior Frontend Engineer',
    duration: 'Dec 2024 – Dec 2025',
    startDate: '2024-12',
    endDate: '2025-12',
    type: 'full-time',
    description: [
      'Spearheaded frontend architecture for multiple high-profile projects (Widya Imersif, Genomic, Skilloka) using React and Next.js.',
      'Reduced technical debt by refactoring legacy functions into modern, modular components, improving maintainability and codebase scalability.',
      'Boosted organic reach and page speed by implementing advanced SEO strategies and performance optimization techniques.',
      'Led technical synchronization between analysts, backend, and mobile developers to ensure seamless feature integration.'
    ],
    technologies: ['React', 'Next.js'],
  },
  {
    id: '3',
    company: 'Privy',
    role: 'Intermediate Frontend Engineer',
    duration: 'Dec 2021 – Nov 2024',
    startDate: '2021-12',
    endDate: '2024-11',
    type: 'full-time',
    description: [
      'Developed and deployed complex enterprise web applications using Vue.js and Nuxt.js, adhering to strict security and performance standards.',
      'Bridged the gap between design and engineering by collaborating closely with UI/UX teams to implement pixel-perfect, responsive interfaces.',
      'Accelerated delivery cycles by utilizing Agile methodologies to manage multiple concurrent project streams.'
    ],
    technologies: ['Vue.js', 'Nuxt.js'],
  },
  {
    id: '4',
    company: 'LingoTalk',
    role: 'Junior Frontend Engineer',
    duration: 'Jan 2021 – Dec 2021',
    startDate: '2021-01',
    endDate: '2021-12',
    type: 'full-time',
    description: [
      'Architected interactive frontend interfaces using Svelte, contributing to a lightweight and highly responsive user experience.',
      'Rapidly resolved critical UI bugs and implemented feature enhancements based on user feedback.'
    ],
    technologies: ['Svelte'],
  },
]

export const EDUCATION: Education[] = [
  {
    id: '1',
    degree: "Bachelor's degree (S1), Information Technology",
    institution: 'Universitas Atma Jaya Yogyakarta',
    year: '2021',
    location: 'Yogyakarta, Indonesia',
    description: [
      'Won 3rd place in university programming competition in 2017.',
      'Member of a steering committee for a university event.'
    ],
  },
]

export const TESTIMONIALS: Testimonial[] = []

export const OWNER = {
  name: 'Aldo Aldiero',
  title: 'Fullstack Engineer',
  tagline: 'FullStack Engineer with 5+ years of experience designing and building scalable, performant web applications from frontend interfaces to backend systems.',
  bio: 'Architecture is the balance of logic, efficiency, and human intent. As a Fullstack Engineer with 5+ years of experience, I build scalable, high-performance web applications using Next.js, Nuxt.js, and Laravel.\n\n I specialize in transforming complex requirements into intuitive, user-focused experiences while maintaining performance, scalability, and code quality. Having improved application performance by up to 40% and delivered features that drive engagement, I am passionate about creating software that is both technically robust and meaningful to the people who use it.',
  location: 'Yogyakarta, Indonesia',
  email: 'aldoaldiero.work@gmail.com',
  availability: 'Open to opportunities',
  resumeUrl: '/resume.pdf',
}