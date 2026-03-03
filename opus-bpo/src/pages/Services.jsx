import { services } from "../data/content.js"

export default function Services() {
  return (
    <main className="relative overflow-hidden bg-[#f5f5f7]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.08),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(236,72,153,0.08),_transparent_24%)]" />

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-500">
            Service Timeline
          </p>
          <h1 className="mt-4 font-heading text-4xl text-slate-800 md:text-5xl">
            Revenue Cycle Workflow
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-500 md:text-lg">
            A clear process timeline showing each OPUS service stage from intake through
            reconciliation.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-fuchsia-200" />
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-sm font-semibold text-white shadow-[0_10px_25px_-12px_rgba(168,85,247,0.7)]">
              14
            </span>
            <span className="h-px w-16 bg-fuchsia-200" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-fuchsia-200 via-violet-200 to-fuchsia-200 md:block" />

          <div className="space-y-12 md:space-y-16">
            {services.map((service, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={service.title}
                  className={`relative grid gap-6 md:grid-cols-2 md:items-center ${
                    isLeft ? "" : "md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1"
                  }`}
                >
                  <div className={`${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="rounded-[2rem] border border-white bg-white px-5 py-5 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.18)] md:px-6 md:py-6">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <span className="inline-flex rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(168,85,247,0.8)]">
                          Stage {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                          OPUS Flow
                        </span>
                      </div>

                      <h2 className="text-2xl font-semibold leading-tight text-violet-700 md:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-sm leading-8 text-slate-500 md:text-base">
                        {service.description}
                      </p>

                      <div className="mt-5 grid gap-3">
                        {service.points.map((point, pointIndex) => (
                          <div
                            key={`${service.title}-point-${pointIndex}`}
                            className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600"
                          >
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-fuchsia-500" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`${isLeft ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="relative rounded-[2rem] border border-white bg-white/80 p-4 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.16)]">
                      <div className="absolute inset-6 rounded-[1.75rem] border border-slate-100" />
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="relative h-56 w-full rounded-[1.5rem] object-cover md:h-64"
                      />
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 z-10 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#f5f5f7] bg-fuchsia-500 shadow-[0_0_0_6px_rgba(217,70,239,0.12)] md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
