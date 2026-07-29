import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div
      className="
      min-h-screen
      bg-slate-100
      text-slate-900
      transition-colors
      duration-300

      dark:bg-slate-950
      dark:text-slate-100
      "
    >
      <Navbar />

      {/*
        Columna de contenido: en escritorio se separa del fondo con bordes
        verticales y un fondo ligeramente distinto, dando profundidad y
        delimitando la lectura. En móvil ocupa todo el ancho (sin bordes).
      */}
      <main
        className="
        mx-auto
        w-full
        max-w-7xl
        bg-slate-50

        md:border-x
        md:border-slate-200
        md:shadow-[0_0_60px_rgba(15,23,42,0.05)]

        dark:bg-slate-900/40
        md:dark:border-slate-800
        md:dark:shadow-[0_0_60px_rgba(0,0,0,0.35)]

        transition-colors
        duration-300
        "
      >
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
