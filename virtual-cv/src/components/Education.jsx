
import { useTheme } from "../context/ThemeContext"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations"

function Education() {
  const { darkMode } = useTheme()
  const { language } = useLanguage()

  const t = translations[language]

  return (
    <section
      id="education"
      className={`py-8 md:py-16 border-t ${
        darkMode
          ? "border-slate-700"
          : "border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2
          className={`section-title ${
            darkMode
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          {t.education}
        </h2>

        <div
          className={`card mb-4 md:mb-6 ${
            darkMode
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >
          <h3
            className={`text-lg md:text-xl font-semibold ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            {t.electronicEngineering}
          </h3>

          <p className={`text-sm md:text-base font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
            Universidad del Valle
          </p>

          <p
            className={
              darkMode
                ? "text-slate-400 mt-2 text-sm md:text-base"
                : "text-slate-500 mt-2 text-sm md:text-base"
            }
          >
            {t.graduated}
          </p>
        </div>

        <h2
          className={`text-xl md:text-2xl font-semibold mb-4 md:mb-6 ${
            darkMode
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          {t.certifications}
        </h2>

        <div
          className={`card ${
            darkMode
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >
          <ul
            className={`space-y-3 text-sm md:text-base ${
              darkMode
                ? "text-slate-300"
                : "text-slate-600"
            }`}
          >
            <li>• Excel Intermedio — Comfenalco Valle (2026)</li>
            <li>• Blockchain and Cryptoassets — Chainlink Labs (2024)</li>
            <li>• Blockchain y Criptoactivos — UxTIC (2022)</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Education

