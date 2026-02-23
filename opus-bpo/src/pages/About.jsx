import SectionHeader from "../components/SectionHeader.jsx"
import { NavLink } from "react-router-dom"

const About = () => (
  <>
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
        <div className="about-hero reveal">
          <div className="about-hero-particles">
            <span className="about-hero-particle" style={{ top: "12%", left: "18%" }}></span>
            <span className="about-hero-particle" style={{ top: "42%", right: "8%" }}></span>
            <span className="about-hero-particle" style={{ bottom: "16%", left: "24%" }}></span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="about-hero-label">
              <span>About OPUS BPO</span>
            </div>
            <h1 className="max-w-4xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
              Your revenue cycle is our highest operational priority.
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/90">
              We partner with hospitals, clinics, billing companies, and physician groups to deliver disciplined, compliant
              revenue cycle execution with governance-level visibility.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <NavLink to="/about/pillars" className="about-hero-cta">
                Meet the team
              </NavLink>
              <NavLink to="/services" className="about-hero-ghost">
                Explore our services
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-tint section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="grid gap-6">
            <img
              src="/about-2.jpg"
              alt="RCM analysts collaborating"
              className="h-56 w-full rounded-3xl object-cover shadow-subtle"
            />
            <img
              src="/about-3.jpg"
              alt="Healthcare finance review"
              className="h-56 w-full rounded-3xl object-cover shadow-subtle"
            />
          </div>
          <div>
            <SectionHeader
              label="Our Skills"
              title="We bring deep RCM expertise with measurable accountability."
              description="Our teams serve every major segment of the revenue cycle and align with healthcare finance leadership expectations."
            />
            <div className="mt-8 space-y-5">
              {[
                { label: "Revenue Integrity Programs", value: "99%" },
                { label: "Operational Governance", value: "92%" },
                { label: "Compliance Readiness", value: "97%" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm font-semibold text-brand-slate">
                    <span>{item.label}</span>
                    <span className="text-brand-blue">{item.value}</span>
                  </div>
                  <div className="progress-shell mt-2">
                    <div
                      className="progress-fill"
                      style={{ "--target-width": item.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-transparent section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="card-metal rounded-3xl p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Why Choose OPUS
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-brand-slate">
              Enterprise delivery with transparent performance reporting.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              OPUS BPO combines disciplined workflows, payer-specific expertise, and dedicated
              client success coverage to protect revenue performance.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Comprehensive Expertise",
                detail:
                  "RCM specialists with deep exposure to hospital, physician, and multi-specialty billing.",
              },
              {
                title: "Cutting-Edge Controls",
                detail:
                  "Operational dashboards, QA sampling, and denial prevention routines built into every workflow.",
              },
              {
                title: "Custom Strategy",
                detail:
                  "Tailored delivery models aligned to payer mix, compliance posture, and internal reporting cadence.",
              },
            ].map((item, index) => (
              <div key={item.title} className="card-metal rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm font-semibold text-brand-slate">{item.title}</p>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-tint section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeader
            label="Our Achievement"
            title="Operational improvements that matter to revenue leaders."
            description="Representative outcomes from disciplined, compliance-first execution."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { value: "4%", label: "Reduction in denial rate" },
              { value: "17%", label: "Increase in revenue velocity" },
              { value: "$63K", label: "Cost reductions identified" },
              { value: "40", label: "AR days reduced from 55" },
            ].map((item) => (
              <div key={item.label} className="card-metal rounded-2xl p-6 text-center">
                <p className="text-3xl font-semibold text-brand-blue">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
)

export default About
