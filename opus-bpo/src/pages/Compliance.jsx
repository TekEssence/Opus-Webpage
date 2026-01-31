import SectionHeader from "../components/SectionHeader.jsx"
import { complianceItems } from "../data/content.js"

const Compliance = () => (
  <section className="section-tint">
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal space-y-6">
          <SectionHeader
            label="Compliance & Security"
            title="Governance aligned with healthcare expectations."
            description="We prioritize privacy, security, and accountability in every workflow. Our compliance standards support HIPAA obligations, payer requirements, and internal audit readiness."
          />
          <div className="card-metal rounded-3xl p-6">
            <p className="text-sm font-semibold text-brand-slate">Confidentiality Standard</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Every client engagement is governed by formal confidentiality terms, controlled access
              protocols, and documented data retention practices.
            </p>
          </div>
        </div>
        <div className="card-metal reveal rounded-3xl p-8">
          <div className="grid gap-4">
            {complianceItems.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="mt-2 h-2 w-2 rounded-full bg-brand-yellow"></span>
                <p className="text-sm leading-relaxed text-slate-600">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm font-semibold text-brand-slate">Security Practices</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
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
