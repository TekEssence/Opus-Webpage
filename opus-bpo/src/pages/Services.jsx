import { useMemo, useState } from "react"
import SectionHeader from "../components/SectionHeader.jsx"
import ServiceCard from "../components/ServiceCard.jsx"
import { services } from "../data/content.js"

const detailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 4h7l4 4v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6" />
  </svg>
)

const Services = () => {
  const [activeService, setActiveService] = useState(null)
  const serviceDetails = useMemo(
    () => ({
      "Medical Coding": {
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
        headline: "Coding accuracy aligned to ICD-10, CPT, and HCPCS.",
        bullets: [
          "Certified coders with specialty-focused training",
          "Multi-step QA and variance reporting",
          "Payer rule validation before submission",
        ],
      },
      "Credentialing Services": {
        image:
          "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1600&auto=format&fit=crop",
        headline: "Provider enrollment tracked end-to-end.",
        bullets: [
          "Payer enrollment status tracking",
          "Document collection and verification",
          "Re-credentialing and updates managed",
        ],
      },
      "Charge & Demographic Entry": {
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop",
        headline: "Accurate capture of demographics and charges.",
        bullets: [
          "Standardized data entry checkpoints",
          "Validation against scheduling systems",
          "Downstream rework reduction",
        ],
      },
      "Eligibility Verification": {
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
        headline: "Pre-visit checks that reduce avoidable denials.",
        bullets: [
          "Coverage and benefits validation",
          "Authorization and referral checks",
          "Patient financial clarity workflows",
        ],
      },
      "Document Scanning": {
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
        headline: "Digitize and organize critical revenue documents.",
        bullets: [
          "OCR-enabled indexing aligned to your naming conventions",
          "HIPAA-aware handling and controlled access",
          "Daily upload routines with audit-ready logs",
        ],
      },
      "Claim Submission": {
        image:
          "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop",
        headline: "Clean-claim submission aligned to payer edits.",
        bullets: [
          "Payer-specific edit scrubs",
          "Clearinghouse coordination",
          "Submission status monitoring",
        ],
      },
      "Payment Posting": {
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
        headline: "Balanced posting to protect cash flow.",
        bullets: [
          "ERA and EOB posting workflows",
          "Secondary claims balancing",
          "Exception handling and reconciliation",
        ],
      },
      "AR Follow-ups": {
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
        headline: "Structured follow-ups that reduce aging.",
        bullets: [
          "Aging segmentation and prioritization",
          "Payer and patient outreach cadence",
          "Appeals coordination support",
        ],
      },
      "Patient Invoice Management & Self-Pay Revenue Recovery": {
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop",
        headline: "Effective management of patient statements and self-pay collections.",
        bullets: [
          "Accurate, easy-to-read patient statements with itemized charges",
          "Flexible payment options including online, card, and installments",
          "Automated reminders and personalized follow-up outreach",
          "Professional collections management and dispute resolution",
          "Analytics on payment trends, success rates, and account aging",
        ],
      },
      "Denial Management": {
        image:
          "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
        headline: "Root-cause analysis to prevent repeat denials.",
        bullets: [
          "Denial trend analytics",
          "Appeal package preparation",
          "Prevention recommendations",
        ],
      },
      "Appointment Scheduling": {
        image:
          "https://images.unsplash.com/photo-1504817343863-5092a923803e?q=80&w=1600&auto=format&fit=crop",
        headline: "Efficient patient scheduling and appointment management.",
        bullets: [
          "24/7 online scheduling and patient self-booking options",
          "Automated reminders to reduce no-shows and conflicts",
          "Real-time calendar synchronization across teams and devices",
          "Smart waitlist workflows to fill last-minute openings",
        ],
      },
      "Authorization of Services": {
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
        headline: "Efficient prior authorization management for faster approvals.",
        bullets: [
          "Fast electronic submissions to reduce manual paperwork",
          "Real-time status updates for approvals, denials, and follow-ups",
          "Centralized documentation hub for secure file management",
          "Guided workflows aligned to payer-specific requirements",
          "Reporting and analytics to identify bottlenecks and optimize throughput",
        ],
      },
      "Charge Posting & Claims Scrutiny": {
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop",
        headline: "Accurate charge posting with rigorous claim scrutiny.",
        bullets: [
          "Validated charge capture aligned to fee schedules and coding",
          "Exception handling for missing or mismatched charges",
          "Payer rule validation and edit scrubs before submission",
          "Centralized documentation checks for completeness",
          "Reporting to identify bottlenecks and prevent repeat errors",
        ],
      },
      "Receivables Processing & Reconciliation": {
        image:
          "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1600&auto=format&fit=crop",
        headline: "Streamlined remittance processing and reconciliation.",
        bullets: [
          "Efficient payment processing for electronic remits and checks",
          "Thorough reconciliation against invoices and AR ledgers",
          "Discrepancy detection and resolution to protect accuracy",
          "Customizable reporting on payment status and summaries",
          "Compliance-driven handling and secure data controls",
        ],
      },
    }),
    []
  )
  const activeDetail = activeService ? serviceDetails[activeService.title] : null

  return (
    <>
      <section className="bg-transparent">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeader
              label="Service Lines"
              title="Specialized support tailored to your operational needs."
              description="Engage OPUS BPO across the revenue cycle or select focused service modules. Each program is supported by KPI dashboards and continuous improvement routines."
            />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                variant="detail"
                onClick={() => setActiveService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="reveal grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <SectionHeader
              label="Delivery Model"
              title="Structured workflows that reduce risk and stabilize cash flow."
              description="Our delivery teams follow documented SOPs, payer-specific rules, and compliance checkpoints to keep your revenue cycle predictable and audit-ready."
            />
            <div className="grid gap-4">
              {[
                {
                  title: "Intake & Prioritization",
                  detail:
                    "Claims segmented by specialty, payer, and aging to target the highest impact work first.",
                },
                {
                  title: "Processing & QA",
                  detail: "Multi-stage verification with daily sampling and variance reporting.",
                },
                {
                  title: "Reporting & Optimization",
                  detail: "Monthly operational reviews aligned to denial trends and cash acceleration.",
                },
              ].map((item) => (
                <div key={item.title} className="card-metal reveal rounded-2xl p-6">
                  <p className="text-sm font-semibold text-brand-slate">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-6 py-10">
          <div className="card-metal w-full max-w-3xl overflow-hidden rounded-3xl bg-white">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="h-full">
                <img
                  src={activeDetail.image}
                  alt={`${activeService.title} workflow`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                    <span className="text-brand-blue">{detailIcon}</span>
                    {activeService.title}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveService(null)}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-brand-blue hover:text-brand-blue"
                  >
                    Close
                  </button>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-brand-slate">
                  {activeDetail.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {activeService.description}
                </p>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {activeDetail.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-brand-yellow"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Services
