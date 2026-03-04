const metricDefinitions = [
  {
    id: "daysInAr",
    title: "Days In AR",
    description: "Measure how quickly the team converts charges into cash.",
    fields: [
      { name: "totalAr", label: "Total AR", placeholder: "e.g. 1,250,000", sample: 1250000 },
      { name: "avgDailyCharges", label: "Avg Daily Charges", placeholder: "e.g. 3,000", sample: 30000 },
    ],
    calculate: ({ totalAr, avgDailyCharges }) =>
      avgDailyCharges ? totalAr / avgDailyCharges : null,
    unit: "days",
    precision: 0,
    benchmark: {
      goodLabel: "On Target",
      cautionLabel: "Monitor",
      alertLabel: "Action Needed",
      guidance: "Target: under 40 days. 40-55 days needs attention.",
      evaluate: (value) => {
        if (value <= 40) return "good"
        if (value <= 55) return "caution"
        return "alert"
      },
    },
  },
  {
    id: "denialRate",
    title: "Denial Rate",
    description: "Keep denials low to protect cash flow and reduce rework.",
    fields: [
      { name: "deniedClaims", label: "Denied Claims", placeholder: "e.g. 1,100", sample: 1100 },
      { name: "submittedClaims", label: "Submitted Claims", placeholder: "e.g. 50,000", sample: 50000 },
    ],
    calculate: ({ deniedClaims, submittedClaims }) =>
      submittedClaims ? (deniedClaims / submittedClaims) * 100 : null,
    unit: "%",
    precision: 1,
    benchmark: {
      goodLabel: "On Target",
      cautionLabel: "Monitor",
      alertLabel: "Action Needed",
      guidance: "Target: below 5%. 5-8% suggests preventable leakage.",
      evaluate: (value) => {
        if (value < 5) return "good"
        if (value <= 8) return "caution"
        return "alert"
      },
    },
  },
  {
    id: "grossCollectionRate",
    title: "Gross Collection Rate",
    description: "Shows how much of billed value was collected before adjustments.",
    fields: [
      { name: "payments", label: "Total Payments", placeholder: "e.g. 470,000", sample: 470000 },
      { name: "charges", label: "Total Charges", placeholder: "e.g. 500,000", sample: 500000 },
    ],
    calculate: ({ payments, charges }) => (charges ? (payments / charges) * 100 : null),
    unit: "%",
    precision: 1,
    benchmark: {
      goodLabel: "On Target",
      cautionLabel: "Monitor",
      alertLabel: "Below Target",
      guidance: "Target: above 95%. 90-95% may indicate collection drag.",
      evaluate: (value) => {
        if (value >= 95) return "good"
        if (value >= 90) return "caution"
        return "alert"
      },
    },
  },
  {
    id: "netCollectionRate",
    title: "Net Collection Rate",
    description: "Reflects collections after write-offs and contractual discounts.",
    fields: [
      { name: "netPayments", label: "Payments - Adjustments", placeholder: "e.g. 450,000", sample: 450000 },
      { name: "charges", label: "Total Charges", placeholder: "e.g. 500,000", sample: 500000 },
    ],
    calculate: ({ netPayments, charges }) => (charges ? (netPayments / charges) * 100 : null),
    unit: "%",
    precision: 1,
    benchmark: {
      goodLabel: "On Target",
      cautionLabel: "Monitor",
      alertLabel: "Below Target",
      guidance: "Target: above 96%. 92-96% may signal write-off pressure.",
      evaluate: (value) => {
        if (value >= 96) return "good"
        if (value >= 92) return "caution"
        return "alert"
      },
    },
  },
  {
    id: "firstPassResolutionRate",
    title: "First-Pass Resolution Rate",
    description: "Track how many claims clear on the first-pass review.",
    fields: [
      { name: "paidOnFirst", label: "Claims Paid on 1st Submission", placeholder: "e.g. 18,000", sample: 18000 },
      { name: "totalClaims", label: "Total Claims Submitted", placeholder: "e.g. 20,000", sample: 20000 },
    ],
    calculate: ({ paidOnFirst, totalClaims }) =>
      totalClaims ? (paidOnFirst / totalClaims) * 100 : null,
    unit: "%",
    precision: 1,
    benchmark: {
      goodLabel: "On Target",
      cautionLabel: "Monitor",
      alertLabel: "Below Target",
      guidance: "Target: above 90%. 85-90% means rework is building.",
      evaluate: (value) => {
        if (value >= 90) return "good"
        if (value >= 85) return "caution"
        return "alert"
      },
    },
  },
]

export const practiceMetrics = metricDefinitions

export const buildPracticeInputs = () =>
  metricDefinitions.reduce((acc, metric) => {
    acc[metric.id] = metric.fields.reduce((inner, field) => {
      inner[field.name] =
        field.sample !== undefined ? field.sample.toLocaleString("en-US") : ""
      return inner
    }, {})
    return acc
  }, {})

export const parseMetricEntry = (value) => {
  if (!value) return null
  const parsed = parseFloat(value.toString().replace(/,/g, ""))
  return Number.isFinite(parsed) ? parsed : null
}

export const formatMetricValue = (value, precision = 1) => {
  if (!Number.isFinite(value)) return null
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: precision,
  })
}

export const buildMetricResult = (metric, computed) => {
  const displayValue = formatMetricValue(computed, metric.precision ?? 1)
  const statusTone = metric.benchmark?.evaluate?.(computed) ?? "good"
  const statusLabel =
    statusTone === "good"
      ? metric.benchmark?.goodLabel ?? "Good"
      : statusTone === "caution"
        ? metric.benchmark?.cautionLabel ?? "Caution"
        : metric.benchmark?.alertLabel ?? "Review"

  return {
    text: `${displayValue}${metric.unit ? ` ${metric.unit}` : ""}`,
    isError: false,
    benchmark: {
      tone: statusTone,
      label: statusLabel,
      guidance: metric.benchmark?.guidance ?? "",
    },
  }
}

export const buildPracticeResults = () =>
  metricDefinitions.reduce((acc, metric) => {
    const payload = metric.fields.reduce((inner, field) => {
      inner[field.name] = field.sample ?? 0
      return inner
    }, {})
    const computed = metric.calculate(payload)
    acc[metric.id] = buildMetricResult(metric, computed)
    return acc
  }, {})

