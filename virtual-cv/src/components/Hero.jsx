function Hero() {
  return (
    <section className="pt-32 pb-16 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-8">

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-8 md:pl-8">

            <div>
              <p className="text-blue-600 uppercase tracking-[0.2em] text-sm mb-4">
                QA Automation • Full-Stack Developer
              </p>

              <h1 className="text-4xl md:text-[2.8rem] font-bold mb-5 leading-tight text-gray-900">
                Diego Fernando Palacios
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                Electronic engineer with experience in software testing,
                Selenium automation, REST APIs, React development,
                Linux infrastructure, XML analysis and large-scale
                data validation workflows.
              </p>
            </div>

            {/* CONTACT BUTTONS */}
            <div className="flex flex-wrap gap-3">

              {/* LOCATION */}
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm text-gray-700 shadow-sm">
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
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm text-gray-700 shadow-sm hover:border-blue-300 hover:text-blue-600 transition"
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
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm text-gray-700 shadow-sm hover:border-blue-300 hover:text-blue-600 transition"
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
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm text-gray-700 shadow-sm hover:border-blue-300 hover:text-blue-600 transition"
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
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-sm text-blue-700 shadow-sm hover:bg-blue-100 transition"
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
          <div className="flex justify-center md:justify-center">

            <div className="relative">

              <div className="relative w-[300px] h-[380px] rounded-3xl border border-gray-200 overflow-hidden bg-white shadow-xl">

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