import { useState } from "react"

const FORM_ENDPOINT = "https://formsubmit.co/ajax/396c60cecffb471f66c22699a3a13d49"
const EMAIL_SUBJECT = "New RCM Consultation Request | Opus BPO Website"

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  organizationType: "Hospital / Health System",
  message: "",
}

const initialSubmissionState = {
  status: "idle",
  message: "",
}

const formatSubmissionDate = () =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date())

const buildSubmissionText = ({ fullName, email, phone, organizationType, message }) =>
  [
    "A new consultation request has been submitted through the Opus BPO website.",
    "",
    "CONTACT DETAILS",
    `Full Name: ${fullName}`,
    `Work Email: ${email}`,
    `Contact Number: ${phone}`,
    `Organization Type: ${organizationType}`,
    "",
    "INQUIRY",
    "Message:",
    message,
    "",
    "SUBMISSION DETAILS",
    "Submitted From: Opus BPO Contact Page",
    `Submitted On: ${formatSubmissionDate()}`,
  ].join("\n")

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState)
  const [submissionState, setSubmissionState] = useState(initialSubmissionState)

  const handleChange = ({ target }) => {
    const { name, value } = target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    if (submissionState.status !== "idle") {
      setSubmissionState(initialSubmissionState)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const trimmedFormData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      organizationType: formData.organizationType,
      message: formData.message.trim(),
    }

    const formPayload = new FormData()
    formPayload.append("_subject", EMAIL_SUBJECT)
    formPayload.append("_captcha", "false")
    formPayload.append("_replyto", trimmedFormData.email)
    formPayload.append("Message", buildSubmissionText(trimmedFormData))

    setSubmissionState({
      status: "submitting",
      message: "Sending consultation request...",
    })

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formPayload,
        headers: {
          Accept: "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Request failed")
      }

      setSubmissionState({
        status: "success",
        message: "Consultation request sent successfully.",
      })
      setFormData(initialFormState)
    } catch {
      setSubmissionState({
        status: "error",
        message: "We could not send the request right now. Please try again in a moment.",
      })
    }
  }

  return (
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal space-y-6">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
                Contact
              </p>
              <h2 className="font-heading text-2xl font-bold leading-tight text-brand-slate sm:text-3xl md:text-[2.6rem] lg:text-[2.85rem]">
                <span className="font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-4xl">
                  Start a compliant, efficient <br />
                </span>
                <span className="font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-4xl">
                  RCM partnership.
                </span>
              </h2>
              <p className="text-lg font-medium leading-8 text-slate-700">
                Schedule a discovery call to discuss your operational priorities, payer mix, and
                revenue integrity goals. Our team will outline a structured engagement plan aligned
                to your compliance posture.
              </p>
            </div>
            <div className="space-y-4 text-base font-medium leading-8 text-slate-700">
              <p>
                <span className="font-bold text-brand-slate">Email:</span>{" "}
                <a
                  href="mailto:Scott.nowicki@opusbpo.com"
                  className="font-semibold text-brand-blue underline underline-offset-4 transition hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  Scott.nowicki@opusbpo.com
                </a>
              </p>
              <p>
                <span className="font-bold text-brand-slate">Phone:</span>{" "}
                <a
                  href="tel:+16302727618"
                  className="font-semibold text-brand-blue underline underline-offset-4 transition hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  (630) 272 7618
                </a>
              </p>
              <p>
                <span className="font-bold text-brand-slate">Address:</span> 6167 Jarvis Ave,
                Newark, CA 94560, United States
              </p>
              <p>
                <span className="font-bold text-brand-slate">Headquarters:</span> Delivery teams
                supporting national coverage
              </p>
              <p>
                <span className="font-bold text-brand-slate">Response Time:</span> Initial replies
                within one business day. Discovery calls typically scheduled within 2-3 business
                days.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-300 bg-gradient-to-r from-blue-200 via-sky-100 to-blue-50 p-6 text-base font-medium leading-8 text-brand-slate shadow-[0_12px_30px_rgba(37,99,235,0.1)]">
              We respond to consultation requests within one business day and provide a structured
              discovery checklist to align on scope, data access, and compliance requirements.
            </div>
          </div>
          <div className="card-metal reveal w-full max-w-[700px] rounded-3xl p-5 sm:p-8 lg:justify-self-end">
            <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullName"
                  className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600 sm:text-sm sm:tracking-[0.2em]"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 sm:text-base focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600 sm:text-sm sm:tracking-[0.2em]"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@healthsystem.org"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 sm:text-base focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600 sm:text-sm sm:tracking-[0.2em]"
                >
                  Contact Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123 4567"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 sm:text-base focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label
                  htmlFor="organizationType"
                  className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600 sm:text-sm sm:tracking-[0.2em]"
                >
                  Organization Type
                </label>
                <select
                  id="organizationType"
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-700 sm:text-base focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
                >
                  <option>Hospital / Health System</option>
                  <option>Multi-specialty Clinic</option>
                  <option>Physician Group</option>
                  <option>Ambulatory / ASC</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600 sm:text-sm sm:tracking-[0.2em]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your current RCM priorities."
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 sm:text-base focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <p className="text-xs leading-6 text-slate-500">
                This form sends through the configured FormSubmit endpoint.
              </p>
              <p
                className={`text-sm font-medium ${
                  submissionState.status === "error"
                    ? "text-brand-red"
                    : submissionState.status === "success"
                      ? "text-emerald-700"
                      : "text-slate-500"
                }`}
                aria-live="polite"
              >
                {submissionState.message}
              </p>
              <button
                type="submit"
                aria-label="Schedule a call with our team"
                disabled={submissionState.status === "submitting"}
                className="w-full rounded-full bg-brand-red px-6 py-3.5 text-base font-bold text-white transition hover:bg-red-700"
              >
                {submissionState.status === "submitting" ? "Sending..." : "Schedule a Call"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
