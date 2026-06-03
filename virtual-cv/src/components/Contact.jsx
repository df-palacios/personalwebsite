import { useTheme } from "../context/ThemeContext"

function Contact() {
const { darkMode } = useTheme()

return (
<footer
id="contact"
className={`py-12 mt-8 border-t ${
        darkMode ? "border-slate-700" : "border-gray-200"
      }`}
> <div className="max-w-6xl mx-auto px-6">

    <div className="flex flex-col gap-8 items-center">

      <h2 className={`text-2xl font-semibold ${
        darkMode ? "text-white" : "text-gray-900"
      }`}>
        Contact
      </h2>

      <div className="flex flex-wrap justify-center gap-4">

        <a
          href="mailto:ing.diegopalacios@outlook.com"
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
            darkMode
              ? "bg-slate-800 border-slate-600 text-white"
              : "bg-white border-gray-200 text-gray-900"
          }`}
        >
          <img src="/emailLogo.png" alt="" className="w-5 h-5" />
          <span>Email</span>
        </a>

        <a
          href="https://github.com/df-palacios"
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
            darkMode
              ? "bg-slate-800 border-slate-600 text-white"
              : "bg-white border-gray-200 text-gray-900"
          }`}
        >
          <img src="/githubLogo.png" alt="" className="w-5 h-5" />
          <span>GitHub</span>
        </a>

        <a
          href="https://linkedin.com/in/dfpalacios"
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
            darkMode
              ? "bg-slate-800 border-slate-600 text-white"
              : "bg-white border-gray-200 text-gray-900"
          }`}
        >
          <img src="/linkedinLogo.png" alt="" className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://wa.me/573137464587"
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
            darkMode
              ? "bg-green-950 border-green-700 text-green-300"
              : "bg-green-50 border-green-200 text-green-700"
          }`}
        >
          <img src="/whatsappLogo.png" alt="" className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>

      </div>

      <p className={
        darkMode ? "text-slate-400 text-sm" : "text-gray-500 text-sm"
      }>
        © 2026 Diego Fernando Palacios
      </p>

    </div>

  </div>
</footer>


)
}

export default Contact
