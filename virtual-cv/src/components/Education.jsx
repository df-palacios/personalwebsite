function Education() {
  return (
    <section
      id="education"
      className="py-20 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="section-title">Education</h2>

        <div className="space-y-8">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl font-semibold">
                  Electronic Engineering
                </h3>

                <p className="text-blue-400">
                  Universidad del Valle
                </p>
              </div>

              <span className="text-sm text-gray-500">
                2024
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Courses
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>Intermediate Excel — Comfenalco Valle</p>

              <p>Blockchain and Cryptoassets — Chainlink Labs</p>

              <p>Blockchain y Criptoactivos — UxTIC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education