function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm rounded-full px-8 py-4">
          <div className="flex justify-between items-center">

            <a
              href="#"
              className="font-semibold text-gray-900"
            >
              Diego Palacios
            </a>

            <div className="hidden md:flex gap-8 text-sm text-gray-600">

              <a href="#experience" className="hover:text-blue-600 transition">
                Experience
              </a>

              <a href="#skills" className="hover:text-blue-600 transition">
                Skills
              </a>

              <a href="#education" className="hover:text-blue-600 transition">
                Education
              </a>

              <a href="#contact" className="hover:text-blue-600 transition">
                Contact
              </a>

            </div>

          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar