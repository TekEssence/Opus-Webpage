import { NavLink } from "react-router-dom"

const overviewMetrics = [
  { value: "500+", label: "Employees" },
  { value: "100+", label: "Healthcare Clients" },
  { value: "1M+", label: "Claims Processed" },
  { value: "25+", label: "Years of RCM Experience" },
]

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

    <section className="relative overflow-hidden bg-transparent section-divider">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_left_top,rgba(255,255,255,0.6),transparent_38%),radial-gradient(circle_at_85%_25%,rgba(255,255,255,0.28),transparent_24%)]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative">
            <div className="absolute -left-4 top-14 hidden h-32 w-32 rounded-full border border-white/40 bg-white/20 blur-2xl lg:block"></div>
            <div className="relative overflow-hidden rounded-[34px] border border-white/60 bg-[linear-gradient(155deg,rgba(255,255,255,0.92),rgba(234,244,252,0.9)_34%,rgba(228,236,248,0.88)_62%,rgba(244,235,223,0.72))] p-8 shadow-[0_30px_80px_-42px_rgba(15,23,42,0.55)] backdrop-blur-sm md:p-10">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(37,99,235,0.85),rgba(14,165,233,0.6),rgba(250,204,21,0.55))]"
                aria-hidden="true"
              ></div>
              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Company Overview
                </p>
                <h2 className="max-w-[32ch] font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-4xl">
                  Built for accuracy, compliance,
                  <br />
                  and measurable cash outcomes.
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
                <div className="rounded-[28px] border border-sky-100/90 bg-[linear-gradient(160deg,rgba(255,255,255,0.9),rgba(232,245,255,0.88),rgba(238,247,232,0.76))] p-5 shadow-[0_16px_40px_-32px_rgba(15,23,42,0.45)]">
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
              <div className="relative mt-8 overflow-hidden rounded-[32px] border border-white/60 bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(236,246,255,0.95)_32%,rgba(225,239,245,0.96)_62%,rgba(246,236,228,0.78))] px-6 py-6 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.52)] lg:px-8">
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
                      <div className="mt-4 overflow-hidden rounded-[28px] border border-white/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.82),rgba(225,239,255,0.86),rgba(243,247,225,0.68))] p-6 shadow-[0_20px_50px_-36px_rgba(15,23,42,0.4)]">
                        <p className="max-w-[12ch] font-heading text-4xl font-semibold leading-[0.96] text-brand-slate md:text-4xl">
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
                                ? "bg-[linear-gradient(160deg,rgba(255,255,255,0.94),rgba(220,238,255,0.96),rgba(236,247,255,0.92))]"
                                : index === 1
                                  ? "bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(236,241,255,0.96),rgba(244,238,255,0.9))]"
                                  : index === 2
                                    ? "bg-[linear-gradient(160deg,rgba(255,255,255,0.94),rgba(229,247,240,0.96),rgba(238,251,247,0.9))]"
                                    : "bg-[linear-gradient(160deg,rgba(255,255,255,0.94),rgba(245,238,255,0.96),rgba(255,243,235,0.88))]"
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
              <div className="rounded-[30px] border border-white/60 bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(233,245,255,0.88),rgba(245,239,224,0.74))] p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Revenue Cycle Focus
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight text-brand-slate">
                  Governance-led delivery backed by scale, control, and reporting discipline.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-cyan-300/70 bg-[linear-gradient(155deg,#d9f4ff,#bfe8ff_55%,#9fd9ff)] px-5 py-4 shadow-[0_20px_40px_-28px_rgba(14,165,233,0.35)]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-900/70">
                      Client Confidence
                    </p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-sky-950/80">
                      Structured workflows and audit-ready reporting that finance teams can rely on.
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-cyan-200/40 bg-[linear-gradient(180deg,#0f3f4c,#155e75)] px-5 py-4 text-white shadow-[0_20px_45px_-34px_rgba(21,94,117,0.5)]">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100/70">
                      Delivery Backbone
                    </p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-cyan-50">
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
                <div className="rounded-[24px] border border-cyan-300/70 bg-[linear-gradient(155deg,#d9f4ff,#bfe8ff_55%,#9fd9ff)] px-5 py-5 shadow-[0_20px_40px_-28px_rgba(14,165,233,0.35)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-900/70">
                    Client Outcomes
                  </p>
                  <p className="mt-2 text-base font-medium leading-relaxed text-sky-950/80">
                    Faster claim turnaround, cleaner submissions, and consistent revenue cycle reporting.
                  </p>
                </div>
                <div className="rounded-[24px] border border-cyan-200/40 bg-[linear-gradient(180deg,#0f3f4c,#155e75)] px-5 py-5 text-white shadow-[0_20px_45px_-34px_rgba(21,94,117,0.5)]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/80 ">
                    Operational Foundation
                  </p>
                  <p className="mt-2 text-base font-medium leading-relaxed text-cyan-50">
                    Experienced billing specialists, multi-specialty provider support, and sustained claim throughput form the operational foundation behind those outcomes.
                  </p>
                </div>
              </div>
              <div className="rounded-[28px] border border-white/65 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(243,247,255,0.86),rgba(248,241,233,0.74))] px-6 py-5 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.32)]">
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
