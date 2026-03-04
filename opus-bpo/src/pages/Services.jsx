import { useState } from "react"
import { services } from "../data/content.js"

export default function Services() {
  const [activeMobileService, setActiveMobileService] = useState(0)

  return (
    <main className="relative overflow-hidden bg-[linear-gradient(90deg,_rgba(37,150,190,0.28)_0%,_rgba(244,219,214,0.8)_50%,_rgba(255,212,19,0.32)_100%)]">
      <style>{`
        @keyframes service-card-shine {
          0% {
            transform: translateX(-220%) skewX(-18deg);
          }
          100% {
            transform: translateX(320%) skewX(-18deg);
          }
        }

        @keyframes service-image-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <section className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2596be]">
            Service Lines
          </p>
          <h1 className="mt-4 font-heading text-4xl text-slate-800 md:text-5xl">
            Built to Support Healthcare. Designed to Deliver Results.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-8 text-slate-600 md:text-lg">
            Delivering reliable medical billing and revenue cycle services built on
            accuracy, compliance, and measurable outcomes.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-[2px] w-16 bg-[linear-gradient(90deg,rgba(37,150,190,0.7),rgba(255,212,19,0.5))]" />
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2596be,#ffd413,#db4425)] text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(219,68,37,0.45)]">
              14
            </span>
            <span className="h-[2px] w-16 bg-[linear-gradient(90deg,rgba(255,212,19,0.5),rgba(219,68,37,0.7))]" />
          </div>
        </div>

        <div className="space-y-4 md:hidden">
          {services.map((service, index) => {
            const isActive = activeMobileService === index

            return (
              <div
                key={`${service.title}-mobile`}
                className={`overflow-hidden rounded-[1.75rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(255,247,206,0.92),rgba(230,245,250,0.9),rgba(255,228,220,0.92))] shadow-[0_20px_40px_-28px_rgba(37,150,190,0.28),0_24px_48px_-30px_rgba(219,68,37,0.16)] transition-all duration-300 ${
                  isActive ? "scale-[1.01]" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveMobileService(index)}
                  className="flex w-full items-center gap-3 px-4 py-4 text-left"
                  aria-label={`${isActive ? "Collapse" : "Expand"} details for ${service.title}`}
                  aria-expanded={isActive}
                >
                  <span className="inline-flex min-w-14 justify-center rounded-full bg-[linear-gradient(135deg,#2596be,#ffd413,#db4425)] px-3 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_-14px_rgba(219,68,37,0.4)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base font-semibold text-[#1e4f86]">
                    {service.title}
                  </span>
                  <span className="text-lg font-semibold text-[#1e4f86]" aria-hidden="true">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                {isActive && (
                  <div className="px-4 pb-4">
                    <div className="overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/70 p-2 shadow-[0_16px_30px_-24px_rgba(15,23,42,0.24)]">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="h-44 w-full rounded-[1.15rem] object-cover"
                      />
                    </div>
                    <div className="mt-4 rounded-[1.5rem] border border-white/60 bg-white/35 p-4 backdrop-blur-[2px]">
                      <p className="text-sm leading-7 text-slate-800">
                        {service.description}
                      </p>
                      <div className="mt-4 grid gap-3">
                        {service.points.map((point, pointIndex) => (
                          <div
                            key={`${service.title}-mobile-point-${pointIndex}`}
                            className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm leading-7 text-slate-800"
                          >
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#db4425]" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="relative hidden md:block">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-[2px] -translate-x-1/2 bg-[linear-gradient(180deg,rgba(37,150,190,0.5),rgba(219,68,37,0.32),rgba(255,212,19,0.45))] md:block" />

          <div className="space-y-12 md:space-y-16">
            {services.map((service, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={service.title}
                  className={`relative grid gap-3 md:gap-6 md:grid-cols-2 md:items-center ${
                    isLeft ? "" : "md:[&>div:first-child]:order-2 md:[&>div:last-child]:order-1"
                  }`}
                >
                  <div className={`${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="relative translate-y-[-2px] overflow-hidden rounded-[2rem] border border-white/85 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,247,206,0.92),rgba(230,245,250,0.9),rgba(255,228,220,0.92))] px-5 py-5 shadow-[0_18px_30px_-18px_rgba(255,255,255,0.9),0_30px_70px_-30px_rgba(37,150,190,0.34),0_42px_80px_-38px_rgba(219,68,37,0.22),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(219,68,37,0.08)] md:px-6 md:py-6">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-6 top-0 h-8 rounded-b-[1.25rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.75),transparent)]"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-10 right-0 w-10 bg-[linear-gradient(270deg,rgba(255,255,255,0.18),transparent)]"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 -left-3/4 w-2/3 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.1)_18%,rgba(255,255,255,0.55)_42%,rgba(255,255,255,0.78)_50%,rgba(255,255,255,0.55)_58%,rgba(255,255,255,0.1)_82%,transparent_100%)] opacity-80"
                        style={{ animation: "service-card-shine 4.8s ease-in-out infinite" }}
                      />
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <span className="inline-flex rounded-full bg-[linear-gradient(135deg,#2596be,#ffd413,#db4425)] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(219,68,37,0.45)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h2 className="text-2xl font-semibold leading-tight text-[#1e4f86] md:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-sm leading-8 text-slate-800 md:text-base">
                        {service.description}
                      </p>

                      <div className="mt-5 grid gap-3">
                        {service.points.map((point, pointIndex) => (
                          <div
                            key={`${service.title}-point-${pointIndex}`}
                            className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/45 px-4 py-3 text-sm leading-7 text-slate-800 backdrop-blur-[2px]"
                          >
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#db4425]" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`-mt-4 md:mt-0 ${isLeft ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="group relative rounded-[2.25rem] bg-white/20 px-3 pb-3 pt-0 backdrop-blur-[2px] md:bg-transparent md:px-0 md:pb-0">
                      <div className="relative h-56 w-full rounded-[2rem] border border-white bg-white/80 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.16)] transition-all duration-700 ease-in-out group-hover:mx-auto group-hover:w-56 group-hover:rounded-full md:h-64 md:group-hover:w-64">
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-[-6px] rounded-[1.9rem] opacity-0 transition-all duration-700 ease-in-out group-hover:rounded-full group-hover:opacity-100"
                        >
                          <div
                            className="absolute inset-0 rounded-[inherit]"
                            style={{
                              background:
                                "conic-gradient(from 0deg, rgba(249,115,22,0) 0deg, rgba(249,115,22,0) 48deg, rgba(249,115,22,0.95) 85deg, rgba(251,191,36,0.9) 132deg, rgba(249,115,22,0) 170deg, rgba(249,115,22,0) 228deg, rgba(249,115,22,0.95) 275deg, rgba(251,191,36,0.9) 320deg, rgba(249,115,22,0) 360deg)",
                              animation: "service-image-ring 2.4s linear infinite",
                            }}
                          />
                          <div className="absolute inset-[4px] rounded-[inherit] bg-white/90" />
                        </div>
                        <div className="absolute inset-6 rounded-[1.75rem] border border-slate-100 transition-all duration-700 ease-in-out group-hover:inset-2 group-hover:rounded-full" />
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          className="relative h-56 w-full rounded-[1.5rem] object-cover transition-all duration-700 ease-in-out group-hover:h-full group-hover:rounded-full md:h-64"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 z-10 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[linear-gradient(135deg,#2596be,#ffd413,#db4425)] shadow-[0_0_0_6px_rgba(37,150,190,0.12)] md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
