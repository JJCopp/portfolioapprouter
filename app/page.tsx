import About from '@/components/about'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import SectionDivider from '@/components/section-divider'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4">
      
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <p>body</p>    
      
    </main>
  )
}
