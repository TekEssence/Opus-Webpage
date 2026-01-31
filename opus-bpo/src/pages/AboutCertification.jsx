import SectionHeader from "../components/SectionHeader.jsx"

const certifications = [
  "HIPAA-aligned privacy practices",
  "Secure data handling standards",
  "Documented access controls",
  "Audit-ready reporting routines",
]

const AboutCertification = () => (
  <section className="bg-transparent">
    <div className="mx-auto w-full max-w-5xl px-6 py-20">
      <SectionHeader
        label="About Us"
        title="Certification"
        description="Compliance standards that support regulated healthcare workflows."
      />
      <div className="mt-8 card-metal rounded-2xl p-8">
        <p className="text-sm leading-relaxed text-slate-600">
          Our delivery teams adhere to HIPAA-aligned policies, confidentiality agreements, and
          secure data handling protocols designed to support audits and payer requirements.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {certifications.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-sm font-semibold text-brand-slate"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default AboutCertification
