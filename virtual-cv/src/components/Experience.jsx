import { useTheme } from "../context/ThemeContext"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations"

function Experience() {
const { darkMode } = useTheme()
const { language } = useLanguage()
const t = translations[language]

const jobs = [
{
company: "SeeUsaTours Colombia",
...t.jobs[0]
},
{
company: "Redes Tevesat SAS",
...t.jobs[1]
},
{
company: "Independent",
...t.jobs[2]
},
{
company: "Carvajal Tecnología y Servicios",
...t.jobs[3]
}
]

return (
<section
id="experience"
className={`py-8 md:py-16 border-t ${
        darkMode ? "border-slate-700" : "border-slate-200"
      }`}
> <div className="max-w-6xl mx-auto px-4 sm:px-6">


    <h2
      className={`section-title ${
        darkMode ? "text-white" : "text-slate-900"
      }`}
    >
      {t.experience}
    </h2>

    <div className="flex flex-col gap-4 md:gap-6">

      {jobs.map((job, index) => (
        <div
          key={index}
          className={`card ${
            darkMode
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6">

            <div>
              <h3
                className={`text-lg md:text-xl font-semibold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {job.title}
              </h3>

              <p className={`text-sm md:text-base font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                {job.company}
              </p>
            </div>

            <span
              className={`text-sm md:text-right md:whitespace-nowrap md:tabular-nums ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {job.period}
            </span>

          </div>

          <ul
            className={`mt-3 md:mt-5 space-y-2 text-sm md:text-base ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {job.description.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>

        </div>
      ))}

    </div>

  </div>
</section>


)
}

export default Experience
