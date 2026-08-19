import { useEffect, useState } from "react"
import { Bot, Check, CloudCog, DatabaseZap, FileScan, Gauge, LayoutDashboard, LockKeyhole, Network, RefreshCw, SearchCheck, ShieldCheck, Sparkles, TimerReset, Workflow } from "lucide-react"

const areas = [
  { number: "01", label: "Portal Automation", title: "Faster, More Consistent Payer Data Retrieval", description: "Our portal automation solutions retrieve eligibility, claim status, and other payer information directly from insurance portals, reducing dependency on repetitive manual lookups.", benefits: ["Consistent and accurate data retrieval across payer portals", "Faster eligibility and claim status verification", "Reduced manual effort and data-entry errors", "Improved productivity and turnaround time"], icon: CloudCog, accent: "from-cyan-500 to-blue-600", wash: "from-cyan-50 to-blue-50" },
  { number: "02", label: "Audit Automation", title: "Automated Controls for Greater Accuracy", description: "Our audit automation solutions cross-verify production, charge, and billing data across multiple sources to identify discrepancies early and strengthen operational controls.", benefits: ["Automated validation across multiple data sources", "Early identification of billing and production discrepancies", "Reduced manual audit effort", "Improved data accuracy and process compliance"], icon: SearchCheck, accent: "from-violet-500 to-indigo-600", wash: "from-violet-50 to-indigo-50" },
  { number: "03", label: "Document Processing Automation", title: "Transforming Documents into Actionable Data", description: "AI-assisted document processing extracts relevant information from patient records, EOBs, PDFs, scanned documents, and coding-related documentation, converting unstructured information into standardized, usable data.", benefits: ["Automated extraction from PDF and scanned documents", "Reduced manual data entry", "Standardized and structured output", "Faster document processing and turnaround time"], icon: FileScan, accent: "from-amber-400 to-orange-500", wash: "from-amber-50 to-orange-50" },
  { number: "04", label: "Reporting & Workflow Automation", title: "Reliable Reporting Without the Manual Overhead", description: "Our reporting automation solutions generate recurring operational reports—including rejection, productivity, reconciliation, and other management reports—according to predefined schedules, with each process tracked for completion and exceptions.", benefits: ["Automated report generation on defined schedules", "Reduced dependency on manual reporting", "Visibility into report status and completion", "Early identification of processing failures or exceptions"], icon: Workflow, accent: "from-emerald-400 to-teal-600", wash: "from-emerald-50 to-teal-50" },
  { number: "05", label: "Operational Dashboards & Internal Platforms", title: "Purpose-Built Technology for Smarter Operations", description: "Beyond process automation, Opus BPO has developed purpose-built internal applications and dashboards to support revenue cycle operations, workforce management, performance monitoring, and data governance across the organization.", benefits: ["Centralized dashboards for call center, audit, and organizational performance", "Workforce, attendance, and resource management with role-based access", "SharePoint and mailbox backup and recovery capabilities", "Vendor invoice management and client query tracking", "Centralized operational data and performance visibility"], icon: LayoutDashboard, accent: "from-blue-500 to-indigo-700", wash: "from-blue-50 to-indigo-50" },
]

const capabilities = [
  [LayoutDashboard, "Centralized dashboards for call center, audit, and organizational performance"],
  [Network, "Workforce, attendance, and resource management with role-based access"],
  [RefreshCw, "SharePoint and mailbox backup and recovery capabilities"],
  [DatabaseZap, "Vendor invoice management and client query tracking"],
  [Gauge, "Centralized operational data and performance visibility"],
]

const AutomationEcosystem = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const sections = areas.map((area) => document.getElementById(`automation-${area.number}`)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveIndex(Number(entry.target.dataset.index))
    }), { rootMargin: "-35% 0px -45%", threshold: 0 })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const jumpTo = (index) => document.getElementById(`automation-${areas[index].number}`)?.scrollIntoView({ behavior: "smooth", block: "start" })

  return <section className="section-divider bg-[#f7fafb]"><div className="mx-auto max-w-7xl px-6 pb-24 pt-20">
    <div className="mx-auto max-w-4xl text-center"><p className="text-sm font-semibold uppercase tracking-[.22em] text-brand-blue">Automation in Action</p><h2 className="mt-4 font-heading text-3xl font-semibold text-brand-slate md:text-4xl">Scroll through five connected automation capabilities.</h2><p className="mt-5 text-lg font-medium leading-relaxed text-slate-700">Each capability is designed to remove friction, strengthen control, and make operational performance easier to see.</p></div>
    <nav className="sticky top-[105px] z-30 mx-auto mt-10 flex max-w-4xl justify-center gap-2 rounded-full border border-slate-200/80 bg-white/90 p-2 shadow-[0_14px_35px_-24px_rgba(15,23,42,.5)] backdrop-blur" aria-label="Automation journey">{areas.map((area,index)=><button key={area.number} type="button" onClick={()=>jumpTo(index)} aria-label={`Jump to ${area.label}`} className={`flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-xs font-bold transition duration-300 ${activeIndex===index?'bg-brand-blue text-white shadow-lg':'text-slate-500 hover:bg-slate-100 hover:text-brand-blue'}`}><span>{area.number}</span><span className={`ml-2 hidden whitespace-nowrap lg:inline ${activeIndex===index?'':'sr-only'}`}>{area.label}</span></button>)}</nav>
    <div className="mt-6">{areas.map((area,index)=>{const Icon=area.icon;return <article id={`automation-${area.number}`} data-index={index} key={area.number} className="scroll-mt-48 relative flex min-h-[760px] items-center overflow-hidden py-20">
      <div className={`absolute inset-x-0 top-1/2 h-[82%] -translate-y-1/2 rounded-[52px] ${index===0?'bg-[linear-gradient(135deg,#e6f9ff,#eef5ff)]':index===1?'bg-[linear-gradient(135deg,#f4efff,#eef0ff)]':index===2?'bg-[linear-gradient(135deg,#fff5db,#fff0e7)]':index===3?'bg-[linear-gradient(135deg,#e8fbf3,#e7f8f8)]':'bg-[linear-gradient(135deg,#e9f2ff,#f2efff)]'}`}/>
      <span className={`absolute ${index%2?'left-8':'right-8'} top-20 font-heading text-[12rem] font-black leading-none text-slate-900/[.045] md:text-[18rem]`}>{area.number}</span>
      <div className={`relative grid w-full items-center gap-14 px-7 md:px-12 lg:grid-cols-2 lg:px-16 ${index%2?'':''}`}>
        <div className={index%2?'lg:order-2':''}><div className="flex items-center gap-4"><span className={`grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br ${area.accent} text-white shadow-xl transition duration-500 hover:rotate-12 hover:scale-110`}><Icon className="h-8 w-8"/></span><div><p className="text-xs font-bold uppercase tracking-[.24em] text-brand-blue">Chapter {area.number}</p><p className="mt-1 text-sm font-semibold text-slate-500">{area.label}</p></div></div><h3 className="mt-7 max-w-xl font-heading text-3xl font-semibold leading-tight text-brand-slate md:text-5xl">{area.title}</h3><p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-slate-700">{area.description}</p><div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-brand-blue"><span className={`h-2 w-12 rounded-full bg-gradient-to-r ${area.accent}`}/>Explore the impact</div></div>
        <div className={`relative min-h-[430px] ${index%2?'lg:order-1':''}`}><div className={`absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${area.accent} opacity-15 blur-2xl`}/><div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-slate-400/50"/><div className={`absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br ${area.accent} text-white shadow-[0_25px_50px_-20px_rgba(15,23,42,.65)]`}><Icon className="h-12 w-12"/><span className="text-[8px] font-bold uppercase tracking-[.18em]">Opus Engine</span></div>{area.benefits.map((benefit,benefitIndex)=>{const positions=['left-0 top-4','right-0 top-4','left-0 bottom-5','right-0 bottom-5','left-1/2 bottom-0 -translate-x-1/2'];return <button type="button" key={benefit} className={`group absolute ${positions[benefitIndex]} max-w-[190px] text-left`}><span className="flex items-start gap-3 rounded-2xl border border-white bg-white/85 p-4 shadow-[0_18px_40px_-28px_rgba(15,23,42,.65)] backdrop-blur transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl"><span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br ${area.accent}`}><Check className="h-4 w-4 text-white"/></span><span className="text-xs font-semibold leading-relaxed text-slate-700">{benefit}</span></span></button>})}</div>
      </div>
    </article>})}</div>
  </div></section>
}
const AboutTechnology = () => <>
  <section className="relative isolate overflow-hidden bg-[#092f42] text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,.22),transparent_28%),radial-gradient(circle_at_88%_22%,rgba(250,204,21,.18),transparent_24%),linear-gradient(125deg,#092f42_0%,#0b5268_54%,#123b50_100%)]" />
    <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:48px_48px]" />
    <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
      <div className="reveal">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.24em] text-cyan-100"><Sparkles className="h-4 w-4 text-amber-300" /> Technology & Automation</div>
        <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.08] md:text-5xl">Automation Engineered for <span className="text-cyan-300">Accuracy</span>, Speed, and Compliance.</h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-200">Opus BPO integrates automation across the revenue cycle to reduce manual effort, minimize errors, and accelerate turnaround time — without compromising HIPAA-aligned data handling standards.</p>
        <div className="mt-8 flex flex-wrap gap-3">{["Fewer manual steps", "Faster turnaround", "Stronger controls"].map(x => <span key={x} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold"><Check className="h-4 w-4 text-amber-300" />{x}</span>)}</div>
      </div>
      <div className="relative grid grid-cols-2 gap-4" aria-label="Connected revenue cycle automation infographic">
        {[ [Bot,"Automation"], [TimerReset,"Speed"], [SearchCheck,"Accuracy"], [ShieldCheck,"Compliance"] ].map(([Icon,label],i) => <div key={label} className={`flex min-h-36 flex-col items-center justify-center rounded-[28px] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur ${i%2 ? "translate-y-6" : ""}`}><span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500"><Icon className="h-7 w-7" /></span><span className="mt-4 font-semibold">{label}</span></div>)}
      </div>
    </div>
  </section>

  <AutomationEcosystem />

  <section className="section-divider bg-white"><div className="mx-auto max-w-6xl px-6 py-20"><div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(120deg,#092f42,#0d6074)] px-7 py-14 text-white shadow-2xl md:px-14"><div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]"><div><div className="flex items-center gap-3"><LockKeyhole className="h-6 w-6 text-amber-300" /><p className="text-xs font-bold uppercase tracking-[.24em] text-cyan-100">People + Technology</p></div><h2 className="mt-4 font-heading text-3xl font-semibold md:text-4xl">Automation That Works With Your Operations</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-200">At Opus BPO, automation is not about replacing people—it is about <strong className="text-white">eliminating repetitive work, strengthening controls, and enabling teams to focus on higher-value activities</strong>.</p><p className="mt-4 max-w-3xl leading-relaxed text-slate-300">Our automation solutions are developed and maintained with the same focus on <strong className="text-white">data security, confidentiality, compliance, and operational integrity</strong> that governs our client operations.</p></div><div className="grid h-32 w-32 place-items-center rounded-full border border-white/20 bg-white/10"><ShieldCheck className="h-14 w-14 text-cyan-300" /></div></div></div></div></section>
</>

export default AboutTechnology