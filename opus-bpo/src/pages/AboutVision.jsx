import SectionHeader from "../components/SectionHeader.jsx"

const values = [
  {
    title: "Integrity First",
    detail: "Transparent reporting, governed workflows, and accountable delivery.",
  },
  {
    title: "Precision",
    detail: "Coding and billing accuracy backed by multi-step QA.",
  },
  {
    title: "Confidentiality",
    detail: "HIPAA-aligned privacy and secure data handling.",
  },
]

const AboutVision = () => (
  <>
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-none px-0 py-0">
        <div className="hero-media hero-full reveal">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Healthcare leadership"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
          <div className="relative space-y-6 px-8 py-20 md:px-12 lg:px-16 lg:py-24">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
                Our Core Values
              </p>
              <h2 className="font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-4xl">
                Vision & Mission
              </h2>
              <p className="text-lg font-medium leading-relaxed text-slate-700">
                A disciplined approach to revenue cycle integrity.
              </p>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-100/90">
              We focus on governance-led delivery, compliant data handling, and outcomes that matter
              to healthcare finance leadership.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {values.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white/10 p-5 text-white">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm text-white/80">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-tint section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="grid gap-6">
            <div className="card-metal rounded-3xl p-6">
              <img
                src="/about-6.jpg"
                alt="RCM collaboration"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Our Mission
            </p>
            <h2 className="text-3xl font-semibold text-brand-slate">
              Safeguard revenue with compliance and clarity.
            </h2>
            <p className="text-lg font-medium leading-relaxed text-slate-700">
              We deliver accurate, accountable RCM execution for hospitals and physician groups.
              Every engagement is supported by documented SOPs, secure data handling, and transparent
              KPI reporting.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "HIPAA-aligned workflows.",
                "Dedicated QA sampling.",
                "Structured AR escalation.",
                "Monthly governance reviews.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-blue-100 bg-white/90 p-4 text-sm font-semibold text-brand-slate"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-transparent section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Our Vision
            </p>
            <h2 className="text-3xl font-semibold text-brand-slate">
              Be the trusted operational backbone for healthcare providers.
            </h2>
            <p className="text-lg font-medium leading-relaxed text-slate-700">
              We envision revenue cycle operations that are transparent, compliant, and resilient,
              enabling providers to focus on patient care while maintaining financial stability.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: "Accuracy", value: "98%+" },
                { label: "AR Velocity", value: "15\u201320 days" },
                { label: "Compliance", value: "HIPAA-ready" },
              ].map((item) => (
                <div key={item.label} className="card-metal rounded-2xl p-5 text-center">
                  <p className="text-2xl font-semibold text-brand-blue">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-metal rounded-3xl p-6">
            <img
              src="/about-8.jpg"
              alt="Healthcare leadership alignment"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  </>
)

export default AboutVision

