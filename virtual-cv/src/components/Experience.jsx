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
className={`py-12 border-t ${
        darkMode ? "border-slate-700" : "border-gray-200"
      }`}
> <div className="max-w-6xl mx-auto px-6">


    <h2
      className={`section-title ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      {t.experience}
    </h2>

    <div className="flex flex-col gap-6">

      {jobs.map((job, index) => (
        <div
          key={index}
          className={`card ${
            darkMode
              ? "bg-slate-900 border-slate-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row md:justify-between gap-4">

            <div>
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {job.title}
              </h3>

              <p className="text-blue-500">
                {job.company}
              </p>
            </div>

            <span
              className={
                darkMode ? "text-slate-400" : "text-gray-500"
              }
            >
              {job.period}
            </span>

          </div>

          <ul
            className={`mt-5 space-y-2 ${
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
