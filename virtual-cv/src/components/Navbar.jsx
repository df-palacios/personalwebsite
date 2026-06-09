import { useLanguage } from "../context/LanguageContext"
import { useTheme } from "../context/ThemeContext"
import { translations } from "../translations"

function Navbar() {
  const { language, toggleLanguage } = useLanguage()
  const { darkMode, toggleTheme } = useTheme()

  const t = translations[language]

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
              {t.navbarSubtitle}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">

            <a
              href="#experience"
              className={`transition ${
                darkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {t.experience}
            </a>

            <a
              href="#skills"
              className={`transition ${
                darkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {t.skills}
            </a>

            <a
              href="#education"
              className={`transition ${
                darkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {t.education}
            </a>

            <a
              href="#contact"
              className={`transition ${
                darkMode
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {t.contact}
            </a>

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

            <a
              href={
                language === "en"
                  ? "/CV_Diego_Palacios_EN.pdf"
                  : "/CV_Diego_Palacios_ES.pdf"
              }
              download={
                language === "en"
                  ? "Diego_Palacios_Resume.pdf"
                  : "Diego_Palacios_CV.pdf"
              }
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {t.resumePdf}
            </a>

          </div>

        </nav>

      </div>
    </header>
  )
}

export default Navbar