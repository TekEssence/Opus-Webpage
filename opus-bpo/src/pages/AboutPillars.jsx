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

const overviewMetrics = [
  { value: "500+", label: "Employees" },
  { value: "100+", label: "Healthcare Clients" },
  { value: "1M+", label: "Claims Processed" },
  { value: "25+", label: "Years of RCM Experience" },
]

const AboutPillars = () => (
  <>
    <section className="relative overflow-hidden bg-transparent">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_left_top,rgba(255,255,255,0.6),transparent_38%),radial-gradient(circle_at_85%_25%,rgba(255,255,255,0.28),transparent_24%)]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative">
            <div className="absolute -left-4 top-14 hidden h-32 w-32 rounded-full border border-white/40 bg-white/20 blur-2xl lg:block"></div>
            <div className="relative overflow-hidden rounded-[34px] border border-white/60 bg-[linear-gradient(160deg,rgba(255,255,255,0.9),rgba(241,245,249,0.82)_48%,rgba(226,232,240,0.74))] p-8 shadow-[0_30px_80px_-42px_rgba(15,23,42,0.55)] backdrop-blur-sm md:p-10">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(37,99,235,0.85),rgba(14,165,233,0.6),rgba(250,204,21,0.55))]"
                aria-hidden="true"
              ></div>
              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Company Overview
                </p>
                <h2 className="max-w-[16ch] font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-5xl">
                  Built for accuracy, compliance, and measurable cash outcomes.
                </h2>
                <p className="max-w-3xl text-lg font-medium leading-relaxed text-slate-700">
                  OPUS BPO supports hospitals and physician groups with structured revenue cycle execution, payer-aligned billing workflows, and governance-driven reporting.
                </p>
              </div>
              <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
                <div className="space-y-4 text-medium font-medium leading-relaxed text-slate-700">
                  <p>
                    We operate as an extension of your revenue cycle leadership, coordinating billing teams, payer policy controls, and performance reporting to protect reimbursement and reduce avoidable denials.
                  </p>
                  <p>
                    Our delivery model combines payer policy expertise, standardized claim workflows, and multi-layer quality review so finance teams receive predictable, audit-ready revenue cycle outcomes.
                  </p>
                </div>
                <div className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_16px_40px_-32px_rgba(15,23,42,0.45)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Above The Surface
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">
                    Clients experience cleaner claim submissions, fewer payer rejections, and more stable reimbursement cycles.
                  </p>
                  <div className="mt-4 space-y-3">
                    {["Accuracy", "Compliance", "Cash Performance"].map((item) => (
                      <div key={item} className="flex items-center justify-between border-b border-slate-200/70 pb-3 last:border-b-0 last:pb-0">
                        <span className="text-sm font-semibold text-brand-slate">{item}</span>
                        <span className="h-2 w-16 rounded-full bg-[linear-gradient(90deg,rgba(37,99,235,0.9),rgba(14,165,233,0.35))]"></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative mt-8 overflow-hidden rounded-[32px] border border-white/60 bg-[linear-gradient(145deg,rgba(255,255,255,0.95),rgba(240,247,252,0.94)_42%,rgba(214,229,239,0.98))] px-6 py-6 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.52)] lg:px-8">
                <div
                  className="pointer-events-none absolute right-[-8%] top-[-12%] h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.14),transparent_68%)]"
                  aria-hidden="true"
                ></div>
                <div
                  className="pointer-events-none absolute left-[-6%] bottom-[-18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.42),transparent_72%)]"
                  aria-hidden="true"
                ></div>
                <div
                  className="pointer-events-none absolute left-[46%] top-[15%] hidden h-[70%] w-px bg-[linear-gradient(180deg,transparent,rgba(148,163,184,0.35),transparent)] lg:block"
                  aria-hidden="true"
                ></div>
                <div
                  className="pointer-events-none absolute left-[6%] right-[6%] top-[5.2rem] h-px bg-[linear-gradient(90deg,transparent,rgba(148,163,184,0.35),transparent)]"
                  aria-hidden="true"
                ></div>
                <div className="relative">
                  <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                    <div className="flex flex-col">
                      <div className="mt-4 overflow-hidden rounded-[28px] border border-white/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.78),rgba(226,238,247,0.86))] p-6 shadow-[0_20px_50px_-36px_rgba(15,23,42,0.4)]">
                        <p className="max-w-[12ch] font-heading text-4xl font-semibold leading-[0.96] text-brand-slate md:text-5xl">
                          Scale beneath every outcome.
                        </p>
                        <p className="mt-4 max-w-md text-base font-medium leading-relaxed text-slate-600">
                          What providers experience in billing performance is supported by long-standing operational experience, high-volume claim processing, and structured revenue cycle governance.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                        Operational scale supporting our revenue cycle delivery
                      </p>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {overviewMetrics.map((metric, index) => (
                          <div
                            key={metric.label}
                            className={`group relative overflow-hidden rounded-[26px] border border-white/75 p-6 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.38)] ${
                              index === 0
                                ? "bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(229,240,249,0.95))]"
                                : index === 1
                                  ? "bg-[linear-gradient(160deg,rgba(255,255,255,0.9),rgba(240,244,255,0.95))]"
                                : index === 2
                                    ? "bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(230,245,245,0.96))]"
                                    : "bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(241,239,251,0.96))]"
                            }`}
                          >
                            <div
                              className="pointer-events-none absolute inset-x-6 top-0 h-1 rounded-full bg-[linear-gradient(90deg,rgba(37,99,235,0.95),rgba(14,165,233,0.45))]"
                              aria-hidden="true"
                            ></div>
                            <div
                              className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-white/35 blur-2xl transition-transform duration-500 group-hover:scale-125"
                              aria-hidden="true"
                            ></div>
                            <p className="relative mt-5 font-heading text-4xl font-semibold leading-none text-brand-slate xl:text-5xl">
                              {metric.value}
                            </p>
                            <p className="relative mt-4 max-w-[12ch] text-base font-medium leading-snug text-slate-600">
                              {metric.label}
                            </p>
                            <div className="relative mt-8 h-px w-full bg-[linear-gradient(90deg,rgba(148,163,184,0.3),transparent)]"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:pt-6">
            <div className="grid gap-5">
              <div className="rounded-[30px] border border-white/60 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(239,246,255,0.82))] p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Revenue Cycle Focus
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight text-brand-slate">
                  Governance-led delivery backed by scale, control, and reporting discipline.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/70 bg-white/75 px-5 py-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Client Confidence
                    </p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700">
                      Structured workflows and audit-ready reporting that finance teams can rely on.
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-slate-200/80 bg-slate-950 px-5 py-4 text-white shadow-[0_20px_45px_-34px_rgba(15,23,42,0.9)]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                      Delivery Backbone
                    </p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-slate-100">
                      Experienced teams, KPI ownership, and denial prevention processes operating in sync.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-metal overflow-hidden rounded-[34px] border border-white/50 shadow-[0_28px_70px_-40px_rgba(15,23,42,0.6)]">
                <div className="relative h-80 md:h-[400px] lg:h-[460px]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.18))]"></div>
                  <img
                    src="/pillars-23.png"
                    alt="Operations leadership discussion"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-white/35 bg-slate-950/55 px-5 py-4 text-white backdrop-blur-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-200/80">
                      Inside The Operation
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-snug">
                      Experienced teams, structured workflows, and oversight that protects reimbursement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-[24px] border border-white/75 bg-white/80 px-5 py-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.32)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Client Outcomes
                  </p>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-700">
                    Faster claim turnaround, cleaner submissions, and consistent revenue cycle reporting.
                  </p>
                </div>
                <div className="rounded-[24px] border border-slate-800/80 bg-[linear-gradient(180deg,#071126,#0f1e42)] px-5 py-5 text-white shadow-[0_24px_50px_-34px_rgba(2,6,23,0.9)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-300">
                    Operational Foundation
                  </p>
                  <p className="mt-2 text-base font-medium leading-relaxed text-slate-100">
                    Experienced billing specialists, multi-specialty provider support, and sustained claim throughput form the operational foundation behind those outcomes.
                  </p>
                </div>
              </div>
              <div className="rounded-[28px] border border-white/65 bg-white/75 px-6 py-5 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.32)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Delivery Priorities
                </p>
                <div className="mt-4 space-y-3.5">
                  {[
                    "Finance alignment with KPI ownership and executive reporting.",
                    "Payer-specific edits, policy governance, and denial prevention.",
                    "Operational QA with variance analysis and accountability.",
                    "Security discipline with HIPAA-aligned access controls.",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-5 w-5 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-base font-medium leading-relaxed text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
