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
className={`py-8 md:py-12 border-t ${
        darkMode ? "border-slate-700" : "border-gray-200"
      }`}
> <div className="max-w-6xl mx-auto px-4 sm:px-6">


    <h2
      className={`section-title ${
        darkMode ? "text-white" : "text-gray-900"
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
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-4">

            <div>
              <h3
                className={`text-lg md:text-xl font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {job.title}
              </h3>

              <p className="text-blue-500 text-sm md:text-base">
                {job.company}
              </p>
            </div>

            <span
              className={`text-sm md:text-base ${
                darkMode ? "text-slate-400" : "text-gray-500"
              }`}
            >
              {job.period}
            </span>

          </div>

          <ul
            className={`mt-3 md:mt-5 space-y-2 text-sm md:text-base ${
              darkMode ? "text-slate-300" : "text-gray-700"
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
