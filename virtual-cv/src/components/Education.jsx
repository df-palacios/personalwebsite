function Education() {
  return (
    <section
      id="education"
      className="py-12 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="section-title">
          Education
        </h2>

        <div className="card mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Electronic Engineering
          </h3>

          <p className="text-blue-600">
            Universidad del Valle
          </p>

          <p className="text-gray-500 mt-2">
            Graduated 2024
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Courses & Certifications
        </h2>

        <div className="card">
          <ul className="space-y-3 text-gray-700">
            <li>
              • Excel Intermedio — Comfenalco Valle (2026)
            </li>

            <li>
              • Blockchain and Cryptoassets — Chainlink Labs (2024)
            </li>

            <li>
              • Blockchain y Criptoactivos — UxTIC (2022)
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Education