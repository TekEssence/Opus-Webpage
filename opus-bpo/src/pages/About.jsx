import SectionHeader from "../components/SectionHeader.jsx"

const About = () => (
  <>
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-none px-0 py-0">
        <div className="hero-media hero-full reveal">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="OPUS BPO leadership and healthcare collaboration"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/55"></div>
          <div className="relative space-y-6 px-8 py-20 md:px-12 lg:px-16 lg:py-28">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              About OPUS BPO
            </div>
            <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
              Your revenue cycle is our highest operational priority.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-100/90">
              We partner with hospitals, clinics, and physician groups to deliver disciplined,
              compliant revenue cycle execution with governance-level visibility.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-tint section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="grid gap-6">
            <img
              src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="RCM analysts collaborating"
              className="h-56 w-full rounded-3xl object-cover shadow-subtle"
            />
            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
                  <div className="mt-2 h-2 w-full rounded-full bg-blue-100">
                    <div
                      className="h-full rounded-full bg-brand-blue"
                      style={{ width: item.value }}
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
