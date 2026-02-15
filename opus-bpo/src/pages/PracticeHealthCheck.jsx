import { useEffect, useMemo, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import SectionHeader from "../components/SectionHeader.jsx"
import {
  practiceMetrics,
  buildPracticeInputs,
  parseMetricEntry,
  formatMetricValue,
} from "../data/practiceHealthCheck.js"

const PracticeHealthCheck = () => {
  const location = useLocation()
  const searchMetric = useMemo(
    () => new URLSearchParams(location.search).get("metric"),
    [location.search]
  )
  const focusedMetric = useMemo(
    () => practiceMetrics.find((metric) => metric.id === searchMetric),
    [searchMetric]
  )
  const visibleMetrics = focusedMetric ? [focusedMetric] : practiceMetrics

  const [inputs, setInputs] = useState(buildPracticeInputs)
  const [results, setResults] = useState({})

  useEffect(() => {
    if (!focusedMetric) return
    const timer = setTimeout(() => {
      const element = document.getElementById(focusedMetric.id)
      element?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 0)
    return () => clearTimeout(timer)
  }, [focusedMetric])

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

    const displayValue = formatMetricValue(computed, metric.precision ?? 1)
    setResults((prev) => ({
      ...prev,
      [metric.id]: {
        text: `${displayValue}${metric.unit ? ` ${metric.unit}` : ""}`,
        isError: false,
      },
    }))
  }

  return (
    <section className="section-tint">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <SectionHeader
          label="Practice Health Check"
          title="Data-driven metrics that spotlight operational gaps."
          description="Run quick diagnostics across your receivables, denials, and collections to see where the team can improve."
        />
        <div className="practice-grid">
          {visibleMetrics.map((metric) => {
            const result = results[metric.id]
            return (
              <article
                key={metric.id}
                id={metric.id}
                className="practice-card reveal"
              >
                <div className="practice-card-header">
                  <p className="practice-card-title">{metric.title}</p>
                  <p className="practice-card-description">{metric.description}</p>
                </div>
                <div className="practice-card-fields">
                  {metric.fields.map((field) => (
                    <label
                      key={field.name}
                      className="practice-card-field"
                    >
                      <span>{field.label}</span>
                      <input
                        type="text"
                        inputMode="decimal"
                        value={inputs[metric.id][field.name]}
                        placeholder={field.placeholder}
                        onChange={(event) =>
                          handleInputChange(metric.id, field.name, event.target.value)
                        }
                      />
                    </label>
                  ))}
                </div>
                <button
                  type="button"
                  className="practice-card-button"
                  onClick={() => handleCalculate(metric)}
                >
                  Calculate
                </button>
                <p
                  className={`practice-card-result ${
                    result?.isError ? "is-error" : ""
                  }`}
                >
                  {result?.text ?? "Awaiting data..."}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PracticeHealthCheck
