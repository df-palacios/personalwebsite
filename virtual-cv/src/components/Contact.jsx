function Contact() {
  return (
    <footer
      id="contact"
      className="py-12 border-t border-gray-200 mt-8"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col gap-8 items-center">

          <h2 className="text-2xl font-semibold text-gray-900">
            Contact
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="mailto:ing.diegopalacios@outlook.com"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:shadow-md transition"
            >
              <img
                src="/emailLogo.png"
                alt=""
                className="w-5 h-5"
              />
              <span>Email</span>
            </a>

            <a
              href="https://github.com/df-palacios"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:shadow-md transition"
            >
              <img
                src="/githubLogo.png"
                alt=""
                className="w-5 h-5"
              />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/dfpalacios"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:shadow-md transition"
            >
              <img
                src="/linkedinLogo.png"
                alt=""
                className="w-5 h-5"
              />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://wa.me/573137464587"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-xl hover:shadow-md transition"
            >
              <img
                src="/whatsappLogo.png"
                alt=""
                className="w-5 h-5"
              />
              <span>WhatsApp</span>
            </a>

          </div>

          <p className="text-gray-500 text-sm">
            © 2026 Diego Fernando Palacios
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Contact