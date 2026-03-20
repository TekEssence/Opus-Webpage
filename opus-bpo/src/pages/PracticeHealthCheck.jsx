import { useEffect, useMemo, useState } from "react"
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

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")

const sanitizeFileName = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

const buildDownloadMarkup = ({ report, summary, logoSource }) => {
  const summaryMarkup = summary
    .map(
      (item) => `
        <div class="summary-card">
          <strong>${escapeHtml(item.count)}</strong>
          <span>${escapeHtml(item.label)}</span>
        </div>
      `
    )
    .join("")

  const metricRows = report.metrics
    .map(
      (metric) => `
        <tr>
          <td>
            <div class="metric-name">${escapeHtml(metric.title)}</div>
            <div class="metric-description">${escapeHtml(metric.description)}</div>
          </td>
          <td class="result-cell">${escapeHtml(metric.result.text)}</td>
          <td>
            <span class="status-pill status-${escapeHtml(metric.result.benchmark.tone)}">
              ${escapeHtml(metric.result.benchmark.label)}
            </span>
          </td>
          <td>${escapeHtml(metric.result.benchmark.industryStandard)}</td>
        </tr>
      `
    )
    .join("")

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(report.client.companyName)} Revenue Cycle Performance Report</title>
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        padding: 28px;
        background: #eef5fa;
        font-family: Arial, sans-serif;
        color: #10253e;
      }
      .report {
        max-width: 1100px;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 28px;
        overflow: hidden;
        border: 1px solid #d8e4ee;
      }
      .topbar {
        height: 10px;
        background: linear-gradient(90deg, #2596be, #ffd413, #db4425);
      }
      .header {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        padding: 28px 32px;
        border-bottom: 1px solid #dbe6ee;
      }
      .brand {
        display: flex;
        gap: 18px;
        align-items: center;
      }
      .brand img {
        width: 88px;
        height: auto;
      }
      .eyebrow {
        margin: 0 0 8px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #2596be;
      }
      .title {
        margin: 0;
        font-size: 28px;
        line-height: 1.1;
      }
      .subtitle {
        margin: 8px 0 0;
        color: #4d647c;
        font-size: 14px;
      }
      .client-box {
        min-width: 300px;
        background: #f4f9fd;
        border: 1px solid #d8e4ee;
        border-radius: 20px;
        padding: 18px 20px;
      }
      .client-box p {
        margin: 0 0 10px;
        font-size: 14px;
      }
      .client-box p:last-child {
        margin-bottom: 0;
      }
      .body {
        padding: 24px 32px 30px;
      }
      .summary {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        margin-bottom: 22px;
      }
      .summary-card {
        border: 1px solid #d8e4ee;
        border-radius: 20px;
        background: #f4f9fd;
        padding: 18px;
      }
      .summary-card strong {
        display: block;
        font-size: 32px;
        line-height: 1;
        margin-bottom: 8px;
      }
      .summary-card span {
        font-size: 12px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #5e7488;
        font-weight: 700;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        text-align: left;
        vertical-align: top;
        padding: 16px 14px;
        border-bottom: 1px solid #dbe6ee;
      }
      th {
        font-size: 12px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #5e7488;
      }
      .metric-name {
        font-weight: 700;
        font-size: 15px;
        margin-bottom: 6px;
      }
      .metric-description {
        color: #4d647c;
        line-height: 1.5;
      }
      .result-cell {
        font-weight: 700;
        white-space: nowrap;
      }
      .status-pill {
        display: inline-block;
        border-radius: 999px;
        padding: 8px 14px;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.14em;
        text-transform: uppercase;
      }
      .status-good { background: #dff7ec; color: #087857; }
      .status-caution { background: #fff1d8; color: #b26d00; }
      .status-alert { background: #fde2e2; color: #b91c1c; }
      .status-critical { background: #f2dede; color: #7f1d1d; }
      .footer {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        padding: 20px 32px 28px;
        background: #f8fbfd;
      }
      .footer p {
        margin: 0 0 8px;
        color: #4d647c;
      }
      .footer p:last-child {
        margin-bottom: 0;
      }
    </style>
  </head>
  <body>
    <article class="report">
      <div class="topbar"></div>
      <header class="header">
        <div class="brand">
          <img src="${logoSource}" alt="OPUS BPO logo" />
          <div>
            <p class="eyebrow">Practice Health Check</p>
            <h1 class="title">Revenue Cycle Performance Report</h1>
            <p class="subtitle">${escapeHtml(opusContact.company)} | ${escapeHtml(opusContact.subtitle)}</p>
          </div>
        </div>
        <div class="client-box">
          <p><strong>Client Company:</strong> ${escapeHtml(report.client.companyName)}</p>
          <p><strong>Email Address:</strong> ${escapeHtml(report.client.email)}</p>
          <p><strong>Generated On:</strong> ${escapeHtml(report.generatedAt)}</p>
        </div>
      </header>
      <section class="body">
        <div class="summary">${summaryMarkup}</div>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Result</th>
              <th>Status</th>
              <th>Industry Standard</th>
            </tr>
          </thead>
          <tbody>${metricRows}</tbody>
        </table>
      </section>
      <footer class="footer">
        <div>
          <p><strong>${escapeHtml(opusContact.company)}</strong></p>
          <p>${escapeHtml(opusContact.subtitle)}</p>
        </div>
        <div>
          <p><strong>Address:</strong> ${escapeHtml(opusContact.address)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(opusContact.phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(opusContact.email)}</p>
        </div>
      </footer>
    </article>
  </body>
</html>`
}

const PracticeHealthCheck = () => {
  const [clientDetails, setClientDetails] = useState(initialClientDetails)
  const [inputs, setInputs] = useState(buildPracticeInputs)
  const [report, setReport] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")
  const [logoSource, setLogoSource] = useState("/opus-logo.png")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [])

  useEffect(() => {
    let isActive = true

    const loadLogo = async () => {
      try {
        const response = await fetch("/opus-logo.png")
        const blob = await response.blob()
        const reader = new FileReader()
        reader.onloadend = () => {
          if (isActive && typeof reader.result === "string") {
            setLogoSource(reader.result)
          }
        }
        reader.readAsDataURL(blob)
      } catch {
        if (isActive) {
          setLogoSource(`${window.location.origin}/opus-logo.png`)
        }
      }
    }

    loadLogo()

    return () => {
      isActive = false
    }
  }, [])

  useEffect(() => {
    if (!report) return

    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [report])

  const benchmarkSummary = useMemo(() => {
    if (!report) return []

    const counts = report.metrics.reduce(
      (acc, metric) => {
        const tone = metric.result.benchmark.tone
        acc[tone] += 1
        return acc
      },
      { good: 0, caution: 0, alert: 0, critical: 0 }
    )

    return [
      { label: "On Target", count: counts.good },
      { label: "Needs Review", count: counts.caution },
      { label: "Action Needed", count: counts.alert + counts.critical },
    ]
  }, [report])

  useEffect(() => {
    if (!report) return

    const downloadTimer = window.setTimeout(() => {
      const markup = buildDownloadMarkup({
        report,
        summary: benchmarkSummary,
        logoSource,
      })
      const blob = new Blob([markup], { type: "text/html;charset=utf-8" })
      const objectUrl = URL.createObjectURL(blob)
      const anchor = document.createElement("a")
      anchor.href = objectUrl
      anchor.download = `${sanitizeFileName(report.client.companyName || "practice-health-check")}-report.html`
      document.body.appendChild(anchor)
      anchor.click()
      anchor.remove()
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000)
    }, 2500)

    return () => window.clearTimeout(downloadTimer)
  }, [benchmarkSummary, logoSource, report])

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
    <section
      className={`section-tint practice-health-page ${report ? "practice-health-page-report" : ""}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="practice-health-shell">
          {!report ? (
            <>
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
                    After generation, the report will replace this form on the same page and download automatically.
                  </p>
                  {errorMessage && (
                    <p className="practice-card-result is-error" aria-live="polite">
                      {errorMessage}
                    </p>
                  )}
                </div>
              </form>
            </>
          ) : null}

          {report && (
            <>
              <div className="practice-report-banner practice-print-hidden">
                <p className="practice-report-banner-eyebrow">Report Results</p>
                <h2 className="practice-report-banner-title">Your practice health check is ready.</h2>
                <p className="practice-report-banner-copy">
                  Review the complete five-metric performance summary below.
                </p>
              </div>
              <div className="practice-report-actions practice-print-hidden">
                <button
                  type="button"
                  className="practice-report-back"
                  onClick={() => setReport(null)}
                >
                  Back To Metrics
                </button>
              </div>
              <article className="practice-report">
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
                          <th>Industry Standard</th>
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
                              {metric.result.benchmark.industryStandard}
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
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default PracticeHealthCheck
