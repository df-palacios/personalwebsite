function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur border-b border-white/5 bg-[#0b0f19]/80">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-sm text-gray-400">
          Diego Palacios
        </span>

        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#education" className="hover:text-white transition">
            Education
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar