import SectionHeader from "../components/SectionHeader.jsx"

const pillars = [
  {
    title: "Accuracy",
    detail: "Coding, charge entry, and posting processes supported by layered QA checks.",
  },
  {
    title: "Compliance",
    detail: "HIPAA-aligned workflows, documented SOPs, and audit-ready reporting.",
  },
  {
    title: "Security",
    detail: "Role-based access, secure data handling, and confidentiality agreements.",
  },
  {
    title: "Accountability",
    detail: "Transparent KPIs, governance reviews, and continuous improvement routines.",
  },
]

const AboutPillars = () => (
  <>
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              label="Company Overview"
              title="Built for accuracy, compliance, and measurable cash outcomes."
              description="OPUS BPO supports hospitals and physician groups with disciplined RCM execution and governance-led reporting."
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                We act as an extension of your revenue cycle leadership, aligning people, process, and performance
                to protect reimbursement and reduce avoidable denials.
              </p>
              <p>
                Our delivery model combines payer expertise, standardized workflows, and rigorous quality controls
                so finance teams get predictable, audit-ready results.
              </p>
            </div>
            <div className="mt-6 space-y-4">
  {[
    "Finance alignment with KPI ownership and executive reporting.",
    "Payer-specific edits, policy governance, and denial prevention.",
    "Operational QA with variance analysis and accountability.",
    "Security discipline with HIPAA-aligned access controls.",
  ].map((item) => (
    <div key={item} className="flex items-start gap-3">
      <svg
        className="mt-1 h-4 w-4 text-indigo-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>

      <p className="text-sm text-slate-600 leading-relaxed">
        {item}
      </p>
    </div>
  ))}
</div>
          </div>
          <div className="card-metal overflow-hidden rounded-3xl">
            <div className="relative h-80 md:h-[360px]">
              <img
                src="/pillars-23.png"
                alt="Operations leadership discussion"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-tint section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader
              label="Pillars of OPUS"
              title="Principles that guide every engagement."
              description="Clear operational standards that keep revenue performance consistent."
            />
            <div className="mt-6 space-y-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0">
                  <p className="text-base font-semibold text-brand-slate">{pillar.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-metal overflow-hidden rounded-3xl">
            <div className="relative h-80 md:h-[360px]">
              <img
                src="/pillars-7.png"
                alt="Healthcare operations planning"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-transparent section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="text-center">
          <SectionHeader
            label="Leadership & Partners"
            title="Partners of OPUS BPO"
            description="Add CEO, leadership, and partner photos here."
          />
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((slot) => (
            <div key={slot} className="card-metal overflow-hidden rounded-3xl">
              <div className="h-56 w-full bg-slate-900"></div>
              <div className="bg-white px-6 py-5">
                <div className="h-4 w-32 rounded-full bg-slate-200"></div>
                <div className="mt-3 h-3 w-20 rounded-full bg-slate-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)

export default AboutPillars
