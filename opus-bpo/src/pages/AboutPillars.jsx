import { useEffect, useRef } from "react"
import SectionHeader from "../components/SectionHeader.jsx"

// Enable when the remaining partner profiles are ready to display.
const showAdditionalPartnerCards = false

const benBiography = [
  "Ben Thatha is the President of OPUS BPO, Inc., bringing over 20 years of extensive experience in Revenue Cycle Management (RCM), healthcare business operations, and information technology. Throughout his career, he has helped healthcare providers, independent physician practices, and medical billing organizations enhance operational efficiency, optimize revenue performance, and establish scalable business processes.",
  "With comprehensive expertise across the revenue cycle, Ben has led diverse RCM operations encompassing medical billing, coding, accounts receivable management, denial management, payment posting, credentialing, and revenue optimization across multiple medical specialties.",
  "In addition to his extensive RCM experience, Ben has a strong background in information technology, having previously managed large-scale Oracle data mining and data analysis projects. His combined expertise in healthcare operations and technology provides a unique perspective on leveraging data to identify operational trends, uncover revenue opportunities, improve financial performance, and support informed business decisions.",
  "Under his leadership, OPUS continues to strengthen its position as a trusted RCM partner, delivering comprehensive solutions to healthcare organizations across the United States. His focus remains on building strong client relationships, driving operational excellence, developing high-performing teams, and maintaining exceptional service quality.",
  "His leadership philosophy centers on fostering long-term partnerships and achieving sustainable growth through operational excellence, data-driven decision-making, and a people-first approach.",
]

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

const AboutPillars = () => {
  const biographyDialog = useRef(null)
  const previousOverflow = useRef(null)

  const restoreScroll = () => {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current
      previousOverflow.current = null
    }
  }

  useEffect(() => () => {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current
    }
  }, [])

  const openBiography = () => {
    biographyDialog.current.showModal()
    previousOverflow.current = document.body.style.overflow
    document.body.style.overflow = "hidden"
  }

  return (
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
            label="Leadership"
            labelClassName="mx-auto w-[235px] text-[11px] tracking-[0.26em]"
            title="Leader of OPUS BPO"
          />
        </div>
        <div className="mt-10 space-y-6">
          <article
            aria-label="Ben Thatha, President"
            onPointerMove={(event) => {
              if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
              const card = event.currentTarget
              const bounds = card.getBoundingClientRect()
              const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width))
              const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height))
              card.style.setProperty("--tilt-x", `${(0.5 - y) * 5}deg`)
              card.style.setProperty("--tilt-y", `${(x - 0.5) * 5}deg`)
              card.style.setProperty("--light-x", `${x * 100}%`)
              card.style.setProperty("--light-y", `${y * 100}%`)
            }}
            onPointerLeave={(event) => {
              event.currentTarget.style.removeProperty("--tilt-x")
              event.currentTarget.style.removeProperty("--tilt-y")
              event.currentTarget.style.removeProperty("--light-x")
              event.currentTarget.style.removeProperty("--light-y")
            }}
            className="leadership-card relative mx-auto grid max-w-5xl cursor-pointer items-center gap-5 rounded-2xl border border-sky-100 bg-sky-50 p-5 shadow-sm md:grid-cols-[200px_minmax(0,1fr)] md:gap-6 md:p-6"
          >
          <div className="mx-auto w-full max-w-[200px] overflow-hidden">
            <img
              src="/Ben%20photo.png"
              alt="Ben Thatha, President"
              loading="lazy"
              decoding="async"
              width="1107"
              height="1421"
              className="leadership-portrait block h-auto w-full"
            />
            <div className="px-3 pt-3 text-center">
              <h3 className="font-heading text-xl font-semibold text-brand-slate">Ben Thatha</h3>
              <p className="mt-1 text-sm font-semibold text-slate-600">President</p>
            </div>
          </div>
          <div className="space-y-3 text-base leading-relaxed text-slate-700">
            {benBiography.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <button
              type="button"
              onClick={openBiography}
              aria-haspopup="dialog"
              aria-controls="ben-biography-dialog"
              className="cursor-pointer rounded px-2 py-1 text-sm font-normal text-slate-500 underline decoration-slate-300 underline-offset-4 transition-colors duration-200 after:absolute after:inset-0 after:rounded-2xl after:content-[''] hover:bg-sky-100 hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
            >
              Read more<span className="sr-only"> about Ben Thatha</span>
            </button>
          </div>
          </article>
          {showAdditionalPartnerCards && [1, 2].map((slot) => (
            <div key={slot} className="card-metal w-full max-w-sm overflow-hidden rounded-3xl">
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
    <dialog
      ref={biographyDialog}
      id="ben-biography-dialog"
      aria-labelledby="ben-biography-title"
      onClose={restoreScroll}
      onClick={(event) => {
        if (event.target === event.currentTarget) biographyDialog.current.close()
      }}
      className="leadership-dialog fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-2xl border border-sky-100 bg-sky-50 p-0 text-slate-700 shadow-2xl backdrop:bg-slate-900/50 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 md:p-8">
        <div className="mb-6 flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <h2 id="ben-biography-title" className="font-heading text-2xl font-semibold text-brand-slate">Ben Thatha</h2>
            <p className="mt-1 text-sm text-slate-500">President | OPUS BPO, Inc.</p>
          </div>
          <button
            type="button"
            onClick={() => biographyDialog.current.close()}
            autoFocus
            aria-label="Close biography"
            className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
          >
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="grid items-start gap-6 md:grid-cols-[200px_minmax(0,1fr)]">
          <img
            src="/Ben%20photo.png"
            alt="Ben Thatha, President of OPUS BPO, Inc."
            width="1107"
            height="1421"
            decoding="async"
            className="mx-auto block h-auto w-full max-w-[200px] rounded-lg"
          />
          <div className="space-y-5 text-base leading-relaxed">
            {benBiography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </dialog>
  </>
  )
}

export default AboutPillars
