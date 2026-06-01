function Skills() {
  const categories = [
    {
      title: "QA & Testing",
      skills: [
        "Selenium",
        "Playwright",
        "Serenity BDD",
        "Screenplay",
        "Postman",
        "JIRA"
      ]
    },
    {
      title: "Development",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "NestJS",
        "Laravel"
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        "SQL",
        "Excel",
        "Power BI",
        "XML Analysis",
        "Data Validation"
      ]
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        "Linux",
        "Docker",
        "Git",
        "REST APIs",
        "Azure DevOps"
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