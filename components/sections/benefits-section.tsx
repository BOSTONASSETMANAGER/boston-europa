export default function BenefitsSection() {
  const benefits = [
    {
      title: "Proteger tus ahorros de la inflación",
      icon: "🛡️",
    },
    {
      title: "Aumentar tu poder adquisitivo y patrimonio",
      icon: "📈",
    },
    {
      title: "Contar con un fondo en caso de gastos imprevistos",
      icon: "💰",
    },
    {
      title: "Generar un legado que dejar a tu familia",
      icon: "👨‍👩‍👧‍👦",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: "var(--saas-primary)" }}>
          ¿Para qué invertir?
        </h2>
        <p className="text-center mb-16 text-lg" style={{ color: "var(--saas-muted)" }}>
          Descubre cómo nuestras inversiones pueden cambiar tu futuro financiero
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg transition-all hover:shadow-lg"
              style={{
                background: "var(--saas-light)",
                borderLeft: "4px solid var(--saas-accent)",
              }}
            >
              <span className="text-4xl flex-shrink-0">{benefit.icon}</span>
              <div>
                <p className="text-lg font-semibold" style={{ color: "var(--saas-text)" }}>
                  {benefit.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
