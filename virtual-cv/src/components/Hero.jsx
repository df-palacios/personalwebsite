import { useLanguage } from "../context/LanguageContext"
import { useTheme } from "../context/ThemeContext"
import { translations } from "../translations"

function Hero() {
  const { language } = useLanguage()
  const t = translations[language]
  const { darkMode } = useTheme()

  return (
    <section
      className={`pt-16 pb-6 md:pt-32 md:pb-16 border-b transition-colors duration-300 ${
        darkMode
          ? "border-slate-700"
          : "border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-10 items-center">

          <div className="flex flex-col gap-4 md:gap-8 md:pl-8">

            <div>

              <p className="text-blue-500 uppercase tracking-[0.2em] text-xs md:text-sm mb-2 md:mb-4">
                {t.heroTitle}
              </p>

              <h1
                className={`text-2xl sm:text-3xl md:text-[2.8rem] font-bold mb-2 md:mb-5 leading-tight ${
                  darkMode
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                Diego Fernando Palacios
              </h1>

              <p
                className={`text-base md:text-lg leading-relaxed max-w-3xl text-left md:text-justify ${
                  darkMode
                    ? "text-slate-300"
                    : "text-gray-600"
                }`}
              >
                {t.heroDescription}
              </p>

            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 md:gap-3">

              <span
                className={`flex items-center justify-center gap-1.5 px-2.5 py-2 md:px-4 md:py-2 text-xs md:text-base rounded-lg border md:rounded-xl md:shadow-sm ${
                  darkMode
                    ? "bg-slate-800 border-slate-600 text-slate-100"
                    : "bg-white border-gray-300 md:border-gray-200 text-gray-700"
                }`}
              >
                <img src="/mapsLogo.png" alt="" className="w-4 h-4 shrink-0" />
                <span className="truncate">Cali, Colombia</span>
              </span>

              <a
                href="mailto:ing.diegopalacios@outlook.com"
                className={`flex items-center justify-center gap-1.5 px-2.5 py-2 md:px-4 md:py-2 text-xs md:text-base rounded-lg border md:rounded-xl md:shadow-sm transition ${
                  darkMode
                    ? "bg-slate-800 border-slate-600 text-white active:border-blue-400"
                    : "bg-white border-gray-300 md:border-gray-200 text-gray-700 active:border-blue-300"
                }`}
              >
                <img src="/emailLogo.png" alt="" className="w-4 h-4 shrink-0" />
                Email
              </a>

              <a
                href="https://github.com/df-palacios"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-center gap-1.5 px-2.5 py-2 md:px-4 md:py-2 text-xs md:text-base rounded-lg border md:rounded-xl md:shadow-sm transition ${
                  darkMode
                    ? "bg-slate-800 border-slate-600 text-white active:border-blue-400"
                    : "bg-white border-gray-300 md:border-gray-200 text-gray-700 active:border-blue-300"
                }`}
              >
                <img src="/githubLogo.png" alt="" className="w-4 h-4 shrink-0" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/dfpalacios"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-center gap-1.5 px-2.5 py-2 md:px-4 md:py-2 text-xs md:text-base rounded-lg border md:rounded-xl md:shadow-sm transition ${
                  darkMode
                    ? "bg-slate-800 border-slate-600 text-white active:border-blue-400"
                    : "bg-white border-gray-300 md:border-gray-200 text-gray-700 active:border-blue-300"
                }`}
              >
                <img src="/linkedinLogo.png" alt="" className="w-4 h-4 shrink-0" />
                LinkedIn
              </a>

              <a
                href="https://wa.me/573137464587"
                target="_blank"
                rel="noreferrer"
                className={`col-span-2 sm:col-auto flex items-center justify-center gap-1.5 px-2.5 py-2 md:px-4 md:py-2 text-xs md:text-base rounded-lg border md:rounded-xl md:shadow-sm transition ${
                  darkMode
                    ? "bg-green-950 border-green-700 text-green-300"
                    : "bg-blue-50 border-blue-300 md:border-blue-200 text-blue-700"
                }`}
              >
                <img src="/whatsappLogo.png" alt="" className="w-4 h-4 shrink-0" />
                WhatsApp
              </a>

            </div>

          </div>

          <div className="flex justify-center">

            <div
              className={`w-[170px] h-[215px] w375:w-[210px] w375:h-[266px] md:w-[300px] md:h-[380px] rounded-2xl md:rounded-3xl overflow-hidden shadow-md md:shadow-xl border-2 md:border ${
                darkMode
                  ? "border-slate-600"
                  : "border-gray-200"
              }`}
            >
              <img
                src="/profile.jpg"
                alt="Diego Palacios"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero