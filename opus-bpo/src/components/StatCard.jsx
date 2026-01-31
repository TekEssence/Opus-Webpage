import { useEffect, useRef, useState } from "react"

const StatCard = ({ value, suffix, label }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const cardRef = useRef(null)

  useEffect(() => {
    const node = cardRef.current
    if (!node) return

    let started = false
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) return
          started = true
          const duration = 900
          const startTime = performance.now()

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            setDisplayValue(Math.round(progress * value))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.disconnect()
        })
      },
      { threshold: 0.6 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  return (
    <div
      ref={cardRef}
      className="card-metal reveal rounded-2xl p-6 text-center"
    >
      <div className="flex items-baseline justify-center gap-1 text-2xl font-semibold text-brand-blue">
        <span>{displayValue}</span>
        <span className="text-sm font-semibold text-brand-yellow">{suffix}</span>
      </div>
      <p className="mt-3 text-xs uppercase tracking-wide text-slate-500">
        {label}
      </p>
    </div>
  )
}

export default StatCard
