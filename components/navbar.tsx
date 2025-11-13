"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "La empresa", href: "#empresa" },
    { label: "Abra su cuenta", href: "#cuenta" },
    { label: "Contacto", href: "#contacto" },
    { label: "Opciones de inversión", href: "#opciones" },
    { label: "Operar criptomonedas", href: "#cripto" },
  ]

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white border-b border-[var(--saas-border)]"
      style={{ borderColor: "var(--saas-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold" style={{ color: "var(--saas-primary)" }}>
              Boston
            </div>
            <div className="text-xs" style={{ color: "var(--saas-muted)" }}>
              Asset Manager
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium transition-colors hover:bg-[var(--saas-light)] rounded-md"
                style={{ color: "var(--saas-text)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button
              className="text-white font-bold py-2 px-6 rounded-lg transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, var(--saas-primary), var(--saas-accent))",
                boxShadow: "0 4px 15px rgba(29, 57, 105, 0.3)",
              }}
            >
              Comenzar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md"
              style={{ color: "var(--saas-text)" }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-base font-medium rounded-md transition-colors"
                style={{ color: "var(--saas-text)" }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="w-full text-white font-bold py-2 px-6 rounded-lg mt-4 transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, var(--saas-primary), var(--saas-accent))",
                boxShadow: "0 4px 15px rgba(29, 57, 105, 0.3)",
              }}
            >
              Comenzar
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
