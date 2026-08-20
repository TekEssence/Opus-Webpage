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
    <section className="section-tint section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
                Pillars of OPUS
              </p>
              <h2 className="font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-4xl">
                Principles that guide every engagement.
              </h2>
              <p className="text-lg font-medium leading-relaxed text-slate-700">
                Clear operational standards that keep revenue performance consistent.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              {pillars.map((pillar, index) => (
                <div key={pillar.title} className="pb-1 last:pb-0">
                  <p className="text-base font-semibold text-brand-slate">{pillar.title}</p>
                  <p className="mt-1 text-base font-small leading-relaxed text-slate-700">{pillar.detail}</p>
                  {index < pillars.length - 1 && (
                    <div className="mt-1.5 pillar-divider" aria-hidden="true"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="card-metal overflow-hidden rounded-3xl">
            <div className="relative h-80 md:h-[360px]">
              <img
                src="/pillars-7.png"
                alt="Healthcare operations planning"
                loading="lazy"
                decoding="async"
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
            labelClassName="mx-auto w-[235px] text-[11px] tracking-[0.26em]"
            title="Partners of OPUS BPO"
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
