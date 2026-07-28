
import { useTheme } from "../context/ThemeContext"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations"

function Contact() {
  const { darkMode } = useTheme()
  const { language } = useLanguage()

  const t = translations[language]

  return (
    <footer
      id="contact"
      className={`py-8 md:py-12 mt-4 md:mt-8 border-t ${
        darkMode
          ? "border-slate-700"
          : "border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col gap-6 md:gap-8 items-center">

          <h2
            className={`text-xl md:text-2xl font-semibold ${
              darkMode
                ? "text-white"
                : "text-gray-900"
            }`}
          >
            {t.contact}
          </h2>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 md:gap-4 w-full sm:w-auto">

            <a
              href="mailto:ing.diegopalacios@outlook.com"
              className={`flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 text-sm md:text-base rounded-xl border transition ${
                darkMode
                  ? "bg-slate-800 border-slate-600 text-white"
                  : "bg-white border-gray-200 text-gray-900"
              }`}
            >
              <img src="/emailLogo.png" alt="" className="w-5 h-5" />
              <span>Email</span>
            </a>

            <a
              href="https://github.com/df-palacios"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 text-sm md:text-base rounded-xl border transition ${
                darkMode
                  ? "bg-slate-800 border-slate-600 text-white"
                  : "bg-white border-gray-200 text-gray-900"
              }`}
            >
              <img src="/githubLogo.png" alt="" className="w-5 h-5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/dfpalacios"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 text-sm md:text-base rounded-xl border transition ${
                darkMode
                  ? "bg-slate-800 border-slate-600 text-white"
                  : "bg-white border-gray-200 text-gray-900"
              }`}
            >
              <img src="/linkedinLogo.png" alt="" className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://wa.me/573137464587"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2 text-sm md:text-base rounded-xl border transition ${
                darkMode
                  ? "bg-green-950 border-green-700 text-green-300"
                  : "bg-green-50 border-green-200 text-green-700"
              }`}
            >
              <img src="/whatsappLogo.png" alt="" className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>

          </div>

          <p
            className={
              darkMode
                ? "text-slate-400 text-xs md:text-sm text-center"
                : "text-gray-500 text-xs md:text-sm text-center"
            }
          >
            © 2026 Diego Fernando Palacios
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Contact

