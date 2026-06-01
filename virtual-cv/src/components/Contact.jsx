function Contact() {
  return (
    <footer
      id="contact"
      className="py-16 border-t border-gray-200 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Contact
            </h2>

            <p className="text-gray-600">
              Available for QA Automation, Full-Stack and DevOps opportunities.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">

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

      </div>
    </footer>
  )
}

export default Contact