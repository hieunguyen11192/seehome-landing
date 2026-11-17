import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { ValueStrip } from './components/ValueStrip'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <ValueStrip />
        <Services />
        <Projects />
        <Process />
      </main>
    </div>
  )
}
