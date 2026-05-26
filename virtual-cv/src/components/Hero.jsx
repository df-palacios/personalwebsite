function Hero() {
  return (
    <section className="pt-40 pb-20 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex flex-col gap-8">

          <div>
            <p className="text-blue-400 uppercase tracking-[0.2em] text-sm mb-4">
              QA Automation • Full-Stack • DevOps
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Diego Fernando Palacios Castro
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
              Electronic engineer with experience in software testing,
              Selenium automation, REST APIs, React development,
              Linux infrastructure, XML analysis and large-scale
              data validation workflows.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">

            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-400">
              📍 Cali, Colombia
            </span>

            <a
              href="mailto:ing.diegopalacios@outlook.com"
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition"
            >
              ✉️ Email
            </a>

            <a
              href="https://github.com/df-palacios"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition"
            >
              💻 GitHub
            </a>

            <a
              href="https://linkedin.com/in/dfpalacios"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition"
            >
              🔗 LinkedIn
            </a>

            <a
              href="https://wa.me/573137464587"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300 hover:bg-blue-500/20 transition"
            >
              💬 WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero