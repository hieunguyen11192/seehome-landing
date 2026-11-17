import { Hero } from './components/Hero'
import { Nav } from './components/Nav'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  )
}
