import SectionHeader from "../components/SectionHeader.jsx"

const sections = [
  {
    tag: "Advanced Data Analytical Tools",
    title: "Harness the power of data-driven decision-making.",
    body:
      "Our analytics capabilities convert complex data into clear, actionable strategies so leaders can act with confidence.",
    bullets: [
      "Actionable insights that reveal trends and performance drivers.",
      "Customizable dashboards to monitor KPIs by service line.",
      "User-friendly interface for rapid adoption by teams.",
      "Seamless integration with existing data sources and platforms.",
    ],
    image: "/aboutwhy-28.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
        <path d="M4 20V10m6 10V4m6 16v-7m4 7V8" />
      </svg>
    ),
  },
  {
    tag: "Billing Software",
    title: "Billing that is automated, transparent, and reliable.",
    body:
      "Our billing platform streamlines invoicing, improves visibility, and accelerates cash flow without administrative friction.",
    bullets: [
      "One-click invoicing to generate, send, and track bills quickly.",
      "Comprehensive reporting for cash flow and aging visibility.",
      "Seamless payment gateway integration for faster collections.",
      "Recurring billing automation for subscription-based services.",
    ],
    image: "/aboutwhy-24.png",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
        <path d="M3 6h18M6 10h12M6 14h8M6 18h6" />
      </svg>
    ),
  },
  {
    tag: "Free Practice Review",
    title: "A clear, actionable review of your revenue cycle.",
    body:
      "Our no-cost review identifies gaps, benchmarks performance, and surfaces improvement opportunities across billing and collections.",
    bullets: [
      "Comprehensive assessment of billing, claims, and workflow performance.",
      "Personalized recommendations aligned to your business priorities.",
      "Revenue enhancement guidance to reduce denials and delays.",
      "Compliance review to support audit readiness and security.",
    ],
    image: "/aboutwhy-25.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
        <path d="M9 12h6m-6 4h6M7 4h10l3 3v13H4V7l3-3z" />
      </svg>
    ),
  },
  {
    tag: "15/30 Days Trial Period",
    title: "Experience OPUS BPO with a no-obligation trial.",
    body:
      "We provide a structured trial with defined scope, KPIs, and reporting so you can evaluate performance with confidence.",
    bullets: [
      "Scope tailored to your services: coding, eligibility, claims, and more.",
      "KPI reporting on accuracy, turnaround times, and effectiveness.",
      "Seamless integration with existing systems and workflows.",
      "Dedicated support, compliance assurance, and data security.",
    ],
    image: "/aboutwhy-26.png",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
        <path d="M8 7h8m-8 4h5m-2 9a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
      </svg>
    ),
  },
  {
    tag: "Cost Efficiency Solutions",
    title: "Lower cost without compromising performance.",
    body:
      "We help medical billing teams reduce overhead and improve outcomes through scalable, performance-driven delivery.",
    bullets: [
      "Transparent pricing models with flexible payment options.",
      "Scalable service levels to match volume and seasonal demand.",
      "Automation-enabled workflows that reduce manual overhead.",
      "Performance-based cost savings with measurable outcomes.",
    ],
    image: "/aboutwhy-27.png",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
        <path d="M12 3v18m7-7H5m3-6h8m-8 12h8" />
      </svg>
    ),
  },
  {
    tag: "RCM Delivery Excellence",
    title: "We bring deep RCM expertise with measurable accountability.",
    body:
      "Our teams serve every major segment of the revenue cycle and align with healthcare finance leadership expectations.",
    metrics: [
      {
        title: "Clean Claim Rate",
        value: 99,
        description: "Percentage of claims submitted without errors and accepted by payers on the first submission.",
      },
      {
        title: "SLA Adherence",
        value: 98,
        description: "Operational delivery meeting client service-level agreements across supported workflows.",
      },
      {
        title: "Compliance Audit Readiness",
        value: 97,
        description: "Internal and external compliance readiness across supported healthcare billing operations.",
      },
    ],
    images: [
      {
        src: "/about-2.jpg",
        alt: "RCM analysts collaborating",
      },
      {
        src: "/about-3.jpg",
        alt: "Healthcare finance review",
      },
    ],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
        <path d="M4 13h4l2-6 4 12 2-6h4" />
      </svg>
    ),
  },
]

const clientSignals = [
  {
    title: "Multi-specialty Clinic",
    stat: "12% reduction in claim denials",
    detail:
      "Eligibility checks and coding QA reduced avoidable rejections over two quarters.",
  },
  {
    title: "Hospital Outpatient",
    stat: "18% increase in cash velocity",
    detail:
      "Accelerated charge entry and structured AR follow-ups shortened aging cycles.",
  },
  {
    title: "Physician Group",
    stat: "15% increase in first-pass claim acceptance",
    detail:
      "Payer edit scrubs and denial prevention improved clean-claim performance.",
  },
]

const AboutWhy = () => {
  const contentSections = sections.filter((section) => section.tag !== "RCM Delivery Excellence")
  const rcmSection = sections.find((section) => section.tag === "RCM Delivery Excellence")

  return (
    <>
      <section className="bg-transparent">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
            Why OPUS BPO
          </p>
          <h2 className="font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-4xl">
            Operational performance, designed for healthcare finance teams.
          </h2>
          <p className="text-lg font-medium leading-relaxed text-slate-700">
            Purpose-built capabilities that align people, process, and technology to deliver reliable results.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {contentSections.map((section, index) => (
            <div
              key={section.title}
              className={`grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] ${
                index % 2 === 1 ? "lg:grid-cols-[0.95fr_1.05fr]" : ""
              }`}
            >
              {/* TEXT SIDE */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                    {section.icon}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-slate">
                    {section.tag}
                  </p>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-brand-slate">
                  {section.title}
                </h3>

                <p className="mt-4 text-base font-medium leading-relaxed text-slate-700">
                  {section.body}
                </p>

                {section.bullets && (
                  <div className="mt-6 space-y-5">
                    {section.bullets.map((bullet) => (
                      <div key={bullet} className="gradient-bullet">
                        <p className="text-base font-medium leading-relaxed text-slate-700">{bullet}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.metrics && (
                  <div className="mt-8 space-y-5">
                    {section.metrics.map((item) => (
                      <div key={item.title}>
                        <div className="flex items-center justify-between text-sm font-semibold text-brand-slate">
                          <span>{item.title}</span>
                          <span className="text-brand-blue">{item.value}%</span>
                        </div>
                        <div className="progress-shell mt-2">
                          <div
                            className="progress-fill"
                            style={{ "--target-width": `${item.value}%` }}
                          ></div>
                        </div>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>


              {/* IMAGE SIDE */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                {section.images ? (
                  <div className="grid gap-6">
                    {section.images.map((image) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-56 w-full rounded-3xl object-cover shadow-subtle"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-3xl shadow-lg">
                    <img
                      src={section.image}
                      alt={section.tag}
                      loading="lazy"
                      decoding="async"
                      className="h-72 w-full object-cover md:h-[360px]"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {rcmSection && (
        <section className="section-tint section-divider">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="grid gap-6">
                  {rcmSection.images.map((image) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-56 w-full rounded-3xl object-cover shadow-subtle"
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                    {rcmSection.icon}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-slate">
                    {rcmSection.tag}
                  </p>
                </div>

                <h3 className="mt-5 font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-4xl">
                  {rcmSection.title}
                </h3>

                <p className="mt-4 text-base font-medium leading-relaxed text-slate-700 md:text-lg">
                  {rcmSection.body}
                </p>

                <div className="mt-8 space-y-5">
                  {rcmSection.metrics.map((item) => (
                    <div key={item.title}>
                      <div className="flex items-center justify-between text-sm font-semibold text-brand-slate">
                        <span>{item.title}</span>
                        <span className="text-brand-blue">{item.value}%</span>
                      </div>
                      <div className="progress-shell mt-2">
                        <div
                          className="progress-fill"
                          style={{ "--target-width": `${item.value}%` }}
                        ></div>
                      </div>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-transparent section-divider">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
              Client Signals
            </p>
            <h2 className="font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-4xl">
              Measured results without exaggerated promises.
            </h2>
            <p className="text-lg font-medium leading-relaxed text-slate-700">
              Representative performance signals from comparable provider groups.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {clientSignals.map((item) => (
              <div key={item.title} className="card-metal rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  {item.title}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-brand-slate">{item.stat}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutWhy
