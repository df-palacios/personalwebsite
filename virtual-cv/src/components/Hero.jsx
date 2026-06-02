import { useLanguage } from "../context/LanguageContext"
import { useTheme } from "../context/ThemeContext"

function Hero() {
  const { language } = useLanguage()
  const { darkMode } = useTheme()

  return (
    <section
      className={`pt-32 pb-16 border-b transition-colors duration-300 ${
        darkMode
          ? "border-slate-700"
          : "border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8">

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">

          <div className="flex flex-col gap-8 md:pl-8">

            <div>

              <p className="text-blue-500 uppercase tracking-[0.2em] text-sm mb-4">
                QA AUTOMATION ENGINEER • FULL-STACK DEVELOPER
              </p>

              <h1
                className={`text-4xl md:text-[2.8rem] font-bold mb-5 leading-tight ${
                  darkMode
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                Diego Fernando Palacios
              </h1>

              <p
                className={`text-lg leading-relaxed max-w-3xl text-justify ${
                  darkMode
                    ? "text-slate-300"
                    : "text-gray-600"
                }`}
              >
                {language === "en"
                  ? `Electronic Engineer with experience in QA Automation, Software Testing and Full-Stack Development. Skilled in Selenium, Playwright, Serenity BDD, Karate DSL, REST APIs, React, Node.js and data validation under Agile methodologies.`
                  : `Ingeniero Electrónico con experiencia en Automatización QA, Testing de Software y Desarrollo Full-Stack. Con conocimientos en Selenium, Playwright, Serenity BDD, Karate DSL, APIs REST, React, Node.js y validación de datos bajo metodologías ágiles.`}
              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              <span
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border shadow-sm ${
                  darkMode
                    ? "bg-slate-800 border-slate-600 text-slate-100"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                <img src="/mapsLogo.png" alt="" className="w-4 h-4" />
                Cali, Colombia
              </span>

              <a
                href="mailto:ing.diegopalacios@outlook.com"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border shadow-sm transition ${
                  darkMode
                    ? "bg-slate-800 border-slate-600 text-white hover:border-blue-400"
                    : "bg-white border-gray-200 text-gray-700 hover:border-blue-300"
                }`}
              >
                <img src="/emailLogo.png" alt="" className="w-4 h-4" />
                Email
              </a>

              <a
                href="https://github.com/df-palacios"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border shadow-sm transition ${
                  darkMode
                    ? "bg-slate-800 border-slate-600 text-white hover:border-blue-400"
                    : "bg-white border-gray-200 text-gray-700 hover:border-blue-300"
                }`}
              >
                <img src="/githubLogo.png" alt="" className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/dfpalacios"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border shadow-sm transition ${
                  darkMode
                    ? "bg-slate-800 border-slate-600 text-white hover:border-blue-400"
                    : "bg-white border-gray-200 text-gray-700 hover:border-blue-300"
                }`}
              >
                <img src="/linkedinLogo.png" alt="" className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href="https://wa.me/573137464587"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border shadow-sm transition ${
                  darkMode
                    ? "bg-green-950 border-green-700 text-green-300"
                    : "bg-blue-50 border-blue-200 text-blue-700"
                }`}
              >
                <img src="/whatsappLogo.png" alt="" className="w-4 h-4" />
                WhatsApp
              </a>

            </div>

          </div>

          <div className="flex justify-center">

            <div
              className={`w-[300px] h-[380px] rounded-3xl overflow-hidden shadow-xl border ${
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