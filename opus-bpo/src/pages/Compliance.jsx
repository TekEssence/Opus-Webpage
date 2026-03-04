import { complianceItems } from "../data/content.js"

const Compliance = () => (
  <section className="section-tint">
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal space-y-6">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-blue">
              Compliance & Security
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight text-brand-slate md:text-4xl">
              Governance aligned with healthcare expectations.
            </h2>
            <p className="text-lg font-medium leading-relaxed text-slate-700">
              We prioritize privacy, security, and accountability in every workflow. Our compliance
              standards support HIPAA obligations, payer requirements, and internal audit readiness.
            </p>
          </div>
          <div className="card-metal rounded-3xl bg-white p-7 shadow-[0_20px_44px_-24px_rgba(15,23,42,0.28)]">
            <p className="text-lg font-bold text-brand-slate">Confidentiality Standard</p>
            <p className="mt-3 text-m font-medium leading-relaxed text-slate-800">
              Every client engagement is governed by formal confidentiality terms, controlled access
              protocols, and documented data retention practices.
            </p>
          </div>
        </div>
        <div className="card-metal reveal rounded-3xl bg-white p-8 shadow-[0_28px_56px_-28px_rgba(15,23,42,0.24)]">
          <div className="grid gap-5">
            {complianceItems.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="mt-2.5 h-2.5 w-2.5 rounded-full bg-brand-yellow"></span>
                <p className="text-lg font-medium leading-relaxed text-slate-900">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-2xl border border-blue-300 bg-blue-100 p-7">
            <p className="text-lg font-bold text-brand-slate">Security Practices</p>
            <p className="mt-3 text-lg font-medium leading-relaxed text-slate-900">
              Role-based access controls, encrypted data transfer, and audit-ready activity logs are
              foundational to our delivery approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Compliance
