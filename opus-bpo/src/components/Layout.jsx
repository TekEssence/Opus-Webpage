import { useEffect, useState } from "react"
import { NavLink, Outlet, useLocation } from "react-router-dom"
import { navItems } from "../data/content.js"

const linkBase =
  "text-xs font-semibold uppercase tracking-[0.12em] transition-colors"

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const aboutLinks = [
    { label: "Vision & Mission", href: "/about/vision-mission" },
    { label: "Pillars of OPUS", href: "/about/pillars" },
    { label: "Why OPUS", href: "/about/why-opus" },
    { label: "Certification", href: "/about/certification" },
  ]

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [menuOpen])

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible")
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-white text-ink-700">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="border-b border-brand-blue/30 bg-[#2596be]">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            <span>HIPAA-Aligned Revenue Cycle Operations</span>
            <span className="hidden sm:inline">Client Support & Governance</span>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/opus-logo.png"
              alt="OPUS BPO logo"
              className="h-12 w-auto"
            />
            <div>
              <p className="font-heading text-lg text-brand-slate">OPUS BPO</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Medical Billing & RCM
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) =>
              item.label === "About" ? (
                <div key={item.path} className="nav-group relative">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link ${linkBase} ${
                        isActive
                          ? "is-active text-brand-blue"
                          : "text-slate-600 hover:text-brand-blue"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                  <div className="nav-dropdown">
                    {aboutLinks.map((link) => (
                      <a key={link.href} href={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${linkBase} ${
                      isActive
                        ? "is-active text-brand-blue"
                        : "text-slate-600 hover:text-brand-blue"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>
          <div className="flex items-center gap-4">
            <NavLink
              to="/contact"
              className="hidden rounded-full bg-brand-red px-6 py-2 text-sm font-semibold text-white transition hover:bg-red-700 lg:inline-flex"
            >
              Request Consultation
            </NavLink>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-blue hover:text-brand-blue lg:hidden"
              aria-label="Toggle menu"
            >
              <span className="text-lg">{menuOpen ? "×" : "≡"}</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? "text-brand-blue" : "text-slate-600"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-xs uppercase tracking-[0.2em] text-slate-500">
                About Sections
              </div>
              {aboutLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600"
                >
                  {link.label}
                </a>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-brand-red px-5 py-2 text-center text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Request Consultation
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <main className="page-shell">
        <Outlet />
      </main>

      <footer className="border-t border-brand-blue/20 bg-[#2596be] text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/90 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-lg text-white">OPUS BPO</p>
            <p className="mt-2 text-white/80">Medical Billing & Revenue Cycle Management</p>
          </div>
          <div className="flex flex-wrap gap-6 text-white/80">
            {navItems.map((item) => (
              <NavLink
                key={`footer-${item.path}`}
                to={item.path}
                className="transition hover:text-white"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <p>© 2024 OPUS BPO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
