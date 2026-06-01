function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        <nav className="h-20 flex justify-between items-center">

          <div>
            <div className="font-semibold text-gray-900">
              Diego Palacios
            </div>

            <div className="text-xs text-gray-500">
              QA Automation Engineer • Full-Stack Developer
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">

            <a
              href="#experience"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Experience
            </a>

            <a
              href="#skills"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Skills
            </a>

            <a
              href="#education"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Education
            </a>

            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Contact
            </a>

            <a
              href="/CV_Diego_Palacios.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Resume PDF
            </a>

          </div>

        </nav>

      </div>
    </header>
  )
}

export default Navbar