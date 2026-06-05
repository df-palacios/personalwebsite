import { useTheme } from "../context/ThemeContext"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations"

function Skills() {
  const { darkMode } = useTheme()
  const { language } = useLanguage()

  const t = translations[language]

  const categories = [
    {
      title: t.categories.qa,
      skills: [
        "Selenium WebDriver",
        "Playwright",
        "Serenity BDD",
        "Karate DSL",
        "Postman",
        "REST APIs",
        "Functional Testing",
        "Regression Testing",
        "Screenplay",
        "POM"
      ]
    },
    {
      title: t.categories.dev,
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "NestJS",
        "Laravel"
      ]
    },
    {
      title: t.categories.data,
      skills: [
        "SQL",
        "Power BI",
        "Excel"
      ]
    },
    {
      title: t.categories.tools,
      skills: [
        "Git",
        "GitHub",
        "Jira",
        "Azure DevOps",
        "SCRUM",
        "BDD",
        "MVC",
        "SOLID",
        "Clean Code"
      ]
    }
  ]

  return (
    <section
      id="skills"
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
          {t.skills}
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          {categories.map((category, index) => (
            <div
              key={index}
              className={`card ${
                darkMode
                  ? "bg-slate-900 border-slate-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3
                className={`font-semibold mb-4 ${
                  darkMode
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">

                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={
                      darkMode
                        ? "px-3 py-1 text-sm rounded-lg bg-blue-950 text-blue-300 border border-blue-800"
                        : "px-3 py-1 text-sm rounded-lg bg-blue-50 text-blue-700 border border-blue-100"
                    }
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills

