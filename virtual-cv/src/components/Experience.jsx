const jobs = [
  {
    role: "QA / Software Tester",
    company: "Seeusatours Colombia",
    period: "May 2025 — Jan 2026",
    description:
      "Executed automated software testing using Selenium, analyzed XML and Excel datasets, validated API responses and managed JIRA workflows to improve booking accuracy from 54% to 90%.",
  },
  {
    role: "Full-Stack Developer",
    company: "Redes Tevesat SAS",
    period: "Nov 2024 — Jan 2025",
    description:
      "Developed internal systems using React, Laravel and MySQL while configuring GPON network infrastructure for ISP operations.",
  },
  {
    role: "Web3 Full-Stack Developer",
    company: "Freelance",
    period: "Aug 2023 — Oct 2024",
    description:
      "Integrated React applications with Node.js backends and Solidity smart contracts for blockchain-based platforms.",
  },
  {
    role: "Back-End Developer",
    company: "Carvajal Tecnología y Servicios",
    period: "Jan 2023 — Jul 2023",
    description:
      "Implemented backend features, bug fixes and API integrations using Laravel, MongoDB and SCRUM methodologies.",
  },
]

function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="section-title">Experience</h2>

        <div className="space-y-10">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border-l border-white/10 pl-6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold">
                    {job.role}
                  </h3>

                  <p className="text-blue-400">
                    {job.company}
                  </p>
                </div>

                <span className="text-sm text-gray-500">
                  {job.period}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience