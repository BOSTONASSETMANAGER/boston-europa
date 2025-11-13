export default function CtaSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--saas-primary)" }}>
          Conoce tu perfil de inversor
        </h2>
        <p className="text-lg mb-8" style={{ color: "var(--saas-text)" }}>
          Podés conversar con un asesor desde el siguiente botón
        </p>
        <button
          className="text-white font-bold py-3 px-8 rounded-lg transition-all hover:-translate-y-1"
          style={{
            background: "linear-gradient(135deg, var(--saas-primary), var(--saas-accent))",
            boxShadow: "0 4px 15px rgba(29, 57, 105, 0.3)",
          }}
        >
          Contactanos
        </button>
      </div>
    </section>
  )
}
