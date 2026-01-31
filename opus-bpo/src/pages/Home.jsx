import { Link } from "react-router-dom"
import { useEffect } from "react"
import SectionHeader from "../components/SectionHeader.jsx"
import { services, trustIndicators } from "../data/content.js"

const metrics = [
  {
    number: "1",
    value: "95%",
    label: "NET COLLECTION RATE",
    position: "top",
    gradientStart: "#4dd5f3",
    gradientEnd: "#16a34a",
  },
  {
    number: "2",
    value: "80%",
    label: "FIRST PASS ACCEPT RATE",
    position: "bottom",
    gradientStart: "#4dd5f3",
    gradientEnd: "#16a34a",
  },
  {
    number: "3",
    value: "95%",
    label: "CODING ACCURACY",
    position: "top",
    gradientStart: "#4dd5f3",
    gradientEnd: "#16a34a",
  },
  {
    number: "4",
    value: "10%",
    label: "AGING > 90 DAYS",
    position: "bottom",
    gradientStart: "#4dd5f3",
    gradientEnd: "#16a34a",
  },
  {
    number: "5",
    value: "30",
    label: "AR DAYS",
    position: "top",
    gradientStart: "#4dd5f3",
    gradientEnd: "#16a34a",
  },
]

const ringRadius = 68
const ringCircumference = 2 * Math.PI * ringRadius

const serviceAccents = [
  { start: "#34d399", end: "#14b8a6" },
  { start: "#facc15", end: "#fb923c" },
  { start: "#38bdf8", end: "#6366f1" },
  { start: "#a855f7", end: "#ec4899" },
  { start: "#f472b6", end: "#fb7185" },
  { start: "#60a5fa", end: "#22d3ee" },
]

const serviceIcons = [
  (
    <svg viewBox="0 0 32 32" className="h-10 w-10">
      <rect x="6" y="8" width="20" height="16" rx="3" strokeWidth="2" stroke="currentColor" fill="none" />
      <path d="M10 12h12M10 16h10M10 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg viewBox="0 0 32 32" className="h-10 w-10">
      <circle cx="16" cy="12" r="4" strokeWidth="2" stroke="currentColor" fill="none" />
      <path d="M10 24c1-3 3-4 6-4s5 1 6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  ),
  (
    <svg viewBox="0 0 32 32" className="h-10 w-10">
      <path d="M6 24h20M10 20l6-8 6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M10 14h12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 32 32" className="h-10 w-10">
      <circle cx="11" cy="12" r="3" strokeWidth="2" stroke="currentColor" fill="none" />
      <circle cx="21" cy="12" r="3" strokeWidth="2" stroke="currentColor" fill="none" />
      <path d="M6 24c2-2 4-3 5-3s3 1 5 3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M26 24c-2-2-4-3-5-3s-3 1-5 3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  ),
  (
    <svg viewBox="0 0 32 32" className="h-10 w-10">
      <circle cx="16" cy="11" r="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="23" r="2" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  (
    <svg viewBox="0 0 32 32" className="h-10 w-10">
      <rect x="8" y="8" width="16" height="16" rx="4" strokeWidth="2" stroke="currentColor" fill="none" />
      <path d="M14 13h4M14 17h6M14 21h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
]

const serviceHighlights = services.slice(0, 6).map((service, index) => ({
  ...service,
  accent: serviceAccents[index % serviceAccents.length],
  icon: serviceIcons[index % serviceIcons.length],
}))

const serviceBlocks = [
  {
    title: "Patient Access & Intake",
    summary:
      "Patient access, eligibility, and pre-registration workflows keep your front desk efficient and denials minimal.",
    bullets: [
      "Eligibility verification & benefit confirmation",
      "Appointment scheduling & pre-visit intake",
      "Charge capture & demographic accuracy",
      "Prior authorization tracking",
    ],
    image: "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1400",
    accentStart: "#facc15",
    accentEnd: "#fb7185",
  },
  {
    title: "Claims Preparation & Submission",
    summary:
      "Clean claim preparation, payer edits, and smart routing ensure your claims stay compliant and timely.",
    bullets: [
      "Medical coding with QA sampling",
      "Claim scrub & payer-specific edits",
      "Denial prevention monitoring",
      "Electronic submission & tracking",
    ],
    image: "https://images.pexels.com/photos/5709398/pexels-photo-5709398.jpeg?auto=compress&cs=tinysrgb&w=1400",
    accentStart: "#38bdf8",
    accentEnd: "#4ade80",
  },
  {
    title: "Accounts Receivable & Recovery",
    summary:
      "AR follow-up, denial resolution, and reporting deliver the financial clarity your leadership expects.",
    bullets: [
      "AR follow-ups & payer outreach",
      "Payment posting & reconciliation",
      "Denial management & appeals",
      "Strategic reporting for executive governance",
    ],
    image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1400",
    accentStart: "#c084fc",
    accentEnd: "#f472b6",
  },
]

const optionSteps = [
  { label: "1", title: "Option" },
  { label: "2", title: "Option" },
  { label: "3", title: "Option" },
  { label: "4", title: "Option" },
  { label: "5", title: "Option" },
]

const OptionBubble = ({ number, label }) => (
  <div className="option-bubble">
    <div className="option-ring">
      <div className="option-inner">
        <span className="option-number">{number}</span>
        <span className="option-label">{label}</span>
      </div>
    </div>
  </div>
)

const workflowSteps = [
  {
    id: "01",
    title: "Capture",
    description: "Demographics, charges, and coding validated with QA checkpoints.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Submit",
    description: "Payer edits, clean-claim submission, and tracking.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Collect",
    description: "ERA/EOB posting, AR follow-ups, and appeals support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Optimize",
    description: "Trend analysis, denial prevention, and governance reporting.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
]

const StepCard = ({ id, title, description, icon }) => (
  <article className="workflow-card">
    <span className="workflow-card-step">{id}</span>
    <div className="workflow-card-icon">{icon}</div>
    <h3 className="workflow-card-title">{title}</h3>
    <p className="workflow-card-description">{description}</p>
  </article>
)

const WorkflowInfographic = () => {
  const leftSteps = [workflowSteps[0], workflowSteps[2]]
  const rightSteps = [workflowSteps[1], workflowSteps[3]]

  return (
    <section className="relative w-full py-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="workflow-panel mx-auto w-full max-w-5xl">
          <div className="workflow-grid">
            <div className="workflow-lines" aria-hidden="true">
              <div className="workflow-line workflow-line-h-top" />
              <div className="workflow-line workflow-line-h-bottom" />
            </div>
            <div className="workflow-column">
              {leftSteps.map((item) => (
                <StepCard key={item.id} {...item} />
              ))}
            </div>
            <div className="workflow-center" aria-hidden="true">
              <div className="workflow-center-circle">
                <div className="workflow-center-label">RCM</div>
                <div className="workflow-center-title">Workflow</div>
                <span className="workflow-center-dot workflow-center-dot-top" />
                <span className="workflow-center-dot workflow-center-dot-bottom" />
                <span className="workflow-center-dot workflow-center-dot-left" />
                <span className="workflow-center-dot workflow-center-dot-right" />
              </div>
            </div>
            <div className="workflow-column">
              {rightSteps.map((item) => (
                <StepCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal")
    if (!revealElements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25, rootMargin: "0px 0px -100px 0px" }
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-none px-0 py-0">
        <div className="hero-media hero-full reveal">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video hero-video-stack hero-video-1"
            poster="https://images.pexels.com/photos/8460035/pexels-photo-8460035.jpeg?auto=compress&cs=tinysrgb&w=1600"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-doctors-using-tablet-9155/1080p.mp4"
              type="video/mp4"
            />
          </video>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video hero-video-stack hero-video-2"
            poster="https://images.pexels.com/photos/7108157/pexels-photo-7108157.jpeg?auto=compress&cs=tinysrgb&w=1600"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-hospital-hallway-5177/1080p.mp4"
              type="video/mp4"
            />
          </video>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video hero-video-stack hero-video-3"
            poster="https://images.pexels.com/photos/6291290/pexels-photo-6291290.jpeg?auto=compress&cs=tinysrgb&w=1600"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-nurses-preparing-medication-7605/1080p.mp4"
              type="video/mp4"
            />
          </video>
          <div className="space-y-8 px-8 py-16 md:px-12 lg:px-16 lg:py-24">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Healthcare Revenue Cycle Management
            </div>
            <div className="space-y-6 max-w-3xl">
              <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
                Revenue cycle execution built for hospital finance leadership.
              </h1>
              <p className="text-lg leading-relaxed text-slate-100/90">
                OPUS BPO delivers disciplined medical billing, coding, and AR performance for healthcare
                hospitals, clinics, and physician groupsâ€”anchored to HIPAA requirements, payer
                accuracy, and measurable cash flow outcomes.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-white/80">
              {[
                "HIPAA-aligned operations",
                "Multi-step quality checks",
                "Payer expertise",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-yellow"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-tint section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="reveal space-y-10">
          <SectionHeader
            label="Maximizing Revenue. Minimizing Stress."
            title="RCM programs engineered for accuracy, speed, and stability."
            description="Our team supports healthcare providers with timely, accurate claim submission and end-to-end revenue cycle execution."
          />
          <div className="space-y-4 text-sm leading-relaxed text-slate-600">
            <p>
              OPUS BPO delivers modern revenue cycle management that streamlines billing, maximizes
              reimbursements, and reduces denials through automated workflows and analytics-driven
              decisions.
            </p>
            <p>
              We align people, process, and technology to improve operational efficiency and compliance,
              giving your organization consistent performance without added burden.
            </p>
          </div>
          <div className="mt-10 px-8 py-8">
            <style>{`
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
              .spinning-ring {
                animation: spin 3s linear infinite;
              }
            `}</style>
            <div className="relative flex items-center justify-center" style={{ gap: "-15px" }}>
              {metrics.map((metric, index) => (
                <div
                  key={metric.number}
                  className={`relative ${metric.position === "top" ? "-mt-12" : "mt-12"} transition-all duration-300`}
                  style={{
                    zIndex: 5 - Math.abs(2 - index),
                    marginLeft: index > 0 ? "-15px" : "0",
                  }}
                >
                  <div className="relative w-36 h-36">
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                      <defs>
                        <linearGradient id={`hero-gradient-${metric.number}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={metric.gradientStart} stopOpacity="1" />
                          <stop offset="100%" stopColor={metric.gradientEnd} stopOpacity="1" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="72"
                        cy="72"
                        r={ringRadius}
                        stroke="#e5e7eb"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        className="spinning-ring"
                        cx="72"
                        cy="72"
                        r={ringRadius}
                        stroke={`url(#hero-gradient-${metric.number})`}
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={ringCircumference}
                        strokeDashoffset={ringCircumference * 0.25}
                        strokeLinecap="round"
                        style={{ transformOrigin: "72px 72px" }}
                      />
                    </svg>
                    <div className="absolute inset-3 bg-white rounded-full shadow-xl flex flex-col items-center justify-center border-2 border-gray-100">
                      <div
                        className="absolute -top-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${metric.gradientStart}, ${metric.gradientEnd})`,
                          color: "#1f2937",
                        }}
                      >
                        {metric.number}
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-0.5">{metric.value}</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-[0.4em] text-center px-4 leading-tight font-medium">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                    {index < metrics.length - 1 && (
                      <div
                        className="absolute top-1/2 -right-4 w-8 h-1 z-0"
                      style={{ backgroundColor: "#ff9a00", transform: "translateY(-50%)" }}
                      />
                    )}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-brand-blue/20 bg-white/90 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Where We Lead in Excellence
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Every engagement is tailored to your practice goals, ensuring reliable billing operations
              and stronger financial outcomes so you can focus on patient care.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-tint section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="reveal grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <SectionHeader
            label="Governance-Led Delivery"
            title="Operate your revenue cycle with board-level visibility."
            description="We combine payer-specific workflows with disciplined QA, AR escalation, and monthly governance reporting."
          />
          <div className="grid gap-4">
            {trustIndicators.map((item) => (
              <div key={item.title} className="card-metal reveal rounded-2xl p-6">
                <p className="text-sm font-semibold text-brand-slate">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
            <div className="card-metal reveal rounded-2xl p-6">
              <p className="text-sm font-semibold text-brand-slate">Operational Visibility</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Dashboards and monthly reviews aligned to denial trends, cash acceleration, and
                compliance KPIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-transparent section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            label="Operational Blueprint"
            title="A structured workflow for reliable collections."
            description="Four mapped phases that make performance predictable, auditable, and scalable."
          />
          <div className="max-w-xl text-base leading-relaxed text-slate-600">
            Each step has defined inputs, QA controls, and outputs to reduce rework and ensure clean
            claims.
          </div>
        </div>
        <div className="mt-10">
          <WorkflowInfographic />
        </div>
      </div>
    </section>

    <section className="section-tint section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeader
            label="Core Capabilities"
            title="Specialized RCM services aligned to your payer mix."
            description="Select individual service lines or engage end-to-end delivery."
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold tracking-[0.4em] text-slate-500">
          {serviceBlocks.map((block) => (
            <span
              key={block.title}
              className="rounded-full border border-white/50 bg-white/50 px-4 py-2 text-slate-600 shadow-sm"
            >
              {block.title}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-stretch">
          {serviceBlocks.map((block) => (
            <div
              key={block.title}
              className="relative flex-1 overflow-hidden rounded-[999px] border border-white/20 bg-gradient-to-b from-white/95 via-white/85 to-white/90 px-12 py-14 text-slate-900 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)]"
              style={{ minHeight: "450px" }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: `radial-gradient(circle at 20% 20%, ${block.accentStart}, transparent 55%)` }}
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: `radial-gradient(circle at 80% 80%, ${block.accentEnd}, transparent 50%)` }}
              />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-5">
                  <div
                    className="h-6 w-6 rounded-full"
                    style={{ background: `linear-gradient(135deg, ${block.accentStart}, ${block.accentEnd})` }}
                  />
                  <h3 className="text-3xl font-semibold leading-tight">{block.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{block.summary}</p>
                <div className="space-y-3 text-sm font-medium text-slate-600 pl-2">
                  {block.bullets.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1 inline-flex h-2.5 w-2.5 rounded-full"
                        style={{ background: `linear-gradient(135deg, ${block.accentStart}, ${block.accentEnd})` }}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/services"
            className="inline-flex items-center rounded-full border border-brand-blue px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue transition hover:bg-blue-50"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>

    <section className="option-pipeline section-divider">
      <div className="mx-auto max-w-5xl px-6 py-16 reveal">
        <div className="option-pipeline-track">
          {optionSteps.map((step, index) => (
            <div key={step.label} className="option-pipeline-node">
              <div className="option-pipeline-ring">
                <div className="option-pipeline-inner">
                  <div className="option-pipeline-number">{step.label}</div>
                  <div className="option-pipeline-title">{step.title}</div>
                </div>
              </div>
              {index < optionSteps.length - 1 && (
                <span className="option-pipeline-connector" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-tint section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            label="Compliance Stack"
            title="Security and confidentiality embedded in every workflow."
            description="Controls designed for healthcare privacy expectations."
          />
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            "HIPAA-aligned workflows",
            "Role-based access control",
            "Encrypted data transfer",
            "Audit-ready activity logs",
            "Confidentiality agreements",
            "Business continuity planning",
            "Secure data retention",
            "Multi-step QA checks",
          ].map((item) => (
            <div
              key={item}
              className="card-metal reveal flex items-center justify-center rounded-2xl px-6 py-5 text-center text-sm font-semibold text-brand-slate"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-transparent section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            label="Client Signals"
            title="Measured results without exaggerated promises."
            description="Representative performance signals from comparable provider groups."
          />
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Multi-specialty Clinic",
              stat: "Down 22% denials",
              detail:
                "Eligibility checks and coding QA reduced avoidable rejections over two quarters.",
            },
            {
              title: "Hospital Outpatient",
              stat: "Up 18% cash velocity",
              detail:
                "Accelerated charge entry and structured AR follow-ups shortened aging cycles.",
            },
            {
              title: "Physician Group",
              stat: "Up 15% first-pass",
              detail:
                "Payer edit scrubs and denial prevention improved clean-claim performance.",
            },
          ].map((item) => (
            <div key={item.title} className="card-metal reveal rounded-2xl p-6">
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

    <section className="section-tint section-divider">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeader
            label="FAQ"
            title="Direct answers for healthcare finance leaders."
            description="Operational clarity before engagement."
          />
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[
            {
              q: "How do you protect PHI and HIPAA obligations?",
              a: "We follow role-based access controls, confidentiality agreements, and audit-ready workflows aligned to HIPAA requirements.",
            },
            {
              q: "What reporting cadence do you provide?",
              a: "Weekly operational updates and monthly governance reviews tied to KPIs and denial trends.",
            },
            {
              q: "Can you work within our existing EHR or PM system?",
              a: "Yes. We align to your tools and workflows with documented SOPs and onboarding checklists.",
            },
            {
              q: "What turnaround times can we expect?",
              a: "Charge entry within 24–48 hours and daily payment posting, depending on volume and scope.",
            },
          ].map((item) => (
            <div key={item.q} className="card-metal reveal rounded-2xl p-6">
              <p className="text-sm font-semibold text-brand-slate">{item.q}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}

export default Home
