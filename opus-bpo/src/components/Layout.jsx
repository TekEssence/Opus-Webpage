import { useEffect, useRef, useState } from "react"
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"
import FloatingHealthCheck from "./FloatingHealthCheck.jsx"
import { navItems, services } from "../data/content.js"

const linkBase = "text-sm font-semibold uppercase tracking-[0.12em] transition-colors"
const dropdownArrow = "▼"

const serviceHref = (title) =>
  `/services#${title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [practiceMenuOpen, setPracticeMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const practiceMenuRef = useRef(null)
  const practiceButtonRef = useRef(null)
  const practiceHoverTimer = useRef(null)

  const aboutLinks = [
    { label: "Vision & Mission", href: "/about/vision-mission" },
    { label: "Pillars Of Opus", href: "/about/pillars" },
    { label: "Why Opus", href: "/about/why-opus" },
  ]

  const serviceLinks = services.map((service) => ({
    label: service.title,
    href: serviceHref(service.title),
  }))
  const activeServiceHref =
    location.pathname === "/services" && location.hash ? `/services${location.hash}` : ""

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

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname === "/services" && !location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" })
      return
    }

    window.scrollTo({ top: 0, behavior: "auto" })
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!practiceMenuOpen) return

    const handleClickOutside = (event) => {
      if (practiceMenuRef.current && !practiceMenuRef.current.contains(event.target)) {
        setPracticeMenuOpen(false)
      }
    }

    document.addEventListener("pointerdown", handleClickOutside)
    return () => document.removeEventListener("pointerdown", handleClickOutside)
  }, [practiceMenuOpen])

  useEffect(() => {
    return () => {
      if (practiceHoverTimer.current) {
        clearTimeout(practiceHoverTimer.current)
      }
    }
  }, [])

  const openPracticeMenuHover = () => {
    if (practiceHoverTimer.current) {
      clearTimeout(practiceHoverTimer.current)
      practiceHoverTimer.current = null
    }
    setPracticeMenuOpen(true)
  }

  const closePracticeMenuHover = () => {
    if (practiceHoverTimer.current) {
      clearTimeout(practiceHoverTimer.current)
    }

    practiceHoverTimer.current = window.setTimeout(() => {
      setPracticeMenuOpen(false)
      practiceHoverTimer.current = null
    }, 200)
  }

  const handleFloatingPracticeClick = () => {
    setPracticeMenuOpen(false)
    navigate("/practice-health-check")
  }

  const handleServicesTopClick = () => {
    if (location.pathname === "/services" && !location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white text-ink-700">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="border-b border-brand-blue/30 bg-[#2596be]">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            <span>HIPAA-Aligned Revenue Cycle Operations</span>
            <span className="hidden sm:inline">Client Support & Governance</span>
          </div>
        </div>
        <div className="flex w-full items-center px-6 py-4">
          <div className="flex shrink-0 items-center gap-4">
            <img
              src="/opus-logo.png"
              alt="OPUS BPO Medical Billing and Revenue Cycle Management logo"
              className="h-12 w-auto"
            />
            <div>
              <p className="font-heading text-lg text-brand-slate">OPUS BPO</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Medical Billing & RCM
              </p>
            </div>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-8 px-8 lg:flex">
            {navItems.map((item) =>
              item.label === "About" ? (
                <div key={item.path} className="nav-group relative flex items-center gap-1">
                  <NavLink
                    to={item.path}
                    onClick={handleServicesTopClick}
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
                  <span className="nav-dropdown-indicator" aria-hidden="true">
                    {dropdownArrow}
                  </span>
                  <div className="nav-dropdown">
                    {aboutLinks.map((link) => (
                      <NavLink
                        key={link.href}
                        to={link.href}
                        className={({ isActive }) =>
                          `nav-dropdown-about-link ${isActive ? "is-active" : ""}`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : item.label === "Services" ? (
                <div key={item.path} className="nav-group relative flex items-center gap-1">
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
                  <span className="nav-dropdown-indicator" aria-hidden="true">
                    {dropdownArrow}
                  </span>
                  <div className="nav-dropdown nav-dropdown-services">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`nav-dropdown-service-link ${
                          activeServiceHref === link.href ? "is-active" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
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

          <div className="ml-auto flex shrink-0 items-center gap-3">
            <div
              className="practice-menu-wrapper hidden lg:block"
              onMouseEnter={openPracticeMenuHover}
              onMouseLeave={closePracticeMenuHover}
            >
              <button
                type="button"
                className="practice-menu-button"
                aria-label="Open Practice Health Check"
                onClick={() => {
                  setPracticeMenuOpen(false)
                  navigate("/practice-health-check")
                }}
                onMouseEnter={openPracticeMenuHover}
                onMouseLeave={closePracticeMenuHover}
                aria-expanded={practiceMenuOpen}
                aria-controls="practice-health-check-menu"
                ref={practiceButtonRef}
              >
                Practice Health Check
              </button>
              {practiceMenuOpen && (
                <div
                  id="practice-health-check-menu"
                  ref={practiceMenuRef}
                  className="practice-menu-panel"
                  onMouseEnter={openPracticeMenuHover}
                  onMouseLeave={closePracticeMenuHover}
                >
                  <Link to="/practice-health-check" onClick={() => setPracticeMenuOpen(false)}>
                    Generate Practice Report
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              aria-label="Schedule a call with our team"
              className="hidden whitespace-nowrap rounded-full bg-brand-red px-7 py-3 text-base font-bold text-white shadow-[0_12px_30px_-16px_rgba(219,68,37,0.9)] transition hover:bg-red-700 lg:inline-flex"
            >
              Schedule a Call
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
                  onClick={() => {
                    if (item.label === "Services") {
                      handleServicesTopClick()
                    }
                    setMenuOpen(false)
                  }}
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
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-xs font-semibold uppercase tracking-[0.2em] ${
                      isActive ? "text-brand-blue" : "text-slate-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-xs uppercase tracking-[0.2em] text-slate-500">
                Services
              </div>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    activeServiceHref === link.href ? "text-brand-blue" : "text-slate-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="practice-menu-mobile">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Practice Health Check
                </p>
                <Link to="/practice-health-check" onClick={() => setMenuOpen(false)}>
                  Generate Practice Report
                </Link>
              </div>

              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                aria-label="Schedule a call with our team"
                className="whitespace-nowrap rounded-full bg-brand-red px-6 py-3 text-center text-base font-bold text-white shadow-[0_12px_30px_-16px_rgba(219,68,37,0.9)] transition hover:bg-red-700"
              >
                Schedule a Call
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
          <p>© 2026 OPUS BPO. All rights reserved.</p>
        </div>
      </footer>

      <FloatingHealthCheck onActivate={handleFloatingPracticeClick} />
    </div>
  )
}

export default Layout
