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
    image:
      "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.8">
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
    image:
      "https://images.pexels.com/photos/4386156/pexels-photo-4386156.jpeg?auto=compress&cs=tinysrgb&w=1400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.8">
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
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.8">
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
    image:
      "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.8">
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
    image:
      "https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=1400",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-gold" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v18m7-7H5m3-6h8m-8 12h8" />
      </svg>
    ),
  },
]

const AboutWhy = () => (
  <section className="bg-transparent">
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionHeader
        label="Why OPUS BPO"
        title="Operational performance, designed for healthcare finance teams."
        description="Purpose-built capabilities that align people, process, and technology to deliver reliable results."
      />
      <div className="mt-8 space-y-8">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`why-row grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] ${
              index % 2 === 1 ? "lg:grid-cols-[0.95fr_1.05fr]" : ""
            }`}
          >
            <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  {section.icon}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-slate">{section.tag}</p>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-brand-slate">{section.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{section.body}</p>
              <div className="mt-5 space-y-3">
                {section.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-3 border-l-2 border-brand-gold/70 bg-transparent pl-4"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-gold"></span>
                    <p className="text-sm text-slate-600">{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="why-image overflow-hidden rounded-3xl">
                <img src={section.image} alt={section.tag} className="h-72 w-full object-cover md:h-[340px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default AboutWhy
