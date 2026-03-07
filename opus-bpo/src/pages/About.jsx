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
              <NavLink
                to="/about/pillars"
                aria-label="View the OPUS BPO team and company pillars"
                className="about-hero-cta"
              >
                Meet the team
              </NavLink>
              <NavLink
                to="/services"
                aria-label="Explore OPUS BPO services"
                className="about-hero-ghost"
              >
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
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
                Our Skills
              </p>
              <h2 className="font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-4xl">
                We bring deep RCM expertise with measurable accountability.
              </h2>
              <p className="text-lg font-medium leading-relaxed text-slate-700">
                Our teams serve every major segment of the revenue cycle and align with healthcare finance leadership expectations.
              </p>
            </div>
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

    <section className="section-tint section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
              Our Achievement
            </p>
            <h2 className="font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-4xl">
              Operational improvements that matter to revenue leaders.
            </h2>
            <p className="text-lg font-medium leading-relaxed text-slate-700">
              Representative outcomes from disciplined, compliance-first execution.
            </p>
          </div>
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
