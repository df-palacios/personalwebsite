import { useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"
import { useTheme } from "../context/ThemeContext"
import { translations } from "../translations"

function Navbar() {
  const { language, toggleLanguage } = useLanguage()
  const { darkMode, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const t = translations[language]

  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { href: "#experience", label: t.experience },
    { href: "#skills", label: t.skills },
    { href: "#education", label: t.education },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: t.contact },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        darkMode
          ? "bg-slate-900 md:bg-slate-900/95 md:backdrop-blur-md border-slate-700"
          : "bg-white md:bg-white/95 md:backdrop-blur-md border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <nav className="h-14 md:h-20 flex justify-between items-center">

          <div className="min-w-0">
            <div
              className={`font-semibold text-sm md:text-base truncate ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Diego Palacios
            </div>

            <div
              className={`hidden w360:block text-[10px] md:text-xs truncate ${
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

            <a href="#projects" className={`transition ${darkMode ? "text-gray-300 hover:text-blue-400":"text-gray-600 hover:text-blue-600"}`}>Projects</a>

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
              aria-label="Toggle dark mode"
              className={`w-10 h-10 flex items-center justify-center rounded-lg border transition ${
                darkMode
                  ? "bg-slate-800 border-slate-600 hover:bg-slate-700 text-yellow-300"
                  : "bg-white border-gray-200 hover:bg-gray-50 text-slate-700"
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
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

          {/* Controles móviles: idioma + modo oscuro quedan siempre visibles junto al menú */}
          <div className="flex md:hidden items-center gap-1.5">

            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className={`flex items-center justify-center gap-1 h-9 px-2 rounded-md border transition ${
                darkMode
                  ? "bg-slate-800 border-slate-600"
                  : "bg-white border-gray-300"
              }`}
            >
              <img
                src={
                  language === "en"
                    ? "/usaFlag.png"
                    : "/spainFlag.png"
                }
                alt="Language"
                className="w-4 h-4 rounded-[2px]"
              />

              <span
                className={`text-[11px] font-semibold leading-none ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {language === "en" ? "EN" : "ES"}
              </span>
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className={`flex items-center justify-center w-9 h-9 rounded-md border transition ${
                darkMode
                  ? "bg-slate-800 border-slate-600 text-yellow-300"
                  : "bg-white border-gray-300 text-slate-700"
              }`}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`flex items-center justify-center w-9 h-9 rounded-md border transition ${
                darkMode
                  ? "bg-slate-800 border-slate-600 text-white"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>

        </nav>

      </div>

      {/* Mobile menu panel: solo navegación + descarga de CV */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-200 ease-out border-t ${
          menuOpen ? "max-h-96" : "max-h-0"
        } ${
          darkMode
            ? "bg-slate-900 border-slate-700"
            : "bg-white border-gray-200"
        }`}
      >
        <div className="px-4 py-3 flex flex-col">

          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`py-3 text-[15px] font-medium ${
                i !== 0
                  ? darkMode
                    ? "border-t border-slate-800"
                    : "border-t border-gray-100"
                  : ""
              } ${
                darkMode
                  ? "text-gray-200 active:bg-slate-800"
                  : "text-gray-700 active:bg-gray-100"
              }`}
            >
              {link.label}
            </a>
          ))}

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
            onClick={closeMenu}
            className="mt-3 mb-2 text-center py-3 rounded-md bg-blue-600 text-white font-semibold text-sm"
          >
            {t.resumePdf}
          </a>

        </div>
      </div>
    </header>
  )
}

export default Navbar
