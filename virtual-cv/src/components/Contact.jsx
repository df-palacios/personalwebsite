function Contact() {
  return (
    <footer
      id="contact"
      className="py-16 border-t border-white/5 mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Contact
            </h2>

            <p className="text-gray-500 text-sm">
              Available for QA Automation, Full-Stack and DevOps opportunities.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-wrap gap-3">

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

      </div>
    </footer>
  )
}

export default Contact