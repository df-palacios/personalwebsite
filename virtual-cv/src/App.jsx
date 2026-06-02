import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"

function App() {
  return (
    <div
      className="
      min-h-screen
      bg-slate-50
      text-slate-900
      transition-colors
      duration-300

      dark:bg-slate-950
      dark:text-slate-100
      "
    >
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}

export default App