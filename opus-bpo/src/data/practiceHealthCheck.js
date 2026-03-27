const metricDefinitions = [
  {
    id: "daysInAr",
    title: "Days In AR",
    description: "Measure how quickly the team converts charges into cash.",
    fields: [
      { name: "totalAr", label: "Total AR ($)", placeholder: "Enter total AR amount, e.g., $1,250,000", sample: 1250000 },
      { name: "avgDailyCharges", label: "Avg Daily Charges ($)", placeholder: "Enter avg daily charges, e.g., $30,000", sample: 30000 },
    ],
    calculate: ({ totalAr, avgDailyCharges }) =>
      avgDailyCharges ? totalAr / avgDailyCharges : null,
    unit: "days",
    precision: 0,
    benchmark: {
      goodLabel: "Strong Performance",
      cautionLabel: "Moderate Performance",
      alertLabel: "Below Expectations",
      criticalLabel: "Below Expectations",
      rangeSummary: ["Strong Performance: Below 35 days", "Moderate Performance: 36-45 days", "Below Expectations: 46-55 days", "Critical Risk: Above 55 days"],
      goodGuidance: "Best range: Below 35",
      cautionGuidance: "between 36 and 45 days.",
      alertGuidance: "between 46 and 55 days needs improvement.",
      criticalGuidance: "More than 55 days is not good.",
      evaluate: (value) => {
        if (value <= 35) return "good"
        if (value <= 45) return "caution"
        if (value <= 55) return "alert"
        return "critical"
      },
    },
  },
  {
    id: "denialRate",
    title: "Denial Rate",
    description: "Keep denials low to protect cash flow and reduce rework.",
    fields: [
      { name: "deniedClaims", label: "Denied Claims", placeholder: "Enter denied claims, e.g., 1,100", sample: 1100 },
      { name: "submittedClaims", label: "Submitted Claims", placeholder: "Enter submitted claims, e.g., 50,000", sample: 50000 },
    ],
    calculate: ({ deniedClaims, submittedClaims }) =>
      submittedClaims ? (deniedClaims / submittedClaims) * 100 : null,
    unit: "%",
    precision: 1,
    benchmark: {
      goodLabel: "Strong Performance",
      cautionLabel: "Moderate Performance",
      alertLabel: "Below Expectations",
      rangeSummary: ["Strong Performance: Below 5%", "Moderate Performance: 5%-8%", "Below Expectations: Above 8%"],
      goodGuidance: "Best range: below 5%.",
      cautionGuidance: "Between 5% and 8% needs review.",
      alertGuidance: "Above 8% needs improvement.",
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
      { name: "payments", label: "Total Payments ($)", placeholder: "Enter total payments, e.g., $470,000", sample: 470000 },
      { name: "charges", label: "Total Charges ($)", placeholder: "Enter total charges, e.g., $500,000", sample: 500000 },
    ],
    calculate: ({ payments, charges }) => (charges ? (payments / charges) * 100 : null),
    unit: "%",
    precision: 1,
    benchmark: {
      goodLabel: "Strong Performance",
      cautionLabel: "Moderate Performance",
      alertLabel: "Below Expectations",
      rangeSummary: ["Strong Performance: Above 95%", "Moderate Performance: 90%-95%", "Below Expectations: Below 90%"],
      goodGuidance: "Best range: above 95%.",
      cautionGuidance: "Between 90% and 95% needs review.",
      alertGuidance: "Below 90% needs improvement.",
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
      { name: "netPayments", label: "Adjusted Payments ($)", placeholder: "Enter adjusted payments, e.g., $450,000", sample: 450000 },
      { name: "charges", label: "Total Charges ($)", placeholder: "Enter total charges, e.g., $500,000", sample: 500000 },
    ],
    calculate: ({ netPayments, charges }) => (charges ? (netPayments / charges) * 100 : null),
    unit: "%",
    precision: 1,
    benchmark: {
      goodLabel: "Strong Performance",
      cautionLabel: "Moderate Performance",
      alertLabel: "Below Expectations",
      rangeSummary: ["Strong Performance: Above 96%", "Moderate Performance: 92%-96%", "Below Expectations: Below 92%"],
      goodGuidance: "Best range: above 96%.",
      cautionGuidance: "Between 92% and 96% needs review.",
      alertGuidance: "Below 92% needs improvement.",
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
      { name: "paidOnFirst", label: "Claims Paid on 1st Submission", placeholder: "Enter first-pass paid claims, e.g., 18,000", sample: 18000 },
      { name: "totalClaims", label: "Total Claims Submitted", placeholder: "Enter total claims submitted, e.g., 20,000", sample: 20000 },
    ],
    calculate: ({ paidOnFirst, totalClaims }) =>
      totalClaims ? (paidOnFirst / totalClaims) * 100 : null,
    unit: "%",
    precision: 1,
    benchmark: {
      goodLabel: "Strong Performance",
      cautionLabel: "Moderate Performance",
      alertLabel: "Below Expectations",
      rangeSummary: ["Strong Performance: Above 90%", "Moderate Performance: 85%-90%", "Below Expectations: Below 85%"],
      goodGuidance: "Best range: above 90%.",
      cautionGuidance: "Between 85% and 90% needs review.",
      alertGuidance: "Below 85% needs improvement.",
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
      inner[field.name] = ""
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
        : statusTone === "critical"
          ? metric.benchmark?.criticalLabel ?? "Critical"
        : metric.benchmark?.alertLabel ?? "Review"

  return {
    text: `${displayValue}${metric.unit ? ` ${metric.unit}` : ""}`,
    isError: false,
    benchmark: {
      tone: statusTone,
      label: statusLabel,
      industryStandard: metric.benchmark?.rangeSummary ?? metric.benchmark?.goodGuidance ?? "",
      guidance:
        statusTone === "good"
          ? metric.benchmark?.goodGuidance ?? ""
          : statusTone === "caution"
            ? metric.benchmark?.cautionGuidance ?? ""
            : statusTone === "critical"
              ? metric.benchmark?.criticalGuidance ?? ""
            : metric.benchmark?.alertGuidance ?? "",
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
