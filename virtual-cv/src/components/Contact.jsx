function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Contact</h2>

        <div className="flex flex-col gap-4 text-gray-400">
          <a
            href="mailto:ing.diegopalacios@outlook.com"
            className="hover:text-white transition"
          >
            ing.diegopalacios@outlook.com
          </a>

          <a
            href="https://github.com/df-palacios"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/dfpalacios"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact