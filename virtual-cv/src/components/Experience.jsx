function Experience() {
  const jobs = [
    {
      title: "QA / Software Tester",
      company: "SeeUsaTours Colombia",
      period: "May 2025 — Jan 2026",
      description: [
        "Performed functional and automated testing for tourism platforms integrated through REST APIs.",
        "Analyzed XML, Excel and API data to identify pricing and availability inconsistencies.",
        "Used Jira for defect tracking and Power BI for data analysis.",
        "Automated validation processes using Selenium.",
        "Improved data accuracy from 54% to 90%."
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Redes Tevesat SAS",
      period: "Nov 2024 — Jan 2025",
      description: [
        "Developed a web application using React, Laravel and MySQL.",
        "Applied MVC architecture and full-stack development practices.",
        "Supported promotional campaign management processes.",
        "Configured and maintained GPON network infrastructure."
      ]
    },
    {
      title: "Full-Stack Web3 Developer",
      company: "Independent",
      period: "Aug 2023 — Oct 2024",
      description: [
        "Developed decentralized applications using React, Node.js and Solidity.",
        "Integrated smart contracts with web applications.",
        "Built solutions for digital traceability and digital assets.",
        "Integrated blockchain services and APIs."
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Carvajal Tecnología y Servicios",
      period: "Jan 2023 — Jul 2023",
      description: [
        "Participated in the LegalAI project development and maintenance.",
        "Implemented new features and fixed software defects.",
        "Worked with React, Node.js, NestJS and MongoDB.",
        "Integrated REST APIs using SCRUM, Azure DevOps and Git."
      ]
    }
  ]

  return (
    <section
      id="experience"
      className="py-12 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="section-title">
          Professional Experience
        </h2>

        <div className="flex flex-col gap-6">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="card"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {job.title}
                  </h3>

                  <p className="text-blue-600">
                    {job.company}
                  </p>
                </div>

                <span className="text-sm text-gray-500">
                  {job.period}
                </span>

              </div>

              <ul className="mt-5 space-y-2 text-gray-700">

                {job.description.map((item, i) => (
                  <li key={i}>
                    • {item}
                  </li>
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