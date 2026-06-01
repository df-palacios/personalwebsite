function Experience() {
  const jobs = [
    {
      title: "QA / Software Tester",
      company: "SeeUsaTours Colombia",
      period: "May 2025 — Jan 2026",
      description: [
        "Performed software testing and large-scale analysis of XML and Excel datasets.",
        "Investigated pricing and availability discrepancies from Juniper API integrations.",
        "Reported defects and findings to development teams through JIRA.",
        "Improved booking accuracy from 54% to 90% through data validation processes.",
        "Used Selenium for automation and Power BI for data analysis."
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Redes Tevesat SAS",
      period: "Nov 2024 — Jan 2025",
      description: [
        "Developed a Christmas raffle platform using React, Laravel and MySQL.",
        "Applied MVC architecture and full-stack development practices.",
        "Configured GPON network equipment to ensure service availability.",
        "Supported both software and telecommunications infrastructure."
      ]
    },
    {
      title: "Full-Stack Web3 Developer",
      company: "Independent",
      period: "Aug 2023 — Oct 2024",
      description: [
        "Built blockchain-based applications using React, Node.js and Solidity.",
        "Integrated smart contracts with web interfaces.",
        "Worked on digital traceability and electronic money projects.",
        "Designed decentralized application architectures."
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Carvajal Tecnología y Servicios",
      period: "Jan 2023 — Jul 2023",
      description: [
        "Worked on the LegalAI project implementing new features and fixing bugs.",
        "Developed backend services using Node.js, NestJS and MongoDB.",
        "Built React-based frontend components.",
        "Used Git, Azure DevOps, Postman and Scrum methodologies."
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