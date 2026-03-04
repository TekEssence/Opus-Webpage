const Contact = () => (
  <section className="bg-transparent">
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal space-y-6">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
              Contact
            </p>
            <h2 className="font-heading text-2xl font-bold leading-tight text-brand-slate sm:text-3xl md:text-[2.6rem] lg:text-[2.85rem]">
              <span className="font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-4xl">Start a compliant, efficient <br></br></span>
              <span className="font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-4xl">RCM partnership.</span>
            </h2>
            <p className="text-lg font-medium leading-8 text-slate-700">
              Schedule a discovery call to discuss your operational priorities, payer mix, and revenue integrity goals. Our team will outline a structured engagement plan aligned to your compliance posture.
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
              <span className="font-bold text-brand-slate">Address:</span> 6167 Jarvis Ave, Newark, CA 94560, United States
            </p>
            <p>
              <span className="font-bold text-brand-slate">Headquarters:</span>{" "}
              Delivery teams supporting national coverage
            </p>
            <p>
              <span className="font-bold text-brand-slate">Response Time:</span>{" "}
              Initial replies within one business day. Discovery calls typically scheduled within
              2–3 business days.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-300 bg-gradient-to-r from-blue-200 via-sky-100 to-blue-50 p-6 text-base font-medium leading-8 text-brand-slate shadow-[0_12px_30px_rgba(37,99,235,0.1)]">
            We respond to consultation requests within one business day and provide a structured
            discovery checklist to align on scope, data access, and compliance requirements.
          </div>
        </div>
        <div className="card-metal reveal w-full max-w-[700px] rounded-3xl p-5 sm:p-8 lg:justify-self-end">
          <form id="contact-form" className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600 sm:text-sm sm:tracking-[0.2em]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 sm:text-base focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600 sm:text-sm sm:tracking-[0.2em]">
                Work Email
              </label>
              <input
                type="email"
                placeholder="name@healthsystem.org"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 sm:text-base focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600 sm:text-sm sm:tracking-[0.2em]">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="(555) 123 4567"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 sm:text-base focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600 sm:text-sm sm:tracking-[0.2em]">
                Organization Type
              </label>
              <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-700 sm:text-base focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100">
                <option>Hospital / Health System</option>
                <option>Multi-specialty Clinic</option>
                <option>Physician Group</option>
                <option>Ambulatory / ASC</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600 sm:text-sm sm:tracking-[0.2em]">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your current RCM priorities."
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-700 placeholder:text-slate-400 sm:text-base focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-blue-100"
              ></textarea>
            </div>
            <button
              type="submit"
              aria-label="Schedule a call with our team"
              className="w-full rounded-full bg-brand-red px-6 py-3.5 text-base font-bold text-white transition hover:bg-red-700"
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
