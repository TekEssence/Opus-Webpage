import { useEffect, useState } from "react"

const metricDefinitions = [
  {
    id: "daysInAr",
    title: "Days In AR",
    formula: "",
    description: "Measure how quickly the team converts charges into cash.",
    fields: [
      { name: "totalAr", label: "Total AR", placeholder: "e.g. 1,250,000" },
      { name: "avgDailyCharges", label: "Avg Daily Charges", placeholder: "e.g. 3,000" },
    ],
    calculate: ({ totalAr, avgDailyCharges }) =>
      avgDailyCharges ? totalAr / avgDailyCharges : null,
    unit: "days",
    precision: 0,
  },
  {
    id: "denialRate",
    title: "Denial Rate",
    formula: "",
    description: "Keep denials low to protect cash flow and reduce rework.",
    fields: [
      { name: "deniedClaims", label: "Denied Claims", placeholder: "e.g. 1,100" },
      { name: "submittedClaims", label: "Submitted Claims", placeholder: "e.g. 50,000" },
    ],
    calculate: ({ deniedClaims, submittedClaims }) =>
      submittedClaims ? (deniedClaims / submittedClaims) * 100 : null,
    unit: "%",
    precision: 1,
  },
  {
    id: "grossCollectionRate",
    title: "Gross Collection Rate",
    formula: "",
    description: "Shows how much of billed value was collected before adjustments.",
    fields: [
      { name: "payments", label: "Total Payments", placeholder: "e.g. 470,000" },
      { name: "charges", label: "Total Charges", placeholder: "e.g. 500,000" },
    ],
    calculate: ({ payments, charges }) => (charges ? (payments / charges) * 100 : null),
    unit: "%",
    precision: 1,
  },
  {
    id: "netCollectionRate",
    title: "Net Collection Rate",
    formula: "",
    description: "Reflects collections after write-offs and contractual discounts.",
    fields: [
      { name: "netPayments", label: "Payments − Adjustments", placeholder: "e.g. 450,000" },
      { name: "charges", label: "Total Charges", placeholder: "e.g. 500,000" },
    ],
    calculate: ({ netPayments, charges }) => (charges ? (netPayments / charges) * 100 : null),
    unit: "%",
    precision: 1,
  },
  {
    id: "arOver90",
    title: "AR > 90 Days",
    formula: "",
    description: "Highlight the portion of receivables that need rapid attention.",
    fields: [
      { name: "over90", label: "AR Balance > 90 Days", placeholder: "e.g. 120,000" },
      { name: "totalBalance", label: "Total AR Balance", placeholder: "e.g. 600,000" },
    ],
    calculate: ({ over90, totalBalance }) =>
      totalBalance ? (over90 / totalBalance) * 100 : null,
    unit: "%",
    precision: 1,
  },
  {
    id: "firstPassResolutionRate",
    title: "First Pass Resolution Rate",
    formula: "",
    description: "Track how many claims clear on the first pass.",
    fields: [
      { name: "paidOnFirst", label: "Claims Paid on 1st Submission", placeholder: "e.g. 18,000" },
      { name: "totalClaims", label: "Total Claims Submitted", placeholder: "e.g. 20,000" },
    ],
    calculate: ({ paidOnFirst, totalClaims }) =>
      totalClaims ? (paidOnFirst / totalClaims) * 100 : null,
    unit: "%",
    precision: 1,
  },
]

const formatValue = (value, precision = 1) => {
  if (!Number.isFinite(value)) return null
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: precision,
  })
}

const sparkConfigs = [
  { left: "6%", top: "12%", delay: "0s", size: "10px" },
  { left: "25%", top: "8%", delay: "0.3s", size: "8px" },
  { left: "82%", top: "14%", delay: "0.5s", size: "9px" },
  { left: "40%", top: "5%", delay: "0.8s", size: "12px" },
  { left: "70%", top: "20%", delay: "1s", size: "7px" },
  { left: "15%", top: "30%", delay: "1.2s", size: "11px" },
]

const buildInitialInputs = () =>
  metricDefinitions.reduce((acc, metric) => {
    acc[metric.id] = metric.fields.reduce((inner, field) => {
      inner[field.name] = ""
      return inner
    }, {})
    return acc
  }, {})

const parseMetricEntry = (value) => {
  if (!value) return null
  const parsed = parseFloat(value.toString().replace(/,/g, ""))
  return Number.isFinite(parsed) ? parsed : null
}

const RevenueCalculatorPopup = () => {
  const [visible, setVisible] = useState(false)
  const [inputs, setInputs] = useState(() => buildInitialInputs())
  const [results, setResults] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)

  const navigateTo = (offset) => {
    setCurrentIndex((prev) => {
      const target = prev + offset
      if (target < 0) return metricDefinitions.length - 1
      if (target >= metricDefinitions.length) return 0
      return target
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 420)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!visible) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [visible])

  const handleInputChange = (metricId, fieldName, value) => {
    setInputs((prev) => ({
      ...prev,
      [metricId]: {
        ...prev[metricId],
        [fieldName]: value,
      },
    }))
    setResults((prev) => ({
      ...prev,
      [metricId]: undefined,
    }))
  }

  const handleCalculate = (metric) => {
    const payload = {}
    for (const field of metric.fields) {
      const parsed = parseMetricEntry(inputs[metric.id][field.name])
      if (parsed === null) {
        setResults((prev) => ({
          ...prev,
          [metric.id]: { text: "Enter valid numbers", isError: true },
        }))
        return
      }
      payload[field.name] = parsed
    }

    const computed = metric.calculate(payload)
    if (computed === null || !Number.isFinite(computed)) {
      setResults((prev) => ({
        ...prev,
        [metric.id]: { text: "Review inputs above", isError: true },
      }))
      return
    }

    const displayValue = formatValue(computed, metric.precision ?? 1)
    setResults((prev) => ({
      ...prev,
      [metric.id]: {
        text: `${displayValue}${metric.unit ? ` ${metric.unit}` : ""}`,
        isError: false,
      },
    }))
  }

  if (!visible) return null

  return (
    <div
      className="revenue-popup-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Revenue health quick calculator"
    >
      {sparkConfigs.map((spark, index) => (
        <span
          key={`spark-${index}`}
          className="revenue-popup-spark"
          aria-hidden="true"
          style={{
            left: spark.left,
            top: spark.top,
            animationDelay: spark.delay,
            width: spark.size,
            height: spark.size,
          }}
        ></span>
      ))}
      <div className="revenue-popup-panel">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Real-time metrics
            </p>
            <h3 className="text-2xl font-semibold text-slate-900">
              Revenue performance calculators
            </h3>
            <p className="text-sm text-slate-600">
              Enter your figures, tap calculate, and compare performance against the industry
              benchmarks.
            </p>
          </div>
          <button
            type="button"
            className="h-12 w-12 rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-400 transition hover:border-slate-400 hover:text-slate-600"
            onClick={() => setVisible(false)}
            aria-label="Close calculator"
          >
            ×
          </button>
        </div>

        <div className="revenue-metric-sequence">
          <button
            type="button"
            className="revenue-sequence-arrow"
            onClick={() => navigateTo(-1)}
            aria-label="Show previous metric"
          >
            ←
          </button>
          <div className="revenue-metric-card">
            {(() => {
              const metric = metricDefinitions[currentIndex]
              const result = results[metric.id]
              return (
                <>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                    {metric.title}
                  </p>
                  <p className="text-sm text-slate-600">{metric.formula}</p>
                  <p className="mb-4 text-xs text-slate-500">{metric.description}</p>
                  <div className="grid gap-3">
                    {metric.fields.map((field) => (
                      <label key={field.name} className="text-xs font-medium text-slate-600">
                        {field.label}
                        <input
                          type="text"
                          inputMode="decimal"
                          value={inputs[metric.id][field.name]}
                          onChange={(event) =>
                            handleInputChange(metric.id, field.name, event.target.value)
                          }
                          placeholder={field.placeholder}
                          className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm transition focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
                        />
                      </label>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-2xl bg-gradient-to-r from-brand-blue to-brand-red px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg transition hover:opacity-90"
                    onClick={() => handleCalculate(metric)}
                  >
                    Calculate
                  </button>
                  <p
                    className={`mt-3 text-base font-semibold ${
                      result?.isError ? "text-rose-500" : "text-slate-900"
                    }`}
                  >
                    {result?.text ?? "Awaiting data..."}
                  </p>
                </>
              )
            })()}
          </div>
          <button
            type="button"
            className="revenue-sequence-arrow"
            onClick={() => navigateTo(1)}
            aria-label="Show next metric"
          >
            →
          </button>
        </div>
        <div className="revenue-sequence-meta">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {metricDefinitions[currentIndex].title} → Next:{" "}
            {metricDefinitions[(currentIndex + 1) % metricDefinitions.length].title}
          </p>
          <div className="revenue-sequence-dots">
            {metricDefinitions.map((metric, index) => (
              <span
                key={metric.id}
                className={`revenue-sequence-dot ${
                  index === currentIndex ? "is-active" : ""
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RevenueCalculatorPopup
