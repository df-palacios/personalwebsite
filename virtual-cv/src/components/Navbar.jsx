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
    { href: "#projects", label: t.projects },
    { href: "#contact", label: t.contact },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        darkMode
          ? "bg-slate-900 md:bg-slate-900/95 md:backdrop-blur-md border-slate-700"
          : "bg-white md:bg-white/95 md:backdrop-blur-md border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <nav className="h-14 md:h-20 flex justify-between items-center">

          <div className="min-w-0 shrink">
            <div
              className={`font-semibold text-sm md:text-base truncate ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Diego Palacios
            </div>

            <div
              className={`hidden w360:block lg:hidden xl:block text-[10px] md:text-xs whitespace-nowrap truncate ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {t.navbarSubtitle}
            </div>
          </div>

          <div className="hidden lg:flex shrink-0 items-center gap-4 xl:gap-5">

            <a
              href="#experience"
              className={`text-sm whitespace-nowrap transition ${
                darkMode
                  ? "text-slate-300 hover:text-blue-400"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {t.experience}
            </a>

            <a
              href="#skills"
              className={`text-sm whitespace-nowrap transition ${
                darkMode
                  ? "text-slate-300 hover:text-blue-400"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {t.skills}
            </a>

            <a
              href="#education"
              className={`text-sm whitespace-nowrap transition ${
                darkMode
                  ? "text-slate-300 hover:text-blue-400"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {t.education}
            </a>

            <a
              href="#projects"
              className={`text-sm whitespace-nowrap transition ${
                darkMode
                  ? "text-slate-300 hover:text-blue-400"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {t.projects}
            </a>

            <a
              href="#contact"
              className={`text-sm whitespace-nowrap transition ${
                darkMode
                  ? "text-slate-300 hover:text-blue-400"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {t.contact}
            </a>

            <button
              onClick={toggleLanguage}
              className={`inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap px-3 rounded-lg border transition ${
                darkMode
                  ? "bg-slate-800 border-slate-700 hover:bg-slate-700"
                  : "bg-white border-slate-300 hover:bg-slate-50"
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
                    ? "text-slate-200"
                    : "text-slate-700"
                }`}
              >
                {language === "en" ? "EN" : "ES"}
              </span>
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className={`inline-flex w-10 h-10 shrink-0 items-center justify-center rounded-lg border transition ${
                darkMode
                  ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-amber-300"
                  : "bg-white border-slate-300 hover:bg-slate-50 text-slate-700"
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
              className="inline-flex h-10 shrink-0 items-center whitespace-nowrap rounded-lg bg-blue-600 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
            >
              {t.resumePdf}
            </a>

          </div>

          {/* Controles móviles: idioma + modo oscuro quedan siempre visibles junto al menú */}
          <div className="flex lg:hidden items-center gap-1.5">

            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className={`flex items-center justify-center gap-1 h-9 px-2 rounded-md border transition ${
                darkMode
                  ? "bg-slate-800 border-slate-600"
                  : "bg-white border-slate-300"
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
                  darkMode ? "text-slate-200" : "text-slate-700"
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
                  : "bg-white border-slate-300 text-slate-700"
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
                  : "bg-white border-slate-300 text-slate-900"
              }`}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>

        </nav>

      </div>

      {/* Mobile menu panel: solo navegación + descarga de CV */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-200 ease-out border-t ${
          menuOpen ? "max-h-96" : "max-h-0"
        } ${
          darkMode
            ? "bg-slate-900 border-slate-700"
            : "bg-white border-slate-200"
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
                    : "border-t border-slate-100"
                  : ""
              } ${
                darkMode
                  ? "text-slate-200 active:bg-slate-800"
                  : "text-slate-700 active:bg-slate-100"
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
