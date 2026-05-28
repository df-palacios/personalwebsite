function Hero() {
  return (
    <section className="pt-40 pb-20 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-14 items-center">

          {/* LEFT */}
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

            {/* CONTACT BUTTONS */}
            <div className="flex flex-wrap gap-3">

              {/* LOCATION */}
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-400">
                <img
                  src="/mapsLogo.png"
                  alt="Location"
                  className="w-4 h-4 object-contain"
                />

                Cali, Colombia
              </span>

              {/* EMAIL */}
              <a
                href="mailto:ing.diegopalacios@outlook.com"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition"
              >
                <img
                  src="/emailLogo.png"
                  alt="Email"
                  className="w-4 h-4 object-contain"
                />

                Email
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/df-palacios"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition"
              >
                <img
                  src="/githubLogo.png"
                  alt="GitHub"
                  className="w-4 h-4 object-contain"
                />

                GitHub
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/in/dfpalacios"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-400 hover:text-white hover:border-white/10 hover:bg-white/10 transition"
              >
                <img
                  src="/linkedinLogo.png"
                  alt="LinkedIn"
                  className="w-4 h-4 object-contain"
                />

                LinkedIn
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/573137464587"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300 hover:bg-blue-500/20 transition"
              >
                <img
                  src="/whatsappLogo.png"
                  alt="WhatsApp"
                  className="w-4 h-4 object-contain"
                />

                WhatsApp
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">

            <div className="relative">

              {/* glow */}
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-3xl"></div>

              {/* image */}
              <div className="relative w-[300px] h-[380px] rounded-3xl border border-white/10 overflow-hidden bg-[#111827] shadow-2xl">

                <img
                  src="/profile.jpg"
                  alt="Diego Palacios"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero