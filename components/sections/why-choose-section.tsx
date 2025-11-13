export default function WhyChooseSection() {
  const reasons = [
    "Contamos con un equipo de expertos que van a trabajar para maximizar tus inversiones",
    "Tenemos amplia experiencia en el mercado de capitales",
    "Brindamos asesoramiento integral en todas las operaciones",
    "Firmamos alianzas comerciales con los brokers más prestigiosos del país",
    "Estamos regulados por FINRA y SEC",
    "Nuestras carteras sugeridas rinden más que los principales índices financieros",
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: "var(--saas-light)" }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: "var(--saas-primary)" }}>
          ¿Por qué elegir Boston Asset Manager?
        </h2>
        <p className="text-center mb-16 text-lg" style={{ color: "var(--saas-muted)" }}>
          Somos líderes en asesoramiento financiero confiable
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                style={{
                  background: "linear-gradient(135deg, var(--saas-primary), var(--saas-accent))",
                  color: "white",
                }}
              >
                ✓
              </div>
              <p className="text-lg" style={{ color: "var(--saas-text)" }}>
                {reason}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            className="text-white font-bold py-3 px-8 rounded-lg transition-all hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, var(--saas-primary), var(--saas-accent))",
              boxShadow: "0 4px 15px rgba(29, 57, 105, 0.3)",
            }}
          >
            Conocenos
          </button>
        </div>
      </div>
    </section>
  )
}
