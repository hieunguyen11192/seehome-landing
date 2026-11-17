import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { ValueStrip } from './components/ValueStrip'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Process } from './components/Process'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ValueStrip />
        <Services />
        <Projects />
        <Process />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
