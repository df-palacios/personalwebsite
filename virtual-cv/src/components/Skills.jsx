const skillGroups = [
  {
    title: "Languages & Frameworks",
    skills:
      "JavaScript, Python, React, Node.js, Laravel, Java",
  },
  {
    title: "Testing & QA",
    skills:
      "Selenium, Postman, JIRA, XML validation, API testing",
  },
  {
    title: "Data & Infrastructure",
    skills:
      "SQL, Power BI, Excel, Linux, VPS, Nginx",
  },
  {
    title: "Methodologies & Tools",
    skills:
      "SCRUM, MVC, SOLID, Git, REST APIs",
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="section-title">Technical Skills</h2>

        <div className="space-y-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[250px_1fr] gap-4"
            >
              <h3 className="text-white font-medium">
                {group.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {group.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills