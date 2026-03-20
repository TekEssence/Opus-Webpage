import { useEffect, useMemo, useRef, useState } from "react"
import {
  practiceMetrics,
  buildPracticeInputs,
  buildMetricResult,
  parseMetricEntry,
} from "../data/practiceHealthCheck.js"

const opusContact = {
  company: "OPUS BPO",
  subtitle: "Medical Billing & Revenue Cycle Management",
  address: "6167 Jarvis Ave, Newark, CA 94560, United States",
  phone: "(630) 272 7618",
  email: "Scott.nowicki@opusbpo.com",
}

const initialClientDetails = {
  companyName: "",
  email: "",
}

const reportDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeStyle: "short",
})

const PracticeHealthCheck = () => {
  const [clientDetails, setClientDetails] = useState(initialClientDetails)
  const [inputs, setInputs] = useState(buildPracticeInputs)
  const [report, setReport] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")
  const reportRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [])

  useEffect(() => {
    if (!report) return

    reportRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [report])

  const benchmarkSummary = useMemo(() => {
    if (!report) return []

    const counts = report.metrics.reduce(
      (acc, metric) => {
        const tone = metric.result.benchmark.tone
        acc[tone] += 1
        return acc
      },
      { good: 0, caution: 0, alert: 0 }
    )

    return [
      { label: "On Target", count: counts.good },
      { label: "Needs Review", count: counts.caution },
      { label: "Action Needed", count: counts.alert },
    ]
  }, [report])

  const handleClientChange = ({ target }) => {
    const { name, value } = target
    setClientDetails((current) => ({
      ...current,
      [name]: value,
    }))
    setErrorMessage("")
  }

  const handleMetricInputChange = (metricId, fieldName, value) => {
    setInputs((prev) => ({
      ...prev,
      [metricId]: {
        ...prev[metricId],
        [fieldName]: value,
      },
    }))
    setErrorMessage("")
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const companyName = clientDetails.companyName.trim()
    const email = clientDetails.email.trim()

    if (!companyName || !email) {
      setErrorMessage("Enter the client company name and email address to generate the report.")
      return
    }

    const metrics = []
    for (const metric of practiceMetrics) {
      const payload = {}
      for (const field of metric.fields) {
        const parsed = parseMetricEntry(inputs[metric.id][field.name])
        if (parsed === null) {
          setErrorMessage(`Enter valid numbers for ${metric.title}.`)
          return
        }
        payload[field.name] = parsed
      }

      const computed = metric.calculate(payload)
      if (computed === null || !Number.isFinite(computed)) {
        setErrorMessage(`Review the values entered for ${metric.title}.`)
        return
      }

      metrics.push({
        id: metric.id,
        title: metric.title,
        description: metric.description,
        result: buildMetricResult(metric, computed),
      })
    }

    const generatedAt = reportDateFormatter.format(new Date())
    setReport({
      client: { companyName, email },
      generatedAt,
      metrics,
    })
    setErrorMessage("")
  }

  return (
    <section className="section-tint practice-health-page">
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="practice-health-shell">
          <div className="practice-health-intro practice-print-hidden">
            <p className="practice-health-eyebrow">Practice Health Check</p>
            <h1 className="practice-health-title">Generate one complete five-metric report.</h1>
            <p className="practice-health-copy">
              Enter the client company details once, add the metric values, and generate a
              blood-report style summary with OPUS branding, benchmark status, and guidance for all
              five revenue cycle metrics.
            </p>
          </div>

          <form className="practice-health-form practice-print-hidden" onSubmit={handleSubmit}>
            <div className="practice-form-block">
              <div className="practice-form-block-header">
                <h2>Client details</h2>
                <p>The report header will use this information.</p>
              </div>
              <div className="practice-client-grid">
                <label className="practice-card-field">
                  <span>Company Name</span>
                  <input
                    type="text"
                    name="companyName"
                    value={clientDetails.companyName}
                    placeholder="Enter client company name"
                    onChange={handleClientChange}
                  />
                </label>
                <label className="practice-card-field">
                  <span>Email Address</span>
                  <input
                    type="email"
                    name="email"
                    value={clientDetails.email}
                    placeholder="name@company.com"
                    onChange={handleClientChange}
                  />
                </label>
              </div>
            </div>

            <div className="practice-form-block">
              <div className="practice-form-block-header">
                <h2>Metric inputs</h2>
                <p>Use your client&apos;s actual numbers to generate the full report.</p>
              </div>
              <div className="practice-metrics-stack">
                {practiceMetrics.map((metric) => (
                  <article key={metric.id} className="practice-card practice-card-wide">
                    <div className="practice-card-header">
                      <p className="practice-card-title">{metric.title}</p>
                      <p className="practice-card-description">{metric.description}</p>
                    </div>
                    <div className="practice-card-fields">
                      {metric.fields.map((field) => (
                        <label key={field.name} className="practice-card-field">
                          <span>{field.label}</span>
                          <input
                            type="text"
                            inputMode="decimal"
                            value={inputs[metric.id][field.name]}
                            placeholder={field.placeholder}
                            onChange={(event) =>
                              handleMetricInputChange(metric.id, field.name, event.target.value)
                            }
                          />
                        </label>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="practice-actions">
              <button type="submit" className="practice-card-button">
                Generate Result Report
              </button>
              <p className="practice-actions-note">
                After generation, the report will appear below on the same page.
              </p>
              {errorMessage && (
                <p className="practice-card-result is-error" aria-live="polite">
                  {errorMessage}
                </p>
              )}
            </div>
          </form>

          {report && (
            <article ref={reportRef} className="practice-report">
              <div className="practice-report-topbar" />
              <header className="practice-report-header">
                <div className="practice-report-brand">
                  <img src="/opus-logo.png" alt="OPUS BPO logo" className="practice-report-logo" />
                  <div>
                    <p className="practice-report-eyebrow">Practice Health Check</p>
                    <h2 className="practice-report-title">Revenue Cycle Performance Report</h2>
                    <p className="practice-report-subtitle">
                      {opusContact.company} | {opusContact.subtitle}
                    </p>
                  </div>
                </div>
                <div className="practice-report-client">
                  <p>
                    <strong>Client Company:</strong> {report.client.companyName}
                  </p>
                  <p>
                    <strong>Email Address:</strong> {report.client.email}
                  </p>
                  <p>
                    <strong>Generated On:</strong> {report.generatedAt}
                  </p>
                </div>
              </header>

              <section className="practice-report-body">
                <div className="practice-report-summary">
                  {benchmarkSummary.map((item) => (
                    <div key={item.label} className="practice-report-summary-card">
                      <strong>{item.count}</strong>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="practice-report-table-wrap">
                  <table className="practice-report-table">
                    <thead>
                      <tr>
                        <th>Metric</th>
                        <th>Result</th>
                        <th>Status</th>
                        <th>Guidance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {report.metrics.map((metric) => (
                        <tr key={metric.id}>
                          <td>
                            <div className="practice-report-metric-name">{metric.title}</div>
                            <div className="practice-report-metric-description">
                              {metric.description}
                            </div>
                          </td>
                          <td className="practice-report-result-cell">{metric.result.text}</td>
                          <td>
                            <span
                              className={`practice-card-indicator is-${metric.result.benchmark.tone}`}
                            >
                              {metric.result.benchmark.label}
                            </span>
                          </td>
                          <td className="practice-report-guidance">
                            {metric.result.benchmark.guidance}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <footer className="practice-report-footer">
                <div>
                  <p className="practice-report-footer-title">{opusContact.company}</p>
                  <p>{opusContact.subtitle}</p>
                </div>
                <div>
                  <p>
                    <strong>Address:</strong> {opusContact.address}
                  </p>
                  <p>
                    <strong>Phone:</strong> {opusContact.phone}
                  </p>
                  <p>
                    <strong>Email:</strong> {opusContact.email}
                  </p>
                </div>
              </footer>
            </article>
          )}
        </div>
      </div>
    </section>
  )
}

export default PracticeHealthCheck
