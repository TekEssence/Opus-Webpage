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

const SceneVisual = ({ index }) => {
  if (index === 0) return <div className="relative mx-auto h-44 max-w-md"><CloudCog className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-cyan-500"/>{["Eligibility","Claim Status","Payer Data"].map((x,i)=><div key={x} className={`absolute ${i===0?'left-1/2 top-1 -translate-x-1/2':i===1?'bottom-1 left-[22%]':'bottom-1 right-[22%]'} text-center`}><span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-bold text-cyan-600 shadow-lg">{i+1}</span><p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">{x}</p></div>)}</div>
  if (index === 1) return <div className="relative mx-auto h-44 max-w-md"><SearchCheck className="absolute left-1/2 top-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-violet-600"/><div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-[12px] border-violet-200/70"/><div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full border border-violet-400"/>{["Production","Charges","Billing","Verified"].map((x,i)=><span key={x} className={`absolute ${i===0?'left-[16%] top-[18%]':i===1?'right-[16%] top-[18%]':i===2?'bottom-[16%] left-[16%]':'bottom-[16%] right-[16%]'} rounded-full bg-white/75 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-violet-800 shadow-sm`}>{x}</span>)}</div>
  if (index === 2) return <div className="flex h-44 items-center justify-center gap-3"><div className="text-center"><FileScan className="mx-auto h-12 w-12 text-orange-500"/><p className="mt-2 text-[10px] font-bold uppercase text-slate-600">Documents</p></div><span className="text-2xl text-orange-300">→</span><div className="text-center"><Bot className="mx-auto h-14 w-14 animate-pulse text-amber-500"/><p className="mt-2 text-[10px] font-bold uppercase text-slate-600">AI Extraction</p></div><span className="text-2xl text-orange-300">→</span><div className="text-center"><DatabaseZap className="mx-auto h-12 w-12 text-slate-800"/><p className="mt-2 text-[10px] font-bold uppercase text-slate-600">Structured Data</p></div></div>
  if (index === 3) return <div className="relative mx-auto flex h-44 max-w-md items-end justify-center gap-3 pb-8">{[42,68,54,84,72,96].map((height,i)=><span key={i} className="w-7 rounded-t-full bg-gradient-to-t from-emerald-600 to-cyan-300 shadow-md transition-all duration-500 hover:-translate-y-2" style={{height:`${height}%`}}/>)}<Workflow className="absolute right-[14%] top-2 h-12 w-12 text-emerald-700"/><p className="absolute bottom-0 text-[10px] font-bold uppercase tracking-[.18em] text-emerald-800">Scheduled reporting flow</p></div>
  return <div className="relative mx-auto h-56 max-w-lg">
    <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 shadow-[0_18px_35px_-16px_rgba(37,99,235,.75)]"><div className="grid grid-cols-2 gap-1">{[1,2,3,4].map(x=><span key={x} className="h-5 w-5 rounded-[6px] border-2 border-white/90"/>)}</div></div>
    <div className="absolute left-[10%] top-3 text-center"><div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full bg-blue-100"><div className="absolute inset-2 rounded-full border-[7px] border-blue-500 border-r-amber-400 border-b-transparent"/><span className="absolute inset-0 grid place-items-center pt-1 text-[10px] font-black text-blue-800">87%</span></div><p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-slate-600">Performance</p></div>
    <div className="absolute right-[8%] top-2 text-center"><div className="relative mx-auto h-16 w-20">{[["left-1/2 top-0",'bg-indigo-500'],["left-0 bottom-0",'bg-cyan-500'],["right-0 bottom-0",'bg-amber-400']].map(([position,color],i)=><span key={i} className={`absolute ${position} h-6 w-6 -translate-x-1/2 rounded-full ${color} border-2 border-white shadow-md`}/>)}<span className="absolute left-3 right-3 top-8 h-px bg-indigo-300"/><span className="absolute left-1/2 top-5 h-8 w-px bg-indigo-300"/></div><p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-slate-600">Workforce</p></div>
    <div className="absolute bottom-0 left-[11%] text-center"><div className="relative mx-auto h-16 w-16"><div className="absolute inset-1 rounded-full border-[6px] border-cyan-200 border-l-cyan-500 border-t-cyan-500"/><span className="absolute right-0 top-1 h-0 w-0 border-b-[7px] border-l-[5px] border-r-[5px] border-b-cyan-600 border-l-transparent border-r-transparent rotate-45"/><span className="absolute inset-0 grid place-items-center text-[10px] font-black text-cyan-800">SYNC</span></div><p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-slate-600">Recovery</p></div>
    <div className="absolute bottom-0 right-[8%] text-center"><div className="relative mx-auto h-16 w-20">{[0,1,2].map(i=><div key={i} className="absolute left-1/2 h-6 w-16 -translate-x-1/2 rounded-[50%] border-2 border-indigo-500 bg-indigo-100/80" style={{top:`${i*15}px`}}/>)}<span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_5px_rgba(251,191,36,.2)]"/></div><p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-slate-600">Data Governance</p></div>
  </div>
}
const AutomationEcosystem = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    const nodes = areas.map((area) => document.getElementById(`automation-${area.number}`)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveIndex(Number(entry.target.dataset.index))), { rootMargin: "-40% 0px -40%", threshold: 0 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
  const active = areas[activeIndex]
  const ActiveIcon = active.icon
  return <section className="section-divider relative bg-[linear-gradient(135deg,#e5f4ff_0%,#edf7ff_28%,#fff8d8_62%,#ffe8e5_100%)]"><div className="pointer-events-none absolute inset-0 overflow-hidden"><div className="absolute -right-32 top-[8%] h-[34rem] w-[34rem] rounded-full bg-blue-300/20 blur-3xl"/><div className="absolute -left-32 top-[42%] h-[30rem] w-[30rem] rounded-full bg-yellow-300/20 blur-3xl"/><div className="absolute -right-24 bottom-[4%] h-[32rem] w-[32rem] rounded-full bg-red-300/20 blur-3xl"/></div><div className="relative mx-auto max-w-7xl px-6 py-20"><div className="relative left-1/2 w-[calc(100vw-3rem)] max-w-[1600px] -translate-x-1/2 text-center"><p className="text-sm font-semibold uppercase tracking-[.22em] text-brand-blue">How Our Automation Works</p><h2 className="mx-auto mt-4 max-w-[1500px] font-heading text-3xl font-semibold text-brand-slate md:text-4xl lg:text-[2.65rem]">Connected workflows. Clearer decisions. Stronger control.</h2><p className="mx-auto mt-5 max-w-5xl text-base leading-relaxed text-slate-600 md:text-lg">Each solution captures reliable inputs, validates them against defined rules, routes exceptions to the right teams, and makes operational performance easier to see—helping automation fit naturally into existing revenue cycle operations.</p></div>
    <div className="mt-16 grid items-start gap-12 lg:grid-cols-[.78fr_1.22fr]">
      <div className="sticky top-44 hidden h-[540px] max-h-[calc(100vh-12rem)] min-h-0 lg:block">
        <div className="absolute inset-3 translate-x-3 translate-y-3 rotate-[1.5deg] rounded-[2.25rem] bg-[#f3c64f]/45 shadow-lg" aria-hidden="true" />
        <div className="absolute inset-2 -translate-x-2 translate-y-1 -rotate-[1deg] rounded-[2.25rem] bg-[#d7edf3] shadow-xl" aria-hidden="true" />
        <aside className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[2.25rem] border border-white/20 bg-gradient-to-br from-[#493064] via-[#653451] to-[#8a3e48] px-8 pb-8 pt-11 text-white shadow-[0_28px_60px_-24px_rgba(74,32,68,.62)]">
          <div className="absolute left-10 right-10 top-0 flex justify-between" aria-hidden="true">{[0,1,2,3,4].map((ring)=><span key={ring} className="relative -top-3 h-7 w-3 rounded-full border-2 border-slate-500 bg-slate-200 shadow-md" />)}</div>
          <span className="absolute -right-8 top-4 font-heading text-[12rem] font-black leading-none text-white/[.05]">{active.number}</span>
          <div className="relative">
            <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${active.accent} shadow-lg ring-4 ring-white/10`}><ActiveIcon className="h-7 w-7"/></span>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[.22em] text-amber-200">{active.label}</p>
            <h3 className="mt-4 font-heading text-2xl font-semibold leading-tight xl:text-3xl">{active.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-200 xl:text-base">{active.description}</p>
          </div>
          <div className="relative mt-auto flex gap-2 pt-6">{areas.map((area,index)=><button key={area.number} type="button" onClick={()=>document.getElementById(`automation-${area.number}`)?.scrollIntoView({behavior:'smooth'})} className={`h-2 flex-1 rounded-full transition ${index===activeIndex?'bg-amber-300':'bg-white/20 hover:bg-white/40'}`} aria-label={`Go to ${area.label}`}/>)}</div>
          <span className="absolute bottom-0 right-0 h-16 w-16 bg-gradient-to-br from-transparent from-50% to-white/10" aria-hidden="true" />
        </aside>
      </div>
      <div>{areas.map((area,index)=>{const Icon=area.icon;return <article id={`automation-${area.number}`} data-index={index} key={area.number} className="scroll-mt-36 relative flex flex-col justify-center border-t-[3px] border-slate-400/35 py-14 first:border-t-0 lg:min-h-[520px] lg:py-6 before:absolute before:left-0 before:top-0 before:h-[3px] before:w-32 before:bg-gradient-to-r before:from-brand-blue before:via-brand-gold before:to-brand-red first:before:hidden"><div className="lg:hidden"><p className="text-xs font-bold uppercase tracking-[.2em] text-brand-blue">{area.number} · {area.label}</p><h3 className="mt-4 text-3xl font-semibold text-brand-slate">{area.title}</h3><p className="mt-4 text-slate-600">{area.description}</p></div><div className="relative mt-3 min-h-[176px]"><SceneVisual index={index} area={area}/></div><div className="mx-auto mt-3 grid w-full max-w-2xl gap-x-6 gap-y-3 sm:grid-cols-2">{area.benefits.map((benefit,benefitIndex)=><div key={benefit} className={`group flex items-center gap-3 ${area.benefits.length===5&&benefitIndex===4?'sm:col-span-2 sm:mx-auto sm:max-w-md':''}`}><span className={`shrink-0 font-heading text-2xl xl:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br ${area.accent} transition group-hover:scale-110`}>0{benefitIndex+1}</span><div><span className={`block h-1 w-8 rounded-full bg-gradient-to-r ${area.accent}`}/><p className="mt-2 text-xs font-semibold leading-relaxed text-slate-700 xl:text-sm">{benefit}</p></div></div>)}</div></article>})}</div>
    </div>
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

  <section className="section-divider overflow-hidden bg-[#fffaf1]">
    <div className="mx-auto w-full max-w-[1700px] px-5 py-16 md:px-10 lg:px-16 xl:px-20">
      <div className="relative isolate w-full px-5 py-9 md:px-12 md:py-12 lg:px-14">
        <div className="absolute inset-x-0 inset-y-2 -z-10 rounded-[4rem_1.5rem_4rem_1.5rem] bg-[linear-gradient(110deg,#8bc7cd_0%,#d8d4c8_52%,#e4df75_100%)] shadow-[0_24px_70px_-32px_rgba(48,91,103,.55)] md:-skew-x-2" aria-hidden="true" />
        <div className="relative grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_260px] xl:gap-16">
          <div>
            <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#e2543d] text-white shadow-lg"><LockKeyhole className="h-5 w-5" /></span><p className="text-xs font-bold uppercase tracking-[.24em] text-[#087da2]">People + Technology</p></div>
            <h2 className="mt-5 max-w-5xl font-heading text-3xl font-semibold text-slate-900 md:text-4xl">Automation That Works With Your Operations</h2>
            <p className="mt-5 max-w-5xl text-lg leading-relaxed text-slate-700">At Opus BPO, automation is not about replacing people—it is about <strong className="text-slate-950">eliminating repetitive work, strengthening controls, and enabling teams to focus on higher-value activities</strong>.</p>
            <p className="mt-4 max-w-5xl leading-relaxed text-slate-700">Our automation solutions are developed and maintained with the same focus on <strong className="text-slate-950">data security, confidentiality, compliance, and operational integrity</strong> that governs our client operations.</p>
          </div>
          <div className="relative mx-auto grid h-48 w-48 place-items-center rounded-full border-[12px] border-white/55 bg-[#17647a]/90 shadow-[0_22px_45px_-18px_rgba(22,75,91,.65)] backdrop-blur-md">
            <ShieldCheck className="h-20 w-20 text-white" />
            <span className="absolute -bottom-3 rounded-full bg-amber-300 px-5 py-2 text-[10px] font-black uppercase tracking-[.18em] text-slate-900 shadow-lg">Secure by design</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

export default AboutTechnology
