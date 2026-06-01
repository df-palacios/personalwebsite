import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="bg-[#f8fafc] text-gray-900 min-h-screen">
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