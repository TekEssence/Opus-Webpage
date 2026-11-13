import SectionHeader from "../components/SectionHeader.jsx"

// Enable when the remaining partner profiles are ready to display.
const showAdditionalPartnerCards = false

const benBiography = [
  "Ben Thatha is the President of OPUS BPO, Inc., bringing over 20 years of extensive experience in Revenue Cycle Management (RCM), healthcare business operations, and information technology. He has dedicated his career to helping healthcare providers, independent physician practices, and medical billing organizations improve operational efficiency, optimize revenue performance, and build scalable business processes.",
  "With deep expertise across the entire revenue cycle, Ben has led and managed diverse RCM operations spanning medical billing, coding, accounts receivable management, denial management, payment posting, credentialing, and revenue optimization across multiple medical specialties.",
  "In addition to his extensive RCM experience, Ben brings a strong background in information technology, having previously managed large-scale Oracle data mining and data analysis projects. This combination of healthcare domain knowledge and technology expertise gives him a unique perspective on leveraging data to identify operational trends, uncover revenue opportunities, improve financial performance, and drive informed business decisions. He strongly believes that data analytics and technology play a critical role in transforming healthcare revenue cycle management.",
  "Under his leadership, OPUS has continued to strengthen its capabilities as a trusted RCM partner, delivering comprehensive, technology-enabled solutions to healthcare organizations across the United States. He is particularly focused on building strong client partnerships, driving operational excellence, developing high-performing teams, and leveraging technology and automation to transform traditional healthcare revenue cycle operations.",
  "Ben is passionate about the evolving role of artificial intelligence, automation, and advanced data analytics in healthcare. He is actively focused on integrating innovative technologies into RCM workflows to improve productivity, enhance revenue outcomes, and deliver greater value to clients.",
  "His leadership philosophy centers on building long-term relationships, maintaining a strong commitment to service quality, and creating sustainable growth through operational excellence, innovation, data-driven decision-making, and a people-first approach.",
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
        <div className="mt-10 grid items-start gap-8 md:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <div className="mx-auto w-full max-w-[260px] overflow-hidden border border-slate-200 bg-white">
            <img
              src="/Ben%20photo.png"
              alt="Ben Thatha, President of OPUS BPO, Inc."
              loading="lazy"
              decoding="async"
              width="1107"
              height="1421"
              className="block h-auto w-full"
            />
            <div className="bg-white px-5 py-4 text-center">
              <h3 className="font-heading text-xl font-semibold text-brand-slate">Ben Thatha</h3>
              <p className="mt-1 text-sm text-slate-600">President</p>
            </div>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            {benBiography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
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
  </>
)

export default AboutPillars
