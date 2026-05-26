const projects = [
  {
    title: "Tourism QA Automation",
    description:
      "Automated testing and XML/API validation system using Selenium and Power BI.",
  },
  {
    title: "ISP Christmas Raffle System",
    description:
      "Internal full-stack platform built with React, Laravel and MySQL.",
  },
  {
    title: "Web3 Applications",
    description:
      "React and Node.js applications integrated with Solidity smart contracts.",
  },
]

function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects