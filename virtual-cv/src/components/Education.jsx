
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
      className={`py-12 border-t ${
        darkMode
          ? "border-slate-700"
          : "border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2
          className={`section-title ${
            darkMode
              ? "text-white"
              : "text-gray-900"
          }`}
        >
          {t.education}
        </h2>

        <div
          className={`card mb-6 ${
            darkMode
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-gray-200"
          }`}
        >
          <h3
            className={`text-xl font-semibold ${
              darkMode
                ? "text-white"
                : "text-gray-900"
            }`}
          >
            {t.electronicEngineering}
          </h3>

          <p className="text-blue-500">
            Universidad del Valle
          </p>

          <p
            className={
              darkMode
                ? "text-slate-400 mt-2"
                : "text-gray-500 mt-2"
            }
          >
            {t.graduated}
          </p>
        </div>

        <h2
          className={`text-2xl font-semibold mb-6 ${
            darkMode
              ? "text-white"
              : "text-gray-900"
          }`}
        >
          {t.certifications}
        </h2>

        <div
          className={`card ${
            darkMode
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-gray-200"
          }`}
        >
          <ul
            className={`space-y-3 ${
              darkMode
                ? "text-slate-300"
                : "text-gray-700"
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

