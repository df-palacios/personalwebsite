import { useLanguage } from "../context/LanguageContext"
import { useTheme } from "../context/ThemeContext"

function Navbar() {
  const { language, toggleLanguage } = useLanguage()
  const { darkMode, toggleTheme } = useTheme()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        darkMode
          ? "bg-slate-900/95 border-slate-700"
          : "bg-white/95 border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">

        <nav className="h-20 flex justify-between items-center">

          {/* LEFT */}
          <div>
            <div
              className={`font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Diego Palacios
            </div>

            <div
              className={`text-xs ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              QA Automation Engineer • Full-Stack Developer
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-6">

            <a
              href="#experience"
              className={`transition ${
                darkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {language === "en"
                ? "Experience"
                : "Experiencia"}
            </a>

            <a
              href="#skills"
              className={`transition ${
                darkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {language === "en"
                ? "Skills"
                : "Habilidades"}
            </a>

            <a
              href="#education"
              className={`transition ${
                darkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {language === "en"
                ? "Education"
                : "Educación"}
            </a>

            <a
              href="#contact"
              className={`transition ${
                darkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {language === "en"
                ? "Contact"
                : "Contacto"}
            </a>

            {/* LANGUAGE BUTTON */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition ${
                darkMode
                  ? "bg-slate-800 border-slate-600 hover:bg-slate-700"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              <img
                src={
                  language === "en"
                    ? "/usaFlag.png"
                    : "/spainFlag.png"
                }
                alt="Language"
                className="w-5 h-5 rounded-sm"
              />

              <span
                className={`text-sm ${
                  darkMode
                    ? "text-gray-200"
                    : "text-gray-700"
                }`}
              >
                {language === "en" ? "EN" : "ES"}
              </span>
            </button>

            {/* THEME BUTTON */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-lg border transition ${
                darkMode
                  ? "bg-slate-800 border-slate-600 hover:bg-slate-700"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* PDF */}
            <a
              href="/CV_Diego_Palacios.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {language === "en"
                ? "Resume PDF"
                : "CV PDF"}
            </a>

          </div>

        </nav>

      </div>
    </header>
  )
}

export default Navbar