import { useLanguage } from "../context/LanguageContext"
import { useTheme } from "../context/ThemeContext"
import { translations } from "../translations"
import { cue, CUES } from "../lib/sound"

function Hero() {
  const { language } = useLanguage()
  const t = translations[language]
  const { darkMode } = useTheme()

  return (
    <section
      className={`pt-16 pb-6 md:pt-32 md:pb-16 border-b transition-colors duration-300 ${
        darkMode
          ? "border-slate-700"
          : "border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid md:grid-cols-[minmax(0,1fr)_auto] gap-6 md:gap-10 lg:gap-14 items-center">

          <div className="flex flex-col gap-4 md:gap-8">

            <div>

              <div className="flex items-center gap-4 mb-4 md:mb-0 md:block">

                <img
                  src="/profile-v2.jpg"
                  alt="Diego Palacios"
                  width="460"
                  height="460"
                  loading="lazy"
                  className={`md:hidden shrink-0 w-[84px] h-[84px] w360:w-[104px] w360:h-[104px] w375:w-[116px] w375:h-[116px] object-cover rounded-full border-2 shadow-md ${
                    darkMode ? "border-slate-700" : "border-slate-200"
                  }`}
                />

                <div className="min-w-0">

                  <ul className={`xl:flex xl:flex-wrap xl:gap-x-2.5 xl:text-xs xl:tracking-[0.1em] uppercase tracking-[0.08em] md:tracking-[0.14em] text-[9.5px] w360:text-[10.5px] leading-[1.5] md:text-sm font-semibold mb-2 md:mb-4 ${darkMode ? "text-emerald-400" : "text-emerald-700"}`}>
                    {t.heroTitle.map((role) => (<li key={role} className="xl:after:content-['•'] xl:after:ml-2.5 xl:after:opacity-60 xl:last:after:content-none">{role}</li>))}
                  </ul>

                  <h1
                    className={`text-[1.4rem] w360:text-[1.65rem] sm:text-3xl md:text-[3rem] font-bold tracking-tight mb-0 md:mb-5 leading-[1.1] ${
                      darkMode
                        ? "text-white"
                        : "text-slate-900"
                    }`}
                  >
                    Diego Palacios
                  </h1>

                </div>

              </div>

              <p
                className={`text-[14.5px] w375:text-[15px] md:text-lg leading-relaxed [hyphenate-limit-chars:6_3_3] max-w-2xl lg:max-w-3xl text-justify hyphens-auto ${
                  darkMode
                    ? "text-slate-300"
                    : "text-slate-600"
                }`}
              >
                {t.heroDescription}
              </p>

            </div>

            <a
              href="#projects"
              onClick={() => cue(CUES.navClick)}
              className="inline-flex items-center justify-center gap-2 h-11 px-5 md:h-12 md:px-8 md:self-start rounded-xl text-sm md:text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 dark:bg-emerald-500 dark:text-emerald-950 dark:hover:bg-emerald-400 dark:active:bg-emerald-300 shadow-sm transition"
            >
              {t.viewProjects}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </a>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 md:gap-3">

              <span
                className={`flex items-center justify-center gap-1.5 px-2.5 py-3 md:h-11 md:px-4 md:py-0 text-xs md:text-sm rounded-lg border md:rounded-xl md:shadow-sm ${
                  darkMode
                    ? "bg-slate-800 border-slate-700 text-slate-100"
                    : "bg-white border-slate-300 md:border-slate-200 text-slate-700"
                }`}
              >
                <img src="/mapsLogo.png" alt="" className="w-4 h-4 shrink-0" />
                <span className="truncate">Cali, Colombia</span>
              </span>

              <a
                href="mailto:ing.diegopalacios@outlook.com"
                className={`flex items-center justify-center gap-1.5 px-2.5 py-3 md:h-11 md:px-4 md:py-0 text-xs md:text-sm rounded-lg border md:rounded-xl md:shadow-sm transition ${
                  darkMode
                    ? "bg-slate-800 border-slate-700 text-white hover:border-emerald-500 active:border-emerald-400"
                    : "bg-white border-slate-300 md:border-slate-200 text-slate-700 hover:border-emerald-400 active:border-emerald-300"
                }`}
              >
                <img src="/emailLogo.png" alt="" className="w-4 h-4 shrink-0" />
                Email
              </a>

              <a
                href="https://github.com/df-palacios"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-center gap-1.5 px-2.5 py-3 md:h-11 md:px-4 md:py-0 text-xs md:text-sm rounded-lg border md:rounded-xl md:shadow-sm transition ${
                  darkMode
                    ? "bg-slate-800 border-slate-700 text-white hover:border-emerald-500 active:border-emerald-400"
                    : "bg-white border-slate-300 md:border-slate-200 text-slate-700 hover:border-emerald-400 active:border-emerald-300"
                }`}
              >
                <img src="/githubLogo.png" alt="" className="w-4 h-4 shrink-0" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/dfpalacios"
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-center gap-1.5 px-2.5 py-3 md:h-11 md:px-4 md:py-0 text-xs md:text-sm rounded-lg border md:rounded-xl md:shadow-sm transition ${
                  darkMode
                    ? "bg-slate-800 border-slate-700 text-white hover:border-emerald-500 active:border-emerald-400"
                    : "bg-white border-slate-300 md:border-slate-200 text-slate-700 hover:border-emerald-400 active:border-emerald-300"
                }`}
              >
                <img src="/linkedinLogo.png" alt="" className="w-4 h-4 shrink-0" />
                LinkedIn
              </a>

              <a
                href="https://wa.me/573137464587"
                target="_blank"
                rel="noreferrer"
                className={`col-span-2 sm:col-auto flex items-center justify-center gap-1.5 px-2.5 py-3 md:h-11 md:px-4 md:py-0 text-xs md:text-sm rounded-lg border md:rounded-xl md:shadow-sm transition ${
                  darkMode
                    ? "bg-emerald-950 border-emerald-800 text-emerald-300 hover:border-emerald-600"
                    : "bg-emerald-50 border-emerald-300 md:border-emerald-200 text-emerald-700 hover:border-emerald-400"
                }`}
              >
                <img src="/whatsappLogo.png" alt="" className="w-4 h-4 shrink-0" />
                WhatsApp
              </a>

            </div>

          </div>

          <div className="hidden md:flex md:justify-end">

            <div
              className={`w-[132px] h-[132px] w375:w-[148px] w375:h-[148px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden shadow-md md:shadow-xl border-2 ${
                darkMode
                  ? "border-slate-700"
                  : "border-slate-200"
              }`}
            >
              <img
                src="/profile-v2.jpg"
                alt="Diego Palacios"
                width="460"
                height="460"
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