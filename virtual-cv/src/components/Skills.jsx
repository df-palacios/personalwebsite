function Skills() {
  const categories = [
    {
      title: "QA & Testing",
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
      title: "Development",
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
      title: "Data & BI",
      skills: [
        "SQL",
        "Power BI",
        "Excel"
      ]
    },
    {
      title: "Tools & Methodologies",
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
      className="py-12 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          {categories.map((category, index) => (
            <div
              key={index}
              className="card"
            >
              <h3 className="font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">

                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-lg bg-blue-50 text-blue-700 border border-blue-100"
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