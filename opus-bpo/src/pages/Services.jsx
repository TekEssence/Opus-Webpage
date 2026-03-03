import { useEffect, useRef, useState } from "react"
import { services } from "../data/content.js"

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRefs = useRef([])
  const timelineRefs = useRef([])
  const pendingIndex = useRef(0)
  const frameRef = useRef(null)
  const currentIndexRef = useRef(activeIndex)

  useEffect(() => {
    currentIndexRef.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    const updateActiveIndex = () => {
      frameRef.current = null
      if (pendingIndex.current === currentIndexRef.current) return
      setActiveIndex(pendingIndex.current)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          pendingIndex.current = Number(entry.target.dataset.index)
        })

        if (frameRef.current === null) {
          frameRef.current = window.requestAnimationFrame(updateActiveIndex)
        }
      },
      {
        rootMargin: "-30% 0px -40% 0px",
        threshold: 0.35,
      }
    )

    cardRefs.current.forEach((node) => {
      if (node) observer.observe(node)
    })

    return () => {
      observer.disconnect()
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current)
    }
  }, [])

  useEffect(() => {
    const target = timelineRefs.current[activeIndex]
    target?.scrollIntoView({ behavior: "auto", block: "nearest" })
  }, [activeIndex])

  const cardThemes = [
    {
      shell: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,239,214,0.95) 45%, rgba(255,216,214,0.92) 100%)",
      accent: "from-orange-500 via-amber-400 to-pink-500",
      glow: "bg-orange-200/60",
      chip: "bg-orange-100 text-orange-700",
      dot: "bg-orange-500",
    },
    {
      shell: "linear-gradient(135deg, rgba(240,249,255,0.92) 0%, rgba(224,242,254,0.9) 38%, rgba(217,249,255,0.9) 100%)",
      accent: "from-sky-500 via-cyan-400 to-teal-400",
      glow: "bg-cyan-200/60",
      chip: "bg-cyan-100 text-cyan-700",
      dot: "bg-cyan-500",
    },
    {
      shell: "linear-gradient(135deg, rgba(250,245,255,0.92) 0%, rgba(243,232,255,0.9) 42%, rgba(254,226,226,0.88) 100%)",
      accent: "from-fuchsia-500 via-violet-400 to-rose-400",
      glow: "bg-fuchsia-200/60",
      chip: "bg-fuchsia-100 text-fuchsia-700",
      dot: "bg-fuchsia-500",
    },
    {
      shell: "linear-gradient(135deg, rgba(240,253,244,0.94) 0%, rgba(220,252,231,0.9) 42%, rgba(224,242,254,0.88) 100%)",
      accent: "from-emerald-500 via-lime-400 to-sky-400",
      glow: "bg-emerald-200/60",
      chip: "bg-emerald-100 text-emerald-700",
      dot: "bg-emerald-500",
    },
  ]

  return (
    <main className="relative overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(249,115,22,0.22),_transparent_34%),linear-gradient(180deg,_#eef8ff_0%,_#f8fafc_72%)]" />
      <section className="relative mx-auto w-full max-w-6xl px-6 pb-8 pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-sky-700 shadow-sm backdrop-blur">
              Service Lines
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl font-heading text-4xl leading-tight text-slate-900 md:text-6xl">
                Revenue cycle support that feels sharper, faster, and easier to trust.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                The same OPUS service portfolio, re-framed in a more human way: clearer pathways,
                cleaner handoffs, stronger compliance, and a service experience designed to feel
                modern instead of mechanical.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-3xl border border-white/70 bg-white/90 px-5 py-4 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.45)] backdrop-blur">
                <p className="text-2xl font-semibold text-slate-900">{services.length}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Service tracks
                </p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white/90 px-5 py-4 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.45)] backdrop-blur">
                <p className="text-2xl font-semibold text-slate-900">1 team</p>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Unified workflow
                </p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white/90 px-5 py-4 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.45)] backdrop-blur">
                <p className="text-2xl font-semibold text-slate-900">100%</p>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Same trusted scope
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-orange-300/40 blur-3xl" />
            <div className="absolute right-4 top-0 h-32 w-32 rounded-full bg-sky-300/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_35px_70px_-35px_rgba(15,23,42,0.35)] backdrop-blur">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  What changes here
                </p>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  New look
                </span>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-4 text-white shadow-lg">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
                    Designed for scanning
                  </p>
                  <p className="mt-2 text-base leading-7">
                    Sticky navigation, stronger color contrast, and cleaner visual grouping so each
                    service reads faster.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-orange-50 p-4">
                    <p className="text-sm font-semibold text-orange-700">More warmth</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Softer gradients and brighter accents make the page feel less corporate.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-fuchsia-50 p-4">
                    <p className="text-sm font-semibold text-fuchsia-700">More clarity</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Editorial cards separate imagery, summaries, and bullets without crowding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="sticky top-24 z-20 mb-8 overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.42)] backdrop-blur">
          <div className="mb-3 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Browse Services
            </p>
            <p className="text-xs font-medium text-slate-500">
              Tap any item to jump directly
            </p>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {services.map((service, index) => (
              <button
                key={service.title}
                type="button"
                ref={(node) => (timelineRefs.current[index] = node)}
                className={`group shrink-0 rounded-2xl border px-4 py-3 text-left transition ${
                  activeIndex === index
                    ? "border-slate-900 bg-slate-900 text-white shadow-lg"
                    : "border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:bg-sky-50"
                }`}
                onClick={() => {
                  cardRefs.current[index]?.scrollIntoView({ behavior: "auto", block: "center" })
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-xl text-xs font-semibold tracking-[0.18em] ${
                      activeIndex === index
                        ? "bg-white/15 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-white"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-[11rem] text-sm font-semibold leading-5">{service.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              ref={(node) => (cardRefs.current[index] = node)}
              data-index={index}
              className={`relative overflow-hidden rounded-[2.25rem] border border-white/70 p-5 shadow-[0_32px_75px_-42px_rgba(15,23,42,0.4)] transition duration-300 md:p-7 ${
                activeIndex === index ? "scale-[1.01]" : ""
              }`}
              style={{
                background: cardThemes[index % cardThemes.length].shell,
              }}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r opacity-90 ${cardThemes[index % cardThemes.length].accent}`}
              />
              <div className={`absolute ${index % 2 === 0 ? "-right-12 top-10" : "-left-12 bottom-10"} h-40 w-40 rounded-full blur-3xl ${cardThemes[index % cardThemes.length].glow}`} />
              <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="absolute -inset-3 rounded-[2rem] bg-white/40 blur-2xl" />
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/50 p-3">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-[260px] w-full rounded-[1.35rem] object-cover md:h-[320px]"
                    />
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-semibold text-white shadow-lg ${cardThemes[index % cardThemes.length].accent}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${cardThemes[index % cardThemes.length].chip}`}
                    >
                      OPUS workflow
                    </span>
                  </div>
                  <h2 className="max-w-2xl font-heading text-3xl leading-tight text-slate-900 md:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-3">
                    {service.points.map((point, pointIndex) => (
                      <li
                        key={`${service.title}-point-${pointIndex}`}
                        className="flex items-start gap-3 rounded-2xl border border-white/60 bg-white/60 px-4 py-3 text-sm leading-7 text-slate-700 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.45)]"
                      >
                        <span
                          className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${cardThemes[index % cardThemes.length].dot}`}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
