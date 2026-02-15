const metricDefinitions = [
  {
    id: "daysInAr",
    title: "Days In AR",
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
