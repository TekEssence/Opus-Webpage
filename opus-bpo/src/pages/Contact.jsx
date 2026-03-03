import SectionHeader from "../components/SectionHeader.jsx"

const Contact = () => (
  <section className="bg-transparent">
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal space-y-6">
          <SectionHeader
            label="Contact"
            title="Start a compliant, efficient RCM partnership."
            description="Schedule a discovery call to discuss your operational priorities, payer mix, and revenue integrity goals. Our team will outline a structured engagement plan aligned to your compliance posture."
          />
          <div className="space-y-4 text-sm text-slate-600">
            <p>
              <span className="font-semibold text-brand-slate">Email:</span>{" "}
              <a
                href="mailto:Scott.nowicki@opusbpo.com"
                className="font-medium text-brand-blue underline underline-offset-4 transition hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                Scott.nowicki@opusbpo.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-brand-slate">Phone:</span>{" "}
              <a
                href="tel:+16302727618"
                className="font-medium text-brand-blue underline underline-offset-4 transition hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                (630) 272 7618
              </a>
            </p>
            <p>
              <span className="font-semibold text-brand-slate">Address:</span> 6167 Jarvis Ave, Newark, CA 94560, United States
            </p>
            <p>
              <span className="font-semibold text-brand-slate">Headquarters:</span>{" "}
              Delivery teams supporting national coverage
            </p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-sm text-slate-600">
            We respond to consultation requests within one business day and provide a structured
            discovery checklist to align on scope, data access, and compliance requirements.
          </div>
        </div>
        <div className="card-metal reveal rounded-3xl p-8">
          <form className="space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Work Email
              </label>
              <input
                type="email"
                placeholder="name@healthsystem.org"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="(555) 123 4567"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Organization Type
              </label>
              <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100">
                <option>Hospital / Health System</option>
                <option>Multi-specialty Clinic</option>
                <option>Physician Group</option>
                <option>Ambulatory / ASC</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your current RCM priorities."
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Schedule a Call
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
